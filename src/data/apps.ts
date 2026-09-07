import type { I18n } from '@/i18n/config';

export type App = {
  id: string;
  name: string;
  /** What it does, in one factual sentence. No adjectives. */
  what: I18n<string>;
  stack: string[];
  status: I18n<string>;
  /** Live deployment, when there is one. */
  url?: string;
  /** Only set when the repository is public. */
  repo?: string;
};

/**
 * Software built and maintained personally. Forks and course material are
 * excluded: everything here is original work with a running deployment.
 */
export const APPS: App[] = [
  {
    id: 'atenciones-urgencia',
    name: 'Atenciones de urgencia respiratorias',
    what: {
      es: 'Visualizador de las atenciones de urgencia respiratorias en Chile por semana epidemiológica, sobre los datos abiertos del DEIS, con actualización diaria automática.',
      en: 'Viewer for respiratory emergency care in Chile by epidemiological week, built on open data from the Ministry’s statistics department, refreshed automatically every day.',
    },
    stack: ['Next.js', 'Datos abiertos DEIS', 'GitHub Actions', 'GitHub Pages'],
    status: { es: 'En producción · repositorio público', en: 'In production · public repository' },
    url: 'https://paulovillarroel.github.io/atenciones-urgencia/',
    repo: 'https://github.com/paulovillarroel/atenciones-urgencia',
  },
  {
    id: 'levantamiento-gobierno-datos',
    name: 'Autoevaluación de gobernanza de datos',
    what: {
      es: 'Instrumento de autodiagnóstico de madurez en protección y gobernanza de datos para instituciones públicas, alineado a la Ley 21.719 y al Modelo de Gestión de Datos del Estado. Corre íntegramente en el navegador: ninguna respuesta sale del equipo de quien lo aplica.',
      en: 'Self-assessment instrument for data protection and governance maturity in public institutions, aligned to Chile’s data protection law and the State data management model. It runs entirely in the browser: no answer ever leaves the assessor’s machine.',
    },
    stack: ['TypeScript', 'Ley 21.719', 'MGDE', 'Cliente puro'],
    status: { es: 'En producción · repositorio público', en: 'In production · public repository' },
    url: 'https://paulovillarroel.github.io/levantamiento-gobierno-datos/',
    repo: 'https://github.com/paulovillarroel/levantamiento-gobierno-datos',
  },
  {
    id: 'anonimizacion-datos',
    name: 'anonimizacion-datos',
    what: {
      es: 'Librería en R que implementa k-anonimidad y l-diversidad sobre la norma técnica ministerial, con degradación iterativa de niveles y verificación de la salida antes de exportar.',
      en: 'An R library implementing k-anonymity and l-diversity over the ministry technical standard, with iterative level degradation and output verification before export.',
    },
    stack: ['R', 'k-anonimidad', 'l-diversidad'],
    status: { es: 'Repositorio público', en: 'Public repository' },
    repo: 'https://github.com/paulovillarroel/anonimizacion-datos',
  },
  {
    id: 'flowy',
    name: 'Flowy',
    what: {
      es: 'Tablero Kanban para equipos que toman decisiones en reuniones: registra los acuerdos con responsable asignado, no solo las tareas. Incluye recurrencias, dependencias bloqueantes, resumen ejecutivo semanal y panel de administración.',
      en: 'A Kanban board for teams that make decisions in meetings: it records the agreements and who committed to them, not just the tasks. Includes recurrences, blocking dependencies, a weekly executive summary and an admin panel.',
    },
    stack: ['Next.js', 'PostgreSQL', 'API REST', 'Servidor MCP', 'Vercel'],
    status: { es: 'En producción · repositorio privado', en: 'In production · private repository' },
    url: 'https://flowy-team.app',
  },
  {
    id: 'hazlacondatos',
    name: 'hazlacondatos.com',
    what: {
      es: 'Plataforma de la escuela: catálogo de cursos, material de las cohortes y los tutoriales interactivos, publicados como sitio estático.',
      en: 'The school’s platform: course catalogue, cohort material and interactive tutorials, published as a static site.',
    },
    stack: ['Astro', 'MDX'],
    status: { es: 'En producción', en: 'In production' },
    url: 'https://hazlacondatos.com/',
  },
  {
    id: 'cosmic-locket',
    name: 'Cosmic Locket',
    what: {
      es: 'Gestor personal de fuentes: guarda enlaces, publicaciones y documentos con búsqueda de texto completo, captura desde el navegador y desde el móvil. Herramienta propia para el trabajo docente.',
      en: 'A personal source manager: saves links, posts and documents with full-text search, captured from the browser or from a phone. A tool built for my own teaching work.',
    },
    stack: ['Next.js', 'Supabase', 'PWA'],
    status: { es: 'En desarrollo · uso personal', en: 'In development · personal use' },
    url: 'https://cosmic-locket.vercel.app',
  },
];
