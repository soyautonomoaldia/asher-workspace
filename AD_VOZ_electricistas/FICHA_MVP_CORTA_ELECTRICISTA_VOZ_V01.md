# Ficha MVP corta - Electricista voz V01

## Objetivo

Construir una herramienta propia para un electricista autonomo que reduzca perdidas de informacion diaria y convierta voz rapida en tareas, presupuestos simples y seguimiento operativo.

El MVP no debe empezar como ERP completo. Debe demostrar primero que el usuario captura mas informacion util, olvida menos tareas y tarda menos en ordenar el dia.

## Usuario inicial

- Perfil: electricista autonomo, familiar de Salva.
- Contexto probable: muchas llamadas, WhatsApp, visitas, trabajos pequeños, urgencias, presupuestos pendientes, compras de material y recordatorios dispersos.
- Restriccion clave: si la herramienta exige escribir mucho, corregir demasiado o cambiar todo su habito diario, fallara.

## Jornada real a modelar

### Inicio del dia

- Revisar trabajos previstos.
- Ver llamadas/avisos pendientes.
- Confirmar materiales o desplazamientos necesarios.
- Priorizar urgencias frente a trabajos planificados.

### Durante desplazamientos o entre trabajos

- Capturar por voz una llamada entrante.
- Registrar direccion, averia, contacto y urgencia.
- Anotar material usado o pendiente de comprar.
- Dejar recordatorio de llamar, enviar presupuesto o volver a una obra.

### Al terminar un trabajo

- Registrar que se hizo.
- Guardar materiales y horas aproximadas.
- Marcar si queda pendiente algo.
- Preparar texto base para WhatsApp, presupuesto o factura posterior.

### Fin del dia

- Ver trabajos abiertos.
- Ver presupuestos o cobros pendientes.
- Revisar recordatorios de manana.
- Cerrar lo completado sin burocracia.

## Capturas por voz esperadas

La voz debe aceptar frases naturales y devolver un registro editable.

Ejemplos utiles:

- "Apunta llamada de Maria, calle Mayor 12, no le funciona el diferencial, urgente para hoy por la tarde."
- "Trabajo terminado en bar Central, cambiado magnetotermico y revisado cuadro, una hora y media, pendiente cobrar."
- "Comprar cable de 2,5, enchufes Schneider y dos automaticos de 16 para obra de Juan."
- "Presupuesto para Inmobiliaria Sol: cambiar tres enchufes, revisar cuadro y mano de obra dos horas."
- "Recordarme llamar manana a Pedro por la averia del garaje."

Campos que debe intentar extraer:

- Cliente o contacto.
- Telefono si aparece.
- Direccion o zona.
- Tipo: llamada, trabajo, presupuesto, compra, recordatorio, cobro.
- Descripcion.
- Urgencia.
- Fecha o momento.
- Materiales.
- Horas o mano de obra.
- Estado inicial.
- Siguiente accion.

## Estados minimos

Para el MVP bastan pocos estados claros:

- `Nuevo`: entrada capturada pero no revisada.
- `Pendiente`: requiere accion.
- `Programado`: tiene fecha o franja.
- `En curso`: trabajo abierto.
- `Hecho`: completado.
- `Presupuesto`: necesita valorar/enviar presupuesto.
- `Cobrar`: trabajo hecho o documento pendiente de cobro.
- `Comprar material`: bloqueo por material.
- `Archivado`: cerrado sin accion.

No conviene crear estados fiscales, contables o comerciales complejos al inicio.

## Pantallas minimas

### Hoy

Vista principal. Debe mostrar lo que importa hoy:

- Trabajos programados.
- Urgencias.
- Pendientes sin fecha.
- Recordatorios.
- Cobros o presupuestos que no deben olvidarse.
- Boton grande de captura por voz.

### Captura

Entrada de voz con resultado estructurado:

- Texto transcrito.
- Campos detectados.
- Confianza o aviso si faltan datos.
- Botones: guardar, editar, convertir en presupuesto, crear recordatorio, descartar.

### Clientes/contactos

Lista simple:

- Nombre.
- Telefono.
- Direccion.
- Notas.
- Historial de capturas/trabajos.

### Trabajo/presupuesto simple

Detalle operativo:

- Descripcion.
- Materiales.
- Mano de obra.
- Estado.
- Siguiente accion.
- Texto copiable para WhatsApp.

## Criterio de exito

Validacion con el usuario inicial durante 7 dias.

Exito minimo:

- Usa la captura por voz al menos 3 dias de 7.
- Registra al menos 15 entradas reales.
- Recupera al menos 3 pendientes que normalmente habrian quedado en WhatsApp, memoria o papel.
- Puede revisar el dia siguiente en menos de 2 minutos.
- Corrige menos del 30% de las capturas de forma pesada.
- Declara que seguiria usandolo para organizar el dia aunque no facture desde la app.

Fracaso claro:

- Prefiere WhatsApp/notas tras 48 horas.
- La voz exige demasiada correccion.
- No consulta la vista "Hoy".
- Solo usa la app cuando Salva se lo recuerda.
- El valor percibido depende de facturacion completa desde el primer dia.

## Riesgos

- Dolor mal elegido: quizas el problema real no sea organizar trabajos, sino presupuestar rapido o cobrar.
- Sobrealcance: copiar ERP completo mata velocidad y claridad.
- Privacidad: se capturan nombres, telefonos, direcciones, audios y detalles de clientes.
- Calidad de transcripcion: ruido de calle, furgoneta, obra o nombres propios pueden degradar el flujo.
- Habito existente: WhatsApp, llamadas y calendario ya cubren parte del trabajo.
- Fiscalidad/facturacion: entrar pronto en modelos, IVA, IRPF o documentos legales aumenta responsabilidad.
- Usuario unico: si solo sirve para el familiar, no prueba mercado; sirve como prototipo operativo, no como validacion comercial amplia.

## Decision de alcance recomendada

MVP V01 debe centrarse en gestion diaria por voz, no en ERP completo.

Incluir:

- Captura por voz.
- Vista "Hoy".
- Clientes/contactos simples.
- Trabajos/pendientes.
- Presupuesto simple como salida opcional.
- Texto copiable para WhatsApp.

Excluir por ahora:

- Facturacion legal completa.
- Modelos fiscales.
- Gestoria.
- OCR de gastos.
- Branding/documentos avanzados.
- Automatizaciones externas.
- Pricing o venta publica.

## Proximos pasos

1. Entrevista interna de 20 minutos con el familiar: dia real, herramientas actuales, principales olvidos, frecuencia de presupuestos y cobros.
2. Definir 10 frases reales de captura por voz, no inventadas por el equipo.
3. Diseñar el flujo `voz -> registro estructurado -> vista Hoy`.
4. Preparar prototipo de baja fidelidad con solo 4 pantallas: Hoy, Captura, Contacto, Trabajo.
5. Ejecutar prueba de 7 dias con datos controlados y regla de privacidad: no guardar mas datos de los necesarios.
6. Decidir gate: seguir con gestion diaria, pivotar a presupuestos por voz o descartar.
