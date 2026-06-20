# MERCURY_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Mercury
Area: mercado real, segmentos posibles, competencia directa/indirecta, senales de traccion, pricing, riesgo de falso positivo y criterios de invalidacion.
Fuente operativa interna usada: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## Alcance Y Estado

### Hecho

`nuevo_AD_V01` esta en definicion y no tiene autorizacion para validacion, reclutamiento, mensajes externos, mock operativo, build, pricing publico, datos reales, pagos, produccion ni integraciones.

La hipotesis operativa activa anterior estaba centrada en registrar y conservar gastos profesionales cerca del momento de pago mediante foto y contexto breve.

La tesis nueva a estudiar amplia el problema hacia un gestor/ERP minimo por voz para autonomos y microequipos de oficio, con clientes, avisos/trabajos, presupuestos simples, cobros pendientes, gastos/justificantes, tareas, notas, fotos, materiales pendientes y cierre para gestoria.

La referencia conceptual de producto, `https://mindful-manage-ai.lovable.app`, no cargo contenido operativo navegable mas alla de la pantalla inicial. Uso el resumen aportado por el agente principal: "Voz-Gestion - ERP por voz para autonomos y Pymes", con rutas de login, dashboard, clientes, avisos/obras, presupuestos, facturas, gastos, recordatorios, manual, ajustes y gestoria.

### Supuesto

La tesis intenta capturar una oportunidad mayor que "gastos": el autonomo de oficio no solo pierde tickets, tambien pierde seguimientos, presupuestos, cobros, notas de trabajo, materiales pendientes y contexto para gestoría.

### Riesgo

La ampliacion puede convertir `nuevo_AD_V01` en un ERP generico antes de demostrar un dolor vendible. Cuanto mas se parezca a facturacion, CRM, partes, agenda, cobros, gastos y gestoria, mas compite contra software existente y mas suben los riesgos legales, fiscales, de privacidad y soporte.

### Decision Requerida

Salva debe decidir si esta tesis sustituye la hipotesis activa de gastos o si solo se mantiene como comparativa interna no operativa.

### Condicion De Desbloqueo

No debe desbloquear nada externo hasta que exista una ficha aprobada con target unico, buyer, alternativa dominante, promesa minima, no-promesas, datos permitidos, modo de prueba y criterios de invalidacion.

### Siguiente Accion Propuesta

Mantener bloqueado el avance operativo y usar este documento solo para decidir si merece una ficha interna de hipotesis mas estricta.

## Lectura De Mercado Real

### Hecho

El mercado objetivo existe y esta fragmentado. eInforma lista 94.173 empresas en Espana para CNAE 432, instalaciones electricas, fontaneria y otras instalaciones en obras de construccion. INE/CNAE 2025 clasifica dentro de este bloque instalaciones electricas, fontaneria, calefaccion y aire acondicionado.

Tambien existen asociaciones, directorios y marketplaces que hacen localizables a instaladores, fontaneros, electricistas, climatizacion y reformistas. Esto da acceso teorico a leads, pero no demuestra CAC ni conversion.

La categoria de software ya esta activa. Hay productos que prometen gestion movil de clientes, agenda, presupuestos, facturas, partes, gastos, cobros, fotos, WhatsApp, recordatorios, firma y control de equipo. Esto valida que el dolor administrativo-operativo existe, pero debilita la novedad de un "gestor para oficios".

### Supuesto

El hueco posible no esta en "gestionar todo el negocio", sino en capturar por voz lo que hoy queda en memoria, WhatsApp, libreta o notas sueltas, y convertirlo en una lista revisable de proximas acciones.

### Riesgo

El tamano aparente del mercado puede ser un falso positivo. CNAE 432 mezcla autonomos, microempresas, instaladoras medianas, empresas industriales y negocios con necesidades muy distintas. El volumen no equivale a un segmento inicial comprable.

### Decision Requerida

Elegir un primer segmento estrecho. No aceptar "autonomos y Pymes" ni "oficios" como target operativo.

### Condicion De Desbloqueo

El segmento debe poder describirse con oficio, tamano, tipo de trabajo, frecuencia de avisos, frecuencia de presupuestos/cobros/gastos y alternativa actual.

### Siguiente Accion Propuesta

Reducir la tesis a dos candidatos comparables: climatizacion/HVAC residencial-microequipo y fontaneria/reparacion domestica. Reformas y electricidad general no deben ser primer target sin subnicho mas estrecho.

## Segmentos Posibles

### Hecho

Los segmentos plausibles son:

| Segmento | Encaje con voz | Dolor administrativo-operativo | WTP probable | Riesgo de scope |
|---|---:|---:|---:|---:|
| Climatizacion/HVAC residencial y pequeno terciario | Alto | Alto: visitas, mantenimiento, piezas, presupuestos, cobros, revisiones | Medio-alto | Alto si entra RITE, partes tecnicos, certificados, stock o SAT |
| Fontaneros de reparacion domestica | Alto | Medio-alto: avisos, piezas, vueltas, cobros, fotos, WhatsApp | Medio-bajo | Medio si se limita a avisos y cobros |
| Electricistas domesticos | Alto | Medio-alto: presupuestos, materiales, boletines, citas, cobros | Medio | Alto por heterogeneidad y normativa |
| Reformistas | Medio-alto | Muy alto: presupuestos, extras, compras, fases, pagos, fotos | Alto | Muy alto: deriva natural a gestion de obra |
| SAT/mantenimiento tecnico pesado | Alto | Alto: partes, SLA, equipos, recambios, historial | Medio-alto | Muy alto: GMAO/SAT |

### Supuesto

La mejor oportunidad SaaS inicial estaria donde el olvido tenga coste economico concreto: presupuesto no enviado, pieza no pedida, cobro no reclamado, visita no cerrada, gasto no conservado o documentacion mensual incompleta.

### Riesgo

Si se elige por "dolor grande", reformas o SAT parecen atractivos, pero empujan a producto pesado. Si se elige por "voz facil", fontaneria parece atractiva, pero puede tener WTP bajo si muchos avisos se cierran en una visita y se cobran al momento.

### Decision Requerida

Mercury pide decidir entre:

1. HVAC/climatizacion como opcion comercial mas fuerte pero mas delicada por scope.
2. Fontaneria domestica como opcion mas simple para probar comportamiento, con menor WTP probable.

### Condicion De Desbloqueo

El segmento elegido debe excluir explicitamente certificados, boletines, mediciones tecnicas complejas, cumplimiento normativo, mantenimiento reglado, stock avanzado, SAT/GMAO pesado, obra compleja y automatismos externos sin revision humana.

### Siguiente Accion Propuesta

Crear una ficha comparativa interna HVAC vs fontaneria con 5 microtareas maximas por segmento y criterio de invalidacion propio.

## Competencia Directa E Indirecta

### Hecho

Competencia directa o semidirecta observada:

| Competidor | Lectura Mercury |
|---|---|
| STEL Order / STEL Assistant | ERP/facturacion/CRM/compras/stock/agenda con IA y entrada por texto o voz. Planes publicos desde 24 EUR/mes en facturacion Lite y 36 EUR/mes en Business. Riesgo directo si AD promete ERP por voz. |
| PartePro | Partes de trabajo para oficios, presupuestos, fotos, firma, WhatsApp y cobros. Plan autonomo anunciado en 7,99 EUR/mes IVA incluido como precio fundador, publico 9,99 EUR/mes. |
| FixTo | Gestion para reparaciones/oficios: clientes, citas, presupuestos, facturas, cobros, gastos, rentabilidad, WhatsApp y avisos fiscales. Es muy cercano a la tesis ERP minimo. |
| PresuNow | Presupuestos y facturas para instaladores/electricistas con dictado por voz, firma, seguimiento y exportacion para trimestre/gestoria. Desde 11,25 EUR/mes segun pagina publica de electricistas. |
| Holded, Quipu, Declarando, Billin y similares | Facturacion, gastos, impuestos, asesor/gestoria o ERP horizontal. No son de oficio, pero capturan la parte fiscal/administrativa con mas confianza regulatoria. |
| Housecall Pro, ServiceM8 y field-service internacional | Agenda, trabajos, clientes, recordatorios, fotos, cobros, automatizaciones y app de campo. Menos localizados fiscalmente, pero marcan el estandar funcional. |
| Alternativa no software | WhatsApp, llamadas, calendario, notas, libreta, Excel, carpeta de tickets, email a gestoria y memoria. Es el competidor principal por coste cero. |

### Supuesto

AD podria diferenciarse si es mas ligero que STEL/Holded y mas voice-first que PartePro/FixTo/PresuNow, pero solo si evita presentarse como ERP completo.

### Riesgo

La frase "ERP por voz para autonomos y Pymes" es peligrosa. Entra frontalmente contra actores con producto, marca, compliance, precios bajos, soporte y funciones amplias. Si la propuesta es "lo mismo, pero por voz", los incumbentes pueden copiar la entrada por voz mas facilmente que AD construir confianza fiscal/operativa.

### Decision Requerida

Decidir si AD compite como:

1. gestor/ERP minimo;
2. capa de voz sobre microtareas;
3. copiloto de cierre para gestoria;
4. herramienta de gastos y justificantes.

No mezclar las cuatro en MVP.

### Condicion De Desbloqueo

Debe existir una frase de posicionamiento privado que no use "ERP", "contabilidad", "fiscalidad exacta", "sustituye gestoria", "automatiza tu negocio" ni "gestiona todo".

### Siguiente Accion Propuesta

Probar internamente esta formulacion como base no publica: "Dicta al salir del trabajo lo que no puedes olvidar: cobrar, volver, comprar material, pasar presupuesto, guardar gasto o preparar cierre para tu gestoria."

## Senales De Traccion Y Timing

### Hecho

Hay senales de timing:

- La digitalizacion de facturacion y factura electronica empuja a autonomos y pymes a revisar herramientas. La AEAT publico el Real Decreto 238/2026 sobre factura electronica obligatoria B2B.
- STEL Order ha comunicado en 2026 un asistente de IA que ejecuta tareas reales por texto o voz dentro del software, incluyendo facturas, stock y acciones de gestion.
- Productos nuevos o pequenos como PartePro, PresuNow, Presu/Offix y FixTo usan lenguaje de movil, voz, WhatsApp, cobros, presupuestos rapidos y oficios. Esto sugiere una categoria activa.

### Supuesto

El mercado esta mas preparado para "gestionar desde el movil y por voz" que hace unos anos, especialmente si el autonomo trabaja fuera de oficina.

### Riesgo

El timing tambien favorece a competidores que ya tienen producto y compliance. La presion regulatoria de facturacion puede hacer que el autonomo prefiera herramientas certificadas o recomendadas por gestoría antes que un MVP nuevo.

### Decision Requerida

Decidir si `nuevo_AD_V01` se mantiene fuera de facturacion legal y solo prepara informacion para revisar con gestoria, o si pretende emitir documentos. Mercury recomienda no emitir facturas ni prometer cumplimiento fiscal en esta fase.

### Condicion De Desbloqueo

La promesa debe decir que IVA/impuestos son estimados y revisables con gestoria, y que AD no sustituye gestoría ni software fiscal aprobado.

### Siguiente Accion Propuesta

Separar "cierre para gestoria" de "facturacion". Cierre significa resumen y documentos ordenados para revisar, no presentacion fiscal ni calculo exacto.

## Pricing Y WTP

### Hecho

La banda publica de herramientas comparables es sensible al precio:

- PartePro: freemium y plan autonomo anunciado en 7,99 EUR/mes IVA incluido como precio fundador, con precio publico indicado de 9,99 EUR/mes.
- PresuNow: pagina para electricistas con precio desde 11,25 EUR/mes.
- STEL Order: planes publicos de 24 EUR/mes para facturacion Lite y 36 EUR/mes para Business.
- Holded y otras herramientas horizontales compiten desde bandas de entrada bajas o medias, y algunas incluyen Verifactu, escaner de gastos, banco, CRM o gestoría/asesoria segun plan.

### Supuesto

Un precio privado futuro de 9-19 EUR/mes solo tendria sentido si AD es percibido como utilidad ligera. Una banda 19-29 EUR/mes exigiria ahorro de tiempo claro o recuperacion de dinero: cobros pendientes, presupuestos enviados antes, trabajos no olvidados o cierre mensual mucho mas limpio.

### Riesgo

Riesgo de falso WTP: el autonomo puede decir que pagaria por IA/voz, pero elegir una app barata o seguir con WhatsApp cuando haya que pagar. Tambien puede esperar que por 10-20 EUR/mes AD incluya facturacion, impuestos, WhatsApp, gestoría, clientes, gastos y soporte, lo que no es viable para MVP.

### Decision Requerida

No aprobar pricing publico. Si en el futuro se autoriza WTP privada, decidir una pregunta anclada a coste actual, no a entusiasmo:

"Que pierdes hoy al no registrar/cerrar esto: horas, cobros, presupuestos, piezas, justificantes o discusiones con gestoria?"

### Condicion De Desbloqueo

Antes de hablar de precio, el participante futuro deberia demostrar dolor frecuente, alternativa insuficiente y coste percibido. WTP sin esos tres elementos no cuenta.

### Siguiente Accion Propuesta

Mantener una banda interna hipotetica de 9/19/29 EUR solo como instrumento de investigacion futura, no como decision comercial.

## Riesgo De Falso Positivo

### Hecho

La tesis tiene alto atractivo verbal: "ERP por voz", "IA", "no perder papeles", "gestionar desde la furgoneta" y "cerrar para gestoria" suenan utiles.

### Supuesto

El interes verbal sera alto incluso si el producto no es vendible. Muchos autonomos reconocen desorden administrativo, pero eso no significa que cambien habito, paguen o confien datos.

### Riesgo

Falsos positivos probables:

- "Me vendria bien" sin uso recurrente.
- "Lo pagaria" sin coste actual identificado.
- "Por voz es genial" pero no dicta en situacion real por ruido, verguenza, prisa o privacidad.
- "Necesito eso" pero realmente necesita factura electronica, gestoría, WhatsApp automatico, agenda completa o ERP.
- "Los oficios lo necesitan" basado en volumen de mercado, no en comportamiento observable.
- Prototipo demasiado asistido por humanos que ordena mejor que el MVP real.
- Muestra cercana que quiere ayudar a Salva.

### Decision Requerida

Definir por escrito que senales no cuentan como avance: likes, elogios, interes por IA, "lo usaria", aceptacion de demo, curiosidad por precio o participantes no cualificados.

### Condicion De Desbloqueo

Un futuro metodo de evidencia debe medir comportamiento, no opinion: registro cercano al evento, correccion, abandono, retorno sin persecucion y decision economica privada.

### Siguiente Accion Propuesta

Antes de cualquier validacion, crear una plantilla de evidencia donde cada hallazgo se clasifique como comportamiento observado, dato declarado, inferencia o ruido.

## Criterios De Invalidacion

### Hecho

La fuente activa exige hipotesis falsables, criterios de invalidacion y sign-off. La tesis ERP por voz todavia no tiene umbrales propios.

### Supuesto

La tesis solo deberia sobrevivir si demuestra un dolor mas fuerte que una app de notas y mas simple que un ERP.

### Riesgo

Sin criterios duros, el equipo puede seguir ampliando alcance cada vez que aparezca una objecion: "anadimos facturas", "anadimos WhatsApp", "anadimos gestoría", "anadimos stock", "anadimos cumplimiento". Eso impediria aprender si existe un MVP SaaS defendible.

### Decision Requerida

Aceptar de antemano estos criterios de bloqueo/reformulacion para una fase futura, si Salva la autoriza:

- Si 3 de 5 cualificados dicen que la necesidad minima es facturacion legal, Verifactu, impuestos exactos o sustitucion de gestoría, bloquear esta tesis MVP.
- Si 3 de 5 exigen agenda completa, WhatsApp automatico, integraciones, banco, stock avanzado, partes firmados o SAT/GMAO, reformular fuera de MVP.
- Si menos de 2 de 5 identifican un coste economico concreto por olvidos/cierres desordenados, bloquear como SaaS.
- Si menos de 2 de 5 aceptan una WTP privada compatible con al menos 9-19 EUR/mes despues de reconocer dolor, bloquear monetizacion directa.
- Si la voz no se usa en contexto real por al menos 3 de 5, reformular a texto/WhatsApp o bloquear "voz-first".
- Si el flujo necesita mas de 5 campos obligatorios para aportar valor, bloquear por complejidad.
- Si la confianza en datos no pasa con minimizacion clara, bloquear antes de capturar datos reales.

### Condicion De Desbloqueo

Salva debe aprobar criterios de avance y paro antes de cualquier contacto o prueba futura.

### Siguiente Accion Propuesta

Convertir estos criterios en una tabla de decision futura: avanzar, reformular, bloquear o descartar.

## Recomendacion Mercury

### Hecho

La tesis de gestor/ERP minimo por voz tiene mercado real, competencia real y timing favorable. Tambien tiene un riesgo mayor que la tesis de gastos: se acerca de inmediato a facturacion, gestoría, ERP, field service y cumplimiento.

### Supuesto

La oportunidad defendible, si existe, probablemente no es "ERP por voz", sino "captura por voz de microcierres operativos y administrativos para no olvidar dinero, trabajo o documentos".

### Riesgo

Si se comunica o disena como ERP, `nuevo_AD_V01` queda atrapado entre dos alternativas mejores:

- suites completas con compliance, soporte y funciones;
- herramientas gratis/baratas ya integradas en el habito diario del autonomo.

### Decision Requerida

Mercury recomienda **investigar mas internamente y mantener bloqueado todo avance externo**. No recomiendo aprobar build, mock operativo, validacion, reclutamiento, pricing publico, datos reales ni mensajes externos.

La decision principal pendiente es elegir si la tesis se acota a:

1. HVAC/climatizacion: mayor oportunidad comercial, mayor riesgo de scope.
2. Fontaneria domestica: menor riesgo de MVP, menor WTP probable.
3. Volver a la hipotesis estrecha de gastos si Salva prioriza seguridad y simplicidad.

### Condicion De Desbloqueo

Solo desbloquear una fase posterior cuando existan:

- target unico aprobado;
- buyer economico aprobado;
- alternativa actual dominante;
- promesa minima no fiscal;
- no-promesas visibles;
- datos permitidos/prohibidos;
- modo de prueba aprobado;
- umbrales de invalidacion;
- sign-off formal de owners y Salva.

### Siguiente Accion Propuesta

Preparar una ficha interna comparativa de decision entre `gastos cerca del pago`, `copiloto de microtareas por voz` y `gestor minimo por voz`, sin acciones externas y sin cambiar todavia la fuente operativa.

## Fuentes Publicas Consultadas

- Fuente operativa activa: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`
- Referencia conceptual no operativa: https://mindful-manage-ai.lovable.app
- eInforma, CNAE 432: https://www.einforma.com/informes-sectoriales/cnae-432-empresas-instalaciones-electricas-de-fontaneria-y-otras-instalaciones-en-obras-de-construccion
- INE, CNAE 2025: https://ine.es/daco/daco42/clasificaciones/cnae25/CNAE_2025.pdf
- AEAT, facturacion electronica obligatoria: https://sede.agenciatributaria.gob.es/Sede/todas-noticias/2026/marzo/31/facturacion-electronica-obligatoria.html
- STEL Order precios: https://www.stelorder.com/precio/
- STEL Assistant en prensa: https://cadenaser.com/murcia/2026/03/29/stel-order-presenta-una-herramienta-de-ia-que-ejecuta-tareas-reales-para-autonomos-y-pequenas-empresas-radio-murcia/
- PartePro: https://www.partepro.com/
- FixTo: https://www.fixto.es/
- PresuNow electricistas: https://presunow.com/es/electricistas
- PresuNow comparativa Quipu: https://presunow.com/es/comparar/presunow-vs-quipu
- Holded precios: https://www.holded.com/es/precios
- Holded autonomos: https://www.holded.com/es/autonomos
