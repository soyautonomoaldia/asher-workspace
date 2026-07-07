# SOURCE OF TRUTH - AD voz electricistas

## Estado

- Fecha de alta: 2026-07-07.
- Proyecto autorizado por Salva via canal Discord `#ad-voz-electricistas`.
- Linea separada de `nuevo_AD_V01`; no hereda decisiones, validaciones ni contexto operativo de otros proyectos.
- Objetivo inicial: herramienta propia de gestion diaria por voz para un familiar de Salva, autonomo electricista.
- Restriccion operativa: Gael no contacta al familiar ni a terceros. La entrevista interna de 20 minutos la gestionara Salva por Gmail y Salva valida antes de enviar.
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

La referencia no es una agenda diaria pura. Es un ERP ligero para autonomos con entrada por voz en documentos economicos y apoyo de IA/OCR. Para el caso del electricista familiar, copiar todo el ERP seria demasiado amplio para una primera herramienta propia.

Elementos valiosos para reutilizar:

- Entrada por voz como modo de captura de conceptos.
- Separacion entre materiales y mano de obra.
- Presupuestos que, al aceptarse, se convierten en obras/trabajos.
- Recordatorios visibles.
- Clientes basicos.
- Resumen simple de pendientes.

Elementos a tratar con cautela:

- Fiscalidad, modelos y gestoria: alto riesgo de precision/responsabilidad.
- Facturacion completa: puede sobredimensionar el MVP si el dolor real es organizacion diaria.
- Marca/logo/documentos: secundario antes de validar uso real.
- Tendencias anuales y comparativas: decorativas en fase inicial.

## Hipotesis funcional inicial

La herramienta debe ayudar a un electricista autonomo a capturar y ordenar trabajo diario sin friccion, especialmente mediante voz. La utilidad debe medirse por reduccion de olvido, tiempo administrativo y perdida de informacion tras llamadas, visitas o trabajos.

## Alcance MVP provisional

Tras inspeccionar la referencia directa, el MVP debe mantenerse estrecho:

- Captura rapida por voz de una nota de trabajo.
- Conversion de voz a registro estructurado.
- Clasificacion minima: cliente, telefono si procede, direccion/zona, tarea, urgencia, fecha, estado y pendiente siguiente.
- Separacion simple de materiales y mano de obra cuando se prepare presupuesto.
- Vista diaria de trabajos y pendientes.
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
- Riesgo de evidencia: la referencia Lovable ya fue inspeccionada por URL directa, pero no sustituye una entrevista real con el electricista.

## Gate actual

No bloqueado por acceso a referencia funcional.

La decision pendiente es de foco: gestion diaria de trabajos frente a presupuesto/facturacion por voz.

## Artefactos internos

- `FICHA_MVP_CORTA_ELECTRICISTA_VOZ_V01.md`: ficha MVP corta centrada en jornada real, capturas por voz, estados, criterio de exito, riesgos y proximos pasos.
- `GUION_EMAIL_ENTREVISTA_ELECTRICISTA_V01.md`: borrador de email y guion de entrevista interna para que Salva valide antes de enviar por Gmail.
- `LIMITES_PRIVACIDAD_DATOS_PROHIBIDOS_V01.md`: limites de privacidad, datos permitidos, datos prohibidos y gate antes de prueba con datos reales.
- `DECISION_PENDIENTE_FOCO_MVP_V01.md`: decision pendiente entre gestion diaria y presupuesto/facturacion por voz, con recomendacion de Gael.

## Trello operativo

Tablero: `https://trello.com/b/fFWDpVbn/ad-voz-electricistas`.

Listas creadas:

- Pendiente Salva.
- Preparado.
- En curso.
- Bloqueado.
- Hecho.

Tarjetas iniciales:

- Salva valida guion email/entrevista.
- Decision foco MVP: gestion diaria vs presupuesto/facturacion por voz.
- Salva valida limites de privacidad y datos prohibidos.
- Salva gestiona entrevista interna por Gmail.
- Obtener 10 frases reales de captura por voz.
- Diseñar prototipo baja fidelidad 4 pantallas.
- Fuente y artefactos base creados.

## Siguiente accion propuesta

1. Salva confirma si el objetivo inicial es gestion diaria de trabajos o presupuesto/facturacion por voz; no deben mezclarse sin validar.
2. Salva valida el guion de email/entrevista y, solo despues, lo envia por Gmail.
3. Definir 10 frases reales de captura por voz y convertirlas en casos de prueba del MVP.
4. Antes de cualquier piloto con datos reales, definir privacidad minima y datos prohibidos.
