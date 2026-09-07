import type { I18n } from '@/i18n/config';

export const SITE = {
  url: 'https://paulovillarroel.github.io',
  repo: 'https://github.com/paulovillarroel/paulovillarroel.github.io',
  /** Used in the copyright line and in `dateModified` structured data. */
  updated: '2026-09-06',
} as const;

export const PERSON = {
  name: 'Paulo Villarroel Tapia',
  shortName: 'Paulo Villarroel',
  jobTitle: {
    es: 'Ingeniero de datos y arquitecto de analítica avanzada e inteligencia artificial en salud pública',
    en: 'Data engineer and architect of advanced analytics and artificial intelligence in public health',
  } satisfies I18n<string>,
  headline: {
    es: 'Ingeniería de datos, analítica avanzada e inteligencia artificial para la salud pública.',
    en: 'Data engineering, advanced analytics and artificial intelligence for public health.',
  } satisfies I18n<string>,
  /** One-sentence summary reused in meta descriptions and JSON-LD. */
  summary: {
    es: 'Resuelvo problemas complejos de sistemas públicos de salud con ingeniería de datos, analítica avanzada e inteligencia artificial: los que el análisis convencional no alcanza a tratar por volumen, por la ambigüedad del registro clínico o porque la decisión que hay detrás no tolera un error automático. Veinte años en el sistema público chileno, desde la práctica clínica hasta modelos que hoy operan a escala nacional sobre tecnología abierta.',
    en: 'I solve complex problems in public health systems with data engineering, advanced analytics and artificial intelligence: the ones conventional analysis cannot reach because of volume, because the clinical record is ambiguous, or because the decision behind them tolerates no automatic error. Twenty years in the Chilean public system, from clinical practice to models now running at national scale on open technology.',
  } satisfies I18n<string>,
  location: {
    es: 'Santiago, Chile',
    en: 'Santiago, Chile',
  } satisfies I18n<string>,
  nationality: 'CL',
} as const;

export type SocialLink = {
  key: string;
  label: string;
  href: string;
  handle: string;
  /** Included in JSON-LD `sameAs`. */
  sameAs: boolean;
};

export const SOCIALS: SocialLink[] = [
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/paulovillarroel/',
    handle: '/in/paulovillarroel',
    sameAs: true,
  },
  {
    key: 'github',
    label: 'GitHub',
    href: 'https://github.com/paulovillarroel',
    handle: '@paulovillarroel',
    sameAs: true,
  },
  {
    key: 'hazlacondatos',
    label: 'Hazla con Datos',
    href: 'https://hazlacondatos.com/',
    handle: 'hazlacondatos.com',
    sameAs: true,
  },
  {
    key: 'opensaludlab',
    label: 'OpenSalud LAB',
    href: 'https://opensaludlab.org/',
    handle: 'opensaludlab.org',
    sameAs: true,
  },
];

/** Affiliations surfaced in JSON-LD and in the contact page. */
export const AFFILIATIONS = {
  employer: {
    name: {
      es: 'Ministerio de Salud de Chile — Oficina de Inteligencia y Gestión Estratégica en Salud',
      en: 'Chilean Ministry of Health — Office of Intelligence and Strategic Health Management',
    } satisfies I18n<string>,
    url: 'https://www.minsal.cl/',
  },
  alumniOf: {
    name: {
      es: 'Universidad de Chile',
      en: 'University of Chile',
    } satisfies I18n<string>,
    url: 'https://www.uchile.cl/',
  },
} as const;
