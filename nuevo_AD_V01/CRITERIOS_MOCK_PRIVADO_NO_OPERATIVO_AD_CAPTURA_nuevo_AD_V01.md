# CRITERIOS_MOCK_PRIVADO_NO_OPERATIVO_AD_CAPTURA - nuevo_AD_V01

Fecha: 2026-06-07
Owner: Asher
Estado: criterios internos para decision previa a mock privado no operativo
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
Referencias:

- `MVP_ONE_PAGER_AD_CAPTURA_nuevo_AD_V01.md`
- `UX_BAJA_FIDELIDAD_AD_CAPTURA_nuevo_AD_V01.md`

## 0. Limites

Esta ficha no autoriza construir el mock.

Solo define criterios para decidir si tiene sentido autorizarlo despues.

No autoriza:

- usuarios reales;
- datos reales;
- audios reales;
- WhatsApps reales;
- emails reales;
- calendario real;
- validacion externa;
- reclutamiento;
- mensajes externos;
- pricing;
- pagos;
- produccion;
- integraciones reales;
- automatismos;
- efectos externos.

## 1. Definicion De Mock Permitido

Un mock privado no operativo de AD Captura seria una representacion visual navegable o semi-navegable para entender el flujo.

Puede mostrar:

- primera pantalla `Bandeja`;
- entrada de captura por voz/texto simulada;
- tarjetas internas;
- estados de tarjeta;
- microcopy de confianza;
- ejemplos ficticios;
- acciones visuales sin efecto real.

No puede:

- conectarse a servicios reales;
- guardar datos reales;
- enviar mensajes;
- crear citas;
- cobrar;
- facturar;
- generar documentos legales;
- pedir permisos reales;
- simular integraciones de forma que parezcan activas;
- usarse con usuarios reales.

## 2. Objetivo Del Mock

El objetivo no es probar mercado.

El objetivo es responder internamente:

1. Se entiende la promesa en menos de 10 segundos.
2. La primera pantalla parece ligera, no ERP.
3. La tarjeta se entiende sin explicacion larga.
4. Los limites son visibles sin matar el valor.
5. El flujo invita a revisar y cerrar, no a acumular otra lista.

## 3. Pantallas Minimas

El mock solo deberia tener cinco pantallas o estados:

1. `Bandeja`
2. `Nueva captura`
3. `Tarjeta pendiente`
4. `Tarjeta dudosa`
5. `Captura cerrada o descartada`

No incluir:

- clientes completos;
- contabilidad;
- facturas;
- pagos;
- dashboard financiero;
- calendario completo;
- historial tecnico;
- gestor documental;
- ajustes de integraciones.

## 4. Componentes Minimos

### Bandeja

Debe mostrar:

- capturas pendientes;
- hoy;
- materiales;
- cobros;
- presupuestos;
- dudosas.

### Entrada De Captura

Debe mostrar:

- accion de voz simulada;
- campo de texto rapido;
- ejemplo corto;
- mensaje de limite: `No se enviara nada`.

### Tarjeta

Debe mostrar:

- texto original;
- objetos detectados;
- confianza;
- campos dudosos;
- estado;
- acciones: confirmar, editar, descartar.

### Microcopy

Obligatorio:

- `Guardado para revisar despues.`
- `No se ha enviado nada.`
- `Pendiente de revisar.`
- `Necesita revisar.`
- `AD no factura.`
- `AD no cobra.`
- `AD no envia mensajes.`

## 5. Datos Permitidos

Solo ejemplos ficticios.

Ejemplos permitidos:

- Carmen;
- Javi;
- Pilar;
- Ines;
- fuga bajo fregadero;
- sifon;
- 180;
- lavabo pequeno;
- reparar presion.

Datos prohibidos:

- nombres reales;
- telefonos reales;
- direcciones reales;
- audios reales;
- fotos reales;
- chats reales;
- emails reales;
- importes reales;
- documentos reales;
- datos fiscales;
- datos bancarios.

## 6. Flujos Obligatorios Del Mock

### Flujo 1: captura por voz simulada

Entrada:

`Manana nueve volver a Carmen, fuga bajo fregadero, llevar sifon y revisar presion.`

Resultado:

Tarjeta `visita pendiente`.

### Flujo 2: material pendiente

Entrada:

`Comprar dos llaves de paso de media para Pilar antes del jueves.`

Resultado:

Tarjeta `material pendiente`.

### Flujo 3: cobro pendiente

Entrada:

`Reclamar a Javi los 180 de la reparacion de ayer.`

Resultado:

Tarjeta `cobro pendiente`.

### Flujo 4: presupuesto pendiente

Entrada:

`Presupuesto lavabo pequeno para Ines, maximo 300.`

Resultado:

Tarjeta `presupuesto pendiente`.

### Flujo 5: captura dudosa

Entrada:

`Comunidad San Marcos, cuatro pisos, grieta, caldera, administrador, fotos y presupuesto urgente.`

Resultado:

Tarjeta `necesita revisar`, con recomendacion de dividir.

## 7. Criterios De Aceptacion Interna

El mock seria aceptable si:

- la promesa se entiende sin explicar AD como ERP;
- la primera pantalla se entiende como bandeja de revision;
- cada tarjeta se entiende en menos de 5 segundos;
- el usuario ficticio sabe que no se ha enviado nada;
- las acciones visibles son pocas y claras;
- no aparecen modulos de gestion completa;
- no parece que AD facture, cobre, agende o envie mensajes;
- los ejemplos conectan con vuelta, material, cobro, presupuesto o cierre.

## 8. Invalidadores Del Mock

Bloquear o rehacer si:

- parece un ERP;
- parece una app de facturacion;
- parece un CRM;
- parece que integra WhatsApp o calendario real;
- oculta que no envia nada;
- la bandeja se ve como lista infinita sin cierre;
- necesita texto explicativo largo para entenderse;
- el flujo principal tiene demasiados botones;
- la tarjeta no deja claro que todo esta pendiente de revisar;
- invita a usar datos reales.

## 9. Decision Requerida

Antes de autorizar un mock privado no operativo, Salva debe aprobar:

1. Que el mock sea solo conceptual.
2. Que use solo datos ficticios.
3. Que no tenga integraciones.
4. Que no se comparta con usuarios externos.
5. Que no se use como validacion de mercado.
6. Que el objetivo sea entender UX, no demostrar negocio.

## 10. Siguiente Paso Si Se Aprueba

Si Salva aprueba estos criterios, el siguiente paso seria crear un mock privado no operativo de baja fidelidad con:

- HTML local o imagenes estaticas;
- datos ficticios;
- sin backend;
- sin persistencia real;
- sin integraciones;
- sin usuarios reales.

Ese mock deberia vivir en una carpeta interna de `nuevo_AD_V01/mockups` y estar marcado como conceptual.
