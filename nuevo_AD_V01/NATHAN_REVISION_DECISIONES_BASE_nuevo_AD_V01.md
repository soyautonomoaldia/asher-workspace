# NATHAN_REVISION_DECISIONES_BASE_nuevo_AD_V01

Fecha: 2026-06-03
Owner: Nathan
Ambito revisado:

- `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
- `FICHAS_DECISIONES_COMPLETAS_nuevo_AD_V01.md`
- `INSTRUCCIONES_AGENTES_nuevo_AD_V01.md`
- `README_nuevo_AD_V01.md`

## Decision

Bloqueado.

nuevo_AD_V01 no debe avanzar todavia a validacion, reclutamiento, mensajes externos, datos reales, herramientas operativas, mock operativo, pricing, preventa, pagos ni produccion.

No lo descarto porque la hipotesis de registrar gastos profesionales cerca del momento de pago para autonomos tecnicos de campo es concreta y podria ser evaluable. Tampoco lo apruebo con condiciones porque las condiciones actuales no estan cerradas como decisiones operativas: son propuestas pendientes de aprobacion, metodo, limites y sign-off.

## Razon

La carpeta define correctamente una base limpia y evita arrastre de contexto externo, pero el estado operativo sigue siendo definicion bloqueada.

Las piezas criticas aparecen como propuestas o pendientes, no como decisiones aprobadas:

- target inicial estrecho;
- buyer economico;
- alternativa actual;
- workflow doloroso observable;
- WTP privada;
- canal inicial;
- datos permitidos y prohibidos;
- modo de prueba;
- metodo de evidencia;
- consentimiento visible;
- criterios de invalidacion;
- sign-off formal de owners.

Desde responsabilidad tecnica, el bloqueo principal esta en datos, privacidad, seguridad y reversibilidad. La propuesta futura toca fotos de tickets/facturas, proveedor, importe, IVA, categoria, notas, timestamps y comportamiento de uso. Eso puede incluir informacion fiscal, comercial o de clientes. Antes de cualquier captura real falta decidir herramienta, almacenamiento, acceso, retencion, borrado, terceros, OCR/STT externo y consentimiento visible.

La recomendacion de no construir producto todavia es correcta. Pero incluso una prueba mock/manual controlada no esta desbloqueada, porque requiere decisiones previas sobre target, datos, metodo y consentimiento. Si se ejecuta sin esas decisiones, se convierte en una prueba operativa encubierta con riesgo privacy/security y evidencia debil.

## Riesgos

1. Riesgo de falso avance.

Las fichas estan bien formuladas, pero pueden crear sensacion de decision cuando aun no hay aprobacion explicita de Salva ni sign-off de owners.

2. Riesgo de muestra invalida.

Si el target o canal se abre por comodidad, el aprendizaje sera ruido. Participantes cercanos o perfiles variados podrian validar cortesia, no demanda.

3. Riesgo de buyer debil.

El autonomo propietario aparece como buyer recomendado, pero falta razon de pago defendible. Si el dolor se percibe como molestia tolerable, AD podria ser util pero no vendible.

4. Riesgo de alternativa demasiado barata.

Tickets en bolsillo, furgoneta, WhatsApp, email, carpeta y gestoría pueden ser suficientemente aceptables. Si no se cuantifica coste, urgencia o frecuencia, no hay caso economico.

5. Riesgo de promesa inflada.

Si se mezcla registro ligero con fiscalidad, gestoría, banco, e-factura, OCR/STT o automatizacion contable, el MVP deja de ser minimo y se evalua una promesa no construible en esta fase.

6. Riesgo privacy/security.

Fotos de tickets y facturas pueden contener datos de proveedor, cliente, direccion, NIF/CIF, importes, conceptos, medios de pago u otra informacion sensible. Sin retencion, borrado, acceso, terceros y consentimiento, no debe capturarse nada real.

7. Riesgo de metodo manual contaminado.

Si el equipo persigue usuarios, limpia demasiado los datos o entrega un archivo final con valor creado manualmente fuera del flujo minimo, puede generar falso positivo sobre producto.

8. Riesgo de WTP prematura.

Preguntar precio antes de confirmar dolor, alternativa insuficiente y frecuencia puede producir respuestas especulativas. Preventa, cobro o pricing publico estan expresamente no autorizados.

9. Riesgo de build prematuro.

Construir antes de cerrar evidencia, datos y consentimiento consumiria esfuerzo tecnico en una solucion que podria requerir banco, gestoría integrada, fiscalidad exacta o automatizacion compleja, justo lo que el MVP excluye.

## Condiciones Para Desbloquear

nuevo_AD_V01 solo deberia pasar de bloqueado a aprobado con condiciones cuando esten cerradas, dentro de la carpeta, estas decisiones:

1. Target aprobado por Salva con criterios de inclusion y exclusion no ambiguos.
2. Buyer economico aprobado con razon de pago, capacidad de pago y alternativa que sustituye.
3. Alternativa actual descrita como comportamiento observable, no opinion.
4. Workflow doloroso aprobado como secuencia medible.
5. Propuesta de valor MVP aprobada con limites visibles de no fiscalidad, no contabilidad, no banco, no gestoría integrada y no automatizacion completa.
6. WTP privada aprobada solo como investigacion, sin pricing publico, preventa ni cobro.
7. Canal inicial aprobado con controles contra muestra de comodidad.
8. Datos permitidos/prohibidos aprobados, incluyendo retencion, borrado, acceso, terceros y prohibicion de uso para marketing, demos o entrenamiento.
9. Modo de prueba aprobado: mock/manual/build, con limites claros de intervencion manual.
10. Metodo de evidencia aprobado con muestra, metricas, registro de evidencia, sesgos y criterios de invalidacion.
11. Consentimiento visible aprobado antes de cualquier foto, nota o documento real.
12. Sign-off formal de Gael, Asirin, Mercury, Nathan e Irinas.
13. Actualizacion de `SOURCE_OF_TRUTH_nuevo_AD_V01.md` para reflejar solo decisiones aprobadas, no propuestas.

## Cambios Concretos Propuestos

1. Separar cada decision en tres estados visibles:

- propuesta;
- aprobada por Salva;
- bloqueada por owner.

Ahora el documento es fuerte como borrador, pero necesita una marca inequivoca de decision operativa.

2. Anadir una tabla de decision base al `SOURCE_OF_TRUTH_nuevo_AD_V01.md`:

- decision;
- estado;
- owner;
- aprobador;
- fecha;
- condicion de desbloqueo;
- bloqueo activo.

3. Convertir la decision de datos en una politica minima antes de cualquier prueba:

- que datos se permiten;
- que datos se prohiben;
- donde se guardan;
- quien accede;
- durante cuanto tiempo;
- como se borra;
- que terceros existen;
- si OCR/STT esta prohibido o aprobado;
- texto exacto de consentimiento.

4. Definir una version de prueba sin datos reales como paso previo posible.

Si Salva quiere reducir riesgo tecnico, puede aprobar solo un ejercicio interno de diseño documental sin tickets reales, sin usuarios, sin mock operativo y sin herramienta externa. Eso permitiria cerrar flujo, consentimiento y criterios antes de pedir ningun dato.

5. Endurecer criterios de invalidacion antes de validar.

Los criterios preliminares son buenos, pero deben quedar como regla de decision: que resultado lleva a avanzar, reformular, bloquear o descartar.

6. Definir frontera exacta entre manual y producto.

Debe quedar escrito que parte del valor la genera el usuario, que parte el sistema simulado y que parte el equipo. Si el equipo crea demasiado valor manual, la prueba no sirve para decidir build.

7. Exigir un criterio economico minimo antes de cualquier build.

No basta con dolor declarado. Debe haber una senal defendible de coste actual, frecuencia, urgencia y disposicion privada a pagar.

## Siguiente Accion Responsable

Salva debe decidir primero si acepta el estado bloqueado y ordenar una ronda de cierre de decisiones dentro de la carpeta.

La siguiente accion concreta no debe ser validar ni reclutar. Debe ser actualizar `SOURCE_OF_TRUTH_nuevo_AD_V01.md` con una tabla de decisiones base y pedir a cada owner un sign-off formal sobre esas decisiones.

Mi posicion como Nathan:

- aprobado para mantener la definicion y mejorar el marco de decision;
- bloqueado para cualquier accion externa u operativa;
- bloqueado para captura de datos reales;
- bloqueado para mock operativo;
- bloqueado para build;
- bloqueado para pricing, preventa, pagos o produccion.
