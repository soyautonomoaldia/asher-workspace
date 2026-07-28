# Plan operativo 4 semanas AD_VOZ electricistas - 2026-07-28

Owner operativo: Gael
Decision final: Salva
Usuario inicial: familiar autonomo electricista de Salva
Base aprobada: escenario mas probable
Horizonte: 2026-07-28 a 2026-08-23
Objetivo operativo: dejar una V1 candidata para uso controlado en septiembre, sin prometer ERP completo.

## Escenario aprobado

V1 recortada a tres nucleos:

1. Captura por voz.
2. Seguimiento visual de obras.
3. Bandeja administrativa revisable.

OCR y automatizaciones quedan evaluadas y planificadas, no completas ni activadas con datos reales.

## Principios de mando

- Gael dirige plan, source, Trello, bloqueos, gates y coordinacion.
- Salva decide gates.
- El familiar aporta directrices a traves de Salva, no por contacto directo de Gael.
- UX/Producto debe revisar cualquier mock o prototipo visual antes de presentarlo a Salva.
- Tecnico debe revisar arquitectura antes de build.
- Seguridad/RGPD debe estar presente desde modelo de datos, no al final.
- Nada real con audios, clientes, facturas, tickets, datos fiscales, datos bancarios o documentos sin gate separado.

## Owners operativos

- Gael: direccion operativa, producto, alcance, source, tablero, gates, consolidacion.
- Salva: decision final, contacto con familiar, aprobaciones de gate.
- Familiar via Salva: necesidades reales, prioridades, feedback de uso esperado.
- UX/Producto: experiencia visual, flujos movil/escritorio, criterios de impacto y scannability.
- Tecnico: arquitectura, stack, viabilidad voz/IA/OCR, seguridad tecnica.
- Growth/Mercury: criterio de adopcion, riesgo de uso diario, comparadores y objeciones de mercado.

## Semana 1 - Alcance V1, preguntas al familiar y base tecnica

Fechas: 2026-07-28 a 2026-08-02

Objetivo:

Definir V1 util sin caer en ERP completo.

Tarjetas operativas:

1. `Definir alcance V1 AD_VOZ escenario probable`
   - Owner: Gael.
   - Entregable: ficha V1 con dentro/fuera.
   - Criterio de exito: V1 cabe en cuatro semanas y separa V1, V1.5 y futuro.

2. `Preparar preguntas cerradas al familiar sobre uso septiembre`
   - Owner: Gael.
   - Decision/envio: Salva.
   - Entregable: maximo 8 preguntas cerradas.
   - Criterio de exito: aclaran obras, voz, OCR, facturacion, cobros, rutina diaria y dolor principal.

3. `Modelo de datos preliminar con clasificacion RGPD`
   - Owner: Tecnico + Gael.
   - Entregable: entidades, datos permitidos/prohibidos, sensibilidad y cifrado esperado.
   - Criterio de exito: ninguna entidad critica queda sin clasificar.

4. `Mapa modulos V1, V1.5 y futuro`
   - Owner: Gael.
   - Entregable: captura voz, obras, bandeja admin, OCR, automatizaciones, facturacion/cobros.
   - Criterio de exito: OCR y automatizaciones quedan planificadas sin invadir V1.

5. `Decision tecnica inicial web responsive/PWA`
   - Owner: Tecnico.
   - Entregable: recomendacion stack y arquitectura candidata.
   - Criterio de exito: viable para movil y escritorio sin app nativa inicial.

Gate fin Semana 1:

- Salva aprueba alcance V1 y preguntas al familiar.
- Si el familiar exige facturacion/automatizacion real inmediata, V1 se recorta o se replanifica.

## Semana 2 - UX/UI de impacto y arquitectura cerrada

Fechas: 2026-08-03 a 2026-08-09

Objetivo:

Crear una experiencia visual que genere confianza y entienda el dia a dia del electricista.

Tarjetas operativas:

6. `Brief UX/UI V1 AD_VOZ`
   - Owner: Gael.
   - Entregable: brief con usuario, contexto, pantallas, tono visual, criterios de impacto.
   - Criterio de exito: UX no disena a ciegas.

7. `Prototipo visual V1 movil`
   - Owner: UX/Producto.
   - Entregable: flujo movil de captura por voz, obras y bandeja admin.
   - Criterio de exito: scannable, rapido, visual y entendible sin explicacion larga.

8. `Prototipo visual V1 escritorio`
   - Owner: UX/Producto.
   - Entregable: dashboard escritorio para revisar obras, pendientes y administracion.
   - Criterio de exito: util para la tarde de ordenador.

9. `Arquitectura tecnica V1`
   - Owner: Tecnico.
   - Entregable: frontend, backend, almacenamiento, IA/voz, seguridad, OCR placeholder/spike.
   - Criterio de exito: lista dependencias, riesgos y decisiones pendientes.

10. `Preflight legal/RGPD V1`
    - Owner: Gael + Tecnico; decision Salva.
    - Entregable: checklist de datos, cifrado, retencion, borrado, consentimiento y exclusiones.
    - Criterio de exito: no se habilita uso real sin datos legalmente tratados.

Gate fin Semana 2:

- Salva aprueba prototipo visual y arquitectura candidata.
- Si UX no supera claramente el V0 rechazado, no se construye.

## Semana 3 - Build funcional controlado

Fechas: 2026-08-10 a 2026-08-16

Objetivo:

Construir una V1 controlada con datos ficticios/controlados, centrada en flujo diario.

Tarjetas operativas:

11. `Construir base app web responsive/PWA`
    - Owner: Tecnico.
    - Entregable: estructura navegable movil/escritorio.
    - Criterio de exito: funciona localmente o en entorno controlado sin datos reales.

12. `Implementar captura voz V1 o spike aislado`
    - Owner: Tecnico.
    - Entregable: Web Speech/Whisper evaluado con frases ficticias.
    - Criterio de exito: convierte dictado en texto con friccion asumible o documenta bloqueo.

13. `Implementar parser IA de comandos administrativos`
    - Owner: Tecnico + Gael.
    - Entregable: clasificacion de dictados en obra, material, pendiente, cobro, presupuesto o nota.
    - Criterio de exito: funciona con ejemplos ficticios representativos.

14. `Modulo seguimiento visual de obras V1`
    - Owner: Tecnico + UX.
    - Entregable: lista/kanban de obras con estado, tareas, material, pendientes y proxima accion.
    - Criterio de exito: el usuario entiende que hacer sin leer bloques largos.

15. `Bandeja administrativa revisable`
    - Owner: Tecnico + UX.
    - Entregable: tarjetas pendientes de revisar, completar, copiar o cerrar.
    - Criterio de exito: reduce caos, no anade trabajo.

16. `OCR alcance y spike sin datos reales`
    - Owner: Tecnico.
    - Entregable: comparativa Tesseract/Cloud Vision/Textract y spike con documento ficticio si procede.
    - Criterio de exito: recomendacion para V1.5, no inclusion forzada en V1.

Gate fin Semana 3:

- V1 debe demostrar flujo diario completo con datos ficticios.
- Si voz/parser falla, V1 pasa a captura manual asistida y voz queda como riesgo tecnico.

## Semana 4 - Alpha candidata septiembre

Fechas: 2026-08-17 a 2026-08-23

Objetivo:

Preparar uso controlado en septiembre, con limites claros y plan de soporte.

Tarjetas operativas:

17. `Cerrar alpha V1 AD_VOZ`
    - Owner: Tecnico + Gael.
    - Entregable: version candidata con flujo diario, obras y bandeja admin.
    - Criterio de exito: demo usable sin explicar la herramienta diez minutos.

18. `Checklist RGPD y seguridad pre-piloto`
    - Owner: Gael + Tecnico; decision Salva.
    - Entregable: datos permitidos, cifrado, almacenamiento, retencion, borrado, acceso y consentimiento.
    - Criterio de exito: no hay uso real con datos sensibles sin decision.

19. `Plan onboarding familiar septiembre`
    - Owner: Gael; ejecucion externa Salva.
    - Entregable: guia de arranque, limite de uso, que probar, que no probar, como reportar fallos.
    - Criterio de exito: el familiar sabe que usar y que no esperar.

20. `Plan soporte e incidencias`
    - Owner: Gael + Tecnico.
    - Entregable: canal de feedback, registro de errores, priorizacion y criterio de parada.
    - Criterio de exito: si falla en uso real, se aprende sin improvisar.

21. `Decision piloto septiembre`
    - Owner: Salva.
    - Entregable: usar, recortar, retrasar o bloquear.
    - Criterio de exito: decision tomada con evidencia tecnica, UX y RGPD.

Gate fin Semana 4:

- Salva aprueba o bloquea uso controlado en septiembre.
- Si no hay seguridad/RGPD suficiente, se permite demo interna, no uso real.

## Criterios de exito V1

- El familiar entiende el valor en menos de 60 segundos.
- La pantalla principal muestra obras, pendientes y administracion sin ruido.
- Una orden de voz ficticia/controlada se convierte en tarjeta util.
- El seguimiento de obras tiene estado, material, pendiente y proxima accion.
- La bandeja administrativa permite revisar y cerrar trabajo pendiente.
- OCR queda decidido como V1.5, descartado o pendiente de consulta.
- Automatizaciones quedan clasificadas por riesgo y prioridad.
- No hay tratamiento de datos reales sin gate.

## Criterios de bloqueo

- El familiar pide facturacion/cobros/automatizacion real como condicion minima inmediata.
- La voz exige demasiada correccion manual.
- La UX no supera el V0 rechazado.
- No hay modelo de datos y RGPD claro antes de usar datos reales.
- El build deriva a ERP completo.
- No hay evidencia de ahorro de tiempo.

## Trello - estructura a trasladar

Listas:

- `Semana 1 - Alcance`
- `Semana 2 - UX/Arquitectura`
- `Semana 3 - Build controlado`
- `Semana 4 - Alpha septiembre`
- `Bloqueado / Gate Salva`
- `Hecho`

Etiquetas:

- `V1`
- `UX/UI`
- `Tecnico`
- `IA/Voz`
- `OCR`
- `RGPD`
- `Obras`
- `Gate Salva`
- `Familiar via Salva`

## Estado operativo

Este plan no autoriza por si solo:

- contacto directo de Gael con el familiar;
- datos reales;
- audios reales;
- tickets/facturas reales;
- datos fiscales o bancarios;
- produccion;
- piloto real;
- OCR real sobre documentos reales;
- facturacion legal;
- cobros;
- WhatsApp real;
- agenda real;
- automatizaciones externas.

Todo lo anterior requiere gate especifico de Salva.

## Siguiente accion

Trasladar este plan a Trello y activar Semana 1. Si Trello no esta disponible en runtime, mantener source como estado canonico y reportar bloqueo tecnico de tablero.
