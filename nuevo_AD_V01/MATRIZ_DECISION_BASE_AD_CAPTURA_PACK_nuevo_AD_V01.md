# MATRIZ_DECISION_BASE_AD_CAPTURA_PACK - nuevo_AD_V01

Fecha: 2026-06-07
Owner: Asher
Estado: matriz interna aprobada por Salva el 2026-06-07 a las 16:33 CEST; sign-off secuencial encargado a Gael
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
Referencias:

- `FICHA_INTERNA_TARGET_WORKFLOW_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `FICHA_12_WORKFLOWS_FICTICIOS_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `MVP_ONE_PAGER_AD_CAPTURA_nuevo_AD_V01.md`
- `CRITERIOS_MOCK_PRIVADO_NO_OPERATIVO_AD_CAPTURA_nuevo_AD_V01.md`

## 0. Limites

Esta matriz no autoriza:

- validacion externa;
- reclutamiento;
- mensajes externos;
- usuarios reales;
- datos reales;
- audios reales;
- WhatsApps reales;
- emails reales;
- calendarios reales;
- tickets reales;
- facturas reales;
- pricing publico;
- preventa;
- pagos;
- build operativo;
- integraciones reales;
- produccion;
- efectos externos.

La matriz solo organiza decisiones base internas y condiciones de avance.

Nota de decision:

Salva aprobo esta matriz interna el 2026-06-07 a las 16:33 CEST y pidio que Gael gestione el sign-off secuencial de owners. La aprobacion no desbloquea validacion externa, outreach, usuarios reales, datos reales, pricing, build operativo ni integraciones.

## 1. Veredicto Interno

Veredicto recomendado:

> Mantener `AD Captura Pack` como hipotesis interna estrecha, solo para capturas simples de reparacion domestica sencilla que preparan acciones manuales internas.

No pasar todavia a validacion externa.

Razon:

- La ficha de 12 workflows muestra forma de producto: 8 mantener, 3 ajustar, 1 invalidar.
- Hay conexion economica o de tiempo en 11/12 casos ficticios.
- El riesgo de deriva es material: 6/12 casos rozan integraciones, facturacion, WhatsApp, calendario o gestoría.

Lectura:

La oportunidad existe como hipotesis documental, pero todavia no esta probada como demanda, WTP, retencion ni canal.

## 2. Matriz De Decision

| Area | Decision candidata | Evidencia interna | Riesgo principal | Owner | Condicion de avance | Estado |
| --- | --- | --- | --- | --- | --- | --- |
| Target inicial | Autonomo o microequipo de reparacion domestica sencilla, prioridad fontanero/reparaciones rapidas. | Ficha target/workflow aprobada como hipotesis interna; 12 workflows encajan mejor en visitas, material, cobros y cierres. | Target demasiado ancho si incluye reformas, comunidades, gas, calderas o SAT. | Salva + Gael + Asirin | Aprobar exclusion explicita de casos complejos. | Candidato interno |
| Buyer economico | El propio autonomo que cobra, compra material y sufre el olvido. | El dolor conecta con vuelta, cobro, material y cierre del trabajo. | Si decide gestoría o empresa, cambia el producto y canal. | Gael | Confirmar que el autonomo tiene poder real de pago y decision. | Pendiente |
| Alternativa actual | Memoria, WhatsApp consigo mismo, notas, libreta, fotos, calendario y herramienta de facturacion si ya la usa. | Ficha target/workflow identifica alternativas plausibles. | Si WhatsApp/notas ya resuelven sin perdida economica, AD no tiene hueco. | Mercury + Gael | Definir que perdida concreta AD reduce frente a WhatsApp/notas. | Pendiente |
| Workflow observable | Captura en menos de 10 segundos al terminar/interrumpir una visita, despues tarjeta accionable revisable. | 12 workflows ficticios muestran casos mantenibles. | Que el usuario no revise despues o la bandeja se abandone. | Asirin + Irinas | Probar internamente que revisar es mas rapido que reconstruir el contexto. | Candidato interno |
| Propuesta de valor | `Diselo a AD una vez; AD te lo deja listo para actuar.` | El valor aparece cuando la tarjeta prepara compra, vuelta, llamada, cobro, presupuesto interno o cierre. | Que suene a nota ordenada sin valor suficiente. | Asirin + Gael | Cada tarjeta debe reducir una accion manual posterior. | Candidato interno |
| WTP privada | Explorar solo como hipotesis: 9-19 EUR/mes simple; 19-39 EUR/mes si reduce cierres/cobros/presupuestos. | Rango interno de ficha target/workflow. | El usuario exigira facturacion, WhatsApp, gestoría o ERP por ese precio. | Gael + Mercury | No publicar precios; convertir WTP en hipotesis falsable futura. | Pendiente |
| Canal inicial | Por definir; candidatos: contactos propios/referidos y descubrimiento controlado futuro. | Aun no hay permiso para mensajes externos. | Canal no escalable o CAC superior al ticket. | Gael | Definir canal antes de cualquier validacion. | Pendiente |
| Datos permitidos | Solo ficticios en documentos y mock local sin persistencia real. | Fuente de verdad y fichas previas. | Contaminar evidencia con datos reales o sensibles. | Nathan | Politica de datos, consentimiento, retencion y borrado antes de usuarios reales. | Bloqueado para real |
| Datos prohibidos | Nombres reales, telefonos, direcciones, audios, fotos, chats, tickets, facturas, NIF, datos fiscales/bancarios, importes reales. | Fichas de limites y privacidad. | El caso de uso natural pide justo esos datos. | Nathan | Definir redaccion y UX de consentimiento antes de cualquier prueba real. | Bloqueado para real |
| Metodo de prueba | Siguiente metodo interno: matriz + decision de owners; futuro metodo real aun no aprobado. | Microfase y 12 workflows son documentales, no mercado. | Confundir simulacion con evidencia de demanda. | Mercury | Definir hipotesis, muestra, criterio de invalidacion y datos antes de validar. | Pendiente |
| Invalidadores | Exigir factura legal, VeriFactu, WhatsApp real, calendario real, fotos, cobro automatico, comunidad compleja o sustitucion de gestoría. | Reforzados en ficha de 12 workflows. | Ignorar invalidadores por entusiasmo con el mock. | Mercury + Asirin | Mantener invalidadores visibles en cualquier ficha futura. | Candidato interno |
| UX/confianza | Bandeja y tarjetas revisables; todo pendiente; microcopy: no se ha enviado nada, AD no factura, AD no cobra. | UX baja fidelidad y criterios de mock. | Los limites matan el valor o el usuario cree que AD ejecuto algo. | Irinas | Revisar que el paquete accionable se entiende sin prometer automatismo. | Pendiente |
| Build/mock | Solo mock privado no operativo ya creado; no build operativo. | Mock local conceptual autorizado y creado. | Convertir mock en producto o usarlo con usuarios reales. | Asirin + Nathan | Nuevo permiso explicito para cualquier cambio de build o uso real. | Bloqueado |
| Owners/sign-off | Gael, Asirin, Mercury, Nathan, Irinas y Salva deben firmar antes de accion externa. | Fuente de verdad lo exige. | Saltar de matriz a validacion sin gates. | Salva | Sign-off formal de cada owner. | Pendiente |

## 3. Decisiones Que Quedan Casi Cerradas

Estas decisiones pueden considerarse candidatas fuertes, pero no desbloquean nada real:

1. Target estrecho: reparacion domestica sencilla, prioridad fontaneria/reparaciones rapidas.
2. Objeto central: captura.
3. Valor minimo: paquete accionable, no almacenamiento.
4. Limite de producto: no ERP, no facturacion, no VeriFactu, no WhatsApp real, no calendario real, no cobro automatico.
5. Workflow: capturar rapido, revisar despues, actuar manualmente.

## 4. Decisiones Todavia Flojas

Estas decisiones no estan suficientemente cerradas:

1. WTP privada real.
2. Canal inicial defendible.
3. Alternativa actual prioritaria por subsegmento.
4. Metodo de prueba real.
5. Consentimiento y tratamiento de datos si algun dia entran usuarios reales.
6. Sign-off formal de owners.

## 5. Gate Recomendado

Decision gate recomendado:

> No avanzar a validacion externa hasta que cada owner entregue un sign-off breve sobre su area y Salva apruebe un metodo de prueba con datos, consentimiento, invalidadores, canal y criterio de parada.

Formato minimo de sign-off:

- `Gael`: buyer, canal, WTP y riesgo comercial.
- `Asirin`: scope, propuesta de valor y limites de producto.
- `Mercury`: metodo, sesgos, evidencia e invalidadores.
- `Nathan`: datos, privacidad, seguridad y viabilidad tecnica.
- `Irinas`: UX, confianza, microcopy y comprension de limites.
- `Salva`: decision final.

## 6. Riesgos Priorizados

Riesgo 1:

El usuario exige factura legal, VeriFactu, gestoría o WhatsApp real para pagar.

Mitigacion:

Mantener AD como capa previa y bloquear cualquier promesa fiscal/operativa.

Riesgo 2:

AD se percibe como otra lista mas.

Mitigacion:

Cada tarjeta debe preparar una accion manual concreta y reducir un cierre posterior.

Riesgo 3:

La simulacion parece mas limpia que el uso real.

Mitigacion:

No tratar fichas ficticias como evidencia de mercado.

Riesgo 4:

Privacidad y datos reales aparecen antes de tener politica.

Mitigacion:

Prohibir usuarios/datos reales hasta que Nathan y Salva aprueben politica de datos.

Riesgo 5:

El canal no sostiene el ticket.

Mitigacion:

Gael debe cerrar canal/CAC antes de cualquier validacion.

## 7. Decision De Salva

Decision registrada:

> Salva aprueba esta matriz como base interna y pide sign-off secuencial de owners por la via controlada de Gael.

Opciones descartadas por ahora:

- cambiar alguna decision candidata antes de pedir sign-off;
- bloquear la tesis por riesgo de deriva a ERP/facturacion.

Recomendacion de Asher:

> Ejecutar sign-off de owners coordinado por Gael, no rondas espontaneas ni outreach.

## 8. Registro De Incorporacion

Hecho:

Salva autorizo avanzar con la matriz de decision el 2026-06-07 a las 16:28 CEST. Despues aprobo la matriz y pidio sign-off secuencial de owners por Gael el 2026-06-07 a las 16:33 CEST.

Supuesto:

La matriz debe convertir el trabajo documental en decisiones revisables antes de cualquier movimiento real.

Riesgo:

Confundir una matriz ordenada con permiso operativo.

Owner:

Asher redacta. Salva decide. Gael debe coordinar cualquier ronda de owners si Salva la aprueba.

Decision requerida:

Gael debe gestionar el sign-off secuencial de owners sobre esta matriz. Salva conserva la decision final.

Condicion de desbloqueo:

No hay desbloqueo externo hasta sign-off formal de owners, metodo de prueba, datos, consentimiento, invalidadores y aprobacion final de Salva.

Siguiente accion propuesta:

Gael debe coordinar el sign-off de owners sobre esta base y entregar consolidado final: aprobar matriz, cambiar matriz o bloquear tesis.
