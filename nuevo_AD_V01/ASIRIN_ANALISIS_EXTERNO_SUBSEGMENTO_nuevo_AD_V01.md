# ASIRIN_ANALISIS_EXTERNO_SUBSEGMENTO_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Asirin
Tipo: investigacion externa publica, sin validacion con usuarios

## 1. Subsegmentos comparados.

Compare estos subsegmentos para un MVP estricto de registro de gastos profesionales en campo mediante foto y contexto breve:

- Electricistas autonomos y microempresas de baja tension.
- Fontaneros autonomos.
- Climatizacion/HVAC, incluyendo instalacion y mantenimiento de aire acondicionado, calefaccion, RITE y frio.
- SAT tecnico de electrodomesticos, equipos o maquinaria ligera.
- Mantenimiento tecnico recurrente de edificios, locales o comunidades.
- Reformistas y obra menor.
- Instaladores generalistas: telecomunicaciones, placas solares, alarmas, gas, cargadores, energia, puertas, ventanas u otros.
- Autonomos multiservicio.
- Otros detectados: cerrajeros, reparadores domesticos no oficiales, seguridad electronica.

Subsegmento recomendado dentro de la categoria general: electricistas autonomos o microempresas muy pequenas de baja tension que hacen avisos, reparaciones e instalaciones pequenas en viviendas, locales y pequenas empresas. Excluiria de entrada: fotovoltaica integral, cargadores VE como proyecto complejo, obra nueva grande, mantenimiento industrial, alta tension, ingenieria, certificaciones como promesa principal y empresas con ERP/partes ya implantados.

## 2. Criterios usados.

Use criterios de producto y scope, no de TAM puro:

- Claridad del workflow diario: si el trabajo se repite en una secuencia reconocible antes/durante/despues de la visita.
- Repeticion del caso de uso de gastos: si aparecen compras, desplazamientos, tickets y facturas pequenas con frecuencia semanal.
- Simplicidad del MVP: si basta foto del justificante + nota breve + archivo exportable sin entrar en partes de trabajo, fiscalidad exacta, banco, gestorias ni facturacion.
- Riesgo de scope creep: probabilidad de que el usuario empuje hacia presupuestos, cobros, agenda, almacenes, firmas, certificados, garantias, rutas o partes tecnicos.
- Facilidad de delimitar output minimo: si el resultado puede ser "gastos del mes guardados y entendibles" sin convertirse en software vertical completo.
- Contexto movil: si el gasto ocurre fuera de oficina y cerca de la intervencion.
- Homogeneidad del subsegmento: si una muestra pequena produciria aprendizaje comparable.

Lectura rapida por criterio:

| Subsegmento | Workflow | Repeticion de gasto | Simplicidad MVP | Scope creep | Encaje global |
|---|---:|---:|---:|---:|---:|
| Electricistas baja tension | Alto | Alto | Alto | Medio | Mejor |
| Fontaneros | Alto | Alto | Medio | Medio/alto | Bueno pero mas disperso |
| Climatizacion/HVAC | Alto | Alto | Medio/bajo | Alto | Interesante, no primero |
| SAT tecnico | Muy alto | Medio | Bajo | Muy alto | Descartar por ahora |
| Mantenimiento | Alto | Medio/alto | Bajo | Muy alto | Descartar por ahora |
| Reformistas | Medio | Alto | Bajo | Muy alto | Descartar por ahora |
| Instaladores generalistas | Medio | Medio/alto | Medio | Alto | Demasiado amplio |
| Multiservicio | Medio | Medio | Medio | Alto | Poco delimitable |

## 3. Hallazgos de mercado o senales externas.

Hay mercado suficiente alrededor de instalaciones tecnicas, pero no conviene empezar por "instaladores" como categoria amplia. La Confederacion Nacional de la Construccion, usando datos INE, recoge 389.146 empresas constructoras en 2025 y 78.775 empresas en el grupo CNAE 432 de instalaciones electricas, fontaneria y otras instalaciones en obras de construccion. Esto indica masa de empresas, pero tambien que el paraguas 432 mezcla perfiles demasiado distintos para una prueba limpia.

La estructura asociativa confirma que hay tejido profesional accesible y segmentable. FENIE declara 70 asociaciones y mas de 15.000 empresas asociadas en instalaciones electricas, telecomunicaciones y climatizacion. CONAIF declara 67 asociaciones/gremios y mas de 19.000 empresas instaladoras. Agremia, en Madrid, declara mas de 2.100 empresas instaladoras habilitadas, con un 40% autonomos. Esta senal favorece instaladores tecnicos y, en particular, electricistas: hay asociaciones, proveedores, formacion y actividad recurrente.

El dolor general de conservar justificantes tiene soporte externo fiscal. La Agencia Tributaria exige correlacion con ingresos, justificacion documental y registro contable/libros-registro para considerar gastos deducibles. Eso no valida demanda comercial, pero si refuerza que "guardar el justificante con contexto" es un output minimo sensato y no una comodidad decorativa.

El mercado de software vertical para oficios ya empuja fuerte hacia partes, agenda, facturacion, firmas, stock, rutas, mantenimiento, contratos y ERP. PartesPRO se posiciona para obras, instalaciones, reformas y mantenimiento; Technify ofrece plantillas por fontaneria, climatizacion, gas y electricidad; AppSAT y SAT Control cubren ordenes de trabajo, partes, agenda, stock, contratos, facturacion, rutas, avisos y ERP. La senal importante no es "hay que copiar eso", sino lo contrario: si el MVP toca el flujo operativo completo, se hunde en producto vertical. nuevo_AD_V01 debe elegir un subsegmento donde pueda quedarse legitimamente en el microflujo de gasto.

Climatizacion/HVAC y SAT muestran workflows muy claros, pero tambien mucha carga documental y operacional. RITE obliga a registros, certificados y mantenimiento; los SAT trabajan con garantias, repuestos, historial de equipo, diagnosis, rutas y comunicacion con cliente. Son mejores verticales para un producto de operaciones que para un MVP estricto de gastos.

## 4. Mejor subsegmento recomendado.

Recomiendo empezar por electricistas autonomos y microempresas muy pequenas de baja tension, centrados en avisos, reparaciones e instalaciones pequenas en viviendas, locales y pequenas empresas.

El caso de uso minimo quedaria asi:

1. Sale a una visita o pequena instalacion.
2. Compra material electrico, combustible, parking, peaje, ferreteria puntual o consumible.
3. Hace foto del ticket/factura cerca del pago.
4. Anade una nota muy corta: cliente/obra/intervencion o motivo profesional.
5. A final de semana/mes tiene un archivo revisable para el mismo o para enviar a gestor/a.

El output minimo no deberia ser un parte de trabajo. Deberia ser un registro de gasto con justificante y contexto suficiente para recordar por que ese gasto existio.

## 5. Por que gana frente a los demas.

Gana porque combina suficiente repeticion con una frontera de producto mas defendible.

Frente a fontaneros, el electricista tiene una identidad profesional mas acotada para empezar. Fontaneria se mezcla rapido con calefaccion, gas, siniestros, reformas de bano, urgencias de agua, comunidades y aseguradoras. El gasto existe, pero el contexto operativo tira antes hacia fotos de averia, presupuesto, parte, seguro y prueba de trabajo.

Frente a climatizacion/HVAC, el electricista evita entrar tan pronto en RITE, gases, mantenimiento reglado, potencia, equipo, numero de serie, revisiones y certificados. HVAC tiene buen potencial, pero su "registro minimo" natural no es solo gasto; suele ser equipo + mantenimiento + garantia + parte tecnico.

Frente a SAT tecnico, electricistas permiten mantenerse mas cerca del gasto profesional. En SAT el flujo dominante es aviso, diagnosis, repuesto, garantia, estado de reparacion, firma y cierre. Los gastos son secundarios respecto al control de la orden.

Frente a mantenimiento, el electricista pequeno tiene menos presion inicial hacia activos, rondas preventivas, SLAs, checklist, QR, contratos y equipos.

Frente a reformistas, evita proyectos largos, compras grandes, subcontratas, presupuestos cambiantes, acopios, certificaciones de obra y control de rentabilidad por proyecto. En reformas, un MVP de gastos tenderia a convertirse en control de obra.

Frente a instaladores generalistas y multiservicio, electricistas dan una muestra mas limpia. "Instalador" puede significar placas, telecom, alarma, gas, climatizacion, carpinteria o energia. "Multiservicio" agrupa demasiadas formas de trabajar y haria dificil saber que se aprende.

## 6. Riesgos del subsegmento elegido.

- Scope creep hacia partes de trabajo: el usuario puede pedir cliente, materiales usados, horas, firma, presupuesto y factura.
- Scope creep hacia certificados: boletines, memorias tecnicas, REBT, legalizaciones o documentacion para distribuidoras pueden contaminar el MVP.
- Riesgo de que el dolor real no sea el ticket: puede que el mayor problema sea cobrar, presupuestar, coordinar agenda o conseguir clientes.
- Riesgo de que las compras de material ya vengan con factura de proveedor mensual y no generen tanto dolor de captura como los tickets pequenos.
- Riesgo de bajo WTP si el gestor ya acepta fotos por WhatsApp o si el autonomo normaliza ordenar todo a final de mes.
- Riesgo de heterogeneidad si se mezcla electricista domestico, instalador de placas, mantenimiento industrial y telecomunicaciones.
- Riesgo fiscal/privacidad si se promete deducibilidad, calculo de IVA o conservacion legal sin base tecnica aprobada.

## 7. Que habria que comprobar antes de avanzar.

Antes de cualquier validacion externa o build, comprobaria internamente que el subsegmento se puede definir con criterios duros:

- Electricista autonomo o microempresa de 1 a 3 personas.
- Trabajo semanal fuera de oficina.
- Al menos 5 gastos profesionales semanales capturables cerca del pago.
- Compra frecuente de material/consumibles en proveedor, ferreteria o gran superficie, mas gastos de desplazamiento.
- No usa de forma disciplinada una app de gastos.
- No depende ya de ERP, GMAO, parte digital o sistema de proveedor que resuelva el problema.
- Puede explicar una alternativa actual concreta: bolsillo, furgoneta, carpeta, WhatsApp, email, Drive o envio mensual a gestor/a.
- Reconoce coste de cierre: tiempo, perdida de justificantes, memoria, dudas de contexto o friccion con gestor/a.

Tambien habria que comprobar si el output minimo deseado es realmente "archivo de gastos con justificantes y contexto" y no "parte de trabajo", "factura", "presupuesto" o "control de materiales".

## 8. Que subsegmentos descartas por ahora y por que.

Descarto climatizacion/HVAC como primer subsegmento, aunque sea atractivo. Tiene recurrencia y necesidad documental, pero demasiada gravedad hacia RITE, mantenimiento reglado, gases, equipos, garantias, seriales y contratos.

Descarto SAT tecnico. Su workflow es clarisimo, pero el producto natural es gestion de ordenes, repuestos, garantias, estados, rutas, firmas y comunicacion con cliente. nuevo_AD_V01 perderia el foco de gasto minimo.

Descarto mantenimiento tecnico recurrente. El dolor real suele vivir en activos, rondas, contratos, checklist, incidencias, historico y SLAs. Es un vertical operativo, no un buen primer paso para captura ligera de gastos.

Descarto reformistas y obra menor. Hay muchos gastos, pero el contexto minimo se convierte rapido en control de obra, presupuesto, compras, subcontratas y rentabilidad por proyecto.

Descarto instaladores generalistas. Es una etiqueta comercial util, pero no una muestra de producto. Mezcla oficios, normativa, ciclos de venta y gastos muy distintos.

Descarto autonomos multiservicio. Puede haber dolor administrativo, pero la variedad reduce aprendizaje y aumenta el riesgo de construir una herramienta generica sin workflow claro.

Dejaria fontaneros como segunda opcion. El caso es parecido al de electricistas y puede servir si no hay acceso suficiente a electricistas, pero lo restringiria a fontanero autonomo de avisos/reparaciones pequenas, excluyendo gas, calefaccion compleja, siniestros de aseguradora y reformas.

## 9. Nivel de confianza: alto, medio o bajo.

Medio.

La confianza no es alta porque no hay validacion con usuarios, no se ha medido frecuencia real de gastos ni WTP, y las senales externas no prueban compra. Si es suficiente para una recomendacion de producto previa: electricistas pequenos ofrecen mejor equilibrio entre workflow repetido, gastos capturables y MVP acotable.

## 10. Recomendacion final: avanzar, investigar mas, reformular o bloquear.

Avanzar en la definicion interna con electricistas autonomos/microempresas de baja tension como subsegmento inicial recomendado.

Condicion: avanzar no significa validar, reclutar, construir, captar datos reales ni preparar herramientas operativas. Significa usar este subsegmento como candidato preferente para que Salva y owners decidan si merece pasar a una fase posterior autorizada.

La formulacion recomendada seria:

"Electricista autonomo o microempresa muy pequena de baja tension, con trabajo frecuente fuera de oficina y gastos profesionales semanales, que hoy guarda tickets/facturas de forma manual y necesita recordar el contexto del gasto para cierre mensual o envio a gestor/a."

No reformularia el problema todavia. No bloquearia. Investigaria mas solo si Salva quiere elegir entre electricistas y fontaneros con mayor seguridad antes de aprobar target.

**Fuentes consultadas**

- Agencia Tributaria, requisitos para considerar un gasto deducible: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/irpf-2025/c07-rendimientos-actividades-economicas-estimacion-directa/fase-1-determinacion-rendimiento-neto/gastos-fiscalmente-deducibles/requisitos-considerar-gasto-deducible.html
- Confederacion Nacional de la Construccion, Memoria 2025: https://cnc.es/wp-content/uploads/2026/05/MEMORIA-CNC-25-WEB.pdf
- FENIE, federacion y empresas instaladoras asociadas: https://fenie.es/
- CONAIF Digital, estructura de asociaciones y empresas instaladoras: https://conaifdigital.es/quien-lo-hace-posible/
- Agremia, red de empresas instaladoras y porcentaje de autonomos: https://agremia.com/informacion-corporativa-agremia/
- BOE, Reglamento Electrotecnico para Baja Tension: https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099
- BOE, Reglamento de Instalaciones Termicas en los Edificios (RITE): https://www.boe.es/buscar/doc.php?id=BOE-A-2007-15820
- PartesPRO, software de partes para instalaciones, reformas y mantenimiento: https://partespro.es/
- Technify, software de gestion de partes para instaladores: https://technify.es/
- AppSAT, software SAT y gestion de partes/ERP: https://www.appsat.net/
- SAT Control, software de gestion de asistencia tecnica: https://satcontrol.app/
- El Pais, senales de demanda y falta de instaladores electricos/electrotecnia: https://elpais.com/economia/negocios/2025-11-09/a-la-caza-de-una-nueva-generacion-de-instaladores.html
