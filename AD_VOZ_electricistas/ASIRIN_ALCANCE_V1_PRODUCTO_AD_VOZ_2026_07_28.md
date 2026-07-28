# Asirin - Alcance V1 Producto AD_VOZ electricistas - 2026-07-28

Proyecto: AD_VOZ_electricistas  
Rol: Asirin / Producto  
Fuente activa: `/home/salamirin/.openclaw/workspace/AD_VOZ_electricistas/SOURCE_OF_TRUTH_ad_voz_electricistas.md`  
Plan activo: `/home/salamirin/.openclaw/workspace/AD_VOZ_electricistas/PLAN_OPERATIVO_4_SEMANAS_AD_VOZ_ELECTRICISTAS_2026_07_28.md`

## Veredicto producto

Aprobado con condiciones.

La V1 puede definirse como una herramienta de captura por voz, seguimiento visual de obras y bandeja administrativa revisable para reducir friccion diaria del electricista. No debe venderse ni presentarse como ERP, facturador, gestor automatico, OCR completo ni automatizador de gestiones.

Condiciones:

- Salva debe aprobar este alcance antes de activar build o presentacion externa.
- El familiar solo aporta feedback via Salva.
- No se usan datos reales, audios reales, facturas, tickets, datos fiscales, bancarios, direcciones completas ni documentos reales sin gate especifico.
- OCR y automatizaciones se evaluan y planifican, pero no quedan completas ni activadas en V1.
- Si el valor esperado depende de facturacion, cobro o automatizacion real inmediata, esta V1 debe recortarse, replanificarse o bloquearse.

## 1. Propuesta V1 dentro / fuera

### Dentro de V1

1. Captura por voz como input principal.
   - Dictado rapido desde movil.
   - Transcripcion a texto revisable.
   - Clasificacion asistida del dictado en obra, material, tarea, pendiente, presupuesto pendiente, cobro pendiente o nota.
   - Correccion manual rapida cuando la voz o la IA fallen.

2. Seguimiento visual de obras.
   - Lista o tablero de obras activas.
   - Estado simple: pendiente, en curso, esperando material, esperando cliente, pendiente de presupuesto, pendiente de cobro, cerrado.
   - Ficha de obra con cliente ficticio/controlado, ubicacion no sensible, tareas, materiales, notas, proximas acciones y pendientes administrativos.
   - Resumen visual para saber que hacer hoy o que revisar por la tarde.

3. Bandeja administrativa revisable.
   - Tarjetas generadas desde voz o entrada controlada.
   - Pendientes por revisar, completar, copiar, cerrar o mover a una obra.
   - Texto copiable/manual para preparar WhatsApp, presupuesto, recordatorio o revision posterior, sin envio automatico.
   - Filtros simples por tipo: materiales, trabajo realizado, presupuesto, cobro, cliente, obra, aviso.

4. Flujo movil + escritorio.
   - Movil: captura rapida en obra o desplazamiento.
   - Escritorio: revision tranquila de pendientes, obras y administracion.
   - Web responsive/PWA como opcion preferente inicial, pendiente de validacion tecnica.

5. Seguridad y limites visibles desde el modelo.
   - Datos ficticios/controlados en build inicial.
   - Clasificacion de datos por sensibilidad antes de cualquier uso real.
   - Retencion, borrado, acceso y cifrado definidos antes de piloto real.

### Fuera de V1

- Facturacion legal completa.
- Cobros reales o gestion bancaria.
- Fiscalidad, modelos, asesoria o gestoria.
- Envio automatico de WhatsApp, email, SMS o comunicaciones a clientes.
- Integracion real con agenda, WhatsApp, bancos, CRM, contabilidad o sistemas externos.
- OCR completo con tickets, facturas, fotos o PDFs reales.
- Automatizaciones externas con clientes o terceros.
- Rutas, agenda avanzada o planificacion automatica de desplazamientos.
- ERP completo de clientes, facturas, presupuestos, gastos, fiscalidad y gestoria.
- Produccion, pricing o posicionamiento publico.

## 2. Mapa V1 / V1.5 / futuro

| Modulo | V1 | V1.5 | Futuro |
| --- | --- | --- | --- |
| Voz | Captura y transcripcion con frases ficticias/controladas; edicion manual | Mejora de precision, comandos mas robustos, plantillas por tipo de tarea | Voz avanzada contextual, aprendizaje de patrones del usuario |
| IA/parser | Clasificar dictados en tarjetas revisables | Extraer campos con mas fiabilidad y sugerir acciones | Automatizacion condicionada por reglas aprobadas |
| Obras | Seguimiento visual basico con estados, tareas, materiales, pendientes y proxima accion | Historial, filtros mejores, vista semanal, prioridades | Gestion avanzada de obra, tiempos, rentabilidad y equipos |
| Bandeja admin | Revisar, completar, copiar y cerrar pendientes | Agrupacion inteligente, recordatorios internos, prioridades | Flujos semi-automaticos con aprobacion humana |
| Presupuestos | Marcar presupuesto pendiente y guardar notas/materiales | Borrador simple no legal o plantilla copiable | Presupuesto formal y documentacion si Salva lo aprueba |
| Cobros | Marcar cobro pendiente como recordatorio interno | Seguimiento manual mas claro | Integraciones o pagos solo tras gate legal/tecnico |
| OCR | Evaluacion/spike sin datos reales; placeholder de alcance | OCR controlado con documentos ficticios o anonimizados si se aprueba | OCR real con RGPD, consentimiento, retencion y seguridad cerrados |
| Automatizaciones | Mapa de riesgos y dependencias; ninguna externa activa | Automatizaciones internas seguras, sin terceros | WhatsApp/agenda/facturacion/cobros solo con gates separados |
| RGPD/seguridad | Modelo preliminar y datos prohibidos | Checklist prepiloto y almacenamiento definido | Operativa real con controles, auditoria y consentimiento |

## 3. Principal workflow diario del familiar electricista

1. Antes de salir o al empezar el dia, abre la pantalla principal.
   - Ve obras activas, pendientes administrativos y proximas acciones.
   - Prioriza por estados simples: hoy, esperando material, pendiente cliente, pendiente presupuesto, pendiente cobro.

2. Durante una obra o justo al terminar una visita, dicta una nota corta.
   - Ejemplo ficticio: "Obra cocina Lopez, cambiado magnetotermico, faltan dos enchufes estancos, pedir material y preparar presupuesto de remate".
   - La app convierte el dictado en una tarjeta revisable.

3. La app propone clasificacion.
   - Obra relacionada.
   - Trabajo realizado.
   - Material usado o pendiente.
   - Presupuesto/cobro/aviso si aparece en el dictado.
   - Proxima accion.

4. El electricista confirma o corrige en pocos toques.
   - Si la IA falla, la tarjeta queda como nota pendiente, no se pierde.
   - No exige completar todos los campos en el momento.

5. La obra se actualiza visualmente.
   - Cambia estado si procede.
   - Suma materiales o tareas.
   - Crea pendiente administrativo revisable.

6. Al final del dia o por la tarde en ordenador, revisa la bandeja administrativa.
   - Completa huecos.
   - Copia texto para preparar mensaje, presupuesto o recordatorio manual.
   - Cierra pendientes ya resueltos.

7. La pantalla vuelve a dejar claro que queda abierto.
   - Obras sin siguiente accion.
   - Material por pedir.
   - Presupuestos pendientes.
   - Cobros pendientes.
   - Notas sin clasificar.

## 4. Riesgos de scope y de promesa hecha

### Riesgos de scope

- Convertir la V1 en un ERP completo por copiar la referencia Lovable.
- Meter facturacion, cobros, fiscalidad u OCR real antes de validar si la captura diaria ya ahorra tiempo.
- Tratar "automatizar gestiones" como requisito V1 cuando todavia es una expectativa peligrosa.
- Disenar una agenda generica en vez de un flujo de obras, materiales y administracion posterior.
- Sobrecargar la captura con campos obligatorios y destruir la utilidad de la voz.
- Construir para un unico caso familiar sin separar necesidad real de preferencia puntual.

### Riesgos de promesa hecha

- El familiar ya puede esperar facturacion o automatizacion, no solo organizacion revisable.
- Si se presenta como IA que "gestiona todo", la V1 decepcionara aunque funcione.
- Si la voz requiere mucha correccion, la promesa de ahorro de tiempo se rompe.
- Si OCR se menciona como funcionalidad lista, se abre riesgo tecnico, legal y de confianza.
- Si se permite uso real sin RGPD, la presion del piloto puede superar los limites aprobados.

Copy limite recomendado:

> Primera version para dictar rapidamente lo ocurrido en obras, ordenar materiales, tareas y pendientes, y revisar la administracion despues. No factura, no cobra, no envia mensajes ni automatiza gestiones todavia.

## 5. Preguntas cerradas al familiar que Producto necesita

Maximo 8 preguntas para enviar solo via Salva:

1. Si en septiembre la herramienta solo permite dictar, ordenar obras y revisar pendientes, sin facturar ni automatizar, ¿te serviria para probarla una semana?
   - Si / No / Solo si incluye otra cosa.

2. ¿Donde te ahorraria mas tiempo la voz?
   - Al terminar una obra / Entre visitas / Por la tarde en ordenador.

3. ¿Que te interesa ver primero al abrir la app?
   - Obras activas / Pendientes administrativos / Material pendiente.

4. Para una obra, ¿que estado te seria mas util?
   - En curso / Esperando material / Pendiente de cliente / Pendiente de presupuesto / Pendiente de cobro.

5. ¿Quieres que en V1 los presupuestos sean solo notas y texto copiable, sin documento formal?
   - Si / No.

6. ¿El OCR de tickets/facturas es imprescindible para empezar en septiembre?
   - Si / No / Puede esperar.

7. ¿Que automatizacion echarias mas de menos si no esta en V1?
   - WhatsApp / Agenda / Facturacion / Cobros / Ninguna para empezar.

8. ¿Cuanta correccion manual aceptarias despues de dictar?
   - Casi nada / Unos pocos toques / Me da igual si queda ordenado.

## 6. Criterios de bloqueo

Bloquear o replanificar V1 si ocurre cualquiera de estos casos:

- El familiar confirma que sin facturacion real, cobros reales o automatizaciones externas no hay valor suficiente.
- La voz no convierte dictados ficticios/controlados en tarjetas utiles con friccion asumible.
- La UX no permite entender obras, pendientes y administracion en menos de 60 segundos.
- La bandeja administrativa aumenta trabajo en vez de reducir caos.
- OCR se vuelve condicion minima de septiembre antes de tener base RGPD y tecnica.
- No hay modelo de datos con datos permitidos, prohibidos, retencion, borrado, cifrado y acceso antes de usar datos reales.
- Salva no aprueba alcance, preguntas y limites antes de avanzar.
- El build deriva hacia ERP completo.
- No aparece evidencia de ahorro real de tiempo frente a WhatsApp + agenda + tarde de ordenador.

## 7. Texto breve para consolidado de Gael

Producto aprueba con condiciones una V1 recortada para AD_VOZ electricistas: captura por voz, seguimiento visual de obras y bandeja administrativa revisable. La V1 debe ayudar al familiar a dictar lo ocurrido en obra, convertirlo en tarjetas utiles, actualizar obras y revisar pendientes por la tarde, sin prometer ERP completo. Quedan fuera de V1 facturacion legal, cobros, WhatsApp/agenda real, OCR con documentos reales y automatizaciones externas. OCR y automatizaciones se evaluan para V1.5/futuro. Gate clave: Salva debe aprobar alcance y preguntas; si el familiar exige facturacion, cobro u automatizacion real inmediata como condicion de valor, se bloquea o replanifica.

## Cierre

Archivo creado: `/home/salamirin/.openclaw/workspace/AD_VOZ_electricistas/ASIRIN_ALCANCE_V1_PRODUCTO_AD_VOZ_2026_07_28.md`

Veredicto: aprobado con condiciones.
