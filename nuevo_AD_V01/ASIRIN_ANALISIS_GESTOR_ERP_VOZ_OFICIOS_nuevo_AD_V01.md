# ASIRIN_ANALISIS_GESTOR_ERP_VOZ_OFICIOS_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Asirin
Area: alcance MVP, modulos minimos, que entra/no entra, riesgo ERP pesado, secuencia producto y que se puede probar primero.
Fuente operativa interna usada: `/home/salamirin/.openclaw/workspace/nuevo_AD_V01/SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## Alcance Y Estado

### Hecho

La nueva tesis amplia AD desde captura ligera de gastos hacia un gestor/ERP minimo por voz para autonomos y microequipos de oficio.

El alcance candidato incluye clientes, avisos/trabajos, presupuestos simples, cobros pendientes, gastos/justificantes, tareas, notas, fotos, materiales pendientes y cierre para gestoria.

Esto ya no es una feature. Es un sistema operativo minimo.

### Supuesto

El autonomo de oficio no quiere "gestionar mejor" en abstracto. Quiere no perder trabajo, no olvidar cobros, no dejar papeles para el final y cerrar semana/mes sin reconstruir todo desde WhatsApp, cabeza, fotos y tickets.

### Riesgo

Si se intenta cubrir todo desde el inicio, AD se convierte en ERP/SAT/GMAO ligero antes de haber probado el nucleo de valor.

### Decision Requerida

Elegir un nucleo unico. Asirin recomienda:

`trabajo/aviso + cobro pendiente + justificante asociado`

### Condicion De Desbloqueo

Producto queda desbloqueado solo para definicion interna si se aprueba target estrecho, flujo principal unico, lista cerrada de modulos MVP, lista explicita de exclusiones, lenguaje sin fiscalidad exacta y metodo de prueba permitido sin datos reales.

### Siguiente Accion Propuesta

Crear una ficha interna de alcance con escenarios ficticios, sin app, sin mock operativo y sin usuarios reales.

## Unidad Central Del Producto

### Hecho

El riesgo de modulos sueltos es alto: clientes por un lado, gastos por otro, tareas por otro, presupuestos por otro y gestoria por otro.

### Supuesto

La unidad central debe ser `trabajo/aviso`. Todo lo demas cuelga de ahi.

### Riesgo

Si no hay unidad central, el producto se convierte en una coleccion de miniapps administrativas.

### Decision Requerida

Definir `trabajo/aviso` como objeto principal:

- cliente asociado;
- estado simple;
- fecha;
- notas de voz/texto;
- fotos;
- materiales pendientes;
- cobro pendiente;
- gasto/justificante asociado.

### Condicion De Desbloqueo

No disenar modulos que no puedan vincularse a un trabajo/aviso o a un cierre mensual revisable.

### Siguiente Accion Propuesta

Hacer un modelo conceptual minimo en documento, no en build.

## Modulos Minimos

### Hecho

El MVP no debe contener todos los modulos de la referencia conceptual.

### Supuesto

El minimo viable de producto seria:

1. Cliente basico: nombre, telefono opcional, zona/direccion minima y notas simples.
2. Trabajo/aviso: cliente, estado, fecha, notas, fotos y materiales pendientes.
3. Captura rapida por voz/foto/texto: convierte entrada en elementos revisables.
4. Cobros pendientes: importe, cliente/trabajo, fecha y estado.
5. Gastos/justificantes: foto o dato ficticio, importe si existe, categoria simple y trabajo asociado.
6. Cierre para gestoria: paquete ordenado y revisable.

### Riesgo

Incluso este MVP puede ser demasiado grande si se intenta construir completo antes de probar el nucleo.

### Decision Requerida

Separar MVP documental de MVP operativo. Ahora solo corresponde definicion interna.

### Condicion De Desbloqueo

Cada modulo debe tener una razon economica o de reduccion de caos; si solo existe por parecer ERP, queda fuera.

### Siguiente Accion Propuesta

Reducir aun mas a un flujo principal: "dictar salida de trabajo y generar pendientes revisables".

## Que Entra

### Hecho

Entra lo que reduce caos administrativo-operativo inmediato.

### Supuesto

Las funciones con mas valor inicial son:

- registrar trabajos por voz;
- asociar cliente, foto, nota, gasto y cobro a un trabajo;
- recordar pendientes visibles;
- preparar resumen ordenado para gestoria;
- presupuestos muy simples como lineas + importe + estado;
- materiales pendientes como lista ligera vinculada a trabajo.

### Riesgo

"Presupuesto simple" puede abrir puerta a facturacion, catalogos, margenes, plantillas, firma y seguimiento pesado.

### Decision Requerida

Todo lo que entre debe tener version simple y revisable, sin automatismo externo.

### Condicion De Desbloqueo

Presupuestos, cobros y cierre para gestoria no pueden prometer cumplimiento fiscal.

### Siguiente Accion Propuesta

Marcar cada modulo con nivel: entra ahora en definicion, entra despues, fuera de MVP.

## Que No Entra

### Hecho

Los limites dados por Salva son claros.

### Supuesto

La exclusion es parte del producto, no una renuncia temporal.

### Riesgo

El primer usuario que pida facturas, stock, certificados o SAT puede arrastrar el alcance.

### Decision Requerida

Excluir de forma explicita:

- fiscalidad exacta;
- presentacion de impuestos;
- sustitucion de gestoria;
- boletines;
- certificados;
- mediciones tecnicas complejas;
- cumplimiento normativo;
- mantenimiento reglado;
- stock avanzado;
- SAT/GMAO pesado;
- automatismos externos sin revision humana;
- integracion bancaria;
- firma digital;
- facturacion completa si obliga a normativa, pagos o produccion;
- multiempresa compleja;
- roles/permisos avanzados.

### Condicion De Desbloqueo

Estas exclusiones deben aparecer en cualquier ficha de MVP.

### Siguiente Accion Propuesta

Crear lista de "peticiones que bloquean o reformulan la tesis".

## Secuencia Producto

### Hecho

La secuencia no debe empezar por build.

### Supuesto

La secuencia correcta es:

1. Definir target estrecho.
2. Definir flujo principal unico.
3. Crear entradas ficticias de voz/foto/texto.
4. Comprobar si se estructuran en trabajo, cobro, gasto, material y cierre.
5. Definir criterios de invalidacion.
6. Solo despues decidir si merece mock/manual/build.

### Riesgo

Un mock demasiado bonito validara entusiasmo, no comportamiento.

### Decision Requerida

Mantener bloqueado mock operativo hasta cerrar alcance y datos.

### Condicion De Desbloqueo

La prueba interna debe usar datos ficticios y no simular uso real con autonomos.

### Siguiente Accion Propuesta

Crear 3 escenarios ficticios:

- fontanero autonomo;
- instalador con ayudante;
- reformista pequeno.

Para cada uno, redactar 10 entradas simuladas y ver si el sistema minimo las ordena.

## Recomendacion Asirin

### Hecho

La tesis es mas potente que "captura de gastos", pero tambien mucho mas peligrosa.

### Supuesto

Puede haber producto defendible si AD se limita a capa ligera de captura y orden operativo por trabajo.

### Riesgo

Si intenta ser ERP, SAT o gestoria, se rompe el MVP.

### Decision Requerida

Asirin recomienda avanzar solo en definicion interna con nucleo `trabajo + cobro pendiente + justificante asociado`.

### Condicion De Desbloqueo

Estado bloqueado para build, mock operativo y validacion hasta cerrar alcance y exclusiones.

### Siguiente Accion Propuesta

Crear ficha de alcance MVP con matriz de modulos y exclusiones.

