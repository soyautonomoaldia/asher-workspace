# MERCURY_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Mercury
Responsabilidad: metodo de evidencia, sesgos, invalidacion y calidad de decision
Estado: definicion interna documental
Fuente operativa usada: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
Documentos usados:
- `REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`
- `ASIRIN_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`
- `IRINAS_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`
- `NATHAN_REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md`

## 1. Decision De Mercury

Aprobado con condiciones.

Apruebo la reformulacion solo como tesis interna falsable:

> Captura externa en menos de 10 segundos; organizacion interna despues.

Y acepto la promesa como marco de simulacion:

> Diselo a AD antes de que se te olvide.

Esta aprobacion no autoriza validacion externa, reclutamiento, mensajes externos, datos reales, audios reales, WhatsApps reales, emails reales, calendarios reales, mock operativo publico, build, pricing publico, pagos, produccion ni integraciones reales.

La decision de Mercury es estricta: la simulacion interna puede mejorar la definicion del MVP, detectar ambiguedades y reducir autoengano. No puede demostrar demanda, disposicion a pagar, adopcion real, retencion, confianza de usuarios ni viabilidad comercial.

## 2. Metodo De Simulacion Interna Sin Usuarios Reales Ni Datos Reales

### Hecho

La fase permitida es documental. La evidencia admisible es una prueba de estructura y friccion con capturas ficticias, no una prueba de mercado.

### Metodo

1. Crear una bateria cerrada de capturas ficticias antes de interpretarlas.
2. Marcar cada captura como:
   - `tipo_de_dato: ficticio`;
   - `origen: simulado`;
   - `efecto_externo: ninguno`.
3. Usar solo canales simulados:
   - `voz/Siri simulada`;
   - `accion rapida simulada`;
   - `WhatsApp simulado`;
   - `email simulado`;
   - `calendario simulado`;
   - `texto pegado ficticio`.
4. Medir si cada entrada podria decirse o escribirse en menos de 10 segundos.
5. Interpretar manualmente cada captura en los seis objetos de scope:
   - `captura`;
   - `contacto_o_alias`;
   - `trabajo_o_aviso`;
   - `visita_o_momento`;
   - `pendiente_accionable`;
   - `nota_de_contexto`.
6. Marcar campos dudosos como `por confirmar`, no completarlos por intuicion.
7. Registrar errores, dudas, exceso de objetos, necesidad de preguntas y riesgo si fuera real.
8. Hacer una segunda revision interna por otro owner, sin explicar previamente la intencion de cada frase.
9. Comparar interpretaciones y contar divergencias.
10. Decidir documentalmente si el scope se mantiene, se reduce o se bloquea.

### Tabla Minima De Registro

Cada caso debe registrarse con estas columnas:

- id;
- origen simulado;
- frase ficticia;
- longitud aproximada;
- cabe en menos de 10 segundos: si/no/dudoso;
- objetos sugeridos;
- campos dudosos;
- confianza: alta/media/baja;
- preguntas necesarias;
- tiempo de interpretacion manual;
- decision de revision: confirmar/corregir/dividir/descartar;
- riesgo_privacidad_si_fuera_real: bajo/medio/alto;
- dato_prohibido_detectado: si/no;
- motivo de error o duda;
- decision de Mercury: mantener/ajustar/invalidar.

### Condicion De Validez Interna

La bateria debe definirse antes de mirar resultados. Si se cambian ejemplos durante la prueba para que AD parezca mejor, la simulacion queda contaminada y no debe usarse como evidencia.

## 3. Bateria Minima De Escenarios Y Frases Ficticias

La bateria minima debe cubrir variabilidad comercial y operativa. Propongo al menos 36 capturas ficticias, repartidas asi:

### Voz/Siri Simulada

1. `Manana a las nueve volver a casa de Carmen, fuga debajo del fregadero, llevar sifon.`
2. `Apunta revisar persiana de Luis esta tarde, posible cinta rota.`
3. `Recordar llamar a Marta por el presupuesto del termo antes del viernes.`
4. `Cobrar 120 euros a cliente del portal B cuando termine la revision.`
5. `Comprar silicona blanca y dos latiguillos para la visita de manana.`
6. `La caldera de Ana hace ruido, pedir modelo antes de ir.`

### Accion Rapida Simulada

7. `Visita hecha en zona norte, falta enviar resumen y fotos no incluidas.`
8. `Cliente quiere adelantar la cita al martes por la tarde.`
9. `Trabajo parado hasta que llegue pieza de repuesto.`
10. `Revisar si el presupuesto de puerta incluye transporte.`
11. `No olvidar escalera pequena para vivienda del bloque azul.`
12. `Avisar internamente que este cliente paga en efectivo al terminar.`

### WhatsApp Simulado

13. `Hola, soy Carmen, manana puedes pasar sobre las 10 por lo del fregadero?`
14. `Me dices cuanto costaria cambiar la persiana del salon?`
15. `El ruido ha vuelto, pero solo cuando enciendo el agua caliente.`
16. `Perdona, hoy no estoy en casa, mejor el jueves por la manana.`
17. `Ya hice la transferencia de 90 euros, revisalo cuando puedas.`
18. `Necesito factura no, solo saber cuanto seria arreglarlo.`

### Email Simulado

19. `Asunto: presupuesto puerta. Texto: Queriamos saber plazo y coste aproximado para reparar la puerta del local.`
20. `Asunto: cambio de cita. Texto: No podremos recibirte el lunes; proponemos miercoles a primera hora.`
21. `Asunto: material pendiente. Texto: Falta confirmar si la pieza compatible es de 35 o 40 mm.`
22. `Asunto: aviso urgente. Texto: Hay una gotera pequena en el techo del almacen desde ayer.`
23. `Asunto: trabajo terminado. Texto: Queda pendiente revisar el cierre y pasar importe final.`
24. `Asunto: duda cobro. Texto: Creemos que ya pagamos una parte, confirma saldo pendiente.`

### Calendario Simulado

25. `Martes 8:30, visita revision termo, cliente Luis taller, llevar junta.`
26. `Viernes tarde, posible segunda visita por persiana, confirmar hora.`
27. `Lunes 12, llamada con Ana para decidir presupuesto.`
28. `Jueves manana, recoger material antes de ir a zona norte.`
29. `Hoy 18:00, cerrar trabajo si cliente confirma transferencia.`
30. `Manana, hueco posible para urgencia de gotera, sin hora confirmada.`

### Casos De Ambiguedad Y Ruido Comercial

31. `Lo de Carmen queda para manana, pero no se si por la manana o tarde.`
32. `El cliente del otro dia dice que vuelve a fallar lo mismo.`
33. `Apunta lo de la pieza, creo que era para Luis o para Marta.`
34. `Me deben lo de la visita anterior, mirar cuanto era.`
35. `Cambiar presupuesto si no entra el material.`
36. `No ir hasta que confirme, pero dejarlo pendiente.`

### Cobertura Obligatoria

La bateria debe incluir, como minimo:

- visitas con fecha clara;
- visitas con fecha relativa;
- cambios de cita;
- trabajos sin cliente claro;
- cliente o alias ambiguo;
- materiales;
- presupuestos pendientes;
- cobros pendientes;
- recordatorios internos;
- trabajos terminados;
- trabajos bloqueados;
- dudas de importe;
- frases incompletas;
- instrucciones contradictorias;
- casos en los que AD debe decir `por confirmar`.

## 4. Como Medir Conducta Futura Sin Activar Validacion Externa

### Hecho

No se puede medir conducta real de usuarios todavia. Solo se puede preparar un marco para medirla cuando Salva autorice una fase futura.

### Medidas Internas Permitidas Ahora

- `capturabilidad`: porcentaje de frases que caben en menos de 10 segundos sin perder el dato principal.
- `parseabilidad`: porcentaje de frases que pueden reducirse a los seis objetos sin crear modulos nuevos.
- `ambiguedad`: numero de campos `por confirmar` por captura.
- `revision_necesaria`: cuantas capturas requeririan correccion humana antes de ser utiles.
- `division_necesaria`: cuantas capturas mezclan dos o mas trabajos.
- `riesgo_si_fuera_real`: cuantas capturas incluirian datos personales, terceros o informacion sensible.
- `dependencia_de_integracion`: cuantas capturas solo tendrian valor si WhatsApp, email, Siri o calendario fueran reales.
- `conexion_economica`: cuantas capturas conectan con volver, cobrar, presupuestar, comprar material, cerrar trabajo o evitar desplazamiento.
- `carga_de_bandeja`: cuantas capturas quedan pendientes sin una accion clara de cierre.

### Conductas Futuras A Medir Solo Si Se Autoriza Validacion

Estas metricas no se activan ahora, pero deben quedar preparadas:

- frecuencia voluntaria de captura;
- si el usuario captura en el momento real o lo pospone;
- tasa de revision posterior;
- tiempo hasta revision;
- tasa de cierre;
- casos en que vuelve a WhatsApp/notas por costumbre;
- si AD reduce olvidos percibidos;
- si AD cambia una conducta recurrente durante varios dias;
- si el usuario pagaria por ello sin integraciones completas.

### Regla De Mercury

Una metrica interna de estructura no debe renombrarse como conducta. `Parseabilidad` no es adopcion. `Capturabilidad` no es deseo. `Conexion economica` no es disposicion a pagar.

## 5. Sesgos De La Simulacion Interna Y Mitigacion Documental

### Sesgos Principales

- Sesgo de limpieza: las frases inventadas suelen ser mas claras que las reales.
- Sesgo de intencion: quien escribe el ejemplo sabe que queria decir.
- Sesgo de confirmacion: los owners pueden buscar que la tesis funcione.
- Sesgo de oficio generico: ejemplos amplios pueden ocultar diferencias entre fontanero, electricista, persianista, cerrajero u otros autonomos.
- Sesgo de memoria falsa: el equipo puede imaginar que los autonomos capturarian mas de lo que realmente capturan.
- Sesgo de precision manual: una persona interpreta mejor que un producto futuro.
- Sesgo de supervivencia: se recuerdan casos donde capturar ayuda y se olvidan casos donde no aporta.
- Sesgo de integracion imaginada: se atribuye valor a WhatsApp/Siri/email aunque no existan todavia.
- Sesgo de baja friccion artificial: escribir una frase en documento no equivale a usarla en una furgoneta, llamada, obra, ruido o prisa.
- Sesgo comercial: que el problema exista no significa que sea pagable.

### Mitigaciones Documentales

- Redactar ejemplos antes de evaluarlos.
- Incluir casos malos, incompletos y contradictorios.
- Separar redactor, interprete y revisor cuando sea posible.
- Obligar a marcar `por confirmar` en vez de completar mentalmente.
- Registrar fallos con el mismo detalle que aciertos.
- Contar dependencias de integracion como riesgo, no como valor.
- Prohibir frases embellecidas despues de la evaluacion.
- Mantener una lista de ejemplos invalidos.
- No usar porcentajes internos como prueba comercial.
- Exigir que cada conclusion indique: hecho, supuesto, riesgo y decision requerida.

## 6. Criterios De Exito Internos Que No Son Validacion De Mercado

### Criterios De Exito Internos

La simulacion interna puede considerarse suficiente para mejorar definicion si:

- al menos 80% de las capturas ficticias caben razonablemente en menos de 10 segundos;
- al menos 70% se reducen a los seis objetos sin crear un objeto raiz nuevo;
- al menos 60% tienen una accion interna clara de revision o cierre;
- menos de 25% dependen criticamente de una integracion real para tener sentido;
- menos de 30% exigen mas de una pregunta de aclaracion;
- todos los campos dudosos quedan marcados como `por confirmar`;
- ningun caso requiere efecto externo para completar el flujo documental;
- los errores se pueden explicar como ajuste de scope, no como excepciones ilimitadas.

### Lo Que NO Demuestran

Estos criterios no demuestran:

- que autonomos quieran usar AD;
- que recuerden usar la captura;
- que revisen la bandeja despues;
- que paguen;
- que cambien WhatsApp, notas, memoria o llamadas por AD;
- que confien en AD con datos reales;
- que el producto pueda integrarse tecnicamente;
- que el coste de construccion sea aceptable;
- que haya canal comercial defendible;
- que la promesa sea vendible publicamente.

## 7. Invalidadores Comerciales, Conductuales Y De Disposicion A Pagar

### Invalidadores Comerciales

El MVP debe bloquearse o recortarse si:

- el valor explicado es "ordenar mejor" pero no conecta con dinero, tiempo, vueltas, cobros, presupuestos o materiales;
- el target inicial no puede definirse de forma estrecha;
- el buyer economico no esta claro;
- la alternativa actual dominante no esta identificada;
- el canal inicial depende de una posicion publica o pricing no aprobado;
- el valor solo se entiende como suite de gestion, facturacion o ERP;
- el usuario esperaria integraciones reales desde el primer dia para considerarlo util;
- la promesa exige compararse con herramientas maduras que AD no puede igualar en MVP.

### Invalidadores Conductuales

El MVP debe bloquearse o recortarse si:

- la captura rapida no se produciria en el momento del olvido;
- el usuario tendria que abrir demasiadas pantallas;
- la revision posterior se acumula como bandeja abandonada;
- las capturas mezclan tantos temas que revisarlas cuesta mas que escribir una nota tradicional;
- el usuario necesita confirmar todo inmediatamente, anulando el valor de captura rapida;
- las frases requieren conocimiento de contexto que solo el usuario tiene en la cabeza;
- el flujo no resiste prisa, interrupciones, ruido o cambio de tarea.

### Invalidadores De Disposicion A Pagar

El MVP debe bloquearse o recortarse si:

- el beneficio percibido es "comodidad" pero no ahorro o recuperacion economica;
- el usuario lo compara con notas de voz, WhatsApp propio o recordatorios gratuitos;
- no aparece una razon privada para pagar antes de facturacion, pagos o integraciones;
- la captura ayuda a recordar, pero no a cerrar trabajos, cobrar, presupuestar o evitar viajes;
- el coste de cambiar habito supera el dolor del olvido;
- solo seria pagable como parte de una suite mayor, no como MVP estrecho;
- la disposicion a pagar depende de promesas futuras no presentes en el scope.

## 8. Riesgos De Falsa Seguridad Por Ejemplos Inventados

Probar solo con ejemplos inventados puede crear seguridad falsa porque:

- el equipo controla el vocabulario;
- no hay ruido real;
- no hay urgencia real;
- no hay errores de transcripcion;
- no hay cansancio, interrupciones ni verguenza de hablar al movil;
- no hay datos privados que incomoden;
- no hay coste de revisar despues;
- no hay olvido real de usar AD;
- no hay comparacion emocional con habitos existentes;
- no hay friccion de permisos, bateria, cobertura, notificaciones o dispositivos;
- no hay riesgo reputacional frente a clientes;
- no hay pago real.

Conclusion metodologica: la simulacion interna solo puede decir "este scope parece estructurable" o "este scope se rompe". No puede decir "este SaaS tiene mercado".

## 9. Cambios Concretos Recomendados A La Definicion Del MVP

1. Cambiar la definicion de MVP a:

`AD captura informacion ficticia de trabajo en menos de 10 segundos, la guarda como captura pendiente y propone objetos internos revisables sin efecto externo.`

2. Anadir una regla explicita:

`Toda captura no revisada carece de valor operativo y no puede producir efectos externos.`

3. Mantener seis objetos raiz maximos:

- `captura`;
- `contacto_o_alias`;
- `trabajo_o_aviso`;
- `visita_o_momento`;
- `pendiente_accionable`;
- `nota_de_contexto`.

4. Incluir en cada captura los campos obligatorios:

- `tipo_de_dato: ficticio`;
- `origen: simulado`;
- `efecto_externo: ninguno`;
- `confianza`;
- `campos_por_confirmar`;
- `riesgo_privacidad_si_fuera_real`;
- `decision_de_revision`.

5. Separar metricas internas de metricas futuras:

- internas: estructura, ambiguedad, friccion documental, riesgo;
- futuras: adopcion, revision, cierre, confianza, pago.

6. Exigir al menos 36 casos ficticios antes de cualquier decision de desbloqueo metodologico.

7. Anadir una columna `dependencia_de_integracion_real` para detectar si el supuesto valor viene de WhatsApp/Siri/email/calendario y no de la captura.

8. Anadir una columna `conexion_economica` para evitar que el MVP derive en nota de voz bonita.

9. Prohibir usar resultados internos como argumento de pricing, preventa, landing, reclutamiento o posicionamiento publico.

10. Bloquear cualquier fase posterior si no hay invalidadores escritos y aceptados antes de probar.

## 10. Decision Requerida Y Condicion De Desbloqueo

### Decision Requerida

Salva debe decidir si acepta este metodo de simulacion interna como paso documental previo, sabiendo que no valida mercado ni autoriza build.

Gael debe usar estos criterios para separar tres cosas:

- viabilidad estructural del MVP;
- hipotesis comercial pendiente;
- validacion externa futura no autorizada.

### Condicion De Desbloqueo

La fase documental solo puede avanzar si se completa la bateria ficticia, se registran fallos y se aceptan invalidadores antes de discutir build, pricing, usuarios reales o integraciones.

No hay desbloqueo operativo mientras sigan pendientes target, buyer, alternativa actual, WTP privada, canal, limites de datos, metodo de prueba futuro, consentimiento y sign-off formal.

## 11. Resumen Breve Para Gael

Mercury aprueba la reformulacion con condiciones metodologicas estrictas. La simulacion interna puede servir para comprobar si "captura externa en menos de 10 segundos; organizacion interna despues" se puede traducir a seis objetos revisables sin formularios ni efectos externos.

Pero no debe confundirse con validacion de mercado. Los ejemplos inventados no prueban adopcion, pago, confianza, retencion ni canal. El riesgo principal es que el equipo interprete frases limpias y crea que ha validado conducta real.

Recomendacion para Gael: mantener la tesis como aprobada con condiciones, exigir bateria minima de 36 casos ficticios, registrar dependencias de integracion y conexion economica, y bloquear cualquier paso hacia build, pricing, usuarios reales, datos reales o integraciones hasta nueva decision explicita de Salva y sign-off formal de owners.
