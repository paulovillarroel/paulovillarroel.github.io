import type { I18n } from '@/i18n/config';

export type ProductionSystem = {
  name: I18n<string>;
  what: I18n<string>;
  cadence: I18n<string>;
  org: I18n<string>;
  /** The methods the system is built on, shown as a compact technical line. */
  methods: string[];
};

/**
 * What is running right now. This replaced a row of headline figures: the
 * numbers came from different projects and years, so each needed a footnote to
 * mean anything, which is the sign that they were decorating rather than
 * informing.
 */
export const PRODUCTION_SYSTEMS: ProductionSystem[] = [
  {
    name: {
      es: 'Detección de sospecha oncológica en listas quirúrgicas',
      en: 'Cancer suspicion detection in surgical waiting lists',
    },
    what: {
      es: 'Clasifica ~475.000 diagnósticos por corte y deriva los casos sospechosos e indeterminados a auditoría clínica médica. Un modelo de lenguaje afinado añade el órgano afectado en código CIE-O3.',
      en: 'Classifies ~475,000 diagnoses per cut and routes suspicious and indeterminate cases to medical clinical audit. A fine-tuned language model adds the affected organ in ICD-O3 code.',
    },
    cadence: { es: 'Corte mensual y canal semanal', en: 'Monthly cut and weekly channel' },
    org: { es: 'MINSAL', en: 'Ministry of Health' },
    methods: ['NLP', 'Embeddings', 'XGBoost', 'Llama 3.1 · QLoRA', 'Human-in-the-loop'],
  },
  {
    name: {
      es: 'Detección de anomalías en el Registro Nacional de Listas de Espera',
      en: 'Anomaly detection in the National Waiting List Registry',
    },
    what: {
      es: 'Vigila volumen, permanencia, variabilidad entre servicios y justificaciones de egreso, y notifica a los equipos de gestión local.',
      en: 'Monitors volume, time on list, variance between services and discharge justifications, then notifies local management teams.',
    },
    cadence: { es: 'Mensual, desde 2023', en: 'Monthly, since 2023' },
    org: { es: 'MINSAL', en: 'Ministry of Health' },
    methods: ['Detección de anomalías', 'Aprendizaje no supervisado'],
  },
  {
    name: {
      es: 'Deduplicación probabilística de identidades',
      en: 'Probabilistic identity deduplication',
    },
    what: {
      es: 'Resuelve la misma persona registrada con distintos identificadores en 2,1 millones de registros, corrigiendo el sobredimensionamiento de la demanda.',
      en: 'Resolves the same person registered under different identifiers across 2.1 million records, correcting overstated demand.',
    },
    cadence: { es: 'En operación', en: 'In operation' },
    org: { es: 'MINSAL', en: 'Ministry of Health' },
    methods: ['Record linkage', 'Fellegi-Sunter', 'Splink', 'DuckDB'],
  },
];

/** The four things the site is actually about, used on the home page. */
export type Pillar = {
  id: string;
  title: I18n<string>;
  body: I18n<string>;
  keywords: string[];
};

export const PILLARS: Pillar[] = [
  {
    id: 'engineering-without-cluster',
    title: {
      es: 'Ingeniería de datos sin clúster',
      en: 'Data engineering without a cluster',
    },
    body: {
      es: 'Decenas de millones de registros hospitalarios procesados en computadores convencionales, con motores OLAP embebidos y formatos columnares abiertos. Sin clústeres, sin licencias privativas.',
      en: 'Tens of millions of hospital records processed on ordinary desktop machines, with embedded OLAP engines and open columnar formats. No clusters, no proprietary licences.',
    },
    keywords: ['DuckDB', 'Apache Parquet', 'R', 'Python'],
  },
  {
    id: 'clinical-analytics',
    title: {
      es: 'Analítica avanzada nacida en la práctica clínica',
      en: 'Advanced analytics born in clinical practice',
    },
    body: {
      es: 'Los modelos que funcionan no se diseñan desde la abstracción de los datos, sino desde las fallas operacionales del cuidado directo. Veinte años de ejercicio asistencial definen qué vale la pena predecir.',
      en: 'Models that work are not designed from the abstraction of data, but from the operational failures of direct care. Twenty years of clinical practice decide what is worth predicting.',
    },
    keywords: ['analítica clínica', 'oncología', 'listas de espera', 'GES'],
  },
  {
    id: 'ai-public-sector',
    title: {
      es: 'Inteligencia artificial en el Estado',
      en: 'Artificial intelligence inside the State',
    },
    body: {
      es: 'NLP sobre derivaciones clínicas, detección de anomalías y clasificación por ensamble, siempre con supervisión humana obligatoria. El algoritmo prioriza; nunca desestima solo.',
      en: 'NLP over clinical referrals, anomaly detection and ensemble classification, always with mandatory human oversight. The algorithm triages; it never dismisses on its own.',
    },
    keywords: ['NLP', 'embeddings', 'GBDT', 'human-in-the-loop'],
  },
  {
    id: 'capacity-building',
    title: {
      es: 'Alfabetización analítica del sector',
      en: 'Analytical literacy for the sector',
    },
    body: {
      es: 'La salud digital no se sostiene comprando sistemas, sino formando a quienes ya conocen el dato clínico. De OpenSalud LAB a Hazla con Datos, enseñando código con registros sanitarios reales.',
      en: 'Digital health is not sustained by buying systems, but by training the people who already understand the clinical record. From OpenSalud LAB to Hazla con Datos, teaching code with real health data.',
    },
    keywords: ['Hazla con Datos', 'OpenSalud LAB', 'LatinR', 'UNAB'],
  },
];

/** Narrative shown on the career page, before the timeline. */
export const CAREER_NARRATIVE: I18n<string[]> = {
  es: [
    'Mi trayectoria empezó donde empieza el dato: en la práctica clínica. Me titulé de enfermero en la Universidad de Chile y pasé años en unidades de hospitalización, turnos de urgencia y atención prehospitalaria en ambulancias. Ese periodo me dejó algo que ningún curso enseña: una comprensión directa de cómo interactúan el usuario y la burocracia hospitalaria, dónde se atascan los cuidados y cuánta complejidad esconde el registro clínico.',
    'A diferencia de las aproximaciones que abordan los datos sanitarios de forma puramente abstracta o computacional, mi trabajo técnico se construyó desde las fallas operacionales del cuidado directo. La transición fue deliberada: primero la gestión asistencial y la excelencia operacional, con una certificación Lean Six Sigma Black Belt en la Universidad de Chile y postítulos en Gerencia Pública, Control de Gestión Gerencial, Gestión de Procesos de Negocios y Alta Gerencia de Instituciones de Salud. Después, ingeniería y análisis predictivo, con estudios de ciencias de la computación en la Pontificia Universidad Católica de Chile y la malla completa de un MBA con especialización en Salud.',
    'Esa secuencia curricular explica el recorrido: del rediseño micro-operativo de procesos clínicos a la ciencia de datos aplicada, la arquitectura analítica ministerial y el modelamiento predictivo a escala nacional. La constante en todo el camino ha sido la misma: buscar los puntos ciegos del sistema, ahí donde los pacientes desaparecen dentro de la burocracia.',
  ],
  en: [
    'My career started where the data starts: in clinical practice. I qualified as a nurse at the University of Chile and spent years in inpatient units, emergency shifts and pre-hospital ambulance care. That period taught me something no course does: a first-hand understanding of how patients collide with hospital bureaucracy, where care gets stuck, and how much complexity hides inside a clinical record.',
    'Unlike approaches that treat health data as a purely abstract or computational object, my technical work was built from the operational failures of direct care. The transition was deliberate: first care management and operational excellence, with a Lean Six Sigma Black Belt certification at the University of Chile and postgraduate studies in Public Management, Managerial Control, Business Process Management and Senior Management of Health Institutions. Then engineering and predictive analysis, with computer science studies at the Pontifical Catholic University of Chile and the full curriculum of an MBA specialising in Health.',
    'That sequence explains the path: from micro-operational redesign of clinical processes to applied data science, ministry-level analytics architecture and predictive modelling at national scale. One constant runs through all of it: hunting for the system’s blind spots, the places where patients disappear inside the bureaucracy.',
  ],
};

/** Closing arguments, shown at the end of the career page. */
export const CONCLUSIONS: { title: I18n<string>; body: I18n<string> }[] = [
  {
    title: {
      es: 'La ciencia de datos en salud rinde cuando nace de la operación clínica',
      en: 'Health data science pays off when it grows out of clinical operations',
    },
    body: {
      es: 'El tránsito desde el rol de enfermero clínico hacia el diseño de modelos de inteligencia artificial orientó los proyectos hacia problemas concretos del paciente, evitando soluciones computacionales desvinculadas de la práctica hospitalaria.',
      en: 'Moving from clinical nursing into the design of artificial-intelligence models kept every project anchored to concrete patient problems, and away from computational solutions detached from hospital practice.',
    },
  },
  {
    title: {
      es: 'El método no cambia; cambia la herramienta',
      en: 'The method does not change; the tool does',
    },
    body: {
      es: 'Ya sea con etiquetas fluorescentes sobre fichas de papel en el Hospital Padre Hurtado o con modelos de lenguaje y árboles de gradiente en el Ministerio de Salud, el foco ha sido siempre el mismo: rescatar a los pacientes que quedan desatendidos en la burocracia de las listas de espera.',
      en: 'Whether with fluorescent stickers on paper charts at Hospital Padre Hurtado or with language models and gradient-boosted trees at the Ministry of Health, the focus has always been the same: rescuing the patients left unattended inside waiting-list bureaucracy.',
    },
  },
  {
    title: {
      es: 'Procesar a escala no exige clústeres ni licencias',
      en: 'Processing at scale requires neither clusters nor licences',
    },
    body: {
      es: 'Motores embebidos como DuckDB y prácticas de control de versiones demostraron que se pueden procesar decenas de millones de registros sanitarios con infraestructura convencional. Eso reduce la dependencia fiscal de licencias privativas y, sobre todo, pone la capacidad analítica en los equipos locales en vez de concentrarla en el nivel central.',
      en: 'Embedded engines such as DuckDB, combined with version-control practice, proved that tens of millions of health records can be processed on conventional infrastructure. That reduces fiscal dependence on proprietary licences and, more importantly, puts analytical capability in local teams instead of concentrating it centrally.',
    },
  },
  {
    title: {
      es: 'La sostenibilidad depende del capital humano, no del software',
      en: 'Sustainability depends on people, not on software',
    },
    body: {
      es: 'OpenSalud LAB y Hazla con Datos parten de una premisa: la salud digital no se sostiene comprando sistemas informáticos, sino alfabetizando analíticamente al propio personal del sector para que analice, depure y use sus propios datos.',
      en: 'OpenSalud LAB and Hazla con Datos start from one premise: digital health is not sustained by purchasing IT systems, but by giving the sector’s own staff the analytical literacy to examine, clean and use their own data.',
    },
  },
];
