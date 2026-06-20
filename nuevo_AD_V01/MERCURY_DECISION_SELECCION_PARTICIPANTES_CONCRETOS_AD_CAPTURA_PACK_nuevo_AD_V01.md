# MERCURY_DECISION_SELECCION_PARTICIPANTES_CONCRETOS_AD_CAPTURA_PACK - nuevo_AD_V01

Fecha: 2026-06-09
Owner: Mercury

## Area Revisada

Decision sobre si Mercury puede seleccionar participantes concretos P1-P3 para la prueba privada controlada de `AD Captura Pack` usando solo el contexto autorizado de `nuevo_AD_V01`, sin contacto y sin datos reales.

## Documentos Revisados

- `SOURCE_OF_TRUTH_nuevo_AD_V01.md`
- `FICHA_GATE_DESTINATARIOS_ENVIO_PRUEBA_PRIVADA_AD_CAPTURA_PACK_nuevo_AD_V01.md`
- `MERCURY_CONFIRMACION_LISTA_VIGENTE_P1_P3_PRUEBA_CONCRETA_AD_CAPTURA_PACK_nuevo_AD_V01.md`

## Veredicto

seleccion concreta bloqueada

## Razon

Mercury no puede seleccionar participantes concretos P1-P3 usando solo el contexto autorizado de `nuevo_AD_V01`.

La documentacion vigente contiene perfiles anonimos, criterios de inclusion, criterios de exclusion, canal candidato, consentimiento candidato, registro anonimo e invalidadores. No contiene una fuente autorizada, pool, lista privada, agenda, CRM activo, referidos aprobados ni datos de personas concretas que puedan asignarse a P1, P2 y P3.

Seleccionar participantes concretos sin esa fuente obligaria a inventar nombres, usar memoria externa, usar datos fuera de `nuevo_AD_V01` o contactar a alguien. Todo eso queda prohibido.

## Que Si Puede Seleccionar Mercury

Mercury solo puede seleccionar perfiles y criterios:

- P1: autonomo fontaneria/reparacion rapida, decide solo, usa WhatsApp/notas.
- P2: autonomo electricista/reparacion rapida, decide solo, usa WhatsApp/notas, limitado a reparacion domestica sencilla sin normativa, certificaciones, factura, fotos, calendario real ni alcance industrial.
- P3: autonomo reparacion domestica general, trabajos cortos, material y cobros manuales.

Mercury tambien puede evaluar si una persona propuesta encaja o no encaja con P1-P3, siempre que la gestion de datos identificables ocurra fuera de estos archivos y no se contacte a nadie sin aprobacion explicita.

## Metodo De Seleccion Permitido

Metodo minimo para seleccionar sin romper limites:

1. Salva identifica fuera de `nuevo_AD_V01` tres posibles personas concretas, una por P1-P3, sin incorporar nombres ni datos identificables al workspace.
2. Para cada persona, Salva confirma solo categorias no identificables:
   - perfil P1, P2 o P3;
   - alternativa actual: WhatsApp, notas, libreta, memoria o calendario;
   - capacidad de opinar con ejemplos ficticios sin aportar datos reales;
   - existencia probable de perdida concreta: vuelta, material, cobro, presupuesto simple o cierre;
   - ausencia de necesidad inicial de datos reales, factura, cobro, pago, foto, calendario real, WhatsApp real, backend o integracion;
   - riesgo de sesgo por cercania o complacencia: bajo, medio o alto.
3. Mercury evalua esas categorias y devuelve `apto`, `apto con condiciones` o `no apto` por P1-P3, sin nombres ni datos identificables.
4. Salva aprueba por separado destinatarios concretos y envio, fuera de este archivo y antes de cualquier contacto.

## Datos Minimos Que Salva Tendria Que Proporcionar O Aprobar

Sin nombres ni datos identificables dentro de `nuevo_AD_V01`, Salva tendria que aportar o aprobar estas categorias:

| Campo | Valores permitidos |
| --- | --- |
| ID anonimo | P1 / P2 / P3 |
| Oficio aproximado | fontaneria/reparacion rapida / electricista reparacion rapida / reparacion domestica general |
| Decide por si mismo | si / no / dudoso |
| Alternativa actual | WhatsApp / notas / libreta / memoria / calendario |
| Puede opinar con ejemplos ficticios | si / no / dudoso |
| Perdida concreta probable | vuelta / material / cobro / presupuesto simple / cierre / ninguna clara |
| Riesgo de complacencia | bajo / medio / alto |
| Riesgo de datos reales | bajo / medio / alto |
| Invalidadores probables | factura / cobro / pago / foto / calendario real / WhatsApp real / normativa / certificacion / integracion / backend / ninguno evidente |
| Decision privada de Salva sobre destinatario | aprobado / cambiar / bloquear |

## Riesgos

- Inventar participantes concretos produciria evidencia falsa y contaminaria la prueba.
- Usar memoria externa o contactos no incorporados al contexto autorizado violaria el reset operativo y la regla de fuente.
- Pedir a Mercury que seleccione personas sin pool autorizado crea riesgo de usar datos personales sin aprobacion.
- P2 electricista puede desviar la prueba a normativa, certificaciones, factura, fotos, calendario real, alcance industrial o seguridad tecnica.
- Si Salva no aprueba destinatarios concretos y envio por separado, cualquier contacto posterior confundiria gate documental con ejecucion real.

## Limites

Este documento no autoriza outreach, email, contacto, reclutamiento, usuarios reales, datos reales, formularios, pricing, build, backend, mock operativo, integraciones, grabaciones, documentos, fotos, audios, WhatsApp real, calendario real, facturacion, cobros, pagos ni uso comercial.

Tampoco autoriza incorporar nombres, emails, telefonos, empresas, ubicaciones concretas, clientes, proveedores, importes reales ni ningun dato identificable a `nuevo_AD_V01`.

## Siguiente Decision Requerida Para Salva

Salva debe decidir una de estas opciones:

1. aportar fuera de `nuevo_AD_V01` tres personas concretas candidatas y permitir que Mercury evalúe solo categorias anonimas de encaje;
2. autorizar una fuente o pool concreto de candidatos, con limites de datos y sin incorporar identificadores al workspace;
3. cambiar el encargo para mantener solo perfiles/criterios y no seleccionar personas concretas todavia;
4. bloquear la prueba privada hasta que exista una fuente autorizada de participantes concretos.

Decision recomendada de Mercury:

> Bloquear la seleccion concreta por ahora. Mantener aprobados los perfiles P1-P3 como criterios anonimos, pero no avanzar a destinatarios concretos hasta que Salva apruebe una fuente privada de candidatos o gestione fuera de este archivo las personas concretas y permita evaluar solo categorias anonimas de encaje.
