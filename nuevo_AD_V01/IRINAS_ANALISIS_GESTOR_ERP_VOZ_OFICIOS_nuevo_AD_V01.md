# IRINAS_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Irinas
Area: UX movil en campo, voz/foto/texto, confianza, claridad de promesa, consentimiento y lenguaje de no sustitucion de gestoria.
Fuente operativa interna usada: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## Alcance Y Estado

### Hecho

La tesis cambia el centro UX: ya no es solo registrar gastos, sino capturar y ordenar trabajo administrativo-operativo de campo con voz, foto y texto.

El usuario estaria en movimiento, con poco tiempo, manos ocupadas, ruido, interrupciones y baja tolerancia a formularios largos.

### Supuesto

El valor UX depende de que el autonomo pueda decir o fotografiar algo en menos de 20-30 segundos y confiar en que queda ordenado despues: cliente, trabajo, cobro, gasto, nota, material pendiente o cierre para gestoria.

### Riesgo

El producto puede volverse confuso si se presenta como "ERP", "gestor automatico" o "gestoria inteligente". Eso eleva expectativas, miedo a errores fiscales y rechazo por falta de confianza.

### Decision Requerida

Definir una promesa UX estrecha:

"Guarda por voz, foto o texto lo que pasa en tus trabajos y lo deja preparado para revisar: clientes, avisos, gastos, cobros pendientes y resumen para tu gestoria."

Evitar:

- "Calcula tus impuestos".
- "Sustituye a tu gestor".
- "ERP completo".
- "Automatiza tu negocio".
- "Todo en regla".

### Condicion De Desbloqueo

La tesis solo queda desbloqueada para definicion interna si se aprueban estos limites UX:

- la app captura y organiza, no decide fiscalmente;
- todo IVA/impuesto se muestra como estimacion revisable;
- la gestoria aparece como receptor/revisor, no como elemento sustituido;
- cada captura puede hacerse por voz, foto o texto sin formularios complejos;
- el usuario siempre ve que dato se guarda, para que sirve y si es estimado.

### Siguiente Accion Propuesta

Crear una matriz de flujos UX minimos, sin mock operativo.

## UX Movil En Campo

### Hecho

El contexto de uso probable es furgoneta, salida de visita, llamada terminada, almacen/proveedor o fin de jornada.

### Supuesto

La interfaz debe priorizar captura rapida y revision posterior. El usuario no deberia elegir primero un modulo; deberia capturar el hecho y dejar que el sistema proponga estructura revisable.

### Riesgo

Si el primer gesto obliga a elegir entre clientes, trabajos, presupuestos, facturas, gastos, tareas y gestoria, el producto ya se siente como ERP.

### Decision Requerida

La pantalla principal deberia girar alrededor de "capturar" y "pendientes de hoy", no alrededor de un menu de modulos.

### Condicion De Desbloqueo

Cada flujo minimo debe resolverse con entrada rapida, confirmacion visible y correccion simple.

### Siguiente Accion Propuesta

Definir flujos sin interfaz visual todavia:

- capturar aviso/trabajo por voz;
- anadir foto o nota al trabajo;
- registrar gasto/justificante;
- marcar cobro pendiente;
- apuntar material pendiente;
- generar resumen revisable para gestoria.

## Voz, Foto Y Texto

### Hecho

Voz es diferencial, pero no siempre viable: ruido, verguenza, privacidad, acento, precision y situacion social pueden bloquearla.

### Supuesto

La mejor UX debe ser multimodal: voz cuando el usuario puede hablar, foto cuando hay justificante o evidencia, texto corto cuando voz no encaja.

### Riesgo

Si AD es "voice-first" en promesa pero el usuario acaba corrigiendo demasiado, la ventaja desaparece.

### Decision Requerida

No hacer de la voz una obligacion. Debe ser la entrada mas rapida, no la unica.

### Condicion De Desbloqueo

La captura por voz debe generar elementos revisables, nunca acciones finales automaticas.

### Siguiente Accion Propuesta

Probar internamente frases ficticias y medir si producen estructura clara sin pedir muchos campos.

## Confianza Y Consentimiento

### Hecho

El producto tocaria datos sensibles para el usuario: clientes, direcciones, importes, fotos de viviendas, tickets, notas y posible audio.

### Supuesto

La confianza se construye con limites visibles: que se guarda, que no se guarda, que es estimado, que requiere revision y que puede borrar/exportar el usuario.

### Riesgo

El autonomo puede desconfiar si cree que AD escucha, envia datos a terceros, calcula impuestos o comparte informacion con gestoria sin control.

### Decision Requerida

Consentimiento y control deben formar parte del diseno desde el principio, no como texto legal posterior.

### Condicion De Desbloqueo

Debe existir lenguaje visible para:

- grabacion/transcripcion;
- fotos/documentos;
- estimaciones;
- revision humana;
- exportacion a gestoria;
- borrado.

### Siguiente Accion Propuesta

Redactar microcopy de consentimiento para cada tipo de captura antes de cualquier mock.

## Lenguaje Recomendado

### Hecho

La promesa debe ser concreta y prudente.

### Supuesto

El usuario entiende mejor "no olvidar cobros, materiales y papeles" que "ERP por voz".

### Riesgo

Lenguaje grandilocuente genera expectativas imposibles y riesgo legal/comercial.

### Decision Requerida

Usar formulaciones como:

- "Te ayuda a recordar y ordenar lo que queda pendiente de cada trabajo".
- "Prepara un resumen revisable para tu gestoria".
- "Los importes e impuestos son orientativos y deben revisarse".
- "No sustituye a tu gestoría".

### Condicion De Desbloqueo

Toda promesa publica o privada futura debe pasar por revision de no-promesas.

### Siguiente Accion Propuesta

Crear un glosario permitido/prohibido antes de cualquier validacion.

## Recomendacion Irinas

### Hecho

La UX es viable si AD se vende como memoria y orden administrativo de campo.

### Supuesto

El usuario aceptara una herramienta ligera si captura rapido y no le exige pensar en modulos.

### Riesgo

Si se intenta posicionar como ERP, asesor fiscal o sustituto de gestoria, se rompe la confianza.

### Decision Requerida

Irinas recomienda no usar "ERP" como promesa operativa y centrar la experiencia en capturar, revisar y recordar.

### Condicion De Desbloqueo

Bloqueado hasta aprobar promesa UX, consentimiento, limites de datos y flujos minimos.

### Siguiente Accion Propuesta

Construir una matriz UX interna de seis flujos, con datos ficticios y sin mock operativo.

