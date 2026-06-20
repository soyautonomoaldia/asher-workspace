# HEARTBEAT.md

## Estado

Heartbeat automatico desactivado por defecto.

Motivo: el heartbeat anterior interrumpia a Salva cada 2h y generaba ruido operativo.

## Regla principal

El heartbeat no debe notificar si no hay una incidencia real.

Un chequeo `OK` se registra, pero no interrumpe a Salva.

## Politica silenciosa propuesta

Cuando se reactive, debe operar con estas reglas:

- frecuencia maxima recomendada: 1 vez al dia;
- canal: OpenClaw, no Telegram salvo urgencia real;
- `notify=false` por defecto;
- no repetir tareas antiguas ni reabrir conversaciones pasadas;
- no coordinar agentes;
- no ejecutar rondas de `nuevo_AD_V01`;
- no tocar firewall, SSH, gateway, cron, credenciales ni configuracion del sistema;
- no hacer acciones externas.

## Que puede comprobar

- gateway activo;
- gateway escuchando solo en loopback;
- heartbeat sigue silencioso;
- no hay sesiones claramente atascadas;
- no hay procesos `openclaw-hooks` antiguos consumiendo CPU;
- existe espacio en disco razonable;
- existe log reciente del gateway.

## Cuando puede avisar

Avisar solo si ocurre algo de esta lista:

- gateway caido;
- gateway expuesto fuera de loopback sin aprobacion;
- SSH activo inesperadamente;
- procesos `openclaw-hooks` o workers consumiendo CPU de forma sostenida;
- disco por encima de 85%;
- error repetido dos veces seguidas en logs de gateway;
- cron/heartbeat vuelve a generar ruido visible.

## Formato de salida

Si no hay problema:

`OK: heartbeat silencioso ejecutado sin incidencias.`

Si hay problema:

`WARN: <incidencia>. Impacto: <impacto>. Siguiente accion recomendada: <accion>.`

## Restriccion

Este archivo define comportamiento. No reactiva el heartbeat por si solo.
