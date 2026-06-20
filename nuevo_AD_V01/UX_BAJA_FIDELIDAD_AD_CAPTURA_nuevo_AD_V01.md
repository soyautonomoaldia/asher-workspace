# UX_BAJA_FIDELIDAD_AD_CAPTURA - nuevo_AD_V01

Fecha: 2026-06-06
Owner: Asher
Estado: propuesta UX interna de baja fidelidad
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
Referencia directa: `MVP_ONE_PAGER_AD_CAPTURA_nuevo_AD_V01.md`

## 0. Limites

Esta ficha no autoriza:

- build;
- mock operativo publico;
- usuarios reales;
- datos reales;
- audios reales;
- WhatsApps reales;
- emails reales;
- calendarios reales;
- validacion externa;
- pricing;
- pagos;
- produccion;
- integraciones reales;
- efectos externos.

Todo lo descrito es conceptual/documental.

## 1. Principio UX

AD Captura no debe sentirse como una app de gestion.

Debe sentirse como:

> una bandeja tranquila donde cae lo que el autonomo no quiere perder.

Regla principal:

> Capturar ahora, revisar despues.

Frase de confianza:

> Guardado para revisar despues. No se ha enviado nada.

## 2. Primera Pantalla

Nombre de pantalla:

`Bandeja`

Objetivo:

Mostrar solo lo que necesita revision, cierre o descarte.

No mostrar:

- dashboard financiero;
- CRM;
- graficas;
- modulos;
- facturacion;
- calendario completo;
- integraciones;
- onboarding largo.

Estructura conceptual:

```text
AD Captura

[ + Capturar ]

Hoy
- 3 capturas pendientes
- 1 material
- 1 cobro

Dudosas
- 2 necesitan revisar

Listas
- Visitas
- Materiales
- Cobros
- Presupuestos
```

## 3. Entrada De Captura

Entrada minima:

```text
Nueva captura

[ microfono ]  Habla o escribe lo que no quieres olvidar

Ejemplo:
Manana nueve Carmen fuga fregadero llevar sifon

[ Guardar captura ]
```

Estados:

- vacia;
- escuchando;
- transcripcion pendiente;
- texto listo;
- guardada;
- error;
- descartada.

Microcopy:

- `Habla como lo dirias en la furgoneta.`
- `Una idea por captura funciona mejor.`
- `No se enviara nada.`
- `Puedes corregirlo despues.`

## 4. Tarjeta Base

Una tarjeta nunca debe parecer una accion automatica.

Formato:

```text
Captura pendiente

"Manana nueve volver a Carmen, fuga bajo fregadero,
llevar sifon y revisar presion."

Detectado:
- Carmen
- visita: manana 09:00
- trabajo: fuga bajo fregadero
- material: sifon
- tarea: revisar presion

Confianza: alta

[ Confirmar ] [ Editar ] [ Descartar ]

No se ha enviado nada.
```

Campos visibles:

- texto original;
- tipo sugerido;
- objetos detectados;
- confianza;
- campos dudosos;
- estado;
- limite de accion.

## 5. Estados De Tarjeta

### pendiente_de_revisar

Uso:

Estado inicial de toda captura.

Copy:

`Pendiente de revisar`

Acciones:

- confirmar;
- editar;
- descartar.

### confirmada

Uso:

El usuario acepta la tarjeta como informacion interna.

Copy:

`Confirmada`

Acciones:

- marcar hecho;
- editar;
- devolver a pendiente.

### dudosa

Uso:

AD detecta ambiguedad, exceso de informacion o baja confianza.

Copy:

`Necesita revisar`

Acciones:

- dividir;
- editar;
- descartar.

### descartada

Uso:

No aplica al trabajo, no aporta valor o no cabe en el MVP.

Copy:

`Descartada`

Acciones:

- recuperar;
- eliminar de vista.

### cerrada

Uso:

La tarea interna queda resuelta.

Copy:

`Cerrada`

Acciones:

- ver detalle;
- reabrir.

## 6. Cinco Flujos Ejemplo

### Flujo 1: visita pendiente

Entrada:

`Manana nueve volver a Carmen, fuga bajo fregadero, llevar sifon y revisar presion.`

Salida:

- cliente/alias: Carmen;
- trabajo: fuga bajo fregadero;
- visita/momento: manana 09:00;
- pendiente material: sifon;
- pendiente tarea: revisar presion.

Pantalla final:

```text
Visita pendiente
Carmen - manana 09:00
Fuga bajo fregadero

Material: sifon
Tarea: revisar presion

[ Confirmar ] [ Editar ] [ Descartar ]
No se ha enviado nada.
```

### Flujo 2: material pendiente

Entrada:

`Comprar dos llaves de paso de media para Pilar antes del jueves.`

Salida:

- cliente/alias: Pilar;
- material: dos llaves de paso de media;
- momento: antes del jueves.

Pantalla final:

```text
Material pendiente
Pilar

Comprar:
- dos llaves de paso de media

Limite: antes del jueves

[ Confirmar ] [ Editar ] [ Descartar ]
```

### Flujo 3: cobro pendiente

Entrada:

`Reclamar a Javi los 180 de la reparacion de ayer.`

Salida:

- cliente/alias: Javi;
- cobro pendiente interno: 180;
- referencia: reparacion de ayer.

Pantalla final:

```text
Cobro pendiente
Javi - 180

Referencia:
reparacion de ayer

[ Confirmar ] [ Editar ] [ Descartar ]
AD no cobra ni envia mensajes.
```

### Flujo 4: presupuesto pendiente

Entrada:

`Presupuesto lavabo pequeno para Ines, maximo 300.`

Salida:

- cliente/alias: Ines;
- trabajo: lavabo pequeno;
- presupuesto pendiente interno;
- nota: maximo 300.

Pantalla final:

```text
Presupuesto pendiente
Ines

Trabajo:
lavabo pequeno

Nota:
maximo 300

[ Confirmar ] [ Editar ] [ Descartar ]
AD no genera presupuesto legal.
```

### Flujo 5: captura dudosa

Entrada:

`Comunidad San Marcos, cuatro pisos, grieta, caldera, administrador, fotos y presupuesto urgente.`

Salida:

- confianza: baja;
- razon: demasiados frentes;
- recomendacion: dividir en varias capturas.

Pantalla final:

```text
Necesita revisar

Parece demasiado para una captura rapida.

Detectado:
- comunidad
- varios trabajos
- fotos
- presupuesto urgente

Mejor dividirlo en 2 o 3 capturas.

[ Dividir ] [ Editar ] [ Descartar ]
No se ha enviado nada.
```

## 7. Microcopy Obligatorio

Usar:

- `Guardado para revisar despues.`
- `No se ha enviado nada.`
- `Pendiente de revisar.`
- `Necesita revisar.`
- `Mejor dividirlo en varias capturas.`
- `AD no factura.`
- `AD no cobra.`
- `AD no envia mensajes.`

Evitar:

- `Enviado`;
- `Cobrado`;
- `Factura creada`;
- `Cita creada`;
- `WhatsApp conectado`;
- `Automatizado`;
- `Gestionado`;
- `Resuelto`.

## 8. Reglas De Producto Para UX

1. Una captura debe poder revisarse en pocos segundos.
2. Una tarjeta dudosa no debe fingir seguridad.
3. Si hay demasiados datos, la respuesta correcta es dividir.
4. No ocultar limites para que el producto parezca mas potente.
5. La confianza del usuario importa mas que la magia.
6. El cierre interno vale mas que la automatizacion temprana.
7. La bandeja no debe convertirse en otra lista abandonada.

## 9. Siguiente Decision

Salva debe decidir si esta UX de baja fidelidad representa correctamente el MVP candidato.

Si se aprueba, el siguiente paso interno seria definir una ficha de criterios para mock privado no operativo.

Ese paso seguiria sin autorizar build real, datos reales, integraciones ni validacion externa.
