# AD Reset Log

## 2026-06-02

Salva authorized a non-destructive active-context reset.

Actions completed:

- archived pre-reset AD project material out of active paths
- archived old workspace memory directories
- archived old sessions for non-main AD agents
- rewrote Asher/main profile files
- rewrote active AD agent profile files
- created `ad-v1/AD_MVP_SOURCE_OF_TRUTH_V02.md`

Not completed intentionally:

- active main session folders were not moved while this WebChat session is alive, to avoid interrupting delivery
- credentials, auth profiles and security quarantine were not touched

Next operational step:

- close this current session and start a fresh main session after Salva confirms the reset result

## Spawn Attempt

After Salva authorized the clean-session start, OpenClaw rejected `sessions_spawn` from the current main session because the current configuration both forbids `agentId` and requires explicit `agentId`.

No configuration was changed for this spawn attempt.

Prepared fallback prompt:

- `ad-v1/START_CLEAN_SESSION_PROMPT.md`
