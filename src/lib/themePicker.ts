import { OwnSubject } from "@/types/plano";
import { Network } from "@/types/profile";
import { READING_BANK } from "@/data/themeBank";
import { getThemeBank } from "@/data/curriculumBanks";

export type PickedEntry = {
  theme: string;
  curriculumCode: string;
  description: string;
  materials: string[];
  steps: string[];
  classScript: string[];
  readingText: string;
  genre: string;
};

const EMPTY_PICK: PickedEntry = {
  theme: "",
  curriculumCode: "",
  description: "",
  materials: [],
  steps: [],
  classScript: [],
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
 *
 * Leitura Diária é compartilhada entre redes/anos (não tem código de currículo). As demais
 * matérias usam o banco da combinação rede+ano (ver src/data/curriculumBanks.ts); se essa
 * combinação ainda não tiver banco de conteúdo, retorna vazio.
 */
export function pickThemeEntry(
  network: Network,
  gradeYear: string,
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
        classScript: [],
        readingText: r.text,
        genre: r.genre,
      })
    );
  }

  const bank = getThemeBank(network, gradeYear);
  if (!bank) return EMPTY_PICK;

  return pickFrom(
    bank[subject],
    recentThemes,
    keyword,
    (entry): PickedEntry => ({
      theme: entry.theme,
      curriculumCode: entry.curriculumCode,
      description: entry.description,
      materials: entry.materials,
      steps: entry.steps,
      classScript: entry.classScript ?? [],
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

/** Tamanho do maior prefixo comum entre duas strings. */
function commonPrefixLength(a: string, b: string): number {
  let i = 0;
  while (i < a.length && i < b.length && a[i] === b[i]) i++;
  return i;
}

/**
 * Verdadeiro se a palavra `normWord` aparece em `text`, tolerando variações de gênero/número/
 * sufixo do português (ex.: buscar "geometria" deve encontrar "geométricas", "geométrico" etc.),
 * já que comparação por substring simples perde esses casos. A tolerância só entra em ação para
 * palavras com pelo menos 5 letras, para não gerar falsos positivos com palavras curtas.
 */
function matchesWord(text: string, normWord: string): boolean {
  const normText = normalize(text);
  if (normText.includes(normWord)) return true;
  if (normWord.length < 5) return false;
  const words = normText.split(/[^a-z0-9]+/).filter(Boolean);
  return words.some((word) => {
    const shared = commonPrefixLength(word, normWord);
    const threshold = Math.max(4, Math.min(word.length, normWord.length) - 2);
    return shared >= threshold;
  });
}

/** Verdadeiro se cada palavra de `normTerm` (busca com espaço, ex.: "produção textual") aparece
 * em algum lugar do texto combinado da entrada — não precisa ser a frase exata nem estar no
 * mesmo campo. */
function matchesEntry(haystack: string, normTerm: string): boolean {
  const words = normTerm.split(/\s+/).filter(Boolean);
  return words.every((word) => matchesWord(haystack, word));
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
    candidates = bank.filter((entry) =>
      matchesEntry([entry.theme, entry.description, entry.genre ?? ""].join(" "), normTerm)
    );
    if (candidates.length === 0) return EMPTY_PICK;
  }

  const recentSet = new Set(recentThemes);
  const available = candidates.filter((entry) => !recentSet.has(entry.theme));
  const pool = available.length > 0 ? available : candidates;

  const index = Math.floor(Math.random() * pool.length);
  return toPicked(pool[index]);
}
