#!/usr/bin/env bash
set -euo pipefail

TZ=Europe/Madrid
export TZ

STATE_FILE="/home/salamirin/.openclaw/workspace/memory/heartbeat-state.json"
LOG_FILE="/home/salamirin/.openclaw/logs/local-heartbeat.log"
GATEWAY_UNIT="openclaw-gateway.service"
DISK_PATH="/home/salamirin/.openclaw"
DISK_WARN_PERCENT=85

mkdir -p "$(dirname "$STATE_FILE")" "$(dirname "$LOG_FILE")"

timestamp="$(date --iso-8601=seconds)"
status="OK"
summary="OK: heartbeat silencioso ejecutado sin incidencias."
declare -a warnings=()

warn() {
  warnings+=("$1")
  status="WARN"
}

gateway_active=false
if systemctl --user is-active --quiet "$GATEWAY_UNIT"; then
  gateway_active=true
else
  warn "gateway caido o no activo en systemd user"
fi

gateway_loopback_only=true
if command -v ss >/dev/null 2>&1; then
  gateway_lines="$(ss -ltnpH 2>/dev/null | awk '/:(18789|39445)[[:space:]]/ {print}' || true)"
  if [[ -n "$gateway_lines" ]]; then
    while IFS= read -r line; do
      [[ -z "$line" ]] && continue
      local_addr="$(awk '{print $4}' <<<"$line")"
      if [[ "$local_addr" == 127.0.0.1:* || "$local_addr" == "[::1]:"* || "$local_addr" == localhost:* ]]; then
        :
      else
        gateway_loopback_only=false
        warn "gateway escuchando fuera de loopback: $local_addr"
      fi
    done <<<"$gateway_lines"
  elif [[ "$gateway_active" == true ]]; then
    warn "gateway activo pero sin listener esperado en 18789/39445"
  fi
else
  warn "no se puede verificar loopback: falta ss"
fi

ssh_listening=false
if command -v ss >/dev/null 2>&1 && ss -ltnH 2>/dev/null | awk '{print $4}' | grep -Eq '(^|:)(22)$'; then
  ssh_listening=true
  warn "SSH escuchando inesperadamente"
fi

disk_usage_percent="$(df -P "$DISK_PATH" | awk 'NR==2 {gsub(/%/,"",$5); print $5}')"
if [[ -z "$disk_usage_percent" ]]; then
  disk_usage_percent=0
  warn "no se pudo leer uso de disco"
elif (( disk_usage_percent >= DISK_WARN_PERCENT )); then
  warn "disco por encima de ${DISK_WARN_PERCENT}%: ${disk_usage_percent}%"
fi

old_openclaw_hooks_cpu=false
if ps -eo pid=,pcpu=,etimes=,args= | awk '$0 ~ /openclaw-hooks/ && $2+0 >= 50 && $3+0 >= 300 {found=1} END {exit found ? 0 : 1}'; then
  old_openclaw_hooks_cpu=true
  warn "proceso openclaw-hooks con CPU alta sostenida"
fi

gateway_recent_log=true
if ! journalctl --user -u "$GATEWAY_UNIT" --since "2 hours ago" --no-pager >/tmp/openclaw-local-heartbeat-journal.$$ 2>/dev/null; then
  gateway_recent_log=false
  warn "no se pudo leer journal del gateway"
elif [[ ! -s /tmp/openclaw-local-heartbeat-journal.$$ ]]; then
  gateway_recent_log=false
  warn "sin log reciente del gateway en las ultimas 2 horas"
fi

repeated_gateway_errors=false
if [[ -s /tmp/openclaw-local-heartbeat-journal.$$ ]]; then
  error_lines="$(grep -Ei 'errorCode=|ERROR|Unhandled|exception|failed' /tmp/openclaw-local-heartbeat-journal.$$ \
    | grep -Evi 'errorCode=INVALID_REQUEST|nativeHook.invoke|tool-policy|closed before connect' \
    || true)"
  error_count="$(printf '%s\n' "$error_lines" | sed '/^$/d' | wc -l | tr -d ' ')"
  if (( error_count >= 2 )); then
    repeated_gateway_errors=true
    warn "errores repetidos en logs del gateway en las ultimas 2 horas: ${error_count}"
  fi
fi
rm -f /tmp/openclaw-local-heartbeat-journal.$$

stuck_sessions=false
if journalctl --user -u "$GATEWAY_UNIT" --since "30 minutes ago" --no-pager 2>/dev/null \
  | grep 'long-running session' \
  | grep -Eq 'lastProgressAge=([6-9][0-9]{2}|[0-9]{4,})s'; then
  stuck_sessions=true
  warn "sesiones long-running detectadas en los ultimos 30 minutos"
fi

heartbeat_silent=true
notify=false
if [[ "$status" == "WARN" ]]; then
  notify=true
  joined="$(printf '%s; ' "${warnings[@]}")"
  joined="${joined%; }"
  summary="WARN: ${joined}. Impacto: revisar estabilidad/ruido operativo. Siguiente accion recomendada: inspeccionar logs antes de reactivar notificaciones."
fi

python3 - "$STATE_FILE" "$timestamp" "$status" "$summary" "$gateway_active" "$gateway_loopback_only" "$heartbeat_silent" "$stuck_sessions" "$old_openclaw_hooks_cpu" "$disk_usage_percent" "$ssh_listening" "$notify" "$gateway_recent_log" "$repeated_gateway_errors" "${warnings[@]}" <<'PY'
import json
import sys
from pathlib import Path

(
    state_file,
    timestamp,
    status,
    summary,
    gateway_active,
    gateway_loopback_only,
    heartbeat_silent,
    stuck_sessions,
    old_openclaw_hooks_cpu,
    disk_usage_percent,
    ssh_listening,
    notify,
    gateway_recent_log,
    repeated_gateway_errors,
    *warnings,
) = sys.argv[1:]

def as_bool(value):
    return value.lower() == "true"

data = {
    "lastCheck": {
        "timestamp": timestamp,
        "status": status,
        "summary": summary,
        "checks": {
            "gatewayActive": as_bool(gateway_active),
            "gatewayLoopbackOnly": as_bool(gateway_loopback_only),
            "heartbeatSilent": as_bool(heartbeat_silent),
            "stuckSessions": as_bool(stuck_sessions),
            "oldOpenclawHooksCpu": as_bool(old_openclaw_hooks_cpu),
            "diskUsagePercent": int(disk_usage_percent),
            "sshListening": as_bool(ssh_listening),
            "notify": as_bool(notify),
            "gatewayRecentLog": as_bool(gateway_recent_log),
            "repeatedGatewayErrors": as_bool(repeated_gateway_errors),
        },
        "warnings": warnings,
        "executedExternalActions": False,
    }
}

path = Path(state_file)
tmp = path.with_suffix(path.suffix + ".tmp")
tmp.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
tmp.replace(path)
PY

printf '%s %s\n' "$timestamp" "$summary" >> "$LOG_FILE"
echo "$summary"
