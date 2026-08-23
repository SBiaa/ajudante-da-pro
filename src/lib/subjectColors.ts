import { OWN_SUBJECTS, OWN_SUBJECT_LABELS, OwnSubject } from "@/types/plano";

export type ColorKey = OwnSubject | "leitura-diaria" | "externa";

export type SubjectColor = {
  text: string;
  bg: string;
};

/** Cores escolhidas pela professora, por matéria — sobrepõem o padrão em SUBJECT_COLORS. */
export type SubjectColorOverrides = Partial<Record<ColorKey, SubjectColor>>;

/**
 * Cor de identidade por matéria, para reconhecimento rápido na grade. Tons contidos e
 * dessaturados (mesma família de restrição do design system), evitando usar o crimson —
 * reservado como o único acento vermelho do sistema — em algo que se repete 5x por semana.
 * São o padrão de fábrica; a professora pode sobrescrever cada uma em "Cores das matérias".
 */
export const SUBJECT_COLORS: Record<ColorKey, SubjectColor> = {
  matematica: { text: "#2D5F8A", bg: "#E7EFF6" },
  "lingua-portuguesa": { text: "#4E1C82", bg: "#EFE9F5" },
  historia: { text: "#B5761A", bg: "#FBF0DE" },
  geografia: { text: "#1F7A5C", bg: "#E3F1EC" },
  ciencias: { text: "#1B7A73", bg: "#E2F2F0" },
  "leitura-diaria": { text: "#B5541F", bg: "#FBEDE3" },
  externa: { text: "#7C7488", bg: "#F1EFF3" },
};

export const COLOR_KEYS: ColorKey[] = [...OWN_SUBJECTS, "leitura-diaria", "externa"];

export const COLOR_KEY_LABELS: Record<ColorKey, string> = {
  ...OWN_SUBJECT_LABELS,
  "leitura-diaria": "Leitura Diária",
  externa: "Matéria externa (Ed. Física, Artes...)",
};

/** Cor efetiva de uma matéria: a personalizada pela professora, ou o padrão. */
export function resolveSubjectColor(key: ColorKey, overrides?: SubjectColorOverrides): SubjectColor {
  return overrides?.[key] ?? SUBJECT_COLORS[key];
}
