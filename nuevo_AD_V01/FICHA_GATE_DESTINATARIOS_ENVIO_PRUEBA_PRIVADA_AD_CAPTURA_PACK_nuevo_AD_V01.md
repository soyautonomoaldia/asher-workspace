# FICHA_GATE_DESTINATARIOS_ENVIO_PRUEBA_PRIVADA_AD_CAPTURA_PACK - nuevo_AD_V01

Fecha: 2026-06-09
Owner: Asher
Estado: gate interno aprobado por Salva; no autoriza contacto ni envio
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## 0. Decision De Salva

Salva acepta avanzar al siguiente gate tras aprobar la lista vigente P1-P3 confirmada por Mercury.

Decision posterior de Salva el 2026-06-09:

> Aprobada ficha destinatarios/envio

Interpretacion operativa:

- se prepara ficha de destinatarios/envio;
- la ficha queda aprobada como gate documental;
- no se incluyen nombres reales en este archivo;
- no se contacta a nadie;
- no se envian emails;
- no se abren formularios;
- no se usan datos reales;
- no se registra feedback real;
- no se pregunta pricing;
- no se crea build, backend, mock operativo ni integracion.

## 1. Objetivo Del Gate

Cerrar, antes de cualquier contacto, los puntos minimos para que Salva pueda aprobar o bloquear una prueba privada concreta:

1. participantes concretos gestionados de forma privada;
2. canal de contacto;
3. texto final de invitacion;
4. owner de contacto;
5. owner de sesion;
6. consentimiento final;
7. registro anonimo;
8. almacenamiento;
9. borrado;
10. invalidadores;
11. criterio de parada;
12. aprobacion final de ejecucion.

Actualizacion 2026-06-28 por informe de mercado:

Este gate debe medir la tesis reformulada tras `FICHA_INCORPORACION_INFORME_MERCADO_AD_CAPTURA_PACK_nuevo_AD_V01.md`:

> AD Captura Pack como capa previa a facturacion/gestoria que convierte caos operativo en paquetes accionables revisables.

No debe medir interes por facturacion, gestoría operativa, integraciones, portal de gestor, VeriFactu, OCR/documentos reales, WhatsApp real, calendario real, pagos, cobros automaticos, conectores/MCP o agentes autonomos.

La alternativa inicial a contrastar sigue siendo:

- WhatsApp;
- notas;
- memoria;
- libreta;
- calendario simple;
- desorden antes de facturacion o gestoria.

## 2. Perfiles Aceptados

Lista P1-P3 vigente aceptada por Salva:

| ID | Perfil | Condicion |
| --- | --- | --- |
| P1 | Autonomo fontaneria/reparacion rapida, decide solo, usa WhatsApp/notas | Debe opinar solo con ejemplos ficticios |
| P2 | Autonomo electricista/reparacion rapida, decide solo, usa WhatsApp/notas | Solo reparacion rapida domestica sencilla; fuera normativa, certificaciones, factura, fotos, calendario real, alcance industrial e integraciones |
| P3 | Autonomo reparacion domestica general, trabajos cortos, material y cobros manuales | Debe mantener buyer en quien sufre el olvido operativo |

## 3. Destinatarios Concretos

No registrar nombres reales en esta ficha.

Formato privado recomendado para Salva:

```text
P1 -> persona concreta gestionada fuera del archivo
P2 -> persona concreta gestionada fuera del archivo
P3 -> persona concreta gestionada fuera del archivo
```

Estado actual:

| ID | Persona concreta | Estado |
| --- | --- | --- |
| P1 | Pendiente de gestion privada por Salva | Pendiente |
| P2 | Pendiente de gestion privada por Salva | Pendiente |
| P3 | Pendiente de gestion privada por Salva | Pendiente |

Regla:

Los nombres, emails, telefonos o datos identificables no deben incorporarse a `nuevo_AD_V01`. Si Salva los gestiona, deben quedar fuera de los archivos operativos y usarse solo para decidir el contacto concreto.

## 4. Canal De Contacto

Canal candidato aprobado como base:

> Email desde `soyautonomoaldia@gmail.com`.

Estado:

> Pendiente de aprobacion final de envio.

No permitido:

- enviar ahora;
- copiar direcciones en este archivo;
- importar contactos;
- usar CRM;
- enviar masivo;
- usar formulario;
- publicar enlace;
- usar tracking;
- adjuntar documentos;
- adjuntar mock;
- preguntar precio.

## 5. Texto Final De Invitacion Candidato

Texto candidato para revisar:

```text
Asunto: Conversacion privada sobre una idea para autonomos de reparacion

Hola,

Estoy revisando una idea muy inicial para autonomos de reparacion domestica.
No es una demo, no hay producto que vender y no necesito datos reales tuyos ni de tus clientes.

Seria una conversacion privada de 20-30 minutos usando ejemplos ficticios para entender si una nota rapida convertida en un paquete accionable ayudaria a no perder vueltas, material, cobros, presupuestos simples o cierres antes de pasarlo a una herramienta o gestoria.

No se grabara audio. No se usaran nombres reales, telefonos, direcciones, facturas, fotos, chats, importes reales ni documentos.
AD no enviara mensajes, no agendara, no cobrara, no facturara y no se conectara a ninguna herramienta.

Si te encaja, te propondria una llamada breve. Si no, sin problema.
```

Pendiente:

- aprobacion final de Salva;
- revisar si el tono encaja con destinatarios concretos;
- decidir si se envia exactamente igual a P1, P2 y P3 o con microajustes por perfil.

## 6. Owner De Contacto

Owner actualizado:

> Mercury como fuente externa autorizada por Salva para operar el envio privado desde `soyautonomoaldia@gmail.com`, sin incorporar nombres, emails, telefonos ni datos identificables a `nuevo_AD_V01`.

Estado:

> Corregido por decision incorporada el 2026-06-28; ejecucion solo bajo limites de registro anonimo.

Regla:

Mercury debe gestionar destinatarios concretos fuera del workspace y devolver solo resultado anonimo P1/P2/P3. Asher, Gael u otros agentes no deben contactar participantes ni enviar emails desde el workspace.

## 7. Owner De Sesion

Owner actualizado:

> Mercury, si la conversacion o respuesta se produce dentro de la fuente externa autorizada.

Alternativa:

> Mercury devuelve solo resultado anonimo P1/P2/P3; Gael consolida el gate sin ver ni registrar datos personales.

Pendiente:

- recibir solo salida anonima de Mercury;
- decidir si se usa llamada, email de ida/vuelta o conversacion privada;
- decidir si se hace una sesion por participante.

## 8. Consentimiento Final Candidato

Texto candidato antes de empezar:

```text
Antes de empezar, confirmo los limites:

Esta conversacion es privada y no operativa.
Usaremos solo ejemplos ficticios.

No compartas nombres reales, telefonos, direcciones, facturas, fotos, audios, chats, documentos, importes reales ni datos de clientes.

AD no enviara mensajes, no agendara, no cobrara, no facturara, no comprara materiales y no guardara datos reales.

Solo registraremos aprendizaje anonimo: que casos se entienden, que casos no, que limites generan dudas y que invalidadores aparecen.

Puedes parar la conversacion en cualquier momento. Tambien puedes pedir que no se registre tu feedback.
```

Pendiente:

- aprobacion final de Salva;
- si se cambia, revisar que no reduce limites de Nathan/Irinas.

## 9. Registro Anonimo

Registro candidato:

```text
ID anonimo:
Fecha:
Perfil: P1 / P2 / P3
Canal:
Alternativa actual:
Perdida concreta previa a facturacion/gestoria:
Caso mas claro:
Caso mas flojo:
Valor percibido: alto / medio / bajo / nulo
Perdida concreta mencionada:
Comparacion espontanea con WhatsApp/notas/libreta:
Salida manual posterior entendida: si / no / dudoso
Acepta "AD prepara, no ejecuta": si / no / dudoso
Automatismo exigido:
Dato real mencionado espontaneamente: si / no
Tipo de dato sensible mencionado, sin detalle:
Senal cualitativa de WTP: fuerte / media / debil / nula
Invalidador detectado:
Decision recomendada: seguir / ajustar / bloquear
Notas anonimas:
```

Prohibido registrar:

- nombres;
- emails;
- telefonos;
- ubicaciones;
- clientes;
- importes reales;
- transcripcion;
- audio;
- foto;
- chat;
- documento;
- factura.

## 10. Almacenamiento Y Borrado

Almacenamiento candidato:

> Fichas anonimas locales dentro de `nuevo_AD_V01`, solo si Salva aprueba la ejecucion y sin datos identificables.

Plazo candidato:

> 30 dias desde cada sesion.

Borrado:

- borrar notas brutas al terminar;
- no conservar emails en los documentos;
- no copiar datos personales;
- si aparece dato real, eliminarlo y registrar solo categoria de incidente.

Pendiente:

- aprobacion final de Salva sobre ubicacion y plazo.

## 11. Invalidadores

Bloqueo o parada si:

- aparece dato real identificable;
- se comparte factura, foto, audio, chat, documento o importe real;
- el participante necesita WhatsApp real;
- necesita calendario real;
- necesita foto real;
- necesita factura, cobro o pago;
- necesita presupuesto legal;
- necesita integracion;
- necesita backend o persistencia;
- necesita gestoria operativa, portal de gestoria, OCR/documentos reales, conectores/MCP o agente autonomo;
- no entiende que AD prepara y no ejecuta;
- lo ve como otra lista sin perdida concreta;
- se discute precio concreto;
- P2 deriva a normativa, certificacion, alcance industrial o seguridad tecnica.

## 12. Criterio De Avance

Verde solo si:

- los 3 participantes aceptan ejemplos ficticios;
- los 3 entienden que AD prepara y no ejecuta;
- al menos 2 comparan espontaneamente con WhatsApp/notas/libreta;
- al menos 2 nombran una perdida concreta;
- ninguno exige datos reales o integraciones para valorar;
- al menos 2 entienden que la salida a gestoria/facturacion seria manual y posterior;
- ningun invalidador duro se activa.

Amarillo si:

- el concepto se entiende pero no aparece perdida clara;
- solo 1 perfil ve valor fuerte;
- P2 se acerca a normativa pero no la exige;
- aparecen dudas de microcopy;
- se pide automatismo pero acepta fase manual.
- el valor aparece sobre todo por poder trasladarlo luego a gestoria o facturacion, pero acepta que sea manual y posterior.

Rojo si:

- el valor depende de datos reales, fotos, facturas, cobros, calendario, WhatsApp real o integraciones;
- los participantes no revisarian tarjetas;
- lo perciben como otra lista;
- no hay perdida concreta;
- se necesita precio o producto real para opinar.
- el valor depende de facturacion legal, integracion con gestor, portal, OCR/documentos reales, WhatsApp real, calendario real, conectores/MCP o agentes autonomos.

## 13. Decision Final Pendiente

Para autorizar envio/contacto, Salva debe aprobar explicitamente:

- P1 concreto, gestionado fuera del archivo;
- P2 concreto, gestionado fuera del archivo;
- P3 concreto, gestionado fuera del archivo;
- canal email;
- texto final;
- owner de contacto Mercury como fuente externa autorizada;
- owner de sesion;
- consentimiento final;
- registro anonimo;
- almacenamiento;
- plazo de borrado;
- invalidadores;
- criterio de parada;
- fecha o ventana de envio.

## 14. Decision Requerida Ahora

Decision registrada de Salva:

> Ficha de destinatarios/envio aprobada como gate documental.

Actualizacion posterior 2026-06-28: la ejecucion queda vinculada a Mercury como fuente externa autorizada y al marco post-informe. El siguiente paso no es ampliar scope ni preparar nuevas fichas; es obtener de Mercury resultado anonimo o bloqueo.

## 15. Registro De Incorporacion

Hecho:

Se crea ficha de gate para destinatarios/envio.

Supuesto:

Separar destinatarios concretos de la documentacion reduce el riesgo de almacenar datos personales en archivos operativos.

Riesgo:

Confundir esta ficha con permiso para enviar emails.

Owner:

Asher redacta. Salva decide.

Decision requerida:

Salva ya corrigio el owner/fuente externa como Mercury. Sigue prohibido incorporar destinatarios concretos o identificadores al workspace.

Condicion de desbloqueo:

No hay registro operativo valido hasta que Mercury devuelva solo salida anonima P1/P2/P3 bajo texto, consentimiento, registro, borrado, invalidadores y ventana aprobados.

Siguiente accion propuesta:

Solicitar a Mercury salida anonima P1/P2/P3 bajo el marco post-informe, sin incorporar datos personales a esta ficha.
