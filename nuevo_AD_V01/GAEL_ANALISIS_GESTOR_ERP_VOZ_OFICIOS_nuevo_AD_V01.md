# GAEL_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Gael
Area: buyer economico, capacidad de pago, urgencia comercial, canal/CAC, facilidad de venta, WTP privada y alternativa actual.
Fuente operativa interna usada: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## Alcance Y Estado

### Hecho

`nuevo_AD_V01` esta en definicion. No hay permiso para validacion, reclutamiento, mensajes externos, mock operativo, build, pricing publico, datos reales, pagos, produccion ni integraciones.

La tesis nueva a estudiar es un gestor/ERP minimo por voz para autonomos y microequipos de oficio, centrado en clientes, avisos/trabajos, presupuestos simples, cobros pendientes, gastos/justificantes, tareas, notas, fotos, materiales pendientes y cierre para gestoria.

### Supuesto

El valor comercial no esta en "tener un ERP por voz". Esta en evitar perdida economica o friccion recurrente: cobros no reclamados, presupuestos no enviados, materiales olvidados, visitas sin seguimiento, gastos no conservados y cierre mensual reconstruido tarde.

### Riesgo

Si AD se vende como ERP, facturacion, gestor fiscal o sustituto de gestoria, entra en una categoria con competidores mas completos, precios bajos y mayor confianza regulatoria.

### Decision Requerida

Decidir si la tesis sustituye a la hipotesis activa de gastos o si queda como comparativa interna hasta nueva decision de Salva.

### Condicion De Desbloqueo

Antes de cualquier avance externo debe existir target unico, buyer, alternativa actual, promesa minima, no-promesas, datos permitidos/prohibidos, modo de prueba y criterios de invalidacion.

### Siguiente Accion Propuesta

Mantener bloqueado todo avance operativo y usar esta ronda para decidir si merece ficha interna estricta.

## Buyer Economico

### Hecho

El buyer mas probable es el autonomo propietario o el responsable de una microempresa de oficio de 1-3 personas. Decide rapido, pero paga con cautela y compara contra herramientas que ya usa gratis o muy barato.

### Supuesto

El comprador no comprara "IA" por si misma. Comprara si percibe que AD recupera dinero, reduce olvidos o evita cierre administrativo doloroso.

### Riesgo

En microoficios, el usuario, comprador y operador suelen ser la misma persona. Eso reduce comite de compra, pero sube el liston de utilidad inmediata: si no le ayuda en la furgoneta o al cerrar el dia, no se queda.

### Decision Requerida

Elegir un buyer inicial estrecho:

- autonomo tecnico solo;
- autonomo con ayudante;
- microempresa con 2-3 tecnicos y propietario administrativo-operativo.

Gael recomienda microempresa de 1-3 personas, propietario operativo, especialmente HVAC/climatizacion o fontaneria domestica como candidatos.

### Condicion De Desbloqueo

El buyer debe poder describirse por oficio, tamano, tipo de trabajos, frecuencia de avisos, frecuencia de cobros pendientes y alternativa actual.

### Siguiente Accion Propuesta

No usar "autonomos y pymes" como buyer. Es demasiado ancho.

## Capacidad De Pago Y WTP Privada

### Hecho

Las alternativas publicas comparables presionan precio: herramientas ligeras de partes, presupuestos, facturacion y gestion para oficios se mueven en bandas bajas o medias. Una app que parezca recordatorios con IA tendra WTP baja.

### Supuesto

Una WTP privada futura solo sera creible si el usuario ya identifica coste: cobros perdidos, presupuestos retrasados, materiales olvidados, viajes repetidos, horas de cierre o discusiones con gestoría.

### Riesgo

Hay alto riesgo de falso positivo: "lo pagaria" puede significar "me parece util", no "cambio habito y pago cada mes".

### Decision Requerida

No aprobar pricing publico. Mantener cualquier banda como instrumento privado futuro, no como decision comercial.

### Condicion De Desbloqueo

WTP solo cuenta si aparece despues de demostrar dolor frecuente, alternativa insuficiente y coste percibido.

### Siguiente Accion Propuesta

Si se autoriza investigacion futura, no preguntar "cuanto pagarias por IA"; preguntar que coste tiene hoy no cerrar bien trabajos, cobros y papeles.

## Urgencia Comercial

### Hecho

El dolor existe, pero no todos los dolores administrativos son urgentes. Muchos autonomos toleran caos si el negocio sigue entrando por llamadas, WhatsApp y recomendaciones.

### Supuesto

La urgencia sera mayor cuando el olvido afecte dinero directo: cobro pendiente, presupuesto no enviado, pieza no pedida, trabajo recurrente perdido o cierre mensual que consume tiempo fuera de horario.

### Riesgo

"Orden administrativo" suena razonable pero puede no competir con trabajos urgentes, clientes esperando y habitos existentes.

### Decision Requerida

Definir el workflow doloroso observable: Gael recomienda "salgo de una visita y necesito dejar registrado que hice, que falta, que me deben y que papel/foto tengo".

### Condicion De Desbloqueo

El workflow debe ocurrir varias veces por semana y tener una consecuencia economica o de reputacion si se olvida.

### Siguiente Accion Propuesta

Priorizar microtareas de seguimiento y cobro por encima de "gestion completa".

## Canal Y CAC

### Hecho

Los canales plausibles son directorios de oficio, asociaciones, proveedores, instaladores visibles en Google/marketplaces, redes locales y gestorías. Ninguno prueba CAC bajo.

### Supuesto

El canal mas defendible no sera ads genericos a "autonomos", sino una entrada por subsegmento y dolor concreto.

### Riesgo

CAC puede matar el SaaS si el ticket mensual queda en 9-19 EUR y la venta requiere explicacion, demo, soporte o migracion de datos.

### Decision Requerida

Elegir canal inicial solo despues de target. No decidir canal para "oficios" en general.

### Condicion De Desbloqueo

Debe existir una hipotesis de canal con fuente de leads, motivo de contacto, mensaje privado, coste esperado y criterio de paro.

### Siguiente Accion Propuesta

Mantener como candidatos: proveedores/almacenes de climatizacion, asociaciones locales de instaladores, gestorías con cartera de oficios y directorios publicos. No ejecutar contacto.

## Facilidad De Venta

### Hecho

La venta puede ser simple si el producto se entiende como "no olvides cobrar, comprar, volver, presupuestar y guardar el papel". Se vuelve dificil si se explica como ERP minimo, IA administrativa, fiscalidad estimada o gestoría.

### Supuesto

La promesa privada mas vendible seria:

"Dicta al salir del trabajo lo que no puedes olvidar: cobrar, volver, comprar material, pasar presupuesto, guardar gasto o preparar cierre para tu gestoria."

### Riesgo

La palabra ERP atrae scope y objeciones. La palabra gestoria atrae miedo fiscal. La palabra IA atrae curiosidad, pero no necesariamente pago.

### Decision Requerida

Prohibir posicionamiento operativo con "ERP" hasta demostrar que el mercado paga por una capa ligera de memoria operativa.

### Condicion De Desbloqueo

La promesa debe ser entendible en menos de 10 segundos y no prometer fiscalidad, automatizacion total ni sustitucion de gestoria.

### Siguiente Accion Propuesta

Trabajar la tesis como "libreta operativa por voz para trabajos, cobros y papeles", no como ERP.

## Alternativa Actual

### Hecho

La alternativa dominante no es solo software. Es WhatsApp, llamadas, notas, calendario, fotos sueltas, libreta, Excel, email a gestoria y memoria.

### Supuesto

AD solo gana si reduce friccion sin exigir migracion completa de negocio.

### Riesgo

Si el usuario ya resuelve suficientemente con WhatsApp + calendario + gestoría, AD sera una app mas.

### Decision Requerida

El criterio de entrada debe ser que la alternativa actual falla en un punto concreto: seguimiento, cobro, material, justificante o cierre.

### Condicion De Desbloqueo

La alternativa actual debe mapearse por target antes de diseñar modulos.

### Siguiente Accion Propuesta

Crear una tabla interna por segmento: alternativa actual, fallo repetido, coste, momento de captura y WTP plausible.

## Recomendacion Gael

### Hecho

Hay mercado real y dolor plausible, pero tambien competencia directa/indirecta fuerte y mucha presion de scope.

### Supuesto

La oportunidad defendible, si existe, esta en capturar microcierres operativos por trabajo: que hice, que falta, que me deben, que tengo que comprar y que documento/foto queda para gestoría.

### Riesgo

Como SaaS independiente, la tesis se rompe si el ticket queda bajo y la venta requiere educacion alta.

### Decision Requerida

Gael recomienda investigar internamente, no desbloquear ejecucion. Como primer encaje comercial, priorizaria HVAC/climatizacion microequipo frente a "oficios" general.

### Condicion De Desbloqueo

No desbloquear sin target unico, buyer claro, alternativa actual insuficiente, workflow frecuente, no-promesas y criterios de invalidacion.

### Siguiente Accion Propuesta

Preparar una ficha comparativa interna HVAC vs fontaneria con foco en `trabajo + cobro pendiente + justificante asociado`.

