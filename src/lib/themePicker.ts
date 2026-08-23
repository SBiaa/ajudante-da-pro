import { OwnSubject } from "@/types/plano";
import { THEME_BANK, READING_BANK } from "@/data/themeBank";

export type PickedEntry = {
  theme: string;
  curriculumCode: string;
  description: string;
  materials: string[];
  steps: string[];
  readingText: string;
  genre: string;
};

const EMPTY_PICK: PickedEntry = {
  theme: "",
  curriculumCode: "",
  description: "",
  materials: [],
  steps: [],
  readingText: "",
  genre: "",
};

/**
 * Sorteia uma entrada do banco local para a matéria, evitando repetir os temas mais
 * recentes (se possível). Quando o banco inteiro já foi usado recentemente, sorteia
 * livremente entre todas as entradas — repetir depois de esgotar o banco é aceitável.
 *
 * Se `keyword` for informado, o sorteio é restrito às entradas cujo tema ou descrição
 * contêm essa palavra (comparação sem acento e sem diferenciar maiúsculas/minúsculas).
 * Se nenhuma entrada bater com a palavra, retorna vazio em vez de ignorar o filtro.
 */
export function pickThemeEntry(
  subject: OwnSubject | "leitura-diaria",
  recentThemes: string[],
  keyword = ""
): PickedEntry {
  if (subject === "leitura-diaria") {
    return pickFrom(
      READING_BANK,
      recentThemes,
      keyword,
      (r): PickedEntry => ({
        theme: r.theme,
        curriculumCode: "",
        description: r.description,
        materials: [],
        steps: r.steps,
        readingText: r.text,
        genre: r.genre,
      })
    );
  }

  return pickFrom(
    THEME_BANK[subject],
    recentThemes,
    keyword,
    (entry): PickedEntry => ({
      theme: entry.theme,
      curriculumCode: entry.curriculumCode,
      description: entry.description,
      materials: entry.materials,
      steps: entry.steps,
      readingText: "",
      genre: "",
    })
  );
}

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function pickFrom<T extends { theme: string; description: string; genre?: string }>(
  bank: T[],
  recentThemes: string[],
  keyword: string,
  toPicked: (entry: T) => PickedEntry
): PickedEntry {
  if (bank.length === 0) return EMPTY_PICK;

  let candidates = bank;
  const term = keyword.trim();
  if (term) {
    const normTerm = normalize(term);
    candidates = bank.filter(
      (entry) =>
        normalize(entry.theme).includes(normTerm) ||
        normalize(entry.description).includes(normTerm) ||
        (entry.genre && normalize(entry.genre).includes(normTerm))
    );
    if (candidates.length === 0) return EMPTY_PICK;
  }

  const recentSet = new Set(recentThemes);
  const available = candidates.filter((entry) => !recentSet.has(entry.theme));
  const pool = available.length > 0 ? available : candidates;

  const index = Math.floor(Math.random() * pool.length);
  return toPicked(pool[index]);
}
