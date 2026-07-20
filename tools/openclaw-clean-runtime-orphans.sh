#!/usr/bin/env bash
set -euo pipefail

user_systemd_pid="$(pgrep -u "$USER" -x systemd | head -n 1 || true)"

if [[ -z "$user_systemd_pid" ]]; then
  echo "[openclaw-clean] user systemd process not found"
  exit 1
fi

mapfile -t orphan_pids < <(
  ps -u "$USER" -o pid=,ppid=,comm= |
    awk -v ppid="$user_systemd_pid" '$2 == ppid && ($3 == "openclaw" || $3 == "openclaw-hooks") {print $1}'
)

if [[ "${#orphan_pids[@]}" -eq 0 ]]; then
  echo "[openclaw-clean] no openclaw runtime orphans found"
  exit 0
fi

echo "[openclaw-clean] terminating ${#orphan_pids[@]} runtime orphan(s): ${orphan_pids[*]}"
for pid in "${orphan_pids[@]}"; do
  kill -TERM "$pid" 2>/dev/null || true
done

sleep 1

for pid in "${orphan_pids[@]}"; do
  if kill -0 "$pid" 2>/dev/null; then
    kill -KILL "$pid" 2>/dev/null || true
  fi
done

remaining=0
zombies=0
for pid in "${orphan_pids[@]}"; do
  stat="$(ps -p "$pid" -o stat= 2>/dev/null | awk '{print $1}' || true)"
  if [[ -z "$stat" ]]; then
    continue
  fi
  if [[ "$stat" == Z* ]]; then
    zombies=$((zombies + 1))
  else
    remaining=$((remaining + 1))
  fi
done

echo "[openclaw-clean] remaining live from target set: $remaining"
echo "[openclaw-clean] remaining zombies from target set: $zombies"
if [[ "$remaining" -gt 0 ]]; then
  exit 1
fi
