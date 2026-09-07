import type { I18n } from '@/i18n/config';

/**
 * Technical positions. Each one exists because the naive reading of the
 * problem is common, costly, and wrong.
 */
export type Position = {
  id: string;
  title: I18n<string>;
  claim: I18n<string>;
  body: I18n<string[]>;
  /** Id of the project on the work page where this position is load-bearing. */
  appliesTo: string;
  appliesToLabel: I18n<string>;
};

export const POSITIONS: Position[] = [
  {
    id: 'sesgo-supervivencia',
    appliesTo: 'proyector-listas-espera',
    appliesToLabel: {
      es: 'Proyector y simulador de listas de espera',
      en: 'Waiting list projection model and simulator',
    },
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
    appliesTo: 'record-linkage',
    appliesToLabel: {
      es: 'Deduplicación probabilística y vinculación de registros',
      en: 'Probabilistic deduplication and record linkage',
    },
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
    appliesTo: 'anonimizacion',
    appliesToLabel: {
      es: 'Anonimización con k-anonimidad y l-diversidad',
      en: 'Anonymisation with k-anonymity and l-diversity',
    },
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
  {
    id: 'human-in-the-loop',
    appliesTo: 'cancer-oculto-quirurgico',
    appliesToLabel: {
      es: 'Clasificador oncológico de la lista de espera quirúrgica',
      en: 'Cancer classifier for the surgical waiting list',
    },
    title: {
      es: 'Un modelo que prioriza no puede desestimar',
      en: 'A model that prioritises must not be allowed to dismiss',
    },
    claim: {
      es: 'Si el algoritmo puede sacar a alguien de la lista sin que un médico lo mire, el error deja de ser recuperable.',
      en: 'If the algorithm can drop someone from the list without a doctor looking, the error stops being recoverable.',
    },
    body: {
      es: [
        'Un clasificador clínico comete dos errores que no cuestan lo mismo. Un falso positivo gasta tiempo de auditoría médica, que es caro pero acotado. Un falso negativo devuelve a un paciente con cáncer a la cola general, donde nadie va a volver a mirarlo, y el coste lo paga una persona.',
        'Por eso el sistema etiqueta tres estados y no dos. Sospechoso e indeterminado se derivan de forma obligatoria a revisión médica; el algoritmo nunca cierra un caso por su cuenta. La categoría intermedia no es una debilidad del modelo: es el lugar donde se deposita explícitamente lo que el modelo no sabe.',
        'La consecuencia de diseño es que el umbral no se optimiza para exactitud global. Se calibra para que el error caro sea el que el sistema comete menos, aceptando de entrada más trabajo de auditoría. Esa es una decisión clínica antes que estadística, y por lo tanto no la puede tomar el modelo.',
      ],
      en: [
        'A clinical classifier makes two errors that do not cost the same. A false positive spends medical audit time, which is expensive but bounded. A false negative sends a cancer patient back to the general queue, where nobody will look again, and the cost is paid by a person.',
        'That is why the system labels three states, not two. Suspicious and indeterminate are mandatorily routed to medical review; the algorithm never closes a case on its own. The middle category is not a weakness of the model: it is where what the model does not know gets deposited explicitly.',
        'The design consequence is that the threshold is not optimised for overall accuracy. It is calibrated so the expensive error is the one the system makes least, accepting more audit work up front. That is a clinical decision before a statistical one, and therefore not one the model can make.',
      ],
    },
  },
  {
    id: 'reproducibilidad',
    appliesTo: 'arquitectura-analitica',
    appliesToLabel: {
      es: 'Arquitectura analítica sobre tecnologías abiertas',
      en: 'Analytics architecture on open technology',
    },
    title: {
      es: 'Una cifra de política pública sin pipeline detrás es una opinión',
      en: 'A public policy figure with no pipeline behind it is an opinion',
    },
    claim: {
      es: 'Si el número no se puede reproducir, la decisión que se tomó con él no se puede defender.',
      en: 'If the number cannot be reproduced, the decision made with it cannot be defended.',
    },
    body: {
      es: [
        'Las cifras de lista de espera sostienen asignación presupuestaria, metas sanitarias y compromisos con la red asistencial. Cuando salen de una planilla que alguien armó a mano, no hay forma de explicar por qué el dato de marzo no cuadra con el de febrero, ni de distinguir un cambio real de un cambio de criterio.',
        'La solución no es documentar más. Es que detrás de cada cifra haya un pipeline versionado, con la fecha de corte como parámetro explícito, pruebas de calidad sobre las capas del almacén, y un repositorio donde cada cambio de criterio quede fechado y atribuido a alguien.',
        'Eso convierte la reproducibilidad en un mecanismo de rendición de cuentas y no en una virtud metodológica. Cuando alguien pregunta de dónde salió el número, la respuesta deja de ser una explicación y pasa a ser un commit.',
      ],
      en: [
        'Waiting list figures underpin budget allocation, health targets and commitments to the care network. When they come out of a spreadsheet someone assembled by hand, there is no way to explain why March does not reconcile with February, or to tell a real change from a change of criteria.',
        'The answer is not more documentation. It is that behind every figure there is a versioned pipeline, with the cut-off date as an explicit parameter, quality tests over the warehouse layers, and a repository where each change of criteria is dated and attributed to someone.',
        'That turns reproducibility into an accountability mechanism rather than a methodological virtue. When someone asks where the number came from, the answer stops being an explanation and becomes a commit.',
      ],
    },
  },
];

/**
 * Exercises the cohorts build. Everything here runs on open health data —
 * REM, DEIS, datos.gob.cl — which is real administrative data, not sample sets.
 */
export const COHORT_ARTEFACTS: I18n<string>[] = [
  {
    es: 'Ocupación de camas hospitalarias a partir de los datos abiertos del REM, en SQL sobre DuckDB.',
    en: 'Hospital bed occupancy from open REM data, in SQL over DuckDB.',
  },
  {
    es: 'Normalización de diagnósticos y prestaciones escritos en texto libre, con expresiones regulares.',
    en: 'Normalising free-text diagnoses and procedures with regular expressions.',
  },
  {
    es: 'Procesamiento de tablas de millones de atenciones en un computador personal, sin servidor.',
    en: 'Processing tables of millions of care episodes on a personal computer, with no server.',
  },
  {
    es: 'Modelamiento estadístico y análisis de supervivencia sobre cohortes construidas desde datos abiertos.',
    en: 'Statistical modelling and survival analysis over cohorts built from open data.',
  },
];
