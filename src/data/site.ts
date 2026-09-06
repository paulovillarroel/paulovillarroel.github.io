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
    es: 'Arquitecto de soluciones de datos en salud pública',
    en: 'Data solutions architect in public health',
  } satisfies I18n<string>,
  headline: {
    es: 'Arquitecto de soluciones de datos para sistemas públicos de salud.',
    en: 'Data solutions architect for public health systems.',
  } satisfies I18n<string>,
  /** One-sentence summary reused in meta descriptions and JSON-LD. */
  summary: {
    es: 'Diseño y opero los sistemas analíticos que buscan a los pacientes que el sistema pierde: listas de espera, sospecha oncológica encubierta, identidades fragmentadas. Todo sobre tecnología abierta y hardware convencional, para que sea replicable en cualquier sistema de salud con infraestructura restringida.',
    en: 'I design and run the analytical systems that look for the patients a health system loses: waiting lists, hidden cancer suspicion, fragmented identities. All of it on open technology and ordinary hardware, so it can be replicated in any health system working under infrastructure constraints.',
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
