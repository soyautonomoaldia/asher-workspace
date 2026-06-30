# GAEL_CONSOLIDADO_CORREO_MOCK_OWNER_AD_CAPTURA_PACK - nuevo_AD_V01

Fecha: 2026-06-30
Owner coordinacion: Gael
Estado: consolidado owner completo para decision de Salva

## Decision

El paquete `correo Gmail + una imagen/mock estatico` queda consolidado como candidato interno para decision de Salva.

No queda aprobado para envio.

No autoriza contactar P1/P2/P3, enviar emails, usar destinatarios reales, registrar identificadores, publicar landing, activar formulario, tracking, pricing, demo, backend, integraciones ni acciones externas.

## Entradas Owner Recibidas

### Mercury / Growth

Estado: recibido.

Entrega:

- asunto y cuerpo final Gmail;
- enfoque asincrono;
- sin llamada, voz, agenda ni 20-30 minutos;
- sin envio ejecutado;
- sin destinatarios reales;
- sin identificadores registrados en workspace.

### Irinas / UX

Estado: recibido.

Entrega:

- propuesta visual final para una unica imagen estatica vertical;
- composicion antes/despues: nota rapida ficticia -> tarjeta revisable;
- sin landing, formulario, CTA comercial ni apariencia de app madura;
- limite visible dentro de la imagen: AD no ejecuta acciones.

### Nathan / Tecnico

Estado: recibido.

Condiciones:

- solo prueba de comprension/interes;
- no demo ni producto operativo;
- sin backend, WhatsApp real, calendario real, pagos, cobros, facturacion, gestoria, tracking, formulario ni automatismos;
- feedback solo por respuesta manual al email.

### Asirin / Producto

Estado: recibido.

Veredicto:

> Ajustar antes de aprobar.

Condiciones incorporadas:

- medir dolor real frente a WhatsApp/notas/libreta/memoria;
- no medir reaccion estetica;
- no comparar contra ERP, facturacion, gestoria ni software administrativo;
- bloquear si el valor depende de integraciones, automatizacion, factura legal o datos reales.

## Version Integrada Candidata

### Asunto Gmail

```text
Opinion rapida sobre una idea temprana para no perder pendientes
```

### Cuerpo Gmail

```text
Hola,

Estoy contrastando una idea muy temprana para autonomos de reparacion domestica: apuntar muy rapido una vuelta, material pendiente, cobro recordado, presupuesto por enviar o cierre de trabajo, y verlo despues como una tarjeta revisable.

No es una demo ni un producto operativo. Solo te enviaria una imagen estatica con un ejemplo ficticio para pedirte feedback por email, sin llamada, sin voz y sin agenda.

Importante: no me envies datos reales. Nada de nombres, telefonos, direcciones, fotos, facturas, importes, chats ni casos de clientes. Si respondes, usa ejemplos inventados o habla en general.

Me ayudaria que respondieras a estas 3 preguntas:

1. Hoy, cuando te entra una vuelta, material, cobro pendiente o presupuesto simple, donde lo apuntas y que suele fallar?
2. Viendo este ejemplo ficticio, esto te ayudaria antes de facturar o mandarlo a gestoria, o seguirias igual con WhatsApp, notas, libreta o memoria?
3. Que tendria que preparar la tarjeta para que te ahorre una perdida real de tiempo, dinero o seguimiento?

Gracias,
Salva
```

Nota de consolidacion: se mantiene el texto base de Mercury, pero se sustituyen las preguntas por las de Asirin porque fuerzan dolor real, alternativa actual y salida manual. Esta modificacion es de consolidacion, no una autorizacion de envio.

### Copy Exacto De La Imagen Estatica

```text
AD Captura Pack

De una nota rapida a un paquete revisable

Nota rapida ficticia
"Grifo cocina gotea. Volver jueves. Llevar latiguillo y teflon. Cobro pendiente. Preguntar si quiere cambiar sifon."

AD prepara esto para revisar

Trabajo
Reparacion sencilla de grifo de cocina

Cliente
Ejemplo ficticio

Pendientes detectados
- Volver el jueves
- Llevar latiguillo y teflon
- Revisar cobro pendiente
- Preguntar por posible cambio de sifon

Siguiente accion manual sugerida
Revisar la tarjeta y decidir que haces tu:
llamar, apuntarlo, enviar mensaje o pasarlo a tu sistema habitual.

Estado
Pendiente de revisar

Importante
AD no envia mensajes, no agenda visitas, no cobra, no factura y no se conecta a WhatsApp, calendario ni gestoria.

Mock estatico para feedback. Ejemplo 100% ficticio.
```

Nota de UX: la imagen debe leerse en 5-8 segundos y parecer una captura conceptual, no una app madura.

## Criterios De Lectura De Respuestas

### Senal Valida

Cuenta como senal util si la respuesta menciona:

- problema concreto propio;
- alternativa actual;
- accion manual posterior;
- perdida evitable de tiempo, dinero o seguimiento;
- comprension de que AD prepara una tarjeta revisable y no ejecuta acciones.

### Respuesta Amable No Valida

No cuenta como senal fuerte:

- "se ve bien";
- "interesante";
- "podria servir";
- respuesta centrada solo en estetica;
- respuesta sin caso, sin coste, sin alternativa actual y sin accion posterior.

### Invalidadores

Bloquear o ajustar si aparece cualquiera de estos casos:

- el destinatario entiende que AD envia mensajes, agenda, cobra, factura o se conecta a WhatsApp/calendario/gestoria;
- pide o entrega datos reales;
- el valor depende de integraciones reales, automatizacion, factura legal, OCR o gestor operativo;
- no identifica una situacion concreta mejor que WhatsApp/notas/libreta/memoria;
- deriva hacia precio, demo disponible, producto operativo o backlog de funcionalidades.

## Recomendacion De Gael

Recomendacion: pasar el paquete a `Revision Salva`, no a ejecucion.

Lectura estricta:

- el paquete ya esta cerrado por owners para decision;
- el material es suficientemente claro para pedir una decision de Salva;
- no debe enviarse sin aprobacion explicita adicional;
- si Salva aprueba, la ejecucion externa sigue limitada a Mercury como fuente externa autorizada y solo con registro anonimo P1/P2/P3.

## Siguiente Gate

Decision requerida de Salva:

1. Aprobar el paquete para que Mercury pueda operar el envio privado bajo las reglas ya aprobadas.
2. Pedir ajustes concretos al correo o imagen.
3. Bloquear la prueba y volver a ensayo interno ficticio.

## Registro Operativo

Trello debe quedar actualizado asi:

- Irinas movida a `Aprobado / Hecho`;
- checklist del gate marcado con Irinas y consolidacion Gael completos;
- gate principal movido a `Revision Salva`;
- comentario de consolidacion agregado al gate;
- source actualizado con este consolidado.

