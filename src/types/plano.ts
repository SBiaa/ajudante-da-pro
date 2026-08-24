// Estrutura de dados central do app de plano de aula semanal.

import type { SubjectColorOverrides } from "@/lib/subjectColors";

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

/** 6 aulas por dia, numeradas de 1 a 6. */
export type SlotNumber = 1 | 2 | 3 | 4 | 5 | 6;

export const SLOT_NUMBERS: SlotNumber[] = [1, 2, 3, 4, 5, 6];

/** As 5 matérias que a professora leciona — únicas para as quais o app gera plano via IA. */
export type OwnSubject =
  | "matematica"
  | "lingua-portuguesa"
  | "historia"
  | "geografia"
  | "ciencias";

export const OWN_SUBJECTS: OwnSubject[] = [
  "matematica",
  "lingua-portuguesa",
  "historia",
  "geografia",
  "ciencias",
];

export const OWN_SUBJECT_LABELS: Record<OwnSubject, string> = {
  matematica: "Matemática",
  "lingua-portuguesa": "Língua Portuguesa",
  historia: "História",
  geografia: "Geografia",
  ciencias: "Ciências",
};

/**
 * Tipo de conteúdo de um horário na grade.
 * - "leitura-diaria": fixo na 1ª aula de todo dia, gerado por IA (livro/texto do dia).
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

/** Grade fixa completa: 5 dias x 6 horários. Serve de modelo para gerar novas semanas. */
export type WeeklyTimetable = {
  id: string;
  updatedAt: string; // ISO date
  grid: Record<Weekday, Record<SlotNumber, TimetableEntry>>;
};

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
  /** Passo a passo do que fazer com a turma, em ordem. */
  steps: string[];
  /** Texto completo para ler em voz alta. Só relevante para Leitura Diária; "" nas demais. */
  readingText: string;
  /** Gênero textual (poema, notícia, receita, fábula...). Só relevante para Leitura Diária; "" nas demais. */
  genre: string;
  /** ISO date da última vez que foi sorteado do banco; null se nunca (só preenchido à mão). */
  generatedAt: string | null;
  /** true se a professora editou o conteúdo depois de sorteado. */
  editedManually: boolean;
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
  days: Record<Weekday, Record<SlotNumber, WeekCell>>;
};

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
// Banco de temas local (offline, sem custo — ver src/data/themeBank.ts)
// ---------------------------------------------------------------------------

/** Uma entrada do banco de temas: um tema pronto para uma matéria própria. */
export type BankEntry = {
  theme: string;
  curriculumCode: string;
  description: string;
  materials: string[];
  steps: string[];
};

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
};

// ---------------------------------------------------------------------------
// Persistência local (localStorage)
// ---------------------------------------------------------------------------

export type AppState = {
  timetable: WeeklyTimetable | null;
  weeks: Record<string, WeekPlan>; // keyed by WeekPlan.id
  themeHistory: ThemeHistoryEntry[];
  subjectColorOverrides: SubjectColorOverrides;
  /** ISO date da última alteração local, usado para decidir (contra o servidor) quem é mais
   * recente ao sincronizar entre dispositivos — ver src/lib/db/appData.ts. */
  updatedAt: string;
};
