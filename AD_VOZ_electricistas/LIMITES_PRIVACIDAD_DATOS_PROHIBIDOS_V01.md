# Limites de privacidad y datos prohibidos - Electricista voz V01

## Principio

Estado: validado por Salva.

El MVP debe capturar lo minimo necesario para probar utilidad operativa. No debe convertirse en repositorio indiscriminado de datos de clientes, audios, documentos o informacion fiscal.

Antes del gate de privacidad no se piden entradas reales de trabajo ni datos reales de clientes. Solo respuestas escritas, ejemplos anonimos, inventados o datos controlados.

## Fases de privacidad

### Fase 0 - Email asincronico y decision de foco

- Solo respuesta escrita por email.
- Sin entrevista verbal, llamada ni grabacion.
- Sin nombres completos, telefonos reales, direcciones completas, facturas, audios ni documentos.
- Objetivo: entender dolor principal y decidir foco MVP.

### Fase 1 - Prototipo con datos ficticios o anonimizados

- Usar frases inventadas, anonimas o suficientemente generalizadas.
- No guardar audios reales.
- No conectar WhatsApp, Gmail, SMS ni herramientas externas.
- Objetivo: probar flujo y utilidad percibida sin datos sensibles.

### Fase 2 - Piloto controlado con datos reales minimos

Solo puede abrirse tras gate explicito de Salva. Debe definir datos guardados, ubicacion, acceso, borrado, retencion y exclusiones.

### Fase 3 - Producto ampliado

Requiere decision separada si se entra en facturacion legal, fiscalidad, comunicaciones automaticas, documentos reales, pagos o clientes externos.

## Permitido en prueba controlada tras gate

- Nombre de pila o alias del cliente.
- Telefono solo si es imprescindible para seguimiento y Salva lo autoriza expresamente.
- Zona o direccion parcial cuando baste para organizar la visita.
- Descripcion tecnica del trabajo.
- Materiales necesarios o usados.
- Horas aproximadas.
- Estado del trabajo.
- Siguiente accion.
- Importe estimado si es necesario para presupuesto simple.

## Datos prohibidos en fase MVP sin autorizacion especifica

- DNI, NIE, CIF o documentos identificativos.
- Direcciones completas de terceros cuando no sean imprescindibles.
- Fotos de documentos fiscales, facturas reales o partes con datos de cliente.
- Audios almacenados de conversaciones con clientes.
- Transcripciones de llamadas con terceros sin consentimiento.
- Datos bancarios.
- Informacion de salud, conflictos, menores, comunidades de vecinos o situaciones personales no necesarias.
- Credenciales de herramientas externas.
- Datos fiscales completos para declaraciones, modelos o gestoria.
- Envio automatico de mensajes a clientes.

## Reglas de recogida inicial

- No hay entrevista verbal prevista. La primera recogida de informacion es por email asincronico.
- No pedir nombres completos de clientes.
- Usar ejemplos anonimos.
- No pedir facturas reales.
- No pedir audios reales de terceros.
- Si aparece informacion sensible, resumirla y no copiarla literalmente.

## Reglas de piloto

- Usar datos controlados o anonimizados por defecto.
- Si se usan datos reales, debe existir gate previo y deben ser los minimos aprobados por Salva.
- No activar automatizaciones externas.
- No enviar WhatsApp, email o SMS desde la herramienta sin gate explicito.
- No prometer precision fiscal, legal o contable.

## Gate de privacidad

Antes de cualquier prueba con datos reales, Salva debe validar:

- Que datos se guardan.
- Donde se guardan.
- Quien puede verlos.
- Si se guardan audios o solo transcripciones.
- Como se borran entradas de prueba.
- Que datos quedan fuera de alcance.

Sin este gate, cualquier prueba debe limitarse a datos ficticios, anonimizados o controlados.
