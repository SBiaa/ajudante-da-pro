import { ColorKey } from "@/lib/subjectColors";

type Props = {
  subjectKey: ColorKey;
  className?: string;
};

/**
 * Marca visual por matéria, além da cor — reforça reconhecimento na grade sem depender
 * só do olho para cor (WCAG 1.4.1). Traço fino consistente entre os ícones; "lingua-portuguesa"
 * usa um par de letras em vez de traço porque nenhum glifo geométrico simples lê como "idioma".
 */
export function SubjectIcon({ subjectKey, className = "w-3 h-3" }: Props) {
  const common = {
    viewBox: "0 0 20 20",
    className,
    "aria-hidden": true,
    focusable: false,
  } as const;
  const strokeProps = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (subjectKey) {
    case "matematica":
      return (
        <svg {...common}>
          <path d="M10 3 4 16M10 3l6 13M6.5 11h7" {...strokeProps} />
          <circle cx="10" cy="3" r="1.1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "lingua-portuguesa":
      return (
        <svg {...common}>
          <text x="10" y="14.5" textAnchor="middle" fontSize="11" fontWeight="700" fill="currentColor">
            Aa
          </text>
        </svg>
      );
    case "historia":
      return (
        <svg {...common}>
          <path
            d="M6 3h8M6 17h8M6.5 3c0 3.2 1.6 5 3.5 7-1.9 2-3.5 3.8-3.5 7M13.5 3c0 3.2-1.6 5-3.5 7 1.9 2 3.5 3.8 3.5 7"
            {...strokeProps}
          />
        </svg>
      );
    case "geografia":
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="7" {...strokeProps} />
          <ellipse cx="10" cy="10" rx="3" ry="7" {...strokeProps} />
          <path d="M3 10h14" {...strokeProps} />
        </svg>
      );
    case "ciencias":
      return (
        <svg {...common}>
          <path
            d="M8 3h4M8.5 3v4.5L4.8 14.8c-.5 1 .2 2.2 1.3 2.2h7.8c1.1 0 1.8-1.2 1.3-2.2L11.5 7.5V3"
            {...strokeProps}
          />
          <circle cx="9" cy="12" r=".6" fill="currentColor" stroke="none" />
          <circle cx="11.5" cy="10.3" r=".5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "leitura-diaria":
      return (
        <svg {...common}>
          <path d="M2.8 5.2c2.8-1.1 5.5-.6 7.2 1V16c-1.7-1.4-4.4-1.8-7.2-.8V5.2Z" {...strokeProps} />
          <path d="M17.2 5.2c-2.8-1.1-5.5-.6-7.2 1V16c1.7-1.4 4.4-1.8 7.2-.8V5.2Z" {...strokeProps} />
        </svg>
      );
    case "externa":
      return (
        <svg {...common}>
          <path d="M10 3v14M4 6l12 8M16 6 4 14" {...strokeProps} />
        </svg>
      );
  }
}
