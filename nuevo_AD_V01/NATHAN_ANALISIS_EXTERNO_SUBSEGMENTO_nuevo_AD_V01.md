# NATHAN_ANALISIS_EXTERNO_SUBSEGMENTO_nuevo_AD_V01

Fecha: 2026-06-06
Owner: Nathan
Enfoque: tecnica, datos, privacidad y seguridad para una primera prueba controlada.

Marco operativo usado: `SOURCE_OF_TRUTH_nuevo_AD_V01.md`. El proyecto sigue en definicion y no autoriza validacion, reclutamiento, datos reales, captura real de tickets/facturas/voz/notas, mock operativo, integraciones ni produccion. Este documento no desbloquea esas restricciones.

## 1. Subsegmentos comparados.

| Subsegmento | Tipo habitual de tickets/facturas | Datos de cliente final probables | Necesidad de OCR/audio | Almacenamiento probable | Viabilidad manual/mock futura | Dificultad tecnica | Limites legales/operativos |
|---|---|---:|---:|---|---:|---:|---|
| Electricistas | Material electrico, herramientas, desplazamiento, aparcamiento, factura de proveedor, posible boletin/certificado. | Media/alta si se mezclan partes, boletines, direccion de vivienda o titular. | OCR medio; audio no necesario. | Facturas + posible documentacion tecnica. | Media, solo si se excluyen boletines y datos de clientes. | Media/alta. | Riesgo por instalaciones certificadas, CIE/boletines y responsabilidad tecnica. |
| Fontaneros | Material, recambios, urgencias, desplazamiento, ferreteria, partes de reparacion. | Alta en trabajos a domicilio: direccion, telefono, fotos de averias en vivienda. | OCR medio; audio tentador en urgencias, pero desaconsejado. | Facturas + fotos/notas de incidencias si no se limita. | Media/baja. | Media. | Riesgo de mezclar gasto profesional con informacion domestica del cliente. |
| Climatizacion/HVAC | Equipos, recambios, gases, mantenimiento, instalacion, certificaciones, contratos. | Media/alta: ubicacion, titular, equipo, numero de serie, historial de mantenimiento. | OCR medio/alto; audio no necesario. | Facturas + registros de mantenimiento + documentacion tecnica. | Baja/media. | Alta. | RITE, empresa mantenedora/instaladora habilitada, posible gases fluorados, conservacion documental. |
| SAT tecnico | Repuestos, desplazamiento, diagnostico, presupuesto, factura, garantia, numero de serie. | Alta: consumidor, domicilio, aparato, numero de serie, garantia, incidencias. | OCR medio; audio desaconsejado por sensibilidad y reclamaciones. | Facturas + presupuestos + justificantes de piezas. | Baja. | Alta. | Obligaciones de consumo, presupuesto previo/renuncia, facturas, piezas y garantia. |
| Mantenimiento | Materiales recurrentes, pequeno recambio, herramientas, combustible, parking, factura proveedor, partes internos simples. | Baja/media si se acota a mantenimiento B2B ligero sin domicilios particulares ni certificados. | OCR bajo/medio; puede empezar sin OCR, con entrada manual minima. | Foto de justificante + metadatos minimos; evitar partes tecnicos. | Alta, si se usa muestra sintetica/redactada y no operativa tras aprobacion. | Baja/media. | Menos carga regulatoria si se excluye RITE, gas, certificados y actuaciones criticas. |
| Reformistas | Materiales, subcontratas, presupuestos, contratos, entregas, certificaciones, fotos de obra. | Alta: vivienda, planos/fotos, propietarios, comunidades, presupuestos altos. | OCR alto; fotos y notas serian muy tentadoras. | Facturas + contratos + imagenes de espacios privados. | Baja. | Alta. | Riesgo de privacidad domestica, importes altos, permisos/licencias y reclamaciones. |
| Instaladores | Equipos, materiales, legalizaciones, certificados, garantias, manuales, puesta en marcha. | Media/alta: titular, direccion, equipo, certificado, garantia. | OCR medio/alto. | Facturas + documentacion tecnica y legalizable. | Baja/media. | Alta. | Habilitaciones, certificaciones, normativa sectorial, trazabilidad de instalacion. |
| Multiservicio | Mezcla de reparaciones, instalaciones, urgencias, pequenas obras y mantenimiento. | Alta por heterogeneidad y domicilios. | OCR alto por variedad; audio/fotos tenderian a aparecer. | Muy variable, dificil de minimizar. | Baja. | Alta. | Scope difuso, dificil consentimiento y dificil separar datos permitidos/prohibidos. |

## 2. Criterios usados.

1. Menor sensibilidad de datos personales y menor probabilidad de capturar datos de cliente final.
2. Menor necesidad de OCR, audio, fotos contextuales o extraccion automatica.
3. Posibilidad de operar con metadatos minimos: fecha, proveedor, importe, categoria de gasto y nota corta.
4. Menor necesidad de almacenar documentacion tecnica, certificados, garantias o historiales de equipos.
5. Menor exposicion a normativa sectorial, consumo, instalaciones reguladas o responsabilidad tecnica.
6. Mayor homogeneidad de gastos para una prueba pequena y controlada.
7. Capacidad de excluir desde el primer dia datos prohibidos: clientes finales, domicilios, telefonos, numeros de serie, partes de trabajo, fotos de viviendas, audio y documentos tecnicos.

## 3. Hallazgos de mercado o senales externas.

- La AEAT distingue facturas simplificadas y ordinarias. Una factura simplificada puede existir para importes bajos y contiene datos minimos del emisor, fecha, identificacion del bien/servicio, tipo impositivo y total. Esto favorece un flujo de registro de gastos si el sistema no pretende emitir factura ni sustituir asesoria fiscal.
- La normativa VERI*FACTU afecta a sistemas informaticos de facturacion y refuerza requisitos de integridad, conservacion, trazabilidad, inalterabilidad, QR y registros. Para nuevo_AD_V01, esto es una senal de riesgo: conviene evitar emitir facturas, modificar facturas o prometer cumplimiento fiscal.
- La AEPD recuerda que pymes y autonomos que tratan datos de clientes, proveedores o empleados son responsables del tratamiento y deben aplicar RGPD/LOPDPGDD, minimizando datos e informando de forma clara. La primera prueba debe minimizar datos desde diseno.
- En climatizacion/HVAC, el RITE exige mantenimiento por empresas habilitadas, conservacion de documentacion y registros de actuaciones. Tambien pueden aparecer carnets profesionales y certificaciones especificas, incluidos gases fluorados en ciertos casos. Es un subsegmento tecnicamente atractivo, pero menos seguro para una primera prueba de datos.
- En SAT tecnico, las fuentes de consumo y sectoriales senalan presupuesto previo, renuncia explicita, factura legal, justificantes de piezas, garantia y riesgo de fraude/reclamaciones. Eso eleva sensibilidad documental y carga operativa.
- Reformas, instaladores y multiservicio tienden a mezclar presupuestos, domicilios, fotos de obra, certificados, garantias, subcontratas y datos de propietarios/comunidades. Son peores candidatos si la prioridad es privacidad y baja complejidad tecnica.
- Mantenimiento ligero y recurrente permite una definicion mas estrecha: gastos profesionales propios del tecnico, no documentacion del cliente ni parte de trabajo. Esa separacion es la principal ventaja de seguridad.

## 4. Mejor subsegmento recomendado.

Recomiendo **mantenimiento ligero recurrente B2B/no residencial**, acotado a autonomos o microempresas que registran gastos profesionales propios cerca del momento de pago.

Alcance recomendado para la primera prueba controlada, cuando exista autorizacion formal:

- Incluir: materiales pequenos, consumibles, herramientas menores, recambios no identificables, combustible, parking, peajes, comidas de trabajo si aplica al criterio fiscal definido por Salva/Gael, y facturas de proveedor.
- Excluir: partes de trabajo, datos del cliente final, domicilios particulares, fotos de averias, audio, certificados, boletines, garantias, numeros de serie, contratos de mantenimiento, presupuestos y documentos de instalaciones reguladas.
- Modo tecnico preferente: entrada manual minima + foto opcional solo de justificante redacted/sintetico durante prueba no operativa; sin OCR automatico y sin audio en la primera iteracion.

## 5. Por que gana frente a los demas.

Gana porque permite separar mejor el gasto profesional del tecnico de la informacion del cliente final. En electricistas, fontaneros, HVAC, SAT, reformistas, instaladores y multiservicio, el documento que el tecnico tiene a mano suele convivir con datos de domicilio, titular, equipo, presupuesto, garantia, certificado o incidencia. En mantenimiento ligero, si se define bien, el objeto puede ser solo el justificante de compra del tecnico.

Tambien gana porque sus gastos son mas repetitivos y menos narrativos. Un flujo con fecha, proveedor, importe, categoria y nota corta puede ser suficiente para probar si reduce acumulacion y perdida de justificantes. No exige resolver OCR desde el inicio, no exige transcribir voz y no exige interpretar partes tecnicos.

Frente a HVAC, SAT e instaladores, evita entrar pronto en dominios con registros obligatorios, certificaciones, piezas, garantias, numeros de serie o cumplimiento tecnico. Frente a reformistas y multiservicio, evita la heterogeneidad y la captura accidental de imagenes de viviendas, presupuestos complejos o datos de terceros.

## 6. Riesgos del subsegmento elegido.

- Ambiguedad: "mantenimiento" puede expandirse rapido hacia HVAC, gas, instalaciones reguladas o SAT si no se acota.
- Datos de terceros: incluso en B2B, una factura o nota podria incluir direccion de una comunidad, comercio, contacto o referencia de cliente.
- Fiscalidad: registrar gastos no debe confundirse con asesorar deducibilidad, emitir factura, contabilizar oficialmente o garantizar cumplimiento AEAT.
- Almacenamiento: conservar fotos de justificantes implica datos fiscales y posiblemente datos personales de autonomos o proveedores persona fisica.
- OCR futuro: si se activa OCR, aumentan superficie de error, datos extraidos innecesarios y necesidad de controles de minimizacion.
- Prueba controlada: el source of truth actual no permite datos reales ni mock operativo; cualquier prueba debe esperar aprobacion y limites escritos.

## 7. Que habria que comprobar antes de avanzar.

1. Definicion exacta del target: mantenimiento ligero B2B/no residencial, excluyendo HVAC regulado, gas, instalaciones certificadas, SAT de consumo y reformas.
2. Lista cerrada de datos permitidos: fecha, proveedor, importe, IVA si aparece, categoria, metodo de pago opcional y nota corta sin cliente final.
3. Lista cerrada de datos prohibidos: nombre/direccion/telefono/email del cliente final, fotos de viviendas, partes de trabajo, audio, numeros de serie, certificados, boletines, garantias y contratos.
4. Metodo de prueba autorizado por owners: sin datos reales hasta sign-off; si se aprueba, empezar con datos sinteticos o justificantes completamente redactados.
5. Texto de consentimiento y limites: la herramienta registra gastos; no emite facturas, no presenta impuestos, no garantiza deducibilidad y no sustituye asesoria.
6. Politica de almacenamiento: cifrado, retencion corta para prueba, borrado verificable, acceso minimo y no entrenamiento con documentos.
7. Criterios de invalidacion: si los usuarios necesitan audio, OCR completo, adjuntar partes de trabajo o capturar datos de clientes, el subsegmento deja de ser seguro para MVP.

## 8. Que subsegmentos descartas por ahora y por que.

- Electricistas: descartar por ahora si el caso real incluye boletines, certificados, legalizaciones, cuadros, direcciones o datos de titulares. Podria reconsiderarse solo como compra de materiales sin documentacion tecnica.
- Fontaneros: descartar por ahora por urgencias domesticas, fotos de averias, direcciones y alta probabilidad de mezclar cliente final con gasto.
- Climatizacion/HVAC: descartar por ahora por RITE, mantenimiento documentado, certificaciones, gases fluorados en ciertos casos, equipos identificables y mayor carga tecnica.
- SAT tecnico: descartar por ahora por presupuesto, renuncias, garantia, piezas, numero de serie, domicilio, reclamaciones de consumo y sensibilidad del cliente final.
- Reformistas: descartar por ahora por presupuestos altos, contratos, fotos de vivienda, permisos, subcontratas y baja homogeneidad documental.
- Instaladores: descartar por ahora por certificados, legalizacion, puesta en marcha, garantias, numeros de serie y responsabilidad tecnica.
- Multiservicio: descartar por ahora por ser demasiado amplio. Dificulta minimizacion, consentimiento, exclusion de datos y diseno de una prueba limpia.

## 9. Nivel de confianza: alto, medio o bajo.

**Medio.**

La confianza es media porque las senales externas apoyan que mantenimiento ligero puede ser mas seguro que SAT, HVAC, reformas o instalaciones, pero el termino "mantenimiento" necesita una acotacion estricta. Si se permite mantenimiento residencial, regulado o con partes de trabajo, la confianza baja.

## 10. Recomendacion final: avanzar, investigar mas, reformular o bloquear.

**Recomendacion final: avanzar, pero solo con reformulacion acotada y sin desbloquear validacion todavia.**

Formula recomendada:

> Primera prueba controlada para autonomos/microempresas de mantenimiento ligero B2B/no residencial que necesitan registrar gastos profesionales propios en el momento, sin capturar datos de clientes finales, sin OCR obligatorio, sin audio, sin partes tecnicos y sin documentacion regulada.

Condicion de avance:

- Avanzar solo despues de que Salva y owners aprueben target, datos permitidos/prohibidos, modo de prueba, consentimiento, almacenamiento, criterios de invalidacion y limites de promesa.

## Fuentes publicas consultadas.

1. Agencia Tributaria, "Facturas simplificadas": https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-iva-2022/capitulo-10-obligac-formales-suj-registro/obligaciones-materia-facturacion/facturas-simplificadas.html
2. Agencia Tributaria, "Cuestiones generales - Sistemas Informaticos de Facturacion / VERI*FACTU": https://sede.agenciatributaria.gob.es/Sede/iva/sistemas-informaticos-facturacion-verifactu/cuestiones-generales.html
3. AEPD, "Proteccion de datos paso a paso. Informacion basica para pymes y autonomos": https://www.aepd.es/infografias/ayuda-rgpd-pymes-autonomos.pdf
4. BOE, Real Decreto 1027/2007, Reglamento de Instalaciones Termicas en los Edificios: https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820
5. Canal Empresa, Generalitat de Catalunya, "Empresa instaladora y mantenedora de instalaciones termicas en los edificios": https://canalempresa.gencat.cat/es/03_sectors_d_activitat/05_construccio_i_instal_lacions/04_instal_ladors/requisits-de-les-empreses-installadores/empresa-installadora-i-mantenidora-dinstallacions-termiques-en-els-edificis/
6. Ayuntamiento de Madrid, "Informacion basica de consumo: Servicios de Asistencia Tecnica": https://www.madrid.es/UnidadesDescentralizadas/Consumo/EspecialInformativo/EspacioEmpresarios/03Publicaciones/SAT_2016web.pdf
7. APPLiA Espana, "Como detectar si un servicio de reparacion de electrodomesticos ofertado por internet es ilegal": https://applia.es/wp-content/uploads/2022/05/COMO-DETECTAR-SI-UN-SERVICIO-DE-REPARACION-DE-ELECTRODOMESTICOS-OFERTADO-POR-INTERNET-ES-ILEGAL.pdf
