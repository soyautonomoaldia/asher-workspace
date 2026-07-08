# Protocolo operativo - AD_VOZ_electricistas V01

## Objetivo

Evitar que `AD_VOZ_electricistas` dependa de instrucciones constantes de Salva. Gael debe mantener el proyecto avanzando dentro del alcance aprobado, con source, Trello y Discord alineados.

Este protocolo aplica solo a `AD_VOZ_electricistas`. No se mezcla con AD Captura ni con otros proyectos. La fuente activa del proyecto es `SOURCE_OF_TRUTH_ad_voz_electricistas.md`.

## Gobierno

AD_VOZ_electricistas queda autorizado como línea separada de AD Captura/nuevo_AD_V01, con source propio en `/AD_VOZ_electricistas`, sin heredar decisiones de AD Captura, y sujeto a gates explícitos de privacidad, datos reales, contacto externo, build, piloto, producción, pricing e integraciones.

Esta autorizacion no convierte AD_VOZ_electricistas en producto de nuevo_AD_V01. Solo fija gobierno, separacion de fuentes y gates.

## Flujo de trabajo

### Source of Truth

El Source of Truth guarda decisiones, gates, restricciones, artefactos activos y estado del proyecto. Se actualiza cuando hay una decision, cambio de alcance, nuevo artefacto o cierre relevante.

Reglas:

- No usar datos reales del familiar ni de terceros.
- No heredar decisiones ni contexto de AD Captura.
- No sustituir el Source of Truth por Trello o Discord.
- Cada documento operativo debe estar citado desde la fuente cuando pase a ser activo.

### Trello

Trello es la superficie visual de ejecucion. Cada trabajo accionable debe existir como tarjeta. Gael mantiene listas, tarjetas, bloqueos, descripciones y cierres sin esperar a que Salva lo pida.

Reglas:

- Toda tarjeta debe apuntar a un entregable, decision, bloqueo o siguiente accion concreta.
- Las tarjetas de Salva viven en `Pendiente Salva`.
- Las tarjetas bloqueadas viven en `Bloqueado` y deben explicar que desbloquea.
- Las tarjetas terminadas viven en `Hecho` con resultado verificable.
- No crear tarjetas que pidan datos reales, audios reales, documentos, facturas, direcciones completas, contacto externo, build, piloto, pricing, produccion o integraciones sin gate explicito de Salva.

### Discord

Canal Discord aprobado: `#ad-voz-electricistas`.

Discord se usa solo para avisos cortos: estado, bloqueo, decision pendiente o confirmacion operativa.

Si Discord no esta visible o disponible en runtime, no se clasifica el proyecto como bloqueado. Se registra como pendiente tecnico de aviso y el trabajo documental continua en chat/sesion limpia y archivos del proyecto.

Regla FinOps: el trabajo documental, redaccion larga, analisis, protocolizacion y preparacion de artefactos se hace en chat/sesion limpia o en archivos del proyecto, no en hilos largos de Discord.

## Autonomia de Gael

Gael puede avanzar sin esperar a Salva cuando la accion sea interna, reversible y dentro del alcance aprobado.

Permitido sin validacion previa:

- Crear o actualizar documentos internos del proyecto.
- Mantener Source of Truth alineado con archivos reales y decisiones ya tomadas.
- Crear, mover, renombrar o cerrar tarjetas en Trello.
- Clasificar tareas como preparadas, bloqueadas, en curso o hechas.
- Definir plantillas, criterios de avance, checklists y estructura operativa.
- Preparar borradores internos para que Salva valide; cualquier envio externo requiere gate separado.
- Convertir una respuesta o decision de Salva en estado, tarjeta o artefacto.
- Proponer el menor siguiente paso para desbloquear una tarea.
- Corregir referencias obsoletas, nombres de documentos y descripciones internas.

## Gates de Salva

Requieren validacion explicita de Salva:

- Contactar al familiar o a terceros.
- Enviar email por Gmail o cualquier canal externo.
- Usar datos reales de clientes, direcciones, telefonos, facturas, audios o documentos.
- Usar audios reales, documentos reales, facturas reales, direcciones completas o datos identificables.
- Abrir piloto con datos reales.
- Hacer prueba operativa con el familiar o cualquier usuario.
- Iniciar build, mock operativo, backend, persistencia real o integraciones.
- Decidir foco MVP final tras respuesta escrita del familiar.
- Entrar en facturacion legal, fiscalidad, pagos, gestoria o automatizaciones externas.
- Definir pricing, posicionamiento publico o venta.
- Hacer compromisos de produccion.
- Cambiar el modelo de coordinacion o anadir nuevos responsables externos al modelo aprobado.

### Gate de privacidad validado

El gate de privacidad validado por Salva solo define limites y datos prohibidos. No autoriza por si solo:

- piloto;
- prueba operativa;
- datos reales;
- audios reales;
- documentos;
- facturas;
- direcciones completas;
- contacto a terceros;
- build;
- produccion;
- pricing;
- integraciones;
- automatizaciones externas.

### Gate completo antes de prototipo, piloto o datos reales

Antes de cualquier prototipo accionable, piloto, prueba operativa, uso de datos reales o build, debe existir aprobacion explicita de Salva sobre:

1. Target.
2. Buyer/usuario.
3. Workflow.
4. Alternativa actual.
5. Dolor observable.
6. Modo de prueba.
7. Datos permitidos y datos prohibidos.
8. Consentimiento.
9. Invalidadores.
10. Responsable.
11. Alcance exacto de prototipo, piloto o build.
12. Aprobacion explicita de Salva.

## Estructura de Trello

Listas oficiales, en este orden:

1. `Pendiente Salva`: decisiones, validaciones o acciones que solo puede hacer Salva.
2. `Preparado`: tareas internas listas para ejecutar cuando toque.
3. `En curso`: tarea activa de Gael o del flujo interno.
4. `Bloqueado`: tareas que no pueden avanzar sin informacion, decision, gate o dependencia.
5. `Hecho`: tareas cerradas con resultado verificable.

Reglas de uso:

- Una tarjeta no debe estar en `Preparado` si depende de una decision de Salva.
- Una tarjeta no debe estar en `Bloqueado` sin explicar el bloqueo y el desbloqueo minimo.
- Una tarjeta no debe cerrarse si falta actualizar Source of Truth o enlazar el artefacto.
- No usar Trello como documento largo; las decisiones extensas viven en archivos.
- Trello debe reflejar la realidad actual, no una lista historica de deseos.

## Plantilla minima de tarjeta

Nombre:

`Verbo + entregable/decision + contexto`

Descripcion minima:

```text
Objetivo:
Resultado esperado:
Fuente/artefacto:
Responsable:
Estado:
Bloqueo o gate:
Siguiente accion:
```

Ejemplo:

```text
Objetivo: Analizar la respuesta escrita del familiar cuando llegue.
Resultado esperado: Resumen anonimo, matriz de foco puntuada, recomendacion de foco MVP y 5-10 frases anonimizadas/controladas.
Fuente/artefacto: PLANTILLA_ANALISIS_RESPUESTA_EMAIL_ELECTRICISTA_V01.md
Responsable: Gael.
Estado: Preparado.
Bloqueo o gate: Falta recibir respuesta escrita; no autoriza prototipo, piloto, build ni datos reales.
Siguiente accion: Cuando Salva comparta la respuesta, procesarla con la plantilla y elevar recomendacion de foco a Salva.
```

## Cadencia de revision y reporting

Revision operativa:

- Tras cada cambio relevante, Gael revisa si Source of Truth y Trello siguen alineados.
- Si hay una decision pendiente de Salva, debe quedar visible en `Pendiente Salva`.
- Si hay bloqueo, debe quedar en `Bloqueado` con desbloqueo minimo.

Reporting:

- Resumen corto al cerrar una tanda de trabajo: cambios hechos, estado de Trello, bloqueos y pendiente de Salva.
- Discord solo para aviso breve si procede: decision pendiente, bloqueo o actualizacion relevante.
- No hacer reportes largos por Discord.

Cadencia recomendada mientras el proyecto este activo:

- Revision ligera cada vez que haya respuesta de Salva o nuevo artefacto.
- Revision de tablero al menos al cerrar una sesion de trabajo del proyecto.
- Revision de gates antes de recomendacion de foco, prototipo, piloto, build, integraciones o uso de datos reales.

## Cuando una tarea termina

Gael debe:

1. Mover la tarjeta a `Hecho`.
2. Dejar resultado verificable en la descripcion o comentario.
3. Actualizar Source of Truth si cambia estado, artefacto o decision.
4. Crear la siguiente tarjeta si del cierre nace una accion concreta.
5. Avisar a Salva con resumen corto si afecta una decision o gate.

## Cuando una tarea queda bloqueada

Gael debe:

1. Mover la tarjeta a `Bloqueado`.
2. Escribir el bloqueo exacto.
3. Definir el menor desbloqueo posible.
4. Separar bloqueo de Salva, bloqueo tecnico, bloqueo de informacion y bloqueo de privacidad.
5. No inventar informacion ni pedir datos reales para desbloquear antes del gate.

## Cuando falta informacion

Gael debe:

- Buscar primero en la fuente y artefactos activos del proyecto.
- Si la informacion no existe, crear una tarjeta de decision o una pregunta concreta para Salva.
- Si la falta de informacion no bloquea trabajo interno, avanzar con el siguiente paso reversible.
- Si la falta afecta foco MVP, privacidad, datos reales, contacto externo, prototipo, build, piloto, produccion, pricing o integraciones, elevar a gate de Salva.

## Estado operativo inicial bajo este protocolo

- El guion activo es `GUION_CUESTIONARIO_EMAIL_ELECTRICISTA_V01.md`.
- Gael no contacta al familiar ni a terceros.
- Salva ya valido, corrigio y envio el email asincronico.
- El foco MVP sigue pendiente de respuesta escrita.
- El gate de privacidad y datos prohibidos ya fue validado por Salva solo como definicion de limites; no autoriza piloto, datos reales, audios reales, documentos, facturas, direcciones completas, prueba operativa, build, pricing, produccion, integraciones, contacto a terceros ni automatizaciones externas.
- Las frases de prueba deben ser anonimizadas, inventadas o controladas; no reales sin gate completo y aprobacion explicita de Salva.
