import type { I18n } from '@/i18n/config';

export type Venture = {
  id: string;
  name: string;
  since: string;
  url?: string;
  /** Public repository holding the programme material. */
  repo?: string;
  tagline: I18n<string>;
  body: I18n<string[]>;
  bullets: I18n<string[]>;
};

export const VENTURES: Venture[] = [
  {
    id: 'unab',
    name: 'Diplomado en Salud Digital, UNAB',
    since: '2022',
    tagline: {
      es: 'Docencia de postgrado en dirección y gestión de estrategias en salud digital.',
      en: 'Postgraduate teaching in digital health strategy leadership and management.',
    },
    body: {
      es: [
        'Docente del Diplomado en Dirección y Gestión de Estrategias en Salud Digital de la Universidad Andrés Bello, dirigido a profesionales que van a conducir procesos de transformación digital dentro de instituciones de salud.',
      ],
      en: [
        'Faculty on the Postgraduate Diploma in Digital Health Strategy Leadership and Management at Universidad Andrés Bello, aimed at professionals who will lead digital transformation inside health institutions.',
      ],
    },
    bullets: { es: [], en: [] },
  },
  {
    id: 'hazla-con-datos',
    name: 'Hazla con Datos',
    since: '2024',
    url: 'https://hazlacondatos.com/',
    tagline: {
      es: 'Material de análisis de datos construido sobre registros clínicos en lugar de casos de mercadotecnia.',
      en: 'Data analysis material built on clinical records rather than marketing case studies.',
    },
    body: {
      es: [
        'La analítica se enseña casi siempre con ejemplos de mercadotecnia, logística comercial o finanzas. Para el personal sanitario eso introduce una fricción metodológica concreta: el procedimiento puede ser correcto, pero la estructura del dato no se parece a la que manipulan en su trabajo.',
        'El material de Hazla con Datos se construyó sobre registros clínicos, variables epidemiológicas y conjuntos de datos sanitarios abiertos, de modo que los ejercicios reproduzcan los problemas reales de codificación, calidad y volumen del sector.',
      ],
      en: [
        'Analytics is almost always taught with examples from marketing, commercial logistics or finance. For health staff that introduces a concrete methodological friction: the procedure may be right, but the data structure looks nothing like what they handle at work.',
        'The Hazla con Datos material was built on clinical records, epidemiological variables and open health datasets, so the exercises reproduce the sector’s real coding, quality and volume problems.',
      ],
    },
    bullets: { es: [], en: [] },
  },
  {
    id: 'opensalud-lab',
    name: 'OpenSalud LAB',
    since: '2018',
    url: 'https://opensaludlab.org/',
    repo: 'https://github.com/paulovillarroel/ciencia_datos',
    tagline: {
      es: 'Bootcamp abierto de ciencia de datos en salud, con todo el material en un repositorio público.',
      en: 'Open health data science bootcamp, with all its material in a public repository.',
    },
    body: {
      es: [
        'OpenSalud LAB nació en 2018 como laboratorio ciudadano de innovación abierta en servicios públicos de salud. Su desarrollo principal fue el bootcamp de Ciencia de Datos en Salud, alojado íntegramente en un repositorio público de GitHub.',
        'El programa reunió más de 100 horas de formación audiovisual y más de 200 horas de recursos prácticos, con módulos de programación en R, análisis exploratorio, modelamiento estadístico, gestión de procesos y reproducibilidad técnica, desarrollados junto a R-Ladies Concepción y Data UC de la Pontificia Universidad Católica de Chile.',
      ],
      en: [
        'OpenSalud LAB was created in 2018 as a citizen laboratory for open innovation in public health services. Its main output was the Health Data Science bootcamp, hosted entirely in a public GitHub repository.',
        'The programme gathered over 100 hours of video training and more than 200 hours of practical resources, covering R programming, exploratory analysis, statistical modelling, process management and technical reproducibility, built with R-Ladies Concepción and Data UC at the Pontifical Catholic University of Chile.',
      ],
    },
    bullets: { es: [], en: [] },
  },
];

export type CurriculumPhase = {
  phase: I18n<string>;
  contents: I18n<string>;
  tooling: string;
  outcome: I18n<string>;
};

/** The Hazla con Datos learning path, from zero to clinical NLP. */
export const CURRICULUM: CurriculumPhase[] = [
  {
    phase: { es: 'Nivelación inicial', en: 'Foundations' },
    contents: {
      es: 'Mentalidad de código, orden de rutas de proyecto, lógica algorítmica y pseudocódigo.',
      en: 'Coding mindset, project path hygiene, algorithmic logic and pseudocode.',
    },
    tooling: 'Markdown · Obsidian · WSL · Bash',
    outcome: {
      es: 'Estructuración lógica del pensamiento analítico, sin barreras operativas de entrada.',
      en: 'Logical structuring of analytical thinking, without operational barriers to entry.',
    },
  },
  {
    phase: { es: 'Manipulación de datos', en: 'Data wrangling' },
    contents: {
      es: 'Expresiones regulares sanitarias, procesamiento de planillas clínicas y limpieza.',
      en: 'Health-specific regular expressions, clinical spreadsheet processing and cleaning.',
    },
    tooling: 'R (tidyverse) · Python · Regex',
    outcome: {
      es: 'Normalización de diagnósticos CIE-10, series de presión arterial y tablas administrativas.',
      en: 'Normalising ICD-10 diagnoses, blood-pressure series and administrative tables.',
    },
  },
  {
    phase: { es: 'Procesamiento masivo', en: 'Large-scale processing' },
    contents: {
      es: 'Motores OLAP embebidos, esquemas de transformación de datos y consultas SQL.',
      en: 'Embedded OLAP engines, data transformation schemes and SQL querying.',
    },
    tooling: 'DuckDB · SQL · Apache Parquet · dbt',
    outcome: {
      es: 'Capacidad de procesar tablas de millones de atenciones en computadores personales.',
      en: 'Ability to process tables of millions of care episodes on personal computers.',
    },
  },
  {
    phase: { es: 'Modelamiento estadístico', en: 'Statistical modelling' },
    contents: {
      es: 'Bioestadística, inferencia, regresiones y análisis de supervivencia con machine learning.',
      en: 'Biostatistics, inference, regression and survival analysis with machine learning.',
    },
    tooling: 'R (survival, tidymodels) · Python (scikit-learn)',
    outcome: {
      es: 'Estimación de curvas de sobrevida, riesgos proporcionales e interpretación de incertidumbre.',
      en: 'Estimating survival curves, proportional hazards and interpreting uncertainty.',
    },
  },
  {
    phase: { es: 'Arquitectura y NLP', en: 'Architecture and NLP' },
    contents: {
      es: 'Procesamiento de lenguaje natural y esquemas de pseudoanonimización.',
      en: 'Natural language processing and pseudonymisation schemes.',
    },
    tooling: 'Transformers · Docker',
    outcome: {
      es: 'Extracción de entidades clínicas en epicrisis y resguardo de la confidencialidad del paciente.',
      en: 'Extracting clinical entities from discharge summaries while protecting patient confidentiality.',
    },
  },
];

export type AppearanceKind = 'conference' | 'media' | 'government';

export type Appearance = {
  year: string;
  kind: AppearanceKind;
  title: I18n<string>;
  venue: I18n<string>;
  url?: string;
};

export const APPEARANCE_KINDS: Record<AppearanceKind, I18n<string>> = {
  conference: { es: 'Conferencia', en: 'Conference' },
  government: { es: 'Sector público', en: 'Public sector' },
  media: { es: 'Medios', en: 'Media' },
};

export const APPEARANCES: Appearance[] = [
  {
    year: '2026',
    kind: 'conference',
    title: {
      es: 'Instructor oficial de los talleres sobre Positron y el entorno moderno de ciencia de datos',
      en: 'Official instructor for the Positron and modern data-science tooling workshops',
    },
    venue: { es: 'LatinR 2026', en: 'LatinR 2026' },
    url: 'https://latinr.org/',
  },
  {
    year: '2025',
    kind: 'conference',
    title: {
      es: 'Ponencia y participación en los paneles técnicos',
      en: 'Talk and participation in the technical panels',
    },
    venue: { es: 'LatinR 2025', en: 'LatinR 2025' },
    url: 'https://2025.latinr.org/',
  },
  {
    year: '2024',
    kind: 'conference',
    title: {
      es: 'Bases de datos in-process (DuckDB) para el manejo de macrodatos en listas de espera quirúrgicas',
      en: 'In-process databases (DuckDB) for handling big data in surgical waiting lists',
    },
    venue: { es: 'LatinR 2024', en: 'LatinR 2024' },
    url: 'https://github.com/LatinR/presentaciones-latinr2024',
  },
  {
    year: '2022',
    kind: 'conference',
    title: {
      es: 'Trabajo técnico sobre programación aplicada a la salud pública',
      en: 'Technical work on programming applied to public health',
    },
    venue: { es: 'useR! 2022', en: 'useR! 2022' },
  },
  {
    year: '2021',
    kind: 'conference',
    title: {
      es: 'Por qué los funcionarios públicos de salud deberían programar en R',
      en: 'Why public health officials should program in R',
    },
    venue: { es: 'LatinR 2021', en: 'LatinR 2021' },
    url: 'https://github.com/LatinR/presentaciones-LatinR2021',
  },
  {
    year: '2021',
    kind: 'government',
    title: {
      es: 'Expositor en el Congreso Internacional de Telemedicina',
      en: 'Speaker at the International Telemedicine Congress',
    },
    venue: { es: 'Ministerio de Salud del Perú', en: 'Ministry of Health of Peru' },
  },
  {
    year: '2021',
    kind: 'government',
    title: {
      es: 'Relator del taller Ciencia de Datos en Salud y tallerista en la Red de Innovadores Públicos',
      en: 'Lead facilitator of the Health Data Science workshop and workshop leader in the Public Innovators Network',
    },
    venue: { es: 'Laboratorio de Gobierno de Chile', en: 'Laboratorio de Gobierno, Chile' },
  },
  {
    year: '2019–2026',
    kind: 'media',
    title: {
      es: 'Podcast Salud 4.0 · Acceso Salud, Radio Universidad de Chile · Dbox Radio',
      en: 'Salud 4.0 podcast · Acceso Salud, Radio Universidad de Chile · Dbox Radio',
    },
    venue: {
      es: 'Innovación sanitaria, comunidades de práctica y ciencia de datos aplicada',
      en: 'Health innovation, communities of practice and applied data science',
    },
  },
  {
    year: '2019–2020',
    kind: 'media',
    title: {
      es: 'Cobertura del desafío de innovación abierta SmartSalud',
      en: 'Coverage of the SmartSalud open innovation challenge',
    },
    venue: { es: 'FayerWayer · INACAP · InterSystems', en: 'FayerWayer · INACAP · InterSystems' },
  },
];
