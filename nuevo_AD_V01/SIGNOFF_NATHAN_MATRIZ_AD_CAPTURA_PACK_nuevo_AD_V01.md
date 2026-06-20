# SIGNOFF_NATHAN_MATRIZ_AD_CAPTURA_PACK - nuevo_AD_V01

Fecha: 2026-06-07
Owner: Nathan

## Area revisada

Datos, privacidad, seguridad, viabilidad tecnica y limites ante datos reales de la matriz interna de `AD Captura Pack`.

## Documentos activos revisados

- `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
- `MATRIZ_DECISION_BASE_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `FICHA_12_WORKFLOWS_FICTICIOS_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `FICHA_INTERNA_TARGET_WORKFLOW_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `SIGNOFF_ASIRIN_MATRIZ_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `SIGNOFF_IRINAS_MATRIZ_AD_CAPTURA_PACK_nuevo_AD_V01.md`

## Veredicto

Aprobar matriz.

La matriz es aprobable desde datos, privacidad, seguridad y tecnica solo como base interna documental, con datos ficticios, sin usuarios reales, sin persistencia real, sin integraciones y sin efectos externos.

Este sign-off no desbloquea validacion externa, outreach, usuarios reales, datos reales, pricing publico, build operativo, integraciones ni acciones comerciales.

## Condiciones de datos

- En esta fase solo se permiten datos ficticios: alias ficticios, importes ficticios, trabajos ficticios, momentos ficticios y capturas redactadas para documentos o mock local no operativo.
- Siguen prohibidos nombres reales, telefonos, direcciones, audios, fotos, chats, emails, calendarios, tickets, facturas, NIF, datos fiscales, datos bancarios, credenciales e importes reales.
- Cualquier ejemplo de cobro, presupuesto, cierre o material debe quedar marcado como interno, ficticio y pendiente de revisar.
- Ninguna tarjeta puede tratarse como registro contable, documento legal, factura, presupuesto valido, justificante, historial fiscal ni comunicacion enviada.
- Si en una fase futura se quisiera usar datos reales, antes harian falta politica de datos, minimizacion, consentimiento visible, base juridica, retencion, borrado, trazabilidad, seguridad de almacenamiento y aprobacion explicita de Salva. Nada de eso queda aprobado aqui.

## Condiciones de privacidad

- La UX debe evitar que el usuario crea que debe introducir datos personales reales para probar la tesis.
- Los campos sensibles naturales del caso de uso deben aparecer como limite, no como invitacion: telefono, direccion, audio original, foto, factura, NIF, banco, email, chat y calendario.
- Las capturas ambiguas o mezcladas deben quedarse en baja confianza y pedir revision o division, no enriquecer datos ni inferir informacion personal.
- AD debe mantener el mensaje de Irinas: `No se ha enviado nada.`, `AD no factura.`, `AD no cobra.`, `AD no envia mensajes.`
- Si el valor percibido depende de leer conversaciones reales, audios reales, fotos reales, tickets reales o calendarios reales, la matriz debe cambiarse o la tesis debe bloquearse.

## Condiciones de seguridad

- No se aprueba backend, base de datos, cuentas, login, subida de archivos, almacenamiento de audio, OCR, lectura de WhatsApp, lectura de email, calendario real, pagos ni conexion con herramientas externas.
- No se aprueba captura, tratamiento ni transferencia de datos personales o profesionales reales.
- No se aprueban credenciales, tokens, webhooks, automatizaciones, scraping, APIs de mensajeria, pasarelas de pago ni integraciones de facturacion.
- Cualquier mock debe seguir siendo local, privado, conceptual, sin persistencia real, sin analitica identificable y sin salida de datos.
- Antes de cualquier prueba real futura haria falta amenaza minima revisada: datos recogidos, superficie de ataque, controles de acceso, cifrado, logs, borrado, backups, proveedores y procedimiento ante incidentes.

## Condiciones tecnicas

- La viabilidad tecnica documental es suficiente para la matriz si el producto sigue reducido a captura simple, clasificacion basica, tarjeta revisable y accion manual preparada.
- La arquitectura futura no debe asumir desde ahora integraciones reales como requisito de valor: WhatsApp, calendario, email, facturacion, pagos, gestoría, OCR/fotos y documentos quedan fuera.
- El sistema debe poder representar tarjetas dudosas, campos faltantes, baja confianza y division manual. La precision perfecta no puede ser premisa del MVP.
- Cobros, presupuestos y cierres solo pueden existir como recordatorios o borradores internos no legales para copiar manualmente.
- Comunidades complejas, fotos, facturas, VeriFactu, presupuesto legal, cobro automatico, calendario real y sustitucion de gestoría son senales de ruptura de scope, no requisitos tecnicos a implementar.

## Riesgos o invalidadores

- Bloquear o cambiar matriz si el caso de uso minimo requiere datos reales para demostrar valor.
- Bloquear o cambiar matriz si el producto necesita WhatsApp real, calendario real, email real, fotos reales, audios reales, tickets, facturas, NIF, datos fiscales/bancarios, cobros o pagos.
- Bloquear o cambiar matriz si el flujo de cobro se convierte en pago, reclamacion automatica, mensaje enviado o registro contable.
- Bloquear o cambiar matriz si el presupuesto pendiente se convierte en presupuesto legal, factura, cumplimiento VeriFactu o sustitucion de herramienta de facturacion/gestoría.
- Bloquear o cambiar matriz si la seguridad depende de controles que aun no existen: cuentas, permisos, cifrado, borrado, logs, proveedores, backups o respuesta a incidentes.
- Bloquear o cambiar matriz si el mock privado se usa con usuarios reales o datos reales.
- Bloquear o cambiar matriz si la tesis solo funciona al capturar comunidades complejas, fotos, documentos, normativa tecnica o integraciones desde el primer uso.

## Texto breve para consolidado de Gael

Nathan aprueba la matriz desde datos, privacidad, seguridad y viabilidad tecnica solo como base interna documental con datos ficticios y sin efectos externos. La tesis es tecnicamente defendible mientras se limite a capturas simples, tarjetas revisables, campos dudosos y acciones manuales preparadas. No aprueba datos reales, usuarios reales, backend operativo, persistencia real, WhatsApp real, calendario real, fotos reales, audios reales, facturacion, VeriFactu, cobros, pagos, gestoría, integraciones ni build operativo. Si cualquiera de esos elementos es necesario para sostener el valor, la matriz debe cambiarse o la tesis debe bloquearse.
