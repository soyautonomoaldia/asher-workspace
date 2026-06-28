Use $family-travel-advisor to run one scheduled family travel radar scan.

Read:
- `/home/salamirin/.openclaw/workspace/memory/topics/family-travel-profile.md`
- `/home/salamirin/.openclaw/agents/main/agent/codex-home/skills/family-travel-advisor/SKILL.md`
- Relevant family-travel-advisor references if needed.

Objective:
- Find family travel opportunities matching the profile.
- Respect the configured radar schedule, budget ranges, airports, family constraints, and deal rules.
- Use clean sessions/no persistent cookies where possible.
- Search only public sources and avoid abusive scraping, logins, booking actions, payments, or provider contact.

Scope:
- National, Europe, and International family travel.
- Prioritize school holidays, bridges, Fallas, Easter/Holy Week, summer, and Christmas.
- Departure airports: Valencia first when available, then Madrid, Alicante, Barcelona.

Evaluate every candidate:
- Total estimated family cost for 4 people.
- Comparable market price.
- Verdict: Chollo real, Buen valor, Precio de mercado, Evitar, or Plan recomendado.
- Family fit, risks, hidden costs, documentation/health/cancellation issues, adjacent seats, baggage, transfers, board, and lodging suitability.

Output files:
- Save scan results under `/home/salamirin/.openclaw/workspace/family-travel-radar/candidates/`.
- Filename format: `YYYY-MM-DD-HHMM-scan.md` in Europe/Madrid time.
- Include timestamp, sources checked, candidates found, rejected candidates with reason when useful, and next checks.

Immediate alerts:
- If and only if a candidate is a confirmed "Chollo real", prepare an immediate alert.
- Save the alert under `/home/salamirin/.openclaw/workspace/family-travel-radar/alerts/`.
- If a send-only family-travel Gmail sender is authorized, send the alert from `ashergael68@gmail.com` to `salvadorprosper@gmail.com` using the send-only Gmail tool. Never read Gmail.
- If sending is unavailable or fails, save an email-ready alert under `/home/salamirin/.openclaw/workspace/family-travel-radar/pending-email/` for manual review/sending.

Final run output:
- One short status line: success, partial, or blocked.
- Number of sources checked.
- Number of candidates saved.
- Whether any Chollo real alert was saved locally.
- Any blocking issue that Salva must fix.
