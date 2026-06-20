# CONSOLIDADO_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01

Fecha: 2026-06-06
Owner consolidado: Gael
Pregunta central: Hay mercado defendible para un gestor/ERP minimo por voz para autonomos de oficio, suficientemente simple para venderse como herramienta ligera y suficientemente valioso para que paguen?

## Documentos Base

- `MERCURY_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01.md`
- `GAEL_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01.md`
- `IRINAS_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01.md`
- `NATHAN_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01.md`
- `ASIRIN_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01.md`

## Estado

### Hecho

La tesis nueva amplia la oportunidad respecto a "captura de gastos" o "copiloto de recordatorios". Hay mercado real, competencia real y dolor plausible en autonomos/microequipos de oficio.

Tambien hay riesgo alto: si AD se formula como ERP, facturacion, fiscalidad, SAT/GMAO o sustituto de gestoria, entra en categorias con competidores fuertes, compliance, soporte, precios bajos y expectativas amplias.

### Supuesto

La oportunidad defendible, si existe, no es "ERP por voz". Es una capa ligera de memoria operativa por trabajo: capturar al salir de una visita que se hizo, que falta, que se debe cobrar, que material hay que comprar y que justificante/foto queda para revisar.

### Riesgo

La tesis tiene atractivo verbal alto y puede generar falsos positivos: "me vendria bien", "lo usaria", "pagaria por IA" o "los oficios lo necesitan" no prueban uso recurrente ni WTP.

### Decision Requerida

Salva debe decidir si esta tesis sustituye la hipotesis activa de gastos o si queda como hipotesis comparativa interna.

### Condicion De Desbloqueo

No desbloquear validacion, reclutamiento, mensajes externos, mock operativo, build, pricing publico, datos reales ni produccion.

Desbloqueo solo para definicion interna si se aprueban:

- target unico;
- buyer economico;
- alternativa actual dominante;
- workflow doloroso observable;
- promesa minima no fiscal;
- no-promesas;
- datos permitidos/prohibidos;
- modo de prueba sin datos reales;
- criterios de invalidacion;
- sign-off de owners y Salva.

### Siguiente Accion Propuesta

Crear dos fichas internas antes de cualquier otra cosa:

1. Ficha comparativa HVAC/climatizacion vs fontaneria domestica.
2. Politica minima de datos para gestor/ERP por voz.

## Sintesis Por Owner

### Mercury

Mercury ve mercado real y competencia real. El mercado de oficios existe, pero "oficios" es demasiado ancho como target. La categoria ya esta ocupada por herramientas de partes, presupuestos, facturacion, field service, CRM ligero, gastos y gestoria.

Recomienda no competir como ERP. El hueco posible esta en captura por voz de microcierres operativos. Propone comparar HVAC/climatizacion y fontaneria domestica, con preferencia prudente por HVAC si se controla el scope.

### Gael

Comercialmente, el buyer probable es autonomo propietario o microempresa de 1-3 personas. La WTP solo sera defendible si AD recupera dinero o reduce coste visible: cobros, presupuestos, materiales, visitas y cierre.

La venta se complica si se dice "ERP", "IA administrativa" o "gestoria". La promesa mas vendible es: dictar al salir del trabajo lo que no puede olvidarse.

### Irinas

La UX solo funciona si es captura rapida en campo y revision posterior. Voz ayuda, pero no puede ser obligatoria; deben existir foto y texto corto.

La confianza exige lenguaje claro: AD captura y organiza, no decide fiscalmente. Los importes/impuestos son estimaciones revisables. La gestoria revisa; AD no la sustituye.

### Nathan

La tesis toca datos personales, audios, fotos, documentos, importes, direcciones y posible informacion fiscal. Sin politica minima de datos, el producto queda demasiado abierto.

Bloquea mock operativo, build, datos reales, automatizacion externa y cualquier promesa fiscal. Solo acepta ejercicios internos con datos ficticios.

### Asirin

Producto no debe empezar por modulos. La unidad central debe ser `trabajo/aviso`.

El nucleo recomendado es `trabajo + cobro pendiente + justificante asociado`: que hice, que me deben, que papel/foto tengo. Todo lo demas debe colgar de eso o quedar fuera.

## Respuesta A La Pregunta Central

### Hecho

Hay mercado y dolor plausible. Tambien hay competencia y alternativas baratas/gratis.

### Supuesto

Puede haber mercado defendible si AD se acota a una herramienta ligera de memoria operativa por voz/foto/texto para trabajos, cobros y papeles, no a un ERP.

### Riesgo

El mercado deja de ser defendible si el MVP requiere facturacion legal, fiscalidad, stock, partes complejos, agenda completa, integraciones, SAT/GMAO o sustitucion de gestoria.

### Decision Requerida

La tesis no debe aprobarse como "gestor/ERP minimo". Debe reformularse internamente como:

"Libreta operativa por voz para autonomos de oficio: trabajos, cobros pendientes, materiales, justificantes y cierre revisable para gestoria."

### Condicion De Desbloqueo

Solo desbloqueada para definicion interna si Salva acepta la reformulacion y los limites.

### Siguiente Accion Propuesta

Seleccionar un primer segmento candidato: HVAC/climatizacion microequipo o fontaneria domestica. Gael recomienda HVAC/climatizacion como opcion comercial mas fuerte, con fontaneria como backup mas simple.

## Criterios De Invalidacion Futura

La tesis debe bloquearse o reformularse si, en una fase futura autorizada:

- el usuario exige facturacion legal, Verifactu, impuestos exactos o sustitucion de gestoria como minimo;
- exige agenda completa, WhatsApp automatico, banco, stock avanzado, partes firmados, SAT/GMAO o integraciones;
- no identifica coste economico concreto por olvidos o cierre desordenado;
- la WTP privada no cubre un SaaS viable;
- la voz no se usa en contexto real por ruido, verguenza, privacidad o precision;
- el flujo necesita mas de cinco campos obligatorios para aportar valor;
- no se puede minimizar audio/fotos/documentos sin destruir utilidad.

## Veredicto

Investigar mas internamente. No avanzar a validacion, mock operativo ni build.

La tesis merece seguir solo si se reduce de "ERP por voz" a "captura y orden operativo por trabajo". Estado operativo: bloqueado para ejecucion externa y desbloqueable solo para definicion interna documental.

