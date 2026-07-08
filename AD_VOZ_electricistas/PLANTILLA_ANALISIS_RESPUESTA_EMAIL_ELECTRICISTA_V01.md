# Plantilla analisis respuesta email electricista V01

## Objetivo

Convertir la respuesta escrita en recomendacion de foco MVP para decision de Salva, sin improvisar, sin mezclar datos reales innecesarios y sin sobredimensionar el producto.

Esta plantilla no sustituye la respuesta. Sirve para procesarla cuando llegue.

## Regla de privacidad

- No copiar literalmente datos sensibles.
- No conservar nombres completos, telefonos reales, direcciones completas, facturas, audios ni documentos.
- Si la respuesta trae datos sensibles, resumirlos en forma anonima.
- Usar frases anonimizadas, inventadas o controladas para casos de prueba.
- El gate de privacidad ya esta validado por Salva solo como definicion de limites.
- Ese gate no autoriza uso de datos reales, audios reales, documentos, facturas, direcciones completas, prueba operativa, contacto a terceros ni automatizaciones externas.
- Tampoco autoriza prototipo accionable, piloto, build, pricing, produccion ni integraciones.

## Extraccion minima

### Herramientas actuales

Anotar que usa hoy:

- WhatsApp.
- Llamadas.
- Papel/libreta.
- Notas del movil.
- Calendario.
- Memoria.
- ERP/facturacion.
- Otra herramienta.

### Dolor principal declarado

Elegir uno dominante si la respuesta lo permite:

- Olvidos y pendientes dispersos.
- Presupuestos lentos o no enviados.
- Facturas/cobros pendientes.
- Materiales/compras.
- Organizacion de trabajos del dia.
- Seguimiento de clientes.
- Otro.

### Frecuencia

Valorar frecuencia aparente:

- Diario.
- Varias veces por semana.
- Semanal.
- Esporadico.
- No queda claro.

### Coste del problema

Valorar impacto:

- Pierde dinero.
- Pierde tiempo.
- Pierde trabajos.
- Se le olvidan tareas.
- Le genera estres.
- No queda claro.

### Momento de uso de voz

Identificar contexto:

- En furgoneta.
- Tras llamada.
- Tras terminar trabajo.
- Al comprar material.
- Al final del dia.
- Antes de presupuestar.
- Antes de cobrar/seguir.

## Matriz de foco MVP

Puntuar cada foco de 0 a 3:

0 = no aparece.
1 = aparece debil.
2 = aparece claro.
3 = aparece claro, frecuente y con impacto economico/operativo.

| Foco | Dolor claro | Frecuencia | Impacto | Encaje voz | Riesgo bajo | Total |
| --- | --- | --- | --- | --- | --- | --- |
| Gestion diaria de trabajos |  |  |  |  |  |  |
| Presupuesto/facturacion simple |  |  |  |  |  |  |
| Cobro/seguimiento |  |  |  |  |  |  |
| Materiales/compras |  |  |  |  |  |  |
| Otro foco emergente |  |  |  |  |  |  |

Regla de decision:

- Si un foco gana por 3 o mas puntos y no dispara riesgos fuertes, recomendar ese foco.
- Si hay empate entre gestion diaria y presupuesto/cobro, priorizar el flujo mas frecuente y facil de probar en 7 dias.
- Si presupuesto/facturacion gana, mantenerlo como borrador simple, no facturacion legal completa.
- Si cobro/seguimiento gana, no automatizar mensajes ni contactar clientes.
- Si un foco gana pero exige facturacion legal, integraciones, clientes externos, automatizaciones o datos reales desde el dia uno, no se recomienda como MVP inicial aunque puntue alto.
- Si ningun foco supera 8 puntos, no prototipar todavia; pedir una aclaracion concreta a Salva.

## Frases para casos de prueba

Extraer o transformar 5-10 frases aptas:

```text
Frase transformada/anonimizada:
Tipo detectado:
Campos esperados:
Dato sensible eliminado:
Resultado esperado:
```

Campos posibles:

- Tipo: trabajo, aviso, presupuesto, material, cobro, recordatorio, seguimiento.
- Fecha/momento.
- Zona anonima.
- Descripcion.
- Materiales.
- Horas/mano de obra.
- Estado.
- Siguiente accion.

## Senales de descarte o cautela

Marcar alerta si aparece:

- El familiar no quiere usar voz.
- Prefiere WhatsApp/notas y no ve problema.
- El problema principal requiere facturacion legal completa desde el dia uno.
- Necesita integraciones externas inmediatas.
- El valor depende de clientes externos o automatizaciones.
- La respuesta es demasiado vaga para decidir foco.

## Salida esperada de Gael

Tras recibir la respuesta, Gael debe producir:

1. Resumen anonimo de hallazgos.
2. Matriz de foco puntuada.
3. Recomendacion de foco MVP.
4. 5-10 frases anonimizadas/controladas de prueba.
5. Riesgos y gates restantes.
6. Siguiente tarjeta Trello: prototipo estrecho del foco recomendado/pendiente de aprobacion de Salva o aclaracion pendiente.
