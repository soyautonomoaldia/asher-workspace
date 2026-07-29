# Consolidado parcial Semana 1 AD_VOZ - 2026-07-28

Owner operativo: Gael
Proyecto: AD_VOZ_electricistas
Semana: 1
Estado: parcial, no listo para build

## Contexto

Salva aprobo avanzar con el escenario mas probable y reforzo la regla operativa: Gael debe liderar, avanzar sin esperar cuando no haya gate de Salva, coordinar owners y no ejecutar tareas especializadas que correspondan al equipo.

Gael activo Semana 1 mediante:

`ACTIVACION_SEMANA_1_AD_VOZ_2026_07_28.md`

## Entregables recibidos

### Producto / Asirin

Archivo:

`ASIRIN_ALCANCE_V1_PRODUCTO_AD_VOZ_2026_07_28.md`

Veredicto: aprobado con condiciones.

Lectura operativa:

- V1 valida como captura por voz, seguimiento visual de obras y bandeja administrativa revisable.
- La V1 no debe presentarse como ERP, facturador, gestor automatico, OCR completo ni automatizador de gestiones.
- OCR y automatizaciones quedan en V1.5/futuro o spike controlado, no como entrega funcional inmediata.
- Si el familiar exige facturacion, cobro o automatizacion real inmediata como condicion de valor, hay que bloquear o replanificar.

Preguntas cerradas propuestas por Producto para familiar via Salva:

1. Si en septiembre la herramienta solo permite dictar, ordenar obras y revisar pendientes, sin facturar ni automatizar, ¿te serviria para probarla una semana?
2. ¿Donde te ahorraria mas tiempo la voz: al terminar una obra, entre visitas o por la tarde en ordenador?
3. ¿Que te interesa ver primero al abrir la app: obras activas, pendientes administrativos o material pendiente?
4. Para una obra, ¿que estado te seria mas util: en curso, esperando material, pendiente de cliente, pendiente de presupuesto o pendiente de cobro?
5. ¿Quieres que en V1 los presupuestos sean solo notas y texto copiable, sin documento formal?
6. ¿El OCR de tickets/facturas es imprescindible para empezar en septiembre?
7. ¿Que automatizacion echarias mas de menos si no esta en V1: WhatsApp, agenda, facturacion, cobros o ninguna para empezar?
8. ¿Cuanta correccion manual aceptarias despues de dictar: casi nada, unos pocos toques o me da igual si queda ordenado?

### UX / Irinas

Archivo:

`IRINAS_CRITERIOS_UX_UI_V1_AD_VOZ_2026_07_28.md`

Lectura operativa:

- El V0 fallo porque parecia generico, no suficientemente ligado al dia a dia del electricista.
- La voz debe verse como flujo completo: dictar, transcribir, clasificar, crear ficha revisable y dejar una siguiente accion clara.
- Movil y escritorio deben cumplir trabajos distintos: movil para captura rapida en obra; escritorio para revision administrativa de tarde.
- La UI debe mostrar obras, avisos, material, pendientes, presupuesto, cobro, trabajo realizado y revision posterior sin parecer ERP completo.
- No se deben usar promesas como enviado, cobrado, facturado automaticamente o sincronizado con WhatsApp/agenda.

Criterio UX minimo para pasar:

- el familiar debe entender en menos de 60 segundos que la herramienta reduce caos administrativo sin convertirle en administrativo;
- el mock/prototipo debe ser visual, escaneable, laboral y con limites funcionales claros.

### Tecnico / Nathan

Archivo:

`NATHAN_ARQUITECTURA_MODELO_DATOS_V1_AD_VOZ_2026_07_28.md`

Veredicto: aprobado con condiciones.

Lectura operativa:

- V1 tecnica recomendada: web responsive/PWA, no app nativa.
- Stack candidato: React + TypeScript + Vite, backend Node.js + TypeScript, PostgreSQL y API simple.
- Voz: hacer spike con Web Speech API y OpenAI speech-to-text usando frases ficticias/controladas antes de elegir proveedor.
- Parser IA: convertir texto a JSON estructurado con schema cerrado, confianza, campos dudosos y revision humana obligatoria.
- OCR: fuera de V1 real; solo spike con documentos ficticios para decidir V1.5.
- Modelo de datos RGPD preliminar clasifica cliente, obra, captura, audio, documentos OCR y pendientes administrativos como sensibles o de alta atencion.
- No se autoriza audio real, documentos reales, datos de clientes reales, facturacion, cobros, WhatsApp, agenda, automatizaciones, produccion ni integraciones sin gate separado de Salva y checklist RGPD.

Impacto actualizado:

- arquitectura candidata recibida;
- modelo de datos preliminar recibido;
- sigue prohibido pasar a build porque faltan gate de Salva, cierre de adopcion/Mercury y decision de alcance/preguntas.

## Entregables no recibidos

### Growth / Mercury

Archivo esperado:

`MERCURY_ADOPCION_PREGUNTAS_FAMILIAR_V1_AD_VOZ_2026_07_28.md`

Estado: bloqueado por `gateway timeout` en dos intentos.

Reintento posterior:

- mensaje aceptado por OpenClaw para `agent:growth:main`;
- tras ventana corta de control, el archivo no aparece creado.

Impacto:

- no hay criterio de adopcion/growth validado;
- no hay revision independiente de objeciones frente a WhatsApp, agenda y tarde de ordenador;
- las preguntas al familiar pueden avanzar como borrador, pero no deben marcarse como validadas por Mercury.

## Decision operativa de Gael

La Semana 1 queda parcialmente avanzada, pero no cerrada.

Permitido ahora:

- consolidar alcance V1 como borrador para gate de Salva;
- preparar preguntas cerradas a partir de Producto, marcando falta de Mercury;
- reintentar Mercury cuando gateway lo permita;
- mantener source como estado canonico si Trello sigue sin conector visible.

No permitido ahora:

- build;
- prototipo operativo;
- uso con familiar;
- datos reales;
- audios reales;
- OCR real;
- facturacion, cobros, WhatsApp real, agenda real o automatizaciones;
- piloto septiembre;
- produccion.

## Gate de Salva pendiente

No conviene pedir gate final todavia porque faltan Nathan y Mercury.

Gate provisional que Salva puede preparar:

- aprobar o ajustar el alcance V1 recortado: captura por voz, seguimiento visual de obras y bandeja administrativa revisable;
- aprobar o ajustar las preguntas cerradas al familiar, sabiendo que aun falta Mercury.

## Siguiente accion de Gael

Reintentar coordinacion con Tecnico/Nathan y Growth/Mercury. Si siguen bloqueados por runtime, registrar bloqueo tecnico y cerrar Semana 1 como parcial, sin permitir build.
