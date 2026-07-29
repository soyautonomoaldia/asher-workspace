# NATHAN_ARQUITECTURA_MODELO_DATOS_V1_AD_VOZ - 2026-07-28

Owner: Nathan / Tecnico
Proyecto: AD_VOZ_electricistas
Veredicto: aprobado con condiciones

## Documentos Revisados

- `/home/salamirin/.openclaw/workspace/AD_VOZ_electricistas/SOURCE_OF_TRUTH_ad_voz_electricistas.md`
- `/home/salamirin/.openclaw/workspace/AD_VOZ_electricistas/PLAN_OPERATIVO_4_SEMANAS_AD_VOZ_ELECTRICISTAS_2026_07_28.md`

## Alcance Tecnico Interpretado

La V1 debe ser una app web responsive/PWA para uso movil y escritorio, centrada en:

- captura por voz;
- parser IA hacia ficha administrativa revisable;
- seguimiento visual de obras;
- bandeja administrativa de pendientes;
- OCR solo evaluado o preparado para V1.5, sin documentos reales;
- sin facturacion legal, cobros reales, WhatsApp real, agenda real, automatizaciones externas, produccion ni integraciones activas sin gate separado de Salva.

## 1. Recomendacion Stack V1

Recomendacion conservadora para V1 controlada:

- Frontend: React + TypeScript + Vite, con PWA instalable si la experiencia movil lo justifica despues del primer prototipo.
- UI: componentes propios ligeros o libreria simple, priorizando pantalla movil, botones grandes de captura, estados visuales de obra y bandeja escaneable.
- Backend: Node.js + TypeScript, preferiblemente API REST simple. Evitar microservicios.
- Base de datos: PostgreSQL para entidades relacionales y auditoria basica.
- Almacenamiento de ficheros: objeto privado tipo S3-compatible solo cuando se aprueben adjuntos/OCR; en V1 controlada puede quedar mock o almacenamiento local ficticio.
- IA/parser: servicio backend que recibe texto transcrito y devuelve JSON estructurado validado por esquema.
- Voz: empezar con spike controlado entre Web Speech API y OpenAI speech-to-text; no asumir que una opcion sirve para uso real hasta probar frases ficticias en movil.
- Autenticacion: email/password o magic link solo para entorno controlado; no OAuth externo en V1 salvo decision posterior.
- Hosting: entorno controlado tipo Render/Fly/Railway/Vercel + base gestionada solo si Salva aprueba build; local/demo interna antes de eso.

No recomiendo app nativa, backend complejo, ERP completo ni integraciones externas en V1.

## 2. Web Responsive/PWA vs App Nativa

Recomendacion: web responsive primero, PWA como mejora natural, app nativa descartada para V1.

Motivos:

- El usuario necesita movil en obra y escritorio por la tarde; una web responsive cubre ambos con menor coste.
- PWA permite acceso rapido desde pantalla de inicio, cache basica y experiencia parecida a app sin pasar por stores.
- App nativa encarece permisos, distribucion, mantenimiento y QA iOS/Android antes de validar ahorro real.
- La voz en navegador puede tener limitaciones, pero una app nativa tampoco elimina por si sola los riesgos de transcripcion, privacidad y parser.

Condicion: si la captura de voz en navegador falla de forma sistematica en el movil objetivo, la V1 debe degradar a captura manual asistida o evaluar una capa nativa solo despues de spike.

## 3. Arquitectura Frontend/Backend/Datos

Arquitectura candidata:

1. Frontend movil/escritorio
   - Pantalla principal con obras activas, pendientes y boton de dictado.
   - Flujo de dictado con confirmacion antes de guardar.
   - Edicion manual siempre disponible.
   - Bandeja administrativa para revisar, completar, copiar y cerrar.

2. API backend
   - Gestion de usuarios y sesiones.
   - CRUD de obras, clientes ficticios/controlados, capturas, materiales, tareas y pendientes.
   - Endpoint de transcripcion si se usa proveedor externo.
   - Endpoint de parser IA con validacion estricta de schema.
   - Auditoria minima de cambios y borrados.

3. Capa IA
   - Entrada: texto transcrito, contexto minimo de la obra si el usuario la selecciona.
   - Salida: JSON con tipo de captura, obra sugerida, materiales, trabajo realizado, pendiente administrativo, fecha aproximada, importe si se dicta, confianza y campos dudosos.
   - Nunca ejecutar acciones externas directamente desde la IA.

4. Datos
   - PostgreSQL como fuente principal.
   - Adjuntos/OCR desactivados o con documentos ficticios hasta gate.
   - Logs sin audio ni texto sensible salvo aprobacion explicita.

## 4. Evaluacion Voz: Whisper/OpenAI vs Web Speech API vs Alternativa

Evidencia externa revisada:

- OpenAI speech-to-text ofrece endpoints de transcripcion/traduccion, modelos `gpt-4o-transcribe`, `gpt-4o-mini-transcribe` y `whisper-1`, subida de archivos limitada a 25 MB y formatos como `mp3`, `mp4`, `m4a`, `wav` y `webm`.
- MDN documenta Web Speech API como API de navegador con reconocimiento asincrono y sintesis de voz, pero debe tratarse como dependiente de soporte de navegador y comportamiento real del dispositivo.

Comparativa:

- Web Speech API:
  - Ventaja: coste bajo, latencia baja, integracion simple, util para prototipo.
  - Riesgo: soporte desigual, comportamiento dependiente del navegador, posible dependencia de servicios del navegador, menos control sobre calidad y privacidad.
  - Uso recomendado: spike rapido con frases ficticias en movil.

- OpenAI speech-to-text / Whisper:
  - Ventaja: mas control desde backend, calidad previsible, salida integrable con parser, mejor trazabilidad de fallos.
  - Riesgo: coste por uso, envio de audio a proveedor externo, necesidad de consentimiento/gate antes de audios reales, limite de archivo y gestion de latencia.
  - Uso recomendado: candidato principal si Web Speech API falla o si se necesita calidad consistente.

- Alternativa local/on-device:
  - Ventaja: privacidad potencialmente mejor si no sale audio.
  - Riesgo: complejidad, rendimiento movil, mantenimiento y peor time-to-market.
  - Uso recomendado: no V1 salvo bloqueo fuerte de privacidad/proveedor.

Decision tecnica inicial: probar Web Speech API y OpenAI STT con frases ficticias; elegir por evidencia de precision, latencia, coste y privacidad. V1 no queda aprobada para audios reales.

## 5. Parser IA/NLP: Enfoque y Riesgos

Enfoque:

- Parser de texto a estructura, no agente autonomo.
- Schema cerrado por tipos: `obra`, `material`, `trabajo_realizado`, `pendiente_cobro`, `presupuesto_pendiente`, `recordatorio`, `nota`.
- Respuesta con confianza y campos dudosos.
- Confirmacion humana obligatoria antes de guardar como dato operativo.
- Reglas deterministas para validaciones basicas: fechas, importes, cantidades, unidades, estados.

Riesgos:

- Alucinacion de materiales, importes o clientes.
- Confusion entre trabajo realizado y trabajo pendiente.
- Fechas relativas ambiguas: "manana", "el viernes", "la semana que viene".
- Nombres de clientes o direcciones mal transcritos.
- Riesgo de convertir una nota informal en pseudo-factura o compromiso economico.

Mitigacion:

- No generar facturas, cobros ni mensajes externos.
- Marcar campos dudosos y pedir revision.
- Guardar texto original transcrito junto a estructura solo si privacidad lo permite.
- Tests con frases ficticias representativas antes de uso real.

## 6. Modelo de Datos Preliminar con Clasificacion RGPD

Clasificacion orientativa para diseno, no autorizacion de tratamiento real:

| Entidad | Campos V1 | Clasificacion RGPD | Sensibilidad | Estado V1 |
| --- | --- | --- | --- | --- |
| Usuario | nombre, email, rol, preferencias | dato personal | media | permitido solo en entorno controlado |
| Cliente | alias, nombre, telefono parcial, notas | dato personal de tercero | alta | usar ficticio/controlado hasta gate |
| Obra | titulo, estado, direccion parcial, cliente, proxima accion | puede incluir dato personal/localizacion | alta | ficticio/controlado |
| Captura voz | texto transcrito, fecha, fuente, confianza | puede incluir datos personales y comerciales | alta | ficticio; audios reales prohibidos |
| Audio | archivo, duracion, formato | dato biometrico no necesariamente identificativo pero sensible por contenido/voz | alta | prohibido en V1 sin gate |
| Material | descripcion, cantidad, coste estimado | dato comercial/operativo | media | ficticio/controlado |
| Trabajo realizado | descripcion, horas, fecha | dato operativo/comercial | media-alta | ficticio/controlado |
| Pendiente administrativo | tipo, estado, vencimiento, importe aproximado | comercial y potencialmente personal | alta | ficticio/controlado |
| Documento OCR | imagen/PDF, texto extraido, metadatos | puede contener datos fiscales/personales | muy alta | prohibido con documentos reales |
| Auditoria | usuario, accion, timestamp, entidad | dato personal/seguridad | media | necesaria si hay build |

Datos prohibidos sin gate separado: audios reales, clientes reales, direcciones completas, telefonos reales, facturas/tickets reales, datos fiscales, datos bancarios, documentos reales, credenciales y cualquier dato de terceros no minimizado.

## 7. Cifrado, Almacenamiento, Retencion y Borrado

Minimos si se aprueba build controlado:

- HTTPS obligatorio.
- Cifrado en reposo en base de datos gestionada y almacenamiento de objetos.
- Archivos privados, sin URLs publicas permanentes.
- Separacion de entornos: desarrollo, demo interna y eventual piloto.
- Variables de entorno fuera del repositorio.
- Backups con la misma clasificacion que datos de produccion.
- Retencion corta por defecto para audio: idealmente no conservar audio tras transcripcion salvo consentimiento explicito.
- Borrado por entidad: cliente, obra, captura, documento y usuario.
- Registro de auditoria de borrado sin conservar contenido sensible.
- Politica de minimizacion: guardar solo lo necesario para revisar la ficha administrativa.

Condicion fuerte: antes de datos reales hace falta checklist RGPD, consentimiento, responsable del tratamiento, finalidad, base legal, retencion, ejercicio de derechos y procedimiento de borrado.

## 8. OCR: Opciones y Evaluacion Sin Datos Reales

Evidencia externa revisada:

- Google Cloud Vision documenta OCR para detectar y extraer texto de imagenes y recomienda Document AI para OCR documental, parsing de formularios y extraccion estructurada.
- Amazon Textract detecta texto impreso/manuscrito y extrae formularios/tablas; incluye APIs especificas para gastos/recibos y documentos, con cuotas y limites de servicio.
- Tesseract 5.x es OCR open source bajo Apache 2.0, utilizable por CLI/API, con modelos de idiomas; requiere mas trabajo de preprocesado y evaluacion de calidad.

Recomendacion:

- V1: no incluir OCR real.
- Semana 3: spike con documentos ficticios, no facturas/tickets reales.
- Comparar:
  - Tesseract: coste bajo y control local; riesgo de menor precision en tickets/fotos malas.
  - Google Vision/Document AI: mejor opcion si el problema son documentos variados; implica proveedor cloud, costes y datos sensibles.
  - Amazon Textract: fuerte para formularios, tablas, recibos y documentos; implica AWS, costes, cuotas y gobierno de datos.

Metrica de spike:

- precision de campos clave ficticios: proveedor, fecha, concepto, importe, IVA si aparece;
- tiempo de respuesta;
- coste estimado;
- friccion de captura desde movil;
- porcentaje que requiere correccion manual;
- implicacion RGPD y almacenamiento.

## 9. Bloqueos Tecnicos y Decisiones Necesarias

Bloqueos antes de uso real:

- Gate de Salva para cualquier build que salga de mock local/controlado.
- Gate RGPD antes de datos reales, audios reales o documentos reales.
- Decision de proveedor de transcripcion tras spike.
- Decision de si se conserva audio o solo transcripcion.
- Decision de OCR: V1.5, descartado o pendiente.
- Definir entorno de despliegue y responsables de acceso.
- Definir politica de soporte/incidencias para septiembre.

Riesgos de delivery:

- Voz con demasiada correccion manual.
- Parser que parece util en demo pero falla con frases reales de obra.
- UX que anade trabajo en vez de reducir tarde de ordenador.
- Scope creep hacia ERP, facturacion, cobros y automatizacion.
- Tratamiento de datos de terceros sin marco RGPD completo.

Decisiones recomendadas para Salva/Gael:

1. Aprobar spike tecnico de voz con frases ficticias/controladas.
2. Mantener OCR fuera de V1 y evaluarlo como spike separado.
3. Exigir revision humana antes de guardar o usar cualquier salida IA.
4. No activar integraciones externas hasta que el flujo manual demuestre ahorro.

## 10. Texto Breve Para Consolidado De Gael

Nathan aprueba con condiciones una direccion tecnica V1 basada en web responsive/PWA, backend simple, PostgreSQL, captura por voz y parser IA con revision humana, seguimiento visual de obras y bandeja administrativa. La recomendacion es validar Web Speech API frente a OpenAI speech-to-text con frases ficticias antes de decidir proveedor. OCR no debe entrar en V1 real: solo spike con documentos ficticios para decidir V1.5. No queda autorizado ningun dato real, audio real, documento real, facturacion, cobro, WhatsApp, agenda, automatizacion externa, produccion ni integracion sin gate separado de Salva y checklist RGPD.

## Veredicto

aprobado con condiciones

