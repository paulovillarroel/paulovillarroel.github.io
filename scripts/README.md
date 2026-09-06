# Scripts de assets

Generan las tarjetas sociales y los iconos que viven en `public/`. Son de un solo uso:
solo hay que volver a correrlos si cambia la identidad visual.

Requieren `sharp` y las fuentes reales instaladas en el sistema (Source Serif 4, Inter,
JetBrains Mono), porque el texto se rasteriza desde SVG vía fontconfig.

```bash
npm i -D sharp
node scripts/generate-og.mjs      # -> og-es.png, og-en.png (1200x630)
node scripts/generate-icons.mjs   # -> favicon.svg, icon-32/512.png, apple-touch-icon.png
```

Mueve los archivos resultantes a `public/`.
