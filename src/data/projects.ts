import type { I18n } from '@/i18n/config';

export type Project = {
  id: string;
  featured: boolean;
  period: string;
  org: I18n<string>;
  role: I18n<string>;
  title: I18n<string>;
  /** One-line hook used on cards and in llms.txt. */
  tagline: I18n<string>;
  context: I18n<string>;
  approach: I18n<string[]>;
  outcome: I18n<string[]>;
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 'oncologia-hph',
    featured: true,
    period: '2014–2018',
    org: {
      es: 'Hospital Padre Hurtado · Servicio de Salud Metropolitano Sur Oriente',
      en: 'Hospital Padre Hurtado · South-East Metropolitan Health Service',
    },
    role: {
      es: 'Asesor de dirección y monitor de Garantías Explícitas en Salud (GES)',
      en: 'Advisor to hospital management and monitor of Explicit Health Guarantees (GES)',
    },
    title: {
      es: 'Modelo de trazabilidad y gestión activa de casos oncológicos',
      en: 'Cancer traceability and active case-management model',
    },
    tagline: {
      es: 'Innovación frugal, sin software propietario, que llevó a un hospital público al Top 5 nacional en gestión oncológica.',
      en: 'Frugal innovation, with no proprietary software, that took a public hospital into the national Top 5 for cancer management.',
    },
    context: {
      es: 'El escenario previo combinaba demoras prolongadas en el acceso a especialistas, retrasos críticos en la confirmación diagnóstica y un incumplimiento sistemático de los plazos legales del régimen GES. Las derivaciones en papel se estancaban en los puntos de contacto administrativo y nadie sabía dónde estaba cada paciente.',
      en: 'The starting point combined long delays in specialist access, critical lags in diagnostic confirmation and systematic breaches of the legal deadlines set by the GES regime. Paper referrals stalled at administrative handoffs, and nobody knew where each patient actually was.',
    },
    approach: {
      es: [
        'Rediseño completo del proceso bajo principios de gestión por procesos y atención basada en valor (Value-Based Healthcare), descartando de entrada el software propietario de alto coste.',
        'Introducción de la figura del gestor de casos clínicos y del seguimiento longitudinal continuo de cada interconsulta, desde la sospecha hasta la definición terapéutica.',
        'Mecanismos físicos de identificación visual inmediata —etiquetas adhesivas fluorescentes sobre fichas y derivaciones de papel— para impedir que las órdenes se estancaran en los puntos de contacto administrativo.',
        'Diseño participativo con sobrevivientes de cáncer y personal clínico, extendiendo el objetivo desde el cumplimiento de metas administrativas hacia la humanización del proceso asistencial.',
      ],
      en: [
        'A full process redesign grounded in business-process management and Value-Based Healthcare, ruling out expensive proprietary software from the outset.',
        'Introduction of a clinical case-manager role and continuous longitudinal follow-up of every referral, from suspicion through to treatment decision.',
        'Physical, immediately visible identification — fluorescent stickers on paper charts and referrals — so orders could not stall at administrative handoffs.',
        'Participatory design with cancer survivors and clinical staff, widening the goal from hitting administrative targets to humanising the care process.',
      ],
    },
    outcome: {
      es: [
        'Más de 6.000 pacientes ingresaron al sistema de trazabilidad durante el periodo de ejecución.',
        'Tiempo a primera consulta de especialista reducido a 13 días.',
        'El establecimiento se situó entre los cinco mejores hospitales públicos de Chile en gestión oncológica.',
        'Lapsos sostenidos con cero garantías GES retrasadas en patologías neoplásicas.',
        'Derivación más ágil a cuidados paliativos y alivio del dolor para pacientes en estadios avanzados.',
      ],
      en: [
        'More than 6,000 patients entered the traceability system over the period.',
        'Time to first specialist appointment brought down to 13 days.',
        'The hospital placed among the five best public hospitals in Chile for cancer management.',
        'Sustained stretches with zero overdue GES guarantees in neoplastic conditions.',
        'Faster referral to palliative care and pain relief for patients at advanced stages.',
      ],
    },
    stack: ['Lean Six Sigma', 'BPMN', 'Value-Based Healthcare', 'Gestión de casos'],
  },
  {
    id: 'anomalias-listas-espera',
    featured: true,
    period: '2023',
    org: {
      es: 'MINSAL · Departamento de Análisis e Información para la Gestión',
      en: 'Ministry of Health · Department of Analysis and Management Information',
    },
    role: {
      es: 'Científico de datos, equipo de conceptualización e implementación',
      en: 'Data scientist, design and implementation team',
    },
    title: {
      es: 'Detección de anomalías en listas de espera con aprendizaje automático inverso',
      en: 'Waiting-list anomaly detection with reverse machine learning',
    },
    tagline: {
      es: 'Clasificación invertida: en lugar de aprender lo típico, el modelo busca lo irregular en el Registro Nacional de Listas de Espera.',
      en: 'Inverted classification: instead of learning what is typical, the model hunts for what is irregular in the National Waiting List Registry.',
    },
    context: {
      es: 'El Registro Nacional de Listas de Espera concentra decenas de millones de transacciones asistenciales. Los errores de codificación y las prácticas discordantes entre establecimientos quedaban invisibles dentro del volumen agregado, sin ningún mecanismo sistemático para detectarlos.',
      en: 'The National Waiting List Registry holds tens of millions of care transactions. Coding errors and divergent practices between facilities stayed invisible inside the aggregate volume, with no systematic mechanism to surface them.',
    },
    approach: {
      es: [
        'Inversión metodológica del uso clásico de los algoritmos de clasificación: la arquitectura no busca patrones repetitivos ni comportamientos típicos, sino irregularidades operacionales y valores atípicos multidimensionales.',
        'Supervisión continua de cuatro ejes: volumen dinámico de ingresos y egresos; distribuciones temporales de permanencia frente a umbrales biológicos y administrativos esperados; variabilidad productiva entre servicios y especialidades equivalentes; y evolución histórica de las justificaciones de egreso.',
        'Reportes mensuales automatizados que notifican de forma directa a los equipos de gestión local de hospitales y Servicios de Salud del país.',
      ],
      en: [
        'A methodological inversion of classic classification: the architecture does not look for repeated patterns or typical behaviour, but for operational irregularities and multidimensional outliers.',
        'Continuous monitoring across four axes: dynamic volume of entries and exits; time-in-list distributions against expected biological and administrative thresholds; productivity variance between comparable services and specialties; and the historical trajectory of discharge justifications.',
        'Automated monthly reports delivered straight to local management teams in hospitals and Health Services across the country.',
      ],
    },
    outcome: {
      es: [
        'Habilita auditorías clínicas dirigidas, identificando errores de codificación y prácticas asistenciales discordantes.',
        'Facilita la migración hacia las nuevas plataformas tecnológicas ministeriales.',
        'Clasificado entre las cinco mejores implementaciones de inteligencia artificial en el Estado, en el encuentro de IA para la transformación pública convocado por la División de Gobierno Digital y el Ministerio de Hacienda.',
      ],
      en: [
        'Enables targeted clinical audits, surfacing coding errors and divergent care practices.',
        'Supports migration towards the ministry’s new technology platforms.',
        'Ranked among the five best artificial-intelligence implementations in the Chilean State, at the public-transformation AI summit convened by the Digital Government Division and the Ministry of Finance.',
      ],
    },
    stack: ['Detección de anomalías', 'R', 'Python', 'Reportería automatizada'],
  },
  {
    id: 'cancer-oculto-quirurgico',
    featured: true,
    period: '2025',
    org: {
      es: 'Ministerio de Salud de Chile',
      en: 'Chilean Ministry of Health',
    },
    role: {
      es: 'Diseño del sistema algorítmico',
      en: 'Algorithmic system design',
    },
    title: {
      es: 'Detección algorítmica de patologías oncológicas ocultas en listas de espera quirúrgicas',
      en: 'Algorithmic detection of hidden cancer inside surgical waiting lists',
    },
    tagline: {
      es: 'NLP, embeddings y árboles de gradiente para rescatar sospechas de cáncer mal clasificadas como cirugía electiva no priorizada.',
      en: 'NLP, embeddings and gradient-boosted trees to rescue cancer suspicions misfiled as non-prioritised elective surgery.',
    },
    context: {
      es: 'Un problema frecuente en la gestión de la demanda quirúrgica: pacientes con sospecha o evidencia de patología oncológica quedan clasificados erróneamente en las listas de espera como cirugías generales o electivas no priorizadas, y pierden la prioridad que les corresponde.',
      en: 'A recurring problem in surgical demand management: patients with suspected or evident cancer end up misclassified in waiting lists as general or non-prioritised elective surgery, losing the priority they are entitled to.',
    },
    approach: {
      es: [
        'Reglas de filtrado clínico y ontologías: expresiones regulares complejas y mapeo ontológico sobre códigos diagnósticos CIE-10 para capturar criterios deterministas directos en el texto libre de la derivación.',
        'Vectorización semántica: modelos de incrustaciones textuales (embeddings) que transforman las hipótesis diagnósticas libres en representaciones vectoriales densas, midiendo distancias de similitud contra centroides predefinidos de diagnósticos oncológicos confirmados.',
        'Clasificación predictiva por ensamble: árboles de decisión con potenciación de gradiente (GBDT), calibrados para procesar descripciones sintomáticas ambiguas o abreviadas emitidas por la red asistencial.',
        'Capa de decisión con supervisión humana: el sistema categoriza cada interconsulta como sospechosa, no sospechosa o indeterminada. Los casos sospechosos e indeterminados se desvían de forma obligatoria a una interfaz de auditoría clínica médica. El algoritmo apoya el triaje; nunca ejecuta desestimaciones autónomas.',
      ],
      en: [
        'Clinical filtering rules and ontologies: complex regular expressions and ontological mapping over ICD-10 diagnostic codes, capturing direct deterministic criteria in the free text of each referral.',
        'Semantic vectorisation: text embedding models turn free-form diagnostic hypotheses into dense vector representations, measured by similarity distance against predefined centroids of confirmed cancer diagnoses.',
        'Ensemble predictive classification: gradient-boosted decision trees (GBDT), calibrated for the ambiguous or abbreviated symptom descriptions the care network actually writes.',
        'A decision layer with human oversight: every referral is labelled suspicious, not suspicious or indeterminate. Suspicious and indeterminate cases are mandatorily routed to a medical audit interface. The algorithm supports triage; it never dismisses a case autonomously.',
      ],
    },
    outcome: {
      es: [
        'Evaluado sobre una cohorte validada clínicamente mediante revisión experta individualizada, con métricas de sensibilidad, especificidad, precisión y valor predictivo negativo medidas caso a caso.',
        'Alta capacidad de rescate de patologías neoplásicas encubiertas en la demanda no priorizada, con mínima interferencia sobre las rutas quirúrgicas electivas.',
        'Integrado en la rutina ministerial: pasó de una periodicidad mensual a un esquema semanal permanente desde 2025.',
      ],
      en: [
        'Evaluated against a clinically validated cohort reviewed case by case by specialists, with sensitivity, specificity, precision and negative predictive value measured individually.',
        'High recovery rate for cancer hidden inside non-prioritised demand, with minimal interference on elective surgical pathways.',
        'Embedded in ministry routine: moved from a monthly cadence to a permanent weekly schedule from 2025.',
      ],
    },
    stack: ['NLP', 'Embeddings', 'GBDT', 'CIE-10', 'Regex', 'Human-in-the-loop'],
  },
  {
    id: 'record-linkage',
    featured: false,
    period: '2023–2026',
    org: {
      es: 'Ministerio de Salud de Chile',
      en: 'Chilean Ministry of Health',
    },
    role: {
      es: 'Implementación de los modelos de vinculación',
      en: 'Linkage model implementation',
    },
    title: {
      es: 'Deduplicación probabilística y vinculación de registros a escala nacional',
      en: 'Probabilistic deduplication and record linkage at national scale',
    },
    tagline: {
      es: 'Unificar identidades fragmentadas para saber cuánta demanda quirúrgica existe realmente.',
      en: 'Unifying fragmented identities to find out how much surgical demand actually exists.',
    },
    context: {
      es: 'La multiplicidad de llaves identificatorias distorsiona la base de datos asistencial. Personas migrantes en tramitación de visado, recién nacidos y personas indocumentadas ingresan bajo identificadores numéricos transitorios y luego reciben su Rol Único Nacional definitivo, sin que el sistema unifique automáticamente sus eventos asistenciales.',
      en: 'Multiple identifying keys distort the care database. Migrants awaiting visa processing, newborns and undocumented people enter under temporary numeric identifiers and later receive their definitive national ID, with no automatic system-side merge of their care events.',
    },
    approach: {
      es: [
        'Modelos de vinculación de registros (record linkage) y deduplicación probabilística poblacional sobre conjuntos heterogéneos de nombres, fechas de nacimiento, sexo y domicilios.',
        'Métricas de distancia léxica y probabilística: ponderaciones de Fellegi-Sunter combinadas con similitudes de Jaro-Winkler.',
      ],
      en: [
        'Record-linkage models and population-level probabilistic deduplication over heterogeneous sets of names, dates of birth, sex and addresses.',
        'Lexical and probabilistic distance metrics: Fellegi-Sunter weighting combined with Jaro-Winkler similarity.',
      ],
    },
    outcome: {
      es: [
        'Corrección del sobredimensionamiento de las listas de espera quirúrgicas causado por registros redundantes.',
        'Indicadores objetivos de demanda real que sustentan la asignación presupuestaria sectorial y las políticas públicas del Ministerio de Salud.',
      ],
      en: [
        'Corrects the overstatement of surgical waiting lists caused by redundant records.',
        'Objective indicators of real demand, underpinning sector budget allocation and Ministry of Health policy.',
      ],
    },
    stack: ['Record linkage', 'Fellegi-Sunter', 'Jaro-Winkler', 'R', 'Python'],
  },
  {
    id: 'arquitectura-frugal',
    featured: true,
    period: '2021–2026',
    org: {
      es: 'Ministerio de Salud de Chile · comunidad LatinR',
      en: 'Chilean Ministry of Health · LatinR community',
    },
    role: {
      es: 'Arquitectura analítica y transferencia técnica',
      en: 'Analytics architecture and technical transfer',
    },
    title: {
      es: 'Arquitectura analítica frugal sobre tecnologías abiertas',
      en: 'Frugal analytics architecture on open technology',
    },
    tagline: {
      es: 'Decenas de millones de filas consultadas en equipos convencionales, con motores OLAP embebidos y sin licencias privativas.',
      en: 'Tens of millions of rows queried on ordinary machines, with embedded OLAP engines and no proprietary licences.',
    },
    context: {
      es: 'Desarrollar soluciones sobre bases de decenas de millones de transacciones hospitalarias dentro del aparato estatal choca con limitaciones recurrentes: equipos informáticos con poca memoria física y servidores centrales saturados. La respuesta habitual —comprar licencias y clústeres— no era viable.',
      en: 'Building solutions over databases of tens of millions of hospital transactions inside government runs into recurring limits: workstations with little physical memory and saturated central servers. The usual answer — buying licences and clusters — was not viable.',
    },
    approach: {
      es: [
        'DuckDB y almacenamiento columnar en Apache Parquet: implementación pionera de motores OLAP embebidos (in-process) que permiten consultar tablas de decenas de millones de filas de pacientes directamente en computadores convencionales de la red asistencial, sin clústeres externos ni superar los límites de RAM.',
        'R para el modelamiento estadístico, el análisis de supervivencia y los reportes reproducibles con Quarto y Shiny; Python para los pipelines de producción, la vectorización de lenguaje natural y el entrenamiento de modelos de clasificación.',
        'Prácticas de ingeniería de software dentro de dependencias gubernamentales: Git, Bash, entornos Linux y repositorios versionados, garantizando la reproducibilidad metodológica y la auditabilidad formal de las estimaciones ministeriales.',
      ],
      en: [
        'DuckDB and Apache Parquet columnar storage: a pioneering deployment of in-process OLAP engines, letting analysts query patient tables of tens of millions of rows directly on ordinary machines across the care network, with no external clusters and without exceeding RAM limits.',
        'R for statistical modelling, survival analysis and reproducible reporting with Quarto and Shiny; Python for production pipelines, natural-language vectorisation and classification model training.',
        'Software-engineering practice inside government bodies: Git, Bash, Linux environments and versioned repositories, guaranteeing methodological reproducibility and formal auditability of ministry estimates.',
      ],
    },
    outcome: {
      es: [
        'Reducción de la dependencia fiscal de licencias de software privativo.',
        'Capacidad analítica habilitada directamente en los equipos locales de la red asistencial.',
        'Arquitectura transferida activamente a la comunidad regional a través de LatinR (2021, 2024, 2025 y 2026) y de la conferencia internacional useR! 2022.',
      ],
      en: [
        'Reduced fiscal dependence on proprietary software licences.',
        'Analytical capability enabled directly on local teams across the care network.',
        'Architecture actively transferred to the regional community through LatinR (2021, 2024, 2025 and 2026) and the international useR! 2022 conference.',
      ],
    },
    stack: ['DuckDB', 'Apache Parquet', 'R', 'Quarto', 'Shiny', 'Python', 'Git', 'Linux'],
  },
];

/** The seven strategic programmes of the 2026 ministry office. */
export const STRATEGIC_PROGRAMME = {
  title: {
    es: 'Oficina de Inteligencia y Gestión Estratégica en Salud',
    en: 'Office of Intelligence and Strategic Health Management',
  } satisfies I18n<string>,
  since: {
    es: 'Desde septiembre de 2026',
    en: 'Since September 2026',
  } satisfies I18n<string>,
  intro: {
    es: 'Desde el 1 de septiembre de 2026 integro el nuevo departamento radicado en la Oficina de Inteligencia y Gestión Estratégica en Salud del Ministerio de Salud de Chile. La oficina centraliza el trabajo técnico de un equipo multidisciplinario de 45 profesionales en torno a siete proyectos estratégicos de modernización sectorial, con la interoperabilidad sanitaria del país como meta al año 2030.',
    en: 'Since 1 September 2026 I have been part of the new department within the Office of Intelligence and Strategic Health Management at the Chilean Ministry of Health. The office concentrates the technical work of a 45-strong multidisciplinary team around seven strategic modernisation programmes, with national health interoperability as the target for 2030.',
  } satisfies I18n<string>,
  projects: [
    {
      title: { es: 'Receta Digital Nacional', en: 'National Digital Prescription' },
      body: {
        es: 'Normalización y digitalización integral del flujo de emisión y despacho de fármacos.',
        en: 'Standardising and fully digitising the prescription and dispensing flow for medicines.',
      },
    },
    {
      title: { es: 'Historia Clínica Compartida e Interoperabilidad', en: 'Shared Clinical Record and Interoperability' },
      body: {
        es: 'Plataforma para que el historial clínico de cada persona acompañe de forma segura su recorrido por la red asistencial pública y privada.',
        en: 'A platform so each person’s clinical history follows them securely across the public and private care network.',
      },
    },
    {
      title: { es: 'Transformación Digital de Listas de Espera', en: 'Digital Transformation of Waiting Lists' },
      body: {
        es: 'Uso intensivo de herramientas analíticas, optimización de flujos e inteligencia artificial para descongestionar la demanda de consultas y cirugías.',
        en: 'Intensive use of analytics, flow optimisation and artificial intelligence to relieve demand for appointments and surgery.',
      },
    },
    {
      title: { es: 'Nuevo Sistema Nacional de Inmunizaciones', en: 'New National Immunisation System' },
      body: {
        es: 'Registro digital unificado y trazabilidad continua del plan nacional de vacunas.',
        en: 'A unified digital registry with continuous traceability for the national vaccination plan.',
      },
    },
    {
      title: { es: 'Mapa Sanitario', en: 'Health Map' },
      body: {
        es: 'Plataforma de geointeligencia y estructuración de la oferta y capacidad de la red asistencial.',
        en: 'A geo-intelligence platform structuring the supply and capacity of the care network.',
      },
    },
    {
      title: { es: 'Trazabilidad de Medicamentos', en: 'Medicine Traceability' },
      body: {
        es: 'Monitorización de la cadena de suministro, almacenamiento y dispensación de medicamentos en los establecimientos de salud.',
        en: 'Monitoring the supply, storage and dispensing chain for medicines across health facilities.',
      },
    },
    {
      title: { es: 'Portal Ciudadano de Salud Digital', en: 'Citizen Digital Health Portal' },
      body: {
        es: 'Interfaz unificada de acceso del paciente a su información médica, citas y trámites en el sistema público.',
        en: 'A unified interface giving patients access to their medical information, appointments and administrative processes in the public system.',
      },
    },
  ],
} as const;
