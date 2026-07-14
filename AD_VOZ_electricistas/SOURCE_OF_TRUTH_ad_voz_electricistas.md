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

La decision pendiente es de foco: gestion diaria de trabajos, presupuesto/facturacion por voz, cobros/seguimiento u otro dolor que emerja de la respuesta escrita.

Actualizacion 2026-07-12:

- Salva aporta la respuesta escrita recibida del familiar, ya tratada dentro de `AD_VOZ_electricistas` y no dentro de `nuevo_AD_V01`.
- Gael consulta a Producto, Tecnico, UX y Growth/Mercury con instruccion explicita de no usar AD Captura ni `nuevo_AD_V01`.
- El equipo converge en que la respuesta apunta a dolor administrativo con impacto economico: trabajos, material, trabajo realizado, presupuestos y cobros.
- La herramienta actual declarada es WhatsApp escrito + agenda, con administracion posterior en ordenador.
- La expectativa es captura comoda desde movil/AirPods y ahorro neto de tiempo; la mencion de automatizar gestiones se trata como riesgo de scope, no como permiso.
- Foco MVP recomendado para decision de Salva: `captura administrativa pre-facturacion por voz`, con ficha escrita revisable y salida manual/copiable.
- No se autoriza construccion, piloto, datos reales, pricing, produccion, integraciones, WhatsApp real, agenda real, cobros, facturacion legal ni automatizaciones.
- Decision pendiente de Salva: aprobar foco provisional estrecho, pedir aclaracion adicional al familiar o bloquear si el valor depende de automatizacion real.

Actualizacion posterior 2026-07-12:

- Salva no aprueba todavia el foco MVP.
- Salva decide pedir una aclaracion puntual al familiar antes de aprobar, ajustar o bloquear.
- La aclaracion pertenece solo a `AD_VOZ_electricistas`; no tiene impacto en `nuevo_AD_V01`.
- Gael no contacta al familiar ni envia mensajes externos; la accion externa corresponde a Salva.
- Pregunta autorizada para enviar:

> Si la herramienta no envia WhatsApps, no cobra, no factura y no automatiza gestiones, pero te permite dictar por voz rapidamente lo ocurrido en una obra y te deja una ficha escrita y ordenada para revisar despues materiales, trabajo realizado, presupuesto pendiente, aviso o cobro, te seguiria ahorrando tiempo real frente a WhatsApp + agenda + tarde de ordenador?

- Criterio de decision tras la respuesta:
  - Si confirma ahorro real sin automatizacion: aprobar foco estrecho.
  - Si confirma utilidad parcial pero con friccion o matices: ajustar foco/copy antes de prototipo.
  - Si el valor depende de automatizacion real, WhatsApp real, cobro, facturacion o gestiones automaticas: bloquear avance del MVP en este enfoque.
- No se construye todavia.

Revision de inputs 2026-07-12:

- Salva confirma que ha enviado la aclaracion al familiar.
- Salva pide revisar el concepto de inputs para no quedar parados ni mezclar planos.
- Gael consulta a Producto, Tecnico, UX y Growth/Mercury con marco estricto.
- Consenso: el input del MVP a validar es voz; la salida es ficha escrita/revisable y texto copiable/manual.
- WhatsApp, agenda y ordenador son comparador/habito actual, no inputs del MVP.
- Texto escrito no es input principal salvo autorizacion futura de Salva.
- AirPods es contexto posible, no compromiso tecnico.
- Avance interno permitido mientras llega la respuesta: definir frases ficticias de dictado, campos minimos, flujo conceptual y criterios de decision. No build.
- Avance ejecutado: se crea `DEFINICION_INPUTS_OUTPUTS_Y_AVANCE_INTERNO_2026_07_12.md` con definicion de input/output, no-inputs, criterios de lectura, 8 frases ficticias/controladas, campos minimos y flujo conceptual.
- Trello actualizado: la tarjeta `Obtener 5-10 frases anonimizadas/controladas de captura por voz` pasa a `Hecho`; `Disenar prototipo baja fidelidad 4 pantallas tras foco MVP` sigue bloqueada hasta decision de foco.

## Artefactos internos

- `FICHA_MVP_CORTA_ELECTRICISTA_VOZ_V01.md`: ficha MVP corta con opciones de foco, capturas por voz, criterios de exito, riesgos y proximos pasos.
- `GUION_CUESTIONARIO_EMAIL_ELECTRICISTA_V01.md`: cuestionario/email asincronico validado, corregido y enviado por Salva por Gmail; no es entrevista verbal.
- `LIMITES_PRIVACIDAD_DATOS_PROHIBIDOS_V01.md`: limites de privacidad, datos permitidos, datos prohibidos y gate antes de prueba con datos reales.
- `DECISION_PENDIENTE_FOCO_MVP_V01.md`: decision pendiente entre posibles focos, con recomendacion provisional no vinculante.
- `PROTOCOLO_OPERATIVO_AD_VOZ_ELECTRICISTAS_V01.md`: protocolo operativo entre Source of Truth, Trello y Discord; define autonomia de Gael, gates de Salva, estructura de Trello y regla FinOps.
- `PLANTILLA_ANALISIS_RESPUESTA_EMAIL_ELECTRICISTA_V01.md`: plantilla para procesar la respuesta escrita, puntuar foco MVP y extraer frases anonimizadas/controladas.
- `ANALISIS_RESPUESTA_EMAIL_ELECTRICISTA_2026_07_12.md`: analisis limpio en equipo de la respuesta recibida, con dolor principal, herramienta actual, expectativa, riesgo de scope, matriz de foco, recomendacion MVP y fuera de alcance.
- `BORRADOR_EMAIL_ACLARACION_AHORRO_SIN_AUTOMATIZACION_2026_07_12.md`: borrador de email para que Salva pida la aclaracion puntual al familiar antes de aprobar, ajustar o bloquear foco MVP.
- `DEFINICION_INPUTS_OUTPUTS_Y_AVANCE_INTERNO_2026_07_12.md`: consolidado de inputs/outputs, no-inputs, criterios de lectura de la respuesta y avance interno permitido sin build.
- `ANALISIS_RESPUESTA_ACLARACION_AHORRO_SIN_AUTOMATIZACION_2026_07_13.md`: correccion de contexto y analisis de la respuesta a la aclaracion puntual, tratada solo dentro de `AD_VOZ_electricistas`.
- `FICHA_DECISION_POST_ACLARACION_AHORRO_2026_07_13.md`: ficha de decision para Salva con tres opciones tras la respuesta a la aclaracion: ajustar a mock conceptual, pedir otra aclaracion o bloquear enfoque.
- `FICHA_PREVIA_MOCK_CONCEPTUAL_AD_VOZ_2026_07_13.md`: ficha previa del mock conceptual aprobada solo como alcance pendiente de decision de Salva antes de crear cualquier mock.

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

Actualizacion Trello 2026-07-12:

- `Decision foco MVP tras respuesta escrita`: sigue en `Pendiente Salva`, esperando respuesta a la aclaracion enviada.
- `Obtener 5-10 frases anonimizadas/controladas de captura por voz`: movida a `Hecho` tras crear el consolidado de inputs/outputs y 8 frases ficticias.
- `Disenar prototipo baja fidelidad 4 pantallas tras foco MVP`: se mantiene bloqueada; no hay foco MVP aprobado.

Actualizacion 2026-07-13:

- Salva aporta la respuesta del familiar a la aclaracion puntual.
- Gael corrige una interpretacion erronea previa: esta respuesta pertenece solo a `AD_VOZ_electricistas`, no a `nuevo_AD_V01` ni a `AD Captura`.
- La respuesta se analiza en `ANALISIS_RESPUESTA_ACLARACION_AHORRO_SIN_AUTOMATIZACION_2026_07_13.md`.
- Lectura: el familiar esperaba facturacion y automatizacion de gestiones; el criterio de valor es ahorro real de horas, no simple organizacion.
- Clasificacion segun el criterio previo: utilidad parcial con matices fuertes.
- No queda aprobado el foco estrecho tal cual.
- No queda bloqueado definitivamente, porque el familiar dice que habria que llevarlo a la practica para saber si es comodo y si ahorra tiempo.
- No se debe enviar otro email ni avanzar a build, piloto, datos reales, facturacion, cobros, WhatsApp real, agenda real, automatizaciones, pricing, produccion ni integraciones.
- Decision pendiente: Salva debe decidir entre ajustar hacia un mock conceptual muy controlado, pedir otra aclaracion o bloquear este enfoque.

Ficha de decision creada:

- `FICHA_DECISION_POST_ACLARACION_AHORRO_2026_07_13.md`.
- Opcion A: ajustar a mock conceptual controlado.
- Opcion B: pedir otra aclaracion.
- Opcion C: bloquear enfoque.
- Recomendacion Gael: Opcion A, solo como mock conceptual interno/controlado y sin build ni envio al familiar hasta aprobacion separada del material exacto.

Decision de Salva 2026-07-13:

> Gael apruebo la opcion A

Interpretacion:

- Salva aprueba ajustar hacia un mock conceptual controlado.
- Esta decision no autoriza crear mock final, enviarlo al familiar, construir producto, usar datos reales, facturar, cobrar, automatizar, integrar WhatsApp/agenda ni producir.
- Queda autorizado preparar una ficha previa del mock conceptual.

Ejecucion:

- Gael crea `FICHA_PREVIA_MOCK_CONCEPTUAL_AD_VOZ_2026_07_13.md`.
- La ficha define objetivo de aprendizaje, pantalla recomendada, copy limite, datos ficticios permitidos, datos prohibidos, criterios de exito y criterios de bloqueo.
- El mock conceptual sigue pendiente de aprobacion de Salva antes de crearse.

## Siguiente accion propuesta

1. Salva revisa `FICHA_PREVIA_MOCK_CONCEPTUAL_AD_VOZ_2026_07_13.md` y decide aprobar, ajustar o bloquear.
2. Si Salva aprueba la ficha, Gael podra preparar un mock conceptual estatico con datos ficticios y someterlo de nuevo a aprobacion antes de cualquier envio o uso externo.
3. Mantener bloqueado cualquier build, piloto, datos reales, facturacion, cobros, WhatsApp real, agenda real, automatizaciones, pricing, produccion e integraciones.
