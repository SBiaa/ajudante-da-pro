// Estrutura de dados central do app de plano de aula semanal.

import type { SubjectColorOverrides } from "@/lib/subjectColors";
import { isHighSchoolGrade } from "@/types/profile";

/** Dias letivos (a professora dá aula de segunda a sexta). */
export type Weekday = "segunda" | "terca" | "quarta" | "quinta" | "sexta";

export const WEEKDAYS: Weekday[] = ["segunda", "terca", "quarta", "quinta", "sexta"];

export const WEEKDAY_LABELS: Record<Weekday, string> = {
  segunda: "Segunda-feira",
  terca: "Terça-feira",
  quarta: "Quarta-feira",
  quinta: "Quinta-feira",
  sexta: "Sexta-feira",
};

/** Horário de aula no dia, de 1 a 9. Quantos aparecem depende da escola (ver
 * School.slotsPerDay em src/types/turma.ts): o padrão é 6; escolas de tempo integral (PEI) chegam
 * a 9. */
export type SlotNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

/** Todos os horários possíveis. Para mostrar na tela, use slotsFor(escola.slotsPerDay). */
export const SLOT_NUMBERS: SlotNumber[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const DEFAULT_SLOTS_PER_DAY = 6;
export const MIN_SLOTS_PER_DAY = 4;
export const MAX_SLOTS_PER_DAY = 9;

/** Normaliza um número de aulas por dia vindo de dado salvo/formulário (fora da faixa → padrão). */
export function clampSlotsPerDay(value: unknown): number {
  const n = typeof value === "number" ? Math.round(value) : NaN;
  if (!Number.isFinite(n)) return DEFAULT_SLOTS_PER_DAY;
  return Math.min(MAX_SLOTS_PER_DAY, Math.max(MIN_SLOTS_PER_DAY, n));
}

/** Os horários visíveis para uma escola com `slotsPerDay` aulas por dia. */
export function slotsFor(slotsPerDay: number | undefined): SlotNumber[] {
  return SLOT_NUMBERS.slice(0, clampSlotsPerDay(slotsPerDay ?? DEFAULT_SLOTS_PER_DAY));
}

/** Matérias com banco de temas (sorteio, cobertura curricular). As 5 primeiras são as do Ensino
 * Fundamental; Física, Química, Biologia, Filosofia e Sociologia só existem no Ensino Médio. */
export type OwnSubject =
  | "matematica"
  | "lingua-portuguesa"
  | "historia"
  | "geografia"
  | "ciencias"
  | "fisica"
  | "quimica"
  | "biologia"
  | "filosofia"
  | "sociologia";

/** As 5 matérias do Ensino Fundamental — o conjunto padrão da professora generalista. */
export const OWN_SUBJECTS: OwnSubject[] = [
  "matematica",
  "lingua-portuguesa",
  "historia",
  "geografia",
  "ciencias",
];

/** Matérias com banco no Ensino Médio (Formação Geral Básica). Ciências vira Física, Química e
 * Biologia; entram Filosofia e Sociologia. Inglês, Arte, Ed. Física e Itinerários seguem como
 * matérias livres da turma (customSubjects). */
export const HIGH_SCHOOL_SUBJECTS: OwnSubject[] = [
  "matematica",
  "lingua-portuguesa",
  "fisica",
  "quimica",
  "biologia",
  "historia",
  "geografia",
  "filosofia",
  "sociologia",
];

/** Todas as matérias que o app conhece, sem repetição — para validar dados salvos e montar
 * listas de cores. */
export const ALL_SUBJECTS: OwnSubject[] = [...new Set([...OWN_SUBJECTS, ...HIGH_SCHOOL_SUBJECTS])];

export const OWN_SUBJECT_LABELS: Record<OwnSubject, string> = {
  matematica: "Matemática",
  "lingua-portuguesa": "Língua Portuguesa",
  historia: "História",
  geografia: "Geografia",
  ciencias: "Ciências",
  fisica: "Física",
  quimica: "Química",
  biologia: "Biologia",
  filosofia: "Filosofia",
  sociologia: "Sociologia",
};

/** Matérias que fazem sentido no ano/série informado: as do Ensino Médio para as séries do EM,
 * as 5 do Fundamental para os demais. */
export function subjectsForGrade(gradeYear: string): OwnSubject[] {
  return isHighSchoolGrade(gradeYear) ? HIGH_SCHOOL_SUBJECTS : OWN_SUBJECTS;
}

/** Matérias que a interface deve oferecer/mostrar para o professor: as 5 quando ele é
 * generalista (`ownSubject` null, 1º-6º ano), ou só a matéria dele quando é especialista
 * (7º-9º ano e Ensino Médio — ver isSpecialistGrade em src/types/profile.ts). */
export function getAllowedSubjects(ownSubject: OwnSubject | null): OwnSubject[] {
  return ownSubject ? [ownSubject] : OWN_SUBJECTS;
}

/**
 * Tipo de conteúdo de um horário na grade.
 * - "leitura-diaria": livro/texto do dia, sorteado do banco local; pode ser configurado em
 *   qualquer horário da grade.
 * - "materia-propria": uma das 5 matérias da professora, gerada por IA.
 * - "materia-externa": aula de outro professor (Ed. Física, Artes, Informática...),
 *   preenchimento manual, sem geração automática.
 */
export type SlotKind = "leitura-diaria" | "materia-propria" | "materia-externa";

// ---------------------------------------------------------------------------
// Grade fixa semanal (configurada uma vez, se repete toda semana)
// ---------------------------------------------------------------------------

/** O que ocupa um dia+horário na grade recorrente (o "molde" da semana). */
export type TimetableEntry =
  | { kind: "leitura-diaria" }
  | { kind: "materia-propria"; subject: OwnSubject }
  | { kind: "materia-externa"; label: string }; // ex: "Educação Física"

/** Grade fixa completa: 5 dias x até 9 horários. Serve de modelo para gerar novas semanas.
 * Horários podem faltar (grades salvas quando o app só tinha 6 aulas): leia com entryAt. */
export type WeeklyTimetable = {
  id: string;
  updatedAt: string; // ISO date
  grid: Record<Weekday, Partial<Record<SlotNumber, TimetableEntry>>>;
};

/** Horário da grade fixa; um horário que não existe no dado salvo conta como em branco. */
export function entryAt(timetable: WeeklyTimetable, day: Weekday, slot: SlotNumber): TimetableEntry {
  return timetable.grid[day]?.[slot] ?? { kind: "materia-externa", label: "" };
}

// ---------------------------------------------------------------------------
// Conteúdo gerado/manual de uma aula em uma semana específica
// ---------------------------------------------------------------------------

/**
 * Plano de aula sorteado do banco de temas local (ou preenchido manualmente), no formato
 * enxuto que ela copia direto pro SGP: código do currículo + descrição curta.
 */
export type GeneratedLessonPlan = {
  /** Tema/assunto da aula (ou título do livro/texto, no caso da Leitura Diária). */
  theme: string;
  /** Código da habilidade no Currículo da Cidade (SME-SP). Vazio para Leitura Diária. */
  curriculumCode: string;
  /** Descrição curta da atividade (1-3 linhas), estilo direto para relatório. */
  description: string;
  /** Materiais necessários para a aula (lista vazia se não precisar de nada especial). */
  materials: string[];
  /** Passo a passo do que fazer com a turma, em ordem (versão enxuta, usada no texto do SGP). */
  steps: string[];
  /** Roteiro detalhado da aula, pra guiar o professor durante a aula (o que dizer, perguntar,
   * escrever na lousa) — mais longo e passo a passo que `steps`, não vai pro SGP. Lista vazia
   * quando ainda não tem roteiro escrito (a aula funciona normalmente com description+steps). */
  classScript: string[];
  /** Texto completo para ler em voz alta. Só relevante para Leitura Diária; "" nas demais. */
  readingText: string;
  /** Gênero textual (poema, notícia, receita, fábula...). Só relevante para Leitura Diária; "" nas demais. */
  genre: string;
  /** ISO date da última vez que foi sorteado do banco; null se nunca (só preenchido à mão). */
  generatedAt: string | null;
  /** true se a professora editou o conteúdo depois de sorteado. */
  editedManually: boolean;
  /** Quando a professora marcou a aula como dada (ISO). Ausente/null = ainda não dada. Some
   * sozinho ao sortear outro tema, já que o plano novo não carrega o campo. */
  givenAt?: string | null;
  /** Plano de aula completo (ver FullLessonPlan), quando o banco tem essa versão mais detalhada
   * pra esse tema. undefined quando a entrada do banco não tem (a aula funciona normalmente sem
   * ele, usando description/materials/steps). */
  fullLessonPlan?: FullLessonPlan;
};

/** Atividade de texto livre para horários que não são dela (Ed. Física, Artes etc.). */
export type ManualActivity = {
  label: string;
};

/** Uma célula da grade semanal, com o conteúdo certo para cada tipo de horário. */
export type WeekCell =
  | { kind: "leitura-diaria"; plan: GeneratedLessonPlan }
  | { kind: "materia-propria"; subject: OwnSubject; plan: GeneratedLessonPlan }
  | { kind: "materia-externa"; label: string; activity: ManualActivity };

// ---------------------------------------------------------------------------
// Semana completa
// ---------------------------------------------------------------------------

/** Um plano de aula semanal completo, pronto para preencher e exportar. */
export type WeekPlan = {
  /** ID legível, ex: "2026-W08". */
  id: string;
  /** Data ISO da segunda-feira daquela semana. */
  weekStartDate: string;
  createdAt: string;
  updatedAt: string;
  /** Horários podem faltar (semanas criadas quando o app só tinha 6 aulas): leia com cellAt. */
  days: Record<Weekday, Partial<Record<SlotNumber, WeekCell>>>;
};

/** Aula de uma semana; um horário que não existe no dado salvo conta como em branco. */
export function cellAt(week: WeekPlan, day: Weekday, slot: SlotNumber): WeekCell {
  return week.days[day]?.[slot] ?? { kind: "materia-externa", label: "", activity: { label: "" } };
}

// ---------------------------------------------------------------------------
// Histórico de temas (para o sorteio evitar repetir assuntos recentes)
// ---------------------------------------------------------------------------

export type ThemeHistoryEntry = {
  subject: OwnSubject | "leitura-diaria";
  theme: string;
  weekId: string;
  usedAt: string; // ISO date
};

// ---------------------------------------------------------------------------
// Questões já impressas (pra sinalizar "já usada" na hora de montar outra atividade —
// não bloqueia reaproveitar, só avisa)
// ---------------------------------------------------------------------------

export type UsedExerciseEntry = {
  subject: OwnSubject | "leitura-diaria";
  theme: string;
  /** Identifica a questão dentro do tema (ver src/lib/usedExercises.ts) — os bancos de
   * atividade/lição de casa não têm id próprio, então usamos a origem + o enunciado. */
  exerciseKey: string;
  usedAt: string; // ISO date
};

// ---------------------------------------------------------------------------
// Banco de temas local (offline, sem custo — ver src/data/themeBank.ts)
// ---------------------------------------------------------------------------

/**
 * Plano de aula completo, no nível de detalhe pedido pela Dulci (avaliadora): objetos de
 * conhecimento, habilidades trabalhadas, objetivos de aprendizagem, desenvolvimento da aula
 * (podendo ter várias etapas/estações/problemas) e avaliação. `skills` e `developmentMarkdown`
 * ficam como texto livre (markdown simples: `##`/`###` pra subtítulo, `*`/`-` pra lista, `|` pra
 * tabela) em vez de campos estruturados, porque esse conteúdo é escrito à mão por quem monta a
 * aula — tentar fatiar cada seção em campos rígidos só atrapalha quando o formato mudar de novo
 * (já mudou 3x nesta mesma funcionalidade, ver memória feedback_sgp_description_format).
 */
export type FullLessonPlan = {
  knowledgeObjects: string[];
  skills: string;
  learningObjectives: string[];
  developmentMarkdown: string;
};

/** Uma entrada do banco de temas: um tema pronto para uma matéria própria. */
export type BankEntry = {
  theme: string;
  curriculumCode: string;
  description: string;
  materials: string[];
  steps: string[];
  /** Roteiro detalhado da aula (ver GeneratedLessonPlan.classScript). Opcional: bancos ainda não
   * reescritos com esse campo funcionam normalmente sem ele. */
  classScript?: string[];
  /**
   * Texto opcional pro campo "desenvolvimento da aula" do SGP (ver src/lib/sgpDescription.ts),
   * escrito em primeira pessoa do plural ("nós" — professora + turma), tom pessoal, parágrafo
   * corrido (sem cabeçalhos de estágio), mostrando o que a turma fez e produziu — pedido da
   * Dulci (avaliadora): precisa parecer que foi a própria professora que escreveu, não uma
   * descrição impessoal da habilidade. Entradas sem `sgpDescription` preenchido continuam usando
   * o `description` puro (formato curto/abstrato antigo) — não é obrigatório reescrever o banco
   * inteiro de uma vez, só preencher aos poucos.
   */
  sgpDescription?: string;
  /** Plano de aula completo (ver FullLessonPlan) — opcional, preenchido aos poucos. Entradas sem
   * ele continuam funcionando com description/materials/steps normalmente. */
  fullLessonPlan?: FullLessonPlan;
};

/** Banco de temas de uma combinação rede + ano: só as matérias que aquele ano tem (um banco do
 * Fundamental tem as 5 de OWN_SUBJECTS; um do Ensino Médio, as de HIGH_SCHOOL_SUBJECTS que já
 * ganharam conteúdo). Matéria ausente = sem temas para sortear. */
export type SubjectBank = Partial<Record<OwnSubject, BankEntry[]>>;

/**
 * Uma entrada do banco de Leitura Diária: já traz o texto completo pra ler em voz alta.
 * `genre` é o gênero textual (fábula, conto, conto acumulativo, conto de assombração, lenda,
 * mito, poema, poema de cordel, limerique, haicai, parlenda, quadrinha, trava-língua, adivinha,
 * cantiga, notícia, reportagem, receita, carta, bilhete, convite, cartão-postal, verbete de
 * curiosidade, indicação literária, regra de brincadeira, tirinha/HQ, relato de experiência,
 * história original...), pensado para cobrir a diversidade de gêneros pedida pela BNCC/Currículo
 * da Cidade (EF01LP05, EF02LP07/08/14/16 entre outros) — não é uma lista fechada, novas entradas
 * podem usar outros valores.
 */
export type ReadingBankEntry = {
  theme: string;
  genre: string;
  description: string;
  text: string;
  steps: string[];
  /** Ver BankEntry.sgpDescription — mesmo formato, mesmo comportamento de fallback pro `description`. */
  sgpDescription?: string;
};

// ---------------------------------------------------------------------------
// Persistência local (localStorage)
// ---------------------------------------------------------------------------

/** Tudo que pertence a UMA turma: o horário em que a professora dá aula nela, as semanas
 * planejadas e o que já foi dado/impresso. A turma principal usa os campos do topo de AppState
 * (compatível com quem já tinha dados antes de existirem turmas); as demais ficam em
 * `AppState.classData`, indexadas pelo id da turma. */
export type ClassWorkspace = {
  timetable: WeeklyTimetable | null;
  weeks: Record<string, WeekPlan>;
  themeHistory: ThemeHistoryEntry[];
  usedExercises: UsedExerciseEntry[];
};

export type AppState = {
  /** Turmas além da principal (ver ClassWorkspace). */
  classData: Record<string, ClassWorkspace>;
  timetable: WeeklyTimetable | null;
  weeks: Record<string, WeekPlan>; // keyed by WeekPlan.id
  themeHistory: ThemeHistoryEntry[];
  usedExercises: UsedExerciseEntry[];
  subjectColorOverrides: SubjectColorOverrides;
  /** ISO date da última alteração local, usado para decidir (contra o servidor) quem é mais
   * recente ao sincronizar entre dispositivos — ver src/lib/db/appData.ts. */
  updatedAt: string;
};
