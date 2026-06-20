# Plan de gobernanza operativa - Piloto AD MVP V01

Fecha: 2026-06-03

## Estado

Bloqueo operativo activo.

No se avanza a pruebas internas, reclutamiento, contacto con participantes ni configuración operativa hasta cerrar accesos, permisos, privacidad, responsables, consentimiento, herramienta y revocación.

## Fuentes activas

Este documento usa únicamente:

- `AD_MVP_SOURCE_OF_TRUTH_V02.md`
- `DEFINICION_INICIAL_AD_MVP_VOZ_RELANZAMIENTO_FINAL_V01.md`
- `PROTOCOLO_VALIDACION_7_DIAS_AD_MVP_V01.md`

No usa contexto AD anterior.

## Fallo ocurrido

Se recomendó pasar al plan de reclutamiento antes de cerrar completamente:

- accesos a Tally, Google Sheets y Google Drive
- permisos mínimos por rol
- cuenta operativa
- datos sensibles visibles por cada miembro
- reglas de revocación
- borrado de material bruto
- responsable final por cada control
- checklist bloqueante de ejecución

El fallo no fue de intención, sino de secuencia operativa: el protocolo de validación estaba suficientemente avanzado, pero la gobernanza de ejecución no estaba cerrada.

## Quién debía haberlo identificado

- Gael debía bloquear el avance como owner final antes de recomendar reclutamiento.
- Nathan debía identificar el plan de accesos, permisos, privacidad, datos sensibles, retención, revocación y borrado antes de cualquier ejecución.
- Mercury debía alertar que canales alternativos, captura por fallback o intervención humana podían contaminar la evidencia.
- Asirin debía impedir que el proceso operativo añadiera scope no validado o dependencias prematuras.
- Irinas debía señalar fricción operativa para participantes y riesgo de que Tally/email/fallback alteraran el comportamiento real.

## Punto en que debía detectarse

El bloqueo debía aparecer antes de cualquiera de estos pasos:

- recomendar pasar a reclutamiento
- contactar participantes
- crear o compartir formulario
- pedir pruebas internas
- conectar Tally con Sheets
- abrir Drive con material bruto
- enviar mensajes desde `soyautonomoaldia@gmail.com`

## Causa raíz provisional

La causa raíz provisional combina:

- falta de checklist operativo bloqueante
- roles definidos por área, pero sin punto formal de veto previo a ejecución
- exceso de foco en protocolo de validación frente a gobernanza práctica
- asunción implícita de que accesos/permisos se resolverían durante la configuración
- separación insuficiente entre "protocolo validado" y "piloto ejecutable"

## Revisión breve de funcionamiento del equipo

Fallo de perfil/proceso:

- Gael actuó como owner de validación, pero no bloqueó a tiempo por gobernanza operativa.
- Nathan tenía responsabilidad de accesos/seguridad/privacidad, pero su veto no estaba colocado antes de la recomendación de avance.
- Mercury evaluó evidencia, pero no bloqueó explícitamente la posible contaminación por canal de captura/fallback.
- Asirin vigiló alcance del MVP, pero no trató "operación del piloto" como parte del scope.
- Irinas revisó fricción del participante, pero la fricción de cuentas, Tally, 2FA, recuperación y fallback apareció tarde como fricción operativa.

Regla correctiva:

> Antes de recomendar cualquier avance operativo, cada owner debe emitir estado explícito: aprobado, bloqueado o no revisado. "No revisado" cuenta como bloqueo.

Esta regla impide que accesos, operador, 2FA, recuperación, permisos o captura aparezcan tarde. Si Nathan no valida accesos/privacidad, Mercury no valida evidencia, Asirin no valida scope e Irinas no valida fricción, Gael no puede recomendar avance.

## Regla nueva

Ningún piloto puede avanzar de diseño a ejecución si falta cualquiera de estos elementos:

- herramienta concreta
- cuenta operativa
- responsable único
- accesos definidos
- permisos mínimos
- privacidad y consentimiento
- datos sensibles mapeados
- revocación definida
- borrado definido
- checklist de bloqueo aprobado

Si falta uno, el estado es: no ejecutar.

## Reglas de comunicación

- Chat: solo decisiones, bloqueos, resumen de cambios y riesgos abiertos.
- Documento: contenido largo, protocolos, planes, checklists, permisos y criterios.
- No se pegan credenciales, contraseñas, tokens ni enlaces sensibles en chat o documentos.
- No se aprueban cambios operativos por inferencia; deben quedar explícitos.
- Si una decisión toca privacidad, permisos, pagos, legal, producción o comunicación externa, requiere aprobación de Salva.

## Responsables por área

### Gael

Owner final de gobernanza y decisión de avance.

Responsable de:

- bloquear ejecución si falta cualquier control
- consolidar estado final
- separar hechos, hipótesis, riesgos y recomendación
- no permitir avance por entusiasmo de validación

### Nathan

Owner de accesos, seguridad, privacidad y datos.

Responsable de:

- cuenta operativa
- permisos Tally/Google/Drive
- datos sensibles visibles
- retención
- revocación
- borrado
- minimización de acceso

### Mercury

Owner de evidencia.

Responsable de:

- sesgos de captura
- contaminación por fallback
- intervención humana
- validez de métricas
- criterios de muerte/continuación

### Asirin

Owner de scope MVP.

Responsable de:

- evitar expansión de herramienta
- evitar integraciones prematuras
- impedir que el piloto se convierta en build
- mantener foco en foto + voz/contexto + confirmación mínima

### Irinas

Owner de fricción UX.

Responsable de:

- carga real del participante
- claridad del formulario
- lenguaje de instrucciones
- fricción de Tally en móvil
- fallback por bloqueo real, no por comodidad operativa

## Plan de accesos Tally / Google Sheets / Drive

### Cuenta operativa

Cuenta/canal del proyecto:

`soyautonomoaldia@gmail.com`

Uso previsto:

- crear/editar Tally con cuenta operativa asociada a `soyautonomoaldia@gmail.com`, si Tally lo permite
- conectar Tally con Google Sheets
- alojar Sheet de respuestas
- alojar Drive de archivos
- contactar participantes
- enviar enlace de Tally
- responder dudas básicas

No se comparten credenciales por chat ni documentos.

Regla de seguridad de cuenta:

- contraseña fuerte y única
- 2FA si está disponible
- recuperación controlada por Salva o persona explícitamente aprobada por Salva
- no compartir códigos de acceso, recuperación o 2FA por chat, email, documentos o Sheets
- no guardar contraseñas en archivos del proyecto
- si se necesita acceso compartido, usar gestor de contraseñas o sesión configurada por Salva, no copia manual de credenciales

Operador único propuesto:

- Gael.

Justificación:

- Gael ya es owner final de gobernanza y consolidación.
- Evita trasladar operación diaria a Salva.
- Evita que Nathan sea juez y operador al mismo tiempo.
- Reduce dispersión de permisos y exposición de raw.
- Permite que Mercury, Asirin e Irinas revisen resultados sin acceso editor a Tally.

Salva solo aprueba o rechaza esta propuesta. No debe nombrar operador alternativo salvo que rechace explícitamente a Gael.

### Tally

Uso:

- formulario móvil principal de captura
- consentimiento
- foto del ticket
- nota de voz o contexto breve
- campos mínimos
- fricción diaria reducida

Acceso:

- operador único propuesto: Gael
- participantes solo reciben enlace del formulario
- equipo revisa estructura del formulario sin necesitar credenciales, salvo que Salva apruebe otro método seguro

Alternativa si Tally no permite colaboración gratuita:

- Gael opera Tally desde la cuenta operativa asociada a `soyautonomoaldia@gmail.com`, si Tally lo permite.
- Nathan valida configuración de permisos, privacidad, almacenamiento y conexión con Google antes de publicar.
- Mercury, Asirin e Irinas revisan una vista previa, capturas de estructura o exportación de campos, sin acceso editor.
- No se crean colaboradores de pago.
- Si Tally impide operar de forma segura sin compartir credenciales, el piloto queda bloqueado hasta elegir alternativa aprobada.

Validación obligatoria de Nathan antes de publicar:

- cuenta correcta
- 2FA disponible revisado
- recuperación controlada
- permisos de Tally revisados
- integración con Google Sheets revisada
- destino Drive revisado
- no exposición pública accidental
- datos sensibles minimizados
- revocación y borrado posibles

### Google Sheets

Uso:

- tabla automática de respuestas de Tally
- métricas de captura
- excepciones de fallback
- campos pseudonimizados U1-U5

Permisos:

- Gael: editor
- Nathan: viewer/commenter para permisos, privacidad y estructura de datos
- Mercury: viewer/commenter para evidencia y métricas
- Asirin: viewer/commenter para scope
- Irinas: viewer/commenter para fricción UX
- Salva: acceso de supervisión/aprobación, no operación diaria

Justificación:

- Gael necesita edición para consolidar y corregir estructura operativa.
- Nathan necesita visibilidad suficiente para validar privacidad y permisos, no operación diaria.
- Mercury necesita métricas para auditar evidencia, no raw por defecto.
- Asirin necesita revisar que no se amplía scope, no raw por defecto.
- Irinas necesita revisar fricción y lenguaje, no raw por defecto.
- Salva supervisa y aprueba, sin carga operativa.

No debe haber acceso público ni enlaces abiertos.

### Google Drive

Carpeta raíz:

`AD_MVP_PILOTO_7D_V01`

Subcarpetas:

- `00_Admin_Consentimiento`
- `01_Raw_Tickets_Audios`
- `02_Exports_Sheets`
- `03_Analisis`
- `99_Borrado_Cierre`

Permisos:

- acceso restringido
- raw visible solo para quien lo necesite
- análisis separado del material bruto
- sin enlaces "anyone with link"

## Permisos mínimos

Principio: cada persona ve solo lo necesario para cumplir su rol.

- Gael: acceso operativo a Sheet de análisis y Drive necesario para consolidación.
- Nathan: acceso temporal a configuración/permisos y muestra mínima de raw si hace falta validar privacidad.
- Mercury: acceso a métricas y respuestas pseudonimizadas; raw solo bajo necesidad justificada.
- Asirin: acceso a estructura, métricas y decisiones de scope; raw no necesario por defecto.
- Irinas: acceso a respuestas de fricción y lenguaje; raw solo si hace falta revisar experiencia real.
- Salva: acceso de supervisión/aprobación, no operación diaria.

## Datos sensibles

Datos que podrían aparecer:

- fotos de tickets/facturas
- proveedor
- importes
- IVA si aparece
- fecha/hora
- audio o texto de contexto
- voz del participante
- obra, cliente o situación de trabajo si el usuario lo menciona

Datos prohibidos:

- datos bancarios
- DNI
- credenciales
- datos fiscales completos
- acceso a gestoría
- geolocalización precisa
- contactos

Minimización:

- pseudonimizar U1-U5
- no pedir cliente salvo contexto imprescindible
- permitir tapar datos no necesarios
- separar raw de análisis
- limitar acceso a raw
- borrar material bruto al cierre

## Revocación y borrado

Al cerrar el piloto:

1. Cerrar/despublicar Tally.
2. Desconectar Tally de Google Sheets.
3. Revocar permisos no necesarios en Sheets.
4. Revocar permisos no necesarios en Drive.
5. Borrar material bruto de `01_Raw_Tickets_Audios`.
6. Registrar borrado en `99_Borrado_Cierre`.
7. Mantener solo informe agregado/pseudonimizado.
8. Revisar que no quedan enlaces públicos.

Conservación de raw solo si Salva lo aprueba explícitamente.

## Checklist de bloqueo antes de ejecutar

No avanzar si falta cualquiera:

- [ ] Cuenta `soyautonomoaldia@gmail.com` preparada y segura.
- [ ] Operador único propuesto: Gael.
- [ ] Operador único aprobado o rechazado explícitamente por Salva.
- [ ] Contraseña fuerte definida sin compartirla por chat/documentos.
- [ ] 2FA activado si está disponible.
- [ ] Recuperación de cuenta controlada.
- [ ] Tally creado o especificado.
- [ ] Permisos de Tally definidos.
- [ ] Google Sheet conectado o plan de conexión definido.
- [ ] Carpeta Drive creada o plan de carpeta aprobado.
- [ ] Accesos Sheet/Drive definidos por persona.
- [ ] Enlaces públicos deshabilitados.
- [ ] Consentimiento final aprobado.
- [ ] Mensaje inicial aprobado.
- [ ] Datos sensibles mapeados.
- [ ] Datos prohibidos excluidos.
- [ ] Límite de 10 MB recogido en instrucciones.
- [ ] Fallback email/WhatsApp/Telegram definido como excepción.
- [ ] Revocación definida.
- [ ] Borrado definido.
- [ ] Responsable de consolidación confirmado.
- [ ] Veto de Nathan sobre privacidad/accesos resuelto.
- [ ] Veto de Mercury sobre contaminación de evidencia resuelto.
- [ ] Veto de Asirin sobre scope resuelto.
- [ ] Veto de Irinas sobre fricción crítica resuelto.
- [ ] Estado explícito de cada owner: aprobado, bloqueado o no revisado.
- [ ] Aprobación explícita de Salva para ejecutar.

Si cualquier punto está abierto, el estado es: no ejecutar.

## Decisión actual

No avanzar a pruebas internas ni reclutamiento.

Siguiente paso permitido:

- Salva aprueba o rechaza a Gael como operador único propuesto
- Nathan valida o bloquea accesos, seguridad, privacidad, Tally/Google/Drive, 2FA, recuperación, revocación y borrado
- Mercury, Asirin e Irinas emiten estado explícito de veto en su área antes de cualquier avance

Siguiente paso no permitido:

- contactar participantes
- enviar enlaces
- crear pruebas internas con datos reales
- pedir tickets/audios
- abrir accesos a terceros
