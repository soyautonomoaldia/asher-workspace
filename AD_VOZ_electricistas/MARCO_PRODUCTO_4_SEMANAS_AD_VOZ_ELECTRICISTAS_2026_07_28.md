# Marco producto 4 semanas AD_VOZ electricistas - 2026-07-28

Owner operativo: Gael
Decision final: Salva
Usuario inicial: familiar autonomo electricista de Salva
Estado: marco operativo incorporado por instruccion de Salva

## Decision real planteada por Salva

Desarrollar una aplicacion web y movil para un autonomo electricista que reduzca la gestion administrativa diaria y el seguimiento de obras mediante comandos de voz, inteligencia artificial y una interfaz altamente visual.

El proyecto deja de ser solo exploracion estrecha de mock conceptual. La finalidad pasa a ser planificar y coordinar desarrollo de producto para que el familiar pueda empezar a utilizarlo en septiembre en su dia a dia, bajo sus directrices.

## Requisitos operativos incorporados

### UX/UI

- Interfaz limpia, muy scannable, intuitiva y responsive.
- Debe funcionar en movil y escritorio.
- Debe generar impacto visual y confianza de uso, no solo representar campos administrativos.
- El mock de baja fidelidad V0 queda rechazado como insuficiente.

### IA y voz

- La voz pasa a ser input central del producto.
- Evaluar reconocimiento de voz con Whisper de OpenAI, Web Speech API u otra alternativa viable.
- Procesamiento de lenguaje natural para interpretar ordenes de trabajo, materiales, pendientes, cobros, presupuestos, obras y seguimiento.
- No usar audios reales sin gate especifico de privacidad, consentimiento, almacenamiento, cifrado y borrado.

### OCR

- OCR queda como modulo a consultar con el familiar antes de aprobar alcance.
- Opciones a evaluar: Tesseract, Google Cloud Vision, AWS Textract u otra alternativa.
- No procesar tickets, facturas, fotos o PDFs reales hasta definir datos, consentimiento, retencion, cifrado, responsable y limites RGPD.

### Seguridad, RGPD y datos sensibles

- La parte legal debe estar presente en todos los apartados del proyecto.
- Facturacion, fiscalidad y datos bancarios quedan bloqueados parcialmente hasta analisis especifico.
- Todo modelo de datos debe contemplar datos permitidos, datos prohibidos, cifrado, almacenamiento, retencion, borrado, acceso y trazabilidad.
- No se aprueba produccion ni uso real con datos sensibles sin gate separado.

### Seguimiento de obras

- Seguimiento de obras pasa de opcional a modulo aprobado dentro del marco producto.
- Debe tratarse como modulo funcional, no como simple etiqueta.
- Alcance minimo candidato: obra, estado, tareas, material, pendientes, notas por voz, proxima accion y resumen visual.

### Automatizaciones

- Las automatizaciones externas siguen sin ejecutarse ahora, pero deben quedar en roadmap de 4 semanas como dependencias futuras.
- Deben diferenciarse automatizaciones internas seguras de automatizaciones externas con clientes, WhatsApp, agenda, facturacion, cobros o gestoria.
- Cualquier automatizacion externa requiere gate de Salva, RGPD y seguridad.

### Build y direccion tecnica

- El nuevo marco exige direccion tecnica.
- Objetivo tecnico recomendado: web responsive/PWA primero, adaptable a movil y escritorio, antes de app nativa.
- La ejecucion tecnica debe dividirse por fases, no intentar ERP completo desde el primer sprint.

## Fases para pasar de estrecho a amplio

### Semana 1 - Fundacion critica y alcance V1

Objetivo: fijar producto V1 sin sobredimensionar.

Entregables:

- mapa de modulos V1, V1.5 y futuro;
- modelo de datos preliminar con clasificacion RGPD;
- flujo principal movil;
- flujo principal escritorio;
- decision tecnica web responsive/PWA vs alternativa;
- preguntas cerradas al familiar sobre OCR, obras, facturacion, cobros y automatizaciones.

Gate:

- Salva aprueba alcance V1 y preguntas al familiar.

### Semana 2 - UX/UI de impacto y arquitectura

Objetivo: crear experiencia visual fuerte antes de build.

Entregables:

- prototipo visual V1 revisado por UX/Producto antes de Salva;
- dashboard diario altamente scannable;
- modulo obras visual;
- bandeja de voz y tarjetas inteligentes;
- arquitectura tecnica de frontend, backend, IA/voz, OCR y seguridad;
- criterios de exito de uso diario.

Gate:

- Salva aprueba prototipo visual y arquitectura candidata.

### Semana 3 - Build prototipo funcional controlado

Objetivo: construir una primera version funcional con datos ficticios o controlados.

Entregables:

- app web responsive/PWA base;
- captura de voz o simulacion tecnica aislada segun viabilidad;
- parser IA para convertir comandos en tarjetas;
- modulo obras basico;
- modelo de datos con cifrado planificado;
- OCR solo como spike o placeholder si el familiar aun no ha aprobado alcance.

Gate:

- no usar datos reales sin aprobacion especifica.

### Semana 4 - Preparacion uso septiembre

Objetivo: dejar una version candidata para uso controlado.

Entregables:

- version alpha con flujo diario completo;
- revision RGPD minima antes de datos reales;
- checklist de seguridad;
- plan de onboarding del familiar;
- plan de incidencias y soporte;
- decision de piloto septiembre: usar, recortar o bloquear.

Gate:

- Salva aprueba o bloquea uso real de septiembre.

## Riesgos principales

- Scope demasiado amplio para cuatro semanas.
- Promesa ya hecha al familiar, generando presion de entrega y sesgo de confirmacion.
- Riesgo de construir para una persona sin separar necesidad real, capricho funcional y producto escalable.
- Riesgo legal por facturacion, fiscalidad, datos bancarios, datos de clientes, audios y documentos.
- Riesgo tecnico en voz/OCR: precision insuficiente puede destruir confianza.
- Riesgo UX: si exige revisar demasiado, no ahorra tiempo.
- Riesgo comercial: puede convertirse en ERP a medida sin mercado replicable.

## Criterio duro de avance

El proyecto solo debe avanzar si cada semana produce evidencia verificable:

- problema real mejor definido;
- experiencia visual superior al mock V0;
- reduccion clara de friccion administrativa;
- limites legales y tecnicos visibles;
- modulo obras entendido;
- OCR y automatizaciones evaluadas sin prometerlas antes de tiempo.

## Estado tras esta incorporacion

- `mockups/ad-voz-electricistas-mock-conceptual.html` queda rechazado como V0.
- El source estrecho anterior queda superado parcialmente por este marco, pero no autoriza datos reales, piloto, produccion, facturacion legal, cobros, WhatsApp real, agenda real, OCR real con documentos reales ni automatizaciones externas sin gates separados.
- La siguiente decision operativa es aprobar o ajustar este marco como base de planificacion de cuatro semanas.
