# Ficha decision post aclaracion ahorro - 2026-07-13

Owner: Gael
Proyecto: AD_VOZ_electricistas
Estado: decision pendiente de Salva

## Contexto

Salva envio una aclaracion puntual al familiar para separar dos cosas:

- expectativa grande: facturar, cobrar, enviar WhatsApps o automatizar gestiones;
- foco estrecho posible: dictar por voz lo ocurrido en una obra y obtener una ficha escrita revisable para ahorrar tiempo antes de ordenador/facturacion.

La respuesta recibida no confirma el foco estrecho tal cual.

## Senal recibida

Lectura sintetica:

> El familiar esperaba facturacion y automatizacion. El valor que busca es ahorro real de tiempo. Si la herramienta solo organiza y no le quita horas de trabajo, puede no ser lo que queria decir.

Clasificacion:

> utilidad parcial con matices fuertes.

No es validacion positiva.

No es bloqueo definitivo.

## Decision requerida

Salva debe elegir una de estas tres opciones.

## Opcion A - Ajustar a mock conceptual controlado

Decision:

> Aprobar solo un mock conceptual de baja fidelidad para comprobar si la ficha por voz ahorra tiempo o solo organiza.

Alcance permitido:

- una pantalla o flujo de 3-4 pantallas maximo;
- datos 100% ficticios;
- voz simulada;
- ficha escrita revisable;
- salida manual/copiable;
- comparacion explicita frente a WhatsApp + agenda + ordenador;
- copy visible: no factura, no cobra, no envia WhatsApps y no automatiza gestiones.

Objetivo:

- comprobar si el usuario ve ahorro real de tiempo antes de facturar/ordenar en ordenador;
- detectar si el valor depende de automatizacion real.

Riesgo:

- si el mock parece producto operativo, volvera a generar expectativa falsa.

Condicion:

- antes de ensenarlo o enviarlo al familiar, Salva debe aprobar el material exacto.

Veredicto Gael:

> Recomendado, pero solo si se mantiene como mock conceptual interno y controlado.

## Opcion B - Pedir otra aclaracion

Decision:

> Hacer una nueva pregunta al familiar antes de cualquier mock.

Ventaja:

- reduce ambiguedad antes de preparar visual.

Riesgo:

- puede cansar al familiar y seguir produciendo respuestas abstractas;
- otra pregunta puede meter mas ruido si no se formula muy cerrada.

Pregunta maxima posible:

> Si vieras una pantalla ficticia que transforma un dictado de obra en una ficha ordenada, sin facturar ni automatizar nada, ¿te serviria para comprobar si realmente te ahorra tiempo o lo descartarias ya?

Veredicto Gael:

> No recomendado ahora salvo que Salva quiera evitar cualquier trabajo de mock.

## Opcion C - Bloquear enfoque

Decision:

> Parar este enfoque porque el valor parece depender de facturacion, automatizacion o ahorro no probado.

Ventaja:

- evita construir alrededor de una expectativa incorrecta.

Riesgo:

- se puede descartar demasiado pronto una solucion simple que el familiar solo podria valorar viendo un ejemplo.

Veredicto Gael:

> Defendible si Salva no quiere seguir con una herramienta que no facture ni automatice desde el principio.

## Recomendacion Gael

Elegir Opcion A.

Motivo:

- la respuesta no valida el foco, pero tampoco lo mata;
- el familiar esta diciendo que necesita ver si realmente le quita horas;
- un mock conceptual controlado es la forma mas barata de comprobarlo sin build, sin datos reales y sin prometer automatizacion.

La condicion comercial dura es esta:

> Si al ver el mock el familiar sigue diciendo que solo ordena pero no ahorra tiempo, el enfoque debe bloquearse o reformularse hacia facturacion/automatizacion, que seria otro scope y otro gate.

## Restricciones activas

No autorizado:

- enviar otro email;
- contactar de nuevo al familiar;
- build;
- prototipo operativo;
- datos reales;
- audios reales;
- WhatsApp real;
- agenda real;
- facturacion;
- cobros;
- automatizaciones;
- integraciones;
- pricing;
- produccion.

## Siguiente accion propuesta

Si Salva aprueba la Opcion A, Gael prepara una ficha de mock conceptual con:

- objetivo de aprendizaje;
- pantallas minimas;
- copy limite;
- datos ficticios;
- criterios de exito;
- criterios de bloqueo.

El mock no se crea ni se envia hasta que esa ficha quede aprobada.
