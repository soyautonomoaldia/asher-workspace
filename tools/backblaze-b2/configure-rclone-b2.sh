#!/usr/bin/env bash
set -Eeuo pipefail

RCLONE_BIN="${RCLONE_BIN:-/home/salamirin/.local/bin/rclone}"
RCLONE_CONFIG="/home/salamirin/.config/rclone/rclone.conf"
REMOTE_NAME="${REMOTE_NAME:-b2-openclaw}"
ENV_FILE="/home/salamirin/.openclaw/nightly-protection.env"

if [[ ! -x "${RCLONE_BIN}" ]]; then
  echo "rclone not executable at ${RCLONE_BIN}" >&2
  exit 1
fi

read -rp "Backblaze bucket name: " B2_BUCKET
read -rp "Backblaze keyID: " B2_KEY_ID
read -rsp "Backblaze applicationKey: " B2_APPLICATION_KEY
echo

B2_BUCKET="$(printf '%s' "${B2_BUCKET}" | tr -d '[:space:]')"
B2_KEY_ID="$(printf '%s' "${B2_KEY_ID}" | tr -d '[:space:]')"
B2_APPLICATION_KEY="$(printf '%s' "${B2_APPLICATION_KEY}" | tr -d '[:space:]')"

if [[ -z "${B2_BUCKET}" || -z "${B2_KEY_ID}" || -z "${B2_APPLICATION_KEY}" ]]; then
  echo "Bucket, keyID and applicationKey are required." >&2
  exit 1
fi

"${RCLONE_BIN}" config delete "${REMOTE_NAME}" >/dev/null 2>&1 || true
"${RCLONE_BIN}" config create "${REMOTE_NAME}" b2 \
  account "${B2_KEY_ID}" \
  key "${B2_APPLICATION_KEY}"

unset B2_KEY_ID B2_APPLICATION_KEY

mkdir -p "$(dirname "${RCLONE_CONFIG}")"
chmod 700 "$(dirname "${RCLONE_CONFIG}")"
chmod 600 "${RCLONE_CONFIG}"

if ! "${RCLONE_BIN}" lsd "${REMOTE_NAME}:" >/dev/null; then
  echo "Backblaze authentication failed. Recreate the Application Key and rerun this helper." >&2
  exit 1
fi

if ! "${RCLONE_BIN}" lsf "${REMOTE_NAME}:${B2_BUCKET}" >/dev/null; then
  echo "Backblaze bucket is not readable: ${B2_BUCKET}" >&2
  echo "Create the bucket in Backblaze first, or use the exact existing bucket name." >&2
  exit 1
fi

cat > "${ENV_FILE}" <<EOF
TZ=Europe/Madrid
B2_BACKUP_DIR=${REMOTE_NAME}:${B2_BUCKET}/nightly
EOF
chmod 600 "${ENV_FILE}"

echo "Backblaze B2 configured as ${REMOTE_NAME}:${B2_BUCKET}/nightly"
echo "Environment file written to ${ENV_FILE}"
