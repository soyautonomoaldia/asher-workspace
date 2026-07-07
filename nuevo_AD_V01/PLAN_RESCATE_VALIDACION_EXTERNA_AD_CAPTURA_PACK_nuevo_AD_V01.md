# PLAN_RESCATE_VALIDACION_EXTERNA - AD Captura Pack

Fecha: 2026-07-06
Owner operativo: Gael
Estado: aprobado por Salva como siguiente accion tras fallo final Mercury

## Veredicto De Partida

La via Mercury queda cerrada para ejecutar la validacion externa 5/3/2 bajo el runtime actual.

Motivo: `CUSTODY_REBUILD_TECHNICAL_FAILURE_FINAL`.

El fallo no invalida automaticamente AD ni la hipotesis de producto. Invalida el tramo operativo concreto de captacion controlada con Mercury como fuente/operador, porque no existe batch privado ejecutable, no existe `batchId`, no existe `approved: true` y no puede hacerse dry-run sin reconstruccion privada segura.

## Regla De Control

No se autoriza outreach, envio real, contacto, nueva BBDD con identificadores, formulario, CRM, scraping operativo, Gmail real ni herramienta externa con datos personales hasta que exista una via privada verificable.

Toda via candidata debe cumplir:

1. BBDD privada fuera de source/Trello/OpenClaw visible.
2. Batch ejecutable por referencia interna o `batchId`.
3. `approved: true` cuando proceda.
4. Dry-run tecnico agregado sin destinatarios visibles.
5. Salida P1/P2/P3 solo agregada.
6. Ruta privada confirmada sin mostrar destinatarios.
7. Cero exposicion de nombres, emails, telefonos, URLs identificables o fuentes concretas.
8. Borrado/retencion minima documentada.

## Objetivo 72 Horas

Llegar a una decision limpia:

- continuar validacion externa con nueva via privada verificable;
- cambiar canal de validacion;
- o parar la prueba externa y volver a fase interna/documental.

## Dia 1 - Auditoria De Via Privada

Objetivo: determinar si existe una via tecnica/operativa real para reemplazar a Mercury sin degradar privacidad ni trazabilidad.

Trabajo de Gael:

- listar requisitos minimos de herramienta/fuente privada;
- separar lo que ya esta aprobado de lo que no;
- identificar opciones viables sin exponer identificadores;
- descartar rutas manuales improvisadas o dependientes de Salva;
- mantener Trello/source sin datos personales.

Salida esperada:

- `VIA_PRIVADA_CANDIDATA`: existe una via operativa verificable;
- `NO_VIA_PRIVADA`: no existe una via suficiente con herramientas actuales;
- `CANAL_ALTERNATIVO_RECOMENDADO`: email deja de ser el canal recomendado para la primera validacion.

Resultado Dia 1, 2026-07-06:

`NO_VIA_PRIVADA`

Evidencia operativa:

- la via privada de Mercury ya devolvio `CUSTODY_REBUILD_TECHNICAL_FAILURE_FINAL`;
- no existe batch privado ejecutable, `batchId`, `approved: true` ni dry-run agregado;
- Gael no tiene una herramienta directa usable en su runtime para crear/custodiar BBDD privada y ejecutar `gmail_send_private_batch` sin destinatarios visibles;
- las herramientas disponibles de busqueda/navegador sirven para investigacion publica, pero no resuelven por si solas custodia privada de destinatarios ni batch ejecutable;
- Trello/source/OpenClaw/Discord siguen prohibidos para nombres, emails, telefonos, URLs o fuentes identificables.

Conclusion Dia 1:

No se debe insistir con email 5/3/2 hasta que exista una herramienta/fuente privada real que pueda custodiar BBDD + batch ejecutable por referencia interna. Se activa Dia 2: diseno de validacion alternativa.

## Dia 2 - Diseno De Validacion Alternativa

Objetivo: si no hay via privada de email, definir un canal de validacion que mida interes sin violar privacidad ni pedir a Salva trabajo manual.

Canales candidatos a evaluar:

- entrevista controlada via fuente externa autorizada;
- formulario anonimo de interes sin datos personales inicialmente;
- landing privada sin tracking identificable;
- grupo reducido por intermediario no visible en workspace;
- simulacion interna adicional solo si ninguna via externa es segura.

Criterios:

- coste de ejecucion;
- velocidad;
- riesgo RGPD;
- calidad de senal;
- capacidad de medir dolor real, alternativa actual y WTP privada;
- dependencia de Salva;
- trazabilidad sin identificadores.

Salida esperada:

- canal recomendado;
- canal descartado con motivo;
- decision requerida si implica nueva exposicion externa.

Resultado Dia 2, 2026-07-06 12:00:

`CANAL_ALTERNATIVO_RECOMENDADO`

Canal recomendado como diseno candidato:

- formulario privado anonimo sin identificadores, distribuible solo por una fuente externa autorizada y con consentimiento/limites visibles antes de responder;
- entrada basada en una unica imagen/mock estatico ya aprobado como material candidato interno;
- preguntas limitadas a dolor previo a facturacion/gestoria, alternativa actual, perdida concreta y descarte frente a WhatsApp/notas/libreta/memoria;
- sin nombres, emails, telefonos, empresas, URLs, ubicaciones, IP/tracking intencional, adjuntos, fotos, audios, documentos, importes reales, clientes reales ni campos libres que pidan identificadores;
- salida solo agregada por P1/P2/P3 y por invalidador.

Canales descartados para este rescate inmediato:

- email 5/3/2 por Mercury: descartado hasta que exista batch privado real con `batchId`, `approved: true` y dry-run agregado;
- entrevista directa: senal mas rica, pero aumenta riesgo RGPD, contacto personal y dependencia de agenda/owner externo;
- landing privada: puede medir interes, pero introduce build/publicacion/tracking y ruido de posicionamiento;
- intermediario manual no verificable: repite el problema de custodia si no devuelve solo agregados auditables.

Decision requerida:

Este resultado no autoriza crear formulario, publicarlo, enviarlo ni distribuirlo. Si se quiere avanzar, Salva debe aprobar por separado el cambio de canal a formulario anonimo privado, el texto de consentimiento, la herramienta concreta sin tracking identificable, la fuente externa de distribucion, el registro agregado y el criterio de parada.

Conclusion Dia 2:

La mejor alternativa al email, si AD quiere seguir buscando evidencia externa sin exponer identificadores, es cambiar de canal a formulario anonimo privado. Si Salva no aprueba ese cambio o no existe herramienta sin identificadores, el Dia 3 debe tender a `PAUSA_EXTERNA`, no a seguir preparando outreach.

## Dia 3 - Decision Go / No-Go De Validacion

Objetivo: no seguir acumulando preparacion sin capacidad de prueba.

Opciones finales:

1. `GO_VALIDACION_PRIVADA`: existe via privada verificable y se prepara nuevo gate tecnico antes de cualquier envio.
2. `CAMBIO_CANAL`: se abandona email como primera validacion y se diseña canal alternativo.
3. `PAUSA_EXTERNA`: no hay via externa segura; AD vuelve a fase interna/documental o se congela.
4. `STOP_AD`: solo si, ademas del fallo operativo, aparece evidencia fuerte de inviabilidad comercial o imposibilidad razonable de validar.

## Criterio Comercial De Gael

La recomendacion actual no es cancelar AD.

La recomendacion actual es parar la ejecucion externa por Mercury, proteger la calidad de decision y exigir una via privada verificable antes de gastar mas ciclos en outreach.

Si en 72 horas no aparece una via externa segura, la decision comercial responsable sera pausar validacion externa y no seguir consumiendo tiempo en captacion improvisada.
