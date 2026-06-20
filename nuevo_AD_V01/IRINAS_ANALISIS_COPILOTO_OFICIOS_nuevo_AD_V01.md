# IRINAS_ANALISIS_COPILOTO_OFICIOS_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Irinas
Alcance: reanalisis UX, confianza y claridad para un copiloto ligero de voz, recordatorios y microgestion administrativa-operativa para autonomos de oficio.

Nota de alcance: este documento usa la fuente activa `SOURCE_OF_TRUTH_nuevo_AD_V01.md` y fuentes publicas online. No se ha realizado validacion con usuarios, reclutamiento, mensajes externos, mock operativo, preparacion de Tally/Drive/Sheets, build, pricing publico, pagos ni produccion.

## 1. Subsegmentos comparados.

Subsegmentos comparados para la nueva tesis:

| Subsegmento | Jornada real | Microtareas tipicas olvidables | Lectura UX inicial |
|---|---|---|---|
| HVAC / climatizacion | Visitas de instalacion, reparacion y mantenimiento; furgoneta; picos estacionales; equipos y revisiones. | Pedir pieza, enviar presupuesto, volver, cobrar, recordar mantenimiento, registrar modelo/equipo, llamar al cliente. | Muy buen valor de recordatorio, pero el lenguaje tecnico y el RITE empujan a promesas de registro, cumplimiento o SAT. |
| Electricistas | Averias, obra pequena, boletines, reformas, cargadores, fotovoltaica ligera, material y presupuestos. | Fotos, medidas, materiales, presupuesto, cita, cobro, certificado/boletin, seguimiento. | Buen encaje movil, pero demasiada heterogeneidad; la voz compite pronto con herramientas de presupuesto/factura por voz. |
| Fontaneros | Avisos cortos, urgencias, reparaciones domesticas, visitas entre clientes, ferreteria/suministros, cobros. | Llamar, volver, comprar recambio, pasar precio, cobrar, enviar justificante, recordar revision sencilla. | Mejor encaje UX para un producto ligero: notas cortas, lenguaje cotidiano, recordatorios concretos y menor presion a ERP si se excluyen gas/caldera/certificados. |
| Reformistas | Proyectos multi-dia o multi-semana, cliente ansioso, compras, gremios, extras y pagos parciales. | Cambios de alcance, extras, compras, pagos, gremios, fotos, decisiones, retrasos. | Mucho dolor, pero la expectativa natural es gestion de obra; el copiloto ligero se queda corto o se convierte en ERP. |

Mi lectura principal cambia respecto a una tesis de "tickets/gastos": aqui no gana necesariamente el oficio con mas documentos, sino el oficio donde dictar 10-20 segundos no de verguenza, no invada al cliente, se revise facilmente y produzca una accion recordable sin pedir una suite.

## 2. Criterios usados.

Criterios obligatorios y lectura Irinas:

| Criterio | HVAC / climatizacion | Electricistas | Fontaneros | Reformistas |
|---|---:|---:|---:|---:|
| 1. Frecuencia de microtareas administrativas olvidables | Alta | Alta | Muy alta | Muy alta |
| 2. Valor de recordatorios | Muy alto | Medio/alto | Alto | Muy alto |
| 3. Encaje de voz en la jornada | Alto, si se dicta fuera de la casa o local | Alto, pero lenguaje tecnico y obra ruidosa | Muy alto para notas cortas al salir del aviso | Medio/alto, pero notas largas y con contexto |
| 4. Facilidad de acotar MVP | Media | Media/baja | Alta | Baja |
| 5. Riesgo de convertirse en ERP generico | Alto | Alto | Medio/bajo | Muy alto |
| 6. Acceso a leads cualificados | Medio/alto | Alto | Alto | Alto |
| 7. WTP probable por ahorro de tiempo/olvidos/cobros | Medio/alto | Medio/alto | Medio | Alto |
| 8. Competencia directa en voz y recordatorios | Media/alta | Alta | Alta | Alta |
| Comportamiento movil real | Bueno | Bueno | Muy bueno | Bueno pero complejo |
| Friccion de dictar | Media por ruido/equipo/cliente cerca | Media por tecnicismos/seguridad | Baja si se dicta en portal/furgoneta | Alta por duracion y delicadeza |
| Privacidad percibida | Media: equipo, direccion, mantenimiento, posible normativa | Media/alta: cuadros, potencia, boletines, vivienda/local | Media: domicilio e importe, pero datos acotables | Alta: vivienda, fotos, llaves, pagos, conflictos |
| Verguenza/contexto social | Media: cliente puede oir datos tecnicos | Media: obra y otros gremios | Baja/media: nota breve al salir | Alta: dictar conflictos o acuerdos delante de cliente/gremios |
| Control humano antes de enviar | Obligatorio | Obligatorio | Obligatorio y facil de entender | Obligatorio pero insuficiente |
| Probabilidad de uso sin persecucion | Media/alta | Media | Alta | Media/baja |

Principios UX usados:

- La voz no debe ser el producto entero. Debe ser una entrada rapida que acaba en una tarea editable.
- No debe escuchar en continuo ni parecer un asistente autonomo.
- El usuario debe poder corregir nombres, telefonos, fechas e importes antes de guardar o enviar.
- Ningun recordatorio al cliente debe salir sin confirmacion humana.
- La promesa debe ser pequeña: "dicta lo que no quieres olvidar", no "gestiono tu negocio".
- La app debe aceptar lenguaje natural de oficio, tacos, abreviaturas, nombres incompletos y notas imperfectas sin castigar al usuario.
- El valor debe aparecer al dia siguiente, no despues de configurar clientes, catalogos, stock o plantillas.

## 3. Hallazgos de mercado o senales externas.

Senales transversales:

- El movil es una base razonable para el comportamiento real en Espana: DataReportal cifra 56,1 millones de conexiones moviles celulares activas y 46,1 millones de usuarios de internet a finales de 2025; INE y ONTSI mantienen encuestas anuales sobre equipamiento TIC y uso de internet. Esto no prueba adopcion de una app de oficio, pero si evita una objecion basica: el telefono ya es la herramienta de campo.
- AIMC Navegantes 2025 muestra que los asistentes de voz se usan sobre todo desde el telefono movil entre quienes los usan, y que la satisfaccion media no es extrema. Lectura UX: la voz es conocida, pero no se puede asumir entusiasmo ni uso publico sin friccion.
- La AEPD trata la voz como dato personal cuando identifica o puede identificar, y advierte sobre metadatos, confidencialidad, reentrenamiento, ubicacion de datos y errores de transcripcion. Para este producto, confianza significa no guardar audio por defecto, minimizar campos, mostrar revision y permitir borrado.
- La AEPD sobre proteccion de datos por defecto refuerza un criterio de diseno: minima cantidad de datos personales, minima extension del tratamiento, minimo plazo de conservacion y minima accesibilidad. Esto favorece un MVP de tareas internas, no historiales ricos ni audios largos.
- La literatura y documentacion publica sobre reconocimiento de voz en movil y entornos ruidosos confirma que el ruido ambiental y el microfono importan. En oficios esto es central: obra, calle, cuarto de maquinas, portal, coche, cliente hablando y manos ocupadas.
- La competencia de field-service ya normaliza movil, recordatorios, notas, fotos y automatizaciones: ServiceM8 incluye etiquetado por voz y atajos de Siri; Housecall Pro incluye app movil, recordatorios automaticos, cliente y pagos; FixTo promete negocio completo con agenda, WhatsApp, presupuestos, cobros, gastos, rentabilidad y equipos. La oportunidad no es "tener recordatorios", sino evitar que el profesional tenga que adoptar un ERP.

Senales por subsegmento:

**HVAC / climatizacion**

- AFEC reporta crecimiento real del mercado HVAC en Espana en 2025 y una evolucion hacia integracion, operacion y datos. Esto favorece recordatorios de mantenimiento y seguimiento, pero tambien aumenta la tentacion de hablar de rendimiento, registro y cumplimiento.
- El RITE exige mantenimiento, conservacion de documentacion y registro de operaciones de mantenimiento y reparaciones. Desde UX, esto crea recordatorios naturales; desde confianza, crea una linea roja: AD no debe prometer cumplimiento RITE, certificados ni registro oficial.
- La voz puede encajar bien al salir de una visita o en la furgoneta, pero peor en cuarto de maquinas, cubierta, local con ruido o delante del cliente. El lenguaje tecnico tambien sube el coste de correccion si la transcripcion falla.
- Buen candidato si se acota a "no olvidar seguimiento, pieza, cobro o proxima revision". Mal candidato si se deja entrar "historial de equipos + mantenimiento legal + certificados".

**Electricistas**

- PresuNow ya se posiciona para electricistas autonomos con dictado por voz, firma digital y facturacion integrada. Esto valida que la voz puede venderse en el segmento, pero tambien reduce diferenciacion y empuja a presupuesto/factura.
- El trabajo tiene muchos micro-recordatorios, pero "electricista" es demasiado amplio: averias domesticas, reforma, industria, fotovoltaica, cargadores, boletines y certificados generan promesas distintas.
- Desde confianza, el mayor riesgo no es solo privacidad; es que el usuario espere ayuda tecnica o documental en tareas con implicaciones de seguridad/normativa. El MVP tendria que decir muchas veces "solo recuerdo, no certifico ni calculo".

**Fontaneros**

- Avisos se presenta como herramienta solo para fontaneros autonomos y nombra exactamente dolores de UX: papelitos, WhatsApp, libretas, cobros que se olvidan, revisiones que se pasan, agenda con recordatorios y cobros. Esto valida dolor, lenguaje y WTP posible, aunque aumenta competencia.
- El flujo de fontaneria domestica permite notas cortas y accionables: "volver manana con sifon", "cobrar 90", "pasar precio mueble lavabo", "llamar a Carmen por fuga". Esa granularidad es ideal para voz porque no exige redactar un parte completo.
- La verguenza de dictar existe, pero puede mitigarse con una regla simple: nunca dictar delante del cliente si contiene importes o direccion; dictar en portal, coche o ferreteria; boton grande de grabar; transcripcion inmediata; confirmar antes de guardar.
- El MVP puede ser una bandeja de proximos pasos y cobros, no una gestion de clientes completa. Riesgo: si entra gas, calderas, certificados, facturacion o cobros automaticos, se rompe el foco.

**Reformistas**

- Herramientas horizontales como FixTo ya describen el flujo natural de reformas como proyectos con presupuestos base, anexos, anticipos, mano de obra, gastos vinculados y rentabilidad. Esa es precisamente la prueba de que el subsegmento empuja fuera de un MVP ligero.
- La voz tendria valor para registrar acuerdos y extras, pero el contexto social es peor: hay cliente, otros gremios, desacuerdos, importes altos y decisiones delicadas. Dictar "el cliente acepto 600 EUR extra" en publico es incomodo y arriesgado.
- El uso sin persecucion seria dificil: si no se captura todo, el sistema pierde confianza; si se captura todo, ya es gestion de obra.

Competencia directa en voz y recordatorios:

- Directa/semidirecta por voz: PresuNow para electricistas, ServiceM8 con voz en campo, STEL Assistant por texto/voz dentro de un ERP, asistentes horizontales y herramientas emergentes de presupuestos por voz.
- Directa por recordatorios/microgestion: Avisos para fontaneros, FixTo para oficios, PartePro/PartesPRO, Housecall Pro, ServiceM8, FieldVibe y apps de agenda/cobros.
- Riesgo competitivo principal: un competidor con facturacion/partes puede anadir voz como feature. AD solo seria defendible si es mas ligero, mas confiable y menos invasivo.

## 4. Mejor subsegmento recomendado.

Recomiendo **fontaneros autonomos de reparacion domestica y pequenos avisos**, excluyendo de inicio gas, calderas, certificados, climatizacion, diagnostico tecnico automatizado, facturacion legal, pagos integrados y mensajes automaticos al cliente.

Promesa UX recomendada:

> Dicta al salir del aviso lo que no quieres olvidar: volver, comprar pieza, pasar precio, llamar o cobrar. AD te lo deja como tarea editable y no envia nada sin tu permiso.

MVP Irinas:

- Boton unico de captura de voz de 10-20 segundos.
- Transcripcion inmediata a una tarea editable, no a una nota larga.
- Campos maximos: cliente/apodo, accion, fecha, importe opcional, pieza/material opcional, estado.
- Bandeja diaria: hoy, atrasado, por cobrar, por volver.
- Recordatorios internos primero.
- Borrador de WhatsApp/SMS solo si el autonomo pulsa "revisar y enviar"; nunca automatico en MVP.
- Audio eliminado tras transcripcion y confirmacion; si hay error, permitir redictar o escribir.
- Notificaciones discretas sin direccion completa ni importe visible por defecto.
- Lenguaje de producto: "avisos", "volver", "pieza", "cobrar", "pasar precio", "no se me olvide"; evitar "IA", "ERP", "automatizacion total" y "gestion integral".

## 5. Por que gana frente a los demas.

Gana frente a HVAC/climatizacion desde UX/confianza porque permite un MVP mas humilde. HVAC tiene mas recurrencia y WTP probable, pero el usuario puede esperar historial de equipos, mantenimiento reglado, certificados, partes, garantias y cumplimiento. En fontaneria domestica, el primer valor se entiende sin prometer nada tecnico: no olvidar avisos, piezas, vueltas y cobros.

Gana frente a electricistas porque reduce heterogeneidad y riesgo de error con consecuencias de seguridad/documentacion. Electricistas tienen buen encaje movil, pero la palabra "electricista" abre demasiadas rutas: averia, reforma, boletin, cargador, fotovoltaica, cuadro, potencia. El MVP tendria que acotarse tanto que el mensaje perderia claridad.

Gana frente a reformistas porque no exige capturar un proyecto entero. En reformas, la confianza depende de acuerdos, cambios, fotos, importes y plazos. Una app de recordatorios seria util, pero insuficiente; una app completa seria gestion de obra.

Gana por comportamiento real:

- Las notas son cortas.
- El momento de uso es natural: portal, furgoneta, ferreteria, salida de aviso.
- El lenguaje es cotidiano y facil de corregir.
- El usuario puede ver valor sin configurar catalogos ni proyectos.
- El control humano antes de enviar es facil de explicar.
- La promesa no genera expectativas falsas si se mantiene en "memoria de proximos pasos".

No gana por mayor mercado ni mayor WTP. Gana porque es el subsegmento donde la confianza y el uso repetido parecen mas probables sin perseguir al usuario y sin convertir AD en una app pesada.

## 6. Riesgos del subsegmento elegido.

- **WTP limitado:** si se percibe como "recordatorios con voz", puede caer a una banda baja. Tiene que vincularse a cobros olvidados, presupuestos no enviados y vueltas perdidas.
- **Competencia directa:** Avisos ya usa lenguaje muy parecido para fontaneros autonomos; FixTo y field-service suites cubren recordatorios, clientes, cobros y WhatsApp.
- **Deriva a ERP:** los usuarios pediran presupuestos PDF, facturas, Verifactu, pagos, agenda completa, partes firmados, fotos, stock y clientes. Hay que bloquearlo desde la promesa.
- **Privacidad domestica:** nombres, telefonos, direcciones, horarios, problemas del hogar e importes son sensibles. La confianza exige minimizacion real, no solo politica de privacidad.
- **Audio incidental:** puede colarse voz de cliente, familiar, vecino o menor. Por defecto no debe conservarse audio.
- **Errores de transcripcion:** una fecha, telefono, direccion o importe mal entendido puede provocar visita fallida, cobro incorrecto o mensaje al cliente equivocado.
- **Verguenza y ruido:** dictar en casa del cliente o en calle puede ser incomodo; el flujo debe asumir dictado privado breve y permitir escribir.
- **Mensajes automaticos:** un recordatorio enviado sin revision humana destruiria confianza. En MVP, todos los envios externos deben ser manuales.
- **Trabajos one-shot:** si la mayoria cobra y cierra en una visita, el valor baja. El target debe tener suficientes pendientes: piezas, presupuestos, vueltas, revisiones y cobros.

## 7. Que habria que comprobar antes de avanzar.

Sin validar con usuarios todavia ni preparar herramientas operativas, habria que comprobar internamente y con mas fuente publica:

- Si "fontanero autonomo de reparacion domestica y pequenos avisos" tiene suficientes microtareas semanales que no se cierran en el momento.
- Si el dolor principal es olvido/seguimiento/cobro, no captacion de clientes ni facturacion Verifactu.
- Si una promesa estrecha puede sostener WTP privada: recuperar un cobro o una segunda visita al mes deberia justificar el pago.
- Si el flujo puede excluir de forma comprensible gas, calderas, certificados, diagnostico tecnico y cumplimiento.
- Si el usuario aceptaria no guardar audio y trabajar con tareas editables, aunque pierda "memoria completa".
- Si el momento real de dictado existe sin verguenza: portal, furgoneta, ferreteria o cierre de jornada.
- Si la precision de voz con nombres, direcciones, importes y jerga comun es suficiente con revision manual.
- Si los recordatorios internos son suficiente valor inicial antes de enviar mensajes a clientes.
- Si la diferenciacion frente a Avisos/FixTo/PartePro se puede explicar en una frase: "mas ligero, voz primero, sin ERP".
- Si hay leads cualificados accesibles sin contactar todavia: directorios locales, marketplaces, busquedas de urgencias, reseñas, asociaciones, proveedores y almacenes.

Hipotesis de invalidacion futura, si Salva autoriza una fase posterior:

- Si piden facturacion/Verifactu/partes como condicion minima, bloquear esta tesis.
- Si no dictan por verguenza, ruido o privacidad, reformular a WhatsApp/texto/manual.
- Si el valor percibido es solo "agenda barata", bloquear como SaaS independiente.
- Si el usuario quiere mensajes automaticos sin revisar, bloquear por confianza.
- Si no hay al menos 5 microtareas olvidables semanales por profesional, investigar otro subsegmento.

## 8. Que subsegmentos descartas por ahora y por que.

**Descarto reformistas como primer subsegmento.** Tienen dolor y WTP, pero no hay forma limpia de mantenerlo ligero. La confianza se juega en acuerdos, cambios de alcance, fotos, pagos, subcontratas y plazos; eso pide gestion de obra.

**Descarto electricistas generalistas.** Hay buen mercado, buen movil y competencia que valida voz, pero el flujo se abre demasiado pronto a seguridad, boletines, certificaciones, fotovoltaica, cargadores y presupuestos tecnicos. Reabriria solo un nicho muy estrecho, no "electricistas" como categoria.

**Descarto HVAC/climatizacion como primera opcion UX, aunque lo dejo como segundo candidato fuerte.** Tiene mejor recurrencia y WTP probable, pero mayor riesgo de SAT/ERP/regulatorio. Si Fontaneros falla por WTP o diferenciacion, reabriria HVAC acotado a "seguimiento post-visita y mantenimiento no reglamentario" con guardarrailes muy duros.

## 9. Nivel de confianza: alto, medio o bajo.

**Medio.**

La confianza es media porque hay senales externas fuertes de dolor, competencia y uso movil, pero no hay evidencia primaria ni WTP real. Desde UX/confianza, Fontaneros es el mejor candidato para mantener el producto pequeño; desde negocio puro, HVAC podria ganar. Por eso no pondria confianza alta.

## 10. Recomendacion final: avanzar, investigar mas, reformular o bloquear.

**Recomendacion final: investigar mas.**

No recomendaria avanzar a build, mock operativo, validacion, reclutamiento ni mensajes externos. Si Salva acepta la nueva tesis, reformularia internamente nuevo_AD_V01 hacia:

> Copiloto de voz para fontaneros autonomos de reparacion domestica que convierte notas breves en recordatorios internos de proximos pasos y cobros, sin guardar audio por defecto y sin enviar nada al cliente sin confirmacion humana.

Condicion de avance interna:

- aprobar target exacto;
- fijar 3 microtareas maximas del MVP: volver, pieza/material, cobrar/pasar precio;
- definir datos permitidos/prohibidos;
- prohibir promesas de ERP, facturacion, cumplimiento, diagnostico y automatizacion externa;
- preparar criterios de invalidacion antes de cualquier contacto o prueba futura autorizada.

## Fuentes publicas consultadas.

- SOURCE_OF_TRUTH activo: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`
- AEPD, Transcripcion de voz con IA: implicaciones para la proteccion de datos: https://www.aepd.es/prensa-y-comunicacion/blog/transcripcion-de-voz-con-ai
- AEPD, AI Voice Transcription II: accountability, rights and transparency: https://www.aepd.es/en/press-and-communication/blog/ai-voice-transcription-ii-accountability-rights-and-transparency
- AEPD, Proteccion de datos por defecto: https://www.aepd.es/derechos-y-deberes/cumple-tus-deberes/medidas-de-cumplimiento/proteccion-de-datos-por-defecto
- INE, Encuesta sobre equipamiento y uso de TIC en los hogares, ultimos datos: https://www.ine.es/dyngs/INEbase/es/operacion.htm?c=Estadistica_C&cid=1254736176741&idp=1254735576692&menu=ultiDatos
- ONTSI, Equipamiento y actividades de Internet en los hogares espanoles: https://www.ontsi.es/eu/node/15878
- DataReportal, Digital 2026 Spain: https://datareportal.com/reports/digital-2026-spain
- AIMC, Navegantes en la Red 2025 PDF: https://www.aimc.es/a1mc-c0nt3nt/uploads/2026/05/Navegantes2025.pdf
- Microsoft Research, Automatic speech recognition for mobile, hand-held devices: https://www.microsoft.com/en-us/research/publication/automatic-speech-recognition-for-mobile-hand-held-devices-2/
- Springer Nature, Expecting politeness: perceptions of voice assistant politeness: https://link.springer.com/article/10.1007/s00779-024-01822-8
- Tandfonline, Privacy concerns for use of voice activated personal assistant in the public space: https://www.tandfonline.com/doi/abs/10.1080/10447318.2014.986642
- AFEC, Market report 2025: https://www.afec.es/en/mercado-2025
- BOE, Real Decreto 1027/2007 RITE consolidado: https://www.boe.es/buscar/pdf/2007/BOE-A-2007-15820-consolidado.pdf
- ServiceM8, Field Service Mobile App: https://www.servicem8.com/us/features-mobile
- ServiceM8, Feature overview: https://www.servicem8.com/us/feature-overview
- Housecall Pro, Field Service Mobile App: https://www.housecallpro.com/features/mobile-app/
- FixTo, gestion de clientes, citas y facturas para autonomos: https://www.fixto.es/
- Avisos, app de gestion para fontaneros autonomos: https://avisos.app/
- PresuNow, app de presupuestos y facturas para electricistas: https://presunow.com/es/electricistas
- PartePro, partes de trabajo para autonomos: https://www.partepro.com/
- FieldVibe, agenda de trabajos para pequenas empresas: https://apps.apple.com/us/app/fieldvibe-agenda-de-trabajos/id1426360452?l=es-MX
