import type { I18n } from '@/i18n/config';

/**
 * Engineering cases: a concrete constraint, the decision taken, and what it
 * bought. Written so a reader can judge the reasoning, not just the outcome.
 */
export type EngineeringCase = {
  id: string;
  title: I18n<string>;
  problem: I18n<string>;
  decision: I18n<string>;
  result: I18n<string>;
  stack: string[];
};

export const ENGINEERING_CASES: EngineeringCase[] = [
  {
    id: 'duckdb-wasm-viewer',
    title: {
      es: 'Un visor de datos interactivo sin servidor, con DuckDB-WASM',
      en: 'An interactive data viewer with no server, using DuckDB-WASM',
    },
    problem: {
      es: 'Entregar exploración interactiva sobre tablas grandes dentro de una institución donde levantar un servidor implica meses de tramitación, la infraestructura central está saturada y exponer una base de datos abre una superficie de riesgo que no compensa el beneficio.',
      en: 'Delivering interactive exploration over large tables inside an institution where standing up a server takes months of paperwork, central infrastructure is saturated, and exposing a database opens a risk surface that is not worth the benefit.',
    },
    decision: {
      es: 'Mover el motor analítico al navegador: DuckDB compilado a WebAssembly consultando archivos Parquet servidos como estáticos. No hay backend, no hay base de datos que asegurar y no hay proceso que mantener; el cliente hace el trabajo.',
      en: 'Move the analytical engine into the browser: DuckDB compiled to WebAssembly, querying Parquet files served as static assets. There is no backend, no database to secure and no process to maintain; the client does the work.',
    },
    result: {
      es: 'Exploración con SQL completo sobre datos reales, distribuible como un sitio estático. El coste de infraestructura es cero y el dato nunca sale de la organización hacia un servicio de terceros.',
      en: 'Full SQL exploration over real data, distributable as a static site. Infrastructure cost is zero and the data never leaves the organisation for a third-party service.',
    },
    stack: ['DuckDB-WASM', 'Apache Parquet', 'SQL', 'WebAssembly'],
  },
  {
    id: 'hashing-inferencia',
    title: {
      es: 'Hashing de texto para no volver a inferir lo ya inferido',
      en: 'Text hashing to stop re-inferring what was already inferred',
    },
    problem: {
      es: 'El pipeline de clasificación de sospecha oncológica recalculaba las representaciones vectoriales de cada corrida completa, incluyendo derivaciones cuyo texto era idéntico a las de ejecuciones anteriores. El coste de inferencia crecía con el tamaño de la tabla, no con el volumen de información nueva.',
      en: 'The cancer-suspicion classification pipeline recomputed vector representations on every full run, including referrals whose text was identical to earlier executions. Inference cost grew with table size rather than with the amount of genuinely new information.',
    },
    decision: {
      es: 'Normalizar el texto libre y usar su hash como llave de caché de embeddings. Antes de vectorizar, el pipeline deduplica contra lo ya calculado y solo envía al modelo los textos que no ha visto nunca.',
      en: 'Normalise the free text and use its hash as an embedding cache key. Before vectorising, the pipeline deduplicates against what it has already computed and sends the model only text it has never seen.',
    },
    result: {
      es: 'El trabajo de inferencia pasa a ser proporcional a lo genuinamente nuevo. La misma técnica hace que las corridas sean deterministas y comparables entre sí, porque un texto idéntico siempre resuelve al mismo vector.',
      en: 'Inference work becomes proportional to what is genuinely new. The same technique makes runs deterministic and comparable, because identical text always resolves to the same vector.',
    },
    stack: ['Python', 'Embeddings', 'Hashing', 'Caché'],
  },
];

/**
 * Technical positions. Each one exists because the naive reading of the
 * problem is common, costly, and wrong.
 */
export type Position = {
  id: string;
  title: I18n<string>;
  claim: I18n<string>;
  body: I18n<string[]>;
};

export const POSITIONS: Position[] = [
  {
    id: 'sesgo-supervivencia',
    title: {
      es: 'Una lista de espera es una cohorte censurada, no un inventario',
      en: 'A waiting list is a censored cohort, not an inventory',
    },
    claim: {
      es: 'Contar a quienes siguen esperando describe a los sobrevivientes del proceso, no a la demanda.',
      en: 'Counting who is still waiting describes the survivors of the process, not the demand.',
    },
    body: {
      es: [
        'La lista de espera solo contiene a quien todavía está en ella. Quienes egresaron —por atención, por resolución en otro punto de la red, por desistimiento o por fallecimiento— desaparecen del corte. Medir el tiempo de espera promedio sobre esa foto es medir a los que aún no salen, que es precisamente el subgrupo con esperas más largas.',
        'El tratamiento correcto es de análisis de supervivencia: el egreso es el evento, la permanencia es el tiempo a evento, y quien sigue esperando al cierre del periodo está censurado por la derecha, no ausente. Sin esa corrección, las series temporales de espera parecen mejorar cuando en realidad solo cambió la composición de la cohorte.',
        'La consecuencia práctica es presupuestaria: la demanda real y la demanda visible no coinciden, y las decisiones de asignación se toman sobre la segunda.',
      ],
      en: [
        'A waiting list only contains whoever is still on it. Those who left — because they were seen, resolved elsewhere in the network, withdrew or died — disappear from the snapshot. Measuring average waiting time over that picture measures the people who have not left yet, which is precisely the subgroup with the longest waits.',
        'The correct treatment is survival analysis: exit is the event, time on the list is time-to-event, and anyone still waiting at the end of the period is right-censored, not absent. Without that correction, waiting-time series appear to improve when all that changed was cohort composition.',
        'The practical consequence is budgetary: real demand and visible demand do not coincide, and allocation decisions are made on the second one.',
      ],
    },
  },
  {
    id: 'interoperabilidad',
    title: {
      es: 'Interoperabilidad no es pasar un JSON',
      en: 'Interoperability is not passing a JSON',
    },
    claim: {
      es: 'El transporte es la parte fácil. Lo difícil es que las dos partes signifiquen lo mismo.',
      en: 'Transport is the easy part. The hard part is both sides meaning the same thing.',
    },
    body: {
      es: [
        'Intercambiar mensajes entre dos sistemas es un problema resuelto hace décadas. Que el mensaje sea interpretable es otra cosa: exige terminologías mapeadas, unidades declaradas, vocabularios controlados y una definición compartida de qué cuenta como un diagnóstico, una atención o un episodio.',
        'A eso se suma la identidad. Si el mismo paciente resuelve a dos llaves distintas en cada extremo, un intercambio perfectamente formado produce dos historias clínicas paralelas para una sola persona. La vinculación de identidades es un prerrequisito de la interoperabilidad, no un detalle posterior.',
        'Un JSON bien formado con semántica ambigua transporta datos que no se pueden agregar, comparar ni auditar. La interoperabilidad se mide en si dos instituciones pueden sumar sus cifras sin negociarlas, no en si sus endpoints responden 200.',
      ],
      en: [
        'Exchanging messages between two systems has been a solved problem for decades. Making the message interpretable is another matter: it demands mapped terminologies, declared units, controlled vocabularies and a shared definition of what counts as a diagnosis, an encounter or an episode.',
        'Then there is identity. If the same patient resolves to two different keys at each end, a perfectly formed exchange produces two parallel clinical histories for one person. Identity linkage is a prerequisite for interoperability, not an afterthought.',
        'A well-formed JSON with ambiguous semantics carries data that cannot be aggregated, compared or audited. Interoperability is measured by whether two institutions can add their figures together without negotiating them, not by whether their endpoints return 200.',
      ],
    },
  },
  {
    id: 'gobernanza-21719',
    title: {
      es: 'La Ley 21.719 es un requisito de arquitectura, no de papeleo',
      en: 'Chile’s data protection law is an architecture requirement, not paperwork',
    },
    claim: {
      es: 'Tratar el dato de salud como dato sensible cambia el diseño del pipeline, no solo el anexo legal.',
      en: 'Treating health data as sensitive data changes the pipeline design, not just the legal annex.',
    },
    body: {
      es: [
        'La nueva ley chilena de protección de datos personales sitúa los datos de salud en la categoría de datos sensibles, con exigencias reforzadas de base de licitud, finalidad determinada, minimización y trazabilidad del tratamiento. Institucionalmente se suele leer como un asunto de consentimientos y formularios.',
        'Técnicamente implica otra cosa: pseudoanonimización dentro del pipeline y no al final, separación entre las llaves identificatorias y los atributos clínicos, control de acceso por rol sobre las tablas intermedias, y un registro auditable de qué consulta tocó qué dato y con qué justificación.',
        'Diseñar eso desde el principio es barato. Retrofitearlo sobre un almacén analítico que ya mezcló identificadores con variables clínicas es caro, y en la práctica suele terminar en la restricción del acceso a los propios equipos que necesitan el dato para gestionar.',
      ],
      en: [
        'Chile’s new personal data protection law places health data in the sensitive category, with reinforced requirements on lawful basis, purpose limitation, minimisation and traceability of processing. Institutionally it tends to be read as a matter of consent forms.',
        'Technically it means something else: pseudonymisation inside the pipeline rather than at the end, separation between identifying keys and clinical attributes, role-based access control over intermediate tables, and an auditable record of which query touched which data and on what grounds.',
        'Designing for that from the start is cheap. Retrofitting it onto an analytical store that already mixed identifiers with clinical variables is expensive, and in practice usually ends with access being restricted for exactly the teams that need the data to manage care.',
      ],
    },
  },
];

/** Concrete exercises the training cohorts actually build. */
export const COHORT_ARTEFACTS: I18n<string>[] = [
  {
    es: 'Ocupación de camas hospitalarias a partir de los datos abiertos del REM, en SQL sobre DuckDB.',
    en: 'Hospital bed occupancy from open REM data, in SQL over DuckDB.',
  },
  {
    es: 'Normalización de diagnósticos CIE-10 escritos en texto libre, con expresiones regulares sanitarias.',
    en: 'Normalising free-text ICD-10 diagnoses with health-specific regular expressions.',
  },
  {
    es: 'Series de presión arterial y tablas administrativas depuradas desde planillas clínicas reales.',
    en: 'Blood-pressure series and administrative tables cleaned from real clinical spreadsheets.',
  },
  {
    es: 'Curvas de sobrevida y riesgos proporcionales sobre cohortes clínicas, con interpretación de la incertidumbre.',
    en: 'Survival curves and proportional hazards over clinical cohorts, including how to read the uncertainty.',
  },
  {
    es: 'Extracción de entidades clínicas en epicrisis, con pseudoanonimización previa al procesamiento.',
    en: 'Clinical entity extraction from discharge summaries, with pseudonymisation applied before processing.',
  },
];
