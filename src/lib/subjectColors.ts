import { ALL_SUBJECTS, OWN_SUBJECT_LABELS, OwnSubject } from "@/types/plano";

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
  // Escurecido de #B5761A para #9F6817 (mesmo tom): a versão clara ficava com contraste
  // 3.77:1 contra branco, abaixo do mínimo 4.5:1 (WCAG AA) usado nos selos com texto branco.
  historia: { text: "#9F6817", bg: "#FBF0DE" },
  geografia: { text: "#1F7A5C", bg: "#E3F1EC" },
  ciencias: { text: "#1B7A73", bg: "#E2F2F0" },
  // Matérias só do Ensino Médio — mesma família contida; todas ≥ 5.5:1 contra branco.
  fisica: { text: "#3F4FA0", bg: "#E9EBF6" },
  quimica: { text: "#8A2F6B", bg: "#F5E6EF" },
  biologia: { text: "#4A7320", bg: "#EDF3E3" },
  filosofia: { text: "#4A5D73", bg: "#E9EDF2" },
  sociologia: { text: "#8A4B2E", bg: "#F5EAE3" },
  "leitura-diaria": { text: "#B5541F", bg: "#FBEDE3" },
  // Escurecido de #7C7488 para #726B7D (mesmo tom): a versão clara ficava com contraste
  // 4.46:1 contra branco, abaixo do mínimo 4.5:1 (WCAG AA) usado nos selos com texto branco.
  externa: { text: "#726B7D", bg: "#F1EFF3" },
};

export const COLOR_KEYS: ColorKey[] = [...ALL_SUBJECTS, "leitura-diaria", "externa"];

export const COLOR_KEY_LABELS: Record<ColorKey, string> = {
  ...OWN_SUBJECT_LABELS,
  "leitura-diaria": "Leitura Diária",
  externa: "Matéria externa (Ed. Física, Artes...)",
};

/** Cor efetiva de uma matéria: a personalizada pela professora, ou o padrão. */
export function resolveSubjectColor(key: ColorKey, overrides?: SubjectColorOverrides): SubjectColor {
  return overrides?.[key] ?? SUBJECT_COLORS[key];
}
