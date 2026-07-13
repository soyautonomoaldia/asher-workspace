# Analisis respuesta email electricista - 2026-07-12

Owner: Gael
Proyecto: AD_VOZ_electricistas
Fuente: respuesta escrita aportada por Salva, tratada solo dentro de `AD_VOZ_electricistas`
Estado: evidencia cualitativa individual para decidir foco MVP con Salva

## Limite de uso

Este analisis no pertenece a `nuevo_AD_V01` ni a AD Captura.

No autoriza:

- construccion;
- piloto;
- contacto externo;
- uso de datos reales;
- audios reales;
- facturas, documentos o direcciones reales;
- pricing;
- produccion;
- integraciones;
- automatizaciones con clientes;
- cambio de scope sin decision explicita de Salva.

La respuesta sirve solo para orientar una decision de foco MVP en `AD_VOZ_electricistas`.

## Dolor principal detectado

El dolor dominante es administrativo con impacto economico.

La respuesta concentra valor en:

- saber cuando le pagan;
- registrar trabajos;
- registrar material por obra;
- registrar material empleado;
- registrar trabajo realizado para facturar;
- revisar presupuestos;
- recordar avisos.

La agenda aparece, pero no como dolor principal aislado. Funciona como soporte de recordatorios. El nucleo de valor parece estar en reducir la tarde u horas sueltas de ordenador y administracion.

Lectura estricta:

- no valida mercado;
- no valida willingness to pay;
- no valida retencion;
- no prueba que un producto de voz funcione;
- si el flujo exige igual o mas tiempo que el metodo actual, queda invalidado para este usuario.

## Herramienta actual

Herramientas y habitos declarados:

- WhatsApp escrito;
- agenda;
- movil;
- posible uso de AirPods/voz;
- ordenador en bloques de tarde u horas sueltas para administracion.

Interpretacion:

- WhatsApp es el canal/habito dominante para dejar o recibir informacion escrita;
- agenda sirve para recordatorios;
- ordenador representa el coste posterior de ordenar la informacion;
- AirPods/voz aparece como posibilidad de captura comoda, no como prueba tecnica de que deba ser el canal principal desde el primer prototipo.

## Expectativa del usuario

El usuario espera:

- metodo muy comodo y rapido;
- uso desde movil o AirPods;
- disponibilidad en cualquier momento;
- ahorro neto de tiempo;
- ayuda en trabajos, material, trabajo realizado, cobros y presupuestos;
- si es posible, algunas gestiones automaticas.

La condicion de adopcion es dura:

> Si tengo que emplearle igual o mas tiempo que antes, pierde valor.

Esto convierte la friccion de captura, revision y correccion en el principal criterio de exito del MVP.

## Riesgo de scope creep

Riesgo alto.

La respuesta mezcla:

- WhatsApp;
- agenda;
- AirPods/voz;
- cobros;
- presupuestos;
- trabajos;
- materiales;
- facturacion;
- recordatorios;
- automatizacion de gestiones.

Si se interpreta literalmente, empuja hacia ERP ligero, asistente por voz, agenda, seguimiento de cobros, facturacion, presupuestos, integraciones y automatizaciones externas.

Ese camino queda fuera del gate actual.

## Matriz de foco MVP

Puntuacion 0-3 por criterio.

| Foco | Dolor claro | Frecuencia | Impacto | Encaje voz | Riesgo bajo | Total |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Gestion diaria de trabajos | 2 | 2 | 2 | 3 | 2 | 11 |
| Presupuesto/facturacion simple | 3 | 2 | 3 | 2 | 1 | 11 |
| Cobro/seguimiento | 3 | 1 | 3 | 2 | 1 | 10 |
| Materiales/compras | 3 | 2 | 2 | 3 | 2 | 12 |
| Captura administrativa pre-facturacion | 3 | 2 | 3 | 3 | 2 | 13 |

Ganador recomendado:

`Captura administrativa pre-facturacion`.

Motivo:

- agrupa el dolor real expresado sin saltar a facturacion legal, cobros automaticos ni ERP;
- permite capturar trabajos, material, trabajo realizado, aviso, presupuesto y cobro como pendientes revisables;
- encaja con voz/movil sin exigir integraciones;
- mide ahorro de tiempo frente a WhatsApp + agenda + tarde de ordenador.

## Foco MVP recomendado

Foco recomendado para decision de Salva:

> Captura por voz de trabajo realizado, material usado y pendiente administrativo, convertida en ficha escrita revisable para preparar facturacion/cobro despues.

Flujo MVP estrecho:

1. El usuario dicta o escribe una nota breve desde movil.
2. La herramienta clasifica la nota como trabajo, material, aviso, presupuesto, cobro o recordatorio.
3. La herramienta genera una ficha revisable.
4. La ficha muestra campos minimos: obra/alias, trabajo, material, pendiente, fecha/momento y siguiente accion manual.
5. La salida queda lista para revisar, copiar o usar manualmente en el sistema actual.

El MVP no debe empezar como agenda pura ni como facturacion/cobros. Debe comprobar primero si preparar mejor la informacion reduce tiempo administrativo.

## Que queda fuera de alcance

Fuera de alcance para este foco:

- WhatsApp real o integracion con WhatsApp;
- envio automatico de mensajes;
- AirPods como canal tecnico garantizado;
- transcripcion perfecta o audios reales;
- agenda avanzada;
- calendario conectado;
- rutas;
- recordatorios automaticos operativos;
- cobros reales;
- reclamacion de pagos;
- bancos;
- conciliacion;
- facturacion legal completa;
- VeriFactu;
- presupuestos formales con validez comercial;
- gestoria/fiscalidad;
- clientes externos;
- datos reales de clientes;
- documentos, facturas, fotos o direcciones reales;
- backend operativo;
- pricing;
- piloto;
- produccion;
- integraciones externas.

## Vision del equipo

### Producto

Veredicto: foco estrecho, no construir todavia.

Producto recomienda capturar trabajo, material y pendientes para preparar facturacion/cobro, con salida revisable y copiable. No recomienda agenda pura ni ERP.

### Tecnico

Veredicto: viable solo como captura revisable con datos minimos.

Tecnico recomienda tratar facturacion/cobro como etiqueta o pendiente, no como proceso real. Campos minimos: tipo, obra/alias, material, trabajo realizado, fecha/momento y siguiente accion.

### UX

Veredicto: el valor no es la voz en si, sino ahorrar la tarde de administracion.

UX recomienda validar si la captura desde movil/AirPods deja mejor preparado el cierre administrativo posterior. WhatsApp escrito sigue siendo habito principal.

### Growth / evidencia

Veredicto: ajustar foco, no construir.

Growth marca que es una sola respuesta cualitativa. El foco mas defendible es captura estructurada por voz para preparar facturacion, no automatizar cobros ni facturacion completa.

## Frases controladas para prueba futura

Estas frases son transformadas/controladas, no datos reales.

```text
Frase: Apunta material para obra cocina: cable, automatico y caja.
Tipo detectado: material
Campos esperados: obra/alias, materiales, pendiente
Dato sensible eliminado: direccion/cliente real
Resultado esperado: ficha de material pendiente
```

```text
Frase: Trabajo terminado en vivienda, cambiar enchufes y revisar cuadro, pendiente de facturar.
Tipo detectado: trabajo
Campos esperados: trabajo realizado, estado, siguiente accion
Dato sensible eliminado: direccion/cliente real
Resultado esperado: ficha de trabajo para revisar antes de facturar
```

```text
Frase: Recordar manana aviso de revisar presupuesto.
Tipo detectado: recordatorio/presupuesto
Campos esperados: momento, accion, estado
Dato sensible eliminado: cliente real
Resultado esperado: pendiente revisable, no notificacion automatica
```

```text
Frase: Material empleado en obra local: tubo, cable y dos mecanismos.
Tipo detectado: material empleado
Campos esperados: obra/alias, materiales, estado
Dato sensible eliminado: ubicacion real
Resultado esperado: ficha de material usado para cierre posterior
```

```text
Frase: Cobro pendiente de revisar cuando cierre el trabajo.
Tipo detectado: cobro/seguimiento
Campos esperados: estado, siguiente accion manual
Dato sensible eliminado: importe/cliente real
Resultado esperado: pendiente manual de revisar cobro
```

## Recomendacion Gael

No construir todavia.

Recomiendo que Salva decida si acepta este foco provisional:

`captura administrativa pre-facturacion por voz`.

Si Salva lo acepta, el siguiente entregable interno no debe ser build. Debe ser un prototipo de baja fidelidad o flujo de 3-4 pantallas con datos ficticios:

- captura rapida;
- ficha revisable;
- lista de pendientes;
- salida copiable/manual.

Condicion:

- mantener visible que no automatiza WhatsApp, cobros, facturacion, agenda ni gestiones.

## Decision pendiente

Salva no aprueba todavia el foco MVP. Antes de decidir, pide una aclaracion puntual al familiar.

Pregunta autorizada:

> Si la herramienta no envia WhatsApps, no cobra, no factura y no automatiza gestiones, pero te permite dictar por voz rapidamente lo ocurrido en una obra y te deja una ficha escrita y ordenada para revisar despues materiales, trabajo realizado, presupuesto pendiente, aviso o cobro, te seguiria ahorrando tiempo real frente a WhatsApp + agenda + tarde de ordenador?

Criterio de decision:

1. Si confirma ahorro real sin automatizacion: aprobar foco estrecho.
2. Si confirma utilidad parcial con matices: ajustar foco/copy antes de prototipo.
3. Si el valor depende de automatizacion real: bloquear este enfoque.

No se construye todavia. Gael no contacta al familiar; cualquier envio externo lo hace Salva.
