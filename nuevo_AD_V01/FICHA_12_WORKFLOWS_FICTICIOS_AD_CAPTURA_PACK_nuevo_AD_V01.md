# FICHA_12_WORKFLOWS_FICTICIOS_AD_CAPTURA_PACK - nuevo_AD_V01

Fecha: 2026-06-07
Owner: Asher
Estado: ficha interna autorizada por Salva el 2026-06-07 a las 09:31 CEST
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
Referencias:

- `FICHA_INTERNA_TARGET_WORKFLOW_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `MVP_ONE_PAGER_AD_CAPTURA_nuevo_AD_V01.md`
- `CRITERIOS_MOCK_PRIVADO_NO_OPERATIVO_AD_CAPTURA_nuevo_AD_V01.md`
- `MICROFASE_36_CAPTURAS_FICTICIAS_nuevo_AD_V01.md`

## 0. Limites

Esta ficha no autoriza:

- validacion externa;
- reclutamiento;
- usuarios reales;
- datos reales;
- audios reales;
- WhatsApps reales;
- emails reales;
- calendarios reales;
- tickets reales;
- facturas reales;
- mensajes externos;
- pricing publico;
- preventa;
- pagos;
- build operativo;
- integraciones reales;
- efectos externos.

Todos los nombres, importes, trabajos y situaciones son ficticios.

## 1. Objetivo

Comprobar documentalmente si `AD Captura Pack` aguanta como:

> Captura rapida de trabajo realista para reparacion domestica sencilla, convertida en tarjeta accionable revisable.

La ficha evalua si cada caso:

- cabe razonablemente en menos de 10 segundos;
- puede reducirse a los seis objetos raiz;
- prepara una accion manual util;
- conecta con dinero, tiempo, vuelta, material, presupuesto, cobro o cierre;
- evita depender de facturacion, WhatsApp real, calendario real o integraciones;
- mantiene limites de privacidad si algun dia se probara con datos reales.

## 2. Criterios De Evaluacion

Decisiones posibles por workflow:

- `mantener`: encaja en la tesis;
- `ajustar`: encaja solo si se recorta o se separa;
- `invalidar`: exige capacidades fuera del MVP.

Campos evaluados:

- captura ficticia;
- paquete que prepara AD;
- accion manual lista;
- valor protegido;
- dato prohibido si fuera real;
- riesgo de integracion;
- decision.

## 3. Workflows Ficticios

### W01 - Vuelta Con Material

Captura ficticia:

`Manana volver a Carmen, fuga bajo fregadero, llevar sifon y revisar presion.`

Paquete que prepara AD:

- tarjeta de visita pendiente;
- alias: Carmen;
- trabajo: fuga bajo fregadero;
- momento: manana;
- material: sifon;
- tarea: revisar presion;
- checklist: llevar sifon, revisar presion, cerrar visita.

Accion manual lista:

Revisar la tarjeta antes de salir y marcar si el material esta comprado.

Valor protegido:

Evita una vuelta perdida y una visita incompleta.

Dato prohibido si fuera real:

Nombre real, direccion, telefono, audio original.

Riesgo de integracion:

Bajo. No necesita calendario real si queda como recordatorio interno.

Decision:

`mantener`.

### W02 - Compra De Material Antes De Aviso

Captura ficticia:

`Comprar dos llaves de paso de media para Pilar antes del jueves.`

Paquete que prepara AD:

- tarjeta de material pendiente;
- alias: Pilar;
- material: dos llaves de paso de media;
- limite: antes del jueves;
- estado: pendiente de revisar.

Accion manual lista:

Lista de compra interna para revisar antes de pasar por proveedor.

Valor protegido:

Evita retraso y segunda salida.

Dato prohibido si fuera real:

Proveedor real, direccion de obra, precio real, factura.

Riesgo de integracion:

Bajo. No necesita stock ni proveedor integrado.

Decision:

`mantener`.

### W03 - Cobro Pendiente Simple

Captura ficticia:

`Reclamar a Javi los 180 de la reparacion de ayer.`

Paquete que prepara AD:

- tarjeta de cobro pendiente interno;
- alias: Javi;
- importe ficticio: 180;
- referencia: reparacion de ayer;
- salida preparada: borrador de texto para copiar manualmente;
- limite visible: AD no cobra ni envia mensajes.

Accion manual lista:

Revisar importe y copiar texto manualmente si procede.

Valor protegido:

Reduce olvido de cobro.

Dato prohibido si fuera real:

Telefono, cuenta bancaria, factura, justificante de pago.

Riesgo de integracion:

Medio. El usuario puede esperar WhatsApp automatico o pago integrado.

Decision:

`mantener`, con microcopy fuerte: `AD no cobra ni envia mensajes`.

### W04 - Presupuesto Pequeno No Legal

Captura ficticia:

`Presupuesto lavabo pequeno para Ines, maximo 300, revisar grifo economico.`

Paquete que prepara AD:

- tarjeta de presupuesto pendiente interno;
- alias: Ines;
- trabajo: lavabo pequeno;
- importe orientativo ficticio: maximo 300;
- nota: revisar grifo economico;
- salida preparada: borrador no legal y campos faltantes.

Accion manual lista:

Revisar campos y preparar presupuesto real en herramienta habitual.

Valor protegido:

Evita olvidar una oportunidad de ingreso.

Dato prohibido si fuera real:

Direccion, NIF, presupuesto legal, factura, email real.

Riesgo de integracion:

Medio-alto. Puede derivar a generador de presupuestos legales.

Decision:

`ajustar`: mantener solo como `presupuesto pendiente interno`, nunca como documento legal.

### W05 - Cierre Para Gestoria O Facturacion Posterior

Captura ficticia:

`Cerrar trabajo de Luis, cambio latiguillo, 75 mano de obra, falta pasar a factura.`

Paquete que prepara AD:

- tarjeta de cierre pendiente;
- alias: Luis;
- trabajo: cambio latiguillo;
- importe ficticio: 75;
- pendiente: pasar a herramienta de facturacion;
- resumen interno para gestoría/herramienta.

Accion manual lista:

Copiar resumen revisado a la herramienta de facturacion o enviarlo manualmente a gestoría si procede.

Valor protegido:

Evita que un trabajo hecho se quede sin cierre administrativo.

Dato prohibido si fuera real:

Factura real, NIF, direccion fiscal, email, datos bancarios.

Riesgo de integracion:

Alto por proximidad a facturacion y VeriFactu.

Decision:

`ajustar`: permitido como resumen interno; prohibido venderlo como facturacion o cumplimiento.

### W06 - Llamada Manual Antes De Volver

Captura ficticia:

`Llamar a Marta antes de ir, confirmar si esta en casa y si sigue goteando.`

Paquete que prepara AD:

- tarjeta de tarea pendiente;
- alias: Marta;
- accion: llamar antes de ir;
- contexto: confirmar disponibilidad y estado de fuga;
- salida preparada: checklist de llamada.

Accion manual lista:

Llamar manualmente y marcar resultado en tarjeta.

Valor protegido:

Evita desplazamiento inutil.

Dato prohibido si fuera real:

Telefono real, direccion, notas personales.

Riesgo de integracion:

Bajo-medio. Puede tentar a llamada o WhatsApp automatico.

Decision:

`mantener`, sin boton de llamada automatica en esta fase.

### W07 - Pieza Equivocada Y Devolucion

Captura ficticia:

`Devolver manguito de 40, no servia para Ramon, comprar uno flexible.`

Paquete que prepara AD:

- tarjeta de material pendiente;
- alias: Ramon;
- material a devolver: manguito de 40;
- material correcto: uno flexible;
- tarea: devolver y comprar.

Accion manual lista:

Revisar antes de ir al proveedor.

Valor protegido:

Reduce perdida de dinero en material y evita retraso.

Dato prohibido si fuera real:

Ticket de compra, proveedor, importe real.

Riesgo de integracion:

Bajo si no se gestiona inventario ni proveedor.

Decision:

`mantener`.

### W08 - Aviso Urgente Con Hora Aproximada

Captura ficticia:

`Hoy despues de comer pasar por casa de Nerea, atasco bano, llevar desatascador grande.`

Paquete que prepara AD:

- tarjeta de visita pendiente;
- alias: Nerea;
- momento: hoy despues de comer;
- trabajo: atasco bano;
- material: desatascador grande;
- confianza: media por hora imprecisa.

Accion manual lista:

Confirmar hora exacta manualmente y revisar material.

Valor protegido:

Evita olvidar urgencia y material.

Dato prohibido si fuera real:

Direccion, telefono, conversacion real.

Riesgo de integracion:

Medio. Puede pedir calendario real.

Decision:

`mantener`, marcando campo dudoso: hora exacta.

### W09 - Captura Demasiado Compleja De Comunidad

Captura ficticia:

`Comunidad San Marcos, cuatro pisos, grieta, caldera, administrador, fotos y presupuesto urgente.`

Paquete que prepara AD:

- tarjeta dudosa;
- posible alias: Comunidad San Marcos;
- varios temas mezclados;
- recomendacion: dividir en capturas separadas;
- campos de baja confianza.

Accion manual lista:

Separar manualmente en aviso, inspeccion, presupuesto y documentacion.

Valor protegido:

Evita meter un caso complejo en un flujo simple.

Dato prohibido si fuera real:

Comunidad real, administrador, fotos, direccion, datos tecnicos, documentos.

Riesgo de integracion:

Alto. Puede exigir obra, gestion documental, presupuestos y compliance.

Decision:

`invalidar` como workflow objetivo del MVP. Mantener solo como ejemplo de limite.

### W10 - Recordatorio De Cobro Sin Importe

Captura ficticia:

`Acordarme de cobrar a Paula lo del radiador cuando me confirme.`

Paquete que prepara AD:

- tarjeta de cobro pendiente interno;
- alias: Paula;
- trabajo: radiador;
- campo dudoso: importe no indicado;
- siguiente accion: revisar importe antes de reclamar.

Accion manual lista:

Completar importe y decidir si procede reclamar.

Valor protegido:

Evita perder un cobro, pero exige revision.

Dato prohibido si fuera real:

Importe real, factura, telefono, conversacion.

Riesgo de integracion:

Medio por cobro/mensaje.

Decision:

`mantener`, con baja confianza por falta de importe.

### W11 - Cierre De Jornada Con Tres Pendientes

Captura ficticia:

`Hoy quedan Ana sifon, Javi cobrar 120 y Pilar pedir foto del grifo.`

Paquete que prepara AD:

- tarjeta dudosa o grupo de tres pendientes;
- Ana: material/trabajo sifon;
- Javi: cobro pendiente ficticio 120;
- Pilar: pedir foto del grifo;
- recomendacion: dividir en tres tarjetas.

Accion manual lista:

Confirmar division en tres tarjetas internas.

Valor protegido:

Ordena cierre de jornada y reduce olvidos multiples.

Dato prohibido si fuera real:

Telefonos, fotos reales, importes reales, chats.

Riesgo de integracion:

Medio-alto por pedir foto y posible WhatsApp.

Decision:

`ajustar`: permitir solo si AD propone dividir y no envia mensajes ni gestiona fotos.

### W12 - Nota De Contexto Para Segunda Visita

Captura ficticia:

`En casa de Oscar ruido al abrir caliente, mirar cartucho, cliente dice que empeoro desde ayer.`

Paquete que prepara AD:

- tarjeta de nota de contexto;
- alias: Oscar;
- trabajo/aviso: ruido al abrir caliente;
- posible material/revision: cartucho;
- contexto: empeoro desde ayer;
- siguiente accion: revisar en segunda visita.

Accion manual lista:

Leer contexto antes de volver y decidir material/herramienta.

Valor protegido:

Evita perder detalle tecnico simple entre visitas.

Dato prohibido si fuera real:

Direccion, audio, datos de vivienda, telefono.

Riesgo de integracion:

Bajo si queda como nota interna, no diagnostico tecnico.

Decision:

`mantener`.

## 4. Resultado Documental

Resumen:

- workflows evaluados: 12;
- `mantener`: 8;
- `ajustar`: 3;
- `invalidar`: 1;
- casos con conexion economica o de tiempo clara: 11/12;
- casos con riesgo medio o alto de derivar a integraciones/facturacion: 6/12;
- casos que requieren microcopy de limite fuerte: 5/12;
- casos que exigen dividir o aclarar: 3/12.

Lectura:

La tesis aguanta mejor cuando AD prepara una accion manual concreta: comprar, volver, llamar, cobrar, revisar o cerrar. Se debilita cuando entra en presupuesto legal, factura, comunidad compleja, fotos, WhatsApp o calendario.

## 5. Decision Candidata Tras La Ficha

Decision candidata:

> Mantener `AD Captura Pack` solo si el MVP se limita a capturas simples que preparan acciones manuales internas.

Recorte recomendado:

- No incluir comunidades complejas como caso objetivo.
- No incluir presupuestos legales.
- No incluir facturacion ni cumplimiento VeriFactu.
- No incluir fotos reales.
- No incluir WhatsApp real.
- No incluir calendario real.
- No incluir cobro automatico.

## 6. Invalidadores Reforzados

Invalidar o recortar si:

- el paquete accionable exige enviar mensajes para parecer valioso;
- el cierre administrativo se interpreta como factura;
- el usuario no acepta revisar despues;
- los casos reales traen fotos, direcciones, telefonos o documentos desde el primer minuto;
- la mitad de los workflows necesitan dividirse;
- el precio aceptable solo existe si AD sustituye a gestoría o software de facturacion.

## 7. Siguiente Accion Propuesta

Siguiente decision util para Salva:

1. Aprobar esta ficha como base documental.
2. Cambiar los workflows.
3. Bloquear la tesis por dependencia excesiva de integraciones/facturacion.

Si se aprueba:

> Preparar una matriz de decision base con target, buyer, alternativa actual, WTP privada, canal, datos, metodo de prueba, invalidadores y owners, sin iniciar validacion externa.

## 8. Registro De Incorporacion

Hecho:

Salva aprobo el siguiente paso, ficha de 12 workflows ficticios, el 2026-06-07 a las 09:31 CEST.

Supuesto:

Doce casos ficticios son suficientes para detectar si la hipotesis se sostiene como paquete accionable o si deriva demasiado rapido a ERP/facturacion.

Riesgo:

Los casos ficticios pueden estar demasiado limpios frente al mundo real. Esta ficha no prueba demanda, retencion ni WTP.

Owner:

Asher redacta. Salva decide. Owners pendientes de sign-off antes de cualquier desbloqueo externo.

Decision requerida:

Salva debe aprobar, cambiar o bloquear esta ficha documental.

Condicion de desbloqueo:

No hay desbloqueo operativo hasta completar decisiones base y sign-off.

Siguiente accion propuesta:

Preparar matriz de decision base solo si Salva aprueba esta ficha.
