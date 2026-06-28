#!/usr/bin/env bash
set -euo pipefail

SECRET_FILE="${NOTION_FITNESS_ENV:-/home/salamirin/.openclaw/private/notion-fitness.env}"
DEFAULT_TARGET_PAGE="https://app.notion.com/p/ASESOR-FITNESS-SALVA-38cc4abf41a780399ec4c7735f306c9f"

mkdir -p "$(dirname "$SECRET_FILE")"
umask 077

printf "Notion Internal Integration Secret: "
IFS= read -r -s notion_token
printf "\n"

if [[ -z "$notion_token" ]]; then
  echo "Token empty. Aborting." >&2
  exit 1
fi

printf "Target Notion page URL [%s]: " "$DEFAULT_TARGET_PAGE"
IFS= read -r target_page
target_page="${target_page:-$DEFAULT_TARGET_PAGE}"

if [[ -z "$target_page" ]]; then
  echo "Target page empty. Aborting." >&2
  exit 1
fi

{
  printf "# Private Notion fitness integration env. Do not commit or paste in chats.\n"
  printf "NOTION_API_TOKEN=%q\n" "$notion_token"
  printf "NOTION_TARGET_PAGE=%q\n" "$target_page"
} > "$SECRET_FILE"

chmod 600 "$SECRET_FILE"

echo "Saved private Notion fitness env to: $SECRET_FILE"
echo "Permissions:"
ls -l "$SECRET_FILE"
