export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'es';

/** BCP-47 tags used in `lang`, `hreflang` and structured data. */
export const HTML_LANG: Record<Locale, string> = {
  es: 'es-CL',
  en: 'en',
};

export const OG_LOCALE: Record<Locale, string> = {
  es: 'es_CL',
  en: 'en_US',
};

/**
 * A value that exists in both languages. Keeping translations next to each
 * other makes it impossible to add content in one language and silently
 * forget the other.
 */
export type I18n<T> = Record<Locale, T>;

export function pick<T>(value: I18n<T>, lang: Locale): T {
  return value[lang];
}

/**
 * Canonical page keys mapped to their localized paths. This is the single
 * source of truth for navigation, the language switcher, hreflang alternates
 * and the sitemap, so a renamed route can never drift between them.
 */
export const ROUTES = {
  home: { es: '/', en: '/en/' },
  career: { es: '/trayectoria/', en: '/en/career/' },
  work: { es: '/proyectos/', en: '/en/projects/' },
  notes: { es: '/notas-tecnicas/', en: '/en/technical-notes/' },
  teaching: { es: '/docencia/', en: '/en/teaching/' },
  contact: { es: '/contacto/', en: '/en/contact/' },
} as const satisfies Record<string, I18n<string>>;

export type RouteKey = keyof typeof ROUTES;

/** Order used by the main navigation. `home` is reached through the wordmark. */
export const NAV_ORDER: RouteKey[] = ['career', 'work', 'notes', 'teaching', 'contact'];

export function route(key: RouteKey, lang: Locale): string {
  return ROUTES[key][lang];
}
