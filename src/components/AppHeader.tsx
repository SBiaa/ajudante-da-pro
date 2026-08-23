export function AppHeader() {
  return (
    <div className="print:hidden relative overflow-hidden rounded-[var(--radius-lg)] bg-[var(--surface-brand)] px-6 py-6 mb-6 shadow-[var(--shadow-brand)]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/star-white.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-10 -right-10 w-[220px] h-[220px] opacity-[0.08]"
      />
      <div className="relative flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/star-crimson.png" alt="" aria-hidden="true" className="w-6 h-6 flex-none" />
        <div>
          <h1 className="text-[28px] leading-tight text-white">Plano de Aula Semanal</h1>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--plum-200)]">
            2º ano · Ensino Fundamental 1 · SME-SP
          </p>
        </div>
      </div>
    </div>
  );
}
