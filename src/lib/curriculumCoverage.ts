import { OwnSubject, WeekPlan } from "@/types/plano";
import { Network } from "@/types/profile";
import { getThemeBank } from "@/data/curriculumBanks";

export type CodeCoverage = {
  code: string;
  /** Tema de referência do banco (ou aviso, se o código não bate com nenhuma entrada do banco). */
  label: string;
  /** Nº de vezes que o código foi sorteado/registrado em uma aula, no período filtrado. */
  count: number;
  /** Temas distintos de fato usados sob esse código (útil quando o código do banco cobre mais de
   * uma entrada, ou quando a professora editou o tema à mão). */
  themes: string[];
  weekIds: string[];
  /** false quando o código veio de uma edição manual e não corresponde a nenhum do banco local. */
  inBank: boolean;
};

export type CoverageRange = { from?: string; to?: string };

function inRange(weekStartDate: string, range: CoverageRange): boolean {
  if (range.from && weekStartDate < range.from) return false;
  if (range.to && weekStartDate > range.to) return false;
  return true;
}

/** Códigos do banco de temas para a matéria, na ordem em que aparecem no documento oficial, sem
 * repetir — cada código guarda o tema da primeira entrada como rótulo de referência. */
function bankCodesFor(network: Network, gradeYear: string, subject: OwnSubject): { code: string; label: string }[] {
  const bank = getThemeBank(network, gradeYear);
  if (!bank) return [];
  const seen = new Set<string>();
  const result: { code: string; label: string }[] = [];
  for (const entry of bank[subject]) {
    if (!entry.curriculumCode || seen.has(entry.curriculumCode)) continue;
    seen.add(entry.curriculumCode);
    result.push({ code: entry.curriculumCode, label: entry.theme });
  }
  return result;
}

/**
 * Cruza os códigos do Currículo da Cidade cadastrados no banco de temas com o que de fato foi
 * dado em aula (lido das semanas salvas), pra evidenciar quais habilidades já foram trabalhadas,
 * quantas vezes e quais ainda não — inclui códigos com 0 usos de propósito, pra servir de checklist
 * de prestação de contas.
 */
export function computeCurriculumCoverage(
  weeks: Record<string, WeekPlan>,
  network: Network,
  gradeYear: string,
  subject: OwnSubject,
  range: CoverageRange = {}
): CodeCoverage[] {
  const usage = new Map<string, { count: number; themes: Set<string>; weekIds: Set<string> }>();

  for (const week of Object.values(weeks)) {
    if (!inRange(week.weekStartDate, range)) continue;
    for (const day of Object.values(week.days)) {
      for (const cell of Object.values(day)) {
        if (cell.kind !== "materia-propria" || cell.subject !== subject) continue;
        const code = cell.plan.curriculumCode.trim();
        if (!code) continue;
        const bucket = usage.get(code) ?? { count: 0, themes: new Set<string>(), weekIds: new Set<string>() };
        bucket.count += 1;
        if (cell.plan.theme) bucket.themes.add(cell.plan.theme);
        bucket.weekIds.add(week.id);
        usage.set(code, bucket);
      }
    }
  }

  const bankCodes = bankCodesFor(network, gradeYear, subject);
  const bankCodeSet = new Set(bankCodes.map((c) => c.code));

  const fromBank: CodeCoverage[] = bankCodes.map(({ code, label }) => {
    const bucket = usage.get(code);
    return {
      code,
      label,
      count: bucket?.count ?? 0,
      themes: bucket ? [...bucket.themes] : [],
      weekIds: bucket ? [...bucket.weekIds] : [],
      inBank: true,
    };
  });

  const extra: CodeCoverage[] = [...usage.entries()]
    .filter(([code]) => !bankCodeSet.has(code))
    .map(([code, bucket]) => ({
      code,
      label: "Fora do banco (editado manualmente)",
      count: bucket.count,
      themes: [...bucket.themes],
      weekIds: [...bucket.weekIds],
      inBank: false,
    }))
    .sort((a, b) => (a.code < b.code ? -1 : 1));

  return [...fromBank, ...extra];
}
