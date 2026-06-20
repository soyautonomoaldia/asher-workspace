#!/usr/bin/env bash
set -euo pipefail

SINCE="${1:-2 hours ago}"
UNIT="${OPENCLAW_GATEWAY_UNIT:-openclaw-gateway.service}"

if LOGS="$(journalctl --user -u "$UNIT" --since "$SINCE" --no-pager 2>/dev/null)"; then
  SOURCE="user:$UNIT"
elif LOGS="$(journalctl -u "$UNIT" --since "$SINCE" --no-pager 2>/dev/null)"; then
  SOURCE="system:$UNIT"
else
  echo "CRITICAL: no puedo leer journalctl para $UNIT"
  exit 2
fi

count() {
  local pattern="$1"
  grep -Eic "$pattern" <<<"$LOGS" || true
}

last_match() {
  local pattern="$1"
  grep -Ei "$pattern" <<<"$LOGS" | tail -1 | sed -E 's/[[:space:]]+/ /g' || true
}

codex_limit="$(count 'usage limit|rate_limit')"
harness_error="$(count 'Requested agent harness .* does not support|provider is not one of: codex')"
compaction_403="$(count 'Preflight compaction required|Summarization failed|status=403|Cloudflare')"
telegram_in="$(count '\[telegram\] Inbound message')"
telegram_out="$(count '\[telegram\].*(outbound send ok|sendMessage ok)')"
gateway_start="$(count '\[gateway\] http server listening')"
embedded_fail="$(count 'Embedded agent failed before reply')"

severity="OK"
if (( harness_error > 0 || codex_limit > 0 || embedded_fail > 0 )); then
  severity="CRITICAL"
elif (( compaction_403 > 0 || gateway_start > 1 )); then
  severity="WARN"
fi

echo "$severity: OpenClaw Telegram health since '$SINCE' ($SOURCE)"
echo "- Telegram inbound: $telegram_in"
echo "- Telegram outbound ok: $telegram_out"
echo "- Gateway starts: $gateway_start"
echo "- Codex limit/rate-limit errors: $codex_limit"
echo "- Harness/model errors: $harness_error"
echo "- Compaction/403 errors: $compaction_403"
echo "- Agent failed before reply: $embedded_fail"

if [[ "$severity" != "OK" ]]; then
  echo
  echo "Last error line:"
  last_match 'usage limit|rate_limit|Requested agent harness|provider is not one of: codex|Preflight compaction required|Summarization failed|status=403|Embedded agent failed before reply'
  echo "Last Telegram/gateway line:"
  last_match '\[gateway\] http server listening|\[telegram\] Inbound message|\[telegram\].*(outbound send ok|sendMessage ok)'
fi

case "$severity" in
  OK) exit 0 ;;
  WARN) exit 1 ;;
  CRITICAL) exit 2 ;;
esac
