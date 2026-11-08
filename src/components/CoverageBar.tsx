type Props = {
  /** Habilidades com pelo menos uma aula marcada como dada. */
  given: number;
  /** Habilidades que só estão planejadas (aparecem numa semana, mas nenhuma aula foi dada). */
  planned: number;
  total: number;
  /** Mostra a legenda "dadas / planejadas" embaixo da barra. */
  legend?: boolean;
};

/** Barra de cobertura em duas camadas: verde cheio = dado em aula, laranja claro = só planejado.
 * Antes era uma barra só, que contava como "trabalhada" qualquer habilidade que aparecesse numa
 * semana, mesmo que a aula ainda não tivesse acontecido. */
export function CoverageBar({ given, planned, total, legend = false }: Props) {
  const pct = (n: number) => (total > 0 ? (n / total) * 100 : 0);
  return (
    <div>
      <div
        role="img"
        aria-label={`${given} dadas e ${planned} planejadas, de ${total} habilidades`}
        className="flex h-2 rounded-full bg-[var(--ink-100)] overflow-hidden"
      >
        <span className="h-full bg-[var(--green-600)]" style={{ width: `${pct(given)}%` }} />
        <span className="h-full bg-[var(--plum-300)]" style={{ width: `${pct(planned)}%` }} />
      </div>
      {legend && (
        <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[var(--text-muted)]">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[var(--green-600)]" aria-hidden="true" />
            Dadas
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[var(--plum-300)]" aria-hidden="true" />
            Só planejadas
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-sm bg-[var(--ink-100)]" aria-hidden="true" />
            Ainda não
          </span>
        </div>
      )}
    </div>
  );
}
