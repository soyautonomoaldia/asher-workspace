#!/usr/bin/env bash
set -euo pipefail

if [[ "${EUID}" -ne 0 ]]; then
  echo "Run with sudo:"
  echo "  sudo $0"
  echo
  echo "Optional aggressive service trim:"
  echo "  sudo DISABLE_OPTIONAL_SERVICES=1 $0"
  exit 1
fi

TS="$(date +%Y%m%d-%H%M%S)"
BACKUP_DIR="/home/salamirin/.openclaw/backups/system-opt-${TS}"
SYSCTL_FILE="/etc/sysctl.d/99-openclaw-low-resource.conf"

mkdir -p "$BACKUP_DIR"

echo "[1/4] Backing up relevant config to $BACKUP_DIR"
cp -a /etc/systemd/system/openclaw.service "$BACKUP_DIR/openclaw.service" 2>/dev/null || true
cp -a "$SYSCTL_FILE" "$BACKUP_DIR/99-openclaw-low-resource.conf.bak" 2>/dev/null || true

echo "[2/4] Disabling duplicate or noisy system services"
systemctl disable --now openclaw.service 2>/dev/null || true
systemctl reset-failed openclaw.service 2>/dev/null || true

systemctl disable --now casper-md5check.service 2>/dev/null || true
systemctl reset-failed casper-md5check.service 2>/dev/null || true

systemctl disable --now NetworkManager-wait-online.service 2>/dev/null || true
systemctl reset-failed NetworkManager-wait-online.service 2>/dev/null || true

if [[ "${DISABLE_OPTIONAL_SERVICES:-0}" == "1" ]]; then
  echo "[2b/4] Disabling optional desktop services requested by DISABLE_OPTIONAL_SERVICES=1"
  for unit in \
    bluetooth.service \
    cups.service cups.socket cups.path cups-browsed.service \
    avahi-daemon.service avahi-daemon.socket \
    ModemManager.service
  do
    systemctl disable --now "$unit" 2>/dev/null || true
    systemctl reset-failed "$unit" 2>/dev/null || true
  done
else
  echo "[2b/4] Optional services left untouched: bluetooth, cups, avahi, ModemManager"
fi

echo "[3/4] Applying conservative memory/SSD-friendly sysctl settings"
cat > "$SYSCTL_FILE" <<'EOF'
# OpenClaw low-resource PC tuning.
# Conservative defaults for SSD + 8 GB RAM + weak 2-core CPU.
vm.swappiness = 10
vm.vfs_cache_pressure = 50
vm.dirty_background_ratio = 5
vm.dirty_ratio = 15
EOF

sysctl --system >/dev/null

echo "[4/4] Final status"
systemctl --failed --no-pager || true
echo
sysctl vm.swappiness vm.vfs_cache_pressure vm.dirty_background_ratio vm.dirty_ratio
echo
echo "Done. Reboot recommended when convenient."
