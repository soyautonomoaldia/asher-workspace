# Irinas - Revision Decisiones Base - nuevo_AD_V01

Fecha: 2026-06-03
Owner: Irinas
Alcance revisado:

- `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
- `FICHAS_DECISIONES_COMPLETAS_nuevo_AD_V01.md`
- `INSTRUCCIONES_AGENTES_nuevo_AD_V01.md`
- `README_nuevo_AD_V01.md`

## Decision

Bloqueado.

nuevo_AD_V01 no debe avanzar todavia a validacion, reclutamiento, mensajes externos, datos reales, herramientas operativas, mock operativo, pricing, preventa, pagos ni produccion.

La base actual sirve como borrador de decisiones, pero no como autorizacion operativa. Las fichas contienen propuestas razonables, pero el propio material revisado declara que nada queda aprobado por aparecer como propuesta y que falta decision explicita de Salva y sign-off de owners.

## Razon

La hipotesis de trabajo es comprensible: autonomos tecnicos de campo que registran gastos profesionales cerca del momento de pago mediante foto y contexto breve. Como direccion de exploracion, es plausible. Como base para avanzar, aun no es defendible.

El bloqueo principal no es de redaccion, sino de decision. Las piezas criticas siguen en estado de propuesta o pendiente:

- target inicial;
- buyer economico;
- alternativa actual;
- workflow doloroso observable;
- WTP privada;
- canal inicial;
- limites de datos;
- modo de prueba;
- metodo de evidencia;
- consentimiento visible;
- limites de promesa;
- sign-off formal.

Desde UX, el punto mas debil es que todavia no esta definido que entiende, acepta y controla el usuario antes de entregar una foto, una nota o cualquier dato asociado a un gasto. Sin ese flujo minimo de confianza, cualquier prueba posterior mediria curiosidad, ayuda manual o tolerancia a la ambiguedad, no adopcion real.

Tambien falta cerrar la promesa exacta desde la experiencia del usuario. El documento acierta al prohibir fiscalidad exacta, asesoramiento fiscal, integraciones, e-factura y automatizacion contable completa. Pero esa restriccion aun no esta convertida en interfaz, copy, consentimiento ni criterio de abandono. Mientras eso no exista, el riesgo de que el usuario interprete AD como contabilidad, gestoría o garantia fiscal sigue abierto.

## Riesgos

1. Falso avance por target plausible.

El target propuesto es estrecho y mejor que una audiencia generica, pero todavia no esta aprobado. Sin aprobacion, cualquier aprendizaje posterior podria mezclar instaladores, SAT, mantenimiento, autonomos con poco dolor, usuarios de oficina o personas que solo quieren ayudar.

2. Buyer no probado como comprador real.

El autonomo propietario aparece como buyer recomendado, pero sigue siendo un supuesto. Falta decidir que coste sustituye AD: tiempo mensual, tickets perdidos, friccion con gestoría, errores, estres o una combinacion concreta. Si no hay coste reconocido, puede ser una utilidad amable pero no un producto vendible.

3. Alternativa actual formulada, no observada.

La alternativa "bolsillo, furgoneta, carpeta, WhatsApp o email" es verosimil, pero el documento exige comportamiento real observable. Si esa alternativa resulta suficiente, barata o culturalmente aceptada, AD pierde urgencia.

4. Workflow todavia demasiado dependiente de la hipotesis.

El flujo doloroso esta bien descrito, pero no esta convertido en un mapa operativo minimo: disparador, momento de captura, informacion imprescindible, correccion, abandono, conservacion, exportacion y uso posterior. Sin eso, el mock/manual puede simular una solucion distinta a la que realmente se quiere aprender.

5. WTP con riesgo de ficcion.

El rango 9/19/29 EUR puede servir como instrumento privado posterior, pero todavia no hay decision aprobada. Ademas, la senal "aceptan pagar, entrar en piloto o discutir preventa condicionada" queda demasiado cerca de promesas comerciales que el propio marco actual no autoriza. Debe reformularse como intencion privada no vinculante hasta que Salva autorice otra cosa.

6. Canal inicial no defendible aun.

Los canales posibles estan listados, pero no hay un canal seleccionado con criterio de acceso, sesgo esperado, rechazo de participantes no cualificados y control de cortesia. La red cercana solo es aceptable si cumple criterios duros; de lo contrario, produciria falso positivo.

7. Riesgo de datos y confianza.

La prueba futura implicaria fotos de tickets o facturas, importes, proveedores, notas y timestamps. Aunque hay una lista clara de datos prohibidos, faltan herramienta, almacenamiento, acceso, retencion, borrado, terceros y consentimiento visible. Sin eso, no debe capturarse nada real.

8. Riesgo de promesa fiscal implicita.

Aunque se prohibe prometer asesoramiento fiscal, deducciones garantizadas, calculo exacto de impuestos e integracion con gestoría, el caso de uso toca documentos contables y relacion con gestoría. La interfaz debe decir claramente que AD conserva y organiza informacion, no valida fiscalmente ni sustituye criterio profesional.

9. Riesgo de falso positivo por ayuda manual.

El modo mock/manual es adecuado solo si se limita estrictamente la intervencion. Si una persona corrige, limpia, estructura o persigue al usuario demasiado, se medira servicio asistido, no producto minimo.

10. Riesgo de decision circular.

El documento exige sign-off de Gael, Asirin, Mercury, Nathan e Irinas, pero varias decisiones dependen entre si. Si Salva no decide primero las ocho piezas prioritarias, los owners pueden bloquear por falta de base comun.

## Condiciones Para Desbloquear

1. Salva debe aprobar, cambiar o bloquear explicitamente estas ocho decisiones antes de cualquier otro avance:

- target inicial;
- buyer economico;
- alternativa actual;
- workflow doloroso observable;
- WTP privada y rango;
- canal inicial;
- datos permitidos/prohibidos;
- modo de prueba mock/manual/build.

2. El target debe quedar operativo, no solo descriptivo.

Debe incluir criterio de entrada, criterio de exclusion, frecuencia minima de gastos, tipo de gasto relevante, relacion con gestoría y senales de dolor suficientes. Si el dolor principal es facturacion, cobros, presupuestos o clientes, el participante queda fuera.

3. El buyer debe quedar vinculado a una razon de pago concreta.

Debe decidirse que coste sustituye AD y por que ese coste podria justificar pago: tiempo, perdida de justificantes, errores, estres, friccion con gestoría u otra razon escrita dentro de la carpeta.

4. La alternativa actual debe escribirse como comportamiento observable.

No basta con decir que usan WhatsApp, carpeta o furgoneta. Debe quedar claro cuando ocurre, quien interviene, que se pierde, cuanto se retrasa y que evento hace doloroso el cierre.

5. El workflow minimo debe tener secuencia UX cerrada.

Debe definirse:

- que dispara el registro;
- que ve el usuario antes de capturar;
- que dato minimo introduce;
- que puede corregir;
- que pasa si abandona;
- que queda guardado;
- que significa "archivo exportable";
- que resultado ve antes de confiar.

6. WTP debe quedar formulada sin preventa ni compromiso operativo.

Mientras no haya autorizacion expresa para preventa, pagos o compromisos comerciales, la WTP solo puede tratarse como pregunta privada de investigacion. No debe confundirse "precio razonable" con venta, piloto pagado ni compromiso real.

7. El canal debe quedar elegido y sesgo-controlado.

Debe seleccionarse un canal inicial, no una lista de posibilidades. Tambien debe definirse como se evita muestra por comodidad, participantes que quieren ayudar y perfiles demasiado variados.

8. Datos, consentimiento y limites de promesa deben aprobarse antes de cualquier mock o captura.

Debe quedar aprobado:

- datos permitidos;
- datos prohibidos;
- herramienta;
- almacenamiento;
- acceso;
- retencion;
- borrado;
- terceros;
- uso o no uso de OCR/STT;
- texto visible de consentimiento;
- texto visible de "no asesoramiento fiscal".

9. El metodo de evidencia debe dejar de ser preliminar.

Mercury debe convertir las hipotesis en criterios cerrados de avance, reformulacion, bloqueo o descarte. Tambien debe definir muestra, sesgos, registro de evidencia y peso de cada senal.

10. Debe existir sign-off formal de Gael, Asirin, Mercury, Nathan e Irinas.

Si falta un owner, hay un bloqueo, falta aprobacion de Salva, faltan criterios de invalidacion, falta decision de datos o falta decision mock/manual/build, el estado sigue bloqueado.

## Cambios Concretos Propuestos

1. Cambiar el estado operativo de las fichas de "borrador limpio para decision de Salva" a una tabla de decision con tres estados posibles por pieza: aprobado, aprobado con condiciones, bloqueado.

2. Crear una seccion unica llamada "Decisiones aprobadas por Salva" dentro de `SOURCE_OF_TRUTH_nuevo_AD_V01.md`. Hasta que una decision aparezca ahi, no debe considerarse operativa.

3. Separar "WTP privada" de cualquier lenguaje de preventa, piloto comprometido o pago. La formulacion actual debe evitar senales que contradigan la prohibicion vigente de preventa, cobros o pagos.

4. Convertir la Decision 11 en un flujo UX minimo obligatorio antes de cualquier prueba:

- pantalla o mensaje previo;
- consentimiento;
- captura;
- revision;
- guardado;
- exportacion;
- limite fiscal visible;
- abandono/borrado.

5. Añadir una matriz de exclusion de participantes:

- no target;
- pocos gastos;
- dolor principal distinto;
- ya usa bien otra herramienta;
- comprador no identificado;
- participa por cercania o cortesia.

6. Añadir una regla de intervencion manual maxima para el mock/manual:

- que puede hacer el operador;
- que no puede corregir;
- cuando se cuenta como abandono;
- cuando se invalida el registro por exceso de ayuda.

7. Sustituir "canales posibles" por "canal inicial elegido" antes de cualquier accion externa.

8. Añadir una decision explicita sobre el archivo final: que contiene, que no contiene, quien lo recibe, si se comparte con gestoría o solo queda para revision del usuario.

9. Añadir una tabla de riesgos UX/trust:

- expectativa fiscal;
- miedo a datos sensibles;
- vergüenza o desorden documental;
- captura en momento incomodo;
- friccion de foto + nota;
- confianza en exportacion;
- comprension de limites.

10. Añadir un criterio de descarte, no solo de invalidacion parcial.

Ejemplo: si el caso requiere banco, gestoría integrada, fiscalidad exacta o automatizacion compleja para ser valioso, nuevo_AD_V01 debe descartarse o reformularse, no avanzar por acumulacion de features.

## Siguiente Accion Responsable

Responsable: Salva.

Siguiente accion: decidir explicitamente las ocho piezas prioritarias indicadas en la fuente:

1. Target inicial.
2. Buyer economico.
3. Alternativa actual.
4. Workflow doloroso observable.
5. WTP privada y rango.
6. Canal inicial.
7. Datos permitidos/prohibidos.
8. Modo de prueba mock/manual/build.

Despues de esa decision, la fuente operativa debe actualizarse y cada owner debe emitir sign-off formal desde la misma base.

Hasta entonces, la decision de Irinas es: bloqueado.
