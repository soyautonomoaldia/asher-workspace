# Fichas De Decisiones Completas - nuevo_AD_V01

Fecha: 2026-06-03
Estado: borrador limpio para decision de Salva
Fuente principal: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## Regla De Uso

Estas fichas convierten nuevo_AD_V01 en decisiones concretas.

Nada queda aprobado por aparecer como propuesta. Cada punto necesita decision explicita de Salva y sign-off del owner correspondiente.

## Decision 1 - Target Inicial

Estado: propuesta para decision de Salva.

Decision recomendada:

nuevo_AD_V01 debe empezar con un unico target estrecho:

Autonomo propietario o microempresa pequena de instalacion, reparacion o mantenimiento tecnico a domicilio, con trabajo frecuente fuera de oficina y gastos profesionales recurrentes.

Ejemplos aceptables:

- climatizacion;
- electricidad;
- fontaneria;
- SAT tecnico;
- mantenimiento tecnico.

Criterios de inclusion:

- trabaja fuera de oficina la mayor parte de la semana;
- realiza al menos 5 gastos profesionales semanales;
- gestiona tickets/facturas de forma manual, tardia o desordenada;
- entrega documentacion a gestor/a o la ordena a final de mes;
- reconoce perdida de tiempo, perdida de justificantes, estres o errores.

Exclusiones:

- autonomos con pocos gastos;
- perfiles de oficina;
- usuarios que ya usan bien una app de gastos;
- empresas con procurement, compliance o compras centralizadas;
- casos donde el dolor principal sea facturacion, cobros, presupuestos o clientes;
- participantes cercanos que no cumplan frecuencia y dolor.

Riesgo si no se decide:

Se reclutara gente demasiado distinta y cualquier aprendizaje sera ruido.

Owner principal: Asirin.
Owner secundario: Gael.
Condicion de desbloqueo: Salva aprueba o cambia el target inicial.

## Decision 2 - Buyer Economico

Estado: propuesta para decision de Salva.

Decision recomendada:

El buyer economico inicial es el propio autonomo propietario o dueno de microempresa.

La gestor/a no es buyer inicial. Puede ser influenciador o receptor del resultado, pero AD no se disena inicialmente como software para gestorías.

Supuesto:

El autonomo pagaria si AD reduce perdida de tickets, cierre mensual, trabajo administrativo y friccion con gestoría sin exigirle aprender un software complejo.

Riesgo:

Si el autonomo no reconoce coste economico o urgencia, el producto puede ser util pero no vendible.

Preguntas criticas:

- Quien paga hoy por resolver este problema?
- Que gasto, perdida o molestia concreta sustituye AD?
- Por que cambiaria ahora y no seguiria con WhatsApp, caja de tickets o gestoría?

Owner principal: Gael.
Condicion de desbloqueo: buyer definido con razon de pago y capacidad de pago.

## Decision 3 - Alternativa Actual

Estado: propuesta para decision de Salva.

Decision recomendada:

La alternativa actual dominante a validar es:

Tickets en bolsillo, furgoneta, carpeta, WhatsApp o email, mas orden manual a final de semana/mes y envio a gestoría.

Costes o fricciones a observar:

- tiempo mensual de ordenar tickets;
- perdida de justificantes;
- reconstruccion desde extractos;
- estres antes del cierre;
- dudas con IVA/categoria;
- dependencia de memoria;
- discusiones o idas y vueltas con gestoría.

Riesgo:

Si la alternativa actual es barata, aceptada y suficiente, AD no tendra urgencia comercial.

Owner principal: Gael.
Owner secundario: Mercury.
Condicion de desbloqueo: alternativa descrita como comportamiento real observable, no como opinion.

## Decision 4 - Workflow Doloroso

Estado: propuesta para decision de Salva.

Decision recomendada:

Workflow doloroso:

El autonomo realiza gastos durante la jornada, guarda tickets de forma improvisada, pospone el registro y despues reconstruye la informacion tarde, con perdida de tiempo, estres, riesgo de errores y posible perdida de justificantes.

Comportamiento observable que importa:

- captura o no captura cerca del momento de pago;
- adjunta o no adjunta foto/documento;
- anade o no anade contexto breve;
- corrige o abandona;
- pide conservar, exportar o compartir el registro;
- vuelve a usar el flujo sin persecucion manual.

No medir como senal principal:

- "me gusta";
- "lo usaria";
- "suena util";
- interes verbal sin comportamiento.

Owner principal: Asirin.
Owner secundario: Mercury e Irinas.
Condicion de desbloqueo: workflow escrito como secuencia observable.

## Decision 5 - Propuesta De Valor MVP

Estado: propuesta para decision de Salva.

Decision recomendada:

nuevo_AD_V01 no promete contabilidad, fiscalidad exacta ni automatizacion completa.

Promesa minima:

Registrar y conservar gastos profesionales en el momento con foto y contexto breve para reducir acumulacion, perdida de justificantes y trabajo de cierre.

No prometer:

- asesoramiento fiscal;
- deducciones garantizadas;
- calculo exacto de impuestos;
- integracion bancaria;
- integracion con gestoría;
- e-factura;
- automatizacion contable completa.

Riesgo:

Si la promesa se infla, cualquier evaluacion posterior medira una fantasia de producto completo y no el caso minimo.

Owner principal: Asirin.
Owner secundario: Irinas y Nathan.
Condicion de desbloqueo: promesa minima aprobada y limites visibles.

## Decision 6 - WTP Privada

Estado: propuesta para decision de Salva.

Decision recomendada:

La WTP solo se explora de forma privada e investigadora. No hay pricing publico.

Rango inicial de exploracion:

- 9 EUR/mes: herramienta ligera individual;
- 19 EUR/mes: si ahorra cierre mensual y genera archivo util;
- 29 EUR/mes: solo si el dolor es frecuente, claro y el usuario percibe impacto economico.

Condicion para preguntar WTP:

Solo despues de confirmar que el participante reconoce dolor real y alternativa actual insuficiente.

Pregunta ejemplo:

"Si esto te dejara los gastos del mes listos para revisar y enviar a gestoría, que precio mensual te pareceria razonable: 9, 19 o 29 EUR? A partir de que precio no lo pagarias?"

Senal minima:

Al menos 2 de 5 participantes cualificados aceptan pagar, entrar en piloto con compromiso claro o discutir preventa condicionada.

Riesgo:

Confundir "me interesa" con "pagaria".

Owner principal: Gael.
Owner secundario: Mercury.
Condicion de desbloqueo: Salva aprueba explorar WTP privada y rango.

## Decision 7 - Canal Inicial

Estado: propuesta para decision de Salva.

Decision recomendada:

Canal inicial de acceso a participantes cualificados:

Acceso directo a autonomos tecnicos cualificados mediante red cercana solo si cumplen criterios duros, mas busqueda controlada en entornos donde existan instaladores, SAT o mantenimiento.

Canales posibles:

- proveedores locales de materiales;
- gestorías que trabajan con autonomos de oficio;
- contactos profesionales cualificados;
- comunidades o grupos de oficios;
- asociaciones pequenas del sector.

Prohibido como base principal:

- amigos que no encajan;
- muestra por comodidad;
- participantes que quieren ayudar a Salva;
- perfiles demasiado variados.

Riesgo:

Una muestra cercana puede producir falso positivo por cortesia.

Owner principal: Gael.
Owner secundario: Mercury.
Condicion de desbloqueo: canal con acceso realista a participantes cualificados y sesgo controlado.

## Decision 8 - Datos Permitidos Y Prohibidos

Estado: propuesta para decision de Salva.

Decision recomendada:

Datos permitidos para una futura prueba controlada, si Salva aprueba:

- foto de ticket/factura/documento;
- fecha aproximada;
- proveedor;
- importe;
- IVA si aparece claramente;
- categoria simple;
- nota breve de contexto;
- estado de correccion;
- timestamp de captura;
- abandono o no uso.

Datos prohibidos:

- DNI;
- datos bancarios;
- credenciales;
- datos fiscales completos;
- acceso a cuenta bancaria;
- acceso a gestoría;
- geolocalizacion precisa;
- datos de clientes salvo contexto minimo inevitable;
- datos para marketing, demos o entrenamiento.

Pendiente antes de cualquier dato real:

- herramienta de captura;
- almacenamiento;
- acceso;
- retencion;
- borrado;
- terceros;
- si hay OCR/STT externo;
- texto de consentimiento visible.

Riesgo:

Sin esta decision, cualquier prueba con tickets, voz o documentos puede crear riesgo privacy/security innecesario.

Owner principal: Nathan.
Owner secundario: Irinas.
Condicion de desbloqueo: Salva aprueba limites de datos, terceros y retencion.

## Decision 9 - Modo De Prueba: Mock / Manual / Build

Estado: propuesta para decision de Salva.

Decision recomendada:

No construir producto todavia.

Modo inicial recomendado:

Prueba mock/manual controlada, sin automatizacion real, solo despues de aprobar target, datos, metodo y consentimiento.

Que se simula:

- captura simple del gasto;
- confirmacion de datos;
- archivo final exportable.

Que se hace manualmente:

- consolidacion de registros;
- limpieza minima permitida;
- preparacion del archivo de revision.

Que no existe:

- app completa;
- OCR/STT automatico no aprobado;
- integracion bancaria;
- integracion con gestoría;
- calculo fiscal;
- e-factura;
- automatizacion contable.

Riesgo:

Si se construye antes, se gasta energia en tecnologia sin saber si hay dolor, buyer o datos aceptables. Si lo manual ayuda demasiado, se crea falso positivo.

Owner principal: Asirin.
Owner secundario: Nathan, Mercury e Irinas.
Condicion de desbloqueo: modo aprobado con limites de intervencion manual.

## Decision 10 - Metodo De Evidencia Y Decision

Estado: pendiente de definir tras aprobar decisiones 1 a 9.

Hipotesis a transformar en criterio de decision:

- el target registra gastos reales cerca del momento de pago;
- foto + nota breve reduce friccion;
- el archivo final se entiende y genera confianza;
- el usuario acepta limites de datos;
- existe WTP privada suficiente;
- el flujo no exige producto completo.

Criterios de invalidacion preliminares:

- menos del 50% de gastos reales se registran dentro de 10 minutos;
- 3 de 5 usuarios evitan voz en situacion real;
- mas del 30% de registros requieren correccion fuerte;
- menos de 2 de 5 aceptan pagar o compromiso claro;
- 3 de 5 dicen que el problema principal es otro;
- los usuarios solo registran porque se les persigue;
- el caso exige banco, gestoría integrada, fiscalidad exacta o automatizacion compleja;
- 3 de 5 rechazan compartir datos minimos incluso con limites claros.

Owner principal: Mercury.
Condicion de desbloqueo: hipotesis, muestra, metricas, registro de evidencia, sesgos y opciones de decision definidos.

## Decision 11 - UX, Consentimiento Y Limites De Promesa

Estado: pendiente.

Debe definirse antes de cualquier prueba:

- que ve el usuario antes de subir foto o nota;
- que datos entiende que se capturan;
- quien puede verlos;
- para que se usan;
- cuando se borran;
- que debe confirmar;
- que pasa si corrige o abandona;
- que significa archivo exportable;
- copy claro de "no asesoramiento fiscal".

Owner principal: Irinas.
Owner secundario: Nathan.
Condicion de desbloqueo: flujo UX minimo y consentimiento visible aprobados.

## Decision 12 - Sign-Off Formal

Estado: pendiente.

Para desbloquear cualquier accion externa deben responder:

- Gael;
- Asirin;
- Mercury;
- Nathan;
- Irinas.

Formato:

- aprobado;
- aprobado con condiciones;
- bloqueado.

No hay avance si:

- falta un owner;
- hay un bloqueo;
- falta aprobacion de Salva;
- falta criterio de invalidacion;
- falta decision sobre datos;
- falta decision sobre build/mock/manual.

## Riesgo Si No Se Trabaja Desde Esta Base

Si los agentes no trabajan desde una unica fuente limpia, AD queda expuesto a:

- targets amplios;
- decisiones implicitas;
- evaluacion con muestra incorrecta;
- interes verbal tratado como demanda real;
- mezcla de producto, comercial, evidencia y privacidad sin orden;
- construccion prematura;
- captura de datos sin limites;
- sign-offs sobre informacion distinta;
- bloqueos circulares;
- aprendizaje no util para decidir.

El riesgo principal no es ir mas lento. El riesgo principal es avanzar sobre una base debil y tener que rehacer decisiones.

## Proxima Accion Recomendada

Salva debe decidir primero estas 8 piezas:

1. Target inicial.
2. Buyer economico.
3. Alternativa actual.
4. Workflow doloroso observable.
5. WTP privada y rango.
6. Canal inicial.
7. Datos permitidos/prohibidos.
8. Modo de prueba mock/manual/build.

Despues, cada owner revisa solo esta carpeta y emite sign-off. Hasta entonces, nuevo_AD_V01 sigue bloqueado.
