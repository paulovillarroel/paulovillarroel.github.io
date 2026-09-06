# paulovillarroel.github.io

Sitio personal de **Paulo Villarroel Tapia** — arquitecto de soluciones de datos en salud pública.

Astro 7 · TypeScript estricto · bilingüe ES/EN · sin JavaScript en el cliente · GitHub Pages.

## Puesta en marcha

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # astro check && astro build -> dist/
npm run preview   # sirve dist/ localmente
```

## Estructura

```
src/
  data/          Contenido. Cada campo es bilingüe: { es, en }
    site.ts        Identidad, redes, afiliaciones
    profile.ts     Cifras, áreas de trabajo, narrativa, conclusiones
    projects.ts    Proyectos técnicos + programa ministerial 2026
    career.ts      Cronología, formación, reconocimientos
    teaching.ts    Iniciativas, temario, ponencias
    notes.ts       Casos de ingeniería, posiciones técnicas, ejercicios
  i18n/
    config.ts      Locales y el mapa de rutas traducidas (fuente única)
    ui.ts          Textos de interfaz
    utils.ts       Helpers de locale y URL
  lib/llms.ts    Genera /llms.txt y /llms-full.txt desde src/data
  views/         Una vista por página, reutilizada por ambos idiomas
  pages/         Rutas finas: ES en la raíz, EN bajo /en/
```

**Para editar contenido, toca `src/data/`.** Las vistas y las páginas no contienen
texto de negocio; solo maquetación.

## Cómo funciona el bilingüismo

`src/i18n/config.ts` define `ROUTES`, que mapea cada página canónica a su ruta en
cada idioma:

```ts
work: { es: '/proyectos/', en: '/en/projects/' }
```

De ahí salen la navegación, el conmutador de idioma, las etiquetas `hreflang`, las
alternancias del sitemap y el índice de `llms.txt`. **Añadir una página es añadir una
entrada a `ROUTES`**; el tipado hace fallar el build hasta que se completen todos los
lugares que la necesitan.

El español es el idioma canónico y vive en la raíz sin prefijo (`prefixDefaultLocale:
false`); el inglés vive bajo `/en/`.

## SEO

- `<title>`, meta description y canónica por página
- `hreflang` para `es-CL`, `en` y `x-default` en cada página, y en el sitemap
- Open Graph y Twitter Card, con tarjeta social distinta por idioma
- JSON-LD: grafo `Person` + `WebSite` + `ProfilePage`/`WebPage` con `@id` consistentes
- `sitemap-index.xml` y `robots.txt` generados en el build

El sitemap usa un `serialize` propio en `astro.config.ts` en vez de la opción `i18n`
de `@astrojs/sitemap`: esa opción empareja idiomas comparando segmentos de ruta, y
como aquí las rutas están traducidas (`/proyectos/` vs `/en/projects/`) solo lograba
emparejar la portada.

## Navegación para agentes LLM

| Ruta | Contenido |
| --- | --- |
| `/llms.txt` | Índice bilingüe según la convención de [llmstxt.org](https://llmstxt.org) |
| `/llms-full.txt` | Todo el contenido del sitio en español, texto plano |
| `/en/llms-full.txt` | Lo mismo en inglés |

Se generan en `src/lib/llms.ts` leyendo los mismos módulos de `src/data/` que
alimentan las páginas, así que no pueden quedar desactualizados respecto al sitio.

## Rendimiento y accesibilidad

- **Cero JavaScript** enviado al cliente
- Fuentes autoalojadas y subseteadas por la API de fuentes de Astro; sin peticiones a
  terceros ni salto de layout. Solo se precargan las tres caras que pintan sobre el
  pliegue
- Toda la paleta de texto cumple WCAG AA (≥ 4.5:1) sobre las tres superficies
- Enlace de salto al contenido, `aria-current` en la navegación, un solo `<h1>` por
  página, jerarquía de encabezados sin saltos y `prefers-reduced-motion` respetado

## Despliegue

`.github/workflows/deploy.yml` publica en GitHub Pages en cada push a `main`. El
workflow corre `npm run build`, que ejecuta `astro check` antes de compilar: un error
de tipos rompe el despliegue en lugar de publicar una página rota.

Configuración necesaria una sola vez: **Settings → Pages → Source: GitHub Actions**.

## Assets

Las imágenes sociales (`og-es.png`, `og-en.png`) y los iconos se generaron con los
scripts de `scripts/`. Vuelve a ejecutarlos solo si cambia la identidad visual.

## Nota sobre TypeScript

El proyecto está fijado a TypeScript 6 a propósito: `@astrojs/check` declara
`peerDependencies: { typescript: "^5.0.0 || ^6.0.0" }` y aún no soporta la 7. El
`tsconfig.json` ya está libre de `baseUrl`, así que el salto será directo cuando
`@astrojs/check` publique soporte.
