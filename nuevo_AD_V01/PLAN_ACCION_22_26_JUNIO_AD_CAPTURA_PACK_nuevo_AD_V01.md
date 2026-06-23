# PLAN ACCION 22-26 JUNIO - AD CAPTURA PACK

Fecha: 2026-06-22
Estado: plan operativo aprobado por Salva para ordenar avance interno hasta 2026-06-26
Owner final: Salva
Coordinacion operativa: Gael
Fuente: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## Decision De Salva

Salva confirma explicitamente:

- Trello sigue siendo el tablero visual central de `AD Captura Pack`.
- Gael queda autorizado a crear y actualizar tarjetas, reglas y estado del tablero.
- Discord queda limitado por ahora al canal `#ad_captura`.

Esta decision no autoriza contacto externo, envio de emails, uso de datos personales, validacion externa, pricing, build operativo, backend, integraciones ni mensajes a P1/P2/P3.

## Modelo Operativo Vigente

```text
SOURCE_OF_TRUTH
  fuente formal de decisiones y gates
        |
        v
Trello
  tablero visual central
        |
        v
Discord #ad_captura
  conversacion operativa limitada
        |
        v
Gael
  coordina owners, actualiza tablero y fuente
        |
        v
Salva
  decide gates
```

Regla: Discord conversa, Trello organiza, `SOURCE_OF_TRUTH` decide.

## Nota Tecnica Trello

Decision operativa: Trello es el tablero visual central.

Verificacion del runtime el 2026-06-22:

- la skill `trello` queda habilitada globalmente;
- Gael/`saas` queda asignado a la skill `trello`;
- Salva provisiona `TRELLO_API_KEY` y `TRELLO_TOKEN` fuera del workspace, en el entorno del servicio `openclaw-gateway.service`;
- Gael verifica la API de Trello en modo solo lectura con respuesta `200`;
- el tablero `AD Captura Pack` queda localizado y materializado.

Estado Trello: acceso operativo verificado para Gael como operador central del tablero. Los secretos no se guardan en `nuevo_AD_V01` ni se pegan en chat.

No se debe crear otra herramienta paralela para compensar esta friccion.

## Trabajo Permitido Hasta 2026-06-26

- Ordenar tablero Trello con columnas, reglas WIP, etiquetas y tarjetas iniciales aprobadas.
- Mantener Discord limitado a `#ad_captura` para conversacion operativa.
- Convertir cualquier decision tomada en Discord en tarjeta o documento.
- Preparar el siguiente gate anonimo: confirmar si la fuente externa ejecuto o no el envio final concreto.
- Registrar solo estados anonimos P1/P2/P3 si aparece resultado: enviado/no enviado, acepto/no acepto/sin respuesta, entendio/no entendio, dolor observado, alternativa actual e invalidadores.

## Trabajo Prohibido

- Enviar emails o contactar participantes desde el workspace.
- Escribir nombres, emails, telefonos, empresas, ubicaciones, clientes o datos identificables.
- Crear CRM, formulario, base de datos real o registro con datos personales.
- Publicar pricing, landing, preventa o material externo.
- Construir build operativo, backend o integraciones.
- Abrir nuevos canales Discord sin decision separada.
- Duplicar Trello en otra herramienta.

## Plan Diario

### 2026-06-22

Objetivo: cerrar gobierno operativo.

Entregables:

- decision de Salva incorporada a `SOURCE_OF_TRUTH`;
- Kanban marcado como aprobado para implementacion;
- regla Discord/Trello/fuente formalizada;
- nota tecnica: si Trello no esta callable desde runtime, no se asume operativa remota hasta verificacion.

Criterio de hecho: cualquier owner entiende donde hablar, donde mirar tarjetas y donde queda la decision formal.

### 2026-06-23

Objetivo: materializar tablero visual.

Entregables:

- verificacion tecnica de acceso Trello de Gael: completada;
- provision segura de `TRELLO_API_KEY` y `TRELLO_TOKEN` fuera del workspace: completada por Salva;
- columnas Trello segun `KANBAN_PROPUESTA_HITOS_AD_CAPTURA_PACK_nuevo_AD_V01.md`: completadas;
- etiquetas de tipos de tarjeta: completadas;
- tarjetas iniciales completadas:
  - `Formalizar estado actual del proyecto`;
  - `Formalizar decisiones base pendientes`;
  - `Preparacion final de prueba privada condicionada`;
  - `Participantes concretos dentro del workspace`;
  - `Estructura base del Kanban`;
  - `Owner del tablero decidido`;
  - `Regla visible: Trello no autoriza accion externa`;
- regla visible: Trello no autoriza accion externa.

Criterio de hecho: tablero legible y alineado con fuente activa.

### 2026-06-24

Objetivo: revisar bloqueos antes de pedir ninguna accion externa.

Entregables:

- checklist de condiciones para gate anonimo;
- estado de owner/fuente externa: ejecutado/no ejecutado/desconocido;
- lista de decisiones base que siguen pendientes o bloqueadas.

Criterio de hecho: no queda ambiguedad entre preparacion, ejecucion externa condicionada y permiso de contacto.

### 2026-06-25

Objetivo: preparar decision de Salva.

Entregables:

- resumen de estado anonimo disponible, si lo hay;
- si no hay resultado externo, registrar bloqueo sin inventar evidencia;
- propuesta de decision: seguir, ajustar, bloquear o parar.

Criterio de hecho: Salva puede decidir sin leer todo el archivo historico.

### 2026-06-26

Objetivo: cierre de fase.

Entregables:

- tablero limpio;
- documento de cierre o gate:
  - `GATE_DECISION_SEGUIR_AJUSTAR_PARAR_AD_CAPTURA_PACK_nuevo_AD_V01.md`, si hay evidencia anonima;
  - o nota de bloqueo, si no hay ejecucion externa o resultado anonimo suficiente;
- siguiente accion unica recomendada.

Criterio de hecho: AD Captura no queda en preparacion indefinida.

## Decisiones Que Siguen Reservadas A Salva

- Autorizar cualquier contacto real.
- Aprobar destinatarios concretos gestionados fuera del workspace.
- Aprobar envio real, texto final, ventana y owner externo.
- Aprobar uso de datos reales.
- Aprobar pricing, pagos, legal, privacidad, fiscalidad, build operativo, backend o integraciones.

## Riesgo Principal

El riesgo operativo no es tener pocas herramientas. El riesgo es confundir una preparacion bien documentada con evidencia real de SaaS.

Hasta que exista respuesta anonima P1/P2/P3, AD Captura sigue siendo hipotesis interna estrecha.
