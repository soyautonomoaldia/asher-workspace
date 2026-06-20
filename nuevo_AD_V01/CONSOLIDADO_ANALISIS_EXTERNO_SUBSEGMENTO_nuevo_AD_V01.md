# CONSOLIDADO_ANALISIS_EXTERNO_SUBSEGMENTO_nuevo_AD_V01

Fecha: 2026-06-06
Consolida: Gael
Tipo: consolidado de analisis externo por owners
Alcance: investigacion publica y comparativa de subsegmentos. No autoriza validacion, reclutamiento, mensajes externos, datos reales, herramientas operativas, mock operativo ni build.

## Documentos Individuales

- Mercury: `MERCURY_ANALISIS_EXTERNO_SUBSEGMENTO_nuevo_AD_V01.md`
- Gael: `GAEL_ANALISIS_EXTERNO_SUBSEGMENTO_nuevo_AD_V01.md`
- Asirin: `ASIRIN_ANALISIS_EXTERNO_SUBSEGMENTO_nuevo_AD_V01.md`
- Nathan: `NATHAN_ANALISIS_EXTERNO_SUBSEGMENTO_nuevo_AD_V01.md`
- Irinas: `IRINAS_ANALISIS_EXTERNO_SUBSEGMENTO_nuevo_AD_V01.md`

## Resultado Ejecutivo

La ronda no produjo unanimidad. Produjo una tension util:

- Mercury recomienda **climatizacion/HVAC** por mercado, recurrencia, mantenimiento, presion documental y foco.
- Gael recomienda **climatizacion/HVAC** por oportunidad comercial, buyer alcanzable, CAC de aprendizaje y mensaje GTM.
- Asirin recomienda **electricistas de baja tension** por mantener el MVP mas estricto y evitar scope creep tecnico.
- Nathan recomienda **mantenimiento ligero B2B/no residencial** por seguridad, menor sensibilidad de datos y menor necesidad tecnica.
- Irinas recomienda **climatizacion/HVAC** por encaje UX, lenguaje estable, uso movil y contexto de captura.

Lectura de Gael:

**HVAC/climatizacion queda como candidato principal de mercado/GTM/UX, pero no como decision limpia todavia.** Gana por oportunidad y foco externo, pero trae dos riesgos serios: scope creep hacia partes/certificados/mantenimiento reglado y exposicion a datos de cliente/equipo.

La mejor decision no es "aprobar HVAC sin mas". La decision defendible seria:

> Usar HVAC/climatizacion como candidato inicial preferente para definicion interna, acotado a autonomos propietarios o microempresas de 1-3 tecnicos que hacen instalacion, averias y mantenimiento recurrente, excluyendo documentacion regulada, certificados, partes tecnicos, datos de cliente final, OCR obligatorio, audio y mock operativo.

Si esa acotacion no se sostiene, el backup producto es **electricistas de baja tension**. Si la prioridad absoluta es privacidad/seguridad antes que mercado, el backup tecnico es **mantenimiento ligero B2B/no residencial**.

## Comparativa De Recomendaciones

| Owner | Area | Subsegmento recomendado | Confianza | Recomendacion |
|---|---|---|---|---|
| Mercury | Mercado/validacion | HVAC/climatizacion | Media | Avanzar solo en decision interna |
| Gael | Comercial/GTM | HVAC/climatizacion | Media | Avanzar solo en decision interna |
| Asirin | Producto/MVP | Electricistas baja tension | Media | Avanzar en definicion interna |
| Nathan | Tecnica/datos/privacidad | Mantenimiento ligero B2B/no residencial | Media | Avanzar con reformulacion acotada |
| Irinas | UX/confianza | HVAC/climatizacion | Media | Avanzar en definicion interna |

Nadie declara confianza alta. Esto importa: hay suficientes senales externas para elegir un candidato inicial, pero no suficiente evidencia para desbloquear validacion o construccion.

## Coincidencias Fuertes

### 1. Hay que abandonar "autonomos tecnicos de campo" como target operativo.

Todos los owners convergen en que es demasiado amplio. Mezcla electricistas, fontaneros, HVAC, SAT, mantenimiento, reformas, instaladores y multiservicio. Esa mezcla romperia el aprendizaje.

### 2. El subsegmento debe tener trabajo movil y gasto recurrente.

Los candidatos fuertes comparten:

- trabajo fuera de oficina;
- compras o gastos durante la jornada;
- cierre posterior con gestoria o administracion;
- riesgo de tickets/facturas perdidas;
- uso habitual del movil;
- necesidad de recordar contexto del gasto.

### 3. El MVP solo puede vivir si no se convierte en software vertical.

Los owners rechazan que AD derive hacia:

- partes de trabajo;
- presupuestos;
- facturacion;
- cobros;
- agenda;
- control de stock;
- certificados;
- garantias;
- ERP/GMAO;
- asesoria fiscal;
- deduccion garantizada.

### 4. La senal externa valida friccion operativa, no demanda de AD.

Las fuentes publicas muestran:

- masa de empresas instaladoras;
- carga administrativa en autonomos;
- uso movil alto;
- software vertical existente;
- presion documental/fiscal;
- digitalizacion desigual en microempresas.

Pero no prueban todavia disposicion a pagar por "foto + contexto breve + archivo revisable".

### 5. La recomendacion comun es avanzar solo en decision interna.

Ningun documento autoriza:

- validacion;
- reclutamiento;
- mensajes externos;
- datos reales;
- Tally, Drive, Sheets;
- mock operativo;
- OCR/audio;
- pricing publico;
- preventa;
- build.

## Conflictos Reales

### Conflicto 1: mercado/GTM/UX favorece HVAC; producto teme scope creep.

Mercury, Gael e Irinas ven HVAC como el mejor equilibrio externo:

- mercado en crecimiento;
- mantenimiento recurrente;
- lenguaje tecnico estable;
- uso movil normalizado;
- asociaciones, proveedores y software vertical visible;
- buyer propietario plausible.

Asirin lo cuestiona desde producto:

- HVAC tiende a RITE, gases, equipos, seriales, mantenimiento reglado, certificados, garantias y partes.
- El "registro minimo" natural podria no ser gasto, sino equipo + mantenimiento + parte tecnico.
- Electricistas de baja tension permiten un MVP mas estrecho: ticket/factura + nota breve + archivo revisable.

Interpretacion de Gael:

Asirin no niega la oportunidad HVAC. Dice que HVAC puede obligarnos a resolver demasiado pronto un producto vertical. Ese riesgo es real y debe entrar como condicion de decision.

### Conflicto 2: oportunidad comercial favorece HVAC; seguridad favorece mantenimiento B2B ligero.

Nathan recomienda mantenimiento ligero B2B/no residencial porque reduce:

- datos de cliente final;
- domicilios particulares;
- fotos de vivienda;
- seriales;
- certificados;
- garantias;
- documentacion regulada;
- necesidad de OCR/audio.

El problema: "mantenimiento ligero B2B" es mas seguro, pero comercialmente menos nitido. Puede abrir buyer empresarial, contratos, GMAO, SLAs y procesos de empresa.

Interpretacion de Gael:

Nathan esta optimizando seguridad, no TAM ni venta. Su recomendacion sirve como limite de diseno para HVAC: si HVAC no puede excluir datos sensibles y documentacion tecnica, entonces no es buen primer segmento.

### Conflicto 3: electricistas son mejor MVP, pero peor foco comercial que HVAC.

Asirin recomienda electricistas de baja tension porque:

- el workflow puede mantenerse mas simple;
- hay gastos de campo capturables;
- el MVP puede evitar partes/certificados si se acota;
- el output "archivo de gastos con justificante y contexto" es mas defendible.

Riesgo comercial:

- electricistas mezclan averias, obra, fotovoltaica, cargadores, telecom, mantenimiento, boletines y reformas;
- el canal y mensaje pueden dispersarse;
- puede haber compra centralizada o factura mensual de proveedor;
- el dolor puede ser presupuesto/cobro/certificacion, no gasto.

Interpretacion de Gael:

Electricistas es el mejor backup si HVAC se considera demasiado complejo para producto. No es automaticamente mejor oportunidad SaaS.

## Ranking Consolidado

### 1. HVAC/climatizacion acotado

Gana como candidato principal por mayoria y por equilibrio entre mercado, GTM y UX.

Definicion recomendada:

> Autonomo propietario o microempresa de 1-3 tecnicos de climatizacion/HVAC, con instalacion, averias y mantenimiento recurrente en residencial o pequeno terciario, que compra material/recambios/gastos de desplazamiento con frecuencia y hoy ordena tickets/facturas manualmente para gestoria.

Exclusiones obligatorias:

- empresas medianas con ERP;
- mantenimiento industrial pesado;
- solo obra grande;
- solo proveedor con factura mensual que resuelve todo;
- RITE/certificados como promesa del producto;
- gases, seriales, garantias o equipos como dato necesario;
- partes tecnicos;
- datos de cliente final;
- OCR/audio obligatorio.

Condicion de aceptacion:

HVAC solo es valido si el caso de uso se mantiene en **gasto profesional propio**, no en documentacion de instalacion/mantenimiento.

### 2. Electricistas baja tension

Mejor alternativa si el criterio dominante es MVP estricto.

Definicion candidata:

> Electricista autonomo o microempresa muy pequena de baja tension, con avisos, reparaciones e instalaciones pequenas, gastos semanales y cierre manual con gestoria.

Ventaja:

- mejor frontera de MVP;
- menos tentacion inicial de RITE/HVAC;
- caso claro de material + desplazamiento + nota breve.

Riesgo:

- subsegmento amplio;
- scope hacia partes, boletines, certificados, fotovoltaica, cargadores, presupuestos y facturacion.

### 3. Mantenimiento ligero B2B/no residencial

Mejor alternativa si el criterio dominante es privacidad/seguridad.

Definicion candidata:

> Autonomo o microempresa de mantenimiento ligero B2B/no residencial que registra gastos profesionales propios sin datos de cliente final, sin partes tecnicos y sin documentacion regulada.

Ventaja:

- menor sensibilidad de datos;
- menor necesidad de OCR/audio;
- mejor minimizacion.

Riesgo:

- menos nitidez comercial;
- posible drift hacia GMAO, contratos, SLAs y buyer empresarial.

### 4. Fontaneros

Segundo nivel. Plausible por urgencia, movilidad y material, pero mas riesgo de caos de captura, siniestros, aseguradoras, reforma, gas/caldera y datos de vivienda.

### 5. SAT tecnico

Workflow movil claro, pero demasiado orientado a ordenes, garantias, repuestos, seriales, reclamaciones y datos de cliente/equipo.

### 6. Reformistas/obra menor

Muchos gastos, pero el dolor dominante tiende a presupuesto, margen, proveedores, subcontratas, cobros y control de obra.

### 7. Instaladores genericos y multiservicio

Demasiado heterogeneos para primera decision. Pueden servir como expansion, no como target inicial.

## Decision Recomendada Por Gael

Mi recomendacion es **avanzar con HVAC/climatizacion como candidato inicial preferente de definicion interna**, no como desbloqueo operativo.

Razon:

- Es el unico candidato con convergencia mayoritaria entre mercado, GTM y UX.
- Tiene senales externas de crecimiento, digitalizacion y trabajo de campo.
- Permite un mensaje concreto.
- Tiene buyer propietario plausible.
- Es mas defendible que "tecnicos de campo" y mas comercialmente claro que "mantenimiento ligero".

Pero la decision debe incorporar las objeciones de Asirin y Nathan como filtros duros:

1. Si HVAC exige partes, certificados, RITE, gases, seriales, garantias o datos de cliente final, queda descartado para MVP.
2. Si la mayoria de gastos relevantes ya llegan por factura mensual de proveedor, queda descartado para AD.
3. Si el usuario espera ERP, facturacion, partes o contabilidad, queda descartado para AD.
4. Si no se puede operar con foto de justificante + contexto breve + archivo revisable, queda descartado para AD.

## Propuesta Para Salva

Decision propuesta:

> Aprobar HVAC/climatizacion acotado como candidato inicial de definicion interna para nuevo_AD_V01.

No aprobar todavia:

- validacion;
- reclutamiento;
- mensajes externos;
- datos reales;
- Tally/Drive/Sheets;
- mock operativo;
- OCR/audio;
- WTP;
- pricing;
- build.

Formula recomendada:

> Autonomo propietario o microempresa de 1-3 tecnicos de climatizacion/HVAC que hace instalacion, averias y mantenimiento recurrente, con gastos profesionales semanales no resueltos por factura mensual de proveedor, cierre manual con gestoria y necesidad de conservar justificantes con contexto breve.

Condiciones de desbloqueo posteriores:

- Definir datos permitidos/prohibidos siguiendo el filtro de Nathan.
- Definir MVP limitado siguiendo el filtro de Asirin.
- Definir experiencia y lenguaje siguiendo el filtro de Irinas.
- Definir canal y buyer siguiendo el filtro de Gael.
- Definir metodo e invalidacion siguiendo el filtro de Mercury.

## Preguntas Que Quedan Encima De La Mesa

Estas preguntas no requieren usuarios todavia; requieren decision interna o desk research adicional:

1. En HVAC, que porcentaje de gastos relevantes no queda ya cubierto por factura mensual de proveedor?
2. Es posible excluir por completo certificados, partes tecnicos, datos de cliente, seriales y garantias?
3. El gasto capturable ocurre durante la jornada o solo se ordena al cierre?
4. El propietario paga por reducir cierre y perdida de justificantes, o solo quiere una suite de partes/facturacion?
5. Que canal permitiria acceder a HVAC cualificado sin muestra complaciente?
6. Si HVAC falla por scope o datos, se activa electricistas o mantenimiento B2B como backup?

## Siguiente Accion Recomendada

No pedir otra ronda general. La siguiente accion util es una decision de Salva sobre este punto:

> Aceptar o rechazar HVAC/climatizacion acotado como candidato inicial preferente de definicion interna.

Si Salva lo acepta, el siguiente trabajo no es validar. Es convertir el candidato en una ficha de target cerrada con:

- criterios de inclusion;
- criterios de exclusion;
- alternativa actual esperada;
- riesgo de scope;
- datos permitidos/prohibidos;
- criterio de invalidacion;
- backup si falla.

Si Salva lo rechaza, el equipo debe elegir entre:

- electricistas baja tension, si prioriza MVP estricto;
- mantenimiento ligero B2B, si prioriza privacidad y minima exposicion;
- bloquear la oportunidad si ninguno parece defendible.
