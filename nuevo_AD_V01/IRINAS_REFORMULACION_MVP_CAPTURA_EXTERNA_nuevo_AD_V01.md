# IRINAS_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Irinas
Responsabilidad: UX, confianza y claridad
Estado: definicion interna documental
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
Documentos usados:
- `REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`
- `ASIRIN_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`

## 1. Decision UX

Aprobado con condiciones.

Apruebo la tesis UX:

> Captura externa en menos de 10 segundos; organizacion interna despues.

Y apruebo como promesa de interaccion:

> Diselo a AD antes de que se te olvide.

La aprobacion solo vale si la experiencia deja claro que AD guarda una captura interna pendiente de revisar. No debe sugerir que AD ya ha enviado mensajes, creado una cita real, generado una factura, reclamado un cobro, actualizado un ERP, conectado WhatsApp/email/Siri o tomado una decision legal, fiscal o economica.

La UX debe transmitir tres ideas en este orden:

1. Captura rapido.
2. AD lo guarda para que no se pierda.
3. Tu lo revisas antes de que tenga valor operativo.

No apruebo una experiencia que parezca automatizacion externa. La confianza se gana reduciendo olvido y mostrando limites, no fingiendo que el sistema hace mas de lo autorizado.

## 2. Flujo UX Minimo Para Voz/Siri Simulada O Accion Rapida Simulada

### Entrada

Origen permitido en esta fase:

- voz/Siri simulada;
- accion rapida simulada;
- widget conceptual simulado;
- texto dictado o escrito en una entrada interna documental.

No hay integracion real, permiso movil, audio real, transcripcion real, acceso directo operativo ni automatismo.

### Flujo

1. El usuario activa una entrada simulada.
2. AD muestra o recibe una frase breve.
3. La frase debe poder decirse o escribirse en menos de 10 segundos.
4. AD confirma guardado interno.
5. AD conserva el texto original.
6. AD propone objetos revisables con confianza alta, media o baja.
7. La captura queda en bandeja `pendiente de revisar`.

### Pantalla O Momento De Confirmacion

Contenido minimo:

- estado: `Guardado`;
- siguiente estado: `Pendiente de revisar`;
- limite visible: `No se ha enviado nada`;
- accion principal: `Revisar despues`;
- accion secundaria: `Abrir revision`;
- opcion segura: `Descartar`.

### Regla UX

La confirmacion no debe celebrar automatizacion. Debe calmar:

`Guardado para revisar despues. No se ha enviado nada.`

## 3. Flujo UX Minimo Para Compartir Desde WhatsApp/Email Simulado Hacia AD

### Entrada

Origen permitido en esta fase:

- mensaje WhatsApp ficticio;
- email ficticio;
- texto pegado ficticio;
- captura documental de contenido inventado.

No hay WhatsApp real, email real, reenvio real, API, bot, webhook, permiso de cuenta, lectura de bandeja, contacto real ni dato real de cliente.

### Flujo

1. El usuario identifica un contenido ficticio que no quiere perder.
2. Usa una accion simulada tipo `Compartir con AD` o `Pegar en AD`.
3. AD crea una `captura` con fuente visible: `WhatsApp simulado`, `email simulado` o `texto pegado`.
4. AD muestra el texto original y los campos sugeridos.
5. AD marca cualquier dato dudoso como `por confirmar`.
6. AD deja la captura en revision posterior.
7. AD no responde al origen ni modifica el mensaje original.

### Regla UX

El origen sirve para contexto, no para prometer integracion.

Microcopy recomendado:

`Guardado desde WhatsApp simulado. AD no responde al chat ni envia mensajes.`

`Guardado desde email simulado. AD no envia, reenvia ni archiva correos.`

## 4. Tarjeta De Revision Posterior

### Estructura

La tarjeta de revision debe ser el centro de confianza del MVP.

Campos visibles:

- origen simulado;
- hora de captura;
- texto original;
- resumen sugerido;
- objetos sugeridos;
- confianza de la interpretacion;
- campos dudosos;
- estado de revision;
- acciones permitidas;
- limites visibles.

Objetos sugeridos segun scope de Asirin:

- `captura`;
- `contacto_o_alias`;
- `trabajo_o_aviso`;
- `visita_o_momento`;
- `pendiente_accionable`;
- `nota_de_contexto`.

Subtipos permitidos dentro de `pendiente_accionable`:

- tarea;
- material;
- presupuesto pendiente interno;
- cobro pendiente interno;
- recordatorio interno.

### Estados

Estados de tarjeta:

- `sin revisar`: guardada, aun sin decision humana;
- `en revision`: el usuario esta corrigiendo o confirmando;
- `confirmada`: el usuario acepta los campos internos;
- `dividida`: la captura se separo en dos o mas capturas internas;
- `descartada`: no se usara;
- `cerrada`: ya no requiere accion interna.

Estados de confianza:

- `confianza alta`: AD detecta campos claros, aun revisables;
- `confianza media`: hay campos probables, revisar antes de usar;
- `confianza baja`: AD no debe proponer accion fuerte;
- `campo dudoso`: dato concreto que no debe darse por cierto.

### Acciones Permitidas

Acciones primarias:

- confirmar;
- corregir;
- dividir captura;
- descartar;
- cerrar;
- cambiar confianza manualmente si procede;
- marcar campo como `por confirmar`;
- convertir un elemento en `nota_de_contexto`.

Acciones secundarias:

- cambiar origen simulado;
- cambiar subtipo de pendiente;
- eliminar campo sugerido;
- dejar para mas tarde.

### Que No Debe Ocurrir

Una tarjeta no debe:

- enviar mensajes;
- crear citas en calendarios reales;
- generar facturas;
- generar presupuestos legales;
- reclamar pagos;
- cobrar;
- actualizar un ERP, CRM, banco, gestoria o herramienta externa;
- guardar audio real por defecto;
- usar datos reales;
- decidir IVA, impuestos, validez legal o diagnosticos tecnicos;
- ocultar campos dudosos;
- convertir una inferencia en verdad sin revision.

## 5. Microcopy De Confianza

### Guardado

`Guardado para revisar despues.`

`AD lo ha guardado como captura pendiente.`

`Ya no depende de acordarte de memoria.`

### Pendiente De Revisar

`Pendiente de revisar.`

`Revisa antes de darlo por bueno.`

`AD ha separado la informacion, pero aun falta tu confirmacion.`

### Confianza Alta

`Confianza alta: los campos parecen claros, revisalos antes de cerrar.`

`AD cree haber entendido lo principal. Confirma si esta bien.`

### Confianza Media

`Confianza media: hay datos probables y algun punto por confirmar.`

`Puede estar bien, pero conviene revisarlo.`

### Confianza Baja

`Confianza baja: AD no tiene suficiente contexto.`

`Mejor revisarlo antes de usarlo.`

### Campo Dudoso

`Por confirmar.`

`Dato dudoso.`

`AD no debe dar este campo por cierto todavia.`

### Sin Envio Externo

`No se ha enviado nada.`

`AD no ha respondido al cliente.`

`Esto solo queda dentro de AD.`

### Sin Factura

`No se ha creado ninguna factura.`

`Esto no es un documento fiscal.`

`Solo queda como pendiente interno.`

### Sin Integracion Real

`Origen simulado. Sin conexion real.`

`AD no esta conectado a WhatsApp, email, calendario ni Siri.`

`Esta captura no modifica ninguna herramienta externa.`

### Descarte

`Captura descartada.`

`No se usara esta informacion.`

`Descartado solo dentro de AD.`

### Division De Captura

`Esta captura tiene varias cosas. Separalas para revisarlas mejor.`

`Dividir captura.`

`AD mantendra el texto original y creara tarjetas separadas.`

### Cierre

`Cerrado dentro de AD.`

`Marcado como hecho internamente.`

`Cerrado sin enviar nada fuera.`

## 6. No-Promesas Visibles

Estas frases deben aparecer cuando el contexto pueda generar expectativas falsas:

- `AD no es un ERP.`
- `AD no factura.`
- `AD no calcula impuestos.`
- `AD no sustituye a tu gestoria.`
- `AD no envia mensajes automaticos.`
- `AD no cobra ni reclama pagos.`
- `AD no crea citas reales en calendario.`
- `AD no se conecta todavia a WhatsApp, email ni Siri.`
- `AD no toma decisiones legales, fiscales ni tecnicas.`
- `AD no convierte una captura en documento oficial.`
- `Todo queda pendiente hasta que lo revises.`

Regla de tono: las no-promesas deben ser visibles, breves y tranquilas. No deben sonar a letra pequena defensiva ni a renuncia de valor. El valor sigue siendo capturar antes de olvidar.

## 7. Riesgos UX Y De Confianza

- La frase "Siri" puede hacer creer que existe una integracion real.
- "Compartir desde WhatsApp/email" puede parecer lectura o respuesta automatica.
- "Presupuesto pendiente" puede confundirse con presupuesto legal generado.
- "Cobro pendiente" puede parecer reclamacion o pago.
- Una confianza alta puede interpretarse como certeza.
- Una tarjeta demasiado completa puede parecer decision tomada.
- Si hay demasiadas advertencias, la UX pierde fluidez y mata la promesa de 10 segundos.
- Si hay pocas advertencias, se crea falsa automatizacion.
- Si la revision posterior es pesada, la captura rapida deja de ahorrar trabajo.
- Si no se muestra el texto original, el usuario no puede auditar que entendio AD.
- Si AD inventa datos, la confianza se rompe.
- Si el usuario no ve cierre interno, la bandeja se convierte en acumulador de pendientes.

## 8. Invalidadores UX/Conducta Desde Irinas

Bloquear o recortar la tesis si ocurre cualquiera de estos puntos en simulacion interna:

- El usuario necesita pensar demasiado antes de capturar.
- La captura exige elegir modulo, cliente o categoria antes de guardar.
- La confirmacion tarda mas que la captura.
- El flujo no puede explicar en una frase que no hay envio externo.
- La tarjeta genera sensacion de que AD ya actuo por cuenta propia.
- La mayoria de capturas quedan con confianza baja sin accion clara.
- La mayoria de capturas necesita reescritura completa.
- El usuario no entiende la diferencia entre pendiente interno y accion real.
- El usuario espera factura, pago, mensaje, agenda o integracion como resultado natural.
- La revision posterior se percibe como otro formulario de gestion.
- El usuario no vuelve a revisar capturas.
- El valor se sostiene solo si se conectan herramientas reales.
- Los limites visibles reducen tanto la promesa que AD parece una nota de voz.

## 9. Cambios Concretos Recomendados A La Definicion Del MVP

1. Cambiar el nombre visible de cualquier objeto sensible:
   - usar `presupuesto pendiente interno`, no `presupuesto`;
   - usar `cobro pendiente interno`, no `cobro`;
   - usar `visita_o_momento`, no `cita` cuando no haya calendario real.

2. Hacer obligatorio el bloque de limites en toda tarjeta:
   - `No se ha enviado nada`;
   - `No se ha creado factura`;
   - `Pendiente de revisar`.

3. Mantener siempre el texto original junto a los campos sugeridos.

4. No mostrar botones de accion externa en el MVP documental:
   - nada de `Enviar`;
   - nada de `Facturar`;
   - nada de `Cobrar`;
   - nada de `Crear cita`;
   - nada de `Conectar WhatsApp`.

5. Usar confianza como freno, no como adorno:
   - baja confianza no permite confirmar en bloque;
   - campo dudoso exige revision explicita;
   - alta confianza sigue siendo revisable.

6. Incluir `dividir captura` como accion principal, porque una frase de campo puede contener visita, material, cobro y nota en el mismo gesto.

7. Reducir la primera confirmacion a una sola linea y una accion:
   - `Guardado para revisar despues. No se ha enviado nada.`
   - accion: `Revisar despues`.

8. Definir la bandeja por estados mentales del usuario, no por modulos:
   - sin revisar;
   - para hoy;
   - por volver;
   - por comprar/llevar;
   - por presupuestar;
   - por cobrar;
   - cerrado.

9. Evitar cualquier copy de "automatico" salvo en negacion clara:
   - permitido: `No envia mensajes automaticos`;
   - evitar: `AD automatiza tus gestiones`.

10. Mantener la simulacion como documento o tabla interna hasta que Salva autorice otra fase.

## 10. Resumen Breve Para Gael

Irinas aprueba la reformulacion con condiciones UX estrictas. La promesa "Diselo a AD antes de que se te olvide" funciona si AD se presenta como captura interna rapida y revisable, no como automatizador. La UX debe guardar en menos de 10 segundos, mostrar "pendiente de revisar", conservar el texto original, marcar confianza y campos dudosos, y repetir cuando haga falta que no hay envio externo, factura, pago, agenda ni integracion real. Recomiendo ajustar el MVP para que las tarjetas de revision sean el centro de confianza, sin botones externos y con nombres internos para presupuesto/cobro/visita.

