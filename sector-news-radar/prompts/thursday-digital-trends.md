Create the Thursday weekly news digest for Salva.

Topic:
- Most important digital-sector trends relevant to Spain and Europe.
- Cover ecommerce, fintech, SaaS, AI products, automation, cybersecurity, marketplaces, payments, digital regulation, startups, B2B software, no-code/low-code, consumer behavior and monetization models.

Rules:
- Write in Spanish.
- Use only public sources. Do not log in, bypass paywalls, scrape aggressively, contact companies, sign up for trials, or submit forms.
- Prioritize trends with commercial or product implications, not generic hype.
- Prefer primary or high-quality sources where possible: CNMCData, ONTSI, INE, Banco de Espana for payments, EU/BOE regulation, Adigital, Ecommerce News, Marketing4eCommerce, El Referente, Sifted public articles, TechCrunch public articles, company announcements, and credible market reports.
- Cite source links for each item.

Output requirements:
- Subject: `Radar tendencias digitales - YYYY-MM-DD`.
- Include at most 8 items.
- Use these sections:
  1. Resumen ejecutivo.
  2. Tendencias clave.
  3. Implicaciones para negocio/producto.
  4. Senales tempranas a vigilar.
  5. Ruido, modas o riesgos.
- For each news item include: headline, sector tag, why it matters, source/date, confidence level, and link.

Files:
- Save the report in `/home/salamirin/.openclaw/workspace/sector-news-radar/reports/`.
- Filename: `YYYY-MM-DD-thursday-digital-trends.md` using Europe/Madrid time.
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
