import { DEFAULT_LOCALE, LOCALES, ROUTES, type Locale, type RouteKey } from './config';

/** Reads the active locale from a URL, falling back to the default. */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return LOCALES.includes(first as Locale) ? (first as Locale) : DEFAULT_LOCALE;
}

/** Finds the canonical page key for a pathname, so we can offer its translation. */
export function getRouteKeyFromPath(pathname: string): RouteKey | undefined {
  const normalized = withTrailingSlash(pathname);
  const entries = Object.entries(ROUTES) as [RouteKey, Record<Locale, string>][];
  return entries.find(([, paths]) =>
    Object.values(paths).some((path) => withTrailingSlash(path) === normalized),
  )?.[0];
}

export function withTrailingSlash(pathname: string): string {
  if (pathname.endsWith('/')) return pathname;
  return `${pathname}/`;
}

/** Absolute URL for a site-relative path, honouring the configured `site`. */
export function absoluteUrl(path: string, site: URL | undefined): string {
  const base = site ?? new URL('https://paulovillarroel.github.io');
  return new URL(path, base).href;
}

export function formatList(items: string[], lang: Locale): string {
  return new Intl.ListFormat(lang, { style: 'long', type: 'conjunction' }).format(items);
}
