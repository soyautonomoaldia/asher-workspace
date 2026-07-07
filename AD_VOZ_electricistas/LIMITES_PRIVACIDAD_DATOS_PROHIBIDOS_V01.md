# Limites de privacidad y datos prohibidos - Electricista voz V01

## Principio

El MVP debe capturar lo minimo necesario para probar utilidad operativa. No debe convertirse en repositorio indiscriminado de datos de clientes, audios, documentos o informacion fiscal.

## Permitido en prueba controlada

- Nombre de pila o alias del cliente.
- Telefono solo si es imprescindible para seguimiento y Salva lo autoriza.
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

## Reglas de entrevista

- No pedir nombres completos de clientes.
- Usar ejemplos anonimos.
- No pedir facturas reales.
- No pedir audios reales de terceros.
- Si aparece informacion sensible, resumirla y no copiarla literalmente.

## Reglas de piloto

- Usar datos controlados o anonimizados siempre que sea posible.
- Si se usan datos reales, deben ser los minimos y con aprobacion de Salva.
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
