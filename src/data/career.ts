import type { I18n } from '@/i18n/config';

export type TimelineEntry = {
  period: string;
  field: I18n<string>;
  title: I18n<string>;
  body: I18n<string>;
  org: I18n<string>;
  highlight?: boolean;
};

/** Verifiable milestones, 2004–2026, newest first. */
export const TIMELINE: TimelineEntry[] = [
  {
    period: '2026',
    field: { es: 'Dirección y estrategia digital', en: 'Digital strategy and leadership' },
    title: {
      es: 'Oficina de Inteligencia y Gestión Estratégica en Salud',
      en: 'Office of Intelligence and Strategic Health Management',
    },
    body: {
      es: 'Integración, desde el 1 de septiembre, al equipo del nuevo departamento ministerial, participando en el plan estratégico de siete proyectos para la transformación digital e interoperabilidad del sistema público hacia 2030.',
      en: 'Joined the new ministry department on 1 September, contributing to the seven-project strategic plan for digital transformation and interoperability of the public system towards 2030.',
    },
    org: { es: 'MINSAL · Hoja de ruta digital', en: 'Ministry of Health · Digital roadmap' },
    highlight: true,
  },
  {
    period: '2026',
    field: { es: 'Formación técnica regional', en: 'Regional technical training' },
    title: {
      es: 'Instructor oficial de talleres en LatinR 2026',
      en: 'Official workshop instructor at LatinR 2026',
    },
    body: {
      es: 'Dictado de los talleres oficiales sobre Positron y el entorno moderno de ciencia de datos en la conferencia latinoamericana de R, y lanzamiento de la cohorte Gen6 de Hazla con Datos.',
      en: 'Delivered the official workshops on Positron and the modern data-science environment at the Latin American R conference, plus the launch of the Gen6 cohort of Hazla con Datos.',
    },
    org: { es: 'LatinR · hazlacondatos.com', en: 'LatinR · hazlacondatos.com' },
  },
  {
    period: '2025',
    field: { es: 'IA clínica en producción', en: 'Clinical AI in production' },
    title: {
      es: 'Pipeline semanal de búsqueda de cáncer oculto en listas quirúrgicas',
      en: 'Weekly pipeline hunting hidden cancer in surgical waiting lists',
    },
    body: {
      es: 'Puesta en marcha del pipeline ministerial de inteligencia artificial para la detección de sospechas oncológicas mal clasificadas, con ejecución semanal permanente. Ponencia en LatinR 2025.',
      en: 'Launch of the ministry’s artificial-intelligence pipeline for detecting misclassified cancer suspicions, running permanently on a weekly cadence. Talk delivered at LatinR 2025.',
    },
    org: { es: 'MINSAL · LatinR', en: 'Ministry of Health · LatinR' },
    highlight: true,
  },
  {
    period: '2024',
    field: { es: 'Formación e ingeniería de datos', en: 'Training and data engineering' },
    title: {
      es: 'Fundación de Hazla con Datos y ponencia DuckDB en LatinR',
      en: 'Founding of Hazla con Datos and DuckDB talk at LatinR',
    },
    body: {
      es: 'Creación de la plataforma educativa hazlacondatos.com y presentación en LatinR 2024 sobre bases de datos analíticas in-process (DuckDB) para la gestión masiva de listas de espera.',
      en: 'Creation of the educational platform hazlacondatos.com and a LatinR 2024 presentation on in-process analytical databases (DuckDB) for managing waiting lists at scale.',
    },
    org: { es: 'hazlacondatos.com · LatinR', en: 'hazlacondatos.com · LatinR' },
  },
  {
    period: '2023',
    field: { es: 'IA para el sector público', en: 'AI for the public sector' },
    title: {
      es: 'Top 5 de las mejores iniciativas de IA del Estado chileno',
      en: 'Top 5 artificial-intelligence initiatives in the Chilean State',
    },
    body: {
      es: 'El modelo de detección de anomalías en listas de espera fue seleccionado entre las cinco mejores implementaciones de inteligencia artificial del Estado en el encuentro de IA para la transformación pública.',
      en: 'The waiting-list anomaly detection model was selected among the five best artificial-intelligence implementations in the Chilean State at the public-transformation AI summit.',
    },
    org: { es: 'Gobierno Digital · Ministerio de Hacienda', en: 'Digital Government · Ministry of Finance' },
    highlight: true,
  },
  {
    period: '2022–2026',
    field: { es: 'Docencia de postgrado', en: 'Postgraduate teaching' },
    title: {
      es: 'Diplomado en Dirección y Gestión de Estrategias en Salud Digital',
      en: 'Postgraduate Diploma in Digital Health Strategy Management',
    },
    body: {
      es: 'Docente del programa de postgrado en salud digital de la Universidad Andrés Bello.',
      en: 'Faculty member on the postgraduate digital health programme at Universidad Andrés Bello.',
    },
    org: { es: 'Universidad Andrés Bello (UNAB)', en: 'Universidad Andrés Bello (UNAB)' },
  },
  {
    period: '2022',
    field: { es: 'Validación internacional', en: 'International validation' },
    title: {
      es: 'Trabajo aceptado en useR! 2022',
      en: 'Work accepted at useR! 2022',
    },
    body: {
      es: 'Trabajo técnico sobre programación aplicada a la salud pública aceptado en la conferencia mundial de usuarios de R, uno de los foros de desarrollo computacional más relevantes del ámbito científico internacional.',
      en: 'Technical work on programming applied to public health accepted at the global R user conference, one of the most relevant computational development forums in international science.',
    },
    org: { es: 'useR! Conference', en: 'useR! Conference' },
  },
  {
    period: '2021–2026',
    field: { es: 'Consultoría avanzada', en: 'Advanced consulting' },
    title: {
      es: 'Consultor en inteligencia de negocios y minería de datos',
      en: 'Business intelligence and data mining consultant',
    },
    body: {
      es: 'Consultoría técnica avanzada en inteligencia de negocios y minería de datos aplicada al sector salud.',
      en: 'Advanced technical consulting in business intelligence and data mining applied to the health sector.',
    },
    org: { es: 'ECRSALUD', en: 'ECRSALUD' },
  },
  {
    period: '2021',
    field: { es: 'Analítica pública internacional', en: 'International public analytics' },
    title: {
      es: 'LatinR 2021, telemedicina en Perú y Laboratorio de Gobierno',
      en: 'LatinR 2021, telemedicine in Peru and Laboratorio de Gobierno',
    },
    body: {
      es: 'Ponencia en LatinR 2021 sobre la pertinencia de que los funcionarios públicos de salud dominen la programación en R; expositor en el Congreso Internacional de Telemedicina del Ministerio de Salud de Perú; tallerista y relator de Ciencia de Datos en Salud para el Laboratorio de Gobierno de Chile en agosto.',
      en: 'LatinR 2021 talk on why public health officials should learn to program in R; speaker at the International Telemedicine Congress of Peru’s Ministry of Health; workshop leader on Health Data Science for Chile’s Laboratorio de Gobierno in August.',
    },
    org: { es: 'LatinR · MINSA Perú · LabGob', en: 'LatinR · Peru Ministry of Health · LabGob' },
  },
  {
    period: '2019–2020',
    field: { es: 'Extensión y prensa', en: 'Outreach and press' },
    title: {
      es: 'SmartSalud y cobertura en medios',
      en: 'SmartSalud and media coverage',
    },
    body: {
      es: 'Colaboración técnica en el desafío de innovación abierta SmartSalud, articulado por INACAP e InterSystems, con difusión en Radio Universidad de Chile, FayerWayer y el Podcast Salud 4.0.',
      en: 'Technical collaboration in the SmartSalud open innovation challenge, run by INACAP and InterSystems, with coverage on Radio Universidad de Chile, FayerWayer and the Salud 4.0 podcast.',
    },
    org: { es: 'INACAP · InterSystems · Medios', en: 'INACAP · InterSystems · Media' },
  },
  {
    period: '2019',
    field: { es: 'Investigación y reconocimiento', en: 'Research and recognition' },
    title: {
      es: 'Premio de oncología, publicación académica y selección MIT Critical Data',
      en: 'Oncology award, academic publication and MIT Critical Data selection',
    },
    body: {
      es: 'Junio: tres proyectos de investigación en ciencia de datos seleccionados en la convocatoria de CENS MakeHealth, la Universidad de Chile y MIT Critical Data. Julio: docente invitado en metodología LEAN para el Servicio de Salud Coquimbo. Agosto: premio al mejor trabajo de investigación en modalidad póster en el Congreso Chileno de Oncología Médica. Octubre: selección para publicación de los proyectos «Modelo de seguimiento de pacientes» y «Modelo Seis Sigma para reducción de estancias hospitalarias» por la Escuela de Salud Pública de la Universidad de Chile.',
      en: 'June: three data-science research projects selected in the joint call by CENS MakeHealth, the University of Chile and MIT Critical Data. July: guest lecturer in LEAN methodology for the Coquimbo Health Service. August: best research poster award at the Chilean Congress of Medical Oncology. October: the projects “Patient follow-up model” and “Six Sigma model for reducing hospital stays” selected for publication by the School of Public Health at the University of Chile.',
    },
    org: { es: 'CENS · MIT Critical Data · U. de Chile', en: 'CENS · MIT Critical Data · University of Chile' },
    highlight: true,
  },
  {
    period: '2018',
    field: { es: 'Emprendimiento cívico', en: 'Civic entrepreneurship' },
    title: {
      es: 'Creación de OpenSalud LAB',
      en: 'Founding of OpenSalud LAB',
    },
    body: {
      es: 'Formalización de OpenSalud LAB como laboratorio ciudadano de innovación abierta en salud, orientado al rediseño de servicios públicos y al acompañamiento de intraemprendimientos.',
      en: 'OpenSalud LAB formally established as a citizen laboratory for open innovation in health, focused on redesigning public services and supporting intrapreneurship.',
    },
    org: { es: 'OpenSalud LAB', en: 'OpenSalud LAB' },
  },
  {
    period: '2017–2018',
    field: { es: 'Distinciones de gestión', en: 'Management distinctions' },
    title: {
      es: 'Buenas Prácticas SSMSO y Congreso Internacional de Enfermería',
      en: 'SSMSO Best Practices and International Nursing Congress',
    },
    body: {
      es: 'Segundo lugar en la Jornada de Buenas Prácticas e Innovación del Servicio de Salud Metropolitano Sur Oriente por un esquema de optimización del flujo prequirúrgico ambulatorio, y tercer lugar en el XIII Congreso Internacional de Enfermería por aplicaciones no-code aplicadas al ámbito preoperatorio.',
      en: 'Second place at the South-East Metropolitan Health Service Best Practices and Innovation conference for an outpatient pre-surgical flow optimisation scheme, and third place at the 13th International Nursing Congress for no-code applications in the pre-operative setting.',
    },
    org: { es: 'SSMSO · Congreso Int. de Enfermería', en: 'SSMSO · International Nursing Congress' },
  },
  {
    period: '2016',
    field: { es: 'Calidad operacional', en: 'Operational quality' },
    title: {
      es: 'Certificación Lean Six Sigma Black Belt',
      en: 'Lean Six Sigma Black Belt certification',
    },
    body: {
      es: 'Acreditación profesional como Lean Six Sigma Black Belt por la Universidad de Chile.',
      en: 'Professional accreditation as Lean Six Sigma Black Belt by the University of Chile.',
    },
    org: { es: 'Universidad de Chile', en: 'University of Chile' },
  },
  {
    period: '2014–2018',
    field: { es: 'Gestión hospitalaria', en: 'Hospital management' },
    title: {
      es: 'Sistema de trazabilidad oncológica del Hospital Padre Hurtado',
      en: 'Cancer traceability system at Hospital Padre Hurtado',
    },
    body: {
      es: 'Diseño e implementación del modelo integral de seguimiento y gestión activa de casos: más de 6.000 pacientes trazados, tiempo a primera consulta reducido a 13 días e ingreso al Top 5 nacional en gestión oncológica.',
      en: 'Design and implementation of the comprehensive follow-up and active case-management model: more than 6,000 patients tracked, time to first appointment cut to 13 days and entry into the national Top 5 for cancer management.',
    },
    org: { es: 'Hospital Padre Hurtado · SSMSO', en: 'Hospital Padre Hurtado · SSMSO' },
    highlight: true,
  },
  {
    period: '2014',
    field: { es: 'Innovación en redes', en: 'Care network innovation' },
    title: {
      es: 'Finalista nacional en InnovaSalud',
      en: 'National finalist at InnovaSalud',
    },
    body: {
      es: 'El modelo oncológico fue la única iniciativa del Hospital Padre Hurtado seleccionada para presentación presencial en el encuentro nacional InnovaSalud, quedando entre los 20 mejores proyectos públicos del país.',
      en: 'The oncology model was the only Hospital Padre Hurtado initiative selected for in-person presentation at the national InnovaSalud gathering, placing among the country’s 20 best public projects.',
    },
    org: { es: 'MINSAL · DIGERA · CORFO', en: 'Ministry of Health · DIGERA · CORFO' },
  },
  {
    period: '2004–2013',
    field: { es: 'Asistencial y supervisión', en: 'Clinical care and supervision' },
    title: {
      es: 'Ejercicio clínico y jefaturas asistenciales',
      en: 'Clinical practice and care leadership',
    },
    body: {
      es: 'Titulación como enfermero en la Universidad de Chile y desempeño asistencial directo en unidades de hospitalización, servicios de urgencia, atención prehospitalaria en ambulancias y jefaturas clínicas.',
      en: 'Qualified as a nurse at the University of Chile, followed by direct clinical practice in inpatient units, emergency departments, pre-hospital ambulance care and clinical leadership roles.',
    },
    org: { es: 'Universidad de Chile · Red asistencial', en: 'University of Chile · Public care network' },
  },
];

export type EducationEntry = {
  area: I18n<string>;
  programme: I18n<string>;
  institution: I18n<string>;
  contribution: I18n<string>;
};

export const EDUCATION: EducationEntry[] = [
  {
    area: { es: 'Asistencial y clínico', en: 'Clinical care' },
    programme: { es: 'Licenciatura en Enfermería', en: 'BSc in Nursing' },
    institution: { es: 'Universidad de Chile', en: 'University of Chile' },
    contribution: {
      es: 'Conocimiento empírico de flujos hospitalarios, cuidado del paciente y registros clínicos.',
      en: 'First-hand knowledge of hospital flows, patient care and clinical records.',
    },
  },
  {
    area: { es: 'Optimización operativa', en: 'Operational optimisation' },
    programme: { es: 'Certificación Lean Six Sigma Black Belt', en: 'Lean Six Sigma Black Belt certification' },
    institution: { es: 'Universidad de Chile', en: 'University of Chile' },
    contribution: {
      es: 'Métodos cuantitativos DMAIC, reducción de varianza y rediseño de procesos críticos.',
      en: 'DMAIC quantitative methods, variance reduction and redesign of critical processes.',
    },
  },
  {
    area: { es: 'Control y planificación', en: 'Control and planning' },
    programme: { es: 'Diplomado en Control de Gestión Gerencial', en: 'Postgraduate Diploma in Managerial Control' },
    institution: { es: 'Universidad de Chile', en: 'University of Chile' },
    contribution: {
      es: 'Sistemas de medición estratégica, tableros de control y rendición de cuentas.',
      en: 'Strategic measurement systems, control dashboards and accountability.',
    },
  },
  {
    area: { es: 'Dirección pública', en: 'Public leadership' },
    programme: {
      es: 'Gerencia Pública y Alta Gerencia de Instituciones de Salud',
      en: 'Public Management and Senior Management of Health Institutions',
    },
    institution: { es: 'Diversas instituciones', en: 'Various institutions' },
    contribution: {
      es: 'Gobernanza sectorial, marcos regulatorios y asignación presupuestaria pública.',
      en: 'Sector governance, regulatory frameworks and public budget allocation.',
    },
  },
  {
    area: { es: 'Computación y negocios', en: 'Computing and business' },
    programme: {
      es: 'Ciencias de la computación · MBA con especialidad en Salud (malla completada)',
      en: 'Computer science · MBA specialising in Health (curriculum completed)',
    },
    institution: { es: 'Pontificia Universidad Católica de Chile', en: 'Pontifical Catholic University of Chile' },
    contribution: {
      es: 'Algoritmos, programación estructurada y sostenibilidad de proyectos tecnológicos.',
      en: 'Algorithms, structured programming and sustainability of technology projects.',
    },
  },
];

export type Recognition = {
  year: string;
  title: I18n<string>;
  org: I18n<string>;
};

export const RECOGNITION: Recognition[] = [
  {
    year: '2023',
    title: {
      es: 'Top 5 de las mejores implementaciones de IA en el Estado',
      en: 'Top 5 artificial-intelligence implementations in the State',
    },
    org: { es: 'División de Gobierno Digital · Ministerio de Hacienda', en: 'Digital Government Division · Ministry of Finance' },
  },
  {
    year: '2022',
    title: {
      es: 'Trabajo técnico aceptado en la conferencia mundial de usuarios de R',
      en: 'Technical work accepted at the global R user conference',
    },
    org: { es: 'useR! 2022', en: 'useR! 2022' },
  },
  {
    year: '2019',
    title: {
      es: 'Mejor trabajo de investigación, modalidad póster',
      en: 'Best research work, poster category',
    },
    org: { es: 'Congreso Chileno de Oncología Médica', en: 'Chilean Congress of Medical Oncology' },
  },
  {
    year: '2019',
    title: {
      es: 'Selección para publicación: modelo de seguimiento de pacientes y modelo Seis Sigma',
      en: 'Selected for publication: patient follow-up model and Six Sigma model',
    },
    org: { es: 'Escuela de Salud Pública, Universidad de Chile', en: 'School of Public Health, University of Chile' },
  },
  {
    year: '2019',
    title: {
      es: 'Tres proyectos de investigación en ciencia de datos seleccionados',
      en: 'Three data-science research projects selected',
    },
    org: { es: 'CENS MakeHealth · U. de Chile · MIT Critical Data', en: 'CENS MakeHealth · University of Chile · MIT Critical Data' },
  },
  {
    year: '2017–2018',
    title: {
      es: '2.° lugar en Buenas Prácticas e Innovación · 3.er lugar en el XIII Congreso Internacional de Enfermería',
      en: '2nd place in Best Practices and Innovation · 3rd place at the 13th International Nursing Congress',
    },
    org: { es: 'SSMSO · Congreso Internacional de Enfermería', en: 'SSMSO · International Nursing Congress' },
  },
  {
    year: '2014',
    title: {
      es: 'Top 20 nacional de iniciativas públicas en InnovaSalud',
      en: 'National Top 20 public initiatives at InnovaSalud',
    },
    org: { es: 'MINSAL · DIGERA · CORFO', en: 'Ministry of Health · DIGERA · CORFO' },
  },
];
