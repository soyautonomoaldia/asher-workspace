# PLAN_RESOLUTIVO_DESBLOQUEO_PARTICIPANTES_PRUEBA_PRIVADA_AD_CAPTURA_PACK - nuevo_AD_V01

Fecha: 2026-06-09
Owner final: Salva
Estado: resolucion operativa interna candidata

## Contexto

Salva pidio ser resolutivos con el bloqueo de seleccion de participantes concretos para la prueba privada controlada de `AD Captura Pack`.

Mercury ya dictamino:

> seleccion concreta bloqueada

Motivo: `nuevo_AD_V01` no contiene una fuente autorizada de personas reales, pool privado, lista, agenda, CRM activo, referidos aprobados ni datos concretos. Mercury no puede inventar participantes, usar memoria externa ni contactar a nadie.

## Decision Resolutiva

La via resolutiva recomendada es:

> Autorizar solo una fuente privada externa al workspace, gestionada fuera de `nuevo_AD_V01`, para identificar candidatos P1-P3; dentro de `nuevo_AD_V01` solo se registraran IDs anonimos, categorias de encaje, riesgos e invalidadores.

Esto permite avanzar sin contaminar el workspace con datos personales y sin convertir un gate documental en contacto real.

## Que Queda Permitido

Permitido en esta via:

- mantener P1, P2 y P3 como perfiles anonimos;
- evaluar encaje por categorias no identificables;
- registrar solo `P1`, `P2`, `P3`, no nombres;
- registrar oficio aproximado, alternativa actual, riesgo e invalidadores;
- aprobar o bloquear cada perfil antes de cualquier envio;
- preparar una decision final de envio separada.

## Que Sigue Prohibido

Sigue prohibido:

- inventar participantes;
- usar nombres, emails, telefonos, empresas, direcciones o clientes en `nuevo_AD_V01`;
- contactar a nadie;
- enviar emails;
- usar datos reales;
- pedir facturas, fotos, audios, chats, documentos, importes, calendario real o WhatsApp real;
- preguntar precio o WTP;
- mostrar demo, mock operativo, build, backend o integraciones;
- presentar AD como producto disponible.

## Fuente Privada Permitida

La fuente privada debe estar fuera del workspace y puede ser una de estas:

1. lista privada de conocidos/referidos de Salva;
2. criterio privado de Mercury si existe una fuente autorizada por Salva fuera del workspace;
3. combinacion de referidos privados gestionados sin registrar identificadores en archivos.

Si no existe fuente privada real, la prueba privada queda bloqueada y solo puede hacerse ensayo interno con ejemplos ficticios.

## Ficha Anonima Minima Por Candidato

Por cada candidato solo se permite registrar:

| Campo | Valores permitidos |
| --- | --- |
| ID anonimo | P1 / P2 / P3 |
| Oficio aproximado | fontaneria/reparacion rapida / electricista reparacion rapida domestica sencilla / reparacion domestica general |
| Decide por si mismo | si / no / dudoso |
| Alternativa actual | WhatsApp / notas / libreta / memoria / calendario |
| Puede opinar con ejemplos ficticios | si / no / dudoso |
| Perdida probable | vuelta / material / cobro / presupuesto simple / cierre / ninguna clara |
| Riesgo de complacencia | bajo / medio / alto |
| Riesgo de pedir datos reales | bajo / medio / alto |
| Invalidadores probables | factura / cobro / pago / foto / calendario real / WhatsApp real / normativa / certificacion / integracion / backend / ninguno evidente |
| Veredicto Mercury | apto / apto con condiciones / no apto |

## Criterio Especifico Para P2

P2 solo es valido si es:

> autonomo electricista de reparacion rapida domestica sencilla, decide solo y usa WhatsApp/notas.

Queda fuera si el caso deriva a normativa, certificaciones, boletines, factura, fotos, calendario real, alcance industrial, seguridad tecnica compleja o integraciones.

## Gate Final Antes De Envio

Aunque haya candidatos anonimos aptos, sigue haciendo falta decision final separada de Salva sobre:

1. destinatarios concretos gestionados fuera del workspace;
2. texto final;
3. owner de contacto;
4. owner de sesion;
5. consentimiento final;
6. ventana de envio;
7. registro anonimo;
8. almacenamiento y borrado;
9. criterio de parada.

Sin esa aprobacion final, no se envia nada.

## Recomendacion

Recomendacion de Asher:

> Resolver el bloqueo autorizando una fuente privada fuera de `nuevo_AD_V01` y manteniendo dentro del proyecto solo la ficha anonima minima. Si no se autoriza esa fuente, no avanzar a prueba real; hacer solo ensayo interno con ejemplos ficticios.

## Decision Requerida

Salva debe decidir:

- `aprobar fuente privada externa y evaluacion anonima`;
- `mantener solo ensayo interno ficticio`;
- `bloquear prueba privada`.

Hasta esa decision, el estado sigue bloqueado para contacto y envio.
