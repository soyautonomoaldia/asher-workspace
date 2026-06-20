# Revision Mercury - Decisiones Base nuevo_AD_V01

Fecha: 2026-06-03
Owner: Mercury
Fuente operativa usada: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## Nota De Trazabilidad

Esta revision recibio una instruccion inicial con una formulacion incorrecta: "merece validacion".

La formulacion operativa corregida para nuevo_AD_V01 es:

Decidir si nuevo_AD_V01 debe avanzar, reformularse, quedar bloqueado o descartarse.

Las referencias de esta revision a "merece validacion" deben leerse como ruido de instruccion, no como objetivo operativo.

Documentos revisados:

- `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
- `FICHAS_DECISIONES_COMPLETAS_nuevo_AD_V01.md`
- `INSTRUCCIONES_AGENTES_nuevo_AD_V01.md`
- `README_nuevo_AD_V01.md`

## 1. Decision

Bloqueado.

## 2. Razon

Desde Mercury, las decisiones base todavia no son suficientes para decidir si `nuevo_AD_V01` debe avanzar, reformularse, quedar bloqueado o descartarse.

La base es disciplinada en restricciones: bloquea validacion, datos reales, pricing publico, build, outreach y mock operativo. Eso esta bien. Pero la ficha aun mezcla decisiones propuestas con supuestos no demostrados, y deja la evaluacion externa demasiado abierta para evitar falsos positivos.

El bloqueo principal: todavia no esta decidido que evidencia minima convertiria esto en una oportunidad defendible, ni que evidencia lo mataria antes de construir o reclutar.

## 3. Riesgos

- Target plausible pero aun amplio: "autonomo tecnico de campo" incluye perfiles con ritmos, gastos, tickets, gestoria y urgencia muy distintos.
- Buyer asumido, no defendido: se propone que paga el autonomo, pero falta definir que coste actual reemplaza: tiempo, sancion, perdida fiscal, friccion con gestoria, ansiedad o simple orden.
- Alternativa actual demasiado generica: bolsillo, furgoneta, WhatsApp, email y carpeta son comportamientos distintos. Si no se separan, no sabremos contra que compite `nuevo_AD_V01`.
- WTP prematura: los rangos 9/19/29 EUR pueden contaminar entrevistas si no hay antes evidencia fuerte de dolor, frecuencia y coste.
- Canal sin sesgo suficientemente controlado: "red cercana si cumple criterios" sigue siendo peligroso por cortesia, deseo de ayudar y baja friccion para decir que si.
- Criterios de invalidacion incompletos: hay buenos umbrales preliminares, pero falta definir muestra, duracion, unidad de analisis y registro de evidencia.
- Mock/manual peligroso: si el agente humano ordena demasiado bien los gastos, se valida un servicio asistido, no el MVP.
- Datos reales bloqueados correctamente, pero falta camino de prueba sin datos sensibles: aun no esta decidido como aprender antes de tocar tickets reales.

## 4. Condiciones Para Desbloquear

Antes de permitir cualquier accion externa, deberian quedar decididas estas piezas:

- Target inicial reducido a un subsegmento unico, por ejemplo solo instaladores/reparadores autonomos con gasto recurrente semanal y gestoria externa.
- Definicion explicita del evento doloroso principal: perdida de justificante, cierre mensual, reconstruccion desde extractos, friccion con gestoria u otro.
- Separacion de alternativas actuales en 2-3 patrones observables, no una lista mezclada.
- Criterio de cualificacion previo: minimo de gastos semanales, forma actual de gestion, dolor reconocido y coste percibido.
- Metodo de evidencia completo: muestra, duracion, tareas, metricas, umbrales, sesgos esperados y plantilla de evidencia.
- Regla de WTP: no preguntar precio hasta que el participante haya demostrado dolor y haya descrito una alternativa insuficiente.
- Diseno de prueba que limite la ayuda manual para no crear falso positivo.
- Consentimiento y datos resueltos antes de cualquier captura real.

## 5. Cambios Concretos Propuestos

Anadir o endurecer estas decisiones en `FICHAS_DECISIONES_COMPLETAS_nuevo_AD_V01.md`:

- Decision nueva: subsegmento unico de primera prueba. No aceptar "tecnicos de campo" como categoria final.
- Decision nueva: problema primario a evaluar. Elegir un dolor principal y tratar los demas como secundarios.
- Decision nueva: alternativa dominante priorizada. Elegir una alternativa principal contra la que medir `nuevo_AD_V01`.
- Decision nueva: cualificacion minima del participante. Sin cumplir criterios duros, no entra en evidencia.
- Decision nueva: evidencia minima para avanzar. Que resultado permite pasar de definicion a accion externa controlada.
- Decision nueva: evidencia de invalidacion temprana. Que hallazgo mata la oportunidad antes de mock/build.
- Decision nueva: limite de intervencion manual. Que puede hacer el equipo y que no puede hacer durante una prueba.
- Cambio en WTP: mover WTP a fase posterior del metodo, no como pieza base desbloqueable por si sola.

## 6. Siguiente Accion Responsable

Mercury bloquea el avance.

Siguiente accion: Salva debe exigir una version nueva de la ficha donde queden decididos, por escrito, el subsegmento inicial, el dolor primario, la alternativa principal, la cualificacion de participantes y los criterios de invalidacion. Hasta eso, no recomiendo sign-off operativo.
