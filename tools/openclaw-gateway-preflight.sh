#!/usr/bin/env bash
set -euo pipefail

CONFIG_FILE="${OPENCLAW_CONFIG_FILE:-/home/salamirin/.openclaw/openclaw.json}"

if [[ ! -r "$CONFIG_FILE" ]]; then
  echo "[openclaw-preflight] config file is not readable: $CONFIG_FILE" >&2
  exit 78
fi

discord_required="$(
  node - "$CONFIG_FILE" <<'NODE'
const fs = require("fs");
const configPath = process.argv[2];
const cfg = JSON.parse(fs.readFileSync(configPath, "utf8"));
const discordPlugin = cfg?.plugins?.entries?.discord?.enabled !== false;
const discordChannel = cfg?.channels?.discord?.enabled === true;
const tokenRef = cfg?.channels?.discord?.token;
const requiresEnvToken =
  discordPlugin &&
  discordChannel &&
  tokenRef?.source === "env" &&
  tokenRef?.id === "DISCORD_BOT_TOKEN";
process.stdout.write(requiresEnvToken ? "yes" : "no");
NODE
)"

if [[ "$discord_required" == "yes" && -z "${DISCORD_BOT_TOKEN:-}" ]]; then
  echo "[openclaw-preflight] Discord is enabled but DISCORD_BOT_TOKEN is missing from the gateway environment." >&2
  echo "[openclaw-preflight] Refusing to start to avoid a systemd restart loop. Check /home/salamirin/.openclaw/gateway.systemd.env." >&2
  exit 78
fi

echo "[openclaw-preflight] ok"
