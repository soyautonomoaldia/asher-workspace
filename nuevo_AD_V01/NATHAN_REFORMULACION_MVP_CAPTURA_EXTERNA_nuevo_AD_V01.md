# NATHAN_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Nathan
Responsabilidad: datos, privacidad, seguridad y limites tecnicos
Estado: definicion interna documental
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
Documentos usados:
- `REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`
- `ASIRIN_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`
- `IRINAS_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`

## 1. Decision De Nathan

Aprobado con condiciones.

Apruebo la reformulacion solo como trabajo interno documental:

> Captura externa en menos de 10 segundos; organizacion interna despues.

Y acepto la promesa como marco interno:

> Diselo a AD antes de que se te olvide.

Mi aprobacion no autoriza validacion externa, reclutamiento, mensajes externos, datos reales, audios reales, WhatsApps reales, emails reales, calendarios reales, mock operativo publico, build, pricing publico, pagos, produccion ni integraciones reales.

La condicion principal es que el MVP reformulado debe tratar la captura externa como simulacion controlada, no como conexion real con sistemas externos. Cualquier paso hacia datos reales queda bloqueado hasta nueva decision explicita de Salva y sign-off formal de owners.

## 2. Politica Minima De Datos Para Simulacion Interna

La fase actual solo puede usar datos ficticios, creados internamente para probar estructura, ambiguedad y reduccion de friccion.

Politica minima:

- Todo dato debe ser inventado antes de entrar en la simulacion.
- Ningun dato debe proceder de clientes, usuarios, conversaciones, contactos, calendarios, emails, WhatsApps, audios, fotos, facturas, tickets, presupuestos o documentos reales.
- La simulacion debe conservar solo lo necesario para decidir scope: texto ficticio, origen simulado, objetos sugeridos, campos dudosos, confianza, estado de revision, riesgo si fuera real y decision documental.
- Cada captura debe marcarse como `ficticia` y cada origen como `simulado`.
- Ningun campo inferido puede convertirse en accion externa.
- Ningun dato ficticio debe mezclarse con datos reales de Salva, agentes, conocidos, clientes o empresas reales.
- No se deben usar servicios externos de IA, transcripcion, correo, mensajeria o calendario con contenido real.

## 3. Datos Ficticios Permitidos Y Datos Prohibidos

Datos ficticios permitidos:

- nombres inventados de contacto o alias, por ejemplo `Carmen`, `Luis taller`, `vecino portal B`;
- direcciones inventadas o incompletas, por ejemplo `calle Falsa 12`, `zona norte`, `bloque azul`;
- telefonos claramente ficticios, preferiblemente `000 000 000` o patrones no utilizables;
- emails ficticios bajo dominios reservados o no operativos, por ejemplo `cliente@example.com`;
- importes inventados sin valor contractual, por ejemplo `120 euros pendientes`;
- horarios, fechas relativas y momentos inventados, por ejemplo `manana a las nueve`;
- problemas de oficio inventados, por ejemplo `fuga bajo fregadero`, `revisar persiana`, `llevar sifon`;
- mensajes WhatsApp/email redactados desde cero para la prueba interna;
- entradas de calendario o accion rapida inventadas como texto.

Datos prohibidos:

- nombres completos reales de clientes, proveedores, trabajadores, familiares o conocidos;
- telefonos, emails, direcciones, matriculas, ubicaciones o identificadores reales;
- conversaciones reales copiadas de WhatsApp, SMS, Telegram, email, llamadas o notas;
- audios reales, transcripciones reales, fotos reales, tickets, facturas, presupuestos, albaranes o documentos;
- calendarios reales, eventos reales, rutas, visitas, citas, cobros o deudas reales;
- datos de salud, menores, conflictos, impagos sensibles, informacion bancaria, fiscal, legal o laboral real;
- credenciales, tokens, APIs, cuentas, webhooks o permisos de servicios externos;
- cualquier dato que permita identificar a una persona, vivienda, negocio o relacion comercial real.

Regla de corte: si hay duda de si un dato podria ser real o identificable, no se usa.

## 4. Reglas Por Canal Simulado

### Voz/Siri Simulada

- Solo se permite texto escrito que represente una frase dictada ficticia.
- No se graban audios.
- No se transcriben audios reales.
- No se usa Siri real, dictado real, permisos moviles ni atajos operativos.
- La captura debe indicar `voz/Siri simulada`.
- La confirmacion debe ser interna: `Guardado para revisar despues. No se ha enviado nada.`
- No se debe prometer que AD entiende acentos, ruido, nombres reales o conversaciones espontaneas.

### WhatsApp/Email Simulado

- Solo se permiten mensajes inventados y emails ficticios.
- No se copian conversaciones, cabeceras, adjuntos, firmas, contactos ni metadatos reales.
- No se conecta WhatsApp, email, IMAP, Gmail, Outlook, bots, webhooks ni APIs.
- La fuente debe mostrarse como `WhatsApp simulado`, `email simulado` o `texto pegado ficticio`.
- AD no responde, reenvia, archiva, etiqueta ni modifica mensajes.
- Si el mensaje ficticio incluye terceros, deben ser alias inventados y no identificables.

### Calendario/Accion Rapida Simulada

- Solo se permite describir una entrada inventada como texto.
- No se lee, crea ni modifica ningun calendario real.
- No se crean recordatorios reales, notificaciones reales ni eventos del sistema.
- No se usan permisos de calendario, contactos, ubicacion o notificaciones.
- La salida debe quedar como objeto interno pendiente, nunca como cita confirmada.
- Cualquier fecha/hora inferida debe quedar marcada como revisable.

## 5. Retencion, Eliminacion Y Minimizacion

Minimizacion:

- Guardar solo los campos necesarios para decidir el MVP.
- Evitar detalles decorativos que aumenten realismo sin aportar aprendizaje.
- Reducir los objetos raiz al scope de Asirin: `captura`, `contacto_o_alias`, `trabajo_o_aviso`, `visita_o_momento`, `pendiente_accionable`, `nota_de_contexto`.
- No conservar metadatos tecnicos externos porque no debe haber sistemas externos.

Retencion:

- Las capturas ficticias pueden permanecer en documentos internos mientras sirvan para decisiones de scope.
- Cada tabla o ejemplo debe poder borrarse sin afectar ningun sistema operativo.
- No debe existir base de datos, almacenamiento persistente de producto ni repositorio de datos reales.

Eliminacion:

- Cualquier dato real introducido por error debe eliminarse del documento o tabla en cuanto se detecte.
- Si un archivo queda contaminado con datos reales, debe bloquearse su uso como evidencia y reemplazarse por una version limpia.
- Las capturas descartadas no deben seguir usandose para justificar precision, valor o viabilidad.

## 6. Consentimiento Y Expectativas Futuras

Esta fase no aprueba usuarios reales.

Si en el futuro Salva quisiera pasar a usuarios reales, antes harian falta, como minimo:

- consentimiento explicito, informado y separado para cada tipo de dato y canal;
- explicacion clara de que AD guarda capturas internas pendientes de revisar;
- limites visibles: AD no envia, agenda, factura, cobra ni decide automaticamente salvo aprobacion futura especifica;
- politica de privacidad, base juridica, retencion, borrado y derechos de usuario revisados por criterio legal profesional;
- mecanismo de borrado simple;
- minimizacion por defecto;
- tratamiento de datos de terceros, porque WhatsApp/email/calendario suelen incluir personas que no han consentido;
- controles de acceso, seguridad, registros y gestion de incidentes;
- decision sobre proveedores externos, subprocesadores y transferencia de datos;
- revision especifica para voz, transcripcion, adjuntos, imagenes y documentos.

No doy asesoramiento legal definitivo. Solo marco que la fase real no debe aprobarse sin revision legal, tecnica y de confianza.

## 7. Riesgos De Privacidad, Legalidad Y Confianza

Riesgos principales:

- Captura excesiva: una frase rapida puede incluir telefonos, direcciones, nombres, precios, problemas privados o datos de terceros.
- Falsa sensacion de seguridad: el usuario podria creer que compartir desde WhatsApp/email es inocuo cuando puede contener conversaciones completas.
- Consentimiento insuficiente: clientes y terceros no necesariamente han aceptado que su informacion entre en AD.
- Voz y transcripcion: los audios pueden contener ruido, terceros, ubicaciones, emociones, informacion accidental y datos sensibles.
- Calendario: los eventos revelan rutinas, ubicaciones, disponibilidad y relaciones comerciales.
- Inferencias incorrectas: AD podria convertir una frase ambigua en objeto con apariencia de verdad.
- Automatizacion percibida: si la UX parece integracion real, se crea una expectativa que el MVP no puede cumplir.
- Retencion indefinida: guardar capturas sin caducidad aumenta riesgo y reduce confianza.
- Uso de proveedores externos: enviar datos reales a IA, transcripcion o integraciones sin contrato y controles seria inaceptable.
- Riesgo legal: privacidad, proteccion de datos, comunicaciones, consumidores, fiscalidad y obligaciones profesionales pueden activarse si se usan datos reales o efectos externos.

## 8. Invalidadores De Datos/Privacidad

El MVP debe bloquearse o recortarse si aparece cualquiera de estos invalidadores:

- El valor minimo depende de usar WhatsApp, email, Siri, calendario o contactos reales.
- La simulacion no puede mantenerse con datos ficticios.
- El flujo exige guardar audio real, adjuntos reales, imagenes reales o documentos reales.
- La captura necesita datos identificables para ser util.
- La mayoria de ejemplos incluye terceros sin forma clara de consentimiento.
- El sistema tendria que enviar mensajes, crear citas, reclamar cobros, generar presupuestos legales o tomar acciones externas.
- Los objetos inferidos se presentan como confirmados antes de revision humana.
- No hay forma simple de borrar una captura.
- La retencion necesaria es indefinida o no justificada.
- La explicacion al usuario tendria que ocultar limitaciones para parecer valiosa.
- El scope exige permisos moviles, credenciales, webhooks, bots o APIs reales en MVP.
- Un error de clasificacion podria causar dano economico, reputacional, legal o de confianza.

Regla de Nathan: si para demostrar valor hay que relajar privacidad, el MVP esta mal definido.

## 9. Cambios Concretos Recomendados A La Definicion Del MVP

1. Renombrar todos los canales como simulados en la definicion interna:
   - `voz/Siri simulada`;
   - `accion rapida simulada`;
   - `WhatsApp simulado`;
   - `email simulado`;
   - `calendario simulado`.

2. Anadir un campo obligatorio en toda captura:
   - `tipo_de_dato: ficticio`;
   - `origen: simulado`;
   - `efecto_externo: ninguno`.

3. Anadir un campo de riesgo:
   - `riesgo_privacidad_si_fuera_real: bajo, medio, alto`;
   - `motivo_riesgo`.

4. Mantener el texto original ficticio, pero prohibir adjuntos, audio, imagenes y documentos en esta fase.

5. Hacer obligatorio el estado `pendiente de revisar` para cualquier objeto sugerido.

6. Cambiar cualquier microcopy que sugiera accion terminada por lenguaje de captura:
   - permitido: `Guardado para revisar despues`;
   - prohibido: `Cita creada`, `Mensaje enviado`, `Cobro reclamado`, `Presupuesto generado`.

7. Limitar los objetos a los seis propuestos por Asirin y validados por Irinas. No abrir modulos separados de facturacion, pagos, CRM, calendario, inventario o mensajeria.

8. Incluir en la tabla documental una columna `dato_prohibido_detectado` para marcar ejemplos que habrian sido invalidos si fueran reales.

9. Definir que cualquier contaminacion con dato real invalida el ejemplo como evidencia.

10. Dejar por escrito que la siguiente fase no puede empezar sin politica legal/privacidad real, seguridad, consentimiento, borrado y aprobacion explicita de Salva.

## 10. Resumen Breve Para Gael

Nathan aprueba la reformulacion solo con condiciones estrictas: captura externa en menos de 10 segundos puede seguir como tesis interna, pero todo canal debe ser simulado y todo dato debe ser ficticio. No hay permiso para voz real, WhatsApp real, email real, calendario real, usuarios reales, integraciones, build ni produccion.

Para viabilidad SaaS, el aprendizaje valido ahora no es "podemos conectar canales", sino "con frases ficticias breves podemos crear objetos internos revisables sin formularios, sin datos reales y sin automatizacion externa". Si la propuesta solo funciona usando datos reales o integraciones reales, Nathan recomienda recortar o bloquear el MVP.

