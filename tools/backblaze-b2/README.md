# Backblaze B2 Backup Setup

Objetivo: usar Backblaze B2 como destino tecnico definitivo para los backups cifrados de OpenClaw.

## Estado local

- `rclone` ya esta instalado en `/home/salamirin/.local/bin/rclone`.
- El backup nocturno ya soporta multiples destinos remotos.
- Google Drive sigue activo como destino provisional.
- Backblaze B2 aun no esta configurado: falta crear bucket y clave de aplicacion.

## Recomendacion

Crear un bucket privado dedicado:

```text
openclaw-asher-backups
```

Si Backblaze no acepta el nombre porque los bucket names son globales, usar uno con sufijo propio, por ejemplo:

```text
openclaw-asher-backups-soyautonomoaldia
```

No activar Object Lock al principio. Primero validar subida, descarga y restauracion. La retencion ya la gestiona el script con 21 dias.

## Crear clave en Backblaze

En Backblaze:

1. Crear cuenta o entrar en la existente.
2. Ir a B2 Cloud Storage.
3. Crear bucket privado.
4. Crear Application Key limitada al bucket.
5. Permisos minimos recomendados:
   - `listBuckets`
   - `listFiles`
   - `readFiles`
   - `writeFiles`
   - `deleteFiles`

No pegar la clave en chats.

## Configurar rclone

Opcion recomendada: ejecutar el helper local:

```bash
/home/salamirin/.openclaw/workspace/tools/backblaze-b2/configure-rclone-b2.sh
```

El helper pide:

- bucket name
- keyID
- applicationKey

Despues:

- crea/actualiza el remote `b2-openclaw`
- crea el destino `<bucket>/nightly`
- escribe `/home/salamirin/.openclaw/nightly-protection.env` con `B2_BACKUP_DIR`
- deja `rclone.conf` y el env file con permisos `600`

Opcion manual equivalente:

```bash
read -rp "Backblaze keyID: " B2_KEY_ID
read -rsp "Backblaze applicationKey: " B2_APPLICATION_KEY
echo
/home/salamirin/.local/bin/rclone config create b2-openclaw b2 \
  account "$B2_KEY_ID" \
  key "$B2_APPLICATION_KEY"
unset B2_KEY_ID B2_APPLICATION_KEY
chmod 600 /home/salamirin/.config/rclone/rclone.conf
```

Validar:

```bash
/home/salamirin/.local/bin/rclone lsd b2-openclaw:
```

Crear carpeta destino, sustituyendo el nombre de bucket si cambia:

```bash
/home/salamirin/.local/bin/rclone mkdir b2-openclaw:openclaw-asher-backups/nightly
```

## Activar en backup nocturno

Anadir esta variable al entorno del servicio/timer si el bucket se llama `openclaw-asher-backups`:

```bash
B2_BACKUP_DIR=b2-openclaw:openclaw-asher-backups/nightly
```

Alternativa avanzada: sustituir todos los destinos con una lista por lineas:

```bash
REMOTE_BACKUP_DIRS='gdrive-autonomos:OpenClaw Backups/nightly
b2-openclaw:openclaw-asher-backups/nightly'
```

## Prueba manual

No ejecutar hasta que `rclone lsd b2-openclaw:` funcione:

```bash
B2_BACKUP_DIR='b2-openclaw:openclaw-asher-backups/nightly' \
  /home/salamirin/.openclaw/workspace/tools/openclaw-nightly-protection.sh
```

La prueba debe terminar con:

```text
OpenClaw nightly protection complete
```

Y debe aparecer un `.tar.gz.gpg` y su `.sha256` en Backblaze.
