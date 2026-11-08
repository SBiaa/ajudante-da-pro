// Escolas e turmas: o que permite uma professora do Fundamental 2 (várias turmas, às vezes em
// duas escolas) usar o app. Fica guardado no perfil (coluna `setup`), não no estado da semana.

import { ALL_SUBJECTS, DEFAULT_SLOTS_PER_DAY, OwnSubject, clampSlotsPerDay, subjectsForGrade } from "@/types/plano";
import { DEFAULT_GRADE, DEFAULT_NETWORK, Network, getGradeLabel, isSpecialistGrade } from "@/types/profile";

export type School = {
  id: string;
  name: string;
  /** A rede mora na escola: quem dá aula no Estado e na Prefeitura usa currículos diferentes. */
  network: Network;
  /** Quantas aulas por dia a escola tem (4 a 9; padrão 6). Escola de tempo integral (PEI) costuma
   * ter 8 ou 9. Vale pra todas as turmas da escola. */
  slotsPerDay: number;
};

export type ClassGroup = {
  id: string;
  schoolId: string;
  gradeYear: string;
  /** Como a professora chama a turma: "7ºA", "8º B manhã"... */
  label: string;
  /** Matérias com banco de temas que ela leciona nessa turma (sorteio e cobertura curricular). */
  subjects: OwnSubject[];
  /** Matérias sem banco (Arte, Inglês, Projeto de Vida...): entram na grade, preenchimento manual.
   * Lista livre, editada pela professora. */
  customSubjects: string[];
};

export type Setup = {
  schools: School[];
  classes: ClassGroup[];
  /** Id da turma cujos dados vivem nos campos do topo de AppState e nas tabelas antigas. Não pode
   * ser removida (ver ClassWorkspace). */
  primaryClassId: string;
};

export const DEFAULT_CLASS_ID = "turma-1";
export const DEFAULT_SCHOOL_ID = "escola-1";

/** Sugestões de matérias sem banco, por rede (Currículo da Cidade / Currículo Paulista). A lista
 * é só ponto de partida: a professora adiciona e remove à vontade. */
export const CUSTOM_SUBJECT_SUGGESTIONS: Record<Network, string[]> = {
  prefeitura: ["Arte", "Educação Física", "Língua Inglesa", "Tecnologias para Aprendizagem"],
  estado: [
    "Arte",
    "Educação Física",
    "Língua Inglesa",
    "Projeto de Vida",
    "Eletivas",
    "Tecnologia e Inovação",
    "Educação Financeira",
    "Orientação de Estudos",
    "Redação e Leitura",
    "Itinerário Formativo",
  ],
};

export function newId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Setup de quem nunca configurou turmas: uma escola e uma turma montadas a partir do perfil
 * antigo (ano, rede, matéria). É o que mantém tudo funcionando sem migração de dados. */
export function setupFromLegacyProfile(
  profile: { gradeYear: string; network: Network; ownSubject: OwnSubject | null } | null
): Setup {
  const gradeYear = profile?.gradeYear ?? DEFAULT_GRADE;
  const network = profile?.network ?? DEFAULT_NETWORK;
  const subjects: OwnSubject[] =
    profile?.ownSubject && isSpecialistGrade(gradeYear) ? [profile.ownSubject] : [...subjectsForGrade(gradeYear)];
  return {
    primaryClassId: DEFAULT_CLASS_ID,
    schools: [{ id: DEFAULT_SCHOOL_ID, name: "Minha escola", network, slotsPerDay: DEFAULT_SLOTS_PER_DAY }],
    classes: [
      {
        id: DEFAULT_CLASS_ID,
        schoolId: DEFAULT_SCHOOL_ID,
        gradeYear,
        label: getGradeLabel(gradeYear),
        subjects,
        customSubjects: [],
      },
    ],
  };
}

/** Valida e normaliza um setup vindo do cliente/banco: descarta lixo e garante a turma principal. */
export function sanitizeSetup(raw: unknown, fallback: Setup): Setup {
  if (!raw || typeof raw !== "object") return fallback;
  const r = raw as Partial<Setup>;
  const schools = (Array.isArray(r.schools) ? r.schools : [])
    .filter((s): s is School => Boolean(s) && typeof s.id === "string" && typeof s.name === "string")
    .map((s) => ({
      id: s.id,
      name: s.name.trim().slice(0, 60) || "Escola",
      network: (s.network === "estado" ? "estado" : "prefeitura") as Network,
      // Escolas salvas antes dessa opção existir não têm o campo: ficam com o padrão (6).
      slotsPerDay: clampSlotsPerDay((s as Partial<School>).slotsPerDay),
    }));
  if (schools.length === 0) return fallback;
  const schoolIds = new Set(schools.map((s) => s.id));
  const classes = (Array.isArray(r.classes) ? r.classes : [])
    .filter((c): c is ClassGroup => Boolean(c) && typeof c.id === "string" && schoolIds.has(c.schoolId))
    .map((c) => {
      const subjects = (Array.isArray(c.subjects) ? c.subjects : []).filter((x): x is OwnSubject =>
        ALL_SUBJECTS.includes(x as OwnSubject)
      );
      const custom = (Array.isArray(c.customSubjects) ? c.customSubjects : [])
        .filter((x): x is string => typeof x === "string")
        .map((x) => x.trim().slice(0, 40))
        .filter(Boolean);
      const gradeYear = typeof c.gradeYear === "string" ? c.gradeYear : DEFAULT_GRADE;
      // Só matérias que existem nessa série (ex.: Física não entra numa turma de 5º ano).
      const gradeSubjects = subjectsForGrade(gradeYear);
      const validSubjects = subjects.filter((x) => gradeSubjects.includes(x));
      return {
        id: c.id,
        schoolId: c.schoolId,
        gradeYear,
        label: (typeof c.label === "string" ? c.label.trim().slice(0, 30) : "") || getGradeLabel(gradeYear),
        subjects: validSubjects.length > 0 ? [...new Set(validSubjects)] : [...gradeSubjects],
        customSubjects: [...new Set(custom)],
      };
    });
  if (classes.length === 0) return fallback;
  const primaryClassId = classes.some((c) => c.id === r.primaryClassId) ? (r.primaryClassId as string) : classes[0].id;
  return { schools, classes, primaryClassId };
}
