# Ficha MVP corta - Electricista voz V01

## Objetivo

Construir una herramienta propia para un electricista autonomo que reduzca friccion administrativa mediante voz. El foco MVP queda pendiente de la respuesta escrita de Salva/familiar.

El MVP no debe empezar como ERP completo. Debe demostrar primero un dolor concreto y frecuente, sin asumir prematuramente que sera gestion diaria, presupuesto/facturacion, cobro o materiales.

## Usuario inicial

- Perfil: electricista autonomo, familiar de Salva.
- Contexto probable: muchas llamadas, WhatsApp, visitas, trabajos pequeños, urgencias, presupuestos pendientes, compras de material y recordatorios dispersos.
- Restriccion clave: si la herramienta exige escribir mucho, corregir demasiado o cambiar todo su habito diario, fallara.

## Flujos posibles a contrastar

Estos flujos son hipotesis para el email asincronico y no una decision de foco.

### Gestion diaria

- Revisar trabajos previstos.
- Ver llamadas/avisos pendientes.
- Confirmar materiales o desplazamientos necesarios.
- Priorizar urgencias frente a trabajos planificados.

### Captura durante desplazamientos o entre trabajos

- Capturar por voz un aviso o nota derivada de una llamada, sin grabar la llamada ni datos reales de terceros antes de gate.
- Registrar zona, tipo de averia, contacto anonimizado y urgencia durante fases sin datos reales.
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

### Presupuesto/facturacion simple

- Dictar materiales y mano de obra.
- Preparar texto o borrador simple para presupuesto.
- Evitar fiscalidad, factura legal completa y modelos mientras no haya gate especifico.

### Cobro y seguimiento

- Recordar trabajos terminados pendientes de cobrar.
- Preparar texto copiable para seguimiento.
- Evitar envio automatico a clientes sin gate explicito.

## Capturas por voz esperadas

La voz debe aceptar frases naturales y devolver un registro editable.

Ejemplos utiles solo para pruebas anonimizadas/controladas:

- "Apunta revisar cuadro electrico manana por la tarde."
- "Trabajo terminado, cambiado magnetotermico y revisado cuadro, una hora y media, pendiente cobrar."
- "Comprar cable de 2,5, enchufes y dos automaticos de 16 para una obra."
- "Presupuesto: cambiar tres enchufes, revisar cuadro y mano de obra dos horas."
- "Recordarme llamar manana por una averia de garaje."

Campos que debe intentar extraer segun foco y fase de privacidad:

- Cliente o contacto anonimizado; datos reales solo tras gate completo y aprobacion explicita de Salva.
- Telefono solo si el gate completo lo autoriza.
- Direccion parcial o zona; direccion completa solo si el gate completo lo autoriza y es imprescindible.
- Tipo: llamada, trabajo, presupuesto, compra, recordatorio, cobro.
- Descripcion.
- Urgencia.
- Fecha o momento.
- Materiales.
- Horas o mano de obra.
- Estado inicial.
- Siguiente accion.

## Estados minimos opcionales

Si el foco recomendado queda aprobado explicitamente por Salva como gestion diaria, bastan pocos estados claros:

- `Nuevo`: entrada capturada pero no revisada.
- `Pendiente`: requiere accion.
- `Programado`: tiene fecha o franja.
- `En curso`: trabajo abierto.
- `Hecho`: completado.
- `Presupuesto`: necesita valorar/enviar presupuesto.
- `Cobrar`: trabajo hecho o documento pendiente de cobro.
- `Comprar material`: bloqueo por material.
- `Archivado`: cerrado sin accion.

No conviene crear estados fiscales, contables o comerciales complejos al inicio. Si el foco recomendado y aprobado por Salva es presupuesto/cobro, estos estados deben revisarse antes de cualquier prototipo y sin facturacion legal completa.

## Pantallas minimas segun foco

### Hoy, si el foco es gestion diaria

Vista principal. Debe mostrar lo que importa hoy:

- Trabajos programados.
- Urgencias.
- Pendientes sin fecha.
- Recordatorios.
- Cobros o presupuestos que no deben olvidarse.
- Boton grande de captura por voz.

### Captura, comun a cualquier foco

Entrada de voz con resultado estructurado:

- Texto transcrito.
- Campos detectados.
- Confianza o aviso si faltan datos.
- Botones: guardar, editar, convertir en presupuesto, crear recordatorio, descartar.

### Clientes/contactos, solo si aporta valor y supera privacidad minima

Lista simple:

- Nombre.
- Telefono.
- Direccion.
- Notas.
- Historial de capturas/trabajos.

### Trabajo/presupuesto simple, si el foco lo justifica

Detalle operativo:

- Descripcion.
- Materiales.
- Mano de obra.
- Estado.
- Siguiente accion.
- Texto copiable para WhatsApp.

## Criterio de exito provisional

Validacion con el usuario inicial durante 7 dias solo despues de decidir foco, aprobar el gate completo y recibir autorizacion explicita de Salva para modo de prueba. La privacidad validada solo define limites; no autoriza piloto, datos reales, audios reales, documentos, facturas, direcciones completas, build ni prueba operativa.

Exito minimo:

- Usa la captura por voz al menos 3 dias de 7 durante una prueba autorizada.
- Registra al menos 15 entradas controladas o anonimizadas; entradas reales solo si existe gate completo y aprobacion explicita de Salva.
- Recupera al menos 3 pendientes que normalmente habrian quedado en WhatsApp, memoria o papel.
- Puede revisar el dia siguiente en menos de 2 minutos.
- Corrige menos del 30% de las capturas de forma pesada.
- Declara que seguiria usandolo para el foco recomendado/aprobado aunque no incluya el resto del ERP.

Fracaso claro:

- Prefiere WhatsApp/notas tras 48 horas.
- La voz exige demasiada correccion.
- No consulta la vista "Hoy".
- Solo usa la app cuando Salva se lo recuerda.
- El valor percibido depende de una funcionalidad fuera del foco recomendado/aprobado desde el primer dia.

## Riesgos

- Dolor mal elegido: quizas el problema real no sea organizar trabajos, sino presupuestar rapido, cobrar, comprar material u otro flujo.
- Sobrealcance: copiar ERP completo mata velocidad y claridad.
- Privacidad: se capturan nombres, telefonos, direcciones, audios y detalles de clientes.
- Calidad de transcripcion: ruido de calle, furgoneta, obra o nombres propios pueden degradar el flujo.
- Habito existente: WhatsApp, llamadas y calendario ya cubren parte del trabajo.
- Fiscalidad/facturacion: entrar pronto en modelos, IVA, IRPF o documentos legales aumenta responsabilidad.
- Usuario unico: si solo sirve para el familiar, no prueba mercado; sirve como aprendizaje de flujo, no como validacion comercial amplia.

## Decision de alcance pendiente

MVP V01 no debe decidirse antes de la respuesta escrita de Salva/familiar. La recomendacion provisional es mantener el alcance estrecho y elegir un solo foco principal.

Opciones de inclusion segun foco recomendado y aprobado explicitamente por Salva:

- Captura por voz.
- Vista "Hoy" si el dolor principal es gestion diaria.
- Clientes/contactos simples solo con gate completo aprobado; privacidad aprobada por si sola no autoriza datos reales.
- Trabajos/pendientes si el dolor principal son avisos y olvidos.
- Presupuesto simple si el dolor principal es preparar importes/documentos.
- Cobro/seguimiento si el dolor principal es cerrar trabajos y recordar pagos.
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

1. Salva valida y envia el email asincronico al familiar.
2. Con la respuesta escrita, decidir foco MVP: gestion diaria, presupuesto/facturacion simple, cobro/seguimiento u otro.
3. Definir 10 frases anonimizadas/controladas de captura por voz; no pedir entradas reales antes de gate.
4. Disenar el flujo minimo para el foco elegido.
5. Aprobar gate de privacidad antes de cualquier prueba con datos reales.
6. Ejecutar prueba de 7 dias solo con datos controlados o reales autorizados.
7. Decidir gate: seguir con el foco elegido, pivotar o descartar.
