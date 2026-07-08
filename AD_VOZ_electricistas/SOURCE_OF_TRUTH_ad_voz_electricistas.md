# SOURCE OF TRUTH - AD voz electricistas

## Estado

- Fecha de alta: 2026-07-07.
- Proyecto autorizado por Salva via canal Discord `#ad-voz-electricistas`.
- Linea separada de `nuevo_AD_V01`; no hereda decisiones, validaciones ni contexto operativo de otros proyectos.
- Nota de gobierno: AD_VOZ_electricistas queda autorizado como línea separada de AD Captura/nuevo_AD_V01, con source propio en `/AD_VOZ_electricistas`, sin heredar decisiones de AD Captura, y sujeto a gates explícitos de privacidad, datos reales, contacto externo, build, piloto, producción, pricing e integraciones.
- Objetivo inicial: explorar una herramienta propia por voz para un familiar de Salva, autonomo electricista. El foco MVP no esta decidido.
- Restriccion operativa: Gael no contacta al familiar ni a terceros. Salva ha validado, corregido y enviado el email asincronico por Gmail; la respuesta esperada es escrita, no una entrevista verbal.
- Trello propio: `https://trello.com/b/fFWDpVbn/ad-voz-electricistas`.

## Referencia funcional recibida

- Referencia Lovable: `https://preview--mindful-manage-ai.lovable.app/login`.
- Referencia directa funcional recibida despues: `https://mindful-manage-ai.lovable.app`.
- Usuario demo recibido en canal. La contrasena no se almacena en este archivo.
- Resultado de inspeccion 2026-07-07:
  - La URL redirige a `lovable.dev/auth-bridge`.
  - El contenido publico accesible muestra `Internal Lovable project` y `Authenticating...`.
  - El login por email entra en flujo de Lovable, no directamente en la app.
  - El email demo no fue reconocido como cuenta Lovable existente y el flujo propone crear cuenta.
  - No se ha creado cuenta externa ni se ha aceptado ningun alta sin confirmacion de Salva.
- Resultado de inspeccion de la URL directa 2026-07-07:
  - La app carga correctamente como `Voz·Gestion - ERP por voz para autonomos y Pymes`.
  - El login propio incluye acceso demo directo.
  - Navegacion principal observada: Tus datos, Clientes, Facturas, Presupuestos, Obras, Gastos, Recordatorios, Gestoria, Manual y Ajustes.
  - Dashboard observado: resumen de facturas por cobrar, gastos por pagar, presupuestos aceptados, obras activas, fiscalidad orientativa y recordatorios pendientes.
  - Manual observado: la voz se usa sobre todo para crear presupuestos y facturas; los gastos usan foto/PDF/OCR; ajustes cubre marca, datos fiscales y actividad.
  - Pantalla de Presupuestos observada: boton `Nuevo presupuesto`, metricas de aceptados/pendientes y tabla de documentos.
  - Formulario `Nuevo presupuesto` observado: boton `Dictar`, selector de cliente, concepto, notas, lineas de materiales, lineas de mano de obra, IVA, base y total.

## Lectura funcional de la referencia

La referencia no es una agenda diaria pura. Es un ERP ligero para autonomos con entrada por voz en documentos economicos y apoyo de IA/OCR. Para el caso del electricista familiar, copiar todo el ERP seria demasiado amplio para una primera herramienta propia. Tambien seria prematuro asumir que el primer dolor es gestion diaria sin respuesta de Salva/familiar.

Elementos valiosos para reutilizar:

- Entrada por voz como modo de captura de conceptos.
- Separacion entre materiales y mano de obra.
- Presupuestos que, al aceptarse, se convierten en obras/trabajos.
- Recordatorios visibles.
- Clientes basicos.
- Resumen simple de pendientes.

Elementos a tratar con cautela:

- Fiscalidad, modelos y gestoria: alto riesgo de precision/responsabilidad.
- Facturacion completa: puede sobredimensionar el MVP si el dolor real no esta en presupuesto/cobro, pero no debe descartarse antes de la respuesta escrita del familiar.
- Marca/logo/documentos: secundario antes de validar uso real.
- Tendencias anuales y comparativas: decorativas en fase inicial.

## Hipotesis funcional inicial

La herramienta debe ayudar a un electricista autonomo a reducir friccion administrativa mediante voz. El foco exacto queda pendiente de respuesta de Salva/familiar: organizacion diaria, presupuestos/facturacion simple, cobros/seguimiento u otro dolor operativo.

## Alcance MVP provisional

Tras inspeccionar la referencia directa, el MVP debe mantenerse estrecho. Este alcance es un mapa de opciones, no una decision final de foco:

- Captura rapida por voz.
- Conversion de voz a registro estructurado.
- Clasificacion minima segun foco recomendado y aprobado explicitamente por Salva: trabajo/aviso, presupuesto, material, cobro, recordatorio o seguimiento.
- Separacion simple de materiales y mano de obra solo si presupuesto/facturacion simple resulta prioritario.
- Vista operativa minima segun foco recomendado y aprobado explicitamente por Salva, sin asumir de entrada que sera gestion diaria.
- Edicion manual rapida cuando la transcripcion falle.
- Exportacion o copia simple para WhatsApp, nota, presupuesto o seguimiento.

Fuera de alcance provisional:

- Facturacion completa.
- ERP vertical completo.
- Gestion fiscal, legal o contable.
- Agenda avanzada con rutas optimizadas.
- Automatizaciones externas con clientes sin aprobacion explicita.
- Pricing, posicionamiento publico o venta.

## Riesgos comerciales y operativos

- Riesgo principal: que la herramienta sea solo una agenda/notas con voz y no resuelva un dolor suficientemente frecuente.
- Riesgo de adopcion: el usuario objetivo puede abandonar si la captura exige correcciones largas.
- Riesgo de workflow: el electricista probablemente ya usa WhatsApp, llamadas, notas y calendario; el producto debe encajar, no sustituir todo.
- Riesgo de privacidad: audios, telefonos, direcciones y datos de clientes exigen criterio antes de cualquier piloto real.
- Riesgo de evidencia: la referencia Lovable ya fue inspeccionada por URL directa, pero no sustituye la respuesta escrita del familiar al email asincronico.
- Riesgo de sesgo de foco: decidir gestion diaria antes de recibir respuesta de Salva/familiar puede ocultar un dolor mas fuerte en presupuestos, cobros o materiales.

## Gate actual

No bloqueado por acceso a referencia funcional.

El guion/cuestionario fue validado y corregido por Salva. El email asincronico fue enviado por Salva.

El gate de privacidad y datos prohibidos fue validado por Salva solo como definicion de limites. No autoriza piloto, datos reales, audios reales, documentos, facturas, direcciones completas, prueba operativa, contacto externo, build, pricing, produccion ni integraciones.

La decision pendiente es de foco: gestion diaria de trabajos, presupuesto/facturacion por voz, cobros/seguimiento u otro dolor que emerja de la respuesta escrita. Estado actual: en espera de respuesta escrita.

## Artefactos internos

- `FICHA_MVP_CORTA_ELECTRICISTA_VOZ_V01.md`: ficha MVP corta con opciones de foco, capturas por voz, criterios de exito, riesgos y proximos pasos.
- `GUION_CUESTIONARIO_EMAIL_ELECTRICISTA_V01.md`: cuestionario/email asincronico validado, corregido y enviado por Salva por Gmail; no es entrevista verbal.
- `LIMITES_PRIVACIDAD_DATOS_PROHIBIDOS_V01.md`: limites de privacidad, datos permitidos, datos prohibidos y gate antes de prueba con datos reales.
- `DECISION_PENDIENTE_FOCO_MVP_V01.md`: decision pendiente entre posibles focos, con recomendacion provisional no vinculante.
- `PROTOCOLO_OPERATIVO_AD_VOZ_ELECTRICISTAS_V01.md`: protocolo operativo entre Source of Truth, Trello y Discord; define autonomia de Gael, gates de Salva, estructura de Trello y regla FinOps.
- `PLANTILLA_ANALISIS_RESPUESTA_EMAIL_ELECTRICISTA_V01.md`: plantilla para procesar la respuesta escrita, puntuar foco MVP y extraer frases anonimizadas/controladas.

## Trello operativo

Tablero: `https://trello.com/b/fFWDpVbn/ad-voz-electricistas`.

Listas creadas:

- Pendiente Salva.
- Preparado.
- En curso.
- Bloqueado.
- Hecho.

Tarjetas iniciales:

- Decision foco MVP en espera de respuesta escrita.
- Obtener 5-10 frases anonimizadas/controladas de captura por voz.
- Disenar prototipo baja fidelidad 4 pantallas tras foco MVP.
- Fuente y artefactos base creados.
- Protocolo operativo creado y Trello alineado.
- Salva valida cuestionario/email asincronico.
- Salva envia cuestionario asincronico por Gmail.
- Salva valida gate de privacidad y datos prohibidos.
- Plantilla de analisis de respuesta escrita preparada.
- Analizar respuesta escrita y recomendar foco MVP.
- Gobierno y gates reforzados.

## Siguiente accion propuesta

1. Esperar la respuesta escrita del familiar al email asincronico.
2. Procesarla con `PLANTILLA_ANALISIS_RESPUESTA_EMAIL_ELECTRICISTA_V01.md`.
3. Decidir foco MVP con Salva tras la respuesta: gestion diaria, presupuesto/facturacion simple, cobro/seguimiento u otro dolor operativo.
