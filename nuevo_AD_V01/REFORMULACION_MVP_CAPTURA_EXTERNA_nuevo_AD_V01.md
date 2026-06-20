# REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Gael
Estado: reformulacion interna no operativa
Fuente operativa interna usada: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## Principio Aprobado Por Salva

### Hecho

Salva aprueba reformular el MVP desde el principio:

> Captura externa en menos de 10 segundos; organizacion interna despues.

La promesa inicial pasa de "gestiona tu negocio con IA" a:

> Diselo a AD antes de que se te olvide.

AD debe seguir siendo una app independiente, el cerebro donde viven clientes, trabajos, visitas, materiales, presupuestos, cobros, historial y recordatorios. Pero la entrada inicial no debe exigir que el autonomo abra una app de gestion ni cambie habito desde el primer dia.

### Supuesto

El valor no esta en que el usuario "gestione mejor" en abstracto. Esta en reducir la perdida de informacion accionable en el momento de campo: salida de visita, furgoneta, llamada terminada, almacen, WhatsApp recibido o email con datos de trabajo.

### Riesgo

Si la captura externa se interpreta como integraciones reales desde el dia uno, el MVP se rompe: Siri, WhatsApp, email, calendario, permisos moviles, privacidad, audios, documentos y automatismos externos aumentan mucho el alcance tecnico y legal.

### Owner

Gael consolida la reformulacion. Asirin debe cerrar scope de producto. Irinas debe cerrar UX y confianza. Nathan debe cerrar datos, privacidad y limites tecnicos. Mercury debe cerrar evidencia, sesgos e invalidadores.

### Decision Requerida

El principio de reformulacion queda incorporado como marco de definicion interna. Siguen pendientes decisiones de target, buyer, objetos definitivos, politica de datos, metodo de prueba e invalidadores.

### Condicion De Desbloqueo

Esta reformulacion no desbloquea validacion externa, reclutamiento, mensajes externos, captura real, integraciones, mock operativo, build, pricing publico, pagos ni produccion.

### Siguiente Accion Propuesta

Usar esta ficha para decidir el MVP minimo interno y despues pedir sign-off formal de owners antes de cualquier accion operativa.

## Tesis Reformulada

### Hecho

La unidad de producto deja de ser "modulo de gestion" y pasa a ser `captura`.

Cada captura es una frase, texto, foto futura o contenido compartido que AD debe convertir en objetos revisables dentro de la app.

### Supuesto

La app independiente solo gana si actua como bandeja ordenada posterior. El primer gesto debe parecerse a los habitos actuales del usuario:

- decir algo al movil;
- compartir un WhatsApp;
- reenviar un email;
- tocar una accion rapida;
- apuntar desde calendario o recordatorio nativo.

### Riesgo

El usuario puede valorar la captura rapida pero no revisar despues. Si no hay revision, correccion o cierre, AD se convierte en otra bandeja abandonada.

### Decision Requerida

El MVP debe definirse como capturador inteligente de trabajo real, no como mini-ERP ni como suite de oficios.

### Condicion De Desbloqueo

El MVP solo puede avanzar si se prueban internamente frases ficticias y se demuestra que pueden reducirse a pocos objetos sin formularios largos.

### Siguiente Accion Propuesta

Definir flujos minimos, objetos automaticos, simulacion manual y metricas de cambio de conducta.

## 1. Flujo Minimo Para Capturar Desde Voz/Siri O Accion Rapida

### Hecho

El flujo minimo no debe depender de abrir la app y elegir modulo.

### Flujo Propuesto

1. El usuario activa una entrada externa:
   - comando de voz tipo "Oye Siri, apunta en AD...";
   - acceso directo del movil;
   - boton de accion rapida;
   - widget de pantalla inicial;
   - dictado desde notificacion o acceso compartido.
2. El usuario dicta o escribe una nota de menos de 10 segundos.
3. AD confirma que la captura queda guardada como pendiente de revisar.
4. AD interpreta intencion y campos probables.
5. La app muestra despues una tarjeta revisable con objetos sugeridos.

Ejemplo:

`Manana a las nueve volver a casa de Carmen, fuga debajo del fregadero, llevar sifon y revisar presion.`

Salida interna esperada:

- visita: manana 09:00;
- cliente/apodo: Carmen;
- trabajo/problema: fuga debajo del fregadero;
- material: sifon;
- tarea: revisar presion;
- estado: pendiente de confirmar.

### Supuesto

Para validar el comportamiento no hace falta construir Siri real todavia. Lo critico es saber si el usuario puede generar capturas utiles en lenguaje natural, con poco esfuerzo y repetidamente.

### Riesgo

Siri/acciones rapidas pueden crear una ilusion de producto terminado. En realidad implican permisos, sistema operativo, errores de transcripcion, experiencia de confirmacion y manejo de datos personales.

### Decision Requerida

No aprobar integracion real con Siri todavia. Aprobar solo el flujo conceptual y una simulacion interna con datos ficticios.

### Condicion De Desbloqueo

El flujo se invalida si necesita mas de 10 segundos, mas de una confirmacion obligatoria, o si genera campos ambiguos que obligan a reescribir la mayoria de capturas.

### Siguiente Accion Propuesta

Crear 20 frases ficticias por target candidato y convertirlas manualmente a tarjetas AD para medir friccion y ambiguedad.

## 2. Flujo Minimo Para Compartir Desde WhatsApp O Email Hacia AD

### Hecho

WhatsApp y email son alternativas actuales fuertes. El MVP debe aprovecharlos como entrada, no competir contra ellos desde el primer uso.

### Flujo Propuesto

1. El usuario recibe o escribe informacion en WhatsApp/email.
2. El usuario usa "compartir con AD" o reenvia el texto/contenido a una entrada controlada.
3. AD crea una captura con fuente visible: WhatsApp, email o texto pegado.
4. AD interpreta si el contenido parece:
   - cliente;
   - visita;
   - tarea;
   - material;
   - presupuesto;
   - cobro;
   - recordatorio;
   - nota de trabajo.
5. AD guarda una tarjeta pendiente con campos sugeridos y un enlace mental al origen, sin enviar nada de vuelta automaticamente.

### Supuesto

El primer valor seria rescatar informacion que ya queda enterrada en chats o correos: direcciones, horarios, piezas, fotos futuras, cobros, cambios y promesas hechas al cliente.

### Riesgo

Compartir desde WhatsApp/email puede incluir datos de terceros, telefonos, direcciones, conversaciones completas, documentos o imagenes privadas. Es un flujo de alto riesgo de privacidad si se prueba con datos reales.

### Decision Requerida

Bloquear WhatsApp/email real en esta fase. Solo simular con mensajes ficticios.

### Condicion De Desbloqueo

Antes de cualquier prueba real futura hacen falta politica de datos, minimizacion, consentimiento, borrado, retencion y limites de contenido permitido.

### Siguiente Accion Propuesta

Definir una plantilla ficticia de mensajes WhatsApp/email y clasificar manualmente que objetos AD se crearian.

## 3. Objetos Que AD Debe Crear Automaticamente En Primera Version

### Hecho

La primera version no debe crear modulos completos. Debe crear objetos operativos pequenos y revisables.

### Objetos Minimos

1. `captura`
   - fuente: voz, accion rapida, texto, WhatsApp simulado, email simulado;
   - texto transcrito o pegado;
   - fecha/hora de captura;
   - estado: sin revisar, confirmada, descartada.

2. `cliente_o_alias`
   - nombre/apodo;
   - telefono opcional futuro;
   - direccion/zona opcional futura;
   - siempre revisable.

3. `trabajo_o_aviso`
   - descripcion corta;
   - cliente asociado si se detecta;
   - estado: nuevo, pendiente, cerrado, descartado.

4. `visita`
   - fecha/hora;
   - cliente/trabajo asociado;
   - estado: pendiente, hecha, reprogramar.

5. `tarea`
   - accion concreta;
   - fecha opcional;
   - estado: pendiente, hecha.

6. `material`
   - pieza/material a comprar o llevar;
   - asociado a trabajo;
   - estado: pendiente, comprado, llevado.

7. `presupuesto_pendiente`
   - accion: preparar/enviar/revisar presupuesto;
   - importe opcional si aparece;
   - sin generar documento legal.

8. `cobro_pendiente`
   - importe opcional;
   - cliente/trabajo asociado;
   - estado: pendiente, cobrado, revisar.

9. `recordatorio`
   - fecha/hora o regla simple;
   - texto corto;
   - siempre interno.

### Objetos Excluidos

- factura;
- presupuesto legal completo;
- parte firmado;
- pago;
- contrato;
- documento fiscal;
- certificado;
- stock;
- historial tecnico completo;
- diagnostico;
- mensaje automatico al cliente;
- integracion contable o bancaria.

### Supuesto

El objeto central debe ser `captura`, no `cliente` ni `factura`. Los demas objetos nacen como sugerencias revisables derivadas de la captura.

### Riesgo

Crear demasiados objetos automaticamente puede producir errores de confianza. Crear demasiado pocos puede hacer que AD parezca una nota de voz glorificada.

### Decision Requerida

Aprobar una lista cerrada de objetos automaticos y prohibir objetos fiscales/legales en primera version.

### Condicion De Desbloqueo

Todo objeto inferido debe tener estado `pendiente de confirmar` hasta revision del usuario.

### Siguiente Accion Propuesta

Definir un esquema minimo de campos por objeto y una regla de "menos campos obligatorios que valor generado".

## 4. Que Se Puede Simular Manualmente Sin Construir Demasiado

### Hecho

El estado actual bloquea build, mock operativo, integraciones, datos reales y validacion externa.

### Simulacion Permitida Ahora

Solo con datos ficticios:

1. Banco de frases ficticias.
   - 20 frases de voz tipo Siri.
   - 20 mensajes WhatsApp ficticios.
   - 10 emails ficticios.

2. Clasificacion manual.
   - Un owner hace de AD y transforma cada entrada en objetos.
   - Se registra tiempo de interpretacion, ambiguedades y campos que faltan.

3. Bandeja documental.
   - Tabla o documento interno con columnas: captura, objetos creados, confianza, campos dudosos, riesgo, decision.

4. Revision simulada.
   - Otro owner actua como usuario y marca si entenderia/corregiria la tarjeta.

5. Cierre semanal ficticio.
   - Agrupar capturas en "hoy", "atrasado", "por cobrar", "por volver", "por presupuestar", "materiales", "papeles".

### No Permitido Ahora

- pedir audios reales;
- pedir WhatsApps reales;
- pedir emails reales;
- capturar tickets o fotos reales;
- usar clientes reales;
- montar automatismos;
- conectar Siri, WhatsApp, email o calendario;
- prototipo operativo con datos reales;
- preguntar a usuarios externos.

### Supuesto

La simulacion manual es suficiente para validar internamente scope y lenguaje antes de gastar energia en tecnica.

### Riesgo

La simulacion manual puede sobreestimar precision y utilidad porque el equipo interpreta mejor que una IA real y porque las frases ficticias suelen ser mas limpias que las reales.

### Decision Requerida

Si se hace simulacion, Mercury debe definir sesgos, muestra ficticia y criterios de invalidacion interna.

### Condicion De Desbloqueo

No pasar de simulacion documental a mock operativo sin aprobacion explicita de Salva y sign-off de owners.

### Siguiente Accion Propuesta

Crear una matriz de simulacion documental con 50 entradas ficticias y medir donde se rompe.

## 5. Como Medir Si Esto Cambia Conducta

### Hecho

El interes por "IA", "Siri" o "WhatsApp" no prueba conducta ni disposicion a pagar.

### Metricas De Conducta Futuras

Solo aplican en una fase futura autorizada:

1. Capturas por semana.
   - Umbral minimo sugerido: 5 capturas utiles por semana en usuario cualificado.

2. Repeticion sin persecucion.
   - El usuario captura varios dias por iniciativa propia.

3. Momento de captura.
   - Captura cerca del evento real: salida de visita, llamada, WhatsApp recibido, compra de material, fin de jornada.

4. Porcentaje de capturas accionables.
   - Al menos 60-70% deberian convertirse en tarea, visita, cobro, material, presupuesto o recordatorio sin reconstruccion pesada.

5. Correccion necesaria.
   - Si el usuario corrige demasiado, la promesa de 10 segundos se rompe.

6. Reduccion de notas perdidas.
   - El usuario identifica menos pendientes olvidados en WhatsApp/libreta/cabeza.

7. Dinero o tiempo recuperado.
   - Cobros reclamados, presupuestos enviados, vueltas agendadas, piezas compradas, justificantes conservados.

8. Revision posterior.
   - El usuario vuelve a la app para confirmar o cerrar capturas.

9. Sustitucion parcial de habito.
   - AD empieza a reemplazar notas sueltas, audios propios, WhatsApp a si mismo o libreta para microtareas.

10. WTP privada.
   - Solo cuenta despues de uso repetido y dolor economico reconocido.

### Invalidadores De Conducta

Invalidar o reformular si:

- hay menos de 5 capturas utiles por semana;
- las capturas ocurren solo cuando alguien persigue al usuario;
- WhatsApp, calendario o nota de voz ya resuelven sin perdida percibida;
- la revision posterior no ocurre;
- el usuario exige facturacion, Verifactu, parte, stock, SAT, pagos o automatismos como condicion minima;
- las capturas no conectan con dinero o tiempo;
- la voz se evita por ruido, verguenza, privacidad o falta de precision;
- el usuario no pagaria nada por una herramienta sin facturacion ni WhatsApp automatico.

### Supuesto

El cambio de conducta valido no es "le gusta la idea"; es que el usuario use AD como reflejo para no perder pendientes reales.

### Riesgo

Medir solo volumen de capturas puede engañar: muchas capturas inutiles no significan valor. Hay que medir capturas accionables y cierres.

### Decision Requerida

Mercury debe cerrar umbrales de exito/fracaso antes de cualquier validacion futura.

### Condicion De Desbloqueo

No preguntar WTP hasta que exista evidencia de comportamiento repetido o, como minimo, escenario manual suficientemente realista.

### Siguiente Accion Propuesta

Definir un cuadro de metricas con umbrales: captura, repeticion, accionabilidad, revision, dinero/tiempo y WTP.

## Riesgos Principales De La Reformulacion

### Riesgo Comercial

La promesa "Diselo a AD antes de que se te olvide" es clara, pero puede percibirse como lista de tareas con voz. La WTP sera baja si no se conecta a cobros, presupuestos, vueltas, materiales y cierre.

### Riesgo De Producto

La captura externa puede empujar a construir integraciones antes de demostrar que el flujo central importa.

### Riesgo De Datos

WhatsApp, email, voz y fotos pueden contener datos personales, direcciones, importes, imagenes privadas, conversaciones de terceros y documentos sensibles.

### Riesgo De Automatizacion

El usuario puede esperar que AD envie mensajes, cree citas, facture o reclame cobros automaticamente. Eso queda fuera.

### Riesgo De Falso Positivo

El flujo suena muy vendible. Eso aumenta el riesgo de aprobacion prematura sin conducta repetida.

## Supuestos Criticos

- El autonomo tiene microolvidos frecuentes que le cuestan dinero o tiempo.
- Capturar fuera de la app reduce friccion real.
- La organizacion posterior aporta mas valor que una nota de voz normal.
- El usuario acepta revisar despues.
- La app independiente puede convertirse en cerebro sin exigir migracion inicial.
- La WTP existe aunque AD no facture, no envie WhatsApp automaticos y no sea ERP.
- Se puede minimizar datos sin destruir utilidad.

## No-Promesas

- AD no gestiona todo el negocio.
- AD no sustituye WhatsApp, email o calendario desde el primer dia.
- AD no factura.
- AD no calcula impuestos definitivos.
- AD no sustituye gestoria.
- AD no envia mensajes sin confirmacion.
- AD no diagnostica problemas tecnicos.
- AD no certifica trabajos.
- AD no guarda audio por defecto.
- AD no exige integraciones para demostrar valor.

## Recomendacion Gael

### Hecho

La reformulacion mejora la tesis: baja la friccion inicial y evita vender "ERP". Tambien aclara el trabajo real: capturar antes de olvidar y ordenar despues.

### Supuesto

El mejor MVP conceptual es:

> Capturador inteligente de trabajos reales para autonomos de oficio: entrada externa rapida, objetos revisables y bandeja de pendientes por dinero/accion.

### Riesgo

No debe convertirse en una carrera por integrar Siri, WhatsApp, email y calendario. El primer aprendizaje es de conducta y objeto, no de infraestructura.

### Decision Requerida

Salva debe decidir si quiere activar una ronda interna secuencial de owners sobre esta reformulacion, o si prefiere que Gael prepare primero una version mas cerrada para decision.

### Condicion De Desbloqueo

Antes de cualquier ejecucion:

- target unico;
- buyer economico;
- alternativa actual dominante;
- workflow observable;
- objetos automaticos aprobados;
- politica minima de datos;
- simulacion manual aprobada;
- metricas e invalidadores;
- sign-off de owners;
- decision final de Salva.

### Siguiente Accion Propuesta

Hacer una ronda interna secuencial, si Salva la quiere, con cuatro entregables:

1. Asirin: scope MVP y objetos minimos.
2. Irinas: flujo UX y microcopy de confianza.
3. Nathan: politica minima de datos para captura externa.
4. Mercury: metodo de simulacion, sesgos e invalidadores.

Mientras tanto, mi recomendacion es mantener estado bloqueado para operacion y abierto solo a definicion interna.
