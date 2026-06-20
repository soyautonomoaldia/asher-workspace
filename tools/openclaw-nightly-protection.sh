#!/usr/bin/env bash
set -Eeuo pipefail

export TZ="${TZ:-Europe/Madrid}"
umask 077

RUN_ID="$(date +%Y%m%d-%H%M%S)"
WORKSPACE="/home/salamirin/.openclaw/workspace"
OPENCLAW_HOME="/home/salamirin/.openclaw"
BACKUP_DIR="/home/salamirin/Backups/openclaw/nightly"
LOG_DIR="${OPENCLAW_HOME}/logs/protection"
PASSPHRASE_FILE="${OPENCLAW_HOME}/secrets/backup-encryption-openclaw-full-2026-06-01_16-22-56.passphrase"
RETENTION_DAYS="${RETENTION_DAYS:-21}"

mkdir -p "${BACKUP_DIR}" "${LOG_DIR}"
LOG_FILE="${LOG_DIR}/nightly-protection-${RUN_ID}.log"
exec > >(tee -a "${LOG_FILE}") 2>&1

echo "[$(date --iso-8601=seconds)] starting OpenClaw nightly protection"

on_error() {
  local exit_code=$?
  echo "[$(date --iso-8601=seconds)] FAILED exit_code=${exit_code}"
  exit "${exit_code}"
}
trap on_error ERR

require_file() {
  local path="$1"
  if [[ ! -r "${path}" ]]; then
    echo "Required file is not readable: ${path}" >&2
    return 1
  fi
}

git_snapshot_repo() {
  local repo="$1"
  local label="$2"

  if [[ ! -d "${repo}/.git" ]]; then
    echo "[git:${label}] skipped, no .git directory"
    return 0
  fi

  echo "[git:${label}] snapshot start"
  git -C "${repo}" config user.name "Asher OpenClaw Backup"
  git -C "${repo}" config user.email "asher-openclaw-backup@localhost"
  git -C "${repo}" add -A

  if git -C "${repo}" diff --cached --quiet; then
    echo "[git:${label}] no staged changes"
  else
    git -C "${repo}" commit -m "nightly snapshot ${RUN_ID}"
    echo "[git:${label}] committed nightly snapshot"
  fi

  if git -C "${repo}" remote get-url origin >/dev/null 2>&1; then
    git -C "${repo}" push origin HEAD
    echo "[git:${label}] pushed to origin"
  else
    echo "[git:${label}] no origin remote, push skipped"
  fi
}

run_git_layer() {
  echo "[$(date --iso-8601=seconds)] layer 1: git snapshots"
  git_snapshot_repo "${WORKSPACE}" "workspace"
  git_snapshot_repo "${WORKSPACE}/saas" "saas"
  git_snapshot_repo "${WORKSPACE}/producto" "producto"
  git_snapshot_repo "${WORKSPACE}/tecnico" "tecnico"
  git_snapshot_repo "${WORKSPACE}/ux" "ux"
  echo "[$(date --iso-8601=seconds)] layer 1 complete"
}

run_encrypted_backup_layer() {
  echo "[$(date --iso-8601=seconds)] layer 2: encrypted backup"
  require_file "${PASSPHRASE_FILE}"
  chmod 700 "${OPENCLAW_HOME}/secrets"
  chmod 600 "${PASSPHRASE_FILE}"

  local output="${BACKUP_DIR}/openclaw-nightly-${RUN_ID}.tar.gz.gpg"
  local tmp_output="${output}.tmp"
  local checksum="${output}.sha256"
  rm -f "${tmp_output}"

  tar -C "/home/salamirin" \
    --exclude=".openclaw/backups" \
    --exclude=".openclaw/npm" \
    --exclude=".openclaw/agents/*/sessions" \
    --exclude=".openclaw/agents/*/agent/codex-home/*.sqlite" \
    --exclude=".openclaw/agents/*/agent/codex-home/*.sqlite-*" \
    --exclude=".openclaw/logs/protection" \
    --exclude=".openclaw/**/*.sock" \
    --exclude=".openclaw/**/*.tmp" \
    -czf - ".openclaw" \
    | gpg --batch --yes --pinentry-mode loopback \
        --passphrase-file "${PASSPHRASE_FILE}" \
        --symmetric --cipher-algo AES256 \
        --output "${tmp_output}"

  mv "${tmp_output}" "${output}"
  sha256sum "${output}" > "${checksum}"

  gpg --batch --yes --pinentry-mode loopback \
    --passphrase-file "${PASSPHRASE_FILE}" \
    --decrypt "${output}" \
    | tar -tzf - >/dev/null

  find "${BACKUP_DIR}" -maxdepth 1 -type f \
    \( -name "openclaw-nightly-*.tar.gz.gpg" -o -name "openclaw-nightly-*.tar.gz.gpg.sha256" \) \
    -mtime "+${RETENTION_DAYS}" -delete

  echo "[backup] created ${output}"
  echo "[backup] checksum ${checksum}"
  echo "[$(date --iso-8601=seconds)] layer 2 complete"
}

run_git_layer
run_encrypted_backup_layer

echo "[$(date --iso-8601=seconds)] OpenClaw nightly protection complete"
