type Props = {
  size?: number;
  className?: string;
};

/** Cabecinha de gato girando — spinner para botões em estado de carregamento. Silhueta em
 * currentColor pra herdar a cor do texto do botão (branco no sólido, laranja no outline). */
export function CatSpinner({ size = 16, className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      className={`inline-block shrink-0 animate-spin motion-reduce:animate-none ${className}`}
    >
      <g fill="currentColor">
        <circle cx="50" cy="54" r="30" />
        <path d="M26 40 L34 14 L44 34 Z" />
        <path d="M74 40 L66 14 L56 34 Z" />
      </g>
    </svg>
  );
}
