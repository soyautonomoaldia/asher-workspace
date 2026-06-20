# CONSOLIDADO_ANALISIS_COPILOTO_OFICIOS_nuevo_AD_V01

Fecha: 2026-06-06
Consolida: Gael
Tipo: consolidado de ronda individual secuencial
Tesis evaluada: copiloto ligero para autonomos de oficio basado en voz, recordatorios y microgestion administrativa-operativa.

Nota de alcance: este documento no autoriza validacion con usuarios, reclutamiento, mensajes externos, Tally, Drive, Sheets, mock operativo, herramientas operativas, pricing publico, pagos, build ni produccion.

## Documentos Individuales

- Mercury: `MERCURY_ANALISIS_COPILOTO_OFICIOS_nuevo_AD_V01.md`
- Gael: `GAEL_ANALISIS_COPILOTO_OFICIOS_nuevo_AD_V01.md`
- Asirin: `ASIRIN_ANALISIS_COPILOTO_OFICIOS_nuevo_AD_V01.md`
- Nathan: `NATHAN_ANALISIS_COPILOTO_OFICIOS_nuevo_AD_V01.md`
- Irinas: `IRINAS_ANALISIS_COPILOTO_OFICIOS_nuevo_AD_V01.md`

## Resultado Ejecutivo

La nueva tesis cambia el ranking respecto al analisis centrado en tickets. Ahora el punto critico no es "quien tiene mas justificantes", sino:

- quien olvida mas microtareas accionables;
- donde un recordatorio crea dinero o evita perdida;
- donde la voz cabe en la jornada real;
- donde el MVP no se convierte en ERP, SAT, GMAO, gestor de obra o software de facturacion.

Resultado por owner:

| Owner | Area | Subsegmento recomendado | Confianza | Recomendacion |
|---|---|---|---|---|
| Mercury | Mercado/validacion | HVAC/climatizacion | Media | Investigar mas |
| Gael | Comercial/GTM | HVAC/climatizacion | Media | Investigar mas |
| Asirin | Producto/MVP | HVAC/climatizacion | Media | Investigar mas |
| Nathan | Tecnica/datos/privacidad | Fontaneros | Media | Investigar mas |
| Irinas | UX/confianza | Fontaneros | Media | Investigar mas |

No hay sign-off para operar. Todos los owners recomiendan **investigar mas**, no avanzar a validacion, build, mock ni pricing.

## Lectura Consolidada

Hay dos candidatos reales:

1. **HVAC/climatizacion** gana desde mercado, GTM y producto.
2. **Fontaneros autonomos de reparacion domestica** gana desde tecnica, privacidad, UX y confianza.

El conflicto es importante:

- HVAC parece mejor negocio inicial si conseguimos mantenerlo ligero.
- Fontaneros parece mejor producto inicial si queremos minimizar riesgo, friccion y complejidad.

Mi lectura estricta:

> Para la tesis de copiloto de voz + recordatorios, HVAC sigue siendo el candidato con mayor oportunidad comercial, pero Fontaneros es el candidato mas seguro para probar el comportamiento basico de voz sin caer en ERP.

Por tanto, no recomiendo elegir todavia un solo ganador como target operativo. Recomiendo una comparativa interna final de dos candidatos: **HVAC vs Fontaneros**, con hipotesis y criterios de invalidacion especificos.

## Comparativa De Candidatos

### HVAC / climatizacion

Definicion recomendada:

> Autonomo propietario o microempresa de 1-3 tecnicos de climatizacion residencial/pequeno terciario que hace instalacion, reparacion y mantenimiento, y necesita no olvidar seguimientos de visita: presupuesto, pieza, segunda visita, cobro y mantenimiento.

Por que gana en mercado/GTM/producto:

- Alta frecuencia de visitas, mantenimientos y seguimientos.
- Recordatorios con valor economico: revision, mantenimiento, presupuesto, pieza, cobro, garantia.
- Buen encaje de voz en furgoneta o al terminar visita.
- WTP probable superior si se conecta a mantenimiento recurrente, cobros y trabajos no perdidos.
- Mercado en crecimiento y con canales visibles: asociaciones, directorios, instaladores, proveedores.
- MVP posible si se limita a "dicta visita -> proximos pasos".

Riesgos:

- Puede convertirse en SAT/GMAO/ERP.
- Puede pedir historial de equipos, contratos, RITE, gases, certificados, partes y garantias.
- Puede capturar datos tecnicos y de cliente sensibles.
- Estacionalidad puede inflar o distorsionar la necesidad.
- Competidores de field service pueden anadir voz como feature.

Condicion para seguir:

HVAC solo es aceptable si el MVP excluye desde el inicio:

- cumplimiento RITE;
- certificados;
- diagnostico tecnico;
- historico completo de equipos;
- partes tecnicos;
- stock;
- facturacion;
- mensajes automaticos;
- datos no necesarios del cliente;
- audio guardado por defecto.

### Fontaneros

Definicion recomendada:

> Fontanero autonomo de reparacion domestica y pequenos avisos, excluyendo gas, calderas, climatizacion, certificados y diagnostico tecnico automatizado.

Por que gana en tecnica/UX/confianza:

- Microtareas muy concretas: volver, comprar pieza, pasar precio, llamar, cobrar.
- Voz corta de 10-20 segundos encaja mejor al salir del aviso.
- Menor necesidad de historial tecnico complejo.
- MVP acotable como "bandeja de proximos pasos y cobros".
- Control humano antes de enviar mensajes es facil de explicar.
- Menor riesgo de app pesada que en reformas, electricistas o HVAC.

Riesgos:

- WTP probablemente menor.
- Competencia directa ya usa lenguaje similar: Avisos, FixTo, PartePro, PresuNow/FontaGest y field-service tools.
- Muchos trabajos pueden cerrarse en una visita, reduciendo valor de recordatorios.
- Si piden facturacion, Verifactu, partes, WhatsApp automatico o agenda completa, se rompe el foco.
- Datos domesticos siguen siendo sensibles: direccion, horarios, telefono, importes, problema del hogar.

Condicion para seguir:

Fontaneros solo es aceptable si existe dolor real en:

- cobros olvidados;
- presupuestos no enviados;
- piezas pendientes;
- vueltas no agendadas;
- avisos que se pierden en WhatsApp/libreta.

Si el dolor principal es captar clientes, facturar o conseguir urgencias, no sirve para AD.

## Ranking Actual

### 1. HVAC/climatizacion

Mejor opcion si Salva prioriza oportunidad comercial y WTP potencial.

No debe pasar a operacion. Debe pasar, como maximo, a ficha interna de hipotesis con limite anti-SAT/ERP.

### 2. Fontaneros

Mejor opcion si Salva prioriza prueba de comportamiento de voz, simplicidad UX y menor riesgo tecnico.

No debe pasar a operacion. Debe pasar, como maximo, a ficha interna de hipotesis con limite anti-facturacion/anti-WhatsApp automatico.

### 3. Electricistas

Buen mercado, pero demasiado heterogeneo:

- averias;
- baja tension;
- boletines;
- fotovoltaica;
- cargadores VE;
- industrial;
- reformas;
- mantenimiento.

Para usarlo habria que crear un nicho nuevo, no "electricistas" en general. Ademas ya aparece competencia de presupuestos por voz.

### 4. Reformistas

Mayor dolor y probablemente mayor WTP, pero peor encaje con "copiloto ligero". El producto natural seria gestion de obra:

- presupuestos por partidas;
- extras;
- anticipos;
- subcontratas;
- fases;
- fotos;
- compras;
- margen;
- conflictos con cliente.

Descartado como primer target.

## Competencia Y Posicionamiento

La competencia directa/semidirecta ya existe:

- STEL Order / STEL Assistant: IA por voz/texto dentro de software de gestion.
- ServiceM8 / Housecall Pro: field service con app movil, recordatorios, notas y automatizaciones.
- FixTo: agenda, presupuestos, cobros, WhatsApp, recordatorios, rentabilidad.
- PartePro / PartesPRO: partes, firma, envio, cobros y recordatorios.
- PresuNow: presupuestos/facturas por voz para oficios.
- Avisos: app enfocada a fontaneros autonomos.
- FontaGest / Plenia / otros: gestion, Verifactu, presupuestos, facturacion y verticales.

Implicacion:

AD no puede competir como "otro gestor de oficios". La unica posicion defendible ahora seria:

> Copiloto ultraligero de voz para no olvidar proximos pasos y cobros, sin ERP, sin facturacion, sin partes, sin automatismos externos y sin configuracion pesada.

Si esa posicion no se puede defender, la tesis se diluye.

## MVP Mas Estricto Posible

MVP comun para HVAC o Fontaneros:

- Entrada por voz de 10-30 segundos.
- Conversion a tarea editable.
- Campos maximos:
  - accion;
  - cliente/apodo;
  - fecha/hora;
  - importe opcional;
  - material/pieza opcional;
  - nota corta.
- Bandejas:
  - hoy;
  - atrasado;
  - por cobrar;
  - por volver;
  - por presupuestar.
- Recordatorios internos.
- Borrador de mensaje solo con confirmacion manual.
- No conservar audio por defecto.
- No OCR obligatorio.
- No integraciones.
- No facturacion.
- No Verifactu.
- No parte firmado.
- No stock.
- No diagnostico tecnico.
- No cumplimiento normativo.

Promesa minima:

> Dicta lo que no quieres olvidar y AD te lo convierte en proximos pasos revisables.

No-promesas:

- No gestiona tu negocio.
- No factura.
- No cobra.
- No certifica.
- No hace diagnostico tecnico.
- No sustituye tu criterio profesional.
- No envia nada sin tu confirmacion.

## Riesgos Principales De La Nueva Tesis

### Riesgo comercial

El mercado ya tiene apps baratas y suites completas. Si AD parece una lista de tareas con voz, WTP bajo. Si parece ERP, compite contra jugadores establecidos.

### Riesgo de foco

"Copiloto" puede volverse demasiado amplio. Hay que cerrarlo en 3 microtareas maximas antes de cualquier prueba.

### Riesgo de privacidad

Voz puede capturar datos personales, direcciones, importes, horarios, problemas domesticos, terceros, voces incidentales y datos tecnicos. No se debe guardar audio por defecto.

### Riesgo de automatizacion

Enviar mensajes automaticos a clientes sin revision humana seria un error grave de confianza. MVP: recordatorios internos y borradores revisables.

### Riesgo de falso positivo

La gente puede interesarse por "IA por voz" sin pagar ni usarla repetidamente. El criterio futuro debe medir comportamiento repetido y dinero recuperado, no entusiasmo.

## Decision Recomendada Por Gael

Recomendacion: **investigar mas con doble hipotesis HVAC vs Fontaneros**, sin elegir todavia un unico target operativo.

Razon:

- HVAC tiene mejor oportunidad SaaS si se mantiene acotado.
- Fontaneros tiene mejor seguridad UX/datos para probar voz ligera.
- La diferencia entre ambos afecta al producto, al pricing, al canal y al riesgo legal.

No recomiendo reformistas. No recomiendo electricistas generalistas.

## Siguiente Accion Propuesta

Crear una ficha interna comparativa de dos candidatos:

1. **HVAC/climatizacion**: candidato de oportunidad comercial.
2. **Fontaneros**: candidato de simplicidad UX/datos.

La ficha debe decidir:

- 3 microtareas maximas por candidato;
- momento exacto de dictado;
- datos permitidos/prohibidos;
- recordatorios permitidos;
- no-promesas;
- competencia directa;
- hipotesis de WTP;
- criterios de invalidacion.

Decision que Salva debe tomar despues de esa ficha:

- elegir HVAC;
- elegir Fontaneros;
- pedir una comparativa externa adicional solo entre esos dos;
- bloquear la tesis si la posicion "copiloto ultraligero" no parece defendible.

Hasta entonces, estado recomendado: **bloqueado para ejecucion externa, abierto solo a investigacion interna**.
