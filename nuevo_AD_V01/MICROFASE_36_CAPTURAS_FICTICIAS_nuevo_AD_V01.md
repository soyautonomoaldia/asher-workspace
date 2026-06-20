# MICROFASE_36_CAPTURAS_FICTICIAS - nuevo_AD_V01

Fecha: 2026-06-06
Owner: Gael
Estado: microfase interna documental completada
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
Consolidado de referencia: `GAEL_CONSOLIDADO_RONDA_CAPTURA_EXTERNA_nuevo_AD_V01.md`

## 0. Limites De La Microfase

Esta ficha es solo definicion y evaluacion documental interna.

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
- mock operativo publico;
- build;
- pricing;
- pagos;
- produccion;
- integraciones reales;
- efectos externos.

Principio evaluado:

> Captura externa en menos de 10 segundos; organizacion interna despues.

Promesa interna evaluada:

> Diselo a AD antes de que se te olvide.

## 1. Definicion Cerrada De La Muestra

La muestra se define antes de evaluar cada captura para reducir sesgo de confirmacion.

Tamano: 36 capturas ficticias.

Distribucion por canal simulado:

| Canal simulado | Capturas | IDs |
|---|---:|---|
| voz/Siri simulada | 6 | C01-C06 |
| accion rapida simulada | 6 | C07-C12 |
| WhatsApp simulado | 6 | C13-C18 |
| email simulado | 6 | C19-C24 |
| calendario simulado | 6 | C25-C30 |
| texto pegado ficticio | 6 | C31-C36 |

Reglas de evaluacion:

- Todos los nombres, lugares, importes y casos son ficticios.
- La muestra mezcla casos de oficio domestico y microequipo sin aprobar target.
- No se crea ningun objeto raiz fuera de los seis aprobados.
- Los seis objetos raiz permitidos son: `captura`, `contacto_o_alias`, `trabajo_o_aviso`, `visita_o_momento`, `pendiente_accionable`, `nota_de_contexto`.
- Subtipos permitidos dentro de `pendiente_accionable`: tarea, material, presupuesto pendiente interno, cobro pendiente interno, recordatorio interno.
- Toda accion queda como interna y pendiente de revision.
- Toda dependencia de integracion se mide como riesgo, no como permiso.

## 2. Tabla De Capturas

| id | origen simulado | frase ficticia | cabe en menos de 10 segundos | objetos sugeridos | campos dudosos | confianza | preguntas necesarias | decision de revision | riesgo_privacidad_si_fuera_real | dato_prohibido_detectado | dependencia_de_integracion_real | conexion_economica | decision |
|---|---|---|---|---|---|---|---:|---|---|---|---|---|---|
| C01 | voz/Siri simulada | Manana nueve volver a Carmen, fuga bajo fregadero, llevar sifon y revisar presion | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento; pendiente_accionable material y tarea; nota_de_contexto | direccion y telefono | alta | 1 | revisar tarjeta y confirmar visita | medio | no | baja | vuelta; material; cierre | mantener |
| C02 | voz/Siri simulada | Llamar a Raul por el termo, cobra desplazamiento y pide fotos antes de ir | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable cobro y tarea; nota_de_contexto | importe y canal de fotos | media | 1 | revisar y completar importe interno | medio | no | media | cobro; tiempo | mantener |
| C03 | voz/Siri simulada | Pedir dos llaves de paso de media para obra de Pilar antes del jueves | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento; pendiente_accionable material y recordatorio | proveedor y hora limite | alta | 1 | revisar material y fecha | bajo | no | baja | material; tiempo | mantener |
| C04 | voz/Siri simulada | Presupuesto aire salon de vecino de Luis, mirar metros y hueco de maquina | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable presupuesto y tarea; nota_de_contexto | cliente real y medidas | media | 1 | revisar alias y datos pendientes | medio | no | baja | presupuesto | mantener |
| C05 | voz/Siri simulada | No olvides reclamar a Javi los 180 de la reparacion de ayer | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable cobro | trabajo exacto y vencimiento | media | 1 | revisar antes de marcar cobro pendiente | alto | no | baja | cobro | mantener |
| C06 | voz/Siri simulada | Apunta todo lo de la comunidad de San Marcos, cuatro pisos, grieta, caldera, administrador, fotos y presupuesto urgente | no | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable presupuesto y tarea; nota_de_contexto | demasiados frentes, contactos y prioridad | baja | 3 | dividir en capturas o rechazar como captura rapida | alto | no | alta | presupuesto; tiempo | ajustar |
| C07 | accion rapida simulada | Marta persiana salon atascada, pasar viernes tarde | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento | hora concreta y direccion | alta | 1 | revisar fecha y completar direccion | medio | no | baja | vuelta; cierre | mantener |
| C08 | accion rapida simulada | Comprar silicona blanca y cinta teflon para Jose | si | captura; contacto_o_alias; pendiente_accionable material | cantidad y trabajo asociado | media | 1 | revisar material y asociar trabajo si existe | bajo | no | baja | material; tiempo | mantener |
| C09 | accion rapida simulada | Enviar presupuesto lavabo pequeno a Ines, maximo 300 | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable presupuesto; nota_de_contexto | alcance y validez del maximo | media | 1 | revisar como presupuesto interno pendiente | medio | no | baja | presupuesto | mantener |
| C10 | accion rapida simulada | Miguel pago la mitad, falta resto cuando termine | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable cobro; nota_de_contexto | importe total y estado del trabajo | media | 2 | revisar antes de cerrar cobro | alto | no | baja | cobro; cierre | ajustar |
| C11 | accion rapida simulada | Revisar olor cocina local Norte despues de comer | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento; pendiente_accionable tarea | hora y riesgo tecnico | media | 1 | revisar momento y prioridad | medio | no | baja | tiempo; cierre | mantener |
| C12 | accion rapida simulada | Idea: hacer tarjeta descuento clientes buenos | si | captura; nota_de_contexto | no es trabajo operativo | baja | 0 | archivar como nota o descartar | bajo | no | baja | no clara | invalidar |
| C13 | WhatsApp simulado | Ficticio: Carmen dice que el agua vuelve a salir por abajo y que puede a las 18 | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento; nota_de_contexto | dia concreto y ubicacion | alta | 1 | revisar visita sugerida | alto | no | critica | vuelta; cierre | ajustar |
| C14 | WhatsApp simulado | Ficticio: cliente manda foto de pieza rota y pregunta si compras tu el recambio | si | captura; trabajo_o_aviso; pendiente_accionable material; nota_de_contexto | cliente, pieza y foto no disponible | baja | 2 | pedir identificacion interna antes de usar | alto | posible adjunto si fuera real | critica | material; presupuesto | ajustar |
| C15 | WhatsApp simulado | Ficticio: Raul confirma que acepta 240 por cambiar termo el martes | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento; pendiente_accionable presupuesto; nota_de_contexto | hora y condiciones | media | 1 | revisar presupuesto aceptado como interno | alto | no | critica | presupuesto; cobro | ajustar |
| C16 | WhatsApp simulado | Ficticio: administradora pide factura de la reparacion pasada y copia del parte | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable tarea; nota_de_contexto | factura y parte quedan fuera de alcance | baja | 2 | marcar fuera de promesa y revisar manual | alto | posible documento si fuera real | critica | cobro; cierre | ajustar |
| C17 | WhatsApp simulado | Ficticio: Laura dice que no estara manana, llamar antes de salir | si | captura; contacto_o_alias; visita_o_momento; pendiente_accionable recordatorio; nota_de_contexto | hora y trabajo asociado | media | 1 | revisar recordatorio interno | medio | no | critica | tiempo; vuelta evitada | ajustar |
| C18 | WhatsApp simulado | Ficticio: cliente pregunta si puede pagar por Bizum ahora | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable cobro; nota_de_contexto | importe, trabajo y medio de pago fuera de alcance | baja | 2 | revisar y no prometer pago | alto | posible dato financiero si fuera real | critica | cobro | ajustar |
| C19 | email simulado | Ficticio: solicitud de presupuesto para cambiar grifo de cocina y revisar humedad en mueble | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable presupuesto y tarea; nota_de_contexto | direccion y fotos | media | 1 | revisar trabajo y presupuesto pendiente | alto | no | alta | presupuesto | mantener |
| C20 | email simulado | Ficticio: proveedor confirma entrega de bomba el jueves por la manana | si | captura; contacto_o_alias; visita_o_momento; pendiente_accionable material; nota_de_contexto | obra asociada y hora | media | 1 | revisar material recibido pendiente | medio | no | alta | material; tiempo | mantener |
| C21 | email simulado | Ficticio: comunidad pide detalle de trabajos, garantia, seguro, CIF y certificado para reunion | no | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable tarea; nota_de_contexto | demasiados documentos y obligaciones | baja | 3 | rechazar como captura rapida y tratar fuera de MVP | alto | posible fiscal/legal si fuera real | alta | presupuesto; cierre | invalidar |
| C22 | email simulado | Ficticio: cliente recuerda que queda pendiente sellar plato de ducha antes del viernes | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento; pendiente_accionable tarea | dia exacto y direccion | alta | 1 | revisar pendiente y fecha | alto | no | alta | cierre; vuelta | mantener |
| C23 | email simulado | Ficticio: mensaje largo con tres incidencias en dos viviendas y presupuesto nuevo para local | dudoso | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable presupuesto y tarea; nota_de_contexto | requiere separar casos | baja | 3 | dividir o invalidar por exceso | alto | no | alta | presupuesto; tiempo | ajustar |
| C24 | email simulado | Ficticio: aviso de impago de mantenimiento mensual de Abril | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable cobro; nota_de_contexto | contrato, importe y vencimiento | media | 2 | revisar cobro interno | alto | posible dato financiero si fuera real | alta | cobro | mantener |
| C25 | calendario simulado | Ficticio: jueves 8 visita Maria calefaccion, llevar manometro | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento; pendiente_accionable material | direccion y duracion | alta | 1 | revisar visita y material | medio | no | alta | vuelta; material | mantener |
| C26 | calendario simulado | Ficticio: bloquear viernes manana para compras almacen y revisar facturas | si | captura; visita_o_momento; pendiente_accionable material y tarea; nota_de_contexto | lista de compra y facturas fuera | media | 1 | revisar como bloque interno | medio | posible fiscal si fuera real | media | tiempo; material | ajustar |
| C27 | calendario simulado | Ficticio: recordatorio llamar a Elena 30 minutos antes | si | captura; contacto_o_alias; visita_o_momento; pendiente_accionable recordatorio | trabajo asociado | media | 1 | revisar recordatorio | medio | no | alta | vuelta evitada | mantener |
| C28 | calendario simulado | Ficticio: cita Jose, direccion Plaza Alta 14, reparar fuga y cobrar pendiente anterior | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento; pendiente_accionable cobro y tarea; nota_de_contexto | importe y consentimiento de direccion | media | 1 | revisar antes de confirmar | alto | direccion si fuera real | alta | vuelta; cobro; cierre | mantener |
| C29 | calendario simulado | Ficticio: vacaciones del colegio del nino | si | captura; nota_de_contexto | no es trabajo AD | baja | 0 | descartar o no importar | alto | dato familiar si fuera real | media | no clara | invalidar |
| C30 | calendario simulado | Ficticio: revisar tres mantenimientos ruta norte martes, llamar a todos antes | dudoso | captura; visita_o_momento; pendiente_accionable recordatorio; nota_de_contexto | contactos, orden y trabajos | baja | 3 | dividir en varias capturas | alto | no | alta | tiempo; cierre | ajustar |
| C31 | texto pegado ficticio | Cliente Ana: cambiar mecanismo cisterna. Pide ir despues de las 17. Comprar universal. | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento; pendiente_accionable material; nota_de_contexto | dia y direccion | alta | 1 | revisar visita y material | medio | no | baja | material; vuelta | mantener |
| C32 | texto pegado ficticio | Falta cobrar 90 a Pedro por urgencia sabado | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable cobro; nota_de_contexto | trabajo exacto y vencimiento | media | 1 | revisar cobro pendiente | alto | no | baja | cobro | mantener |
| C33 | texto pegado ficticio | Para local Azul: medir hueco campana, pedir precio motor, responder esta semana | si | captura; contacto_o_alias; trabajo_o_aviso; visita_o_momento; pendiente_accionable material y tarea; nota_de_contexto | dia y proveedor | media | 1 | revisar tareas y fecha | medio | no | baja | presupuesto; material; tiempo | mantener |
| C34 | texto pegado ficticio | Presupuesto banera, mampara, azulejos, retirada, fotos, permiso comunidad, hablar con Paco y cobrar senal | dudoso | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable presupuesto y cobro; nota_de_contexto | demasiados items y actor | baja | 3 | dividir antes de usar | alto | posible documento si fuera real | media | presupuesto; cobro | ajustar |
| C35 | texto pegado ficticio | Revisar presion caldera Sonia, suena raro al arrancar | si | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable tarea; nota_de_contexto | momento de visita | alta | 1 | revisar y fijar momento | medio | no | baja | cierre; vuelta | mantener |
| C36 | texto pegado ficticio | Cliente enfadado, dice que no paga hasta que quede perfecto | dudoso | captura; contacto_o_alias; trabajo_o_aviso; pendiente_accionable cobro y tarea; nota_de_contexto | cliente, importe, causa y cierre | baja | 3 | revisar manualmente como conflicto | alto | no | baja | cobro; cierre | ajustar |

## 3. Resultados Agregados Contra Invalidadores

| Criterio | Resultado | Umbral de invalidacion | Veredicto |
|---|---:|---:|---|
| Capturas que caben claramente en menos de 10 segundos | 30/36 = 83,3% | menos de 80% | no invalida |
| Capturas `si` o `dudoso` para menos de 10 segundos | 34/36 = 94,4% | menos de 80% razonable | no invalida |
| Capturas reducibles a los seis objetos raiz sin crear objetos nuevos | 36/36 = 100% | menos de 70% | no invalida |
| Capturas con accion interna clara de revision o cierre | 30/36 = 83,3% | menos de 60% | no invalida |
| Capturas con dependencia critica de integracion real | 6/36 = 16,7% | mas de 25% | no invalida, pero tensiona canales |
| Capturas con mas de una pregunta de aclaracion | 11/36 = 30,6% | mas de 30% | invalida parcialmente y obliga a recortar |
| Capturas con confianza baja | 11/36 = 30,6% | mayoria baja | no invalida |
| Capturas sin conexion economica clara | 2/36 = 5,6% | captura no conecta con dinero, tiempo, vuelta, material, presupuesto, cobro o cierre | no invalida |
| Capturas que requieren reescritura completa o division fuerte | 6/36 = 16,7% | mayoria requiere reescritura completa | no invalida |

Lectura estricta:

- La tesis no aguanta limpia tal como esta formulada. Cruza por poco el invalidador de aclaraciones, asi que exige recorte obligatorio antes de cualquier paso.
- La tesis si aguanta como patron estrecho de capturas simples: persona, trabajo, momento, material, dinero o cierre.
- La prueba favorece capturas cortas y operativas; cuando aparece email largo, comunidad, documentos, foto, parte o conflicto, AD se acerca rapido al terreno ERP/SAT.
- WhatsApp simulado y calendario simulado son utiles como fuentes, pero tienen la mayor dependencia de integracion real si se intentan llevar a producto.
- La captura rapida funciona mejor cuando el resultado es una tarjeta interna, no cuando promete resolver la gestion completa.

## 4. Riesgos Nuevos Detectados

### Riesgo 1: Los Canales Fuertes Son Los Mas Peligrosos

WhatsApp y calendario producen capturas muy naturales, pero en producto real arrastrarian permisos, expectativas, historiales, adjuntos, contactos y automatismos. Si AD depende de esos canales desde el inicio, la tesis se contamina con integracion antes de probar conducta.

Decision recomendada: mantenerlos como canales simulados y no convertirlos en requisito de MVP.

### Riesgo 2: El Objeto `nota_de_contexto` Puede Convertirse En Cajon

Varias capturas entran porque `nota_de_contexto` absorbe ambiguedad. Eso ayuda a no crear objetos nuevos, pero puede esconder informacion no accionable.

Decision recomendada: exigir que toda tarjeta tenga al menos una de estas salidas: revisar visita, revisar material, revisar presupuesto, revisar cobro, cerrar informacion o descartar.

### Riesgo 3: La Captura Rapida No Resuelve Conflictos

Casos de impago, cliente enfadado, comunidad, garantia, factura o documento no son buenos casos para promesa rapida. Capturarlos puede ser util, pero no deben definir el MVP.

Decision recomendada: tratarlos como capturas permitidas de baja confianza, no como flujos objetivo.

### Riesgo 4: Los Casos Buenos Son Muy Parecidos

Los mejores casos siguen un patron simple: persona, trabajo, momento, material, dinero o tarea. Eso es una buena senal para scope, pero tambien indica que el target y el workflow deben estrecharse.

Decision recomendada: antes de validacion futura, elegir un unico subsegmento y una rutina repetida.

### Riesgo 5: La Bandeja Sigue Siendo El Punto Fragil

La muestra documental no prueba que el usuario revise despues. La tarjeta parece clara, pero podria convertirse en otra bandeja abandonada si no hay cierre rapido.

Decision recomendada: cualquier fase futura debe medir revision y cierre, no solo capturas creadas.

## 5. Decisiones Sobre La Tesis

### Mantener

Mantener el principio:

> Captura externa en menos de 10 segundos; organizacion interna despues.

La bateria no bloquea el principio general. La mayoria de capturas ficticias son cortas, reducibles a objetos raiz y conectadas con dinero, tiempo, vuelta, material, presupuesto, cobro o cierre.

### Recortar

Recortar la ambicion de canal y de caso.

No formular el MVP como "captura desde Siri, WhatsApp, email y calendario". La formulacion mas segura es:

> AD acepta capturas ficticias procedentes de canales simulados y las convierte en tarjetas internas revisables.

Para producto futuro, el canal inicial deberia ser el de menor riesgo tecnico y legal, no necesariamente el mas deseado.

Tambien deben quedar fuera del flujo objetivo inicial:

- emails largos;
- comunidades con documentos;
- factura, parte, garantia, seguro o certificado;
- pagos inmediatos;
- conflictos de cobro;
- capturas con mas de un trabajo o mas de una ubicacion.

### Cambiar

Cambiar el criterio de exito de "interpreta bien" a:

> deja una tarjeta revisable que permite cerrar o descartar informacion en pocos segundos.

La interpretacion no debe parecer magia ni automatismo operativo. Debe ser asistencia interna con limites visibles.

### Bloquear

Bloquear cualquier avance que convierta esta microfase en evidencia de mercado.

Esta bateria no demuestra:

- adopcion;
- retencion;
- confianza real;
- disposicion a pagar;
- viabilidad legal;
- integraciones;
- precision de IA;
- utilidad con datos reales.

## 6. Recomendacion Final Para Salva

Recomendacion: recortar la tesis. No bloquearla, pero tampoco mantenerla tal cual.

Formulacion recomendada:

> AD es una libreta operativa inteligente para capturas simples: guarda trabajo ficticio rapido, lo convierte en tarjeta interna revisable y ayuda a no perder vueltas, materiales, presupuestos, cobros o cierres.

No recomiendo build, validacion externa, usuarios reales, datos reales, integraciones ni pricing.

Siguiente decision recomendada para Salva:

1. Aprobar o bloquear una segunda ficha interna, todavia documental, para elegir target unico y workflow repetido.
2. Elegir entre dos caminos de target: `fontaneria domestica simple` o `climatizacion/HVAC microequipo`.
3. No avanzar a prueba con personas hasta tener target, buyer, alternativa actual, politica de datos, consentimiento, borrado, seguridad y metodo de evidencia aprobados.

Estado final de esta microfase: la reformulacion aguanta solo recortada a capturas simples. No aguanta como promesa multicanal amplia ni como permiso para construir o validar fuera.
