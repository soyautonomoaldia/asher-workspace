#!/usr/bin/env bash
set -euo pipefail

TZ=Europe/Madrid
export TZ

STATE_FILE="/home/salamirin/.openclaw/workspace/memory/heartbeat-state.json"
POSTCHECK_STATE_FILE="/home/salamirin/.openclaw/workspace/memory/heartbeat-postcheck-state.json"
LOG_FILE="/home/salamirin/.openclaw/logs/local-heartbeat-postcheck.log"
GATEWAY_UNIT="openclaw-gateway.service"
HEARTBEAT_UNIT="openclaw-local-heartbeat.service"
CHECK_DATE="${1:-$(date +%F)}"

mkdir -p "$(dirname "$POSTCHECK_STATE_FILE")" "$(dirname "$LOG_FILE")"

timestamp="$(date --iso-8601=seconds)"
status="OK"
summary="OK: postcheck heartbeat local sin incidencias."
declare -a warnings=()

warn() {
  warnings+=("$1")
  status="WARN"
}

if [[ ! -s "$STATE_FILE" ]]; then
  warn "no existe heartbeat-state.json o esta vacio"
else
  last_check="$(python3 - "$STATE_FILE" <<'PY'
import json
import sys
from pathlib import Path

try:
    data = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    print(data.get("lastCheck", {}).get("timestamp", ""))
except Exception:
    print("")
PY
)"
  last_status="$(python3 - "$STATE_FILE" <<'PY'
import json
import sys
from pathlib import Path

try:
    data = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    print(data.get("lastCheck", {}).get("status", ""))
except Exception:
    print("")
PY
)"
  if [[ "$last_check" != "$CHECK_DATE"* ]]; then
    warn "heartbeat-state.json no se actualizo para ${CHECK_DATE}"
  fi
  if [[ "$last_status" != "OK" ]]; then
    warn "ultimo heartbeat no quedo en OK: ${last_status:-desconocido}"
  fi
fi

if ! systemctl --user is-active --quiet openclaw-local-heartbeat.timer; then
  warn "timer local de heartbeat no esta activo"
fi

heartbeat_exec_status="$(systemctl --user show "$HEARTBEAT_UNIT" -p ExecMainStatus --value 2>/dev/null || true)"
heartbeat_result="$(systemctl --user show "$HEARTBEAT_UNIT" -p Result --value 2>/dev/null || true)"
if [[ "$heartbeat_exec_status" != "0" || "$heartbeat_result" != "success" ]]; then
  warn "ultima ejecucion systemd del heartbeat no fue success/0"
fi

if ! systemctl --user is-active --quiet "$GATEWAY_UNIT"; then
  warn "gateway no esta activo"
fi

internal_cron_state="unknown"
if [[ -s "/home/salamirin/.openclaw/state/openclaw.sqlite" ]]; then
  internal_cron_state="$(python3 - <<'PY'
import sqlite3

path = "/home/salamirin/.openclaw/state/openclaw.sqlite"
try:
    con = sqlite3.connect(f"file:{path}?mode=ro", uri=True, timeout=5)
    cur = con.cursor()
    enabled, scheduled = cur.execute(
        "select "
        "sum(case when enabled = 1 then 1 else 0 end), "
        "sum(case when enabled = 1 and next_run_at_ms is not null then 1 else 0 end) "
        "from cron_jobs"
    ).fetchone()
    enabled = int(enabled or 0)
    scheduled = int(scheduled or 0)
    print(f"enabled={enabled},scheduled={scheduled}")
except Exception as exc:
    print(f"sqlite-error:{type(exc).__name__}")
PY
)"
  if [[ "$internal_cron_state" != "enabled=0,scheduled=0" ]]; then
    warn "cron interno no esta inerte: ${internal_cron_state}"
  fi
else
  warn "no se puede verificar cron interno: falta SQLite local"
fi

if journalctl --user -u "$GATEWAY_UNIT" --since "${CHECK_DATE} 04:20" --until "${CHECK_DATE} 04:50" --no-pager 2>/dev/null \
  | grep -Eq '@heartbeat|Telegram.*heartbeat|heartbeat.*Telegram'; then
  warn "aparece referencia a notificacion heartbeat/Telegram tras la ejecucion"
fi

if [[ "$status" == "WARN" ]]; then
  joined="$(printf '%s; ' "${warnings[@]}")"
  joined="${joined%; }"
  summary="WARN: ${joined}. Siguiente accion recomendada: revisar antes de dar heartbeat por estable."
fi

python3 - "$POSTCHECK_STATE_FILE" "$timestamp" "$CHECK_DATE" "$status" "$summary" "$internal_cron_state" "${warnings[@]}" <<'PY'
import json
import sys
from pathlib import Path

state_file, timestamp, check_date, status, summary, internal_cron_state, *warnings = sys.argv[1:]
data = {
    "lastPostcheck": {
        "timestamp": timestamp,
        "checkDate": check_date,
        "status": status,
        "summary": summary,
        "checks": {
            "internalCronState": internal_cron_state,
            "executedExternalActions": False,
        },
        "warnings": warnings,
    }
}
path = Path(state_file)
tmp = path.with_suffix(path.suffix + ".tmp")
tmp.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
tmp.replace(path)
PY

printf '%s %s\n' "$timestamp" "$summary" >> "$LOG_FILE"
echo "$summary"
