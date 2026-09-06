import type { I18n } from '@/i18n/config';

export type Stat = {
  value: I18n<string>;
  label: I18n<string>;
  note: I18n<string>;
};

/**
 * Headline figures. Every number here is sourced from the documented career
 * record; ranges that were never published are described qualitatively instead.
 */
export const HERO_STATS: Stat[] = [
  {
    value: { es: '20+', en: '20+' },
    label: { es: 'años en salud pública', en: 'years in public health' },
    note: {
      es: 'Desde turnos de urgencia y ambulancias hasta la arquitectura analítica ministerial.',
      en: 'From emergency shifts and ambulances to ministry-scale analytics architecture.',
    },
  },
  {
    value: { es: '6.000+', en: '6,000+' },
    label: { es: 'pacientes trazados', en: 'patients tracked' },
    note: {
      es: 'Cohorte oncológica bajo seguimiento activo en el Hospital Padre Hurtado (2014–2018).',
      en: 'Cancer cohort under active follow-up at Hospital Padre Hurtado (2014–2018).',
    },
  },
  {
    value: { es: '13 días', en: '13 days' },
    label: { es: 'a primera consulta', en: 'to first specialist visit' },
    note: {
      es: 'Tiempo de acceso alcanzado por el modelo de trazabilidad oncológica.',
      en: 'Access time reached by the oncology traceability model.',
    },
  },
  {
    value: { es: 'Top 5', en: 'Top 5' },
    label: { es: 'del país', en: 'nationwide' },
    note: {
      es: 'Entre los cinco mejores hospitales públicos de Chile en gestión oncológica.',
      en: 'Among the five best public hospitals in Chile for cancer management.',
    },
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
    id: 'clinical-analytics',
    title: {
      es: 'Analítica nacida en la clínica',
      en: 'Analytics born at the bedside',
    },
    body: {
      es: 'Los modelos que funcionan no se diseñan desde la abstracción de los datos, sino desde las fallas operacionales del cuidado directo. Veinte años de ejercicio asistencial definen qué vale la pena predecir.',
      en: 'Models that work are not designed from the abstraction of data, but from the operational failures of direct care. Twenty years at the bedside decide what is worth predicting.',
    },
    keywords: ['GES', 'oncología', 'listas de espera', 'trazabilidad'],
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
    id: 'frugal-engineering',
    title: {
      es: 'Ingeniería de datos frugal',
      en: 'Frugal data engineering',
    },
    body: {
      es: 'Decenas de millones de registros hospitalarios procesados en computadores convencionales, con motores OLAP embebidos y formatos columnares abiertos. Sin clústeres, sin licencias privativas.',
      en: 'Tens of millions of hospital records processed on ordinary desktop machines, with embedded OLAP engines and open columnar formats. No clusters, no proprietary licences.',
    },
    keywords: ['DuckDB', 'Apache Parquet', 'R', 'Python'],
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
    'Mi trayectoria empezó donde empieza el dato: en la cama del paciente. Me titulé de enfermero en la Universidad de Chile y pasé años en unidades de hospitalización, turnos de urgencia y atención prehospitalaria en ambulancias. Ese periodo me dejó algo que ningún curso enseña: una comprensión directa de cómo interactúan el usuario y la burocracia hospitalaria, dónde se atascan los cuidados y cuánta complejidad esconde el registro clínico.',
    'A diferencia de las aproximaciones que abordan los datos sanitarios de forma puramente abstracta o computacional, mi trabajo técnico se construyó desde las fallas operacionales del cuidado directo. La transición fue deliberada: primero la gestión asistencial y la excelencia operacional, con una certificación Lean Six Sigma Black Belt en la Universidad de Chile y postítulos en Gerencia Pública, Control de Gestión Gerencial, Gestión de Procesos de Negocios y Alta Gerencia de Instituciones de Salud. Después, ingeniería y análisis predictivo, con estudios de ciencias de la computación en la Pontificia Universidad Católica de Chile y la malla completa de un MBA con especialización en Salud.',
    'Esa secuencia curricular explica el recorrido: del rediseño micro-operativo de procesos clínicos a la ciencia de datos aplicada, la arquitectura analítica ministerial y el modelamiento predictivo a escala nacional. La constante en todo el camino ha sido la misma: buscar los puntos ciegos del sistema, ahí donde los pacientes desaparecen dentro de la burocracia.',
  ],
  en: [
    'My career started where the data starts: at the patient’s bedside. I qualified as a nurse at the University of Chile and spent years in inpatient units, emergency shifts and pre-hospital ambulance care. That period taught me something no course does: a first-hand understanding of how patients collide with hospital bureaucracy, where care gets stuck, and how much complexity hides inside a clinical record.',
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
      es: 'La ingeniería de datos frugal es viable dentro del Estado',
      en: 'Frugal data engineering is viable inside government',
    },
    body: {
      es: 'Motores embebidos como DuckDB y prácticas de control de versiones demostraron que es factible procesar decenas de millones de registros sanitarios con infraestructura convencional, reduciendo la dependencia fiscal de licencias privativas y habilitando capacidad analítica en los equipos locales.',
      en: 'Embedded engines such as DuckDB, combined with version-control practice, proved it is feasible to process tens of millions of health records on conventional infrastructure, reducing fiscal dependence on proprietary licences and putting analytical capability directly in local teams.',
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
