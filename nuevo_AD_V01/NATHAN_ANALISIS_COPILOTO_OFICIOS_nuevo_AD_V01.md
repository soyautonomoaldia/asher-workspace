# NATHAN_ANALISIS_COPILOTO_OFICIOS_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Nathan
Alcance: reanalisis tecnico, datos, privacidad y seguridad para un copiloto ligero de voz, recordatorios y microgestion administrativa-operativa para autonomos de oficio.

Contexto operativo usado: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`.

No se ha realizado validacion con usuarios, reclutamiento, mensajes externos, mock operativo ni preparacion de herramientas operativas.

## 1. Subsegmentos comparados.

Subsegmentos evaluados:

| Subsegmento | Lectura tecnica/datos | Encaje inicial |
| --- | --- | --- |
| HVAC / climatizacion | Alto valor de recordatorios por revisiones, temporada, filtros, cargas, garantias y mantenimientos. Pero captura datos tecnicos mas sensibles: modelo de equipo, refrigerante, carga, fallos, mantenimientos, cumplimiento RITE/gases fluorados y posibles certificados. | Atractivo comercialmente, pero menos seguro como primer MVP por complejidad regulatoria y riesgo de convertirse en SAT/CMMS/ERP. |
| Electricistas | Buen encaje de voz para notas de campo, presupuestos pendientes, materiales, llamadas y citas. Datos tecnicos pueden incluir cuadros, potencias, CIE/boletines, direcciones, fotos, incidencias de seguridad y a veces datos de suministro. | Viable, pero con riesgo operativo si el sistema sugiere acciones tecnicas o gestiona documentacion reglamentaria. |
| Fontaneros | Alta frecuencia de avisos pequenos, urgencias, visitas, presupuestos, piezas pendientes, cobros y retornos. Datos necesarios acotables: nombre, telefono, direccion, problema, importe, pieza, estado y proximo paso. | Mejor candidato si se limita a fontaneria domestica/obra menor y se excluye gas, calderas y certificaciones. |
| Reformistas | Muchisimas microtareas y alto valor de seguimiento, pero los trabajos son multi-dia/multi-proveedor: presupuestos por partidas, compras, cambios, fotos de vivienda, anticipos, subcontratas, planning y firma. | Alto WTP potencial, pero el MVP cae muy rapido en gestion de obra/ERP y expone mas datos del hogar. |

## 2. Criterios usados.

Criterios obligatorios aplicados:

| Criterio | HVAC / climatizacion | Electricistas | Fontaneros | Reformistas |
| --- | --- | --- | --- | --- |
| 1. Frecuencia de microtareas administrativas olvidables | Alta: revisiones, piezas, llamadas, garantias, presupuestos, mantenimientos. | Media-alta: citas, materiales, presupuestos, certificados, cobros. | Alta: urgencias, recambios, volver a mirar, enviar precio, cobrar, cerrar aviso. | Muy alta: compras, cambios, subcontratas, calendario, entregas, pagos. |
| 2. Valor de recordatorios | Alto, especialmente recurrente/temporada. | Medio-alto, mas por seguimiento y documentacion. | Alto, muy directo: no olvidar llamar, volver, cobrar o pedir pieza. | Alto, pero requiere coordinacion compleja. |
| 3. Encaje de voz en la jornada | Bueno: campo, manos ocupadas, vehiculo. | Bueno: obra/campo, manos ocupadas. | Muy bueno: avisos rapidos, furgoneta, entre clientes, manos mojadas/sucias. | Bueno, pero las notas suelen necesitar adjuntos, fotos, planos y decisiones largas. |
| 4. Facilidad de acotar MVP | Media-baja si incluye mantenimiento reglado. | Media si se excluyen boletines/diagnostico. | Alta si se limita a recordatorios internos y microestado de avisos/cobros. | Baja: el producto natural es gestion de obra. |
| 5. Riesgo de convertirse en ERP generico | Alto: SAT, activos, contratos, partes, certificaciones. | Medio-alto: presupuestos, partes, certificados, inventario. | Medio: puede mantenerse como "memoria de avisos y cobros". | Muy alto: planning, compras, margen, subcontratas, clientes, documentos. |
| 6. Acceso a leads cualificados | Bueno: Habitissimo/Cronoshare, distribuidores, asociaciones, instaladores. | Bueno: marketplaces, almacenes electricos, instaladores habilitados. | Bueno: marketplaces locales, urgencias, suministros, reseñas, comunidades. | Bueno pero mas caro y competido: marketplaces de reformas y prescriptores. |
| 7. WTP probable | Medio-alto si ahorra revisiones/cobros; exigira funciones SAT. | Medio: 10-25 EUR/mes si evita olvidos; mas si incluye presupuestos/factura. | Medio claro: 9-19 EUR/mes por recordatorios/cobros; 19-39 EUR/mes si genera presupuestos simples con confirmacion. | Medio-alto: 29-99 EUR/mes, pero espera gestion integral. |
| 8. Competencia directa en voz y recordatorios | Alta desde FSM/SAT y herramientas de mantenimiento. | Media-alta: apps de partes, facturacion, Verifactu y presupuestos. | Alta pero aun fragmentada: hay apps verticales con dictado/WhatsApp/recordatorios. | Alta: gestion de obra, presupuestos, partes, CRM, marketplaces. |

Criterios Nathan especificos:

- Datos capturados por voz/transcripcion: riesgo alto si se conservan audios brutos; riesgo medio si se transcribe a campos y se elimina audio pronto.
- Datos de cliente final: nombre, telefono, direccion, importe, disponibilidad horaria y problema domestico son datos personales y pueden revelar presencia/ausencia en domicilio.
- Datos tecnicos: en electricidad y HVAC pueden tener implicacion de seguridad, normativa o responsabilidad profesional. En fontaneria domestica se pueden limitar mejor.
- Almacenamiento: minimo viable debe guardar tareas, estado, vencimiento y extracto; no audio permanente, no geolocalizacion continua, no fotos por defecto.
- Terceros STT/LLM: solo con contrato de encargado, no entrenamiento por defecto, region UE si esta disponible, retencion limitada, logs reducidos y lista de subencargados.
- Consentimiento y transparencia: si solo dicta el autonomo, informar al autonomo y evitar grabar clientes. Si se graba voz del cliente o llamada, consentimiento explicito previo.
- Borrado: borrado por aviso/cliente, purga automatica de audios, exportacion y eliminacion simple.
- Mensajes automaticos: no deben salir sin confirmacion humana en MVP. Recordatorios internos primero; mensajes a cliente solo con boton de aprobar.
- Seguridad operativa: autenticacion fuerte, bloqueo por PIN/biometria, cifrado, control de sesiones y minimizacion de datos visibles en notificaciones.
- Minimizacion: guardar "llamar a Maria por fuga lavabo manana 10:00" es aceptable; guardar audio completo de la visita, fotos del bano y diagnostico tecnico completo por defecto no lo es.

## 3. Hallazgos de mercado o senales externas.

Senales generales:

- El INE clasifica dentro de construccion especializada las instalaciones electricas, fontaneria, calefaccion y aire acondicionado. La Estadistica Estructural de Empresas de construccion 2024 indica que las actividades de construccion especializada concentran el 33,9% de la facturacion del sector y el 50,9% del personal ocupado. Las ramas de instalaciones electricas, fontaneria y otras instalaciones aportan una parte relevante de facturacion y empleo del sector.
- El DIRCE 2024 registra 3,25 millones de empresas economicamente activas en Espana y una mayoria amplia de empresas con soporte legal de persona fisica. Esto encaja con un producto para microautonomos, pero no prueba WTP.
- En fuentes de mercado aparecen muchas soluciones para partes, presupuestos, facturas, cobros y avisos en oficios: PartesPRO, PartePro, FixTo, Plenia, PresuNow, FontaGest, ObraFlow, Ordenea y Jobber. La senal es clara: el dolor existe, pero el espacio esta concurrido.
- Hay competencia directa o semidirecta alrededor de voz/WhatsApp: PresuNow declara dictado por voz para presupuestos y facturas; FontaGest declara presupuestos dictando al movil; FixTo declara recordatorios por WhatsApp y cobros pendientes; SolonAssistant y otras herramientas conversacionales prometen gestionar presupuestos/facturas desde WhatsApp o Telegram.
- Los marketplaces como Habitissimo y Cronoshare ya concentran demanda cualificada por zona y oficio. Esto ayuda a identificar canales y lenguaje de dolor, pero tambien indica que los profesionales ya reciben presion comercial de multiples proveedores.

Senales por subsegmento:

- HVAC / climatizacion:
  - El RITE regula instalaciones termicas en edificios. Esto hace que la agenda de mantenimiento y revision sea valiosa, pero tambien vuelve peligrosos los flujos que parezcan certificacion, diagnostico o cumplimiento automatico.
  - La normativa de gases fluorados restringe instalacion, mantenimiento, control de fugas, carga y recuperacion a personal certificado. Un asistente de voz que almacene o sugiera datos tecnicos de refrigerante debe ser muy prudente.
  - Buena recurrencia, pero alto riesgo de capturar datos tecnicos sensibles y convertirse en software SAT.
- Electricistas:
  - El REBT y documentacion asociada a baja tension elevan el riesgo de prometer ayuda en certificados, mediciones o legalizacion.
  - El dolor de microgestion existe, pero el MVP debe evitar cualquier diagnostico electrico o generacion de boletines.
- Fontaneros:
  - La competencia vertical empieza a nombrar explicitamente "fontaneros autonomos", dictado, presupuestos rapidos, historial, cobros olvidados y agenda.
  - En el trabajo domestico pequeno el recordatorio tiene valor inmediato: presupuesto no enviado, pieza pendiente, vuelta pendiente, cobro pendiente.
  - Es el subsegmento donde la aplicacion puede limitarse mejor a "memoria operativa" sin tocar cumplimiento tecnico complejo.
- Reformistas:
  - Habitissimo y Houzz muestran volumen de reformas y demanda de profesionales, pero el trabajo natural incluye proyecto, planificacion, fotos, presupuestos por partidas, subcontratas y cambios.
  - Hay alto dolor, pero no es buen primer objetivo para un copiloto ligero: pide gestion de obra desde el dia uno.

Hallazgos de privacidad y tecnologia:

- AEPD considera que la voz puede ser dato personal si identifica o hace identificable a una persona. La transcripcion con IA es tratamiento de datos personales si contiene datos relativos a personas fisicas.
- AEPD recalca minimizacion, plazo minimo de conservacion y accesibilidad minima como proteccion de datos por defecto.
- OpenAI Platform indica que los datos enviados por API no se usan para entrenar por defecto salvo opt-in, y ofrece controles de retencion/residencia bajo condiciones. Esto no elimina la necesidad de DPA, base juridica, minimizacion y borrado.
- Google Cloud Speech-to-Text indica que por defecto no registra audio/transcripciones del cliente, salvo opt-in al programa de data logging. Esto apunta a que la seleccion/configuracion de proveedor STT es una decision critica.
- Mensajes automaticos a clientes son area sensible: los recordatorios de servicio pueden ser transaccionales, pero comunicaciones comerciales automatizadas requieren cuidado adicional y consentimiento previo. Para MVP: no automatizar envio externo; solo preparar borradores.

## 4. Mejor subsegmento recomendado.

Recomiendo avanzar solo con:

**Fontaneros autonomos de reparacion domestica y obra menor, excluyendo gas, calderas, climatizacion, certificados y cualquier diagnostico tecnico automatizado.**

Definicion estricta del primer caso de uso:

- Voz del profesional para capturar un aviso o proximo paso.
- Transcripcion a campos minimos: cliente, telefono opcional, direccion o zona, problema resumido, importe pendiente, pieza pendiente, fecha/hora de recordatorio y estado.
- Recordatorios internos: llamar, enviar presupuesto, comprar pieza, volver, cobrar, mandar justificante.
- Borradores de mensaje al cliente solo con confirmacion manual.
- Sin agenda de equipos, sin rutas, sin facturacion oficial, sin Verifactu, sin inventario, sin partes firmados, sin pagos integrados y sin diagnostico tecnico.

## 5. Por que gana frente a los demas.

Fontaneros gana por equilibrio entre dolor, frecuencia y acotacion de riesgo:

- Tiene microtareas olvidables frecuentes y concretas: "llamar a este cliente", "comprar latiguillo", "volver cuando seque", "pasar precio", "cobrar 80 EUR", "mandar foto/recibo".
- El valor del recordatorio es facil de explicar sin prometer contabilidad ni ERP: menos olvidos, menos clientes sin seguimiento, menos cobros colgados.
- La voz encaja muy bien en huecos de jornada: furgoneta, portal, ferreteria, salida de un aviso. La captura puede ser de 10-20 segundos.
- La privacidad es mas acotable que en reformistas y HVAC si el producto no guarda fotos ni audios por defecto.
- El MVP puede ser una "bandeja de proximos pasos" y no una suite de gestion.
- Los leads cualificados son accesibles porque el oficio aparece en marketplaces locales, directorios, suministros y busquedas de urgencia.
- El WTP probable no es enorme, pero es creible si se vincula a cobros y presupuestos olvidados. Un autonomo puede aceptar 9-19 EUR/mes si recupera un cobro o evita perder un trabajo al mes.
- Aunque hay competencia, mucha empuja hacia facturacion, Verifactu, partes o presupuestos. Hay espacio para una posicion mas estrecha: "no se te escapa ningun aviso ni cobro dictandolo al salir del trabajo".

## 6. Riesgos del subsegmento elegido.

Riesgos principales:

- Competencia directa creciente: varias herramientas ya prometen dictado, presupuestos, recordatorios, WhatsApp o gestion para fontaneros.
- WTP limitado si el producto se percibe como lista de tareas con voz. Debe conectar con dinero: cobros pendientes, presupuestos sin enviar y vueltas olvidadas.
- Riesgo de deriva funcional: el usuario pedira factura, presupuesto, fotos, firma, WhatsApp automatico, inventario, agenda y gestor. Eso rompe el foco.
- Datos de domicilio: direccion, telefono, horarios y problemas domesticos son sensibles desde seguridad personal. Una brecha podria exponer domicilios vulnerables o ausencias.
- Audio bruto: si se guarda por defecto, multiplica riesgo de datos incidentales: voces de clientes, vecinos, menores, conversaciones privadas o datos no necesarios.
- Mensajes automaticos mal enviados: recordatorios a cliente equivocado, importes erroneos, tono inadecuado, envio fuera de horario o contenido comercial sin consentimiento.
- Errores de transcripcion: importes, telefonos, direcciones o fechas mal capturados pueden causar perdida de cobro, visita fallida o exposicion de datos a otro cliente.
- Datos tecnicos incidentales: aunque se excluya gas/caldera, el profesional puede dictar informacion de instalaciones sensibles. Debe haber filtros y disclaimers de no uso para diagnostico.
- Dependencia de terceros STT/LLM: subencargados, retencion, residencia, logs y cambios de condiciones son riesgo estructural.
- Uso en movilidad: telefono perdido, notificaciones visibles en pantalla bloqueada, sesiones abiertas y acceso por ayudantes.

Guardarrailes minimos:

- Audio eliminado tras transcripcion y confirmacion, con maximo tecnico corto si hace falta depurar. Ideal: no conservar audio.
- Transcripcion convertida a campos; no guardar texto largo si no aporta tarea.
- No usar datos para entrenar modelos. No opt-in a data logging de STT.
- Region UE o proveedor con garantias equivalentes cuando sea viable.
- DPA con STT/LLM y registro de subencargados.
- Borrado por cliente/aviso y purga automatica de tareas cerradas tras plazo definido.
- Mensajes externos siempre con aprobacion explicita del profesional.
- Notificaciones que no muestren direccion completa ni importe por defecto.
- Confirmacion visual de importes, telefonos y fechas antes de crear recordatorios o borradores.

## 7. Que habria que comprobar antes de avanzar.

Antes de avanzar, sin validar aun con usuarios ni operar:

- Si el dolor principal en fontaneros es realmente "olvidos de seguimiento/cobro" y no "conseguir clientes", "facturar Verifactu" o "presupuestar".
- Si el autonomo aceptaria pagar por una capa estrecha de voz + recordatorios sin facturacion integrada.
- Si las notas de voz reales pueden reducirse a campos minimos sin perder utilidad.
- Si el producto puede funcionar sin guardar audio ni fotos.
- Si un proveedor STT/LLM permite configuracion con no entrenamiento, retencion baja, DPA, residencia adecuada y borrado operativo.
- Si los recordatorios internos son suficiente valor inicial sin enviar WhatsApp automaticos.
- Si el segmento acepta una promesa limitada: "organizar proximos pasos", no "gestionar tu negocio".
- Si hay un canal defendible que no dependa de comprar leads caros en marketplaces ya saturados.
- Si el flujo puede excluir de forma entendible gas, calderas, climatizacion, certificados y diagnostico tecnico.
- Si el usuario entiende y acepta que toda informacion dictada debe evitar datos innecesarios de clientes.

## 8. Que subsegmentos descartas por ahora y por que.

Descarto por ahora:

**HVAC / climatizacion.**

- Alto valor, pero demasiado pronto para MVP ligero por RITE, gases fluorados, mantenimientos, activos, garantias, certificados y trazabilidad tecnica.
- Si se hace bien, pide SAT/CMMS: equipos, contratos, revisiones, partes, historico tecnico, documentos y cumplimiento.
- Mayor riesgo de que una transcripcion o recordatorio incorrecto se interprete como recomendacion tecnica o incumpla un proceso reglado.

**Electricistas.**

- Viable a medio plazo, pero no primero.
- Los datos tecnicos y documentales pueden entrar rapido en REBT, certificados, boletines, mediciones, fotos de cuadros, potencia y seguridad.
- Para mantenerlo seguro habria que limitarlo tanto que el valor diferencial frente a recordatorios genericos podria bajar.

**Reformistas.**

- Hay dolor fuerte y WTP mayor, pero el producto natural es gestion de obra.
- Expone mas datos de vivienda: fotos, planos, llaves/accesos, presupuestos altos, anticipos, conflictos, subcontratas y calendario de ocupacion.
- El MVP de voz + recordatorios quedaria insuficiente o derivaria a ERP de obra muy rapido.

## 9. Nivel de confianza: alto, medio o bajo.

**Nivel de confianza: medio.**

Motivo:

- La senal externa de dolor y competencia es clara.
- El razonamiento tecnico/privacidad favorece fontaneria domestica frente a HVAC, electricidad y reformas.
- La parte no comprobada es WTP real por una herramienta estrecha sin facturacion, sin WhatsApp automatico y sin gestion integral.
- La competencia en voz/WhatsApp esta avanzando rapido, asi que el diferencial deberia ser foco, seguridad y simplicidad extrema.

## 10. Recomendacion final: avanzar, investigar mas, reformular o bloquear.

**Recomendacion final: investigar mas.**

No bloquearia la tesis: el subsegmento recomendado tiene sentido si se define con mucha precision.

No recomendaria avanzar a build ni validacion todavia. Recomendaria reformular internamente la hipotesis de MVP asi:

> Copiloto de voz para fontaneros autonomos de reparacion domestica que convierte notas de 10-20 segundos en recordatorios internos de proximos pasos y cobros pendientes, sin guardar audio por defecto y sin enviar mensajes automaticos al cliente.

Condicion de avance futura:

- Salva debe aprobar target, datos permitidos/prohibidos, limites de promesa, metodo de prueba y criterio de invalidacion.
- Nathan debe aprobar un perfil de datos minimo antes de cualquier mock o prueba.
- Irinas debe revisar consentimiento y claridad de UX.
- Gael debe validar que la promesa no deriva a software de facturacion/ERP.
- Mercury debe fijar criterios de evidencia para no confundir interes por "IA/WhatsApp" con disposicion real de pago.

## Fuentes publicas consultadas.

- INE - Estadistica Estructural de Empresas: Sector Construccion 2024: https://ine.es/dyngs/Prensa/EEESCONS2024.htm
- INE - DIRCE 2024: https://www.ine.es/dyngs/Prensa/es/DIRCE2024.htm
- INE - CNAE 2025, actividades de construccion especializada: https://ine.es/daco/daco42/clasificaciones/cnae25/CNAE_2025.pdf
- MITECO - RITE, Reglamento de Instalaciones Termicas en los Edificios: https://www.miteco.gob.es/es/energia/Eficiencia/RITE
- BOE - Real Decreto 1027/2007, RITE consolidado: https://www.boe.es/buscar/pdf/2007/BOE-A-2007-15820-consolidado.pdf
- BOE - Real Decreto 115/2017, gases fluorados y certificacion: https://www.boe.es/eli/es/rd/2017/02/17/115/con
- Ministerio de Industria - Preguntas frecuentes REBT baja tension: https://industria.gob.es/Calidad-Industrial/seguridadindustrial/instalacionesindustriales/baja-tension/Paginas/preguntas-frecuentes.aspx
- Gencat Canal Empresa - Documentacion instalacion baja tension: https://canalempresa.gencat.cat/es/03_sectors_d_activitat/05_construccio_i_instal_lacions/03_instal_lacions/aigua_gas_i_electricitat/electricitat/baixa_tensio/documentacio-necessaria-titular-installacio-baixa-tensio/index.html
- AEPD - Proteccion de datos por defecto: https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/proteccion-de-datos-por-defecto
- AEPD - Transcripcion de voz con IA: https://www.aepd.es/prensa-y-comunicacion/blog/transcripcion-de-voz-con-ai
- AEPD - Transcripcion de voz con IA II: https://www.aepd.es/prensa-y-comunicacion/blog/transcripcion-de-voz-con-ia-ii-responsabilidad-derechos-y-transparencia
- AEPD - Llamadas automatizadas con fines comerciales: https://www.aepd.es/preguntas-frecuentes/5-publicidad-no-deseada/FAQ-0502-llamadas-automatizadas-sin-intervencion-humana-con-fines-comerciales
- OpenAI Platform - Data controls: https://platform.openai.com/docs/guides/your-data
- OpenAI - Enterprise privacy/API commitments: https://openai.com/policies/api-data-usage-policies/
- Google Cloud Speech-to-Text - Data logging: https://cloud.google.com/speech-to-text/docs/data-logging
- Habitissimo - Como funciona: https://www.habitissimo.es/como_funciona
- Habitissimo profesionales - Como funciona para profesionales: https://soporte.habitissimo.com/hc/es/articles/204266863--C%C3%B3mo-funciona-habitissimo-para-profesionales-
- Cronoshare profesionales - registro y trabajos por zona: https://www.cronoshare.com/registro/profesionales
- Cronoshare - como funciona: https://www.cronoshare.com/como-funciona
- PartesPRO - software para instalaciones, reformas y mantenimiento: https://partespro.es/
- PartePro - partes de trabajo, firma y cobros pendientes: https://www.partepro.com/
- FixTo - citas, presupuestos, facturas, cobros y recordatorios por WhatsApp: https://www.fixto.es/
- Plenia - software Verifactu para oficios: https://www.plenia.app/
- FontaGest - software de gestion para fontaneros con IA: https://fontagest.es/
- PresuNow - presupuestos y facturas para fontaneros con dictado: https://presunow.com/es/fontaneros
- Ordenea - gestion de avisos SAT: https://ordenea.es/
- ObraFlow - software para instaladores: https://obraflow.pro/sectores/instaladores
- Jobber - field service software review/pricing signal 2026: https://www.techradar.com/pro/software-services/jobber-crm-review
- Holded - precios y recordatorios de facturas: https://www.holded.com/es/precios
