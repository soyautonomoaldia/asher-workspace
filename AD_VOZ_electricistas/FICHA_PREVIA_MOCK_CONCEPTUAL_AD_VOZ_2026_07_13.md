# Ficha previa mock conceptual AD_VOZ - 2026-07-13

Owner: Gael
Proyecto: AD_VOZ_electricistas
Estado: pendiente de aprobacion de Salva antes de crear cualquier mock

## Decision origen

Salva aprueba la Opcion A de `FICHA_DECISION_POST_ACLARACION_AHORRO_2026_07_13.md`:

> Ajustar a mock conceptual controlado.

Esta aprobacion no autoriza crear mock final, enviarlo al familiar, construir producto ni usar datos reales.

Autoriza solo preparar esta ficha previa de alcance.

## Objetivo de aprendizaje

Comprobar si una herramienta de voz que transforma un dictado de obra en una ficha escrita revisable puede ahorrar tiempo real al electricista antes de ordenar en ordenador, facturar o revisar administracion.

La pregunta de fondo no es si la pantalla se ve bien.

La pregunta correcta es:

> Esto reduce horas/friccion real frente a WhatsApp + agenda + tarde de ordenador, o solo lo deja mas organizado?

## Hipotesis a probar

Un electricista autonomo puede ganar tiempo si, al terminar una obra o en movimiento, dicta por voz lo ocurrido y recibe una ficha simple con:

- trabajo realizado;
- material usado;
- pendiente administrativo;
- presupuesto o cobro a revisar;
- siguiente accion manual;
- resumen copiable.

## Alcance permitido del mock

Tipo:

- mock conceptual de baja fidelidad;
- no operativo;
- datos ficticios;
- sin backend;
- sin login;
- sin persistencia;
- sin integraciones;
- sin captura real de voz.

Formato recomendado:

- una imagen o HTML estatico;
- maximo 3-4 pantallas conceptuales si Salva prefiere flujo;
- preferencia Gael: una sola pantalla con estados visibles para reducir ruido.

## Pantalla recomendada

Una pantalla unica con tres bloques:

1. Dictado simulado
   - texto ficticio como si viniera de voz;
   - ejemplo: "Obra Cocina Norte: cambiado diferencial, usado cable y dos automaticos, pendiente revisar presupuesto."

2. Ficha generada
   - tipo: trabajo + material + presupuesto pendiente;
   - obra/alias: Cocina Norte;
   - trabajo realizado;
   - material usado;
   - pendiente;
   - estado: revisar;
   - siguiente accion manual.

3. Salida manual
   - resumen copiable;
   - botones o etiquetas no funcionales: copiar, marcar revisado;
   - aviso visible: no envia, no factura, no cobra, no automatiza.

## Copy limite obligatorio

Texto visible dentro del mock:

> Mock conceptual con datos ficticios. No es una app operativa.

Texto de limite funcional:

> No factura, no cobra, no envia WhatsApps y no automatiza gestiones. Solo convierte un dictado en una ficha revisable para ahorrar tiempo al ordenar despues.

Texto de aprendizaje:

> La duda a resolver: esto te ahorra tiempo real o solo te lo deja mas organizado?

## Datos ficticios permitidos

Ejemplos permitidos:

- obra/alias no real: Cocina Norte, Portal Sur, Local Centro;
- materiales genericos: cable, automatico, diferencial, canaleta, caja de registro;
- acciones genericas: revisar presupuesto, preparar factura despues, comprobar cobro, copiar resumen.

Datos prohibidos:

- nombres reales;
- telefonos;
- direcciones;
- importes reales;
- clientes reales;
- facturas reales;
- fotos;
- documentos;
- audios reales;
- chats reales;
- ubicaciones identificables.

## Criterios de exito

El mock solo pasa si Salva considera que permite preguntar al familiar, sin inducir promesas falsas:

- si entiende que no automatiza;
- si entiende que no factura ni cobra;
- si entiende que la salida es manual/revisable;
- si permite evaluar ahorro real de tiempo;
- si no parece una app madura o vendible;
- si no abre nuevos compromisos de build, piloto o datos reales.

## Criterios de bloqueo

Bloquear antes de crear o mostrar mock si:

- hace parecer que la herramienta ya funciona;
- sugiere facturacion, cobro, envio de WhatsApps o automatizacion;
- depende de datos reales para entenderse;
- necesita mas de una pantalla compleja para explicar valor;
- vende organizacion sin demostrar ahorro de tiempo;
- convierte la prueba en validacion de producto operativo.

## Pregunta futura al familiar, solo si Salva aprueba material exacto

Pregunta unica recomendada:

> Viendo este ejemplo ficticio, sin facturar ni automatizar nada, te ahorraria tiempo real frente a WhatsApp + agenda + ordenador, o solo te lo dejaria mas organizado?

Preguntas de apoyo maximas:

1. En que momento lo usarias, si lo usarias?
2. Que parte tendria que preparar para quitarte horas de ordenador?
3. Que te haria descartarlo?

No enviar todavia.

## Decision requerida de Salva

Salva debe aprobar, ajustar o bloquear esta ficha antes de crear mock.

Opciones:

- aprobar ficha y autorizar a Gael a preparar mock conceptual estatico;
- ajustar pantalla/copy/criterios;
- bloquear el mock y volver a decision de foco.

## Restricciones activas

No autorizado:

- enviar nada al familiar;
- contactar a terceros;
- construir producto;
- crear prototipo operativo;
- usar audios reales;
- usar datos reales;
- integrar WhatsApp, agenda, Gmail, facturacion, cobros o automatizaciones;
- pricing;
- produccion.

## Siguiente accion propuesta

Mover esta ficha a decision de Salva.

Si Salva la aprueba, Gael podra preparar un mock conceptual estatico con datos ficticios y someterlo de nuevo a aprobacion antes de cualquier envio o uso externo.
