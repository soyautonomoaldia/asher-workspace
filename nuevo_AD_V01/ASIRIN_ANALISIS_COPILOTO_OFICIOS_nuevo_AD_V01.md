# ASIRIN_ANALISIS_COPILOTO_OFICIOS_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Asirin
Estado: analisis de producto/MVP con investigacion publica, sin validacion externa ni acciones operativas

Nota de alcance: este documento reanaliza la tesis como copiloto ligero para autonomos de oficio basado en voz, recordatorios y microgestion administrativa-operativa. No evalua una app centrada solo en captura de gastos o tickets.

## 1. Subsegmentos comparados.

Subsegmentos analizados:

- HVAC / climatizacion: instaladores y mantenedores de aire acondicionado, calefaccion, ACS, ventilacion, aerotermia y frio ligero.
- Electricistas: instaladores de baja tension, reparacion, boletines/CIE, reformas electricas, puntos de recarga y pequenos mantenimientos.
- Fontaneros: averias, reparaciones, instalaciones, saneamiento, calentadores, gas/agua cuando aplique y pequenos mantenimientos.
- Reformistas: autonomos o microequipos que coordinan reformas parciales/integrales, gremios, presupuestos, fases, extras, compras y cobros.

Lectura de mercado base:

- El DIRCE 2025 del INE situa la construccion en 389.146 empresas, de las que 207.743 no tienen asalariados. Es decir, hay mucho tejido micro y autonomo, pero no todo es campo tecnico repetible.
- La memoria 2024 de la Confederacion Nacional de la Construccion, con fuente INE, separa 78.390 empresas en CNAE 432, instalaciones electricas, fontaneria y otras instalaciones, y 74.382 en CNAE 433, acabado de edificios. Esto confirma que instaladores y reformistas son masas comparables, aunque con workflows distintos.
- eInforma estima 47.131 empresas en CNAE 4321, instalaciones electricas, y 32.406 en CNAE 4322, fontaneria, calefaccion y aire acondicionado. El CNAE 4322 mezcla fontaneria y climatizacion, por lo que el subsegmento HVAC debe acotarse por especialidad comercial, RITE, mantenimiento y directorios, no solo por CNAE.

## 2. Criterios usados.

1. Frecuencia de microtareas administrativas olvidables: notas de visita, fotos pendientes, materiales, presupuesto, parte firmado, seguimiento, cobro, proxima revision.
2. Valor de recordatorios: cuanto dinero, confianza o cumplimiento se pierde si se olvida una llamada, un presupuesto, una revision, un cobro o una cita.
3. Encaje de voz en la jornada: si el profesional trabaja con manos ocupadas, se desplaza en furgoneta y necesita capturar contexto antes de olvidarlo.
4. Facilidad de acotar MVP: posibilidad de resolver un flujo estrecho sin facturacion completa, ERP, stock, cuadrillas, contabilidad ni integraciones.
5. Riesgo de convertirse en ERP generico: presion hacia presupuestos complejos, margenes, personal, partes, stock, obra, fiscalidad o CRM amplio.
6. Acceso a leads cualificados: existencia de registros, asociaciones, directorios, gremios, marketplaces, proveedores o agrupaciones con segmentacion real.
7. WTP probable: inferida de ahorro de tiempo, reduccion de olvidos, mejora en cobros y precios publicos de herramientas comparables. No es propuesta de pricing publico.
8. Competencia directa en voz y recordatorios: herramientas de oficios, field service, presupuestos por voz, IA conversacional, recordatorios de cita/cobro y ERPs ligeros.

## 3. Hallazgos de mercado o senales externas.

Hay una senal horizontal fuerte: el autonomo pierde tiempo en administracion. Fuentes de ATA citadas por medios y gestores apuntan a unas 200 horas anuales de burocracia por autonomo, con coste estimado de 3.000 euros. Esto no prueba demanda para un producto, pero si valida que el dolor de microgestion existe mas alla de un oficio concreto.

Tambien hay senal clara de software existente: FixTo, PartePro, PartesPRO, PresuNow, STEL Order, Jobber, SteadyOps y otros atacan agenda, presupuestos, partes, facturas, cobros, recordatorios, WhatsApp, IA o voz. La competencia confirma dolor, pero tambien marca el riesgo: si el MVP intenta cubrir todo el ciclo, entra en un mercado de gestion/field-service saturado.

Por subsegmento:

- HVAC / climatizacion: el mejor patron para recordatorios. El RITE, segun IDAE, obliga a programas especificos de mantenimiento con programacion, documentacion y archivo de actuaciones en instalaciones termicas. En campo, esto genera visitas recurrentes, comprobaciones, certificados/registro, proxima revision, aviso a cliente, presupuesto de reparacion y cobro. La voz encaja bien porque el tecnico suele estar en desplazamiento o con manos ocupadas y necesita capturar condiciones del equipo, medidas, sintomas, piezas y proximo paso.
- Electricistas: volumen muy alto y buena capacidad de pago en ciertos trabajos. Hay microtareas frecuentes, sobre todo presupuestos, CIE/boletines, fotos, materiales, seguimiento y cobros. Pero el flujo se divide entre urgencias pequenas, reformas, fotovoltaica, cargadores, mantenimientos e industria. PresuNow ya comunica dictado por voz, firma, seguimiento y facturacion para electricistas, lo que reduce novedad y obliga a especializar mucho.
- Fontaneros: dolor diario muy claro en urgencias, desplazamientos, fotos, piezas y cobros. PartePro y otras apps ya enfatizan parte firmado, PDF por WhatsApp, recordatorio de cobro y uso movil. El problema es que muchos trabajos son puntuales y de baja complejidad administrativa; el recordatorio aporta valor, pero el MVP puede quedar como una agenda/cobros generica para oficios.
- Reformistas: valor economico alto por presupuesto, extras, anticipos, compras, gremios, fases y desviaciones. Pero precisamente por eso el producto se convierte rapido en control de obra, ERP, presupuesto por partidas, rentabilidad, equipo, documentos y cliente. PartesPRO, ObraCore y Motor de Presupuestos muestran que el mercado empuja hacia control de costes, presupuestos complejos y gestion de obra, no hacia un copiloto ligero.

Senales de competencia relevantes:

- FixTo cubre citas, presupuestos, facturas, cobros, gastos, recordatorios por WhatsApp, historial de cliente y alertas fiscales para fontaneros, electricistas, reformistas y climatizacion.
- PartePro promete parte de trabajo movil, firma, envio por WhatsApp y recordatorio de cobro; publica un plan autonomo alrededor de 8-10 euros/mes.
- PresuNow ofrece presupuestos por voz, seguimiento, firma digital y facturacion para electricistas; publica planes de 14,95 y 24,95 euros/mes.
- STEL Order presento STEL Assistant, con interaccion por texto o voz para ejecutar tareas como crear facturas o revisar stock dentro del software.
- SteadyOps posiciona IA de recepcion, CRM, citas, follow-up, estimaciones e invoicing para home services desde 79 USD/mes.
- Jobber y otros field-service suites cubren scheduling, quoting, invoicing, mobile app y gestion de jobs; suelen ir por encima del rango de una herramienta ligera para autonomo solo.

## 4. Mejor subsegmento recomendado.

Recomiendo HVAC / climatizacion, acotado aun mas a autonomos o microempresas de instalacion y mantenimiento residencial/pequeno comercio con visitas recurrentes.

MVP estricto recomendado:

"Copiloto de visita y seguimiento para tecnicos de climatizacion": captura por voz tras la visita, convierte la nota en tareas simples, recordatorios y checklist minimo de proximo paso.

No deberia incluir inicialmente facturacion, ERP, stock, cuadrillas, fiscalidad, integraciones, portal cliente, presupuestos complejos ni envio automatico a clientes.

Objeto MVP:

- grabar/dictar nota de visita;
- extraer cliente/equipo/sintoma/material pendiente/proximo paso;
- crear recordatorios de revision, llamada, presupuesto, pieza, cobro o segunda visita;
- mostrar agenda/tareas del dia y atrasadas;
- conservar historial minimo por cliente/equipo;
- permitir exportar/resumir para gestor o herramienta actual, sin sustituirla.

## 5. Por que gana frente a los demas.

Gana porque combina mejor frecuencia, repeticion y acotacion.

Frente a electricistas:

- Electricistas tienen mas volumen de empresas y trabajos de mayor ticket, pero el workflow es mas heterogeneo: boletines, urgencias, obra, reformas, fotovoltaica, cargadores, industria. Para ser util pronto, el producto tenderia a presupuestos por partidas, certificados o CRM. Ademas ya hay competencia directa de presupuestos por voz y seguimiento.

Frente a fontaneros:

- Fontaneria tiene uso movil y dolor de cobro, pero muchas intervenciones son one-shot. El valor de recordatorio existe en cobros y presupuestos, menos en mantenimiento recurrente salvo calefaccion/gas/contratos. Hay riesgo de acabar siendo "parte + WhatsApp + cobro", ya cubierto por apps ligeras.

Frente a reformistas:

- Reformas tiene mas dinero por proyecto, pero es el peor para MVP estricto. Entra rapidamente en fases, gremios, desviaciones, compras, margenes, anticipos, cambios de alcance y cliente. El copiloto de recordatorios seria util, pero incompleto si no toca control de obra.

HVAC gana por estas razones:

- La recurrencia de mantenimiento crea recordatorios naturales y medibles.
- La nota de visita tiene estructura repetible: equipo, averia/sintoma, acciones, piezas, proxima revision, presupuesto/cobro.
- El tecnico trabaja mucho fuera de oficina y la voz tiene encaje real en furgoneta o al terminar una intervencion.
- El MVP puede enfocarse en "no olvidar el siguiente paso" sin prometer gestion total de empresa.
- Hay canales y leads mas cualificados: CNI, asociaciones provinciales de instaladores, FENIE, RII, directorios de climatizacion, distribuidores y proveedores del sector.
- La perdida por olvido puede ser concreta: revision no agendada, contrato/mantenimiento no renovado, pieza no pedida, presupuesto no seguido, cobro no reclamado.

## 6. Riesgos del subsegmento elegido.

- CNAE mezclado: en datos publicos, climatizacion aparece mezclada con fontaneria/calefaccion. Hay que segmentar comercialmente por actividad real, no solo por codigo.
- Competencia indirecta fuerte: ERPs, SAT, field-service software, apps de partes, presupuestos por voz y asistentes de IA ya cubren trozos del flujo.
- Riesgo de ERP: si se empieza por equipos, mantenimientos, presupuestos, stock y facturas, el producto se expande demasiado rapido.
- Variabilidad tecnica: residencial, pequeno comercio, industrial, frio, aerotermia y calderas pueden tener necesidades distintas.
- Regulacion y responsabilidad: no debe prometer cumplimiento RITE, certificados, seguridad, diagnostico tecnico ni asesoramiento legal.
- Estacionalidad: aire acondicionado y calefaccion concentran picos; puede afectar urgencia y disposicion a probar.
- Dato sensible operativo: clientes, direcciones, equipos, fotos, notas y cobros requieren limites claros antes de cualquier prueba.

## 7. Que habria que comprobar antes de avanzar.

Antes de avanzar, sin validar todavia con usuarios hasta que Salva lo autorice, habria que comprobar con fuentes publicas y decision interna:

- Si el target debe ser "climatizacion residencial y pequeno comercio" o "mantenimiento RITE ligero" sin entrar en instalaciones industriales.
- Que microtareas exactas se repiten semanalmente: revision, presupuesto, pieza, cobro, llamada, garantia, segunda visita.
- Que recordatorio tiene mas valor economico: mantenimiento recurrente, presupuesto pendiente, cobro pendiente o pieza pendiente.
- Que alternativa actual domina: WhatsApp personal, notas del movil, agenda Google, libreta, Excel, gestor, app SAT o ERP.
- Que nivel de WTP privada se considera suficiente para no caer por debajo de 10 euros/mes ni competir contra suites de 50-100 euros/mes.
- Que datos se permitirian y prohibirian en una prueba futura: voz, transcripcion, cliente, direccion, fotos, importes, datos fiscales, documentos tecnicos.
- Que promesa se puede sostener sin parecer cumplimiento normativo ni gestor administrativo.
- Que canal inicial seria defendible: asociaciones, directorios, proveedores, almacenes/distribuidores o comunidades profesionales.

## 8. Que subsegmentos descartas por ahora y por que.

Descarto reformistas como primer MVP.

Motivo: alto valor pero baja acotacion. El producto se convertiria en control de obra, presupuestos, compras, gremios, desviaciones, certificaciones, anticipos y rentabilidad. No es buen primer mercado para un copiloto ligero de voz y recordatorios.

Descarto fontaneros como primera opcion.

Motivo: encaje movil claro, pero menos recurrencia estructural. El MVP tenderia a parte de trabajo, WhatsApp, firma y cobro, donde ya hay alternativas ligeras. Puede ser segundo subsegmento si se elige "reparacion + cobro", pero no gana para una tesis de recordatorios recurrentes.

Descarto electricistas como primera opcion, aunque no como mercado.

Motivo: gran tamaño y buen WTP potencial, pero workflow demasiado abierto y competencia directa en presupuestos por voz/seguimiento. Para ganar habria que elegir un nicho aun mas estrecho, por ejemplo CIE/boletines, cargadores o mantenimiento, y eso ya cambia la tesis.

## 9. Nivel de confianza: alto, medio o bajo.

Medio.

La confianza es media porque las senales externas apoyan el dolor y la oportunidad en HVAC/climatizacion, pero todavia no hay evidencia directa de usuarios, disposicion de pago privada ni frecuencia real medida por autonomo. La recomendacion se basa en criterio de producto/MVP y fuentes publicas, no en validacion.

## 10. Recomendacion final: avanzar, investigar mas, reformular o bloquear.

Recomendacion final: investigar mas.

No avanzaria a construccion ni validacion todavia. Si Salva decide continuar, reformularia la tesis activa a:

"Copiloto ligero de voz y recordatorios para autonomos/microempresas de climatizacion que no quieren un ERP, centrado en no olvidar seguimientos de visita: revision, presupuesto, pieza, segunda visita y cobro."

Condicion de desbloqueo interna propuesta:

- aprobar target inicial HVAC/climatizacion residencial-pequeno comercio;
- definir 3 microtareas maximas del MVP;
- prohibir alcance ERP desde el inicio;
- fijar limites de datos y promesa;
- decidir canal de investigacion futura sin contacto externo hasta autorizacion.

## Fuentes publicas consultadas.

- INE, Directorio Central de Empresas DIRCE 2025: https://www.ine.es/dyngs/Prensa/es/DIRCE2025.htm
- Confederacion Nacional de la Construccion, Memoria 2024: https://ag2024.cnc.es/wp-content/uploads/2025/03/MEMORIA-CNC-24-WEB_compressed-1.pdf
- eInforma, CNAE 4321 Instalaciones electricas: https://www.einforma.com/informes-sectoriales/cnae-4321-empresas-instalaciones-electricas
- eInforma, CNAE 4322 Fontaneria, calefaccion y aire acondicionado: https://www.einforma.com/informes-sectoriales/cnae-4322-empresas-fontaneria-instalacion-de-sistemas-de-calefaccion-y-aire-acondicionado
- IDAE, Guia tecnica: mantenimiento de instalaciones termicas: https://www.idae.es/publicaciones/guia-tecnica-mantenimiento-de-instalaciones-termicas
- Ministerio de Industria, Guia tecnica de instalaciones frigorificas: https://industria.gob.es/Calidad-Industrial/seguridadindustrial/instalacionesindustriales/instaciones-frigorificas/Documents/GUIA%20IF%20NIPO%20v4.pdf
- Ministerio de Industria, Registro Integrado Industrial: https://industria.gob.es/registros-industriales/RII/Paginas/Index.aspx
- Ministerio de Industria, Consultas publicas del RII: https://industria.gob.es/registros-industriales/RII/Paginas/consultas-publicas.aspx
- CNI Instaladores: https://www.cni-instaladores.com/
- FENIE: https://fenie.es/
- FixTo: https://www.fixto.es/
- PartePro: https://www.partepro.com/
- PartesPRO: https://partespro.es/
- PresuNow Electricistas: https://presunow.com/es/electricistas
- PresuNow precios: https://presunow.com/es/pricing
- Motor de Presupuestos: https://motordepresupuestos.com/
- Cadena SER, STEL Order Assistant: https://cadenaser.com/murcia/2026/03/29/stel-order-presenta-una-herramienta-de-ia-que-ejecuta-tareas-reales-para-autonomos-y-pequenas-empresas-radio-murcia/
- SteadyOps: https://steadyops.io/
- Korva: https://www.gokorva.com/
- Jobber Help Center, Core Plan: https://help.getjobber.com/hc/en-us/articles/360048155913-The-Core-Plan
- Autonomos y Emprendedor, carga burocratica autonomos 2025: https://www.autonomosyemprendedor.es/articulo/info-ata/autonomos-han-invertido-200-horas-3000-euros-tramites-burocraticos-2025-ata/20251219150531047332.amp.html
- Consejo General de Gestores Administrativos, resumen de actualidad sobre burocracia de autonomos: https://www.consejogestores.org/noticias/resumen-actualidad-0801/
- CEPYME / Autonomos y Emprendedor, morosidad y facturas fuera de plazo: https://www.autonomosyemprendedor.es/articulo/noticias-de-empresa/cepyme-avisa-que-mitad-facturas-autonomos-negocios-pagan-fuera-plazo-legal/20240420021032035853.html
