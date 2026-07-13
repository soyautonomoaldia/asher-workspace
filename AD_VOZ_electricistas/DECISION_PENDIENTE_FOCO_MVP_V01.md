# Decision pendiente - Foco MVP V01

## Decision a tomar

Elegir el foco inicial del MVP:

1. Gestion diaria de trabajos por voz.
2. Presupuesto/facturacion por voz.
3. Cobro/seguimiento por voz.
4. Otro dolor operativo que aparezca en la respuesta escrita del familiar.

No conviene mezclar focos antes de validar el dolor real. El foco queda pendiente de respuesta de Salva/familiar al email asincronico.

## Opcion A - Gestion diaria de trabajos por voz

### Promesa

"Dicta lo que te entra durante el dia y la herramienta te deja claro que hacer hoy, que queda pendiente y que no debes olvidar."

### Incluye

- Captura por voz.
- Vista Hoy.
- Pendientes, trabajos, recordatorios y compras de material.
- Contactos simples.
- Salida copiable para WhatsApp o nota.

### Ventajas

- Menor riesgo legal/fiscal.
- Mas cerca del dolor diario.
- Mas facil de probar en 7 dias.
- Puede funcionar aunque no facture desde la app.

### Riesgos

- Puede parecer una app de notas si no estructura bien la informacion.
- Valor comercial limitado si no conecta despues con presupuesto/cobro.

## Opcion B - Presupuesto/facturacion por voz

### Promesa

"Dicta materiales y mano de obra y la herramienta prepara un presupuesto/factura simple."

### Incluye

- Voz para conceptos.
- Materiales y mano de obra.
- Cliente.
- Total estimado.
- Documento simple o texto listo para enviar.

### Ventajas

- Valor economico mas directo.
- Referencia Lovable encaja mas con este flujo.
- Puede atacar tardanza en presupuestos.

### Riesgos

- Entra antes en datos fiscales, IVA, facturacion y responsabilidad documental.
- Puede exigir precision alta desde el primer dia.
- Si el usuario no presupuesta a menudo, el uso baja.

## Opcion C - Cobro/seguimiento por voz

### Promesa

"Dicta lo que queda pendiente de cobrar o seguir y la herramienta te recuerda que cerrar."

### Incluye

- Captura por voz de trabajos terminados.
- Estado pendiente de cobrar o pendiente de respuesta.
- Recordatorios.
- Texto copiable para seguimiento.

### Ventajas

- Dolor economico potencialmente directo.
- Menos complejo que facturacion completa.
- Puede conectar gestion diaria con resultado de negocio.

### Riesgos

- Puede depender de datos de clientes y comunicaciones sensibles.
- Si el problema real esta antes, en presupuesto o agenda, llega tarde al flujo.

## Recomendacion Gael

No cerrar foco todavia. Como hipotesis provisional, Opcion A parece menos riesgosa para un primer prototipo, pero no debe imponerse antes de la respuesta escrita del familiar.

Razon: para un primer usuario familiar, el aprendizaje clave es localizar el punto de friccion mas frecuente y valioso. Si la respuesta muestra que el dolor economico esta en presupuestos o cobros, el MVP debe reflejarlo aunque gestion diaria parezca mas sencilla.

## Criterio para decidir tras email asincronico

Elegir gestion diaria si:

- El problema principal son olvidos, pendientes, llamadas y trabajos dispersos.
- Usa WhatsApp/notas/calendario de forma caotica.
- Hay capturas diarias frecuentes.

Elegir presupuesto/facturacion si:

- Pierde dinero por tardar en presupuestar.
- Hace presupuestos varias veces por semana.
- Ya tiene trabajos controlados, pero le pesa convertirlos en documento/importe.

Elegir cobro/seguimiento si:

- El problema principal son trabajos hechos que quedan sin cerrar o cobrar.
- Pierde tiempo recordando a quien debe llamar, cobrar o enviar resumen.
- La utilidad se puede probar sin facturacion legal completa.

## Gate

Salva valida el foco despues de recibir la respuesta escrita del familiar y antes de cualquier prototipo accionable, build, piloto, datos reales, pricing o integracion.

No se piden entradas reales ni datos reales sin gate completo y aprobacion explicita de Salva. El gate de privacidad validado solo define limites; no autoriza piloto, prueba operativa, audios reales, documentos, facturas, direcciones completas, contacto externo, build, pricing ni integraciones.

## Aclaracion puntual autorizada - 2026-07-12

Salva no aprueba todavia el foco MVP. Antes de aprobar, ajustar o bloquear, decide pedir una aclaracion al familiar:

> Si la herramienta no envia WhatsApps, no cobra, no factura y no automatiza gestiones, pero te permite dictar por voz rapidamente lo ocurrido en una obra y te deja una ficha escrita y ordenada para revisar despues materiales, trabajo realizado, presupuesto pendiente, aviso o cobro, te seguiria ahorrando tiempo real frente a WhatsApp + agenda + tarde de ordenador?

Criterio:

- Respuesta afirmativa clara: permite aprobar foco estrecho de captura administrativa pre-facturacion por voz.
- Respuesta afirmativa con condiciones: ajustar foco/copy antes de cualquier prototipo.
- Respuesta negativa o dependiente de automatizacion real: bloquear este enfoque.

No se construye todavia. Gael no contacta al familiar ni envia mensajes externos; Salva conserva la accion externa.
