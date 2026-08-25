// Registro central: qual banco de temas (src/data/themeBank*.ts) usar para cada combinação de
// rede de ensino + ano/série. THEME_BANK (em themeBank.ts) é implicitamente "prefeitura, 2º ano" —
// mantido com esse nome por compatibilidade com quem já importa direto de lá.

import { BankEntry, OwnSubject } from "@/types/plano";
import { Network } from "@/types/profile";
import { THEME_BANK as PREFEITURA_2_ANO } from "./themeBank";
import { ESTADO_2_ANO_THEME_BANK } from "./themeBankEstado2Ano";
import { PREFEITURA_1_ANO_THEME_BANK } from "./themeBankPrefeitura1Ano";
import { PREFEITURA_3_ANO_THEME_BANK } from "./themeBankPrefeitura3Ano";
import { PREFEITURA_4_ANO_THEME_BANK } from "./themeBankPrefeitura4Ano";
import { PREFEITURA_5_ANO_THEME_BANK } from "./themeBankPrefeitura5Ano";
import { ESTADO_1_ANO_THEME_BANK } from "./themeBankEstado1Ano";
import { ESTADO_3_ANO_THEME_BANK } from "./themeBankEstado3Ano";
import { ESTADO_4_ANO_THEME_BANK } from "./themeBankEstado4Ano";
import { ESTADO_5_ANO_THEME_BANK } from "./themeBankEstado5Ano";

type SubjectBank = Record<OwnSubject, BankEntry[]>;

const REGISTRY: Partial<Record<Network, Partial<Record<string, SubjectBank>>>> = {
  prefeitura: {
    "1-ano": PREFEITURA_1_ANO_THEME_BANK,
    "2-ano": PREFEITURA_2_ANO,
    "3-ano": PREFEITURA_3_ANO_THEME_BANK,
    "4-ano": PREFEITURA_4_ANO_THEME_BANK,
    "5-ano": PREFEITURA_5_ANO_THEME_BANK,
  },
  estado: {
    "1-ano": ESTADO_1_ANO_THEME_BANK,
    "2-ano": ESTADO_2_ANO_THEME_BANK,
    "3-ano": ESTADO_3_ANO_THEME_BANK,
    "4-ano": ESTADO_4_ANO_THEME_BANK,
    "5-ano": ESTADO_5_ANO_THEME_BANK,
  },
};

export function getThemeBank(network: Network, gradeYear: string): SubjectBank | null {
  return REGISTRY[network]?.[gradeYear] ?? null;
}

export function hasThemeBank(network: Network, gradeYear: string): boolean {
  return getThemeBank(network, gradeYear) !== null;
}

/** Anos com banco de conteúdo pronto para a rede informada — usado pra habilitar/desabilitar
 * opções no seletor de ano/série do Perfil conforme a rede escolhida. */
export function availableGradesFor(network: Network): string[] {
  return Object.keys(REGISTRY[network] ?? {});
}
