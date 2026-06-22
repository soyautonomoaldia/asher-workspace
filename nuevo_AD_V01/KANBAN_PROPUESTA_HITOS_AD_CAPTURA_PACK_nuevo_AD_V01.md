# KANBAN PROPUESTA HITOS - AD CAPTURA PACK

Fecha: 2026-06-21
Estado: estructura aprobada por Salva como direccion de gobierno interna
Owner final: Salva
Coordinacion operativa: Gael

## Proposito

Este tablero organiza `AD Captura Pack` por hitos y gates de decision.

No es un tablero de ocurrencias. Cada tarjeta debe acercar el proyecto a una decision verificable: avanzar, ajustar, bloquear o parar.

Decision de Salva el 2026-06-21:

> Kanban operativo del equipo AD coordinado por Gael. Salva mantiene decision final en gates.

## Regla Principal

Una tarjeta solo entra al tablero si cumple al menos una condicion:

- desbloquea una decision;
- formaliza un artefacto necesario;
- verifica un riesgo;
- registra aprendizaje anonimo;
- fuerza revision de Salva;
- documenta un bloqueo real.

Si una tarjeta no cambia una decision, no entra.

## Columnas

1. `Inbox`
   - Entrada provisional.
   - Solo sirve para capturar algo que aun no esta bien formulado.
   - Debe vaciarse en revision semanal.

2. `Por definir`
   - La tarjeta tiene sentido, pero aun falta objetivo, owner, entregable o criterio de hecho.

3. `Listo para trabajar`
   - La tarjeta tiene owner, objetivo, entregable, criterio de hecho y restricciones.

4. `En curso`
   - Trabajo activo.
   - Limite: maximo 2 tarjetas.

5. `Bloqueado`
   - Falta una decision, permiso, dato, owner o condicion externa.
   - Debe incluir razon de bloqueo y siguiente desbloqueo posible.

6. `Revision Salva`
   - Necesita decision o aprobacion de Salva.
   - Limite: maximo 3 tarjetas.

7. `Aprobado / Hecho`
   - Entregable cerrado y verificable.
   - No significa permiso para pasar a accion externa si el gate no lo dice explicitamente.

8. `Archivado`
   - Cerrado, invalidado, duplicado o fuera de alcance.

## Limites WIP

- `En curso`: maximo 2 tarjetas.
- `Revision Salva`: maximo 3 tarjetas.
- Si hay mas de 5 tarjetas activas entre `Listo para trabajar`, `En curso` y `Revision Salva`, hay exceso de frente abierto.

## Tipos De Tarjeta Permitidos

- `Gate`: decision que desbloquea o bloquea avance.
- `Documento`: artefacto interno que debe quedar escrito.
- `Sign-off`: revision o aprobacion por owner.
- `Prueba`: ejecucion controlada ya autorizada.
- `Aprendizaje`: resultado anonimo/verificable que cambia criterio.
- `Bloqueo`: condicion que impide avanzar sin inventar o romper reglas.

## Plantilla De Tarjeta

```md
Titulo:
Tipo:
Owner:
Objetivo:
Entregable:
Criterio de hecho:
Datos permitidos:
Datos prohibidos:
Dependencias:
Riesgo:
Decision que desbloquea:
Estado:
```

## Tablero Inicial Propuesto

### Inbox

Sin tarjetas iniciales.

### Por definir

#### Formalizar estado actual del proyecto

```md
Titulo: Formalizar estado actual del proyecto
Tipo: Gate
Owner: Salva
Objetivo: Dejar claro que esta aprobado, que esta condicionado y que sigue bloqueado.
Entregable: Resumen operativo de estado basado solo en SOURCE_OF_TRUTH.
Criterio de hecho: Salva puede leer una pagina y saber el siguiente paso permitido.
Datos permitidos: referencias a archivos internos y decisiones aprobadas.
Datos prohibidos: datos personales, nombres de participantes, emails, telefonos.
Dependencias: SOURCE_OF_TRUTH_nuevo_AD_V01.md
Riesgo: confundir preparacion aprobada con permiso general de ejecucion.
Decision que desbloquea: definir que tarjetas pasan a Listo para trabajar.
Estado: Por definir
```

#### Formalizar decisiones base pendientes

```md
Titulo: Formalizar decisiones base pendientes
Tipo: Gate
Owner: Salva
Objetivo: Convertir decisiones base pendientes en estado aprobado, bloqueado o no aplicable.
Entregable: checklist de target, buyer, alternativa, workflow, WTP, canal, datos, metodo, invalidadores, consentimiento y sign-off.
Criterio de hecho: cada decision tiene estado, archivo fuente y siguiente accion.
Datos permitidos: decisiones internas y referencias documentales.
Datos prohibidos: participantes reales, datos personales, mensajes externos.
Dependencias: FICHAS_DECISIONES_COMPLETAS_nuevo_AD_V01.md
Riesgo: avanzar con hipotesis tratadas como decisiones.
Decision que desbloquea: permiso para ordenar la fase siguiente sin ambiguedad.
Estado: Por definir
```

### Listo para trabajar

#### Preparacion final de prueba privada condicionada

```md
Titulo: Preparacion final de prueba privada condicionada
Tipo: Documento
Owner: Salva / Gael
Objetivo: Verificar que texto final, consentimiento, owner externo, ventana, registro anonimo, almacenamiento, borrado e invalidadores estan listos.
Entregable: checklist de preparacion final.
Criterio de hecho: no queda ninguna condicion critica sin responsable o decision.
Datos permitidos: texto final, criterios anonimos P1/P2/P3, estados no identificables.
Datos prohibidos: nombres, emails, telefonos, mensajes literales privados, datos reales de participantes.
Dependencias: FICHA_PREPARACION_ENVIO_FINAL_PRUEBA_PRIVADA_AD_CAPTURA_PACK_nuevo_AD_V01.md
Riesgo: que el tablero parezca autorizacion de envio por agentes.
Decision que desbloquea: ejecucion externa solo por owner/fuente autorizada fuera del workspace.
Estado: Listo para trabajar
```

### En curso

Sin tarjetas iniciales.

### Bloqueado

#### Participantes concretos dentro del workspace

```md
Titulo: Participantes concretos dentro del workspace
Tipo: Bloqueo
Owner: Salva
Objetivo: Mantener bloqueada cualquier inclusion de datos identificables en nuevo_AD_V01.
Entregable: regla visible en tablero.
Criterio de hecho: cualquier tarjeta que pida nombres, emails o telefonos se archiva o se transforma en registro anonimo.
Datos permitidos: P1/P2/P3 anonimos, apto/no apto, enviado/no enviado, acepto/no acepto/sin respuesta.
Datos prohibidos: nombres, emails, telefonos, audios, fotos, WhatsApp real, datos de calendario, facturas, cobros, pagos.
Dependencias: SOURCE_OF_TRUTH_nuevo_AD_V01.md
Riesgo: contaminacion de privacidad y ruptura de condiciones aprobadas.
Decision que desbloquea: ninguna dentro del workspace; solo fuente externa privada gestionada fuera.
Estado: Bloqueado
```

### Revision Salva

Sin tarjetas iniciales.

### Aprobado / Hecho

#### Estructura base del Kanban

```md
Titulo: Estructura base del Kanban
Tipo: Documento
Owner: Salva
Objetivo: Definir columnas, reglas WIP, tipos de tarjeta y plantilla.
Entregable: este documento.
Criterio de hecho: estructura inicial legible y trasladable a una herramienta Kanban.
Datos permitidos: estructura interna.
Datos prohibidos: datos personales o externos.
Dependencias: peticion de Salva.
Riesgo: ninguno operativo si se mantiene como propuesta interna.
Decision que desbloquea: Salva puede aprobar, ajustar o pedir a Gael implementacion.
Estado: Aprobado / Hecho
```

#### Owner del tablero decidido

```md
Titulo: Owner del tablero decidido
Tipo: Gate
Owner: Salva
Objetivo: Definir gobierno del Kanban AD.
Entregable: decision de owner y gates.
Criterio de hecho: Gael coordina el tablero operativo; Salva decide gates.
Datos permitidos: estructura del tablero, roles y responsabilidades.
Datos prohibidos: instrucciones de contacto externo, datos de participantes.
Dependencias: decision de Salva del 2026-06-21.
Riesgo: doble coordinacion o ruido operativo.
Decision que desbloquea: uso regular del Kanban como tablero operativo del equipo AD.
Estado: Aprobado / Hecho
```

### Archivado

Sin tarjetas iniciales.

## Cadencia Recomendada

- Revision diaria ligera: solo si hay trabajo activo.
- Revision semanal: limpiar `Inbox`, cerrar duplicados y revisar bloqueos.
- Revision de gate: cada vez que una tarjeta llegue a `Revision Salva`.

## Regla Para Discord

Discord puede usarse para conversacion operativa, pero no debe ser la fuente de verdad.

Cada decision tomada en Discord debe terminar en:

- tarjeta actualizada;
- documento interno actualizado;
- o referencia clara al archivo fuente.

## Gobierno Aprobado

Para evitar doble mando:

- Salva decide prioridades y gates;
- Gael coordina owners y entregables;
- Mercury, Asirin, Nathan e Irinas entran solo por tarjetas concretas, no por debate abierto.
