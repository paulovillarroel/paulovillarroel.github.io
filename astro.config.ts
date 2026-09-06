import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { HTML_LANG, LOCALES, ROUTES } from './src/i18n/config.ts';

const SITE_URL = 'https://paulovillarroel.github.io';

/**
 * Maps every localized path back to its canonical page key, so the sitemap can
 * emit correct hreflang alternates. The built-in `i18n` option cannot do this:
 * it pairs URLs by matching path segments, and our routes are translated
 * (/proyectos/ vs /en/projects/), so it would only ever pair the home page.
 */
const ALTERNATES = new Map<string, { lang: string; url: string }[]>();
for (const paths of Object.values(ROUTES)) {
  const links = LOCALES.map((locale) => ({
    lang: HTML_LANG[locale],
    url: new URL(paths[locale], SITE_URL).href,
  }));
  links.push({ lang: 'x-default', url: new URL(paths.es, SITE_URL).href });
  for (const locale of LOCALES) {
    ALTERNATES.set(new URL(paths[locale], SITE_URL).href, links);
  }
}

// Deploy target: https://github.com/paulovillarroel/paulovillarroel.github.io
// User-page repo -> served at the domain root, so `base` stays '/'.
export default defineConfig({
  site: SITE_URL,
  base: '/',
  trailingSlash: 'ignore',

  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      serialize(item) {
        const links = ALTERNATES.get(item.url);
        return links ? { ...item, links } : item;
      },
    }),
  ],

  // Astro self-hosts and subsets these, so there are no third-party font
  // requests at runtime and no layout shift while they load.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Source Serif 4',
      cssVariable: '--font-serif',
      weights: ['400 700'],
      styles: ['normal', 'italic'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['system-ui', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [500],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
  ],

  build: {
    inlineStylesheets: 'auto',
  },
});
