Create the Wednesday weekly news digest for Salva.

Topic:
- Most important news from the Spanish electricity sector and smart home market.
- Cover electricity prices, tariffs, self-consumption, solar, batteries, EV charging, regulation, CNMC, MITECO, REE, OMIE, distributors/retailers, home energy management, smart meters, IoT, security, Matter, Home Assistant, Alexa/Google/Apple ecosystem, and Spanish consumer adoption.

Rules:
- Write in Spanish.
- Use only public sources. Do not log in, bypass paywalls, scrape aggressively, contact providers, or simulate purchases.
- Prioritize practical implications for households, small businesses and future product opportunities in Spain.
- Prefer primary or high-quality sources where possible: OMIE, REE, CNMC, MITECO, IDAE, BOE, OCU when public, Selectra/energy comparators as secondary context, Xataka Smart Home, profesional sector media, company announcements, and official standards updates.
- Cite source links for each item.

Output requirements:
- Subject: `Radar electrico y smart home Espana - YYYY-MM-DD`.
- Include at most 8 items.
- Use these sections:
  1. Resumen ejecutivo.
  2. Electricidad y energia.
  3. Smart home y automatizacion.
  4. Impacto practico.
  5. Oportunidades o senales de producto.
  6. Riesgos y ruido.
- For each news item include: headline, why it matters, source/date, confidence level, and link.

Files:
- Save the report in `/home/salamirin/.openclaw/workspace/sector-news-radar/reports/`.
- Filename: `YYYY-MM-DD-wednesday-electric-smart-home.md` using Europe/Madrid time.
- If email sending fails, save an email-ready copy in `/home/salamirin/.openclaw/workspace/sector-news-radar/pending-email/`.

Email:
- If the send-only Gmail tool is available, send from `ashergael68@gmail.com` to `salvadorprosper@gmail.com`.
- Never read Gmail.

Final run output:
- One short status line.
- Number of sources checked.
- Number of items included.
- Report path.
- Whether email was sent or queued.
