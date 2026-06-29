Create the Tuesday weekly news digest for Salva.

Topic:
- Most important news from the Spanish real estate sector, with special attention to Comunidad Valenciana.
- Cover housing prices, rentals, mortgages, new-build, land, tourism housing, regulation, taxes, urban planning, investment, banks, Sareb, and local trends in Valencia, Alicante and Castellon.

Rules:
- Write in Spanish.
- Use only public sources. Do not log in, bypass paywalls, scrape aggressively, contact agencies, request property details as a lead, or submit forms.
- Prioritize practical impact for a private person/investor in Spain and Comunidad Valenciana.
- Prefer primary or high-quality sources where possible: INE, Colegio de Registradores, Banco de Espana, Idealista/Data, Fotocasa Research, Tinsa, Notariado, Generalitat Valenciana, ayuntamientos, BOE/DOGV, Expansion, Cinco Dias, El Economista, Valencia Plaza, Alicante Plaza, Castellon Plaza and sector reports.
- Cite source links for each item.

Output requirements:
- Subject: `Radar inmobiliario Espana y Comunidad Valenciana - YYYY-MM-DD`.
- Include at most 8 items.
- Use these sections:
  1. Resumen ejecutivo.
  2. Noticias clave Espana.
  3. Foco Comunidad Valenciana.
  4. Impacto practico.
  5. Riesgos, burbujas narrativas o ruido.
  6. Temas a vigilar.
- For each news item include: headline, location, why it matters, source/date, confidence level, and link.

Files:
- Save the report in `/home/salamirin/.openclaw/workspace/sector-news-radar/reports/`.
- Filename: `YYYY-MM-DD-tuesday-real-estate.md` using Europe/Madrid time.
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
