# Reglas operativas AD MVP V01

Fecha: 2026-06-03

## Estado

Estas reglas son obligatorias para cualquier avance del AD MVP.

Hasta revisión y aprobación explícita de Salva, no se avanza con:

- Tally
- Google Drive
- Google Sheets
- pruebas internas
- reclutamiento
- contacto con participantes
- configuración operativa
- envío de enlaces

## Fuentes activas

Este documento se rige por el reset activo de AD y no usa contexto anterior.

Fuentes activas:

- `AD_MVP_SOURCE_OF_TRUTH_V02.md`
- `DEFINICION_INICIAL_AD_MVP_VOZ_RELANZAMIENTO_FINAL_V01.md`
- `PROTOCOLO_VALIDACION_7_DIAS_AD_MVP_V01.md`
- `PLAN_GOBERNANZA_OPERATIVA_PILOTO_AD_MVP_V01.md`

## Causa raíz

El equipo trabajó de forma reactiva: avanzó protocolo, herramienta y gobernanza por iteraciones, pero no anticipó de forma suficientemente temprana riesgos de operación, permisos, privacidad, carga sobre Salva, accesos, 2FA, recuperación, fallback y responsabilidad nominal.

El fallo principal fue confundir "diseño suficientemente bueno" con "avance operativo permitido".

Problemas específicos:

- No había owner final explícito antes de recomendar avance.
- Los vetos de Nathan, Mercury, Asirin e Irinas no estaban exigidos antes de pasar de diseño a operación.
- "No revisado" se trató como ausencia de objeción, cuando debía ser bloqueo.
- El equipo trasladó preguntas operativas a Salva en vez de proponer solución cerrada.
- La comunicación mezcló resumen de chat con contenido operativo largo.
- Las recomendaciones no separaron siempre hecho, riesgo, owner, decisión requerida y bloqueo.
- No se protegió suficientemente el principio de que Salva aprueba o rechaza, pero no opera.

Regla que lo impide desde ahora:

> Ninguna recomendación de avance operativo puede emitirse si falta owner final, vetos aplicables, solución propuesta, decisión requerida, riesgos, bloqueos y confirmación de que Salva no asume carga operativa.

Si cualquiera de esos elementos falta, el estado es: no avanzar.

## Reglas obligatorias

### 1. Owner final

Ningún avance operativo sin owner final explícito.

Debe constar:

- nombre del owner
- área de responsabilidad
- decisión que puede tomar
- límite de su autoridad
- condición de bloqueo

Para el AD MVP, Gael es owner final de coordinación y gobernanza salvo decisión contraria explícita de Salva.

### 2. Vetos obligatorios

Ningún avance operativo sin veto explícito de los owners aplicables.

Vetos por defecto:

- Nathan: accesos, permisos, privacidad, datos, seguridad, 2FA, recuperación, herramientas externas, almacenamiento, revocación y borrado.
- Mercury: evidencia, sesgos, contaminación de captura, calidad de métricas y criterios de muerte/continuación.
- Asirin: scope, complejidad, límites MVP, dependencias prematuras y riesgo de convertir piloto en build.
- Irinas: fricción UX, carga del participante, claridad de instrucciones, lenguaje y canales de captura.

El veto puede ser:

- aprobado
- bloqueado
- no revisado

### 3. "No revisado" bloquea

"No revisado" cuenta como bloqueo.

No se interpreta silencio como aprobación.

No se interpreta falta de objeción como revisión válida.

### 4. Gael propone solución

Si Gael coordina, Gael debe proponer:

- operador
- solución operativa
- alternativa si la herramienta falla
- permisos mínimos
- decisión requerida
- bloqueo restante

Salva solo aprueba o rechaza.

No se debe trasladar a Salva la carga de diseñar la operación salvo que Salva lo pida explícitamente.

### 5. Nathan tiene veto obligatorio

Nathan debe revisar y emitir estado explícito antes de cualquier uso de herramienta externa o datos reales.

Áreas bajo veto obligatorio de Nathan:

- accesos
- permisos
- privacidad
- datos sensibles
- datos prohibidos
- 2FA
- recuperación de cuenta
- almacenamiento
- proveedores externos
- cuentas operativas
- revocación
- borrado
- exposición pública accidental

Sin validación de Nathan, no se ejecuta.

### 6. Chat corto, documento largo

El chat se usa solo para:

- enlace al documento
- cambios clave
- causa raíz
- decisión requerida
- riesgos bloqueantes
- siguiente acción propuesta

El contenido largo debe ir en documento:

- protocolos
- planes
- reglas
- checklists
- permisos
- consentimientos
- criterios
- análisis de causa raíz
- recomendaciones extensas

### 7. Formato obligatorio de recomendaciones

Toda recomendación debe separar:

- hecho
- riesgo
- owner
- decisión requerida
- bloqueo
- siguiente acción propuesta

Si falta cualquiera de estos campos, la recomendación no está lista.

### 8. Salva no opera por defecto

Ningún proceso puede trasladar carga operativa a Salva salvo aprobación explícita.

Salva puede:

- aprobar
- rechazar
- corregir
- pedir alternativas
- tomar decisión final

Salva no debe asumir por defecto:

- coordinación diaria
- limpieza de datos
- persecución de participantes
- configuración de herramientas
- gestión de permisos
- consolidación de métricas
- respuesta operativa de soporte

### 9. Herramientas externas

Toda herramienta externa requiere antes de uso:

- owner
- cuenta operativa
- permisos
- datos tratados
- riesgos de privacidad
- alternativa si falla
- revocación
- borrado
- validación de Nathan

### 10. Bloqueo antes de ejecución

Antes de cualquier avance a ejecución debe existir checklist con:

- owner final
- vetos aplicables resueltos
- consentimiento aprobado
- herramienta aprobada
- cuenta segura
- operador propuesto y aprobado
- permisos mínimos
- datos sensibles mapeados
- datos prohibidos excluidos
- fallback definido
- revocación definida
- borrado definido
- decisión explícita de Salva

Si falta uno, no se avanza.

## Plantilla de recomendación obligatoria

Toda recomendación operativa debe usar este formato:

### Hecho

Qué sabemos o qué está decidido.

### Riesgo

Qué puede fallar o contaminar la decisión.

### Owner

Quién responde por esta área.

### Decisión requerida

Qué debe aprobarse, rechazarse o corregirse.

### Bloqueo

Qué impide avanzar.

### Siguiente acción propuesta

Qué propone el equipo, no qué debe resolver Salva desde cero.

## Aplicación inmediata

Estado actual:

No avanzar.

Acciones permitidas:

- revisar estas reglas
- corregirlas
- aprobarlas o rechazarlas
- pedir una matriz de vetos

Acciones no permitidas:

- crear o publicar Tally
- abrir Drive operativo
- conectar Sheets
- iniciar pruebas internas
- contactar participantes
- enviar enlaces
- pedir tickets, audios o datos reales
- configurar accesos con datos reales

## Criterio de reapertura

El avance operativo solo podrá reabrirse cuando Salva apruebe explícitamente:

- estas reglas operativas
- plan de gobernanza
- operador único
- validación de Nathan
- vetos de Mercury, Asirin e Irinas
- consentimiento
- checklist de ejecución

Hasta entonces, el estado permanece bloqueado.
