# SIGNOFF_NATHAN_GUION_PRUEBA_CONTROLADA_AD_CAPTURA_PACK - nuevo_AD_V01

Fecha: 2026-06-09
Owner: Nathan

## Area Revisada

Datos, privacidad, seguridad, tecnica, datos permitidos/prohibidos, consentimiento, retencion y riesgo de usar datos reales.

## Documentos Revisados

- `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
- `METODO_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `GUION_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `SIGNOFF_ASIRIN_GUION_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `SIGNOFF_IRINAS_GUION_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`

## Veredicto

aprobado con condiciones

## Condiciones/Bloqueos

- El guion queda aprobado solo como artefacto interno documental con casos 100% ficticios.
- No queda aprobado ningun uso con personas reales, datos reales, audios, fotos, WhatsApps, emails, calendarios, tickets, facturas, direcciones, telefonos, NIF/CIF, datos bancarios, datos fiscales ni credenciales.
- Los cinco casos son tecnicamente aceptables si se entienden como paquetes revisables sin backend, sin persistencia real, sin integraciones y sin efecto externo.
- Cobro, presupuesto y cierre son los casos con mayor riesgo de convertir la prueba en operativa; deben mantenerse como ejemplos ficticios, manuales y no contables.
- La ficha de registro solo puede guardar feedback anonimo y categorias de riesgo. Si aparece un dato real de forma espontanea, no debe transcribirse; solo debe registrarse que aparecio un intento de aportar dato real.
- Antes de cualquier prueba con persona real falta una politica minima de retencion: que se guarda, donde, quien accede, durante cuanto tiempo y como se borra.
- Antes de cualquier prueba con persona real falta consentimiento final aprobado, con aviso claro de que no se recogen datos reales ni de clientes, no se graba, no se importan herramientas y el participante puede pedir que no se registre feedback.
- Cualquier necesidad de datos reales para que la prueba tenga sentido debe bloquear el avance, no convertirse en requisito de producto.

## Cambios Exigidos Por Archivo/Seccion

No exijo cambios antes del consolidado si el guion se mantiene como documento interno ficticio.

Cambios exigidos antes de cualquier uso con persona real:

- `METODO_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`, secciones 10 y 12: anadir regla explicita de retencion y borrado del feedback anonimo, incluyendo responsable, ubicacion y plazo maximo.
- `METODO_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`, seccion 12: aclarar que no se registran transcripciones crudas si contienen datos reales; solo categorias anonimas.
- `GUION_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`, seccion 7: mantener `180 EUR` como importe ficticio y no permitir importes reales, facturas reales ni gestion de cobro.
- `GUION_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`, seccion 8: reforzar que `presupuesto pendiente no legal` no genera presupuesto formal, factura, IVA ni compromiso comercial.
- `GUION_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`, seccion 9: aclarar que `Cobro registrado como efectivo ficticio` no es registro contable, fiscal, caja real ni justificante.
- `GUION_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`, seccion 11: sustituir `Datos sensibles mencionados espontaneamente` por una categoria no descriptiva, por ejemplo `Intento de aportar datos reales: si/no`, sin copiar contenido.
- `GUION_PRUEBA_CONTROLADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`, seccion 11: limitar `Notas` a observaciones anonimas sin nombres, direcciones, telefonos, importes reales, clientes, documentos ni detalles identificables.

## Limites Que No Desbloquea

Este sign-off no autoriza validacion externa, outreach, usuarios reales, datos reales, pricing publico, build operativo, backend, base de datos, persistencia real, integraciones, credenciales, analitica de terceros, formularios publicos, grabacion de audio, subida de fotos, importacion de WhatsApp/email/calendario, facturacion, cobros, pagos, presupuestos legales ni uso con clientes reales.

## Texto Breve Para Consolidado De Gael

Nathan aprueba con condiciones el guion como artefacto interno documental con ejemplos ficticios. Desde datos, privacidad, seguridad y tecnica, el guion no bloquea mientras no haya personas reales, datos reales, backend, persistencia ni integraciones. Antes de cualquier uso real deben cerrarse consentimiento, retencion, borrado y registro anonimo estricto; si aparecen datos reales como requisito o contenido, el avance debe bloquearse.
