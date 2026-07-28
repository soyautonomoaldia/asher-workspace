# Activacion Semana 1 AD_VOZ - 2026-07-28

Owner operativo: Gael
Semana: 1
Fechas: 2026-07-28 a 2026-08-02
Base: escenario mas probable aprobado por Salva

## Objetivo Semana 1

Fijar V1 util sin caer en ERP completo:

- captura por voz;
- seguimiento visual de obras;
- bandeja administrativa revisable;
- OCR evaluado, no aprobado todavia;
- automatizaciones planificadas, no activadas;
- RGPD y seguridad desde modelo de datos.

## Regla de mando aplicada

Gael activa trabajo sin esperar nueva orden porque no requiere aprobacion adicional de Salva. Gael coordina owners y consolida. Gael no sustituye UX, tecnica ni growth/adopcion.

## Encargos activados

### Producto / Asirin

Estado: enviado a `agent:producto:main`.

Archivo esperado:

`ASIRIN_ALCANCE_V1_PRODUCTO_AD_VOZ_2026_07_28.md`

Objetivo:

- definir dentro/fuera V1;
- mapa V1 / V1.5 / futuro;
- workflow diario principal;
- riesgos de scope;
- preguntas cerradas al familiar;
- criterios de bloqueo.

### UX / Irinas

Estado: enviado a `agent:ux:main`.

Archivo esperado:

`IRINAS_CRITERIOS_UX_UI_V1_AD_VOZ_2026_07_28.md`

Objetivo:

- explicar fallo UX del V0;
- definir principios visuales V1;
- pantallas minimas movil y escritorio;
- componentes visuales clave;
- criterios antes de presentar mock a Salva.

### Tecnico / Nathan

Estado: enviado a `agent:tecnico:main`.

Archivo esperado:

`NATHAN_ARQUITECTURA_MODELO_DATOS_V1_AD_VOZ_2026_07_28.md`

Objetivo:

- direccion tecnica V1;
- web responsive/PWA vs app nativa;
- arquitectura frontend/backend/datos;
- voz: Whisper vs Web Speech API;
- parser IA/NLP;
- modelo de datos preliminar RGPD;
- cifrado, almacenamiento, retencion y borrado;
- OCR sin datos reales.

### Growth / Mercury

Estado: bloqueo tecnico de coordinacion.

Intentos:

- envio inicial a `agent:growth:main`: error `gateway timeout`;
- reintento a `agent:growth:main`: error `gateway timeout`.

Archivo esperado cuando se recupere:

`MERCURY_ADOPCION_PREGUNTAS_FAMILIAR_V1_AD_VOZ_2026_07_28.md`

Impacto:

- no bloquea Producto/UX/Tecnico;
- si no se recupera antes de consolidado Semana 1, Gael debe marcar la parte Growth como pendiente y no fingir criterio de adopcion validado.

## Gates Semana 1

- Salva aprueba alcance V1 y preguntas al familiar.
- Salva decide si consulta OCR al familiar ahora o lo difiere.
- No se usan datos reales, audios reales, tickets/facturas reales ni documentos reales.
- No se inicia build hasta cerrar alcance V1, UX criteria y arquitectura candidata.

## Siguiente accion de Gael

- esperar entregables Producto/UX/Tecnico;
- reintentar Mercury si el gateway vuelve a estar disponible;
- consolidar Semana 1 en una ficha unica para decision de Salva;
- trasladar a Trello cuando el conector este disponible.
