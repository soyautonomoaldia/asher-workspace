#!/usr/bin/env bash
set -euo pipefail

SECRET_FILE="${NOTION_FITNESS_ENV:-/home/salamirin/.openclaw/private/notion-fitness.env}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
NODE_SCRIPT="$SCRIPT_DIR/create_fitness_dashboard_notion.mjs"

if [[ ! -f "$SECRET_FILE" ]]; then
  echo "Missing private env file: $SECRET_FILE" >&2
  echo "Run first:" >&2
  echo "  $SCRIPT_DIR/setup_notion_fitness_env.sh" >&2
  exit 1
fi

set -a
# shellcheck disable=SC1090
. "$SECRET_FILE"
set +a

if [[ "${1:-}" == "--rebuild" ]]; then
  export NOTION_REBUILD=1
else
  unset NOTION_REBUILD || true
fi

node "$NODE_SCRIPT"
