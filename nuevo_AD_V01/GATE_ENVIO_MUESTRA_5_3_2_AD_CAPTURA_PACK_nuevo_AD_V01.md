# Gate de envio - muestra 5/3/2 AD Captura Pack

Fecha: 2026-07-06
Owner de decision: Salva
Owner operativo: Gael
Fuente externa/controlada: Mercury
Estado: aprobado final RGPD por Salva; pendiente ejecucion tecnica privada Gmail

## Confirmacion de estado

Este gate fue aprobado por Salva el 2026-07-06 para un unico envio real condicionado del batch 5/3/2, pero queda corregido el mismo dia: no puede considerarse completo ni ejecutable porque faltaba derecho de informacion RGPD al destinatario.

Salva aprueba finalmente en Trello el gate corregido con el pie legal RGPD incorporado. La aprobacion no autoriza exponer destinatarios ni usar herramientas visibles con emails en argumentos.

La ejecucion solo puede hacerla Mercury o la fuente externa/controlada autorizada que conserva la BBDD temporal privada fuera de source, Trello u OpenClaw visible. Gael no debe recibir destinatarios ni enviar desde el workspace.

Siguen prohibidos: pricing, demo, producto operativo, mock, adjunto, tracking, CC/CCO visible entre destinatarios, automatismos, integraciones, facturacion, cobros, WhatsApp real, calendario real, datos de clientes, importes, fotos, facturas, chats o cualquier identificador concreto en registros visibles.

Incidencia registrada: fallo de criterio/gate legal de Gael. Antes de presentar cualquier envio, contacto, validacion, formulario, CRM, Gmail, llamada u outreach como aprobable, Gael debe confirmar responsable, finalidad, base juridica, origen de datos, conservacion, derechos, oposicion/no contacto, datos prohibidos y criterio de borrado.

## 1. Batch agregado final

Resultado aceptado por Salva:

- estado Mercury: `COMPLETE`;
- finales anonimos: P1=5 / P2=3 / P3=2;
- reserva anonima: P1;
- brutos anonimos: P1=6 / P2=4 / P3=3;
- descartes agregados: sin email publico en contexto profesional=10; fuera de alcance muestra 5/3/2=3; fuente no parseable=1.

No se registran nombres, emails, telefonos, URLs concretas, ubicaciones exactas ni fuentes identificables en source, Trello u OpenClaw visible.

## 2. Fuentes usadas

Solo categorias agregadas:

- buscadores web generales;
- directorios/resultados profesionales publicos;
- webs de negocio/profesionales;
- anuncios/perfiles comerciales publicos.

Condicion: solo contactos profesionales publicamente publicados. Gmail, Hotmail, Outlook, Yahoo u otros correos genericos son validos solo si aparecen en contexto profesional verificable.

## 3. Borrador final de email

Asunto final:

`Opinión rápida sobre una idea temprana para no dejarte nada sin cerrar`

Cuerpo base aprobado por Salva:

```text
Hola,

Soy Autónomo al Día y estoy contrastando una idea muy temprana para autónomos y pequeños servicios de reparación doméstica: apuntar en pocos segundos un aviso, material pendiente, presupuesto simple o cierre de trabajo, y revisarlo después como una tarjeta clara.

No es una demo ni un producto operativo. No hay llamada, no hay agenda y solo busco feedback por email sobre si esta forma de ordenar pendientes tendría sentido en trabajos cortos.

Importante: no me envíes datos reales. Nada de nombres, teléfonos, direcciones, fotos, facturas, importes, chats ni casos de clientes. Si respondes, usa ejemplos inventados o habla en general.

Me ayudaría saber:
1. Cuando te entra un aviso o queda algo pendiente, ¿dónde lo apuntas y qué suele fallar?
2. Una tarjeta simple con aviso, pendiente y cierre, ¿te ayudaría antes de dejarlo terminado o seguirías como hasta ahora?
3. ¿Qué tendría que incluir para ahorrarte una pérdida típica de tiempo, seguimiento o memoria?

Gracias.

Autónomo al Día

Privacidad: Responsable: Autónomo al Día. Contacto: soyautonomoaldia@gmail.com. Te escribimos para pedir feedback puntual sobre una idea temprana para autónomos y pequeños servicios de reparación doméstica, usando un contacto profesional publicado en fuentes públicas. No queremos datos reales de clientes ni información sensible. Conservaremos los identificadores un máximo de 14 días para gestionar este envío/respuesta y después solo quedarán aprendizajes agregados anónimos. Puedes pedir acceso, rectificación, supresión, oposición o limitación respondiendo a este email. Si no te interesa o prefieres que no vuelva a escribirte, dímelo y no insisto.
```

Microvariantes permitidas:

- P1: sustituir `autonomos y pequenos servicios de reparacion domestica` por `autonomos de fontaneria y reparacion rapida domestica`;
- P2: sustituirlo por `reparadores domesticos locales, manitas y pequenos multiservicios`;
- P3: sustituirlo por `servicios pequenos de climatizacion residencial o mantenimiento de aire acondicionado`.

Notas de control:

- no prometer voz real, WhatsApp real, calendario, facturas, pagos, OCR, integraciones, automatismos ni envio a gestor;
- no pedir datos de clientes ni datos sensibles;
- no pedir llamada;
- no forzar respuesta;
- dejar claro que es una idea temprana;
- no pedir ni aceptar datos reales como evidencia;
- pie legal final obligatorio: `Privacidad: Responsable: Autónomo al Día...`;
- no enviar hasta aprobacion final explicita de Salva sobre esta version corregida.

## 4. Canal propuesto

Canal aprobado: Gmail desde cuenta aprobada `soyautonomoaldia@gmail.com`.

Condiciones:

- envio individual;
- sin adjunto;
- sin mock;
- sin tracking;
- sin CC/CCO visible entre destinatarios;
- envio solo por Mercury o la fuente externa/controlada autorizada, si cuenta con autorizacion operativa directa valida;
- Gael no debe recibir ni registrar destinatarios;
- Gael no debe enviar emails desde el workspace;
- si Mercury no puede ejecutar desde Gmail bajo estas condiciones sin exponer identificadores, debe marcar `no enviado` y devolver bloqueo anonimo.

## 5. Mock/adjunto o texto plano

Decision aprobada por Salva: texto plano sin adjunto.

Motivo:

- menor friccion y menor riesgo de entregabilidad;
- evita adjuntos no esperados en primer contacto;
- reduce promesa visual de producto;
- permite medir interes inicial sin contaminar por calidad del mock.
- evita que el destinatario interprete la idea como producto, demo o herramienta ya operativa.

Alternativa si Salva lo exige: abrir gate separado para PNG/PDF estatico con texto explicito de `imagen ficticia, no producto operativo`. No adjuntar mock en el primer email.

## 6. Regla de retencion/borrado de BBDD temporal

Regla aprobada:

- conservar la BBDD temporal solo durante la ventana minima de envio y respuesta;
- fecha limite de retencion: 14 dias naturales desde el envio;
- despues, borrar nombres, emails, fuentes identificables y metadatos concretos;
- conservar solo agregados anonimos por segmento;
- si se cancela o no se puede ejecutar, borrar identificadores y conservar solo agregados anonimos;
- registro permanente permitido: solo agregados anonimos y aprendizajes no identificables.

## 6.1 Ventana de envio aprobada

Ventana aprobada por Salva:

- lunes 2026-07-06, horario laboral Espana;
- preferentemente entre 09:30 y 12:30 CEST;
- si no es posible ejecutar dentro de esa ventana, no enviar y proponer nueva ventana antes de cualquier envio.

## 7. Riesgos

Riesgo de privacidad:

- aunque los contactos sean profesionales y publicos, se debe minimizar exposicion y no mover identificadores al workspace visible.

Riesgo de sesgo de muestra:

- muestra pequena, sesgada a presencia web/directorios y a profesionales con email publico;
- P3 HVAC es exploratorio y no debe interpretarse como validacion fuerte.

Riesgo de entregabilidad:

- Gmail nuevo o poco calentado puede caer en spam;
- adjuntos o lenguaje comercial pueden empeorar entregabilidad.

Riesgo de expectativa de producto:

- el email debe dejar claro que no hay demo comercial, precio ni producto operativo;
- no debe crear expectativa de automatismos, integraciones o solucion completa.

Riesgo de respuesta baja:

- batch de 10 puede devolver pocas o ninguna respuesta;
- no se debe interpretar silencio como invalidacion de demanda sin revisar asunto, canal, muestra y timing.

## 8. Criterio de parada

Parar inmediatamente si ocurre cualquiera de estos eventos:

- Mercury no puede operar Gmail o BBDD temporal sin exponer identificadores;
- se detecta que algun contacto no procede de contexto profesional publico verificable;
- aparece solicitud de datos de clientes, facturacion real, pagos, legal/fiscal, integraciones o automatismos;
- hay que usar telefono, WhatsApp, redes sociales, scraping invasivo o fuente no legitima;
- rebotes, bloqueo de cuenta o senales claras de entregabilidad mala que hagan inutil seguir;
- el destinatario pide no contacto;
- rebote relevante;
- confusion de producto/demo;
- respuesta negativa clara;
- cualquier riesgo reputacional.

Cierre normal del batch:

- se envia solo el batch aprobado;
- no se amplian destinatarios sin nuevo gate;
- seguimiento maximo y contenido de respuesta quedan sujetos a aprobacion previa de Salva.

## 9. Registro posterior permitido

Despues del envio, si se aprueba, solo se registrara:

- estado anonimo por segmento: enviado/no enviado;
- respuesta anonima: acepto/no acepto/sin respuesta;
- dolor mencionado en agregado: vuelta, material, cobro, presupuesto, cierre u otro;
- alternativa actual agregada: WhatsApp, notas, memoria, calendario, gestor, libreta u otra;
- salida manual entendida/no entendida;
- invalidadores agregados;
- aprendizaje agregado y no identificable.

No se registraran nombres, emails, telefonos, URLs concretas, ubicaciones exactas, capturas, datos de clientes, mensajes completos identificables ni fuentes concretas identificables.

## 10. Confirmacion operativa

Confirmacion corregida:

La autorizacion anterior queda condicionada y no ejecutable hasta aprobacion final corregida de Salva con bloque RGPD incorporado y responsable confirmado.

Hora de registro de aprobacion en workspace: 2026-07-06 01:43 CEST, fuera de la ventana de envio. Gael no envia ahora; debe trasladar la orden a Mercury y/o programar reactivacion operativa para la ventana aprobada.

Resultado de traslado a Mercury, 2026-07-06 01:46 CEST:

- estado: `NO ENVIADO`;
- motivo: Mercury no puede ejecutar el envio sin exponer identificadores en OpenClaw visible, porque el canal Gmail disponible exige introducir cada destinatario en la llamada de herramienta;
- esto incumpliria la condicion aprobada de no exponer nombres, emails ni identificadores en OpenClaw visible;
- no se ha usado Gmail;
- no se ha enviado ningun email;
- no se ha contactado a destinatarios;
- no se han pegado identificadores ni BBDD;
- bloqueo operativo: fallo de configuracion del canal Gmail privado/controlado de Mercury. El canal Gmail visible actual exige introducir destinatarios en tool calls visibles y no cumple la condicion aprobada de no exponer identificadores. La resolucion no es nueva aprobacion de negocio ni ejecucion manual dependiente de Salva, sino habilitar/corregir un flujo Gmail privado que lea la BBDD temporal por referencia interna o batch id, ejecute desde la cuenta aprobada y devuelva solo agregados anonimos.

Propuesta Mercury:

- estado corregido por Salva: no se acepta sacar el envio a via manual dependiente de Salva;
- Mercury debe corregir o escalar tecnicamente la configuracion Gmail privada;
- requisito tecnico: script/MCP/flujo local privado en entorno autorizado de Mercury, con entrada por referencia interna a la BBDD temporal o batch id, logs sin destinatarios visibles y salida solo agregada por P1/P2/P3;
- si no existe ese canal, el estado correcto es `NO ENVIADO - FALLO CONFIG GMAIL PRIVADO`, no nuevo gate de negocio.

Resultado de correccion solicitada a Mercury, 2026-07-06:

- estado: `NO ENVIADO - FALLO CONFIG GMAIL PRIVADO`;
- correccion tecnica requerida: habilitar un flujo Gmail privado/controlado que corra dentro del entorno autorizado pero fuera de tool calls visibles;
- entrada esperada: referencia interna o batch id de la BBDD temporal privada, no emails pegados en mensajes ni argumentos visibles;
- salida esperada: conteo agregado por P1/P2/P3, enviados/no enviados, rebotes/incidencias agregadas;
- ubicacion de ejecucion: runtime local privado o MCP/script dedicado con logs anonimizados y sin destinatarios visibles;
- motivo: el canal Gmail visible actual exige pasar cada destinatario en la llamada de herramienta, lo que incumple la privacidad aprobada;
- confirmacion Mercury: cero Gmail, cero contacto, cero identificadores volcados.

Registro posterior permitido:

- enviado/no enviado;
- respuesta/no respuesta;
- P1/P2/P3;
- senales de dolor;
- alternativa actual;
- objeciones;
- invalidadores;
- calidad de evidencia.

Prohibido registrar:

- nombres;
- emails;
- telefonos;
- URLs identificables;
- ubicaciones;
- datos de clientes;
- importes;
- fotos;
- facturas;
- chats;
- cualquier identificador concreto.

Correccion RGPD posterior, 2026-07-06:

- estado corregido: `PENDIENTE APROBACION FINAL RGPD`;
- no se envia ningun email;
- el texto final queda condicionado a incorporar el pie legal RGPD aprobado por Salva;
- la incidencia queda registrada como fallo de criterio/gate legal de Gael, no como bloqueo tecnico;
- antes de reactivar dry-run privado o envio real deben estar cerrados: responsable, finalidad, base juridica, origen de datos, conservacion, derechos, oposicion/no contacto, datos prohibidos y criterio de borrado.

Cierre RGPD definitivo indicado por Salva:

- responsable exacto: `Autónomo al Día`;
- el bloque RGPD debe ir como pie legal breve al final del email, no en el cuerpo principal;
- aprobacion final de Salva recibida en Trello el 2026-07-06;
- siguiente paso permitido: reactivar solo el flujo tecnico privado Gmail por `batchId`, empezando por dry-run sin destinatarios visibles.

Estado tecnico del batch privado tras aprobacion RGPD:

- ultimo dry-run privado: `FAIL`;
- motivo: batch privado 5/3/2 no encontrado o no aprobado con `approved: true` en el directorio privado Gmail;
- Gmail/contacto: cero Gmail, cero contacto, cero identificadores volcados;
- accion operativa: Mercury debe corregir/crear el batch privado aprobado y repetir dry-run con solo `{ "batchId": "<batch-id>" }`.

## Aprendizaje operativo

Antes de escalar a herramienta, API o apoyo humano, Gael debe revisar si la definicion de muestra esta bloqueando la ejecucion.

En este caso, redefinir P1/P2/P3 desbloqueo el trabajo: la muestra corregida 5/3/2 paso de resultados P2/P3 anteriores en cero a estado `COMPLETE`.

Regla operativa derivada: cuando una busqueda devuelve cero en segmentos adyacentes, no clasificar automaticamente como falta de mercado ni como incapacidad de herramienta. Primero auditar definicion observable, criterios de aceptacion/descarte, fuentes y mezcla de muestra.
