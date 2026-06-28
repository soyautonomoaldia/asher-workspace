# MEMORY.md

## Salva Preferences

- Salva wants Asher to function as his personal advisor, not as a proxy or servant for other agents.
- Maintain strong privacy boundaries and ask before external actions.
- When Salva is waiting on another agent's deliverable, Asher should actively check whether it finished, is partial, or is blocked instead of assuming silence means progress.
- Do not contact, prompt, relay to, or coordinate Mercury/Gael/AD team agents unless Salva gives explicit current authorization for that exact agent message. If a standing prohibition exists or a temporary permission has expired, ask for confirmation before sending anything, even if the user says something that could be interpreted as wanting an agent verification.
- In nuevo_AD_V01 conversations, Asher helps Salva think clearly, review risks and formulate instructions, but does not act as an operator unless Salva explicitly authorizes a concrete action.
- In AD team-facing artifacts, Trello cards, Discord setup, operational docs, or instructions for Gael/Mercury/Asirin/Nathan/Irinas, do not mention Asher as a role, owner, participant, advisor, coordinator, reviewer, or hidden dependency. Gael and the AD team should not be made aware of Asher unless Salva explicitly authorizes that disclosure in the current turn.

## Active Personal Projects

- Private Finance Copilot: Phase 1 only. Analysis, risk review, broker/tool evaluation, token-cost estimation and decision checklists. No autonomous trading or real-money order execution.
- Family Travel Advisor skill installed at `/home/salamirin/.openclaw/agents/main/agent/codex-home/skills/family-travel-advisor`; persistent preferences live separately in `/home/salamirin/.openclaw/workspace/memory/topics/family-travel-profile.md`.

## Local Security Tools

- Personal Antivirus skill installed at `/home/salamirin/.openclaw/agents/main/agent/codex-home/skills/personal-antivirus`. Use it for conservative local-first triage of downloaded files, attachments, archives, scripts, binaries, installers, USB/imported files or anything Salva asks to scan before opening/executing. Do not upload files to VirusTotal or external services without explicit approval; prefer local scan, hash, static analysis, bundled YARA baseline rules, optional local ClamAV/YARA engines, and quarantine.

## nuevo_AD_V01

- The active project reference is `nuevo_AD_V01`.
- The active source folder is `/home/salamirin/.openclaw/workspace/nuevo_AD_V01`.
- The active source of truth is `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`.
- Do not rely on any assumption, CRM data, outreach rule, product scope, pricing, validation history, document or agent conclusion that is not inside `nuevo_AD_V01`.
- Salva's current mental product reference for AD is `https://mindful-manage-ai.lovable.app`: a voice-first management/ERP concept for freelancers and small businesses. It should be treated as Salva-provided reference input, not as an approved operational scope, until incorporated into `nuevo_AD_V01` with risks, assumptions and decision gates.

## nuevo_AD_V01 Operational Advisory Rule

- No nuevo_AD_V01 process may move from definition to any external action without a prior decision gate covering: buyer, target, workflow, current alternative, WTP, channel/CAC, build/mock/manual, data limits, invalidation criteria and owner sign-off.
- "We will complete it later" is acceptable for a draft, but must not become implicit permission for operational validation work.
- Asher must not coordinate rounds of agents for nuevo_AD_V01. The explicit controlled method for agent rounds belongs to Gael.
- Temporary exception: from 2026-06-06 19:21 CEST until 2026-06-14 23:59 CEST, Salva authorized Asher to relay Salva's internal Telegram messages to Gael and the AD team when explicitly asked. This is relay-only: no decisions, no self-initiated coordination rounds, and no external actions without concrete approval.
