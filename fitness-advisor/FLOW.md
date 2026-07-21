# Asesor Fitness Salva - Communication Flow

## Diagnosis

The previous setup created a Notion/dashboard package but no recurring OpenClaw communication flow. Therefore Salva did not receive fitness messages.

## Recommended Flow

Use Notion as the source of truth for check-ins. Use Telegram as the reminder channel when Salva is away from the PC.

### Daily Morning Check - 08:00 Europe/Madrid

Purpose: choose the day's action with minimal friction.

Message shape:

```text
Fitness hoy:
- Pierna: revisa color, hinchazon, pinchazos, dolor y calor local.
- Si esta estable: [sesion del dia].
- Si no esta estable: movilidad suave o descanso activo.
- Cena objetivo: proteina clara + verdura + hidrato controlado.
```

Rules:

- Keep under 6 lines.
- Never push intensity.
- Include one clear training option and one fallback.
- If there was a missed prior day, adapt calmly instead of doubling volume.

### Evening Check-In - 21:30 Europe/Madrid

Purpose: remind Salva to complete the Notion check-in. Do not duplicate the whole register in Telegram unless Salva chooses to reply there.

Message shape:

```text
Check-in fitness:
Completa Notion: entreno, cena, pierna, suplementos y nota rara.
Responde solo si hay problema o quieres que adapte algo.
```

Rules:

- Do not ask for long journaling in Telegram.
- Keep Notion as the record.
- If Salva reports worsening leg symptoms, advise stopping progression and considering medical assessment.
- If no response, do not chase repeatedly the same night.

### Weekly Review - Sunday 19:00 Europe/Madrid

Purpose: remind Salva to complete the weekly review in Notion and prepare next week only if he replies with data or says he is ready.

Message shape:

```text
Revision semanal fitness:
Completa Notion: entrenos, cenas, peso/cintura si existe, pierna y suplementos.
Responde con "listo" o con resumen si quieres preparar la semana siguiente.
```

Rules:

- Progress gently only if adherence was good and the left leg did not worsen.
- If the week was chaotic, repeat the week with fewer moving parts.
- Produce a short next-week adjustment, not a full redesign.
- Include supplement proposals only as optional, conservative information with risks and confirmation points.

### Supplement Proposal Block

Use when Salva asks for vitamins/supplements or when the weekly review includes a supplement change.

```text
Suplementacion segura:
| Propuesta | Para que sirve | Utilidad probable | Senales de riesgo | Confirmar antes |
```

Rules:

- Do not give medical dosing.
- Do not imply that supplements are necessary.
- Flag coagulation/bleeding-related products for clinician/pharmacist confirmation.
- Prefer food, sleep, adherence and bloodwork-informed decisions over blind supplementation.

## Optional Add-Ons

- Monday 07:45: weekly shopping prompt, only if Salva finds groceries are the bottleneck.
- Friday 18:30: weekend guardrail for eating out, only if weekends are repeatedly derailing progress.
- Sunday review: supplement safety check, only as a short section.
- Notion update: use the dashboard as the log, not as the communication channel.

## Do Not Do

- Do not send medical claims or diagnosis.
- Do not recommend medication changes.
- Do not create guilt-heavy messages.
- Do not turn missed sessions into extra volume.
- Do not use heartbeat for fitness reminders.
- Do not use email for daily fitness messages unless Salva explicitly prefers it.

## Cron Candidates

Pending explicit approval before creation:

- `fitness-daily-morning`: `0 8 * * 1-7`, optional, not active by default.
- `fitness-evening-checkin`: `30 21 * * 1-7`, Telegram reminder to complete Notion.
- `fitness-weekly-review`: `0 19 * * 0`, Telegram reminder to complete Notion weekly review.

Start with the morning and weekly review only if Salva wants lower noise.
