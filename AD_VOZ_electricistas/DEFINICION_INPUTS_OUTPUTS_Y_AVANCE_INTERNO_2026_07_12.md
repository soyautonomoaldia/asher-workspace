# Definicion inputs, outputs y avance interno - 2026-07-12

Proyecto: AD_VOZ_electricistas
Estado: consolidado interno tras revision de Producto, Tecnico, UX y Growth/Mercury
Decision: no construir todavia

## Problema detectado

El equipo podia mezclar dos planos distintos:

- Habito actual del familiar: WhatsApp escrito, agenda y tarde de ordenador.
- Input del producto que queremos validar: voz.

Esa mezcla puede llevar a un falso foco: convertir WhatsApp, texto escrito o agenda en parte del MVP cuando en realidad solo son comparadores del flujo actual.

## Definicion limpia

### Input MVP a validar

El input principal es voz.

El usuario dicta por voz lo ocurrido en una obra o durante el trabajo:

- trabajo realizado;
- material usado;
- aviso pendiente;
- presupuesto pendiente;
- cobro o seguimiento pendiente;
- recordatorio administrativo simple.

### Procesamiento esperado

La herramienta convierte el dictado en una ficha estructurada y revisable.

Campos minimos:

- tipo de entrada: trabajo, material, aviso, presupuesto, cobro o recordatorio;
- obra o alias anonimo;
- trabajo realizado;
- material usado;
- accion pendiente;
- momento/fecha aproximada;
- estado: capturado, revisar, listo para copiar;
- nota para revisar despues.

### Output MVP

La salida es escrita, revisable y manual:

- ficha ordenada;
- resumen copiable;
- estado de revision;
- siguiente accion manual.

La herramienta no envia, no cobra, no factura y no automatiza.

## No-inputs del MVP

No son inputs del MVP en esta fase:

- WhatsApp;
- agenda/calendario;
- ordenador;
- texto escrito como entrada principal;
- AirPods como requisito tecnico garantizado;
- audios reales de trabajo;
- datos reales de clientes, direcciones, facturas o importes.

WhatsApp, agenda y ordenador sirven como comparador: queremos saber si dictar por voz y recibir una ficha escrita ahorra tiempo frente a ese sistema actual.

AirPods solo es contexto de uso posible. No es compromiso tecnico.

Texto escrito queda fuera como input principal salvo autorizacion futura explicita de Salva.

## Criterios para leer la respuesta del familiar

Senal positiva:

- acepta dictar por voz lo ocurrido en obra;
- entiende que la herramienta solo deja ficha escrita para revisar;
- declara ahorro real frente a WhatsApp + agenda + tarde de ordenador;
- menciona momentos concretos donde dictaria: fin de obra, furgoneta, despues de llamada, compra de material.

Senal de ajuste:

- le parece util pero pide corregir mucho;
- solo lo usaria para algunos casos: materiales, trabajos hechos o cobros;
- no entiende bien que la accion final sigue siendo manual.

Senal negativa o bloqueo:

- prefiere escribir y no dictar;
- no ve ahorro si no envia WhatsApps;
- no ve valor si no cobra, factura o automatiza;
- cree que revisar la ficha le llevaria igual o mas tiempo que su sistema actual.

## Avance interno permitido mientras esperamos respuesta

Permitido:

- preparar frases ficticias/controladas de dictado;
- definir campos minimos de ficha;
- preparar flujo conceptual de baja fidelidad;
- redactar microcopy para mock conceptual;
- definir criterios de exito y descarte.

No permitido:

- build;
- prototipo operativo;
- datos reales;
- audios reales;
- integracion con WhatsApp, agenda, Gmail, bancos o facturacion;
- automatizaciones;
- pricing;
- piloto.

## Frases ficticias/controladas de dictado

Estas frases no son datos reales. Sirven para preparar un mock conceptual si Salva aprueba avanzar tras la respuesta del familiar.

1. "En obra Cocina Norte he cambiado tres enchufes, usado dos metros de cable y queda revisar presupuesto."
2. "Apunta para revisar: material usado en obra Portal Sur, cinco magnetotermicos y una caja de registro."
3. "Trabajo terminado en local Centro, cambiar luminarias y revisar si queda pendiente de cobrar."
4. "Aviso para mañana: llamar por presupuesto de cuadro electrico en vivienda."
5. "En obra Garaje, he dejado hecha la instalacion del punto de carga y falta anotar material."
6. "Recordar comprar canaleta, cable y dos bases para la obra de esta semana."
7. "Pendiente revisar presupuesto del cliente de la reforma, falta separar mano de obra y material."
8. "Trabajo realizado: revisar averia de luz, cambiar diferencial y dejar pendiente factura."

## Flujo conceptual permitido

1. Dictar por voz.
2. Ver ficha escrita estructurada.
3. Revisar o corregir manualmente.
4. Marcar estado: capturado, revisar o listo para copiar.
5. Copiar resumen manualmente si el usuario quiere usarlo en WhatsApp, presupuesto, nota o revision posterior.

## Veredicto Gael

El avance correcto no es construir. Es fijar el concepto:

> Voz como input; ficha escrita revisable como output; WhatsApp/agenda/ordenador como comparador; acciones finales siempre manuales.

Con esta definicion, la respuesta del familiar decidirá si el foco `captura administrativa pre-facturacion por voz` merece pasar a mock conceptual de baja fidelidad o debe ajustarse/bloquearse.
