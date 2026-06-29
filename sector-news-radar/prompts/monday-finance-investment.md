Create the Monday weekly news digest for Salva.

Topic:
- Most important news from the Spanish financial and investment sector.
- Focus on Spain: banks, listed companies, markets, funds, brokers, fintech regulation, CNMV, Banco de Espana, ECB impact on Spain, taxation changes affecting private investors, and relevant macro context.

Rules:
- Write in Spanish.
- This is news and analysis, not personalized financial advice.
- Use only public sources. Do not log in, bypass paywalls, scrape aggressively, make transactions, contact providers, or ask for credentials.
- Prioritize relevance, impact, credibility, and practical implications for a Spanish private investor.
- Prefer primary or high-quality sources where possible: CNMV, Banco de Espana, ECB, BOE, INE, Expansion, Cinco Dias, El Economista, FundsPeople, Bolsamania, Reuters, Bloomberg summaries when publicly accessible, and official corporate releases.
- Cite source links for each item.

Output requirements:
- Subject: `Radar financiero e inversion Espana - YYYY-MM-DD`.
- Include at most 8 items.
- Use these sections:
  1. Resumen ejecutivo.
  2. Noticias clave.
  3. Impacto practico para Salva.
  4. Riesgos o ruido a ignorar.
  5. Temas a vigilar la proxima semana.
- For each news item include: headline, why it matters, source/date, confidence level, and link.

Files:
- Save the report in `/home/salamirin/.openclaw/workspace/sector-news-radar/reports/`.
- Filename: `YYYY-MM-DD-monday-finance-investment.md` using Europe/Madrid time.
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
