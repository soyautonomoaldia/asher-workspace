# MVP_ONE_PAGER_AD_CAPTURA - nuevo_AD_V01

Fecha: 2026-06-06
Owner: Asher
Estado: propuesta interna candidata para decision de Salva
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
Referencia directa: `MICROFASE_36_CAPTURAS_FICTICIAS_nuevo_AD_V01.md`

## 0. Limites

Esta ficha no autoriza:

- validacion externa;
- usuarios reales;
- datos reales;
- audios reales;
- WhatsApps reales;
- emails reales;
- calendarios reales;
- build;
- mock operativo publico;
- pricing;
- pagos;
- produccion;
- integraciones reales;
- mensajes externos;
- efectos externos.

## 1. Tesis Del MVP

Nombre candidato:

`AD Captura`

Promesa:

> Diselo a AD antes de que se te olvide; AD te lo deja listo para revisar.

Definicion corta:

> AD Captura es una libreta operativa inteligente para autonomos de oficio: captura frases simples de trabajo, las convierte en tarjetas internas revisables y ayuda a no perder vueltas, materiales, presupuestos, cobros o cierres.

Matiz aprobado tras revision de mercado:

> AD Captura no debe limitarse a almacenar. Cada tarjeta debe convertirse en un paquete accionable: un resumen claro, campos utiles y una siguiente accion preparada para que el usuario tarde menos en cerrar, copiar, enviar manualmente o trasladar a su herramienta habitual.

No es:

- ERP;
- CRM;
- gestor fiscal;
- facturacion;
- SAT;
- GMAO;
- WhatsApp automatico;
- calendario automatico;
- gestor de documentos;
- automatizador de cobros.

## 2. Usuario Inicial Candidato

Usuario candidato:

Autonomo o microequipo de reparacion domestica, especialmente fontaneria/reparaciones sencillas.

Razon:

- genera capturas simples y frecuentes;
- mezcla visitas, materiales, cobros, presupuestos y cierres;
- evita empezar por casos tecnicos complejos;
- permite comprobar conducta antes de entrar en ERP, SAT, fiscalidad o integraciones.

Decision pendiente:

Salva debe aprobar, cambiar o bloquear este usuario inicial antes de cualquier validacion futura.

## 3. Problema Que Ataca

El usuario pierde control porque trabaja con informacion dispersa en:

- cabeza;
- llamadas;
- WhatsApp;
- notas sueltas;
- libreta;
- fotos;
- calendario;
- recuerdos de furgoneta o cierre de jornada.

El dolor no es "necesito un ERP".

El dolor es:

> Tengo cosas pequenas que no debo olvidar y se me escapan: volver, comprar material, cobrar, presupuestar, llamar, cerrar.

## 4. Core Del Producto

El MVP solo hace cuatro cosas:

1. Capturar una frase simple.
2. Convertirla en una tarjeta interna.
3. Separar objetos basicos.
4. Dejarla en una bandeja de revision.

Regla:

> Si una captura necesita gestion completa, documento, automatismo, factura, pago, parte, certificado o integracion, no es flujo objetivo del MVP.

Regla de valor:

> Si una tarjeta solo guarda informacion y no reduce una accion posterior, no es suficientemente valiosa.

La tarjeta debe ofrecer, segun el caso, una o varias salidas internas no operativas:

- resumen listo para copiar;
- checklist de lo pendiente;
- borrador textual no legal;
- campos estructurados para revisar;
- recordatorio interno;
- siguiente accion sugerida.

Estas salidas no deben enviar mensajes, crear presupuestos legales, facturar, cobrar ni integrarse con herramientas externas en el MVP.

## 5. Objetos Minimos

Objetos raiz:

1. `captura`
2. `contacto_o_alias`
3. `trabajo_o_aviso`
4. `visita_o_momento`
5. `pendiente_accionable`
6. `nota_de_contexto`

Subtipos permitidos dentro de `pendiente_accionable`:

- tarea;
- material;
- presupuesto pendiente interno;
- cobro pendiente interno;
- recordatorio interno.

Todo objeto sugerido queda:

`pendiente_de_revisar`

## 6. Flujo Principal

### Flujo A: voz o acceso rapido

1. Usuario activa entrada:
   - "Oye Siri, apunta en AD";
   - boton rapido;
   - entrada de voz dentro de app.
2. Usuario dicta una frase simple.
3. AD guarda la captura.
4. AD crea tarjeta interna.
5. Usuario revisa despues.

Texto de confianza:

> Guardado para revisar despues. No se ha enviado nada.

### Flujo B: texto rapido dentro de app

1. Usuario abre AD.
2. Escribe una frase corta.
3. AD crea tarjeta pendiente.
4. Usuario confirma, edita o descarta.

### Flujo C: pegar texto ficticio

1. Usuario pega un texto simple.
2. AD crea tarjeta interna.
3. Si el texto es largo o ambiguo, AD lo marca como baja confianza.

Nota:

No se aprueba integracion real con WhatsApp, email o calendario. Esos canales solo existen como simulacion o referencia conceptual.

## 7. Primera Pantalla

Primera pantalla recomendada:

`Bandeja`

No usar dashboard grande.
No usar CRM.
No usar modulos.
No usar "todo tu negocio".

Bloques minimos:

- Capturas pendientes;
- Hoy;
- Materiales;
- Cobros;
- Presupuestos;
- Dudosas.

Acciones por tarjeta:

- confirmar;
- editar;
- descartar.

## 8. Cinco Tarjetas Ejemplo

### Tarjeta 1: visita pendiente

Captura original:

`Manana nueve volver a Carmen, fuga bajo fregadero, llevar sifon y revisar presion.`

Tarjeta:

- tipo: visita pendiente;
- cliente/alias: Carmen;
- trabajo: fuga bajo fregadero;
- momento: manana 09:00;
- material: sifon;
- tarea: revisar presion;
- estado: pendiente de revisar;
- limite visible: no se ha enviado nada.

### Tarjeta 2: material pendiente

Captura original:

`Comprar dos llaves de paso de media para Pilar antes del jueves.`

Tarjeta:

- tipo: material pendiente;
- cliente/alias: Pilar;
- material: dos llaves de paso de media;
- limite temporal: antes del jueves;
- estado: pendiente de revisar.

### Tarjeta 3: cobro pendiente

Captura original:

`Reclamar a Javi los 180 de la reparacion de ayer.`

Tarjeta:

- tipo: cobro pendiente interno;
- cliente/alias: Javi;
- importe: 180;
- referencia: reparacion de ayer;
- estado: revisar antes de marcar como cobro;
- salida preparada: texto interno para copiar o revisar;
- limite visible: AD no cobra ni envia mensajes.

### Tarjeta 4: presupuesto pendiente

Captura original:

`Presupuesto lavabo pequeno para Ines, maximo 300.`

Tarjeta:

- tipo: presupuesto pendiente interno;
- cliente/alias: Ines;
- trabajo: lavabo pequeno;
- nota: maximo 300;
- estado: pendiente de revisar;
- salida preparada: borrador textual no legal y lista de campos faltantes;
- limite visible: AD no genera presupuesto legal.

### Tarjeta 5: captura dudosa

Captura original:

`Comunidad San Marcos, cuatro pisos, grieta, caldera, administrador, fotos y presupuesto urgente.`

Tarjeta:

- tipo: captura dudosa;
- confianza: baja;
- razon: demasiados frentes;
- accion recomendada: dividir en varias capturas;
- estado: pendiente de revisar;
- limite visible: fuera del flujo objetivo del MVP.

## 9. Criterio De Exito Del MVP

El MVP no debe medirse por "la IA interpreta bien".

Debe medirse por:

> La tarjeta ayuda al usuario a cerrar o descartar informacion en pocos segundos.

Metricas candidatas:

- capturas utiles por semana;
- porcentaje de capturas revisadas;
- porcentaje de capturas cerradas o descartadas;
- materiales no olvidados;
- visitas no perdidas;
- cobros recordados;
- presupuestos no olvidados;
- tiempo hasta revisar;
- capturas que se abandonan.

## 10. Invalidadores

Bloquear o recortar si:

- el usuario no revisa la bandeja;
- la mayoria de capturas requieren mas de una pregunta;
- el valor exige WhatsApp real, calendario real, pagos o facturacion;
- las capturas se convierten en otra lista abandonada;
- el usuario lo percibe como nota de voz normal;
- hay que ocultar limites para que parezca valioso;
- el producto necesita explicar demasiado para usarse.

## 11. Siguiente Decision Para Salva

Salva debe decidir si acepta esta formulacion como MVP candidato:

> AD Captura: app independiente con entrada ultrarrapida por voz/texto y bandeja de tarjetas revisables para no perder vueltas, materiales, cobros, presupuestos y cierres.

Si se acepta, el siguiente paso interno no es construir.

El siguiente paso interno seria una ficha UX de baja fidelidad:

- primera pantalla;
- tarjeta;
- estados;
- microcopy;
- cinco flujos ejemplo.

Esa ficha seguiria sin autorizar build, validacion externa ni datos reales.
