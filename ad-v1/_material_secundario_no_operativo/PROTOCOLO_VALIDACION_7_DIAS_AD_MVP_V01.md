# Piloto semiautomatizado de validación de 7 días - AD MVP V01

Fecha: 2026-06-02

## Fuentes activas

Este documento usa únicamente:

- `AD_MVP_SOURCE_OF_TRUTH_V02.md`
- `DEFINICION_INICIAL_AD_MVP_VOZ_RELANZAMIENTO_FINAL_V01.md`

No usa contexto AD anterior, CRM heredado, leads heredados, pricing heredado, outreach heredado, scope heredado ni claims de validación anteriores.

## Objetivo

Validar si el nuevo AD MVP resuelve un dolor real para autónomos de campo/movilidad mediante un piloto semiautomatizado de registro de gastos con foto, voz y confirmación mínima.

El piloto debe responder una pregunta central:

> ¿El usuario registra gastos reales en el momento porque el flujo reduce pérdida de tickets, acumulación de papeleo y estrés administrativo, o solo lo hace por estar en un piloto observado?

Salva no debe operar el piloto. Su papel queda limitado a aprobar límites, mensajes, consentimiento y decisión final.

## Hipótesis

### Hipótesis de usuario

El usuario objetivo son autónomos de campo/movilidad con gastos frecuentes y baja tolerancia al software administrativo.

Ejemplos:

- reformas
- técnicos
- instaladores
- mantenimiento
- electricidad
- fontanería
- climatización
- SAT

### Hipótesis de dolor

El dolor principal no es "tener una app de gastos", sino evitar:

- perder tickets
- acumular papeleo para el fin de semana o final de mes
- picar facturas a mano
- reconstruir gastos desde extractos desordenados
- llegar con estrés a la entrega de documentación a gestoría

### Hipótesis de workflow

Cuando el usuario termina un trabajo fuera de oficina o realiza un gasto del negocio, quiere registrar y archivar el gasto en el momento con foto y voz.

El registro mínimo debe conservar:

- foto/documento
- fecha
- proveedor
- importe
- IVA si aplica
- categoría
- nota de contexto
- posibilidad de exportar o compartir para revisión posterior

### Hipótesis de valor

El valor aparece si el flujo:

- reduce fricción frente a guardar tickets o picar datos después
- evita pérdida de documentos
- reduce el trabajo administrativo acumulado
- genera confianza suficiente para revisar o enviar a gestoría
- crea una razón económica o práctica para pagar

### Hipótesis de monetización

El piloto no valida pricing público ni cobros reales.

Solo mide señales iniciales de monetización:

- aceptación verbal de pago
- interés en preventa o piloto
- petición de seguir usando el flujo
- identificación clara de quién pagaría
- razón concreta por la que pagaría

No se debe cobrar, abrir preventas reales ni comunicar precios sin aprobación explícita de Salva.

## Diseño del piloto semiautomatizado

Duración: 7 días naturales.

Muestra: 5 usuarios.

Contexto: uso real durante jornada laboral.

Unidad de evidencia: gasto profesional real ocurrido durante el piloto.

Principio operativo: el usuario captura el gasto con una carga mínima; la consolidación, análisis y auditoría se hacen por el equipo sin depender de Salva.

No cuentan como evidencia principal:

- gastos inventados
- simulaciones
- registros reconstruidos varios días después
- uso artificial para complacer al equipo

Sí puede hacerse una micro-simulación inicial con un gasto ficticio para explicar el flujo, pero la validación principal debe venir de gastos reales.

## Responsabilidades

Responsable único de consolidación: Gael.

- Gael coordina el piloto, consolida resultados, separa hechos de hipótesis y prepara la recomendación final.
- Mercury audita calidad de evidencia, sesgos, métricas y criterios de muerte/continuación.
- Nathan valida viabilidad técnica, límites de datos, privacidad y riesgos de herramientas usadas.
- Irinas revisa fricción real, confianza, lenguaje e instrucciones para participantes.
- Asirin controla alcance MVP y evita expansión prematura de funcionalidades.
- Salva aprueba límites, mensajes, consentimiento y decisión final. No coordina participantes, no limpia datos, no persigue respuestas y no opera la consolidación.

## Herramienta y proceso concreto

### Herramienta decidida

Herramienta del piloto sin coste:

- Tally: formulario móvil principal de captura.
- Google Sheets: tabla automática de respuestas.
- Google Drive: repositorio controlado de archivos y exportación.
- Email inicial: `soyautonomoaldia@gmail.com`, solo para contacto, coordinación, envío del enlace de Tally y dudas básicas.

Tally es el canal principal de captura de tickets, audios/contexto y campos mínimos. El email no debe convertirse en canal principal de captura.

Carrd no forma parte del flujo de validación. Solo se considerará si más adelante hace falta una página informativa separada del piloto.

### Flujo del participante

Por cada gasto real:

1. Abre el enlace de Tally desde el móvil.
2. Acepta el consentimiento la primera vez o confirma que ya lo aceptó.
3. Sube foto del ticket/factura/documento.
4. Añade nota de voz o contexto breve escrito.
5. Completa los campos mínimos que Tally pida.
6. Marca una opción mínima: "registrado en el momento", "registrado más tarde" o "no pude registrarlo".

No se le pide completar una ficha administrativa larga.

Límites de archivo:

- máximo 10 MB por archivo
- si el archivo supera el límite, el participante debe usar una foto más ligera o comprimir/repetir captura
- si Tally bloquea el uso real, se registra la incidencia y se permite fallback excepcional

### Análisis semiautomatizado

El sistema o proceso interno debe consolidar automáticamente, en la medida posible:

- usuario pseudonimizado
- fecha/hora de captura
- foto/documento recibido
- audio o texto recibido
- canal usado
- indicador de registro en el momento o tarde
- estado de extracción: correcto / corregido / no extraído
- campos mínimos extraídos: fecha, proveedor, importe, IVA si aparece, categoría y nota

La extracción por OCR/STT puede usarse como apoyo de validación, pero toda intervención humana debe quedar registrada. Si el equipo corrige datos sin marcarlo, se falsea la evidencia.

Google Sheets será la tabla base de respuestas. Google Drive será el repositorio controlado de fotos/audios y el espacio de exportación. El acceso al Sheet y Drive debe estar restringido al equipo responsable.

Email y mensajería:

- `soyautonomoaldia@gmail.com` se usa para contacto inicial, coordinación, envío del enlace de Tally y dudas básicas.
- Si un participante envía excepcionalmente un ticket/audio por email, se registra como excepción y se traslada al repositorio controlado.
- WhatsApp/Telegram solo se habilitan como fallback si Tally bloquea el uso real.
- Cualquier fallback debe etiquetarse en la tabla para no contaminar la lectura de fricción de Tally.

### Carga de Salva

Salva solo interviene en:

- aprobar herramienta/canal antes de ejecutar
- aprobar texto de consentimiento
- aprobar mensaje inicial a participantes
- revisar recomendación final y decidir continuar, pivotar o matar

No interviene en:

- reclutamiento operativo
- recordatorios diarios
- limpieza de datos
- clasificación operativa
- consolidación de métricas
- seguimiento de participantes

## Usuarios objetivo

### Criterios de inclusión

Cada participante debe cumplir:

- Es autónomo o microempresario de campo/movilidad.
- Tiene al menos 5 gastos profesionales semanales fuera de oficina.
- Actualmente gestiona tickets de forma imperfecta o tardía.
- Usa algún método como carpeta, WhatsApp, email, Excel, caja de tickets o gestoría.
- Reconoce dolor por pérdida, acumulación o cierre administrativo/fiscal.

### Criterios de exclusión

Excluir:

- usuarios con pocos gastos reales
- perfiles administrativos de oficina
- usuarios que ya usan disciplinadamente una app de gastos
- participantes que no sufran el problema descrito
- participantes reclutados solo por cercanía si no encajan en frecuencia y dolor

### Muestra recomendada

Cinco usuarios de oficios similares, pero no idénticos.

Evitar cinco participantes del mismo círculo cercano, porque puede sesgar cortesía, confianza y feedback.

## Consentimiento mínimo

Antes de empezar, cada participante debe aceptar un consentimiento simple y comprensible.

Debe cubrir:

- Qué se recoge: fotos de tickets/facturas/documentos, notas de voz o texto, campos extraídos, correcciones, hora de captura y respuestas mínimas de uso.
- Dónde se recoge y guarda: Tally como formulario, Google Sheets como tabla de respuestas y Google Drive como repositorio/exportación controlada.
- Quién lo ve: únicamente el equipo responsable del piloto según las responsabilidades definidas, con acceso restringido al Sheet/Drive.
- Para qué se usa: validar si el flujo de captura de gastos con foto + voz reduce fricción y pérdida de tickets.
- Conservación: conservar datos solo durante el piloto y el análisis posterior inmediato.
- Borrado: borrar material bruto al terminar el análisis, salvo aprobación expresa de Salva para conservarlo.
- Derecho a parar: el participante puede dejar el piloto y pedir borrado de su material en cualquier momento.
- Límites: no es asesoría fiscal, no sustituye gestoría y no garantiza deducciones ni cálculos de impuestos.
- Tamaño de archivos: máximo 10 MB por archivo.

Texto base:

> Durante 7 días recogeremos tus fotos de tickets/facturas, notas de voz o texto y datos mínimos del registro mediante Tally. Las respuestas se guardarán en Google Sheets y los archivos en Google Drive con acceso restringido al equipo del piloto. No usaremos tus datos para marketing, demos públicas ni entrenamiento. Puedes parar cuando quieras y pedir que borremos tu material. El tamaño máximo por archivo es 10 MB. Esto no es asesoría fiscal ni sustituye a tu gestoría.

## Guion de entrevista inicial

La entrevista inicial debe descubrir comportamiento real, no opiniones abstractas.

Preguntas:

1. Cuéntame los últimos 5 gastos de negocio que hiciste fuera de la oficina. ¿Cuándo los registraste y dónde quedó el ticket?
2. Cuando pagas algo de trabajo fuera de oficina, ¿qué haces normalmente con el ticket en los siguientes 5 minutos?
3. La última vez que preparaste papeles para gestoría, ¿qué fue lo más pesado?
4. ¿Cuántos tickets o facturas crees que pierdes o reconstruyes al mes?
5. ¿Qué haces justo después de pagar gasolina, material, comida o parking?
6. ¿En qué situaciones te daría vergüenza, pereza o problemas dictar una nota de voz?
7. ¿Qué dato necesita quedar perfecto para que confíes en el registro?
8. ¿Qué pasa si falta la foto del ticket pero hay importe, proveedor y categoría?
9. ¿Qué usas hoy y por qué no te basta?
10. ¿Has pagado alguna vez por algo parecido? ¿Cuánto y quién lo decidió?
11. Si esto te ahorrara trabajo con tickets, ¿quién pagaría: tú, empresa, gestoría o cliente?

Evitar preguntas como:

- ¿Usarías esto?
- ¿Te gusta esta idea?
- ¿Pagarías por esto?

Sustituirlas por conducta pasada, alternativas actuales, fricción real y compromiso verificable después de usarlo.

## Instrucciones para participantes

Durante 7 días, con la menor carga posible:

1. Cada vez que hagas un gasto profesional real, intenta registrarlo en el primer momento razonable tras pagar.
2. Haz foto del ticket, factura o documento.
3. Añade una nota breve de voz con el contexto: trabajo, obra, motivo o categoría práctica.
4. Si no puedes o no quieres usar voz, escribe una frase breve o marca el motivo.
5. Si el sistema pide confirmar datos, corrige solo lo imprescindible.
6. No inventes gastos para el piloto.
7. No cambies artificialmente tu rutina para quedar bien.
8. Si se te olvida, te da pereza, hay ruido, vas con prisa o te incomoda, anótalo. Eso también es evidencia.

Lenguaje recomendado para explicar el piloto:

> Queremos ver si esto te ayuda a no acumular tickets ni tener que reconstruir gastos al final del día.

Evitar claims fuertes como:

- "calcula impuestos exactos"
- "garantiza deducciones"
- "sustituye a la gestoría"
- "automatiza la fiscalidad"

## Registro válido

Un registro cuenta como válido si:

- corresponde a un gasto profesional real durante los 7 días
- se crea el mismo día del gasto
- idealmente se crea dentro de los 10 minutos posteriores al pago
- tiene foto o documento asociado
- incluye importe y proveedor identificables
- tiene contexto suficiente para recordar por qué fue el gasto
- puede revisarse o exportarse posteriormente

No cuenta como válido si:

- es un gasto inventado
- se registra varios días después
- no tiene foto aunque el usuario tenía acceso al ticket
- el contexto es tan pobre que luego no se puede clasificar
- se hace solo para probar el sistema, no como parte del trabajo real

## Registro diario mínimo

El participante no debe rellenar una plantilla larga cada día. La carga diaria debe limitarse a una comprobación breve, idealmente automatizada.

### Check-in diario para participante

Enviar una única pregunta diaria o formulario ultracorto:

- ¿Cuántos gastos profesionales reales tuviste hoy?
- ¿Cuántos registraste en el momento?
- ¿Cuántos registraste más tarde o no registraste?
- Si no registraste alguno, ¿por qué? prisa / manos ocupadas / ruido / vergüenza voz / olvido / privacidad / fallo del flujo / otro
- Esfuerzo global del día: 1-5

### Consolidación interna por gasto

La siguiente información la consolida Gael o el proceso semiautomatizado, no el participante:

- Hora aproximada del gasto:
- Contexto físico: obra / cliente / proveedor / furgoneta / gasolinera / parking / comida / otro
- Tipo de gasto:
- ¿Se registró en el momento?: sí / más tarde / no
- Tiempo aproximado desde pago hasta registro:
- Canal usado: foto + voz / foto + texto / solo foto / no registrado
- Motivo de no usar voz si aplica: público / ruido / prisa / vergüenza / privacidad / otro
- Foto/documento asociado: sí / no
- Correcciones necesarias: ninguna / importe / proveedor / fecha / IVA / categoría / nota / repetir foto / repetir voz
- Tiempo total aproximado hasta guardar:
- Esfuerzo percibido: 1-5
- Confianza en el registro: 1-5
- ¿Serviría para revisar o enviar a gestoría?: sí / no / solo con cambios / solo si conserva foto
- Frase literal del participante sobre el momento:
- Momento donde ayudó:
- Momento donde estorbó:
- Intervención humana del equipo, si hubo:

### Gastos no registrados

Para cada gasto no registrado, registrar internamente:

- Tipo de gasto:
- Motivo principal: prisa / manos ocupadas / sin cobertura / vergüenza voz / olvido / ticket perdido / no parecía importante / fallo del flujo / privacidad / otro
- ¿Qué habría tenido que pasar para registrarlo?

## Métricas mínimas

### Comportamiento

- Porcentaje de gastos reales registrados dentro de 10 minutos.
- Porcentaje registrado más tarde.
- Porcentaje no registrado.
- Caída de uso entre días 1-3 y días 4-7.

### Voz

- Porcentaje de registros con voz.
- Situaciones donde se evita voz.
- Motivo de evitación.
- Necesidad de repetir o corregir nota.

### Foto/documento

- Porcentaje de registros con foto.
- Confianza del usuario con y sin foto.
- Casos donde falta documento.

### Corrección y fricción

- Número de correcciones por registro.
- Campos corregidos.
- Registros que requieren repetir foto o voz.
- Tiempo total de captura.
- Registros abandonados.

### Exportación

- Si CSV/PDF/carpeta conserva foto, fecha, proveedor, importe, IVA, categoría y nota.
- Si el usuario o gestoría lo entendería sin explicación adicional.
- Si requiere limpieza humana significativa.

## Límites de datos y privacidad durante el piloto

Recoger solo datos necesarios para validar el flujo:

- foto de ticket/factura/documento
- audio o transcripción de nota breve
- campos extraídos
- correcciones
- metadatos mínimos de uso

No recoger:

- datos bancarios
- credenciales
- DNI
- datos fiscales completos
- contactos
- geolocalización precisa
- acceso a gestoría
- clientes del usuario salvo contexto estrictamente necesario

Reglas:

- Pseudonimizar participantes como U1-U5.
- Usar Tally como canal principal de captura.
- Usar Google Sheets como tabla automática de respuestas.
- Usar Google Drive como repositorio/exportación controlada.
- Restringir acceso al Sheet y Drive al equipo responsable.
- Explicar antes de empezar qué se captura, quién lo ve, para qué se usa y cuándo se borra.
- Permitir tapar datos sensibles no necesarios si no destruye la validez del ticket.
- No usar datos para entrenamiento, marketing, demos públicas o comunicación externa.
- Si se usa OCR/STT externo, marcarlo como riesgo pendiente y no como postura final de privacidad.
- Borrar material bruto al terminar el análisis, salvo aprobación explícita de Salva para conservarlo.
- Documentar herramienta usada, proveedor, almacenamiento y quién tiene acceso antes de iniciar el piloto.
- Aplicar límite de 10 MB por archivo.
- No recoger datos bancarios, DNI ni credenciales bajo ninguna circunstancia.
- Usar `soyautonomoaldia@gmail.com` solo para coordinación, enlace de Tally y dudas básicas; no como captura ordinaria.

## Riesgos

### Riesgos de evidencia

- Sesgo de cortesía: participantes cercanos pueden decir que les gusta aunque no lo usarían.
- Efecto novedad: los días 1-2 pueden inflar el uso.
- Hawthorne: al saberse observados, registran más de lo normal.
- Muestra equivocada: usuarios con pocos gastos no validan el JTBD.
- Falso positivo operativo: si el equipo corrige demasiado por detrás, se mide servicio asistido, no producto.
- Falso positivo por fallback: si muchos registros entran por email, WhatsApp o Telegram, no se valida Tally como canal principal.
- Confundir archivo bonito con utilidad real.
- Disposición a pagar abstracta sin uso real.
- Abandono o falta de respuesta tratado erróneamente como dato perdido en vez de evidencia negativa.

### Riesgos UX

- Voz en público, tiendas, gasolineras, obra o furgoneta puede ser el bloqueo central.
- Ruido y prisa pueden hacer que la voz no encaje.
- Correcciones frecuentes pueden convertir el flujo en "picar facturas con pasos extra".
- Lenguaje demasiado administrativo puede alejar al usuario.
- Si el usuario dice "lo haría luego tranquilamente", no se está validando el dolor central de registrar en el momento.

### Riesgos técnicos

- Tickets limpios sobreestiman OCR.
- Audio en entorno tranquilo sobreestima voz.
- Exportación maquillada por el equipo no valida complejidad real.
- Si se permite registrar al final del día, no se valida el JTBD principal.
- Si el caso mínimo exige banco, gestoría, cálculo fiscal exacto o credenciales, el MVP deja de ser bajo en complejidad.
- Tally puede introducir fricción ajena al producto si subir foto/audio desde móvil resulta incómodo.
- El límite de 10 MB puede bloquear audios/fotos y debe medirse como fricción técnica.
- Sheets/Drive requieren control de permisos estricto para no abrir riesgo de exposición.
- El uso de OCR/STT externo puede abrir riesgos de privacidad pendientes de decisión.

### Riesgos comerciales

- El dolor existe, pero el hábito de registro inmediato no aparece.
- La voz no es diferenciador usable.
- El comprador puede no ser el usuario.
- El valor puede estar en gestoría/exportación, no en el autónomo.
- La propuesta puede necesitar promesas fiscales que no deben hacerse.
- La privacidad puede bloquear adopción.
- La monetización puede ser débil si no hay compromiso verificable tras uso real.
- Si el piloto depende de persecución humana diaria, la señal comercial queda invalidada.

## Criterios de muerte

La idea debe matarse o rediseñarse si ocurre cualquiera de estos casos:

- Menos del 50% de gastos reales se registran dentro de los 10 minutos posteriores al pago.
- 3 de 5 usuarios evitan voz en situaciones reales. Esto mata la versión "solo voz" o "voz como flujo principal", no necesariamente el MVP foto + documento + contexto.
- Más del 30% de registros requieren repetir foto, repetir voz o corregir campos esenciales.
- 4 de 5 usuarios no confiarían en el registro sin foto/documento original. Esto no mata el MVP actual si la foto se mantiene como requisito; mata una variante sin foto o solo voz.
- Menos de 2 de 5 aceptarían pagar, entrar en preventa o hacer piloto con compromiso claro.
- 3 de 5 dicen que el problema principal no es capturar gastos, sino facturación, cobros, clientes, presupuestos o gestoría.
- Los usuarios registran durante el piloto solo por compromiso, pero reconocen que no lo harían solos.
- Menos del 70% de registros quedan útiles con foto, importe, fecha y proveedor sin intervención fuerte.
- La mediana de captura completa supera 60-90 segundos en situación real.
- La exportación requiere limpieza humana significativa.
- El caso mínimo exige dependencias prematuras: banco, integración con gestoría, cálculo fiscal exacto, firma legal, e-factura, credenciales o automatización fiscal.
- 3 de 5 rechazan compartir tickets reales por privacidad incluso tras explicar límites.
- El piloto requiere que Salva o el equipo persigan manualmente a participantes para obtener la mayoría de registros.
- Tally bloquea el uso real de forma recurrente y la mayoría de capturas pasan a fallback.

## Criterios de continuación

La idea solo debería continuar si se cumplen estas señales:

- Al menos 3 de 5 registran la mayoría de gastos reales en el momento.
- Al menos 3 de 5 conservan foto/documento y confían en el archivo generado.
- La mayoría de correcciones son menores y tolerables.
- Al menos 2 usuarios piden seguir usándolo o aceptan piloto/preventa condicionada.
- Aparece una razón económica concreta: menos tickets perdidos, menos tiempo mensual, menos estrés antes de gestoría o mejor control de gastos.
- El flujo mínimo puede mantenerse sin banco, gestoría integrada, cálculo fiscal exacto ni promesas fiscales.
- El piloto puede operar con baja intervención humana y sin participación operativa de Salva.
- Tally funciona como canal principal sin que email, WhatsApp o Telegram absorban la captura ordinaria.

## Posibles decisiones posteriores

### Continuar

Continuar si los criterios de continuación se cumplen sin violar límites de privacidad, complejidad o promesa fiscal.

Siguiente paso recomendado:

- definir prototipo mínimo
- mantener foto/documento como ancla
- decidir si voz sigue siendo flujo principal o complemento
- preparar un segundo piloto más controlado

### Pivotar

Pivotar si aparece uno de estos patrones:

- Voz falla, pero foto + OCR + categoría seleccionada por el usuario funciona.
- El dolor fuerte está en exportación o relación con gestoría.
- El valor real es resumen/control periódico, no captura inmediata.
- El usuario quiere capturar, pero no hablar.

Posibles pivots:

- captura ultrarrápida con foto + texto mínimo
- flujo centrado en carpeta/exportación para gestoría
- resumen de gastos sin claim fiscal exacto

### Matar

Matar si:

- el usuario reconoce el dolor pero no registra en el momento
- voz no encaja en campo y no emerge una alternativa viable de foto + texto/contexto mínimo
- corregir consume casi tanto como el método actual
- no hay confianza incluso conservando documento original
- no aparece intención de pago o piloto
- el valor monetizable pertenece a otro comprador no validado

## Decisión posterior obligatoria

Al cerrar el piloto, la decisión debe registrarse separando:

- hechos observados
- hipótesis confirmadas
- hipótesis rechazadas
- riesgos abiertos
- recomendación
- decisión de Salva

No se debe aprobar producción, pricing público, pagos, preventa real, claims fiscales, tratamiento formal de privacidad ni comunicación externa sin confirmación explícita de Salva.
