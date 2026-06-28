# Alta en Notion - Asesor Fitness Salva

Estado del paquete:

- Archivo principal: `Plan Semana 1 - Salva.md`
- Imagenes incluidas:
  - `salva_semana_1_visual_parte_1.png`
  - `salva_semana_1_visual_parte_2.png`
  - `salva_semana_1_visual_parte_3.png`

## Objetivo

Crear en Notion una pagina base llamada `Asesor Fitness - Salva` con:

- ficha visual de la semana 1;
- checklist semanal;
- registro diario;
- decision de progresion;
- plan de entrenamientos;
- cenas flexibles;
- lista de compra;
- reglas para comer fuera;
- aviso medico de seguridad.

## Alta desde PC

1. Abre Notion en el navegador del PC.
2. En el espacio privado o workspace elegido, crea una pagina nueva.
3. Nombra la pagina: `Asesor Fitness - Salva`.
4. En el menu de Notion, usa `Import` > `Markdown & CSV`.
5. Selecciona el archivo `asesor_fitness_salva_notion_import.zip`.
6. Si Notion no inserta automaticamente las imagenes, sube manualmente las tres imagenes PNG al inicio de la pagina, bajo el bloque `Ficha visual`.
7. Revisa que los checkboxes y tablas se vean correctamente.
8. Fija la pagina en favoritos o en la barra lateral.

## Alta directa por API

Preparacion segura:

1. Crea una integracion en Notion.
2. Copia el `Internal Integration Secret`.
3. Crea o elige una pagina padre en Notion.
4. Comparte esa pagina padre con la integracion.
5. En el PC, exporta el token y la pagina padre en la terminal. No pegues el token en chats ni lo guardes en archivos del workspace.

## Configuracion recomendada con secreto local

Para no exportar el token cada vez, configura una vez el archivo privado:

```bash
/home/salamirin/.openclaw/workspace/salva_notion_import/scripts/setup_notion_fitness_env.sh
```

El script pedira:

- `Internal Integration Secret` de Notion;
- URL de la pagina `ASESOR FITNESS - SALVA`, con valor por defecto ya preparado.

Guarda el secreto fuera del workspace, en:

```text
/home/salamirin/.openclaw/private/notion-fitness.env
```

Luego ejecuta sin pegar el token:

```bash
/home/salamirin/.openclaw/workspace/salva_notion_import/scripts/run_notion_fitness_dashboard.sh
```

Para reconstruir la pagina y dejar el dashboard arriba:

```bash
/home/salamirin/.openclaw/workspace/salva_notion_import/scripts/run_notion_fitness_dashboard.sh --rebuild
```

Este es el metodo recomendado. Los comandos de `export` de abajo quedan como alternativa manual.

Para crear una pagina hija nueva dentro de una pagina padre, sustituyendo los valores de ejemplo por los reales:

```bash
export NOTION_API_TOKEN='pega_aqui_el_internal_integration_secret_real'
export NOTION_PARENT_PAGE='pega_aqui_la_url_real_de_la_pagina_padre_de_notion'
node /home/salamirin/.openclaw/workspace/salva_notion_import/scripts/create_fitness_dashboard_notion.mjs
```

Para rellenar una pagina existente ya conectada con la integracion, usa `NOTION_TARGET_PAGE`:

```bash
export NOTION_API_TOKEN='pega_aqui_el_internal_integration_secret_real'
export NOTION_TARGET_PAGE='pega_aqui_la_url_real_de_la_pagina_existente_de_notion'
node /home/salamirin/.openclaw/workspace/salva_notion_import/scripts/create_fitness_dashboard_notion.mjs
```

Para corregir la pagina existente y dejar el dashboard arriba, reconstruyendo los bloques actuales:

```bash
export NOTION_API_TOKEN='pega_aqui_el_internal_integration_secret_real'
export NOTION_TARGET_PAGE='pega_aqui_la_url_real_de_la_pagina_existente_de_notion'
NOTION_REBUILD=1 node /home/salamirin/.openclaw/workspace/salva_notion_import/scripts/create_fitness_dashboard_notion.mjs
```

Este modo manda a la papelera los bloques actuales de esa pagina y vuelve a crear la version corregida. Usalo solo sobre la pagina `ASESOR FITNESS - SALVA`.

La URL real de pagina padre suele parecerse a una de estas formas:

```text
https://www.notion.so/workspace/Nombre-de-pagina-1234567890abcdef1234567890abcdef
https://www.notion.so/1234567890abcdef1234567890abcdef
```

El script crea una pagina `Asesor Fitness - Salva` con dashboard visual, panel semanal, checklist, registro diario, entrenamientos, cenas, reglas para comer fuera y decision final de semana.

## Uso semanal

- Completar el registro diario cada noche.
- Pesar 3 mananas y calcular media.
- Medir cintura 1 vez por semana.
- Revisar pierna izquierda a diario.
- Al final de la semana marcar una sola decision:
  - repetir semana;
  - mantener y pulir;
  - progresar suave.

## Criterio de seguridad

Este plan es de baja intensidad y no sustituye revision medica. Con deficit de proteina C, coloracion, hinchazon o pinchazos en pierna izquierda, no hay que subir intensidad si la pierna empeora. Si aparece dolor fuerte, calor local, aumento claro de hinchazon/color, falta de aire, dolor toracico, mareo importante o sensacion rara repentina, hay que parar y valorar urgencias.
