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
  /** The shape of the system, stage by stage. Rendered as a flow. */
  architecture?: { stage: I18n<string>; detail: I18n<string> }[];
  /** Public repository, when the code is open. */
  repo?: string;
  /** Published evaluation results, rendered as a table when present. */
  metrics?: {
    param: I18n<string>;
    value: I18n<string>;
    implication: I18n<string>;
  }[];
  stack: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 'oncologia-hph',
    architecture: [
      {
        stage: { es: 'Ingreso', en: 'Intake' },
        detail: {
          es: 'Sospecha oncológica derivada desde atención primaria o urgencia.',
          en: 'Cancer suspicion referred from primary care or the emergency department.',
        },
      },
      {
        stage: { es: 'Identificación', en: 'Flagging' },
        detail: {
          es: 'Etiqueta adhesiva fluorescente sobre la ficha y la derivación de papel: la marca viaja con el documento por todos los puntos administrativos.',
          en: 'A fluorescent sticker on the chart and the paper referral: the flag travels with the document through every administrative handoff.',
        },
      },
      {
        stage: { es: 'Registro', en: 'Registration' },
        detail: {
          es: 'Ingreso a la planilla de trazabilidad con un gestor de casos clínicos asignado y nominado.',
          en: 'Entry into the traceability sheet with a named clinical case manager assigned.',
        },
      },
      {
        stage: { es: 'Seguimiento', en: 'Follow-up' },
        detail: {
          es: 'Contacto activo en cada hito: primera consulta, confirmación diagnóstica, comité oncológico y definición terapéutica.',
          en: 'Active contact at each milestone: first appointment, diagnostic confirmation, tumour board and treatment decision.',
        },
      },
      {
        stage: { es: 'Escalamiento', en: 'Escalation' },
        detail: {
          es: 'Alerta a la dirección del establecimiento ante riesgo de incumplimiento del plazo GES, antes de que venza.',
          en: 'Alert to hospital management when a GES deadline is at risk, before it expires.',
        },
      },
      {
        stage: { es: 'Salida', en: 'Exit' },
        detail: {
          es: 'Tratamiento, o derivación temprana a cuidados paliativos y alivio del dolor.',
          en: 'Treatment, or early referral to palliative care and pain relief.',
        },
      },
    ],
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
      es: 'Rediseño de procesos sin una sola licencia de software, que llevó a un hospital público al Top 5 nacional en gestión oncológica.',
      en: 'A process redesign without a single software licence, which took a public hospital into the national Top 5 for cancer management.',
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
    architecture: [
      {
        stage: { es: 'Fuente', en: 'Source' },
        detail: {
          es: 'Registro Nacional de Listas de Espera, decenas de millones de transacciones asistenciales.',
          en: 'National Waiting List Registry, tens of millions of care transactions.',
        },
      },
      {
        stage: { es: 'Agregación', en: 'Aggregation' },
        detail: {
          es: 'La unidad de análisis no es el registro sino la serie temporal de cada establecimiento por tipo de prestación.',
          en: 'The unit of analysis is not the record but each facility’s time series by service type.',
        },
      },
      {
        stage: { es: 'Ejes', en: 'Axes' },
        detail: {
          es: 'Cuatro señales en paralelo: volumen de ingresos y egresos, permanencia frente a umbrales esperados, variabilidad contra establecimientos comparables, y evolución de las justificaciones de egreso.',
          en: 'Four signals in parallel: entry and exit volume, time on list against expected thresholds, variance against comparable facilities, and the trajectory of discharge justifications.',
        },
      },
      {
        stage: { es: 'Puntuación', en: 'Scoring' },
        detail: {
          es: 'Score de riesgo por establecimiento y tipo de prestación, no por registro individual.',
          en: 'A risk score per facility and service type, not per individual record.',
        },
      },
      {
        stage: { es: 'Entrega', en: 'Delivery' },
        detail: {
          es: 'Dos salidas según destinatario: planilla de fiscalización para el nivel central y reportes HTML interactivos para las contrapartes hospitalarias.',
          en: 'Two outputs by audience: a compliance spreadsheet for the central level and interactive HTML reports for hospital counterparts.',
        },
      },
    ],
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
        'Cálculo de puntajes de riesgo por establecimiento y tipo de prestación, no sobre registros sueltos: lo que se modela es el comportamiento de cada establecimiento a lo largo del tiempo.',
        'Salida en dos formatos según el destinatario: una planilla de fiscalización para el nivel central y reportes HTML interactivos para las contrapartes hospitalarias, que necesitan explorar sus propios casos.',
      ],
      en: [
        'A methodological inversion of classic classification: the architecture does not look for repeated patterns or typical behaviour, but for operational irregularities and multidimensional outliers.',
        'Continuous monitoring across four axes: dynamic volume of entries and exits; time-in-list distributions against expected biological and administrative thresholds; productivity variance between comparable services and specialties; and the historical trajectory of discharge justifications.',
        'Risk scores computed per facility and service type rather than per record: what gets modelled is each facility’s behaviour over time.',
        'Output in two formats depending on the audience: a compliance spreadsheet for the central level, and interactive HTML reports for hospital counterparts, who need to explore their own cases.',
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
    architecture: [
      {
        stage: { es: 'Extracción', en: 'Extraction' },
        detail: {
          es: 'Corte de la lista de espera quirúrgica nacional desde el almacén por capas, a Parquet consultado con DuckDB: ~475.000 diagnósticos.',
          en: 'A cut of the national surgical waiting list from the layered warehouse into Parquet, queried with DuckDB: ~475,000 diagnoses.',
        },
      },
      {
        stage: { es: 'Filtrado determinista', en: 'Deterministic filtering' },
        detail: {
          es: 'Expresiones regulares clínicas y mapeo ontológico sobre CIE-10 capturan los criterios inequívocos antes de que intervenga cualquier modelo.',
          en: 'Clinical regular expressions and ontological mapping over ICD-10 capture unambiguous criteria before any model is involved.',
        },
      },
      {
        stage: { es: 'Vectorización', en: 'Vectorisation' },
        detail: {
          es: 'Embeddings del texto libre contra centroides de diagnósticos oncológicos confirmados. El hash del texto normalizado sirve de llave de caché, así que solo se vectoriza lo nuevo.',
          en: 'Embeddings of the free text against centroids of confirmed cancer diagnoses. The normalised text’s hash is the cache key, so only new text is vectorised.',
        },
      },
      {
        stage: { es: 'Clasificación', en: 'Classification' },
        detail: {
          es: 'Ensamble de árboles con potenciación de gradiente; el umbral se recalibra con el índice de Youden en cada reentrenamiento.',
          en: 'A gradient-boosted tree ensemble; the threshold is recalibrated with the Youden index on every retraining.',
        },
      },
      {
        stage: { es: 'Decisión', en: 'Decision' },
        detail: {
          es: 'Tres estados. Sospechoso e indeterminado se derivan de forma obligatoria a auditoría clínica médica; el modelo no cierra casos.',
          en: 'Three states. Suspicious and indeterminate are mandatorily routed to medical clinical audit; the model closes nothing.',
        },
      },
      {
        stage: { es: 'Entrega', en: 'Delivery' },
        detail: {
          es: 'Corte mensual oficial y auditable, más un canal preliminar semanal sobre la base transaccional que adelanta los casos con ~7 días de rezago.',
          en: 'An official, auditable monthly cut, plus a weekly preliminary channel over the transactional base surfacing cases with about 7 days of lag.',
        },
      },
    ],
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
      es: 'Clasificador oncológico de la lista de espera quirúrgica nacional',
      en: 'Cancer classifier for the national surgical waiting list',
    },
    tagline: {
      es: 'NLP, embeddings y árboles de gradiente para rescatar sospechas de cáncer mal clasificadas como cirugía electiva. 91,6 % de sensibilidad sobre 15.032 casos validados clínicamente.',
      en: 'NLP, embeddings and gradient-boosted trees to rescue cancer suspicions misfiled as elective surgery. 91.6 % sensitivity over 15,032 clinically validated cases.',
    },
    context: {
      es: 'Los pacientes con sospecha o evidencia de patología oncológica quedan clasificados en la lista de espera como cirugías generales o electivas no priorizadas, y pierden la prioridad que les corresponde. El sistema cubre por diseño los cánceres sin garantía explícita —melanoma, sarcomas, cabeza y cuello, esófago, páncreas, hepatobiliar, sistema nervioso central, endometrio—, porque los dieciséis cánceres GES ya tienen una vía garantizada propia. Son justamente los que nadie estaba contando.',
      en: 'Patients with suspected or evident cancer sit in the waiting list classified as general or non-prioritised elective surgery, losing the priority they are entitled to. The system covers, by design, cancers without an explicit guarantee — melanoma, sarcomas, head and neck, oesophagus, pancreas, hepatobiliary, central nervous system, endometrium — because the sixteen GES cancers already have their own guaranteed pathway. Those are precisely the ones nobody was counting.',
    },
    approach: {
      es: [
        'Reglas de filtrado clínico y ontologías: expresiones regulares complejas y mapeo ontológico sobre códigos diagnósticos CIE-10 para capturar criterios deterministas directos en el texto libre de la derivación.',
        'Vectorización semántica: modelos de incrustaciones textuales (embeddings) que transforman las hipótesis diagnósticas libres en representaciones vectoriales densas, midiendo distancias de similitud contra centroides de diagnósticos oncológicos confirmados.',
        'Clasificación predictiva por ensamble: árboles de decisión con potenciación de gradiente, calibrados para procesar las descripciones ambiguas o abreviadas que efectivamente escribe la red asistencial. Los umbrales se recalibran con el índice de Youden en cada ciclo de reentrenamiento.',
        'Capa de decisión con supervisión humana: cada interconsulta se etiqueta como sospechosa, no sospechosa o indeterminada. Los casos sospechosos e indeterminados se desvían de forma obligatoria a auditoría clínica médica. El algoritmo apoya el triaje; nunca ejecuta desestimaciones autónomas.',
        'Dos canales de entrega: el corte mensual oficial produce la etiqueta auditable que usa la red para priorizar, y un canal preliminar semanal sobre la base transaccional adelanta los casos que el corte oficial todavía no etiquetó, bajando el rezago de unos 45 días a unos 7.',
        'Caché de inferencia por hash: el texto libre se normaliza y su hash sirve de llave, de modo que el pipeline solo vectoriza lo que no ha visto nunca. El coste de cada corrida pasa a ser proporcional a la información nueva, no al tamaño de la tabla, y un texto idéntico siempre resuelve al mismo vector, lo que hace las corridas comparables entre sí.',
        'Gobernanza del modelo como parte del sistema, no como anexo: evaluación de impacto en protección de datos, auditoría de equidad, documentación de transparencia algorítmica y respuesta formal a las consultas del Consejo para la Transparencia.',
      ],
      en: [
        'Clinical filtering rules and ontologies: complex regular expressions and ontological mapping over ICD-10 diagnostic codes, capturing direct deterministic criteria in the free text of each referral.',
        'Semantic vectorisation: text embedding models turn free-form diagnostic hypotheses into dense vector representations, measured by similarity distance against centroids of confirmed cancer diagnoses.',
        'Ensemble predictive classification: gradient-boosted decision trees, calibrated for the ambiguous or abbreviated descriptions the care network actually writes. Thresholds are recalibrated with the Youden index on every retraining cycle.',
        'A decision layer with human oversight: every referral is labelled suspicious, not suspicious or indeterminate. Suspicious and indeterminate cases are mandatorily routed to medical clinical audit. The algorithm supports triage; it never dismisses a case autonomously.',
        'Two delivery channels: the official monthly cut produces the auditable label the network uses to prioritise, while a weekly preliminary channel over the transactional base surfaces cases the official cut has not labelled yet, cutting the lag from around 45 days to about 7.',
        'Hash-keyed inference cache: free text is normalised and its hash used as the key, so the pipeline only vectorises what it has never seen. Each run costs in proportion to new information rather than table size, and identical text always resolves to the same vector, which makes runs comparable.',
        'Model governance built into the system rather than bolted on: data protection impact assessment, equity audit, algorithmic transparency documentation and formal responses to the Council for Transparency.',
      ],
    },
    outcome: {
      es: [
        'Clasifica alrededor de 475.000 diagnósticos de la lista de espera quirúrgica nacional en cada corte.',
        'Evaluado sobre 15.032 casos validados individualmente por especialistas clínicos: sensibilidad 91,6 %, especificidad 97,9 %, precisión (VPP) 82,8 % y valor predictivo negativo 99,0 %.',
        'La etiqueta es oficial y auditable: es la que usa la red asistencial para priorizar los casos con indicios oncológicos.',
        'Validación mensual contra el criterio de los Servicios de Salud, con nueve reportes por servicio, tiempos de espera por etapa oncológica e indicador de cirugía oncológica en 90 días o menos.',
        'El circuito no termina en la clasificación: el contraste semanal contra la validación de cada servicio identifica registros mal consignados y gestiona su corrección en origen, con los referentes y equipos clínicos.',
      ],
      en: [
        'Classifies roughly 475,000 diagnoses from the national surgical waiting list on every cut.',
        'Evaluated on 15,032 cases individually validated by clinical specialists: 91.6 % sensitivity, 97.9 % specificity, 82.8 % precision (PPV) and 99.0 % negative predictive value.',
        'The label is official and auditable: it is what the care network uses to prioritise cases with cancer indications.',
        'Monthly validation against the Health Services’ own criteria, with nine reports per service, waiting times by cancer stage and the indicator for cancer surgery within 90 days.',
        'The loop does not end at classification: weekly comparison against each service’s validation surfaces miscoded records and drives their correction at source, with the clinical leads of each service.',
      ],
    },
    metrics: [
      {
        param: { es: 'Sensibilidad', en: 'Sensitivity' },
        value: { es: '91,6 %', en: '91.6 %' },
        implication: {
          es: 'Alta capacidad de rescate de patologías neoplásicas encubiertas en la demanda no priorizada.',
          en: 'High recovery rate for cancer hidden inside non-prioritised demand.',
        },
      },
      {
        param: { es: 'Especificidad', en: 'Specificity' },
        value: { es: '97,9 %', en: '97.9 %' },
        implication: {
          es: 'Mínima interferencia y bajo porcentaje de sobrediagnóstico sobre las rutas quirúrgicas electivas.',
          en: 'Minimal interference and a low over-diagnosis rate on elective surgical pathways.',
        },
      },
      {
        param: { es: 'Precisión (VPP)', en: 'Precision (PPV)' },
        value: { es: '82,8 %', en: '82.8 %' },
        implication: {
          es: 'Confiabilidad operativa para el equipo médico de auditoría que evalúa las alertas emitidas.',
          en: 'Operational reliability for the medical audit team reviewing the alerts raised.',
        },
      },
      {
        param: { es: 'Valor predictivo negativo', en: 'Negative predictive value' },
        value: { es: '99,0 %', en: '99.0 %' },
        implication: {
          es: 'Certeza analítica para descartar criterios de alarma oncológica en el lote evaluado.',
          en: 'Analytical confidence when ruling out cancer alarm criteria in the evaluated batch.',
        },
      },
      {
        param: { es: 'Registro de validación', en: 'Validation record' },
        value: { es: '15.032 casos', en: '15,032 cases' },
        implication: {
          es: 'Cohorte validada clínicamente mediante revisión experta individualizada.',
          en: 'Cohort clinically validated through individual expert review.',
        },
      },
      {
        param: { es: 'Frecuencia de ejecución', en: 'Run frequency' },
        value: { es: 'Semanal (desde 2025)', en: 'Weekly (since 2025)' },
        implication: {
          es: 'Trazabilidad regular e integrada en los sistemas de gestión de la demanda quirúrgica.',
          en: 'Regular traceability, integrated into surgical demand management systems.',
        },
      },
    ],
    stack: ['NLP', 'Embeddings', 'Gradient boosting', 'XGBoost', 'CIE-10', 'Índice de Youden', 'Caché por hash', 'Human-in-the-loop'],
  },
  {
    id: 'topografia-cieo3',
    architecture: [
      {
        stage: { es: 'Entrada', en: 'Input' },
        detail: {
          es: 'Los casos que el clasificador marcó como sospechosos, en la misma corrida.',
          en: 'The cases the classifier flagged as suspicious, in the same run.',
        },
      },
      {
        stage: { es: 'Modelo', en: 'Model' },
        detail: {
          es: 'Llama 3.1 8B afinado con QLoRA: cuantización de cuatro bits más adaptadores de bajo rango, de modo que entrenamiento e inferencia caben en una sola GPU.',
          en: 'Llama 3.1 8B fine-tuned with QLoRA: four-bit quantisation plus low-rank adapters, so training and inference fit on a single GPU.',
        },
      },
      {
        stage: { es: 'Despliegue', en: 'Serving' },
        detail: {
          es: 'Servido con Ollama dentro de la infraestructura ministerial. El texto clínico no sale hacia ninguna API externa.',
          en: 'Served with Ollama inside ministry infrastructure. Clinical text never reaches an external API.',
        },
      },
      {
        stage: { es: 'Normalización', en: 'Normalisation' },
        detail: {
          es: 'La salida se mapea a códigos de topografía CIE-O3, el estándar con que se codifican los registros de cáncer.',
          en: 'Output is mapped to ICD-O3 topography codes, the standard cancer registries are coded in.',
        },
      },
    ],
    featured: true,
    period: '2025–2026',
    org: {
      es: 'Ministerio de Salud de Chile',
      en: 'Chilean Ministry of Health',
    },
    role: {
      es: 'Afinamiento y despliegue del modelo',
      en: 'Model fine-tuning and deployment',
    },
    title: {
      es: 'Extracción de topografía tumoral con un modelo de lenguaje afinado',
      en: 'Tumour topography extraction with a fine-tuned language model',
    },
    tagline: {
      es: 'Llama 3.1 8B afinado con QLoRA para identificar el órgano afectado en cada sospecha oncológica y mapearlo a CIE-O3. 93,3 % de acierto a nivel de grupo topográfico.',
      en: 'Llama 3.1 8B fine-tuned with QLoRA to identify the affected organ in each cancer suspicion and map it to ICD-O3. 93.3 % accuracy at topographic group level.',
    },
    context: {
      es: 'El clasificador dice si hay sospecha oncológica, pero no de qué. Sin el órgano afectado, la sospecha no se puede priorizar clínicamente ni comparar entre servicios, y el texto libre de las derivaciones no usa ningún vocabulario controlado: el mismo tumor aparece escrito de veinte maneras distintas, abreviado y con faltas.',
      en: 'The classifier says whether there is a cancer suspicion, but not of what. Without the affected organ, a suspicion cannot be clinically prioritised or compared across services, and the free text of referrals uses no controlled vocabulary: the same tumour appears written twenty different ways, abbreviated and misspelled.',
    },
    approach: {
      es: [
        'Afinamiento de Llama 3.1 8B con QLoRA —cuantización de cuatro bits más adaptadores de bajo rango— de modo que el entrenamiento cabe en una sola GPU en lugar de requerir infraestructura de entrenamiento completa.',
        'Mapeo de la salida a la Clasificación Internacional de Enfermedades para Oncología (CIE-O3), que es el estándar con el que se codifican los registros de cáncer, y no a una taxonomía inventada para el proyecto.',
        'Servido localmente con Ollama: el texto clínico nunca sale de la infraestructura ministerial hacia una API de terceros, que es la condición para poder usarlo sobre datos de pacientes.',
        'Encadenado al clasificador de sospecha, de modo que cada caso sospechoso recibe además el órgano probable en la misma corrida.',
      ],
      en: [
        'Llama 3.1 8B fine-tuned with QLoRA — four-bit quantisation plus low-rank adapters — so training fits on a single GPU instead of requiring full training infrastructure.',
        'Output mapped to the International Classification of Diseases for Oncology (ICD-O3), the standard cancer registries are actually coded in, rather than a taxonomy invented for the project.',
        'Served locally with Ollama: clinical text never leaves ministry infrastructure for a third-party API, which is the precondition for using it on patient data at all.',
        'Chained to the suspicion classifier, so every suspicious case also gets its likely organ in the same run.',
      ],
    },
    outcome: {
      es: [
        '93,3 % de acierto a nivel de grupo topográfico C## de la CIE-O3.',
        'La sospecha deja de ser una etiqueta binaria y pasa a ser accionable clínicamente: se puede derivar a la especialidad correcta.',
        'Precedente de afinamiento de un modelo abierto dentro del Estado, sin enviar texto clínico a servicios externos.',
      ],
      en: [
        '93.3 % accuracy at the ICD-O3 C## topographic group level.',
        'Suspicion stops being a binary label and becomes clinically actionable: cases can be routed to the right specialty.',
        'A precedent for fine-tuning an open model inside government, with no clinical text sent to external services.',
      ],
    },
    stack: ['Llama 3.1 8B', 'QLoRA', 'Fine-tuning', 'Ollama', 'CIE-O3', 'Python'],
  },
  {
    id: 'proyector-listas-espera',
    architecture: [
      {
        stage: { es: 'Entrada', en: 'Input' },
        detail: {
          es: 'Serie histórica de cortes mensuales, desagregada por Servicio de Salud.',
          en: 'Historical series of monthly cuts, broken down by Health Service.',
        },
      },
      {
        stage: { es: 'Modelo', en: 'Model' },
        detail: {
          es: 'Ingresos y egresos se modelan por separado, con su estacionalidad propia: el stock es el resultado, no la variable.',
          en: 'Entries and exits are modelled separately, each with its own seasonality: the stock is the result, not the variable.',
        },
      },
      {
        stage: { es: 'Calibración', en: 'Calibration' },
        detail: {
          es: 'Un ajuste por Servicio de Salud en lugar de un modelo nacional único, porque las dinámicas territoriales no son comparables.',
          en: 'One fit per Health Service instead of a single national model, because territorial dynamics are not comparable.',
        },
      },
      {
        stage: { es: 'Verificación', en: 'Verification' },
        detail: {
          es: 'Backtest sobre cortes históricos y una auditoría adversarial de 30 chequeos diseñada para romper el modelo.',
          en: 'Backtesting over historical cuts and a 30-check adversarial audit designed to break the model.',
        },
      },
      {
        stage: { es: 'Salida', en: 'Output' },
        detail: {
          es: 'Simulador en el navegador donde quien decide mueve supuestos de capacidad y política de asignación.',
          en: 'An in-browser simulator where the decision-maker moves capacity and allocation-policy assumptions.',
        },
      },
    ],
    featured: false,
    period: '2025–2026',
    org: {
      es: 'Ministerio de Salud de Chile',
      en: 'Chilean Ministry of Health',
    },
    role: {
      es: 'Modelamiento, calibración y simulador',
      en: 'Modelling, calibration and simulator',
    },
    title: {
      es: 'Proyector y simulador de listas de espera',
      en: 'Waiting list projection model and simulator',
    },
    tagline: {
      es: 'Proyección calibrada por Servicio de Salud, con backtest y una auditoría adversarial de 30 chequeos, más un simulador para explorar escenarios de capacidad y política de asignación.',
      en: 'Projection calibrated per Health Service, with backtesting and a 30-check adversarial audit, plus a simulator for exploring capacity and allocation-policy scenarios.',
    },
    context: {
      es: 'Las decisiones sobre capacidad quirúrgica y asignación presupuestaria se toman mirando el stock actual de la lista, que solo describe el pasado. Proyectar exige modelar por separado los ingresos, los egresos y sus estacionalidades, y esas dinámicas difieren demasiado entre territorios como para que un único modelo nacional sirva.',
      en: 'Decisions on surgical capacity and budget allocation are made looking at the current stock of the list, which only describes the past. Projecting requires modelling entries, exits and their seasonality separately, and those dynamics differ too much between territories for a single national model to be useful.',
    },
    approach: {
      es: [
        'Calibración por Servicio de Salud en lugar de un modelo nacional único, porque las dinámicas de ingreso y egreso no son comparables entre territorios.',
        'Backtest sobre cortes históricos para medir el error de proyección contra lo que efectivamente ocurrió, en vez de reportar solo el ajuste dentro de muestra.',
        'Auditoría adversarial de 30 chequeos, diseñada explícitamente para intentar romper el modelo antes de que lo haga la realidad.',
        'Simulador en el navegador que permite a quien decide mover supuestos de capacidad y política de asignación y ver el efecto, sin intermediación analítica.',
      ],
      en: [
        'Calibration per Health Service instead of a single national model, because entry and exit dynamics are not comparable across territories.',
        'Backtesting over historical cuts to measure projection error against what actually happened, rather than reporting only in-sample fit.',
        'A 30-check adversarial audit, explicitly designed to try to break the model before reality does.',
        'An in-browser simulator letting decision-makers move capacity and allocation-policy assumptions and see the effect, with no analyst in the loop.',
      ],
    },
    outcome: {
      es: [
        'Traslada la conversación desde el stock actual hacia la trayectoria esperada de la lista.',
        'El simulador pone el modelo directamente en manos de quien toma la decisión, que es donde los supuestos se discuten de verdad.',
      ],
      en: [
        'Moves the conversation from the current stock to the list’s expected trajectory.',
        'The simulator puts the model directly in the hands of the decision-maker, which is where the assumptions actually get argued.',
      ],
    },
    stack: ['R', 'Backtesting', 'Simulación', 'JavaScript'],
  },
  {
    id: 'anonimizacion',
    architecture: [
      {
        stage: { es: 'Clasificación de campos', en: 'Field classification' },
        detail: {
          es: 'Cada columna se declara como identificador directo, cuasi-identificador o atributo sensible. En salud el atributo sensible es el diagnóstico.',
          en: 'Each column is declared a direct identifier, a quasi-identifier or a sensitive attribute. In health the sensitive attribute is the diagnosis.',
        },
      },
      {
        stage: { es: 'Generalización', en: 'Generalisation' },
        detail: {
          es: 'Degradación iterativa de niveles sobre los cuasi-identificadores, un paso a la vez, en lugar de una pasada única que generaliza de más.',
          en: 'Iterative level degradation over the quasi-identifiers, one step at a time, instead of a single pass that over-generalises.',
        },
      },
      {
        stage: { es: 'Verificación', en: 'Verification' },
        detail: {
          es: 'Se comprueba k sobre cada clase de equivalencia y l sobre la diversidad del atributo sensible dentro de cada clase.',
          en: 'k is checked over each equivalence class and l over the diversity of the sensitive attribute within each class.',
        },
      },
      {
        stage: { es: 'Compuerta', en: 'Gate' },
        detail: {
          es: 'Si la salida no alcanza el umbral, no se exporta. La decisión es del código, no del criterio de quien entrega.',
          en: 'If the output does not reach the threshold, it is not exported. The decision belongs to the code, not to the judgement of whoever releases it.',
        },
      },
    ],
    featured: false,
    period: '2024–2026',
    org: {
      es: 'Ministerio de Salud de Chile',
      en: 'Chilean Ministry of Health',
    },
    role: {
      es: 'Diseño e implementación de la librería',
      en: 'Library design and implementation',
    },
    title: {
      es: 'Anonimización de datos clínicos con k-anonimidad y l-diversidad',
      en: 'Clinical data anonymisation with k-anonymity and l-diversity',
    },
    tagline: {
      es: 'Librería en R que implementa la norma técnica ministerial para liberar bases de lista de espera sin abrir la puerta a la reidentificación.',
      en: 'An R library implementing the ministry technical standard, so waiting-list data can be released without opening the door to re-identification.',
    },
    context: {
      es: 'Las solicitudes de transparencia y la publicación de datos abiertos obligan a entregar bases reales. Quitar el identificador no basta: la combinación de edad, comuna, especialidad y fecha basta para reidentificar a una persona en cualquier grupo pequeño, y en salud el atributo sensible es el diagnóstico.',
      en: 'Freedom-of-information requests and open data publication require releasing real datasets. Removing the identifier is not enough: age, municipality, specialty and date together are enough to re-identify someone in any small group, and in health the sensitive attribute is the diagnosis itself.',
    },
    approach: {
      es: [
        'Implementación de k-anonimidad y l-diversidad, dos modelos formales de privacidad: cada combinación de cuasi-identificadores debe repetirse al menos k veces, y cada grupo debe contener al menos l valores distintos del atributo sensible.',
        'Degradación iterativa de los niveles de generalización hasta alcanzar el umbral, en lugar de una sola pasada que generaliza de más y destruye la utilidad del dato.',
        'Verificación de la salida antes de exportar: si la base no cumple el umbral, no se entrega.',
        'Incluye una propuesta de ajuste a la norma técnica ministerial, escrita desde la implementación y no desde la teoría.',
      ],
      en: [
        'Implementation of k-anonymity and l-diversity, two formal privacy models: each combination of quasi-identifiers must appear at least k times, and each group must contain at least l distinct values of the sensitive attribute.',
        'Iterative degradation of generalisation levels until the threshold is met, instead of a single pass that over-generalises and destroys the data’s usefulness.',
        'Output verification before export: if the dataset does not meet the threshold, it is not released.',
        'Includes a proposed amendment to the ministry technical standard, written from the implementation rather than from theory.',
      ],
    },
    outcome: {
      es: [
        'Librería base publicada como repositorio abierto, reutilizable por cualquier institución sujeta a la misma norma.',
        'Sostiene las entregas de transparencia sobre bases de lista de espera, con un criterio explícito y verificable en vez de un juicio caso a caso.',
      ],
      en: [
        'Base library published as an open repository, reusable by any institution subject to the same standard.',
        'Underpins transparency releases over waiting-list data, with an explicit and checkable criterion instead of a case-by-case judgement call.',
      ],
    },
    repo: 'https://github.com/paulovillarroel/anonimizacion-datos',
    stack: ['R', 'k-anonimidad', 'l-diversidad'],
  },
  {
    id: 'record-linkage',
    architecture: [
      {
        stage: { es: 'Fuente', en: 'Source' },
        detail: {
          es: '2,1 millones de registros con múltiples llaves identificatorias por persona.',
          en: '2.1 million records with multiple identifying keys per person.',
        },
      },
      {
        stage: { es: 'Motor', en: 'Engine' },
        detail: {
          es: 'Splink sobre DuckDB, en proceso: la comparación por bloques corre en el mismo equipo, sin clúster.',
          en: 'Splink over DuckDB, in-process: blocked comparison runs on the same machine, with no cluster.',
        },
      },
      {
        stage: { es: 'Comparación', en: 'Comparison' },
        detail: {
          es: 'Similitud de Jaro-Winkler sobre nombre, fecha de nacimiento, sexo y domicilio, ponderada bajo el marco de Fellegi-Sunter.',
          en: 'Jaro-Winkler similarity over name, date of birth, sex and address, weighted under the Fellegi-Sunter framework.',
        },
      },
      {
        stage: { es: 'Selección de modelo', en: 'Model selection' },
        detail: {
          es: 'Se entrenan 40 configuraciones candidatas y se retiene la que separa más limpiamente coincidencias de no coincidencias, medido con el dip de Hartigan sobre la distribución de puntajes.',
          en: '40 candidate configurations are trained and the one that separates matches from non-matches most cleanly is kept, measured with Hartigan’s dip test over the score distribution.',
        },
      },
      {
        stage: { es: 'Salida', en: 'Output' },
        detail: {
          es: 'Identidades unificadas que corrigen el conteo de demanda quirúrgica real.',
          en: 'Unified identities that correct the count of real surgical demand.',
        },
      },
    ],
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
        'Vinculación probabilística de registros bajo el marco de Fellegi-Sunter, implementada con Splink sobre DuckDB, para resolver 2,1 millones de registros sin salir de un equipo convencional.',
        'Comparación de nombres, fechas de nacimiento, sexo y domicilios con métricas de distancia léxica —similitudes de Jaro-Winkler— combinadas con la ponderación probabilística del marco.',
        'Selección de modelo por búsqueda: se entrenan 40 configuraciones candidatas y se retiene la que produce la separación más limpia entre coincidencias y no coincidencias, medida con el dip de Hartigan sobre la distribución de puntajes.',
      ],
      en: [
        'Probabilistic record linkage under the Fellegi-Sunter framework, implemented with Splink over DuckDB, resolving 2.1 million records without leaving an ordinary workstation.',
        'Names, dates of birth, sex and addresses compared with lexical distance metrics — Jaro-Winkler similarity — combined with the framework’s probabilistic weighting.',
        'Model selection by search: 40 candidate configurations are trained and the one producing the cleanest separation between matches and non-matches is retained, measured with Hartigan’s dip test over the score distribution.',
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
    stack: ['Record linkage', 'Fellegi-Sunter', 'Splink', 'DuckDB', 'Jaro-Winkler', 'Dip de Hartigan', 'Python'],
  },
  {
    id: 'arquitectura-analitica',
    architecture: [
      {
        stage: { es: 'Almacenamiento', en: 'Storage' },
        detail: {
          es: 'Formato columnar Apache Parquet sobre almacenamiento compartido, en lugar de una base servida.',
          en: 'Apache Parquet columnar files on shared storage, instead of a served database.',
        },
      },
      {
        stage: { es: 'Motor', en: 'Engine' },
        detail: {
          es: 'DuckDB en proceso, corriendo en el propio equipo del analista: decenas de millones de filas sin clúster ni servidor.',
          en: 'DuckDB in-process, running on the analyst’s own machine: tens of millions of rows with no cluster and no server.',
        },
      },
      {
        stage: { es: 'Capas y compuerta', en: 'Layers and gate' },
        detail: {
          es: 'Capa cruda y capa transformada, con pruebas de calidad Pointblank entre ambas. Lo que no pasa las pruebas no se publica y vuelve al establecimiento de origen.',
          en: 'A raw layer and a transformed layer, with Pointblank quality tests between them. What fails the tests is not published and goes back to the originating facility.',
        },
      },
      {
        stage: { es: 'Ejecución', en: 'Execution' },
        detail: {
          es: 'Un script de arranque único por proyecto, con la fecha de corte como parámetro, orquestado por Kestra sobre Docker.',
          en: 'A single entry script per project, with the cut-off date as a parameter, orchestrated by Kestra on Docker.',
        },
      },
      {
        stage: { es: 'Exploración', en: 'Exploration' },
        detail: {
          es: 'DuckDB compilado a WebAssembly consulta los mismos Parquet desde el navegador, sin backend que levantar ni base que exponer.',
          en: 'DuckDB compiled to WebAssembly queries the same Parquet from the browser, with no backend to stand up and no database to expose.',
        },
      },
      {
        stage: { es: 'Trazabilidad', en: 'Traceability' },
        detail: {
          es: 'Git y GitHub Flow con revisión de pull requests: cada cambio de criterio queda fechado y atribuido.',
          en: 'Git and GitHub Flow with pull-request review: every change of criteria is dated and attributed.',
        },
      },
    ],
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
      es: 'Arquitectura analítica sobre tecnologías abiertas',
      en: 'Analytics architecture on open technology',
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
        'Prácticas de ingeniería de software dentro de dependencias gubernamentales: Git, GitHub Flow con revisión de pull requests, Bash, entornos Linux y repositorios versionados, garantizando la reproducibilidad metodológica y la auditabilidad formal de las estimaciones ministeriales.',
        'Un esqueleto de proyecto común para toda la unidad —estructura de carpetas, rutas configurables, script de ejecución único— de modo que cualquier repositorio se levanta y se corre igual, y las convenciones quedan escritas en vez de vivir en la cabeza de alguien.',
        'Validación de calidad del almacén como compuerta previa a la publicación: pruebas sobre la capa cruda y sobre la capa transformada con Pointblank, que derivan a los establecimientos los registros con problemas y certifican lo que sale en los reportes oficiales.',
        'Orquestación de los pipelines con Kestra sobre Docker, encadenando la ejecución de cada proyecto y el depósito de resultados sin intervención manual.',
        'Exploración interactiva sin servidor: DuckDB compilado a WebAssembly consulta archivos Parquet servidos como estáticos, de modo que el motor analítico corre en el navegador de quien consulta. No hay backend que levantar ni base de datos que exponer, en una institución donde ambas cosas cuestan meses de tramitación.',
      ],
      en: [
        'DuckDB and Apache Parquet columnar storage: a pioneering deployment of in-process OLAP engines, letting analysts query patient tables of tens of millions of rows directly on ordinary machines across the care network, with no external clusters and without exceeding RAM limits.',
        'R for statistical modelling, survival analysis and reproducible reporting with Quarto and Shiny; Python for production pipelines, natural-language vectorisation and classification model training.',
        'Software-engineering practice inside government bodies: Git, GitHub Flow with pull-request review, Bash, Linux environments and versioned repositories, guaranteeing methodological reproducibility and formal auditability of ministry estimates.',
        'A shared project skeleton across the unit — folder structure, configurable paths, a single run script — so any repository starts and runs the same way, and conventions are written down instead of living in someone’s head.',
        'Data warehouse quality validation as a gate before publication: tests over the raw and the transformed layer with Pointblank, routing problem records back to the facilities and certifying what goes into official reports.',
        'Pipeline orchestration with Kestra on Docker, chaining each project’s execution and result delivery without manual intervention.',
        'Serverless interactive exploration: DuckDB compiled to WebAssembly queries Parquet files served as static assets, so the analytical engine runs in the reader’s own browser. There is no backend to stand up and no database to expose, in an institution where either takes months of paperwork.',
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
    stack: ['DuckDB', 'DuckDB-WASM', 'Apache Parquet', 'R', 'Quarto', 'Shiny', 'Python', 'Kestra', 'Docker', 'Pointblank'],
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

export type MethodGroup = {
  title: I18n<string>;
  items: string[];
};

/**
 * The technical surface, grouped by discipline. Every entry corresponds to a
 * method used in one of the systems above, not to a familiarity list.
 */
export const METHOD_GROUPS: MethodGroup[] = [
  {
    title: {
      es: 'Inteligencia artificial y aprendizaje automático',
      en: 'Artificial intelligence and machine learning',
    },
    items: [
      'Clasificación por ensamble (gradient boosting, XGBoost)',
      'Afinamiento de modelos de lenguaje (QLoRA, Llama 3.1)',
      'Detección de anomalías multidimensional',
      'Calibración de umbrales (índice de Youden)',
      'Diseño human-in-the-loop',
      'Transparencia algorítmica y auditoría de equidad',
    ],
  },
  {
    title: {
      es: 'Procesamiento de lenguaje natural',
      en: 'Natural language processing',
    },
    items: [
      'Incrustaciones textuales y similitud semántica',
      'Extracción de entidades clínicas sobre texto libre',
      'Mapeo ontológico (CIE-10, CIE-O3)',
      'Expresiones regulares sanitarias',
      'Servido local de modelos (Ollama)',
    ],
  },
  {
    title: {
      es: 'Analítica avanzada y bioestadística',
      en: 'Advanced analytics and biostatistics',
    },
    items: [
      'Análisis de supervivencia y riesgos proporcionales',
      'Diferencias en diferencias',
      'Descomposición de desigualdad y análisis de equidad',
      'Vinculación probabilística de registros (Fellegi-Sunter, Splink)',
      'Modelos de proyección con backtest',
      'Inferencia y modelamiento estadístico',
    ],
  },
  {
    title: {
      es: 'Privacidad y gobernanza de datos',
      en: 'Privacy and data governance',
    },
    items: [
      'k-anonimidad y l-diversidad',
      'Pseudoanonimización en pipeline',
      'Evaluación de impacto en protección de datos',
      'Gobernanza bajo la Ley 21.719',
    ],
  },
  {
    title: {
      es: 'Ingeniería de datos y plataforma',
      en: 'Data engineering and platform',
    },
    items: [
      'Motores OLAP embebidos (DuckDB) sobre Apache Parquet',
      'Modelamiento de almacenes de datos por capas',
      'Pruebas de calidad de datos (Pointblank)',
      'Orquestación de pipelines (Kestra, Docker)',
      'Pipelines reproducibles en R y Python',
      'Control de versiones y revisión de código',
    ],
  },
];
