# CORRECCION MODELO OPERATIVO TRELLO / MULTIAGENTE - AD CAPTURA PACK

Fecha: 2026-06-22
Owner final: Salva
Responsable de correccion: Gael
Estado: control operativo interno

## Motivo

Durante la seleccion y configuracion de herramienta operativa se cometio un error de rigor:

> Se asumio que crear cuentas Trello para Nathan y Mercury permitiria operativa multiagente desde OpenClaw.

Eso era incorrecto.

Crear una cuenta Trello permite que una persona entre manualmente en Trello desde navegador, pero no autentica automaticamente a un agente OpenClaw dentro de su runtime.

## Estado Verificado

| Pieza | Estado real |
| --- | --- |
| Trello como tablero visual central | Valido |
| Gael operando Trello via API/token | Valido |
| Nathan operando Trello directamente desde runtime | No verificado / no disponible |
| Mercury operando Trello directamente desde runtime | No verificado / no disponible |
| Multiagente directo sobre Trello | No resuelto |
| Cuentas Trello extra para agentes | No aportan valor operativo ahora |

## Decision Operativa Corregida

Modelo vigente desde este documento:

```text
Salva
  decide gates
        |
        v
Gael
  unico operador de Trello
        |
        v
Trello
  tablero visual central
        |
        v
Nathan / Mercury / Asirin / Irinas
  aportan criterio por conversacion interna o entregable documental
        |
        v
Gael
  resume, traslada y actualiza Trello
```

## Reglas Nuevas

- No crear mas cuentas de herramienta para agentes sin prueba tecnica previa.
- No pedir tokens/API adicionales sin demostrar que resuelven un problema operativo real.
- No cambiar de herramienta por frustracion puntual.
- No duplicar tablero en Linear, Notion, Discord o similar.
- Trello queda como visual operativo si Salva acepta que Gael sea operador central.
- `nuevo_AD_V01` sigue siendo fuente formal de decisiones y gates.

## Herramientas Descartadas Por Ahora

| Herramienta | Motivo de descarte operativo actual |
| --- | --- |
| Linear | Duplica trabajo y no elimina necesidad de cuentas/permisos. |
| Discord Forum | Poco visual para Salva y debil como tablero. |
| Notion | Mezcla docs, tareas y decision; mayor coste de mantenimiento. |
| Multi-token Trello por agente | Incrementa mantenimiento y riesgo sin resolver todavia la operativa real. |

## Riesgo Principal

El riesgo no es Trello. El riesgo es confundir:

- cuenta humana en SaaS;
- autenticacion tecnica desde runtime;
- coordinacion multiagente real.

Esa distincion debe verificarse antes de recomendar nuevas herramientas.

## Proxima Accion

Encargar a Irinas un documento visual muy simple para Salva:

- formato HTML, Canva, PPTX o equivalente;
- una pantalla principal;
- poco texto;
- imagenes/iconos/bloques visuales;
- explicar que tenemos, que falta y que no se debe tocar;
- incluir el nuevo modelo operativo corregido;
- evitar tablas largas e informe textual.

