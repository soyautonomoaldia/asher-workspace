# ASIRIN_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Asirin
Responsabilidad: producto y scope MVP
Estado: definicion interna documental
Fuente operativa usada: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`
Documento directo usado: `REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`

## Decision

Aprobado con condiciones.

Apruebo la reformulacion como scope interno de producto:

> Captura externa en menos de 10 segundos; organizacion interna despues.

Y apruebo la promesa minima como marco de MVP:

> Diselo a AD antes de que se te olvide.

Esta aprobacion no autoriza validacion externa, reclutamiento, mensajes externos, datos reales, mock operativo publico, build, pricing publico, pagos, produccion ni integraciones reales. Solo autoriza definicion documental interna dentro de `nuevo_AD_V01`.

## Razon

La reformulacion reduce el riesgo principal de producto: empezar como mini-ERP o como app de gestion que el autonomo debe abrir, configurar y alimentar antes de recibir valor.

El primer valor defendible no es "gestionar el negocio", sino evitar que informacion accionable se pierda en el momento de campo. El MVP debe capturar frases breves desde habitos existentes o simulables y convertirlas despues en objetos revisables dentro de AD.

El objeto central deja de ser cliente, factura, presupuesto o modulo. El objeto central es `captura`. Todo lo demas nace como sugerencia interna, pendiente de revision y cierre.

## Riesgos

- Riesgo de scope creep: Siri, WhatsApp, email, calendario, fotos, voz e integraciones pueden parecer parte natural del MVP, pero no deben construirse ni conectarse en esta fase.
- Riesgo de promesa inflada: el usuario puede esperar que AD envie mensajes, cree citas, facture, reclame cobros, calcule impuestos o automatice la gestion.
- Riesgo de bandeja abandonada: capturar rapido no basta si el usuario no revisa, corrige y cierra despues.
- Riesgo de falso positivo interno: frases ficticias limpias y clasificacion humana pueden hacer que el producto parezca mas preciso de lo que sera.
- Riesgo de privacidad: voz, WhatsApp, email, fotos, direcciones, telefonos, importes y conversaciones pueden contener datos personales o sensibles.
- Riesgo comercial indirecto: si la captura no conecta con dinero, tiempo, cobros, presupuestos, vueltas o materiales, puede percibirse como una nota de voz mejorada y no como SaaS pagable.

## Condiciones Para Desbloquear

Para desbloquear cualquier paso posterior a definicion documental interna hacen falta, como minimo:

- Salva debe aprobar por escrito el target inicial unico y el buyer economico.
- Gael debe cerrar alternativa actual dominante, razon de pago, WTP privada futura y canal defendible.
- Nathan debe aprobar politica minima de datos, retencion, acceso, borrado, terceros y limites tecnicos antes de cualquier dato real.
- Irinas debe aprobar UX, consentimiento, microcopy de confianza y limites visibles de promesa.
- Mercury debe aprobar metodo de simulacion, sesgos, umbrales e invalidadores.
- Todos los objetos inferidos deben permanecer en estado pendiente hasta revision humana.
- Cualquier transicion desde documento interno a mock, build, integracion o prueba real requiere aprobacion explicita de Salva y sign-off formal de owners.

## Cambios Concretos Propuestos

### 1. Scope MVP Estricto

El MVP conceptual queda definido asi:

AD es un capturador rapido de informacion de trabajo para autonomos de oficio, pensado para registrar en menos de 10 segundos algo que puede olvidarse y convertirlo despues en objetos internos revisables.

El MVP debe cubrir solo este ciclo:

1. Capturar una entrada breve.
2. Guardarla como pendiente.
3. Interpretarla en objetos minimos sugeridos.
4. Mostrarla para revision posterior.
5. Permitir confirmar, corregir, descartar o cerrar.

La captura puede simular estos origenes, pero no integrarlos:

- voz/Siri simulado;
- accion rapida simulada;
- texto pegado;
- WhatsApp ficticio;
- email ficticio;
- calendario o recordatorio ficticio solo como referencia textual.

El producto no empieza como ERP, CRM, facturacion, gestor documental, agenda automatica, contabilidad, SAT completo ni sistema de comunicacion con clientes.

### 2. Objetos Minimos Definitivos

Acepto la lista de Gael con reduccion y jerarquia. Para el MVP estricto, los objetos definitivos son seis:

1. `captura`
   - fuente simulada;
   - texto original;
   - fecha/hora de captura;
   - estado: sin revisar, confirmada, descartada, cerrada;
   - confianza interna: alta, media, baja.

2. `contacto_o_alias`
   - nombre, apodo o referencia;
   - dato de contacto solo si aparece en texto ficticio;
   - siempre pendiente de confirmar.

3. `trabajo_o_aviso`
   - descripcion corta del problema, encargo o contexto;
   - contacto asociado si se detecta;
   - estado: nuevo, pendiente, hecho, descartado.

4. `visita_o_momento`
   - fecha/hora aproximada o relativa;
   - tipo: visita, llamada, vuelta, entrega, revision;
   - estado: pendiente, hecha, reprogramar.

5. `pendiente_accionable`
   - accion concreta detectada;
   - subtipo: tarea, material, presupuesto, cobro, recordatorio;
   - estado: pendiente, hecho, descartado.

6. `nota_de_contexto`
   - detalle util que no encaja todavia en otro objeto;
   - asociada a captura y trabajo;
   - no debe convertirse automaticamente en decision operativa.

Cambio principal a la lista de Gael: `tarea`, `material`, `presupuesto_pendiente`, `cobro_pendiente` y `recordatorio` no deben ser objetos raiz separados en el MVP documental. Deben ser subtipos de `pendiente_accionable` para mantener el producto pequeno y evitar modulos prematuros.

### 3. Workflow Minimo Captura -> Interpretacion -> Revision -> Cierre

Workflow aprobado para definicion interna:

1. Captura.
   - El usuario dice, escribe o comparte una entrada ficticia breve.
   - La entrada debe poder emitirse en menos de 10 segundos.
   - AD no exige elegir modulo, cliente, categoria ni formulario previo.

2. Confirmacion minima.
   - AD registra la captura como `sin revisar`.
   - La confirmacion conceptual es: "Guardado para revisar despues".
   - No hay envio, agenda, factura, mensaje ni automatismo.

3. Interpretacion.
   - AD conserva el texto original.
   - AD propone objetos internos con confianza alta, media o baja.
   - Si falta informacion, no la inventa: deja campo dudoso o `por confirmar`.

4. Revision.
   - La app muestra una tarjeta con captura original y objetos sugeridos.
   - El usuario puede confirmar, corregir, descartar o dividir la captura.
   - Una captura no revisada no debe producir efectos externos.

5. Cierre.
   - El usuario marca pendientes como hechos, descartados o reprogramados.
   - El cierre minimo es interno: no genera factura, presupuesto legal, cita real, mensaje ni cobro.
   - La bandeja puede agrupar por: hoy, atrasado, por volver, por cobrar, por presupuestar, materiales y sin revisar.

### 4. Que Queda Fuera Aunque El Usuario Lo Pida

Queda fuera del MVP, incluso si aparece como deseo del usuario:

- facturas, presupuestos legales, Verifactu, impuestos, IVA definitivo o asesoria fiscal;
- pagos, cobros automaticos, reclamaciones automaticas o integracion bancaria;
- integracion real con Siri, WhatsApp, email, calendario, gestoría, ERP, CRM o SAT;
- mensajes automaticos a clientes;
- diagnostico tecnico, certificaciones, partes firmados o contratos;
- stock, compras, albaranes, proveedores o inventario completo;
- transcripcion de audios reales, fotos reales, tickets reales o documentos reales;
- uso de datos reales de clientes, direcciones, telefonos, importes o conversaciones;
- permisos moviles, credenciales, webhooks, bots, APIs o automatismos;
- pricing publico, preventa, cobro, piloto real o produccion.

Regla de producto: si una peticion exige efecto externo, dato real, obligacion legal, integracion real o promesa economica, queda fuera.

### 5. Modo Manual/Documental Permitido Sin Construir

Modo permitido ahora:

- documento o tabla interna;
- entradas completamente ficticias;
- clasificacion manual por owner;
- revision simulada por otro owner;
- registro de ambiguedades, errores, tiempo de interpretacion y campos faltantes;
- decision documental sobre si el scope se mantiene, se reduce o se bloquea.

Estructura minima de la tabla documental:

- id de captura;
- origen simulado;
- texto ficticio;
- objetos sugeridos;
- campos dudosos;
- confianza;
- tiempo estimado de interpretacion;
- accion de revision;
- riesgo de privacidad si fuera real;
- decision: mantener, ajustar, descartar.

Limites del modo manual:

- no se usa interfaz publica;
- no se simula producto ante usuarios externos;
- no se recogen datos reales;
- no se promete que exista automatizacion;
- no se usa IA externa con datos reales;
- no se crea prototipo operativo.

### 6. Invalidadores De Producto/Scope

La reformulacion debe bloquearse o recortarse si aparece cualquiera de estos invalidadores:

- La captura no puede expresarse en menos de 10 segundos sin perder valor.
- La mayoria de entradas necesita formulario previo o muchas preguntas de aclaracion.
- La interpretacion produce demasiados objetos, modulos o excepciones.
- El usuario tendria que revisar tanto que la captura rapida deja de ahorrar friccion.
- La captura solo tiene valor si se integra realmente con WhatsApp, Siri, calendario, email o gestoría.
- El usuario considera imprescindible facturacion, presupuesto legal, pagos, fiscalidad, stock o mensajes automaticos.
- La bandeja posterior no se revisa ni se cierra.
- Los objetos no conectan con acciones economicas o de tiempo: volver, cobrar, presupuestar, comprar material, recordar, cerrar trabajo.
- La privacidad exige tratar datos que Nathan no pueda minimizar o bloquear.
- El modo manual solo funciona porque el owner interpreta, completa o decide demasiado por el producto.
- El scope necesita mas de seis objetos raiz para explicar el valor minimo.

## Siguiente Accion Responsable

Responsable: Asirin.

Accion inmediata: mantener este scope como propuesta interna de producto y pedir que Irinas, Nathan y Mercury revisen la misma reformulacion desde UX/confianza, datos/tecnica y metodo/invalidacion, sin activar ninguna tarea externa.

Responsable final de desbloqueo: Salva.

Solo Salva puede convertir esta definicion en permiso para una fase posterior. Hasta entonces, la decision queda aprobada con condiciones para definicion interna y bloqueada para operacion.

## Resumen Breve Para Gael

Asirin aprueba la reformulacion como MVP interno si se mantiene estrictamente en captura rapida, objetos revisables y cierre interno. Reduzco la lista de objetos a seis, con `captura` como raiz y `pendiente_accionable` agrupando tarea, material, presupuesto, cobro y recordatorio. No apruebo integraciones, build, datos reales, mock operativo ni validacion. El siguiente paso es que Irinas, Nathan y Mercury cierren UX/confianza, datos/tecnica y metodo/invalidadores antes de pedir decision final a Salva.
