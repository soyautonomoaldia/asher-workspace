# NATHAN_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Nathan
Area: datos permitidos/prohibidos, privacidad, audio/fotos/documentos/retencion, riesgos legales/tecnicos, viabilidad mock/manual/build y limites con gestoria/impuestos estimados.
Fuente operativa interna usada: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## Veredicto Breve

Bloqueado para mock operativo, build, datos reales, automatizacion externa, validacion y cualquier promesa fiscal/gestoria. Desbloqueable solo para definicion interna documental si Salva aprueba una politica minima de datos y limites de prueba.

## Alcance Y Estado

### Hecho

La tesis nueva amplia mucho el perimetro: clientes, trabajos, presupuestos, cobros, gastos, fotos, materiales, tareas y cierre para gestoria. Eso ya no es solo captura ligera; roza CRM + operaciones + documentos + fiscalidad estimada.

La fuente activa sigue indicando estado bloqueado: no validacion, no datos reales, no mock operativo, no build, no integraciones, no pricing publico, no produccion.

### Supuesto

El valor buscado no deberia ser "ERP", sino "memoria administrativa-operativa minima por voz": capturar proximos pasos, cobros, materiales y documentos para no perder seguimiento.

### Riesgo

El riesgo principal es convertir una app ligera en un sistema que trata datos personales, domicilios, fotos privadas, documentos fiscales, importes, voces de terceros y posibles datos tecnicos.

### Decision Requerida

Salva debe decidir si la tesis nueva sustituye la hipotesis activa de gastos o si queda como hipotesis comparativa interna.

### Condicion De Desbloqueo

Debe existir politica minima de datos antes de producto, mock o prueba.

### Siguiente Accion Propuesta

Crear una ficha interna "Politica minima de datos para gestor/ERP por voz".

## Datos Permitidos

### Hecho

Ahora solo deberian usarse datos ficticios o sinteticos.

### Supuesto

Si algun dia se autoriza dato real, deberia limitarse a datos minimizados:

- nombre o alias de cliente;
- telefono opcional;
- zona/direccion minima;
- trabajo resumido;
- estado;
- importe pendiente;
- material pendiente;
- fecha de recordatorio;
- nota corta;
- documento/foto solo si es necesario.

### Riesgo

Guardar mas datos de los necesarios aumenta riesgo de privacidad, seguridad y responsabilidad.

### Decision Requerida

Aprobar una lista cerrada de datos permitidos por fase.

### Condicion De Desbloqueo

No usar datos reales sin aprobacion explicita de Salva y sign-off de Nathan.

### Siguiente Accion Propuesta

Definir una tabla por flujo: dato capturado, finalidad, retencion, riesgo y base de consentimiento/transparencia.

## Datos Prohibidos

### Hecho

El perimetro natural del producto podria capturar informacion excesiva.

### Supuesto

Prohibidos ahora:

- audios reales;
- fotos reales de viviendas/personas/documentos;
- facturas reales;
- tickets reales;
- NIF/DNI;
- datos bancarios;
- ubicacion continua;
- llaves/accesos;
- menores;
- datos de salud;
- grabaciones de clientes;
- conversaciones completas;
- certificados;
- boletines;
- mediciones tecnicas;
- cumplimiento normativo;
- datos fiscales usados como calculo definitivo.

### Riesgo

Las fotos y audios son especialmente peligrosos porque pueden contener mas informacion de la que el usuario cree enviar.

### Decision Requerida

Bloquear fotos/audio/documentos reales hasta politica aprobada.

### Condicion De Desbloqueo

Debe existir minimizacion por defecto y borrado claro.

### Siguiente Accion Propuesta

Separar "foto como evidencia operativa" de "documento fiscal" y decidir si ambos pertenecen al MVP.

## Audio, Fotos, Documentos Y Retencion

### Hecho

Audio, fotos y documentos elevan mucho el riesgo respecto a una app de tareas.

### Supuesto

Audio no debe conservarse por defecto. Si en el futuro se usa STT, deberia transcribirse, confirmar campos y borrar audio inmediatamente o con retencion tecnica muy corta.

Fotos no deberian ser flujo base hasta tener politica. Fotos de viviendas, banos, cocinas, cuadros electricos o documentos pueden revelar informacion privada.

Documentos para gestoria deben significar ordenar y preparar para revision, no interpretar fiscalmente ni presentar impuestos.

### Riesgo

Retener de mas crea deuda legal/tecnica. Retener de menos puede reducir utilidad, pero es el coste correcto en fase temprana.

### Decision Requerida

Definir retencion futura minima:

- borrar audios casi inmediato;
- purga de tareas cerradas tras plazo definido;
- borrado por cliente/trabajo;
- exportacion controlada;
- registro de acceso.

### Condicion De Desbloqueo

No hay build sin politica de retencion y borrado.

### Siguiente Accion Propuesta

Preparar threat model basico antes de cualquier prototipo operativo.

## Riesgos Legales Y Tecnicos

### Hecho

Habria tratamiento de datos personales. Aplican principios de minimizacion, finalidad, transparencia, seguridad, retencion limitada y derechos de acceso/borrado.

Si hay interaccion con IA, habra que informar claramente. No parece alto riesgo si se limita a asistencia administrativa, pero puede complicarse si decide, clasifica fiscalmente o automatiza comunicaciones.

### Supuesto

Terceros STT/LLM solo deberian usarse con DPA, no entrenamiento por defecto, logs reducidos, subencargados claros, retencion configurable y preferencia por region UE o garantias equivalentes.

### Riesgo

Error tecnico critico: transcribir mal importes, telefonos, direcciones o fechas puede generar cobros perdidos, visitas fallidas o envio de datos al cliente equivocado.

### Decision Requerida

No permitir acciones automaticas externas sin revision humana.

### Condicion De Desbloqueo

Todo dato inferido por IA debe ser revisable y corregible.

### Siguiente Accion Propuesta

Crear lista de errores de alto impacto y mitigaciones.

## Mock, Manual Y Build

### Hecho

El `SOURCE_OF_TRUTH` bloquea mock operativo, build y datos reales.

### Supuesto

Manual solo es viable como ejercicio interno documental con datos ficticios. No usuarios, no autonomos reales, no mensajes externos.

Build no es viable todavia. Antes hacen falta modelo de datos minimo, politica de retencion, proveedor IA/STT, consentimiento, limites fiscales, threat model basico y criterios de invalidacion.

### Riesgo

Incluso un mock con datos reales seria tratamiento de datos.

### Decision Requerida

Mantener mock operativo bloqueado.

### Condicion De Desbloqueo

Desbloqueo solo para definicion interna documental.

### Siguiente Accion Propuesta

Usar escenarios y datos sinteticos para aprender sobre scope sin tocar datos reales.

## Gestoria E Impuestos

### Hecho

La frontera debe ser dura.

AD puede preparar resumen revisable: gastos, cobros pendientes, trabajos cerrados y documentos pendientes.

AD no debe calcular fiscalidad exacta, no debe sustituir gestoria, no debe presentar impuestos, no debe emitir criterio fiscal y no debe prometer cumplimiento.

### Supuesto

IVA/impuestos solo pueden aparecer como estimacion visible, marcada como "revisar con gestoria".

### Riesgo

La promesa de cierre para gestoria puede interpretarse como asesoria fiscal si el lenguaje es ambiguo.

### Decision Requerida

Aprobar no-promesas fiscales antes de cualquier comunicacion.

### Condicion De Desbloqueo

Todo calculo fiscal debe estar bloqueado o marcado como estimado y revisable.

### Siguiente Accion Propuesta

Redactar copy obligatorio: "No sustituye a tu gestoria. Los importes fiscales son estimaciones para revisar."

## Recomendacion Nathan

### Hecho

La tesis es atractiva pero operacionalmente abierta.

### Supuesto

Puede seguir en investigacion interna si se limita a datos ficticios y documentos.

### Riesgo

Sin politica de datos, cualquier avance de producto puede meter privacidad, IA y fiscalidad en una zona no aprobada.

### Decision Requerida

Nathan recomienda crear primero la politica minima de datos.

### Condicion De Desbloqueo

Target estrecho, datos minimos, no-promesas, modo de prueba sin datos reales, consentimiento visible, retencion, proveedor IA/STT aceptable y sign-off de Nathan.

### Siguiente Accion Propuesta

No avanzar a mock/manual/build hasta resolver esa ficha.

## Referencias

- AEPD, principios y obligaciones de proteccion de datos: https://www.aepd.es/en/rights-and-duties/fulfill-your-duties/principles
- AEPD, Evalua Riesgo: https://evalua-riesgo.aepd.es/
- Comision Europea, AI Act: https://digital-strategy.ec.europa.eu/en/faqs/navigating-ai-act

