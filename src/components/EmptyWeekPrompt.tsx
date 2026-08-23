"use client";

type Props = {
  hasPreviousWeek: boolean;
  onCreateBlank: () => void;
  onDuplicatePrevious: () => void;
};

export function EmptyWeekPrompt({ hasPreviousWeek, onCreateBlank, onDuplicatePrevious }: Props) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-dashed border-[var(--border-strong)] bg-white p-8 text-center">
      <p className="text-[var(--text-muted)] mb-4">Essa semana ainda não tem plano criado.</p>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={onCreateBlank}
          type="button"
          className="text-sm px-5 py-2 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)] active:scale-[0.975]"
        >
          Criar semana em branco
        </button>
        <button
          onClick={onDuplicatePrevious}
          disabled={!hasPreviousWeek}
          type="button"
          className="text-sm px-5 py-2 rounded-full border border-[var(--plum-900)] text-[var(--plum-900)] transition-colors hover:bg-[var(--plum-900)] hover:text-white disabled:opacity-[0.38] disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[var(--plum-900)]"
          title={hasPreviousWeek ? undefined : "Não há uma semana anterior salva"}
        >
          Duplicar semana anterior
        </button>
      </div>
    </div>
  );
}
