# OpenClaw Protection Manifest

## Layer 1: Git snapshots

These paths are versioned by local Git during the nightly protection run:

- `asher-workspace`: `/home/salamirin/.openclaw/workspace`
- `growth`: `/home/salamirin/.openclaw/workspace/growth`
- `saas`: `/home/salamirin/.openclaw/workspace/saas`
- `producto`: `/home/salamirin/.openclaw/workspace/producto`
- `tecnico`: `/home/salamirin/.openclaw/workspace/tecnico`
- `ux`: `/home/salamirin/.openclaw/workspace/ux`

The root `asher-workspace` repo includes the main Asher workspace files and shared project material such as:

- `AGENTS.md`, `MEMORY.md`, `SOUL.md`, `TOOLS.md`, `USER.md`
- `memory/`
- `nuevo_AD_V01/`
- `ad-v1/`
- `skills/`
- `tools/`

The sub-workspaces are excluded from the root repo and versioned by their own repos to avoid duplicate ownership.

## Layer 1: GitHub remotes

GitHub push is enabled through private repositories under `soyautonomoaldia`:

- `asher-workspace`
- `asher-growth`
- `asher-saas`
- `asher-producto`
- `asher-tecnico`
- `asher-ux`

The remotes use SSH authentication through the local key `~/.ssh/openclaw_asher_github`.

## Layer 2: encrypted backup

The encrypted backup covers `/home/salamirin/.openclaw` with explicit exclusions for bulky or unstable runtime data:

- historical `.openclaw/backups`
- `.openclaw/npm`
- Codex session directories
- live Codex SQLite logs/state files
- protection logs
- transient sockets/tmp files

Sensitive runtime files, credentials, secrets and OpenClaw configuration are not put into Layer 1 Git. They are covered only by the encrypted backup.

## Important boundary

Asher's operational runtime under `/home/salamirin/.openclaw/agents/main/agent/codex-home` is deliberately not a Layer 1 Git repo because it contains auth/runtime/session material. Curated Asher continuity lives in the root `asher-workspace`; raw runtime state belongs in Layer 2 encrypted backup.
