# MAPA VISUAL DE ESTADO - AD CAPTURA PACK

Fecha: 2026-06-22
Owner final: Salva
Coordinacion operativa: Gael
Estado: resumen ejecutivo interno para decidir si seguir, ajustar o parar
Fuente: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`

## Veredicto Ejecutivo

AD Captura Pack esta bien armado como hipotesis interna estrecha, pero aun no esta probado como SaaS.

El proyecto no esta en fase de construir, vender, publicar precio o integrar servicios. Esta en el ultimo tramo antes de comprobar si una prueba privada controlada produce senales reales suficientes para seguir.

Decision recomendada de Gael:

> Seguir solo hasta el siguiente gate de evidencia anonima. No construir, no publicar pricing y no ampliar scope. Si la prueba privada no produce dolor claro, alternativa insuficiente y senal minima de pago/compromiso, AD Captura debe pararse o reformularse.

## Semaforo General

| Area | Estado | Lectura estricta |
| --- | --- | --- |
| Tesis de producto | Verde interno | Clara como hipotesis: captura rapida y tarjeta accionable revisable. |
| Scope MVP | Verde condicionado | Bien recortado si se mantiene fuera de ERP, facturacion, WhatsApp real, calendario, cobros e integraciones. |
| UX conceptual | Verde interno | Hay one-pager, UX baja fidelidad y mock privado no operativo. |
| Evidencia ficticia | Amarillo | Hay 36 capturas y 12 workflows, pero no prueban demanda real. |
| Buyer/WTP | Rojo | No hay prueba de pago ni compromiso real. |
| Canal | Rojo | No hay canal repetible ni CAC estimado. |
| Privacidad/datos | Amarillo | Limites bien escritos, pero no hay operativa real con datos. |
| Prueba privada | Amarillo | Preparada y condicionada; falta resultado anonimo de ejecucion/respuesta. |
| Build | Rojo bloqueado | No autorizado. Seria prematuro construir producto operativo. |
| Decision SaaS | Rojo | Aun no hay base suficiente para decidir viabilidad. |

## Lo Que Ya Tenemos Creado

| Bloque | Artefactos | Para que sirve | Limitacion |
| --- | --- | --- | --- |
| Fuente operativa | `SOURCE_OF_TRUTH_nuevo_AD_V01.md` | Regla principal, estado, limites y decisiones activas. | Debe mantenerse actualizado; si algo no esta incorporado, no es operativo. |
| Reformulacion MVP | `REFORMULACION_MVP_CAPTURA_EXTERNA_nuevo_AD_V01.md` + ronda de owners | Cambio desde mini-ERP hacia captura externa rapida. | Aprobado solo para definicion interna. |
| Prueba ficticia de forma | `MICROFASE_36_CAPTURAS_FICTICIAS_nuevo_AD_V01.md` | Comprueba si las capturas caben en objetos simples. | Es simulacion documental, no mercado. |
| One-pager y UX | `MVP_ONE_PAGER_AD_CAPTURA_nuevo_AD_V01.md`, `UX_BAJA_FIDELIDAD_AD_CAPTURA_nuevo_AD_V01.md` | Define promesa, objetos, bandeja y tarjetas. | No autoriza build ni usuarios reales. |
| Mock privado | `mockups/ad-captura-mock-privado.html` | Visualiza la idea sin backend ni persistencia. | No es mock operativo ni demo para validacion externa. |
| Target/workflow | `FICHA_INTERNA_TARGET_WORKFLOW_AD_CAPTURA_PACK_nuevo_AD_V01.md` | Enfoca en reparacion domestica sencilla. | Sigue siendo hipotesis interna. |
| 12 workflows ficticios | `FICHA_12_WORKFLOWS_FICTICIOS_AD_CAPTURA_PACK_nuevo_AD_V01.md` | Evalua casos: vueltas, material, cobros, presupuestos, cierres. | 6/12 rozan integraciones/facturacion; riesgo alto de deriva. |
| Matriz base | `MATRIZ_DECISION_BASE_AD_CAPTURA_PACK_nuevo_AD_V01.md` | Ordena target, buyer, alternativa, WTP, canal, datos, metodo y owners. | No prueba demanda, WTP ni canal. |
| Sign-off matriz | sign-offs Asirin, Irinas, Nathan, Mercury + consolidado Gael | Owners aprueban la matriz interna con condiciones. | Es aprobacion documental, no permiso operativo. |
| Metodo y guion | `METODO_PRUEBA_CONTROLADA...`, `GUION_PRUEBA_CONTROLADA...`, `VERSION_FINAL_AJUSTADA...` | Define prueba privada futura, consentimiento, preguntas e invalidadores. | No autoriza usuarios reales por si solo. |
| Gate P1-P3 | fichas Mercury + gate destinatarios/envio | Define perfiles anonimos P1/P2/P3 y condiciones. | No hay nombres ni datos reales dentro del workspace. |
| Preparacion envio final | `FICHA_PREPARACION_ENVIO_FINAL_PRUEBA_PRIVADA...` | Texto final, consentimiento, owner externo, registro anonimo y criterios de parada. | Solo autoriza ejecucion externa condicionada por owner/fuente externa; agentes no contactan. |
| Kanban operativo | `KANBAN_PROPUESTA_HITOS...` + Trello `AD Captura Pack` | Centraliza hitos, owners, bloqueos y gates. | No sustituye la documentacion formal ni autoriza acciones externas nuevas. |

## Lo Que Falta Para Decidir Si Seguimos O Paramos

| Pieza pendiente | Estado actual | Que necesitamos para avanzar | Riesgo si no se cierra |
| --- | --- | --- | --- |
| Ejecucion externa condicionada | Aprobada de forma condicionada | Confirmar si el owner/fuente externa ejecuto o no ejecuto el envio, sin identificadores. | Quedarnos en preparacion perpetua sin contacto real. |
| Respuesta anonima P1-P3 | Pendiente | `enviado/no enviado`, `acepto/no acepto/sin respuesta`, invalidadores anonimos. | No saber si hay interes real minimo. |
| Dolor real frente a WhatsApp/notas | Pendiente | Senales de perdida concreta: vuelta, material, cobro, presupuesto o cierre. | Construir una lista bonita que no desplaza habitos existentes. |
| Alternativa actual prioritaria | Pendiente | Confirmar que WhatsApp, notas, libreta, memoria o calendario fallan de forma costosa. | No tener hueco comercial defendible. |
| WTP privada | Pendiente | Senal de pago/compromiso, no solo "me gusta". | SaaS sin disposicion de pago. |
| Canal inicial | Pendiente | Canal de acceso repetible y defendible, aunque sea manual al inicio. | Producto que solo existe por red cercana. |
| Consentimiento/datos reales futuros | Bloqueado para real | Politica minima de datos, almacenamiento, borrado y terceros si se pasa a datos reales. | Riesgo privacy/security y bloqueo de Nathan. |
| Criterio build/no build | Bloqueado | Decidir si los resultados justifican mock operativo, manual concierge o no-build. | Construccion prematura. |

## Mapa De Decision

```text
FASE DOCUMENTAL
  completada con condiciones
        |
        v
PRUEBA PRIVADA CONDICIONADA
  preparada; falta resultado anonimo de ejecucion/respuesta
        |
        v
GATE SALVA
  seguir / ajustar / parar
        |
        +-- Seguir: solo si hay dolor claro + alternativa insuficiente + senal de pago/compromiso
        |
        +-- Ajustar: si el dolor existe pero el scope, canal o mensaje no encajan
        |
        +-- Parar: si no hay dolor real, exige integraciones/facturacion, o WhatsApp/notas bastan
```

## Senales Minimas Para Seguir

Para seguir con AD Captura, no basta con que alguien diga que "suena util". Necesitamos al menos senales como estas:

| Senal | Umbral minimo orientativo | Por que importa |
| --- | --- | --- |
| Comprension | P1-P3 entienden rapido que AD prepara, no ejecuta. | Si no se entiende, el producto nace confuso. |
| Dolor concreto | Al menos 2 perfiles describen perdida real sin que se les empuje. | Sin dolor, no hay urgencia. |
| Alternativa insuficiente | WhatsApp/notas/libreta fallan en casos concretos. | Si la alternativa basta, AD no tiene hueco. |
| Valor de tarjeta accionable | Ven valor en resumen/campos/siguiente accion. | Si solo guarda notas, no es defendible. |
| WTP/compromiso | Al menos 1-2 senales privadas serias de pago o piloto condicionado. | Sin pago, no hay SaaS. |
| No deriva critica | No exigen factura, WhatsApp real, calendario, fotos, cobros o integraciones para valorarlo. | Si lo exigen, el MVP actual no aguanta. |

## Invalidadores Duros

Si aparecen estos patrones, recomendacion: ajustar fuerte o parar.

| Invalidador | Lectura |
| --- | --- |
| "Necesito que facture/cobre/envie WhatsApp/agende" | El MVP estrecho no resuelve el valor esperado. |
| "Con WhatsApp/notas me apaño" sin perdida concreta | No hay urgencia comercial. |
| Interes amable pero sin dolor ni compromiso | Falso positivo por cortesia. |
| Piden datos reales para poder opinar | Riesgo privacy y prueba mal disenada. |
| Preguntan por demo operativa/producto disponible | Expectativa incorrecta; hay que parar o reajustar promesa. |
| P2 deriva a normativa/certificaciones/alcance industrial | Fuera de scope actual. |

## Que No Debemos Crear Todavia

No crear todavia:

- build operativo;
- backend;
- base de datos real;
- integraciones con WhatsApp, calendario, email, gestorias, bancos, facturacion o pagos;
- pricing publico;
- landing comercial;
- preventa;
- CRM con datos reales;
- formularios con datos personales;
- automatismos externos.

## Proximo Gate Concreto

Pregunta de gate:

> Se ejecuto o no se ejecuto el envio final concreto por la fuente externa autorizada, y que resultado anonimo produjo P1/P2/P3?

Registro permitido:

- P1/P2/P3;
- enviado/no enviado;
- acepto/no acepto/sin respuesta;
- entendio/no entendio;
- dolor observado;
- alternativa actual;
- invalidador aparecido;
- decision anonima: seguir/ajustar/parar.

Registro prohibido:

- nombres;
- emails;
- telefonos;
- empresas;
- ubicaciones;
- clientes;
- audios;
- fotos;
- chats;
- importes reales;
- facturas;
- cobros;
- pagos;
- cualquier dato identificable.

## Recomendacion De Gael

La decision correcta ahora no es "construir o abandonar".

La decision correcta es:

> Ejecutar solo el gate anonimo ya preparado, medir si aparece evidencia minima real y despues decidir.

Si el gate no puede ejecutarse sin romper privacidad o sin inventar participantes, AD Captura debe quedarse bloqueado.

Si se ejecuta y no hay dolor claro, alternativa insuficiente y senal de pago/compromiso, recomendacion: parar o reformular.

Si se ejecuta y hay senales fuertes, el siguiente documento a crear seria:

`GATE_DECISION_SEGUIR_AJUSTAR_PARAR_AD_CAPTURA_PACK_nuevo_AD_V01.md`

