# Irinas - Criterios UX/UI V1 AD_VOZ electricistas

Fecha: 2026-07-28  
Rol: Irinas / UX-UI  
Proyecto: AD_VOZ_electricistas  
Contexto activo: `SOURCE_OF_TRUTH_ad_voz_electricistas.md` y `PLAN_OPERATIVO_4_SEMANAS_AD_VOZ_ELECTRICISTAS_2026_07_28.md`

## 0. Marco de trabajo

Este documento define criterios UX/UI para una V1 de impacto antes de crear o presentar un nuevo mock a Salva.

No autoriza:

- build;
- datos reales;
- audios reales;
- contacto con el familiar;
- facturacion legal;
- cobros;
- integraciones;
- WhatsApp real;
- agenda real;
- OCR real sobre documentos reales;
- automatizaciones activas;
- produccion o piloto real.

La V1 debe centrarse en tres nucleos aprobados por el plan:

1. Captura por voz.
2. Seguimiento visual de obras.
3. Bandeja administrativa revisable.

El criterio UX principal no es "que se vea bonito". Es que el electricista entienda en menos de 60 segundos que la herramienta reduce caos administrativo al final del dia sin convertirle en administrativo.

## 1. Por que fallo el mock V0 desde UX

Lectura UX del fallo V0, sin usarlo como fuente activa de direccion visual:

### 1.1. Parecia una app generica, no una herramienta de electricista

El problema no era solo estetico. Si una interfaz para un autonomo electricista se percibe como dashboard generico, pierde credibilidad. El usuario debe reconocer rapido su mundo: obras, avisos, material, pendientes, presupuesto, cobro, trabajo realizado y revision posterior.

### 1.2. No mostraba suficiente "dia a dia"

La V1 no puede empezar desde categorias abstractas. Tiene que empezar desde situaciones reales ficticias:

- "Averia en local";
- "Revisar material";
- "Presupuesto pendiente";
- "Cliente por llamar";
- "Trabajo hecho hoy";
- "Falta cerrar importe";
- "Foto/ticket pendiente de revisar" solo como placeholder de futuro OCR, no como OCR real.

### 1.3. El valor de la voz no se entendia como flujo completo

La voz no debe aparecer como un boton decorativo. Debe verse como una accion con consecuencia inmediata:

1. Dictar.
2. Entender/transcribir.
3. Clasificar.
4. Crear ficha revisable.
5. Dejar una proxima accion clara.

Si el usuario no ve ese antes/despues, la voz parece una funcionalidad suelta.

### 1.4. No diferenciaba movil y escritorio

Movil y escritorio no son el mismo producto escalado:

- Movil: captura rapida en obra, con minimo texto y maxima accion.
- Escritorio: revision tranquila al final del dia, limpieza administrativa y control de pendientes.

Si ambas vistas compiten por la misma densidad, una de las dos falla.

### 1.5. No transmitia suficiente ahorro de tiempo

El familiar ya usa WhatsApp escrito, agenda y ordenador. La V1 debe demostrar visualmente que evita reescribir, olvidar y ordenar tarde. Si parece otro lugar donde meter datos, aumenta friccion.

### 1.6. Podia inducir promesas fuera de alcance

Una UX demasiado parecida a ERP, facturacion, cobros o automatizacion puede prometer mas de lo autorizado. El mock debe ser potente sin sugerir que ya factura, cobra, envia WhatsApps o automatiza gestiones.

## 2. Principios visuales V1

### 2.1. Movil primero, escritorio complementario

La experiencia debe sentirse nacida para uso en obra:

- botones grandes y claros;
- acciones principales accesibles con una mano;
- lectura rapida en exterior;
- jerarquia visual fuerte;
- tolerancia a interrupciones;
- recuperacion facil si la transcripcion falla.

El escritorio debe resolver la tarde de ordenador: revisar, completar, cerrar y copiar informacion.

### 2.2. Altamente visual, no decorativa

La visualidad debe servir para decidir que hacer:

- estados por color y etiqueta;
- prioridad visual;
- iconos funcionales;
- tarjetas de obra escaneables;
- timeline corto de actividad;
- chips de material, mano de obra, presupuesto, cobro y aviso;
- contadores de pendientes reales del flujo.

Evitar hero marketing, gradientes ornamentales, tarjetas decorativas sin accion y textos explicativos largos.

### 2.3. Scannability extrema

Cada pantalla debe responder en pocos segundos:

- que tengo abierto;
- que falta;
- que puedo cerrar;
- que debo revisar;
- que se acaba de capturar por voz;
- cual es la siguiente accion.

Las tarjetas deben tener un titulo operativo, un estado, una proxima accion y un bloque minimo de contexto.

### 2.4. Wow funcional

El wow debe venir de ver que la app ordena el caos:

- una frase de voz se convierte en una ficha limpia;
- una obra muestra material, trabajo realizado y pendiente sin abrir cinco pantallas;
- la bandeja separa "revisar", "completar", "presupuestar", "cobrar" y "cerrar";
- el escritorio deja preparar la tarde administrativa sin releer conversaciones.

No usar wow ornamental si no mejora comprension.

### 2.5. Confianza por limites claros

La interfaz debe evitar prometer acciones no autorizadas. En V1, los comandos deben ser manuales o preparatorios:

- copiar texto;
- marcar como revisado;
- completar ficha;
- dejar pendiente;
- preparar presupuesto;
- cerrar tarea.

No usar textos como "enviado", "cobrado", "facturado automaticamente" o "sincronizado con WhatsApp/agenda" salvo como futuro no activo y claramente separado.

### 2.6. Tono de producto

El tono debe ser directo, laboral y sin infantilizar:

- "Dictar trabajo";
- "Pendiente de revisar";
- "Material anotado";
- "Falta presupuesto";
- "Preparar texto";
- "Cerrar obra";
- "Revisar esta tarde".

Evitar jerga IA y frases tipo "tu asistente magico". La IA debe sentirse como ayuda administrativa, no como promesa exagerada.

## 3. Pantallas minimas movil

### 3.1. Inicio movil - Hoy

Objetivo: que el electricista vea el dia de trabajo y capture algo en segundos.

Debe incluir:

- boton primario grande de voz: `Dictar`;
- resumen de hoy: obras activas, pendientes administrativos y avisos;
- tarjetas compactas de obras o avisos;
- acceso rapido a bandeja;
- ultima captura pendiente de revisar;
- estado visible de seguridad: datos ficticios/controlados si aplica en mock.

Criterio UX: sin explicacion externa, debe quedar claro que esta pantalla se usa entre trabajos o al terminar una visita.

### 3.2. Captura por voz

Objetivo: convertir voz en registro util, no solo transcribir.

Debe incluir:

- estado de escucha claro;
- transcripcion editable;
- clasificacion sugerida: obra, material, trabajo realizado, presupuesto, cobro, aviso o nota;
- confianza/advertencia si algo queda dudoso;
- botones: guardar como ficha, editar, descartar;
- resultado inmediato en forma de ficha resumida.

Criterio UX: si la transcripcion falla, el usuario debe poder corregir una frase sin rehacer todo.

### 3.3. Ficha de obra movil

Objetivo: consultar rapido que pasa en una obra.

Debe incluir:

- nombre ficticio de obra/cliente sin datos reales;
- estado: nueva, en curso, pendiente admin, pendiente cliente, cerrada;
- proxima accion;
- material anotado;
- trabajo realizado;
- pendientes administrativos;
- notas capturadas;
- boton para dictar nueva actualizacion;
- boton para mandar a bandeja/revision, no envio externo real.

Criterio UX: la obra debe poder entenderse en una mirada.

### 3.4. Bandeja administrativa movil

Objetivo: mostrar lo que no debe perderse.

Debe incluir:

- filtros visuales: revisar, presupuestar, cobrar/seguir, completar, cerrar;
- tarjetas con origen de voz;
- accion recomendada;
- estado de revision;
- opcion de copiar/preparar texto manual, sin envio automatico.

Criterio UX: la bandeja debe reducir ansiedad, no parecer otra lista infinita.

### 3.5. Revision de captura

Objetivo: aprobar o corregir una ficha antes de que contamine el sistema.

Debe incluir:

- comparacion entre frase dictada y ficha estructurada;
- campos clave editables;
- chips de clasificacion;
- aviso de datos incompletos;
- confirmar, dejar pendiente o descartar.

Criterio UX: el usuario debe sentir control sobre lo que la IA entendio.

## 4. Pantallas minimas escritorio

### 4.1. Dashboard escritorio - Tarde de ordenador

Objetivo: transformar las capturas del dia en trabajo administrativo revisable.

Debe incluir:

- panel de obras activas;
- bandeja de pendientes por tipo;
- capturas recientes;
- proximas acciones;
- resumen de riesgo: sin presupuesto, sin material revisado, pendiente cobro/seguimiento, incompleto;
- acceso a preparar textos o revisar fichas.

Criterio UX: debe parecer una mesa de control de cierre diario, no un ERP completo.

### 4.2. Obras escritorio

Objetivo: gestionar seguimiento visual de obras sin profundidad excesiva.

Debe incluir:

- vista lista o tablero simple;
- estados claros;
- filtros por pendiente, estado y prioridad;
- columnas o secciones: trabajo, material, administracion, proxima accion;
- detalle lateral de obra al seleccionar;
- historico breve de capturas.

Criterio UX: el usuario debe encontrar rapido que obra necesita accion administrativa.

### 4.3. Bandeja administrativa escritorio

Objetivo: revisar muchas capturas con menos friccion que en movil.

Debe incluir:

- cola de pendientes;
- agrupacion por tipo;
- edicion rapida;
- validacion de campos minimos;
- acciones manuales: copiar, marcar preparado, cerrar, devolver a pendiente;
- indicadores de incompleto.

Criterio UX: la bandeja debe ser la pantalla mas util para ahorrar la tarde de ordenador.

### 4.4. Detalle de ficha/captura escritorio

Objetivo: permitir revision precisa sin sobrecargar la app.

Debe incluir:

- texto dictado original ficticio;
- ficha estructurada;
- campos editables;
- clasificacion;
- obra asociada;
- proxima accion;
- estado de revision;
- registro de cambios basico.

Criterio UX: debe transmitir trazabilidad y control, especialmente porque hay IA/voz.

### 4.5. Ajustes minimos de V1

Objetivo: no convertir ajustes en ERP.

Debe incluir solo:

- preferencias basicas de visualizacion;
- categorias permitidas;
- aviso de limites de V1;
- estado de entorno: demo/controlado si aplica.

Criterio UX: ajustes no debe abrir puertas a facturacion, cobros, fiscalidad o integraciones reales.

## 5. Componentes visuales clave

### 5.1. Obras

Componentes:

- tarjeta de obra con estado, proxima accion y riesgo;
- timeline corto de capturas;
- chips de material, mano de obra, presupuesto, cobro, aviso y nota;
- indicador de incompleto;
- etiqueta de prioridad;
- boton de dictado asociado a la obra;
- panel de detalle lateral en escritorio.

Criterios:

- cada tarjeta debe ser escaneable en menos de 5 segundos;
- el estado no puede depender solo del color;
- la proxima accion debe estar siempre visible;
- la tarjeta no debe parecer factura ni documento legal.

### 5.2. Voz

Componentes:

- boton principal de dictado;
- estado de escucha;
- transcripcion editable;
- clasificador visual de intencion;
- ficha resultante;
- aviso de baja confianza o dato incompleto;
- accion de confirmar/editar/descartar;
- historial de ultimas capturas.

Criterios:

- la voz debe tener feedback inmediato;
- la correccion manual debe ser rapida;
- el usuario debe poder entender que ha guardado;
- ningun audio real debe usarse sin gate separado;
- no presentar la IA como infalible.

### 5.3. Bandeja administrativa

Componentes:

- cola de revision;
- filtros por tipo de pendiente;
- tarjetas con accion recomendada;
- indicador de origen: voz/manual/futuro OCR placeholder;
- campo faltante destacado;
- accion manual de copiar/preparar;
- cierre o devolucion a pendiente;
- contador de pendientes.

Criterios:

- debe priorizar lo que ahorra tiempo;
- no debe mezclar todo en una lista plana;
- debe separar claramente "preparado" de "enviado" o "facturado";
- debe servir en movil, pero brillar en escritorio.

### 5.4. OCR como expectativa futura controlada

Si aparece OCR en V1, debe ser solo como placeholder evaluado o planificado:

- "Ticket pendiente de revisar" puede existir como tipo de pendiente ficticio.
- No mostrar subida real de facturas/tickets si no esta autorizada.
- No prometer extraccion automatica fiable.
- No mezclar OCR con facturacion legal.

## 6. Criterios de aceptacion antes de presentar mock a Salva

Antes de presentar un mock V1 a Salva, debe cumplir todos estos criterios:

### 6.1. Claridad de valor

- Se entiende en menos de 60 segundos que sirve para capturar por voz, ordenar obras y revisar administracion.
- La pantalla principal no parece agenda generica ni ERP completo.
- El ahorro de tiempo se ve en el flujo, no solo en el texto.

### 6.2. Ajuste al dia a dia del electricista

- Usa lenguaje de obra, material, trabajo realizado, presupuesto, cobro/seguimiento y aviso.
- Tiene ejemplos ficticios realistas pero sin datos reales.
- Da prioridad al movil para captura y al escritorio para revision.

### 6.3. Scannability visual

- Todas las tarjetas tienen estado, contexto y proxima accion.
- Los pendientes estan agrupados por tipo.
- No hay bloques largos de texto operativo.
- Iconos, colores y etiquetas ayudan a decidir.

### 6.4. Control y confianza

- La transcripcion se puede corregir.
- La IA sugiere, no decide sin revision.
- Los datos incompletos se senalan.
- Las acciones automaticas no autorizadas no aparecen como disponibles.

### 6.5. Responsive

- Movil: accion principal usable con una mano y lectura rapida.
- Escritorio: densidad suficiente para revisar varias capturas y obras.
- No hay textos que se corten, botones imposibles de pulsar o estados ocultos.

### 6.6. Alcance y gates

- No se muestra facturacion legal activa.
- No se muestra cobro real.
- No se muestra envio real de WhatsApp.
- No se muestra agenda sincronizada real.
- No se muestra OCR real sobre documentos reales.
- No se muestra produccion, piloto o datos reales.

Si falla cualquiera de estos criterios, el mock queda `aprobado con condiciones` o `bloqueado` segun gravedad antes de pasar a Salva.

## 7. Riesgos UX

### 7.1. Riesgo de agenda con voz

Si la V1 se percibe como una agenda/notas con microfono, no supera el comparador actual: WhatsApp + agenda + ordenador.

Mitigacion: mostrar siempre transformacion de voz a ficha administrativa util.

### 7.2. Riesgo de ERP encubierto

Si se incluyen demasiados modulos, la herramienta pierde foco y aumenta promesa.

Mitigacion: V1 con obras, voz y bandeja; el resto como futuro separado.

### 7.3. Riesgo de correccion excesiva

Si cada dictado exige editar mucho, el usuario abandonara.

Mitigacion: revision por campos minimos, chips editables y guardar como pendiente si no esta completo.

### 7.4. Riesgo de falsa automatizacion

Si el mock sugiere que envia, factura, cobra o sincroniza, puede generar expectativas no autorizadas.

Mitigacion: acciones manuales y copy preciso: preparar, copiar, revisar, cerrar.

### 7.5. Riesgo de baja confianza en IA

Si la IA parece opaca, el usuario no confiara en las fichas.

Mitigacion: mostrar frase original, clasificacion sugerida, campos detectados y edicion.

### 7.6. Riesgo responsive

Si el movil esta cargado como escritorio reducido, fallara en obra. Si el escritorio es demasiado simple, no servira para revision diaria.

Mitigacion: disenar dos modos de uso, no una unica pantalla reescalada.

### 7.7. Riesgo de visual wow sin utilidad

Una interfaz vistosa puede ocultar que no resuelve el dolor.

Mitigacion: cada elemento visual debe responder a estado, prioridad, pendiente o accion.

## 8. Texto breve para consolidado de Gael

Irinas define criterios UX/UI V1 para AD_VOZ electricistas con foco en impacto funcional, no en decoracion: movil para captura rapida por voz en contexto de obra, escritorio para revision administrativa al final del dia, seguimiento visual de obras y bandeja de pendientes revisable. El V0 falla como referencia porque se percibe generico, no demuestra suficientemente el dia a dia del electricista, no convierte la voz en flujo completo y puede inducir promesas de ERP/automatizacion fuera de alcance. Antes de presentar mock a Salva, la V1 debe ser scannable, visual, entendible en menos de 60 segundos, con datos ficticios, sin integraciones reales, sin facturacion/cobros activos y con IA siempre revisable.

## 9. Veredicto Irinas

Veredicto: aprobado con condiciones.

Condiciones:

- Crear mock solo despues de validar estos criterios como marco UX.
- Mantener V1 limitada a voz, obras y bandeja administrativa.
- Usar solo datos ficticios/controlados.
- No introducir automatizaciones, facturacion, cobros, WhatsApp real, agenda real ni OCR real como funciones activas.
- Revisar responsive movil/escritorio antes de presentar a Salva.

Archivo creado:

`/home/salamirin/.openclaw/workspace/AD_VOZ_electricistas/IRINAS_CRITERIOS_UX_UI_V1_AD_VOZ_2026_07_28.md`
