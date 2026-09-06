import { ROUTES, type Locale } from '@/i18n/config';
import { PERSON, SITE, SOCIALS, AFFILIATIONS } from '@/data/site';
import { CAREER_NARRATIVE, CONCLUSIONS, HERO_STATS, PILLARS } from '@/data/profile';
import { PROJECTS, STRATEGIC_PROGRAMME } from '@/data/projects';
import { EDUCATION, RECOGNITION, TIMELINE } from '@/data/career';
import { APPEARANCES, CURRICULUM, VENTURES } from '@/data/teaching';
import { COHORT_ARTEFACTS, ENGINEERING_CASES, POSITIONS } from '@/data/notes';

const abs = (site: URL | undefined, path: string) => new URL(path, site ?? new URL(SITE.url)).href;

/**
 * Page-level descriptions, kept here so both the llms.txt index and any future
 * navigation summary read from one place.
 */
const PAGE_NOTES: Record<keyof typeof ROUTES, Record<Locale, string>> = {
  home: {
    es: 'Resumen del perfil, cifras principales, las cuatro áreas de trabajo y el programa ministerial vigente.',
    en: 'Profile summary, headline figures, the four areas of work and the current ministry programme.',
  },
  career: {
    es: 'Narrativa de carrera 2004–2026, cronología de hitos verificables, formación académica y reconocimientos.',
    en: 'Career narrative 2004–2026, chronology of verifiable milestones, academic background and recognition.',
  },
  work: {
    es: 'Cinco proyectos técnicos en detalle: contexto, enfoque metodológico, resultados y stack de cada uno.',
    en: 'Five technical projects in detail: context, methodological approach, outcomes and stack for each.',
  },
  notes: {
    es: 'Casos de ingeniería resueltos con su razonamiento completo, y posiciones técnicas sobre sesgo de supervivencia en listas de espera, interoperabilidad semántica y gobernanza de datos sensibles de salud.',
    en: 'Solved engineering cases with the full reasoning, plus technical positions on survivorship bias in waiting lists, semantic interoperability and governance of sensitive health data.',
  },
  teaching: {
    es: 'Ponencias, docencia de postgrado, iniciativas abiertas y el temario técnico que enseño.',
    en: 'Talks, postgraduate teaching, open initiatives and the technical syllabus I teach.',
  },
  contact: {
    es: 'Canales de contacto, temas de colaboración y afiliaciones institucionales.',
    en: 'Contact channels, collaboration topics and institutional affiliations.',
  },
};

const HEADINGS = {
  pages: { es: 'Páginas', en: 'Pages' },
  pagesEn: { es: 'Páginas en inglés', en: 'Pages in Spanish' },
  profile: { es: 'Perfil', en: 'Profile' },
  figures: { es: 'Cifras principales', en: 'Headline figures' },
  areas: { es: 'Áreas de trabajo', en: 'Areas of work' },
  projects: { es: 'Proyectos', en: 'Projects' },
  programme: { es: 'Programa estratégico 2026', en: 'Strategic programme 2026' },
  timeline: { es: 'Cronología 2004–2026', en: 'Chronology 2004–2026' },
  education: { es: 'Formación', en: 'Education' },
  recognition: { es: 'Reconocimientos', en: 'Recognition' },
  cases: { es: 'Casos de ingeniería resueltos', en: 'Solved engineering cases' },
  positions: { es: 'Doctrina técnica', en: 'Technical positions' },
  artefacts: { es: 'Qué construyen las cohortes', en: 'What the cohorts build' },
  ventures: { es: 'Iniciativas de formación', en: 'Training initiatives' },
  curriculum: { es: 'Ruta formativa de Hazla con Datos', en: 'Hazla con Datos learning path' },
  appearances: { es: 'Ponencias y docencia', en: 'Talks and teaching' },
  conclusions: { es: 'Conclusiones', en: 'Conclusions' },
  links: { es: 'Enlaces', en: 'Links' },
  context: { es: 'Contexto', en: 'Context' },
  approach: { es: 'Enfoque', en: 'Approach' },
  outcome: { es: 'Resultados', en: 'Outcomes' },
  stack: { es: 'Stack', en: 'Stack' },
  role: { es: 'Rol', en: 'Role' },
  full: { es: 'Contenido completo', en: 'Full content' },
} as const satisfies Record<string, Record<Locale, string>>;

/**
 * The llms.txt index: a short, machine-friendly map of the site following the
 * llmstxt.org convention (H1, blockquote summary, then link sections).
 * It is bilingual because the site is.
 */
export function buildLlmsIndex(site: URL | undefined): string {
  const routeKeys = Object.keys(ROUTES) as (keyof typeof ROUTES)[];

  const lines: string[] = [
    `# ${PERSON.name}`,
    '',
    `> ${PERSON.summary.es}`,
    '',
    `${PERSON.jobTitle.es} en el ${AFFILIATIONS.employer.name.es}. ${PERSON.location.es}. Sitio bilingüe: el español es el idioma canónico y el inglés vive bajo /en/.`,
    '',
    `> ${PERSON.summary.en}`,
    '',
    `${PERSON.jobTitle.en} at the ${AFFILIATIONS.employer.name.en}. ${PERSON.location.en}. Bilingual site: Spanish is canonical, English lives under /en/.`,
    '',
    `## ${HEADINGS.pages.es} (ES)`,
    '',
  ];

  for (const key of routeKeys) {
    lines.push(`- [${titleFor(key, 'es')}](${abs(site, ROUTES[key].es)}): ${PAGE_NOTES[key].es}`);
  }

  lines.push('', `## ${HEADINGS.pages.en} (EN)`, '');
  for (const key of routeKeys) {
    lines.push(`- [${titleFor(key, 'en')}](${abs(site, ROUTES[key].en)}): ${PAGE_NOTES[key].en}`);
  }

  lines.push('', `## ${HEADINGS.full.es} / ${HEADINGS.full.en}`, '');
  lines.push(
    `- [llms-full.txt (ES)](${abs(site, '/llms-full.txt')}): Todo el contenido del sitio en español, en un solo archivo de texto plano.`,
  );
  lines.push(
    `- [llms-full.txt (EN)](${abs(site, '/en/llms-full.txt')}): The entire site content in English, as a single plain-text file.`,
  );

  lines.push('', `## ${HEADINGS.links.es} / ${HEADINGS.links.en}`, '');
  for (const social of SOCIALS) {
    lines.push(`- [${social.label}](${social.href}): ${social.handle}`);
  }
  lines.push(`- [sitemap](${abs(site, '/sitemap-index.xml')}): XML sitemap con alternancias hreflang.`);

  lines.push('', `Última actualización / last updated: ${SITE.updated}`, '');
  return lines.join('\n');
}

function titleFor(key: keyof typeof ROUTES, lang: Locale): string {
  const titles: Record<keyof typeof ROUTES, Record<Locale, string>> = {
    home: { es: 'Inicio', en: 'Home' },
    career: { es: 'Trayectoria', en: 'Career' },
    work: { es: 'Proyectos', en: 'Projects' },
    notes: { es: 'Notas técnicas', en: 'Technical notes' },
    teaching: { es: 'Docencia y transferencia técnica', en: 'Teaching and technical transfer' },
    contact: { es: 'Contacto', en: 'Contact' },
  };
  return titles[key][lang];
}

/** The complete site content for one language, as plain text. */
export function buildLlmsFull(lang: Locale, site: URL | undefined): string {
  const h = (key: keyof typeof HEADINGS) => HEADINGS[key][lang];
  const out: string[] = [];

  out.push(`# ${PERSON.name}`, '');
  out.push(`> ${PERSON.summary[lang]}`, '');
  out.push(`${PERSON.jobTitle[lang]} · ${AFFILIATIONS.employer.name[lang]} · ${PERSON.location[lang]}`);
  out.push(`${lang === 'es' ? 'URL canónica' : 'Canonical URL'}: ${abs(site, ROUTES.home[lang])}`);
  out.push(`${lang === 'es' ? 'Última actualización' : 'Last updated'}: ${SITE.updated}`, '');

  out.push(`## ${h('figures')}`, '');
  for (const stat of HERO_STATS) {
    out.push(`- ${stat.value[lang]} — ${stat.label[lang]}. ${stat.note[lang]}`);
  }
  out.push('');

  out.push(`## ${h('profile')}`, '');
  for (const paragraph of CAREER_NARRATIVE[lang]) out.push(paragraph, '');

  out.push(`## ${h('areas')}`, '');
  for (const pillar of PILLARS) {
    out.push(`### ${pillar.title[lang]}`, '', pillar.body[lang], '', `${lang === 'es' ? 'Claves' : 'Keywords'}: ${pillar.keywords.join(', ')}`, '');
  }

  out.push(`## ${h('projects')}`, '');
  for (const project of PROJECTS) {
    out.push(`### ${project.title[lang]}`, '');
    out.push(`${project.period} · ${project.org[lang]}`);
    out.push(`${h('role')}: ${project.role[lang]}`, '');
    out.push(project.tagline[lang], '');
    out.push(`${h('context')}: ${project.context[lang]}`, '');
    out.push(`${h('approach')}:`);
    for (const item of project.approach[lang]) out.push(`- ${item}`);
    out.push('');
    out.push(`${h('outcome')}:`);
    for (const item of project.outcome[lang]) out.push(`- ${item}`);
    out.push('');
    if (project.metrics) {
      out.push(`${lang === 'es' ? 'Evaluación' : 'Evaluation'}:`);
      for (const metric of project.metrics) {
        out.push(`- ${metric.param[lang]}: ${metric.value[lang]}. ${metric.implication[lang]}`);
      }
      out.push('');
    }
    out.push(`${h('stack')}: ${project.stack.join(', ')}`, '');
  }

  out.push(`## ${h('programme')}`, '');
  out.push(`${STRATEGIC_PROGRAMME.title[lang]} — ${STRATEGIC_PROGRAMME.since[lang]}`, '');
  out.push(STRATEGIC_PROGRAMME.intro[lang], '');
  STRATEGIC_PROGRAMME.projects.forEach((project, i) => {
    out.push(`${i + 1}. ${project.title[lang]}: ${project.body[lang]}`);
  });
  out.push('');

  out.push(`## ${h('cases')}`, '');
  for (const item of ENGINEERING_CASES) {
    out.push(`### ${item.title[lang]}`, '');
    out.push(`${lang === 'es' ? 'Problema' : 'Problem'}: ${item.problem[lang]}`, '');
    out.push(`${lang === 'es' ? 'Decisión' : 'Decision'}: ${item.decision[lang]}`, '');
    out.push(`${lang === 'es' ? 'Resultado' : 'Result'}: ${item.result[lang]}`, '');
    out.push(`${h('stack')}: ${item.stack.join(', ')}`, '');
  }

  out.push(`## ${h('positions')}`, '');
  for (const item of POSITIONS) {
    out.push(`### ${item.title[lang]}`, '');
    out.push(item.claim[lang], '');
    for (const paragraph of item.body[lang]) out.push(paragraph, '');
  }

  out.push(`## ${h('timeline')}`, '');
  for (const entry of TIMELINE) {
    out.push(`### ${entry.period} — ${entry.title[lang]}`, '');
    out.push(`${lang === 'es' ? 'Ámbito' : 'Field'}: ${entry.field[lang]}`);
    out.push(`${lang === 'es' ? 'Institución' : 'Institution'}: ${entry.org[lang]}`, '');
    out.push(entry.body[lang], '');
  }

  out.push(`## ${h('education')}`, '');
  for (const entry of EDUCATION) {
    out.push(`- ${entry.programme[lang]} — ${entry.institution[lang]} (${entry.area[lang]}). ${entry.contribution[lang]}`);
  }
  out.push('');

  out.push(`## ${h('recognition')}`, '');
  for (const item of RECOGNITION) {
    out.push(`- ${item.year}: ${item.title[lang]} — ${item.org[lang]}`);
  }
  out.push('');

  out.push(`## ${h('ventures')}`, '');
  for (const venture of VENTURES) {
    out.push(`### ${venture.name} (${venture.since})${venture.url ? ` — ${venture.url}` : ''}`, '');
    out.push(venture.tagline[lang], '');
    for (const paragraph of venture.body[lang]) out.push(paragraph, '');
    for (const item of venture.bullets[lang]) out.push(`- ${item}`);
    if (venture.bullets[lang].length > 0) out.push('');
  }

  out.push(`## ${h('curriculum')}`, '');
  CURRICULUM.forEach((phase, i) => {
    out.push(`${i + 1}. ${phase.phase[lang]} — ${phase.contents[lang]}`);
    out.push(`   ${lang === 'es' ? 'Entorno' : 'Tooling'}: ${phase.tooling}`);
    out.push(`   ${lang === 'es' ? 'Competencia' : 'Capability'}: ${phase.outcome[lang]}`);
  });
  out.push('');

  out.push(`## ${h('artefacts')}`, '');
  for (const item of COHORT_ARTEFACTS) out.push(`- ${item[lang]}`);
  out.push('');

  out.push(`## ${h('appearances')}`, '');
  for (const item of APPEARANCES) {
    out.push(`- ${item.year} · ${item.venue[lang]}: ${item.title[lang]}${item.url ? ` (${item.url})` : ''}`);
  }
  out.push('');

  out.push(`## ${h('conclusions')}`, '');
  for (const item of CONCLUSIONS) {
    out.push(`### ${item.title[lang]}`, '', item.body[lang], '');
  }

  out.push(`## ${h('links')}`, '');
  for (const social of SOCIALS) out.push(`- ${social.label}: ${social.href}`);
  out.push('');

  return out.join('\n');
}
