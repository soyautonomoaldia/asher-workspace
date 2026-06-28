Use $family-travel-advisor to create the weekly family travel radar digest.

Read:
- `/home/salamirin/.openclaw/workspace/memory/topics/family-travel-profile.md`
- `/home/salamirin/.openclaw/agents/main/agent/codex-home/skills/family-travel-advisor/SKILL.md`
- Candidate files from `/home/salamirin/.openclaw/workspace/family-travel-radar/candidates/` for the current week.

Objective:
- Consolidate this week's stored candidates.
- Remove duplicates and stale offers when identifiable.
- Compare against market price and family criteria.
- Select up to 5 best opportunities, or say clearly that no worth-it deals were found.

Digest requirements:
- Spanish.
- Subject: `Radar viajes familiar - YYYY-MM-DD`.
- Sections: Executive summary, ranked opportunities, rejected/avoided notes when useful, risks, booking checks, and next watchlist.
- For each opportunity include: verdict, destination, dates if known, total estimated family cost, market price, why it fits, risks, and source links if available.
- Separate Nacional, Europa, and Internacional labels when available.

Output files:
- Save the weekly digest under `/home/salamirin/.openclaw/workspace/family-travel-radar/reports/`.
- Filename format: `YYYY-MM-DD-weekly-digest.md` in Europe/Madrid time.

Delivery:
- If a send-only family-travel Gmail sender is authorized, send the digest from `ashergael68@gmail.com` to `salvadorprosper@gmail.com` using the send-only Gmail tool. Never read Gmail.
- If sending is unavailable or fails, save an email-ready copy under `/home/salamirin/.openclaw/workspace/family-travel-radar/pending-email/` for manual review/sending.

Final run output:
- One short status line: success, partial, or blocked.
- Number of candidate files reviewed.
- Number of opportunities included.
- Report path.
- Whether an email-ready copy was saved locally.
- Any blocking issue that Salva must fix.
