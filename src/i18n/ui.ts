import type { I18n } from './config';

/** Interface chrome only. Page copy lives in `src/data/*`. */
export const ui = {
  skipToContent: { es: 'Saltar al contenido', en: 'Skip to content' },
  mainNav: { es: 'Navegación principal', en: 'Main navigation' },
  menu: { es: 'Menú', en: 'Menu' },
  close: { es: 'Cerrar', en: 'Close' },
  langSwitch: { es: 'Cambiar idioma', en: 'Switch language' },
  langLabel: { es: 'ES', en: 'EN' },
  otherLangName: { es: 'English', en: 'Español' },

  nav: {
    home: { es: 'Inicio', en: 'Home' },
    career: { es: 'Trayectoria', en: 'Career' },
    work: { es: 'Proyectos', en: 'Projects' },
    notes: { es: 'Notas técnicas', en: 'Notes' },
    teaching: { es: 'Docencia', en: 'Teaching' },
    contact: { es: 'Contacto', en: 'Contact' },
  } satisfies Record<string, I18n<string>>,

  footer: {
    elsewhere: { es: 'En otros lugares', en: 'Elsewhere' },
    navigate: { es: 'Navegar', en: 'Navigate' },
    forAgents: { es: 'Para agentes LLM', en: 'For LLM agents' },
    agentsNote: {
      es: 'Este sitio publica un índice legible por máquinas en /llms.txt y el texto completo en /llms-full.txt.',
      en: 'This site publishes a machine-readable index at /llms.txt and the full text at /llms-full.txt.',
    },
    builtWith: { es: 'Construido con Astro. Código abierto en GitHub.', en: 'Built with Astro. Open source on GitHub.' },
    rights: { es: 'Todos los derechos reservados.', en: 'All rights reserved.' },
  },

  labels: {
    current: { es: 'Actual', en: 'Current' },
    present: { es: 'Presente', en: 'Present' },
    readMore: { es: 'Ver más', en: 'Read more' },
    seeCareer: { es: 'Ver trayectoria completa', en: 'See full career' },
    seeWork: { es: 'Ver todos los proyectos', en: 'See all projects' },
    seeTeaching: { es: 'Ver docencia y comunidad', en: 'See teaching and community' },
    seeNotes: { es: 'Leer las notas técnicas', en: 'Read the technical notes' },
    stack: { es: 'Stack', en: 'Stack' },
    impact: { es: 'Resultado', en: 'Outcome' },
    role: { es: 'Rol', en: 'Role' },
    period: { es: 'Periodo', en: 'Period' },
    context: { es: 'Contexto', en: 'Context' },
    approach: { es: 'Enfoque', en: 'Approach' },
    externalLink: { es: 'Abre en una pestaña nueva', en: 'Opens in a new tab' },
    backHome: { es: 'Volver al inicio', en: 'Back home' },
  },

  notFound: {
    code: { es: '404', en: '404' },
    title: { es: 'Esta página no existe', en: 'This page does not exist' },
    body: {
      es: 'El enlace puede estar roto o la página pudo haber cambiado de dirección.',
      en: 'The link may be broken, or the page may have moved.',
    },
  },
} as const;
