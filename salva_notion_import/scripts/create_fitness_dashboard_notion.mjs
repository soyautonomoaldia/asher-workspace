#!/usr/bin/env node

const token = process.env.NOTION_API_TOKEN;
const parentInput = process.env.NOTION_PARENT_PAGE || process.env.NOTION_PARENT_PAGE_ID;
const targetInput = process.env.NOTION_TARGET_PAGE || process.env.NOTION_TARGET_PAGE_ID;
const notionVersion = process.env.NOTION_API_VERSION || "2026-03-11";
const rebuild = process.env.NOTION_REBUILD === "1";

if (!token) {
  console.error("Missing NOTION_API_TOKEN. Export it in the shell; do not store it in this repo.");
  process.exit(1);
}

if (token === "secret_xxx" || token.includes("xxx")) {
  console.error("NOTION_API_TOKEN still looks like a placeholder. Use the real Internal Integration Secret from Notion.");
  process.exit(1);
}

if (!parentInput && !targetInput) {
  console.error("Missing NOTION_PARENT_PAGE/NOTION_PARENT_PAGE_ID or NOTION_TARGET_PAGE/NOTION_TARGET_PAGE_ID.");
  process.exit(1);
}

if (parentInput && (parentInput === "https://www.notion.so/..." || parentInput.includes("..."))) {
  console.error("NOTION_PARENT_PAGE still looks like a placeholder. Use a real Notion page URL or a 32-character page id.");
  process.exit(1);
}

if (targetInput && (targetInput === "https://www.notion.so/..." || targetInput.includes("..."))) {
  console.error("NOTION_TARGET_PAGE still looks like a placeholder. Use a real Notion page URL or a 32-character page id.");
  process.exit(1);
}

function pageIdFrom(input) {
  const clean = decodeURIComponent(input).split(/[?#]/)[0];
  const lastSegment = clean.split("/").filter(Boolean).at(-1) || clean;

  const uuidMatch = lastSegment.match(/[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/);
  const compactMatch = lastSegment.match(/(?:^|-)([0-9a-fA-F]{32})$/);
  const id = (uuidMatch?.[0] || compactMatch?.[1] || "").replace(/-/g, "").toLowerCase();

  if (!id) {
    throw new Error("Could not extract a Notion page id from NOTION_PARENT_PAGE.");
  }

  return `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20)}`;
}

const parentPageId = parentInput ? pageIdFrom(parentInput) : null;
const targetPageId = targetInput ? pageIdFrom(targetInput) : null;

function text(content, annotations = {}) {
  return { type: "text", text: { content }, annotations };
}

function link(label, url) {
  return { type: "text", text: { content: label, link: { url } } };
}

function richParagraph(richText) {
  return { object: "block", type: "paragraph", paragraph: { rich_text: richText } };
}

function paragraph(content) {
  return { object: "block", type: "paragraph", paragraph: { rich_text: [text(content)] } };
}

function heading_2(content) {
  return { object: "block", type: "heading_2", heading_2: { rich_text: [text(content)] } };
}

function heading_3(content) {
  return { object: "block", type: "heading_3", heading_3: { rich_text: [text(content)] } };
}

function divider() {
  return { object: "block", type: "divider", divider: {} };
}

function todo(content, checked = false) {
  return { object: "block", type: "to_do", to_do: { rich_text: [text(content)], checked } };
}

function bulleted(content) {
  return { object: "block", type: "bulleted_list_item", bulleted_list_item: { rich_text: [text(content)] } };
}

function bulletedRich(richText) {
  return { object: "block", type: "bulleted_list_item", bulleted_list_item: { rich_text: richText } };
}

function numbered(content) {
  return { object: "block", type: "numbered_list_item", numbered_list_item: { rich_text: [text(content)] } };
}

function callout(content, emoji = "⚪", color = "gray_background") {
  return {
    object: "block",
    type: "callout",
    callout: {
      icon: { type: "emoji", emoji },
      color,
      rich_text: [text(content)],
    },
  };
}

function toggle(title, children) {
  return {
    object: "block",
    type: "toggle",
    toggle: {
      rich_text: [text(title)],
      children,
    },
  };
}

function table(rows) {
  return {
    object: "block",
    type: "table",
    table: {
      table_width: rows[0].length,
      has_column_header: true,
      has_row_header: false,
      children: rows.map((row) => ({
        object: "block",
        type: "table_row",
        table_row: {
          cells: row.map((cell) => [{ type: "text", text: { content: cell } }]),
        },
      })),
    },
  };
}

async function notion(path, options = {}) {
  const res = await fetch(`https://api.notion.com/v1/${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": notionVersion,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const body = await res.text();
  let parsed;
  try {
    parsed = body ? JSON.parse(body) : {};
  } catch {
    parsed = { raw: body };
  }

  if (!res.ok) {
    const detail = parsed?.message || body || res.statusText;
    throw new Error(`${res.status} ${res.statusText}: ${detail}`);
  }

  return parsed;
}

async function listAllChildBlocks(blockId) {
  const blocks = [];
  let cursor;

  do {
    const query = new URLSearchParams({ page_size: "100" });
    if (cursor) query.set("start_cursor", cursor);
    const page = await notion(`blocks/${blockId}/children?${query.toString()}`, { method: "GET" });
    blocks.push(...(page.results || []));
    cursor = page.has_more ? page.next_cursor : null;
  } while (cursor);

  return blocks;
}

async function clearPageChildren(pageId) {
  const children = await listAllChildBlocks(pageId);
  for (const child of children) {
    await notion(`blocks/${child.id}`, {
      method: "PATCH",
      body: JSON.stringify({ in_trash: true }),
    });
  }
  return children.length;
}

const dayChildren = (day) => [
  todo("Entreno hecho, adaptado o descartado con criterio"),
  todo("Cena controlada"),
  todo("Pierna izquierda revisada: color, hinchazon, pinchazos, dolor y calor local"),
  todo("Nota rapida del dia registrada"),
  paragraph("Si la pierna empeora claramente, no se progresa intensidad."),
];

const exerciseLink = (name, url, detail) => bulletedRich([link(name, url), text(` - ${detail}`)]);

const trainingBlocks = [
  toggle("Dia 1 - Fuerza superior A + core suave", [
    callout("Objetivo: mover torso, activar core y terminar con sensacion de control. Duracion: 40-55 min. Esfuerzo 4-6/10.", "🏋️", "gray_background"),
    heading_3("Calentamiento"),
    bulleted("Eliptica o caminar suave: 6-8 min."),
    bulleted("Movilidad de hombros y columna toracica: 3-4 min."),
    bulleted("Una serie muy ligera de cada movimiento antes de empezar."),
    heading_3("Trabajo principal"),
    exerciseLink("Press en suelo con mancuernas", "https://www.youtube.com/results?search_query=press+suelo+mancuernas+tecnica", "3 series de 8-12 repeticiones. Sin aguantar la respiracion."),
    exerciseLink("Remo con mancuerna apoyado", "https://www.youtube.com/results?search_query=remo+con+mancuerna+apoyado+tecnica", "3 series de 8-12 por lado. Espalda estable."),
    exerciseLink("Press de hombro sentado", "https://www.youtube.com/results?search_query=press+hombro+sentado+mancuernas+tecnica", "2 series de 8-10. Peso comodo."),
    exerciseLink("Curl biceps con mancuernas", "https://www.youtube.com/results?search_query=curl+biceps+mancuernas+tecnica", "2 series de 10-12."),
    exerciseLink("Extension de triceps apoyado", "https://www.youtube.com/results?search_query=extension+triceps+mancuerna+apoyado+tecnica", "2 series de 10-12."),
    exerciseLink("Dead bug", "https://www.youtube.com/results?search_query=dead+bug+ejercicio+tecnica+espa%C3%B1ol", "2 series de 6-8 por lado, lento."),
    heading_3("Cierre"),
    bulleted("Movilidad suave 5 min."),
    bulleted("Registrar sensaciones y estado de pierna."),
  ]),
  toggle("Dia 2 - Eliptica suave + movilidad", [
    callout("Objetivo: gasto suave, adherencia y cero heroicidades. Duracion: 35-50 min.", "🚶", "gray_background"),
    bulleted("Eliptica 25-35 min a ritmo comodo. Puedes hablar sin quedarte sin aire."),
    bulleted("Movilidad de cadera, espalda y hombros: 8-10 min."),
    bulleted("Rodillo suave si ayuda, sin machacar zonas sensibles."),
    bulleted("Si hay aumento claro de hinchazon/color o pinchazos raros, parar y registrar."),
  ]),
  toggle("Dia 3 - Fuerza superior B + pierna minima segura", [
    callout("Objetivo: repetir fuerza con variantes y probar pierna solo si no molesta. Duracion: 40-55 min.", "🏋️", "gray_background"),
    heading_3("Calentamiento"),
    bulleted("Eliptica suave o caminar: 6-8 min."),
    bulleted("Movilidad general: 4-5 min."),
    heading_3("Trabajo principal"),
    exerciseLink("Remo con mancuerna apoyado", "https://www.youtube.com/results?search_query=remo+con+mancuerna+apoyado+tecnica", "3 series de 8-12 por lado."),
    exerciseLink("Press en suelo con mancuernas", "https://www.youtube.com/results?search_query=press+suelo+mancuernas+tecnica", "3 series de 8-12."),
    exerciseLink("Press de hombro sentado", "https://www.youtube.com/results?search_query=press+hombro+sentado+mancuernas+tecnica", "2 series de 8-10."),
    exerciseLink("Sentarse y levantarse de silla", "https://www.youtube.com/results?search_query=sentarse+y+levantarse+de+silla+ejercicio+tecnica", "1-2 series de 6-8 solo si la pierna esta estable y no molesta."),
    exerciseLink("Dead bug", "https://www.youtube.com/results?search_query=dead+bug+ejercicio+tecnica+espa%C3%B1ol", "2 series de 6-8 por lado."),
    heading_3("Cierre"),
    bulleted("Descarga suave 5 min."),
    bulleted("Registrar si la pierna tolero bien la sesion."),
  ]),
  toggle("Dia 4 - Eliptica suave + movilidad + descarga", [
    callout("Objetivo: cerrar semana sin subir intensidad. Duracion: 35-50 min.", "🚶", "gray_background"),
    bulleted("Eliptica 20-30 min comoda."),
    bulleted("Movilidad 10-12 min."),
    bulleted("Rodillo suave o estiramientos ligeros 5-8 min."),
    bulleted("No saltar cuerda esta semana."),
    bulleted("Cerrar registro semanal y elegir decision: repetir, mantener o progresar suave."),
  ]),
];

const blocks = [
  callout("Dashboard movil: empieza aqui. La imagen final es solo apoyo visual; los accesos reales estan en esta pagina.", "📱", "green_background"),
  callout("Semana 1: fase 0. Objetivo: perder peso, crear habito y entrenar con seguridad.", "🎯", "blue_background"),
  callout("Prioridad medica: deficit de proteina C y pierna izquierda pendiente de revision. Evitar alta intensidad y parar ante dolor fuerte, calor local, aumento claro de hinchazon/color, falta de aire, dolor toracico, mareo importante o sensacion rara repentina.", "🛡️", "red_background"),
  divider(),
  heading_2("Hoy"),
  todo("Revisar pierna izquierda: color, hinchazon, pinchazos, dolor y calor local"),
  todo("Elegir sesion del dia o descanso activo"),
  todo("Entrenar en esfuerzo 4-6/10, maximo 7/10"),
  todo("No aguantar la respiracion"),
  todo("Registrar cena y sensaciones al final del dia"),
  heading_2("Accesos rapidos"),
  bulleted("Entrenamientos de la semana: baja al bloque Entrenamientos"),
  bulleted("Ejercicios con videos: baja al bloque Enlaces rapidos"),
  bulleted("Seguimiento diario: abre el dia correspondiente"),
  bulleted("Cenas flexibles: baja al bloque Cenas flexibles"),
  bulleted("Decision final: baja al cierre de semana"),
  divider(),
  heading_2("Panel semanal"),
  table([
    ["Indicador", "Objetivo", "Estado"],
    ["Entrenos", "4 sesiones completadas o adaptadas", "Pendiente"],
    ["Cenas", "5-7 cenas controladas", "Pendiente"],
    ["Peso", "3 mananas y media semanal", "Pendiente"],
    ["Cintura", "1 medicion", "Pendiente"],
    ["Pierna izquierda", "Revision diaria", "Pendiente"],
  ]),
  heading_2("Checklist de la semana"),
  todo("4 entrenamientos completados o adaptados"),
  todo("5-7 cenas controladas"),
  todo("Peso 3 mananas y calcular media"),
  todo("Cintura medida 1 vez"),
  todo("Pierna izquierda revisada a diario"),
  divider(),
  heading_2("Registro diario"),
  toggle("Lunes", dayChildren("Lunes")),
  toggle("Martes", dayChildren("Martes")),
  toggle("Miercoles", dayChildren("Miercoles")),
  toggle("Jueves", dayChildren("Jueves")),
  toggle("Viernes", dayChildren("Viernes")),
  toggle("Sabado", dayChildren("Sabado")),
  toggle("Domingo", dayChildren("Domingo")),
  divider(),
  heading_2("Entrenamientos"),
  ...trainingBlocks,
  heading_3("Enlaces rapidos"),
  bulletedRich([text("Press en suelo con mancuernas: "), link("ver videos", "https://www.youtube.com/results?search_query=press+suelo+mancuernas+tecnica")]),
  bulletedRich([text("Remo con mancuerna apoyado: "), link("ver videos", "https://www.youtube.com/results?search_query=remo+con+mancuerna+apoyado+tecnica")]),
  bulletedRich([text("Press de hombro sentado: "), link("ver videos", "https://www.youtube.com/results?search_query=press+hombro+sentado+mancuernas+tecnica")]),
  bulletedRich([text("Curl biceps con mancuernas: "), link("ver videos", "https://www.youtube.com/results?search_query=curl+biceps+mancuernas+tecnica")]),
  bulletedRich([text("Extension triceps apoyado: "), link("ver videos", "https://www.youtube.com/results?search_query=extension+triceps+mancuerna+apoyado")]),
  bulletedRich([text("Dead bug: "), link("ver videos", "https://www.youtube.com/results?search_query=dead+bug+ejercicio+tecnica+espa%C3%B1ol")]),
  bulletedRich([text("Sentarse y levantarse de silla: "), link("ver videos", "https://www.youtube.com/results?search_query=sentarse+y+levantarse+de+silla+ejercicio+tecnica")]),
  richParagraph([text("Nota: estos si son enlaces accionables. La ficha visual de abajo no debe usarse como menu.", { italic: true })]),
  divider(),
  heading_2("Cenas flexibles"),
  table([
    ["Hambre", "Cena", "Compra base"],
    ["Ligera", "Tortilla con calabacin/pimiento + yogur proteico", "Huevos, calabacin, pimiento, skyr"],
    ["Ligera", "Merluza con menestra", "Merluza congelada, menestra, ajo"],
    ["Media", "Pollo con patata y verduras", "Pechuga, patata, brocoli/calabacin"],
    ["Media", "Bowl de arroz, pavo y verduras", "Arroz, pavo, verduras, yogur natural"],
    ["Alta", "Carne magra con patata y verduras", "Ternera magra o picada 90%+, patata"],
    ["Alta", "Garbanzos salteados con atun y verduras", "Garbanzos, atun, verduras"],
  ]),
  heading_2("Comer fuera"),
  numbered("Proteina primero: pollo, pescado, ternera magra, huevos, marisco o legumbre."),
  numbered("Verdura sin lechuga: parrillada, tomate, menestra, crema o gazpacho."),
  numbered("Un hidrato, no todos: patata, arroz, pan, pasta o legumbre."),
  numbered("Postre simple: fruta o cafe. Alcohol: mejor agua; si toca vino, una copa."),
  divider(),
  heading_2("Decision final de semana"),
  callout("Repetir semana: si hubo 0-2 entrenos o mucha desorganizacion.", "🔁", "yellow_background"),
  callout("Mantener y pulir: si hubo 3-4 entrenos pero cenas/comidas fuera irregulares.", "🧭", "blue_background"),
  callout("Progresar suave: solo si hubo buena adherencia y la pierna no empeoro.", "✅", "green_background"),
  divider(),
  heading_2("Ficha visual"),
  paragraph("Subir aqui las tres imagenes locales del paquete si no se insertan automaticamente por API: salva_semana_1_visual_parte_1.png, salva_semana_1_visual_parte_2.png y salva_semana_1_visual_parte_3.png."),
];

if (targetPageId) {
  let clearedBlocks = 0;
  if (rebuild) {
    clearedBlocks = await clearPageChildren(targetPageId);
  }

  const result = await notion(`blocks/${targetPageId}/children`, {
    method: "PATCH",
    body: JSON.stringify({ children: blocks }),
  });

  console.log(JSON.stringify({
    ok: true,
    mode: "appended_to_existing_page",
    pageId: targetPageId,
    rebuild,
    clearedBlocks,
    appendedBlocks: result.results?.length ?? blocks.length,
  }, null, 2));
} else {
  const page = await notion("pages", {
    method: "POST",
    body: JSON.stringify({
      parent: { page_id: parentPageId },
      icon: { type: "emoji", emoji: "💪" },
      properties: {
        title: {
          title: [{ type: "text", text: { content: "Asesor Fitness - Salva" } }],
        },
      },
      children: blocks,
    }),
  });

  console.log(JSON.stringify({
    ok: true,
    mode: "created_child_page",
    pageId: page.id,
    url: page.url,
  }, null, 2));
}
