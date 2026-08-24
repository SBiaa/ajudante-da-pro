type Props = {
  message?: string;
  className?: string;
};

/** Tela de carregamento entre navegações (usada em loading.tsx e enquanto o estado local
 * hidrata) — a marca (cabeça de gato) "pipoca" em loop no lugar do "Carregando..." sem graça
 * de antes. */
export function LoadingScreen({ message = "Carregando...", className = "" }: Props) {
  return (
    <div className={`flex-1 flex flex-col items-center justify-center gap-3 py-16 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/logo-mark.svg"
        alt=""
        aria-hidden="true"
        className="w-16 h-16 animate-cat-pop motion-reduce:animate-none"
      />
      <p className="text-sm text-[var(--text-muted)]">{message}</p>
    </div>
  );
}
