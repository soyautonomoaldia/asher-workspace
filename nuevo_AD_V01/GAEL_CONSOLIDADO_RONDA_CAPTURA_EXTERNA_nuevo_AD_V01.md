# GAEL_CONSOLIDADO_RONDA_CAPTURA_EXTERNA_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Gael
Estado: consolidado interno documental
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`

Documentos consolidados:

- `REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`
- `ASIRIN_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`
- `IRINAS_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`
- `NATHAN_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`
- `MERCURY_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`

## 1. Veredicto De Gael

Aprobado con condiciones estrictas para definicion interna documental.

La reformulacion queda aceptada como tesis de MVP:

> Captura externa en menos de 10 segundos; organizacion interna despues.

Y la promesa minima queda aceptada como marco interno:

> Diselo a AD antes de que se te olvide.

Esto no autoriza validacion externa, reclutamiento, mensajes externos, usuarios reales, datos reales, audios reales, WhatsApps reales, emails reales, calendarios reales, mock operativo publico, build, pricing publico, pagos, produccion ni integraciones reales.

Mi lectura comercial: la reformulacion mejora la tesis porque desplaza AD de "mini-ERP" a "captura accionable antes del olvido". Pero la oportunidad sigue sin estar validada. Ahora solo tenemos una definicion mas estrecha y falsable.

## 2. Cambios Reales Del MVP Tras La Ronda

### Cambio 1: El Objeto Central Es `captura`

AD no empieza por cliente, factura, presupuesto, calendario o modulo.

El primer objeto del MVP es:

`captura`: una entrada breve, ficticia en esta fase, guardada como pendiente y convertida despues en objetos internos revisables.

Toda captura debe conservar:

- texto original ficticio;
- origen simulado;
- fecha/hora de captura documental;
- estado de revision;
- confianza;
- campos por confirmar;
- efecto externo: ninguno.

### Cambio 2: Se Reducen Los Objetos Raiz A Seis

La lista anterior de objetos queda recortada. El MVP documental no debe abrir modulos separados para tarea, material, presupuesto, cobro y recordatorio.

Objetos raiz aprobados:

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

Esta reduccion es importante. Evita que AD vuelva a comportarse como ERP, CRM, agenda, facturacion o SAT antes de demostrar valor.

### Cambio 3: Todos Los Canales Son Simulados

La definicion interna debe nombrar los canales asi:

- `voz/Siri simulada`;
- `accion rapida simulada`;
- `WhatsApp simulado`;
- `email simulado`;
- `calendario simulado`;
- `texto pegado ficticio`.

Quedan prohibidas las versiones reales en esta fase.

### Cambio 4: La Tarjeta De Revision Es El Centro De Confianza

El momento critico del producto no es la magia de interpretar. Es la tarjeta donde el usuario ve que AD guardo, separo y dejo pendiente.

La tarjeta debe mostrar:

- origen simulado;
- texto original;
- objetos sugeridos;
- confianza;
- campos dudosos;
- estado `pendiente de revisar`;
- limites visibles;
- acciones internas permitidas.

Microcopy base:

`Guardado para revisar despues. No se ha enviado nada.`

No debe haber botones ni copy de:

- enviar;
- facturar;
- cobrar;
- crear cita;
- conectar WhatsApp;
- automatizar gestion.

### Cambio 5: No Hay Efecto Externo

Regla operativa de MVP:

`Toda captura no revisada carece de valor operativo y no puede producir efectos externos.`

Incluso una captura confirmada en esta fase solo puede cerrar informacion dentro de AD documental. No envia, agenda, factura, cobra, reclama, responde, archiva ni modifica herramientas externas.

## 3. Riesgos Abiertos

### Riesgo Comercial

La promesa puede quedarse en "nota de voz ordenada" si no conecta con dinero, tiempo o cierre de trabajo.

La captura debe demostrar conexion con:

- volver a una visita;
- evitar una vuelta perdida;
- recordar material;
- presupuestar;
- cobrar;
- cerrar un trabajo;
- reducir informacion perdida.

Si el valor es solo comodidad, la disposicion a pagar es debil.

### Riesgo De Conducta

Capturar rapido no basta. El usuario debe revisar despues.

Invalidaria la tesis que:

- la bandeja se abandone;
- revisar cueste mas que apuntar en WhatsApp o notas;
- el usuario necesite confirmar todo en el momento;
- la captura solo ocurra si alguien le persigue.

### Riesgo De Scope

Siri, WhatsApp, email y calendario parecen naturales, pero son trampas de alcance. Si se tratan como integraciones reales, el MVP se dispara en permisos, privacidad, fiabilidad, soporte y expectativas.

### Riesgo De Privacidad

La captura externa real incluiria nombres, telefonos, direcciones, conversaciones, importes, terceros, rutinas, audios, fotos y documentos.

En esta fase solo se permiten datos ficticios. Si entra un dato real, el ejemplo queda contaminado y no debe usarse como evidencia.

### Riesgo De Falsa Evidencia

La simulacion interna no prueba mercado.

Frases inventadas pueden ser demasiado limpias. Interpretacion humana puede parecer mejor que producto. El equipo puede completar mentalmente campos que AD no podria inferir.

## 4. Supuestos Activos Que Siguen Sin Validar

- Que un autonomo de oficio captura informacion en el momento real del olvido.
- Que esa captura puede hacerse en menos de 10 segundos sin pensar demasiado.
- Que revisa despues la bandeja.
- Que la revision posterior no se percibe como gestion pesada.
- Que el valor se entiende antes de facturacion, pagos o integraciones reales.
- Que existe disposicion a pagar por recuperar informacion accionable.
- Que se puede elegir un target estrecho con workflow frecuente y dolor observable.
- Que la alternativa actual dominante deja hueco real para AD.
- Que los limites visibles no matan la promesa.
- Que el producto puede mantenerse pequeno sin derivar a ERP.

## 5. Invalidadores Consolidados

Bloquear o recortar la tesis si aparece cualquiera de estos puntos:

- Menos de 80% de capturas ficticias caben razonablemente en menos de 10 segundos.
- Menos de 70% se reducen a los seis objetos raiz sin crear objetos nuevos.
- Menos de 60% tienen accion interna clara de revision o cierre.
- Mas de 25% dependen criticamente de integracion real.
- Mas de 30% exigen mas de una pregunta de aclaracion.
- La mayoria de capturas quedan con confianza baja o requieren reescritura completa.
- El usuario no entiende la diferencia entre pendiente interno y accion real.
- El valor minimo exige WhatsApp, email, Siri, calendario, facturacion, pagos o mensajes reales.
- La captura no conecta con dinero, tiempo, vuelta, material, presupuesto, cobro o cierre.
- La revision posterior se convierte en otra bandeja abandonada.
- La explicacion al usuario tiene que ocultar limitaciones para parecer valiosa.
- El target inicial, buyer, alternativa actual o razon de pago siguen difusos.

## 6. Metodo Interno Recomendado

Antes de cualquier desbloqueo operativo, completar una bateria documental cerrada de al menos 36 capturas ficticias.

Cada caso debe registrar:

- id;
- origen simulado;
- frase ficticia;
- cabe en menos de 10 segundos: si/no/dudoso;
- objetos sugeridos;
- campos dudosos;
- confianza;
- preguntas necesarias;
- decision de revision;
- riesgo_privacidad_si_fuera_real;
- dato_prohibido_detectado;
- dependencia_de_integracion_real;
- conexion_economica;
- decision: mantener, ajustar, invalidar.

La bateria debe definirse antes de evaluarla. No vale mejorar ejemplos despues para que la tesis parezca funcionar.

Metricas internas permitidas:

- capturabilidad;
- parseabilidad;
- ambiguedad;
- revision necesaria;
- division necesaria;
- riesgo si fuera real;
- dependencia de integracion;
- conexion economica;
- carga de bandeja.

Estas metricas no son adopcion, retencion, confianza real ni disposicion a pagar.

## 7. Decision Siguiente Recomendada Para Salva

Mi recomendacion es no desbloquear build ni validacion externa todavia.

La siguiente decision util para Salva es aprobar o rechazar una microfase documental:

`Bateria interna de 36 capturas ficticias para comprobar estructura, friccion, ambiguedad, dependencia de integracion y conexion economica.`

Condiciones de esa microfase:

- solo datos ficticios;
- solo documentos/tablas internas;
- ningun usuario real;
- ningun mensaje externo;
- ningun mock publico;
- ningun build;
- ninguna integracion;
- ninguna conclusion de mercado;
- resultado final: mantener, recortar o bloquear la tesis.

Si Salva aprueba esa microfase, despues se podria decidir si tiene sentido preparar una validacion real futura. Esa decision futura requeriria target unico, buyer, alternativa actual, politica legal/privacidad, consentimiento, borrado, seguridad, metodo de prueba y sign-off formal.

## 8. Resumen Para Salva

La ronda interna secuencial queda completada.

Asirin, Irinas, Nathan y Mercury aprueban la reformulacion solo con condiciones. La tesis mejora porque AD deja de ser mini-ERP y pasa a ser capturador inteligente de informacion accionable antes del olvido.

Pero el MVP queda mas estrecho:

- seis objetos raiz;
- canales solo simulados;
- datos solo ficticios;
- tarjeta de revision como nucleo;
- nada de efectos externos;
- nada de integraciones;
- nada de facturas, pagos, mensajes ni calendario real.

Veredicto de Gael: seguir solo si Salva acepta una prueba documental interna de 36 casos ficticios. No construir, no validar fuera, no reclutar, no usar datos reales y no hablar de pricing todavia.
