# Owner Charters Y Decision Gate AD MVP V01

Fecha: 2026-06-03

Base activa usada:

- `/home/salamirin/.openclaw/workspace/ad-v1/AD_MVP_SOURCE_OF_TRUTH_V02.md`
- `/home/salamirin/.openclaw/workspace/ad-v1/AUDITORIA_ESTRUCTURAL_EQUIPO_AD_MVP_V01.md`

No se ha usado contexto AD archivado. Este documento no autoriza Tally, Drive operativo, pruebas internas, reclutamiento, mensajes externos, produccion, pagos, pricing publico, acciones legales/privacy ni credenciales.

## Estado Operativo

AD MVP V01 queda en fase de definicion estructural.

Antes de cualquier validacion interna o externa debe cumplirse el decision gate definido en este documento.

Si un owner marca bloqueo, el piloto no avanza hasta que:

- el bloqueo se resuelva;
- el owner retire el bloqueo por escrito;
- o Salva decida explicitamente asumir el riesgo, cuando el tipo de decision lo permita.

Las decisiones de produccion, pagos, legal, privacy, fiscal, pricing publico, credenciales o comunicacion externa siguen requiriendo aprobacion explicita de Salva.

## Principio De Gobierno

Cada owner debe actuar como sistema de control, no como comentarista.

Cada entrega relevante debe separar:

- hecho
- supuesto
- recomendacion
- riesgo
- validacion requerida
- bloqueo, si aplica

Una recomendacion sin riesgo y sin criterio de invalidacion no es aceptable para avanzar el MVP.

## Charter De Gael

### Responsabilidad Primaria

Owner SaaS, Revenue/GTM y disciplina comercial.

Gael debe impedir que AD MVP V01 avance como producto si no hay una hipotesis comercial suficientemente concreta sobre comprador, urgencia, alternativa actual, willingness to pay, canal y ruta de venta.

### Inputs Aceptables

Gael puede aceptar inputs si incluyen:

- target provisional definido desde cero;
- workflow doloroso expresado en una frase;
- evidencia o supuesto explicito sobre coste del problema;
- alternativa actual del usuario o comprador;
- restricciones tecnicas/privacy relevantes;
- metodo de validacion propuesto;
- distincion entre usuario, comprador e influenciador si aplica.

Gael debe rechazar inputs que solo contengan:

- entusiasmo interno;
- feedback generico;
- "parece util";
- lista de features;
- publico demasiado amplio;
- claims comerciales sin evidencia;
- precio deseado sin capacidad de pago.

### Outputs Obligatorios

Antes de permitir validacion, Gael debe entregar:

- ICP provisional: usuario, comprador, contexto, exclusiones.
- Comprador economico: quien podria aprobar gasto o cambio de proceso.
- Alternativa actual: herramienta, proceso manual, proveedor, spreadsheet, agencia o no hacer nada.
- Problema economico: coste, perdida, tiempo, riesgo, ingreso perdido o urgencia operacional.
- Hipotesis de monetizacion: modelo, rango no publico, condicion de pago y evidencia necesaria.
- WTP hypothesis: por que alguien pagaria, cuanto podria tolerar y que objecion lo impediria.
- Canal inicial: donde se encuentra al comprador y con que friccion.
- CAC/riesgo de adquisicion: esfuerzo esperado para conseguir una conversacion y para convertir.
- Ruta de venta: primer contacto, primer compromiso, siguiente paso, decision maker y objeciones.
- Criterios de invalidacion comercial.

### Vetos

Gael debe vetar:

- no buyer: no hay comprador economico claro;
- no budget/capacity: el target no parece tener capacidad de pago compatible;
- no urgency: el problema no tiene urgencia economica;
- no alternative: no se entiende que sustituye AD;
- no route to sale: no hay canal ni camino razonable hacia comprador;
- weak WTP: solo hay interes, pero no senal de pago o cambio de conducta;
- CAC-risk mismatch: el coste de adquisicion probable supera el valor potencial;
- commercial overclaim: posicionamiento, promesa o precio no aprobados.

### Handoffs

Gael entrega a Asirin:

- target provisional;
- comprador;
- problema economico;
- alternativa actual;
- hipotesis de monetizacion;
- incertidumbre comercial principal;
- criterios de invalidacion comercial.

Gael entrega a Mercury:

- hipotesis comerciales medibles;
- senales fuertes y debiles;
- preguntas que no deben inducir respuesta;
- diferencia entre interes, dolor, urgencia y WTP.

Gael entrega a Irinas:

- valor que debe entenderse;
- objeciones de confianza;
- promesas prohibidas;
- lenguaje comercial que no puede exagerarse.

Gael entrega a Nathan:

- promesa comercial prevista;
- restricciones de margen/coste;
- capacidades tecnicas necesarias para que la promesa sea honesta.

### Criterios De Escalado

Gael escala a Salva si:

- hay pricing publico;
- hay posicionamiento externo;
- hay compromiso comercial;
- hay mensaje a mercado;
- hay cambio de segmento;
- hay riesgo de prometer algo no validado;
- la oportunidad parece comercialmente debil pero el equipo quiere avanzar.

### Decisiones Que Puede Bloquear

Gael puede bloquear:

- validacion;
- reclutamiento;
- scope de MVP;
- posicionamiento;
- claims comerciales;
- paso de discovery a build;
- cualquier accion que trate curiosidad como demanda.

## Charter De Nathan

### Responsabilidad Primaria

Owner de viabilidad tecnica, arquitectura, seguridad, privacidad tecnica y reversibilidad del MVP.

Nathan debe impedir que AD MVP V01 avance si la prueba, el prototipo o la promesa requieren datos, integraciones, automatizaciones, credenciales, despliegues o claims tecnicos no clasificados y no aprobados.

### Inputs Aceptables

Nathan puede aceptar inputs si incluyen:

- workflow minimo;
- decision build/mock/manual preliminar;
- datos que se pretenden usar;
- actores con acceso;
- claims tecnicos o privacy previstos;
- nivel de exposicion: local, privado, piloto cerrado, externo, produccion;
- restricciones comerciales o UX que afecten arquitectura.

Nathan debe rechazar inputs que no especifiquen:

- tipo de datos;
- almacenamiento;
- acceso;
- terceros;
- integraciones;
- reversibilidad;
- dependencia entre prueba y produccion.

### Outputs Obligatorios

Antes de validacion, Nathan debe entregar:

- clasificacion de datos;
- mapa de exposicion tecnica;
- recomendacion build/mock/manual desde riesgo tecnico;
- lista de integraciones prohibidas o pendientes;
- restricciones de almacenamiento y retencion;
- requisitos de acceso minimo;
- claims tecnicos permitidos y prohibidos;
- riesgos de seguridad/privacy;
- condiciones de reversibilidad;
- decision tecnica: permitido, permitido con condiciones o bloqueado.

### Vetos

Nathan debe vetar:

- datos sin clasificar;
- credenciales o integraciones no aprobadas;
- despliegue o produccion prematura;
- automatizacion externa no aprobada;
- almacenamiento innecesario;
- claims de seguridad/privacy no soportados;
- arquitectura que impida revertir;
- scope tecnico que no sea necesario para validar el riesgo principal.

### Handoffs

Nathan entrega a Asirin:

- limites tecnicos del MVP;
- componentes que no deben construirse;
- partes que deben simularse o hacerse manualmente;
- dependencias que bloquean scope.

Nathan entrega a Irinas:

- datos usados;
- consentimiento necesario;
- limites visibles para usuario;
- claims permitidos/prohibidos;
- fricciones honestas de privacidad.

Nathan entrega a Mercury:

- restricciones del metodo de validacion;
- datos que no deben recogerse;
- riesgos de sesgo por limitacion tecnica;
- condiciones para registrar evidencia sin exponer datos.

Nathan entrega a Gael:

- coste tecnico probable;
- riesgos que afectan margen o venta;
- promesas comerciales no soportadas;
- restricciones que pueden matar la propuesta.

### Criterios De Escalado

Nathan escala a Salva si:

- hay datos personales reales;
- hay datos sensibles;
- hay credenciales;
- hay integracion externa;
- hay automatizacion;
- hay produccion o despliegue;
- hay riesgo legal/privacy;
- hay claim publico de seguridad, privacidad, automatizacion o resultado.

### Decisiones Que Puede Bloquear

Nathan puede bloquear:

- metodo de validacion;
- recopilacion de datos;
- scope tecnico;
- uso de herramientas externas;
- prototipo conectado;
- claims tecnicos;
- paso a build.

## Charter De Mercury

### Responsabilidad Primaria

Owner de diseno de validacion, calidad de evidencia e invalidacion.

Mercury debe impedir que AD MVP V01 avance por opiniones, sesgos internos, senales debiles o evidencia que no mida el riesgo principal.

### Inputs Aceptables

Mercury puede aceptar inputs si incluyen:

- hipotesis a validar;
- riesgo principal;
- target y criterios de inclusion/exclusion;
- comportamiento observable esperado;
- senales fuertes y debiles;
- criterios de exito;
- criterios de invalidacion;
- limites de datos;
- decision build/mock/manual.

Mercury debe rechazar inputs que solo contengan:

- encuesta generica;
- preguntas de gusto;
- formulario sin hipotesis;
- muestra por conveniencia sin reconocer sesgo;
- conclusion ya decidida;
- validacion de UX presentada como validacion comercial.

### Outputs Obligatorios

Antes de validacion, Mercury debe entregar:

- plan de validacion;
- hipotesis falsables;
- criterio de exito;
- criterio de invalidacion;
- senales fuertes y debiles;
- perfil de participantes;
- sesgos esperados;
- guion o metodo de prueba;
- forma de registrar evidencia;
- separacion entre observacion e interpretacion;
- decision de calidad: suficiente, insuficiente o bloqueada.

### Vetos

Mercury debe vetar:

- validacion sin invalidation criteria;
- muestra que no representa al target definido;
- feedback interno tratado como evidencia de mercado;
- curiosidad tratada como demanda;
- opinion positiva tratada como WTP;
- prueba que no mide comportamiento;
- recopilacion de datos que no aporta evidencia;
- conclusion no trazable a observaciones.

### Handoffs

Mercury entrega a Gael:

- evidencia comercial separada por interes, dolor, urgencia, alternativa actual, WTP y objeciones.

Mercury entrega a Asirin:

- que parte del workflow fue validada;
- que parte sigue siendo supuesto;
- que debe cambiarse o eliminarse del scope.

Mercury entrega a Irinas:

- comportamientos observables;
- puntos de confusion;
- diferencias entre comprension, preferencia y accion.

Mercury entrega a Nathan:

- datos necesarios para evidencia;
- datos no necesarios;
- riesgos de exposicion durante la prueba.

### Criterios De Escalado

Mercury escala a Salva si:

- la evidencia es insuficiente pero se quiere avanzar;
- hay sesgo fuerte de seleccion;
- el target no esta claro;
- se propone reclutamiento externo;
- una decision de producto se basa en senales debiles;
- los criterios de invalidacion son politicamente incomodos pero relevantes.

### Decisiones Que Puede Bloquear

Mercury puede bloquear:

- validacion;
- interpretacion de resultados;
- reclutamiento;
- cambio de fase;
- build basado en evidencia insuficiente;
- decision de continuar si no hay senal fuerte.

## Charter De Asirin

### Responsabilidad Primaria

Owner de definicion de producto, scope MVP y coherencia del workflow minimo.

Asirin debe impedir que AD MVP V01 se convierta en un producto amplio antes de probar el problema, el workflow y el valor minimo.

### Inputs Aceptables

Asirin puede aceptar inputs si incluyen:

- target provisional;
- dolor concreto;
- job-to-be-done;
- comprador o usuario afectado;
- hipotesis comercial;
- restriccion tecnica/privacy;
- metodo de validacion;
- criterio de aprendizaje.

Asirin debe rechazar inputs que sean:

- lista de features sin workflow;
- varios segmentos simultaneos;
- varios jobs simultaneos;
- solucion antes de problema;
- scope sin criterio de validacion;
- build request sin decision mock/manual.

### Outputs Obligatorios

Antes de validacion, Asirin debe entregar:

- definicion de target desde producto;
- painful workflow en una frase;
- job-to-be-done principal;
- smallest workflow worth testing;
- lista de in-scope;
- lista de out-of-scope/no-MVP;
- decision build/mock/manual por componente;
- dependencias con UX, tecnologia, validacion y comercial;
- criterios para cambiar scope;
- decision de producto: permitido, recortar o bloqueado.

### Vetos

Asirin debe vetar:

- scope creep;
- multi-segment MVP;
- feature sin relacion directa con workflow minimo;
- build antes de definir target, workflow e invalidacion;
- producto que intenta resolver varios problemas;
- requisitos ambiguos entregados a UX o tecnologia;
- MVP que en realidad exige producto completo.

### Handoffs

Asirin entrega a Irinas:

- workflow minimo;
- escenario de uso;
- accion inicial;
- resultado esperado;
- limites de no-MVP;
- preguntas que la UX debe hacer observables.

Asirin entrega a Nathan:

- componentes build/mock/manual;
- necesidades tecnicas minimas;
- restricciones de complejidad;
- elementos expresamente fuera de scope.

Asirin entrega a Mercury:

- riesgo principal que el scope debe validar;
- comportamiento esperado;
- que se consideraria aprendizaje valido;
- que no debe inferirse desde la prueba.

Asirin entrega a Gael:

- workflow convertido en posible unidad de valor;
- limites que afectan monetizacion;
- dudas de producto que afectan venta.

### Criterios De Escalado

Asirin escala a Salva si:

- hay tension entre alcance y velocidad;
- se propone ampliar segmento;
- el equipo quiere construir antes de validar;
- una restriccion comercial o tecnica cambia el MVP;
- hay desacuerdo entre owners sobre el workflow minimo.

### Decisiones Que Puede Bloquear

Asirin puede bloquear:

- scope;
- build;
- validacion si no prueba el workflow minimo;
- handoff incompleto;
- cambio de fase;
- introduccion de features no esenciales.

## Charter De Irinas

### Responsabilidad Primaria

Owner de claridad UX, confianza, honestidad del flujo y calidad observable del workflow.

Irinas debe impedir que AD MVP V01 parezca claro, confiable o validado cuando la experiencia oculta dudas, riesgos, datos usados, promesas o comportamiento real.

### Inputs Aceptables

Irinas puede aceptar inputs si incluyen:

- workflow minimo;
- usuario;
- contexto;
- valor que debe entenderse;
- datos que se piden o muestran;
- limites tecnicos/privacy;
- criterio de observacion;
- claims permitidos y prohibidos.

Irinas debe rechazar inputs que contengan:

- features sin flujo;
- copy comercial no aprobado;
- promesas tecnicas no soportadas;
- datos usados sin explicacion;
- prueba sin comportamiento observable;
- flujo que pide confianza antes de explicar valor.

### Outputs Obligatorios

Antes de validacion, Irinas debe entregar:

- flujo minimo de usuario;
- puntos de decision;
- informacion necesaria para confianza;
- mensajes permitidos y prohibidos;
- dudas esperadas;
- riesgos de confusion;
- comportamientos observables;
- requisitos de consentimiento/claridad;
- decision UX: claro, claro con condiciones o bloqueado.

### Vetos

Irinas debe vetar:

- valor incomprensible;
- falsa confianza;
- uso de datos oculto o ambiguo;
- copy que promete mas de lo que existe;
- flujo que no permite observar comportamiento;
- interfaz que maquilla propuesta debil;
- friccion critica sin explicacion;
- claims de confianza sin soporte tecnico.

### Handoffs

Irinas entrega a Mercury:

- comportamientos observables;
- puntos de confusion;
- preguntas que no puede responder la UX;
- limites de inferencia.

Irinas entrega a Asirin:

- problemas de scope detectados en el flujo;
- pasos innecesarios;
- decisiones que no entiende el usuario;
- fricciones que sugieren recorte.

Irinas entrega a Nathan:

- puntos donde privacidad, datos o control deben explicarse;
- fricciones de confianza;
- necesidades de consentimiento visible.

Irinas entrega a Gael:

- si el valor comercial se entiende;
- si la confianza permite avance;
- si el mensaje genera objeciones o promesas peligrosas.

### Criterios De Escalado

Irinas escala a Salva si:

- el flujo necesita pedir datos o confianza sensible;
- el copy roza claim publico;
- hay tension entre conversion y honestidad;
- el equipo quiere ocultar friccion para mejorar resultado de prueba;
- la UX puede inducir una conclusion falsa.

### Decisiones Que Puede Bloquear

Irinas puede bloquear:

- flujo de validacion;
- copy;
- materiales de prueba;
- claims de confianza;
- recopilacion de datos si no se entiende;
- paso a validacion si el comportamiento no es observable.

## Decision Gate Previo A Validacion

Este gate debe completarse antes de cualquier Tally, Drive operativo, prueba interna, reclutamiento o mensaje externo.

El gate no aprueba por mayoria. Cualquier bloqueo activo detiene el avance.

### Gate 1 - Target

Debe existir:

- target user definido desde cero;
- exclusiones explicitas;
- contexto de uso;
- usuario operativo;
- comprador economico o hipotesis de comprador.

Owners:

- Asirin: coherencia producto.
- Gael: valor comercial y comprador.
- Mercury: validez para muestra.

Bloquea si:

- el target es demasiado amplio;
- no hay comprador o capacidad de pago;
- no se puede reclutar sin sesgo extremo;
- se hereda contexto pre-reset.

### Gate 2 - Workflow Doloroso

Debe existir:

- workflow doloroso en una frase;
- job-to-be-done principal;
- situacion antes/despues;
- coste o friccion actual;
- comportamiento observable.

Owners:

- Asirin: definicion del workflow.
- Irinas: claridad observable.
- Gael: urgencia economica.
- Mercury: falsabilidad.

Bloquea si:

- el workflow es una lista de features;
- no hay dolor concreto;
- no se observa comportamiento;
- no hay coste o urgencia.

### Gate 3 - Comprador Y Alternativa Actual

Debe existir:

- comprador economico;
- alternativa actual;
- coste de alternativa;
- razon para cambiar;
- objecion principal esperada.

Owners:

- Gael: responsable.
- Mercury: evidencia requerida.
- Asirin: traduccion a producto.

Bloquea si:

- no se sabe quien paga;
- no se entiende que sustituye AD;
- no hay razon de cambio;
- solo hay interes verbal.

### Gate 4 - Monetizacion

Debe existir:

- hipotesis de modelo de monetizacion;
- rango privado de WTP;
- condicion que haria pagar;
- capacidad de pago del target;
- riesgo de CAC;
- criterio de invalidacion comercial.

Owners:

- Gael: responsable.
- Mercury: medibilidad.
- Asirin: relacion con workflow.
- Nathan: coste tecnico que afecta margen.

Bloquea si:

- el precio es deseo interno;
- no hay capacidad de pago;
- el canal parece mas caro que la oportunidad;
- el MVP no aprende nada sobre pago, adopcion o venta.

### Gate 5 - Metodo De Validacion

Debe existir:

- hipotesis falsables;
- metodo de prueba;
- criterio de exito;
- criterio de invalidacion;
- participantes objetivo;
- sesgos conocidos;
- plan de registro de evidencia.

Owners:

- Mercury: responsable.
- Gael: senales comerciales.
- Irinas: comportamiento observable.
- Nathan: datos y exposicion.
- Asirin: ajuste al workflow minimo.

Bloquea si:

- la prueba solo mide opinion;
- no hay invalidacion;
- la muestra no representa target;
- se recopilan datos innecesarios;
- se confunde prueba interna con validacion de mercado.

### Gate 6 - Limites De Datos

Debe existir:

- datos recogidos;
- datos no recogidos;
- motivo de cada dato;
- acceso;
- retencion;
- almacenamiento;
- terceros;
- consentimiento o explicacion visible;
- aprobaciones requeridas.

Owners:

- Nathan: responsable tecnico/privacy.
- Irinas: claridad y confianza.
- Mercury: necesidad para evidencia.
- Salva: aprobacion si afecta legal/privacy/credenciales/produccion.

Bloquea si:

- datos no clasificados;
- datos innecesarios;
- terceros no aprobados;
- usuario no entiende uso de datos;
- hay riesgo legal/privacy sin decision de Salva.

### Gate 7 - Build / Mock / Manual

Debe existir:

- componentes a construir;
- componentes a simular;
- partes manuales;
- partes descartadas;
- razon de cada decision;
- coste/riesgo tecnico;
- aprendizaje esperado.

Owners:

- Asirin: responsable de scope.
- Nathan: viabilidad y riesgo.
- Mercury: suficiencia para validar.
- Irinas: calidad del flujo.
- Gael: relacion con promesa vendible.

Bloquea si:

- se construye antes de necesitarlo;
- el mock no permite observar comportamiento;
- lo manual distorsiona la promesa;
- el build crea riesgo tecnico/privacy prematuro;
- el scope intenta cerrar producto completo.

### Gate 8 - Sign-Off De Owners

Cada owner debe firmar con una de estas opciones:

- aprobado;
- aprobado con condiciones;
- bloqueado.

Cada sign-off debe incluir:

- decision;
- razon;
- riesgos;
- condiciones;
- owner responsable de siguiente accion.

No hay avance si:

- algun owner bloquea;
- falta sign-off;
- falta criterio de invalidacion;
- falta aprobacion de Salva en decisiones reservadas.

## Matriz De Revision Cruzada

| Owner receptor | Revisa de Gael | Revisa de Nathan | Revisa de Mercury | Revisa de Asirin | Revisa de Irinas |
|---|---|---|---|---|---|
| Gael | No aplica | Si restricciones tecnicas afectan margen, venta o promesa | Si evidencia mide demanda, WTP y urgencia, no solo interes | Si scope representa unidad de valor vendible | Si UX comunica valor, confianza y objeciones comerciales |
| Nathan | Si promesa comercial es tecnicamente soportable | No aplica | Si validacion recoge datos necesarios y seguros | Si scope es viable, reversible y de baja complejidad | Si confianza/consentimiento son honestos tecnicamente |
| Mercury | Si hipotesis comercial es falsable | Si metodo es ejecutable sin riesgo tecnico/privacy innecesario | No aplica | Si scope prueba el riesgo principal | Si flujo permite observar comportamiento, no solo preferencia |
| Asirin | Si oportunidad se traduce en workflow concreto | Si restricciones obligan a recortar o simular | Si prueba requiere producto real o material mas simple | No aplica | Si UX revela scope ambiguo, amplio o no confiable |
| Irinas | Si valor y promesa son claros y no exagerados | Si limites de datos/privacy deben verse en flujo | Si prueba mide comprension, accion y abandono | Si scope es un flujo y no una lista de features | No aplica |

## Risk Register Inicial Vivo

| ID | Riesgo | Owner | Severidad | Decision necesaria | Bloqueo |
|---|---|---:|---|---|---|
| R1 | No hay comprador economico definido | Gael | Alta | Definir buyer, usuario e influenciador | Si |
| R2 | Target demasiado amplio o heredado por intuicion | Asirin | Alta | Definir target desde cero y exclusiones | Si |
| R3 | Problema sin urgencia economica | Gael | Alta | Formular coste, perdida, riesgo o ingreso afectado | Si |
| R4 | Alternativa actual desconocida | Gael | Alta | Mapear sustitutos y "no hacer nada" | Si |
| R5 | WTP confundido con interes | Gael | Alta | Definir senales de pago/cambio de conducta | Si |
| R6 | Validacion sin criterio de invalidacion | Mercury | Alta | Escribir invalidation criteria antes de prueba | Si |
| R7 | Sesgo de muestra por convenience recruiting | Mercury | Media/Alta | Definir perfil y sesgos aceptables | Si para reclutamiento |
| R8 | Scope creep hacia producto completo | Asirin | Alta | Lista in-scope/out-of-scope y build/mock/manual | Si |
| R9 | Build prematuro antes de probar riesgo principal | Asirin | Alta | Justificar cada componente por aprendizaje | Si |
| R10 | Datos no clasificados | Nathan | Alta | Clasificacion de datos y limites | Si |
| R11 | Uso de herramientas externas sin aprobacion | Nathan | Alta | Evaluar terceros, datos y permisos | Si |
| R12 | Falsa confianza en UX | Irinas | Alta | Revisar copy, flujo, datos y consentimiento | Si |
| R13 | UX valida preferencia estetica, no comportamiento | Irinas | Media/Alta | Definir acciones observables | Si para validacion |
| R14 | Claims comerciales o tecnicos no soportados | Gael/Nathan/Irinas | Alta | Aprobar claims permitidos/prohibidos | Si |
| R15 | CAC/ruta de venta no viable | Gael | Alta | Estimar canal, esfuerzo y valor potencial | Si |
| R16 | Legal/privacy sin owner preparatorio | Nathan/Salva | Alta | Preparar analisis previo y escalar a Salva | Si ante datos reales |
| R17 | No hay repositorio trazable de evidencia | Mercury | Media | Definir formato de registro | No, salvo validacion externa |
| R18 | Decision por consenso blando sin bloqueo registrado | Todos | Alta | Usar sign-off aprobado/condiciones/bloqueado | Si |

## Memo Comercial Minimo De Gael - Revenue/GTM

Estado actual del memo: pendiente. No hay evidencia activa suficiente para completarlo sin inventar datos.

Gael queda obligado a producir este memo antes de cualquier validacion.

### 1. Comprador

Debe responder:

- quien paga;
- quien usa;
- quien sufre el problema;
- quien bloquea la compra;
- quien aprueba cambio de proceso.

Estado actual:

- Pendiente.

Bloqueo:

- Si no hay comprador economico, no hay validacion comercial valida.

### 2. Willingness To Pay

Debe responder:

- que resultado justificaria pago;
- que rango privado podria ser razonable;
- que prueba separa interes de pago;
- que objecion mata el pago;
- que capacidad de pago tiene el target.

Estado actual:

- Pendiente.

Bloqueo:

- Si solo hay "me interesa" o "lo usaria", no se puede tratar como WTP.

### 3. Canal

Debe responder:

- donde se encuentra al comprador;
- como se consigue primera conversacion;
- que mensaje inicial no exagera;
- que canal es compatible con el valor potencial;
- que friccion de adquisicion se espera.

Estado actual:

- Pendiente.

Bloqueo:

- Si el canal exige esfuerzo alto y ticket bajo, el MVP no debe avanzar sin replantear target o modelo.

### 4. Alternativa Actual

Debe responder:

- que hace hoy el target;
- que herramienta, persona, agencia, spreadsheet o proceso usa;
- que coste tiene;
- que tolera de esa alternativa;
- que tendria que pasar para cambiar.

Estado actual:

- Pendiente.

Bloqueo:

- Si no se conoce alternativa actual, no se sabe contra que compite AD.

### 5. Urgencia Economica

Debe responder:

- que coste tiene no resolverlo;
- si el problema es frecuente, caro, riesgoso o visible;
- por que se resolveria ahora;
- que deadline, perdida o presion existe.

Estado actual:

- Pendiente.

Bloqueo:

- Si el problema es solo molestia sin coste, AD no debe avanzar como SaaS viable.

### 6. CAC / Riesgo De Adquisicion

Debe responder:

- esfuerzo por lead;
- esfuerzo por conversacion;
- esfuerzo por decision;
- ticket o valor esperado;
- riesgo de canal saturado;
- dependencia de relacion personal de Salva.

Estado actual:

- Pendiente.

Bloqueo:

- Si adquisicion depende solo de Salva o no escala al valor potencial, hay que cambiar estructura comercial.

### 7. Ruta De Venta

Debe responder:

- primer contacto;
- primer compromiso pedido;
- siguiente paso despues de interes;
- quien decide;
- ciclo de decision estimado;
- objeciones esperadas;
- que evidencia pedir para avanzar.

Estado actual:

- Pendiente.

Bloqueo:

- Si no hay ruta de venta, no hay piloto SaaS; hay solo exploracion de producto.

## Recomendacion Sobre Revenue/GTM

Recomendacion: Gael reforzado como owner Revenue/GTM, con veto formal y memo comercial obligatorio.

No recomiendo todavia crear un rol GTM separado ni cambiar liderazgo operativo antes de una primera ronda de definicion comercial, porque hacerlo ahora podria anadir coordinacion sin resolver el hueco principal: falta de artefactos comerciales exigibles.

Pero esta recomendacion es condicional.

Debe crearse rol GTM/Revenue separado o cambiar liderazgo operativo si ocurre cualquiera de estos casos:

- Gael no entrega buyer, WTP, canal, alternativa actual, urgencia, CAC y ruta de venta antes de validacion;
- Gael acepta avanzar con interes debil como demanda;
- el equipo sigue dependiendo de Salva para detectar huecos comerciales basicos;
- no se puede traducir el producto a ruta de venta concreta;
- el target requiere venta compleja y Gael no puede cubrir discovery comercial operativo.

## Bloqueos Restantes

Bloqueos activos antes de reactivar piloto:

- Falta completar memo comercial minimo de Gael.
- Falta definir target desde cero.
- Falta definir workflow doloroso en una frase.
- Falta identificar comprador economico.
- Falta mapear alternativa actual.
- Falta hipotesis de monetizacion y WTP.
- Falta metodo de validacion con criterios de invalidacion.
- Falta clasificacion de datos y limites privacy.
- Falta decision build/mock/manual.
- Falta sign-off de los cinco owners.
- Falta aprobacion explicita de Salva para cualquier decision reservada.

Hasta cerrar estos bloqueos, no se autoriza:

- Tally;
- Drive operativo;
- pruebas internas;
- reclutamiento;
- mensajes externos;
- produccion;
- pricing publico;
- pagos;
- acciones legal/privacy;
- credenciales.
