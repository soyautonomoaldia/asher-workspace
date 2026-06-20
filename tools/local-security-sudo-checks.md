# Local Security Sudo Checks

Checks pendientes que requieren contrasena `sudo`.

No ejecutar cambios automaticamente. Primero leer estado, despues decidir.

## Firewall

```bash
sudo ufw status verbose
sudo nft list ruleset
sudo iptables -S
```

Decision esperada:

- Si UFW esta activo y deniega entrada por defecto: no tocar.
- Si UFW esta inactivo pero no hay servicios externos escuchando: riesgo medio, planificar activacion controlada.
- Si hay servicios escuchando en `0.0.0.0` o IP LAN: evaluar antes de activar reglas.

## Disco y cifrado

```bash
lsblk -f
sudo cryptsetup status sda2
```

Decision esperada:

- Si no hay LUKS: no se corrige en caliente. Planificar cifrado/backups con calma.

## Backups

```bash
sudo timeshift --list
ls -lh /home/salamirin/Backups/openclaw/
```

Decision esperada:

- Confirmar snapshot reciente.
- Confirmar backup OpenClaw reciente o crear uno manual antes de cambios de sistema.

## OpenClaw

```bash
systemctl --user status openclaw-gateway.service --no-pager
ss -ltnp | grep -E '18789|44699'
ps -eo pid,ppid,stat,pcpu,pmem,etime,args --sort=-pcpu | head -25
```

Decision esperada:

- Gateway debe seguir en loopback.
- Si aparecen `openclaw-hooks` antiguos con CPU sostenida, terminarlos sin tocar el gateway.
