# Discord AD Setup

Objetivo: usar Discord como canal operativo privado para el equipo AD sin mezclarlo con el DM personal de Telegram.

## Estado

- Telegram queda como canal personal de Asher.
- Se elimina el experimento Telegram grupo -> Gael.
- Discord queda configurado localmente con token desde entorno y routing hacia Gael.
- Servidor detectado desde invite: `El servidor de AD_captura`.
- Server ID: `1517883781615452202`.
- Canal detectado: `#ad_captura`.
- Channel ID: `1517883886506606642`.
- Canal adicional activado para nuevo proyecto: `#ad-voz-electricistas`.
- Channel ID: `1523434046170988705`.
- Bot detectado por token local: `openclaw AD` (`1517892719718957236`).
- Verificacion final: tras reinicio de gateway, el bot resolvio el servidor/canal y respondio en `#ad_captura` como Gael.

## Servidor recomendado

Servidor privado actual:

- Nombre: `El servidor de AD_captura`
- Canales:
  - `#ad_captura`
  - `#ad-voz-electricistas`

Opcionales para mas adelante:

- `#gael-direccion`
- `#decisiones-salva`
- `#logs-operativos`
- `#equipo-ad`
- `#mercado-growth`
- `#producto-mvp`
- `#ux-irinas`
- `#tecnico-nathan`

Nota 2026-06-22: Salva confirma que por ahora Discord queda limitado a `#ad_captura`. No abrir estos canales sin decision separada.

Nota 2026-07-07: Salva autoriza activar `#ad-voz-electricistas` para Gael. Mantener `requireMention: true`.

## Bot Discord

En Discord Developer Portal:

1. Crear aplicacion: `OpenClaw AD`.
2. Crear bot.
3. Activar privileged intents:
   - Message Content Intent: requerido.
   - Server Members Intent: recomendado.
   - Presence Intent: opcional.
4. Invitar el bot al servidor con permisos:
   - View Channels.
   - Send Messages.
   - Read Message History.
   - Embed Links.
   - Attach Files.
   - Add Reactions.
   - Send Messages in Threads, si se usan hilos.
5. Activar Developer Mode en Discord y copiar:
   - Server ID, ya detectado: `1517883781615452202`.
   - Channel ID de `#ad_captura`, ya detectado: `1517883886506606642`.

No guardar el bot token en este repo ni pegarlo en el chat.

Invite directo del bot actual:

```text
https://discord.com/oauth2/authorize?client_id=1517892719718957236&permissions=274878188544&integration_type=0&scope=bot
```

## Activacion

1. Guardar `DISCORD_BOT_TOKEN` en el entorno del gateway, no en archivos versionados. Hecho.
2. Revisar que `discord-ad.patch.json5` sigue apuntando al servidor/canal correctos. Hecho.
3. Validar:

```bash
openclaw config patch --file /home/salamirin/.openclaw/workspace/tools/discord-ad/discord-ad.patch.json5 --dry-run
```

4. Aplicar. Hecho:

```bash
openclaw config patch --file /home/salamirin/.openclaw/workspace/tools/discord-ad/discord-ad.patch.json5
systemctl --user restart openclaw-gateway.service
```

5. Invitar el bot al servidor si Discord API aun no lista el guild. Hecho.
6. Probar mencionando al bot en `#ad_captura`. Hecho.

## Routing esperado

- `#ad_captura` -> Gael (`agentId: saas`).
- `#ad-voz-electricistas` -> Gael (`agentId: saas`).

Regla inicial: `requireMention: true` en todos los canales para evitar ruido.

Regla operativa AD: Discord conversa, Trello organiza y `SOURCE_OF_TRUTH_nuevo_AD_V01.md` decide. Toda decision tomada en Discord debe acabar en tarjeta, documento interno o referencia clara al archivo fuente.
