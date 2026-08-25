"use client";

import { useEffect, useRef, useState } from "react";
import { getGenreIllustration } from "@/data/genreIllustrations";

type Props = {
  theme: string;
  genre: string;
  text: string;
  onClose: () => void;
};

/** Cada parágrafo do texto vira um "slide" — do tamanho certo pra ler em voz alta sem
 * lotar a tela de uma vez, pensado pra projetar no telão e a turma acompanhar junto. */
function toSlides(text: string): string[] {
  return text
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);
}

/** Tela cheia de leitura pra projetar: texto grande, sempre em caixa alta (letra de forma,
 * como a turma está aprendendo a ler), um parágrafo por vez. Pedimos Fullscreen API real
 * (não só CSS fixed) porque é isso que tira a barra do navegador do telão.
 *
 * `step` vai de -1 (capa com a ilustração do gênero, só existe se houver ilustração) até
 * slides.length - 1 (última página de texto). Sem ilustração pro gênero, começa direto em 0. */
export function ReadingPresentationMode({ theme, genre, text, onClose }: Props) {
  const slides = toSlides(text);
  const illustration = getGenreIllustration(genre);
  const [step, setStep] = useState(illustration ? -1 : 0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.requestFullscreen?.().catch(() => {
      // Navegador recusou (ex.: sem gesto do usuário) — segue só com o overlay fixed mesmo.
    });
    return () => {
      if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
    };
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setStep((s) => Math.min(s + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setStep((s) => Math.max(s - 1, illustration ? -1 : 0));
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, slides.length, illustration]);

  const isCover = step === -1;
  const isFirst = illustration ? isCover : step === 0;
  const isLast = step === slides.length - 1;

  return (
    // stopPropagation: este overlay é renderizado como filho da div de fundo do
    // LessonDetailModal (onClick={onClose}) — sem isso, qualquer clique aqui dentro
    // (inclusive nos botões) borbulha e fecha o modal inteiro por trás.
    <div
      ref={containerRef}
      className="fixed inset-0 z-[60] flex flex-col bg-[var(--ink-900)] text-white"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between px-6 sm:px-10 pt-6 sm:pt-8">
        <div>
          <div className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[var(--plum-300)]">
            {genre}
          </div>
          <div
            className="text-lg sm:text-xl mt-1"
            style={{ fontFamily: "var(--font-display)", textTransform: "uppercase" }}
          >
            {theme}
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="text-white/70 hover:text-white text-2xl leading-none transition-colors px-2"
          aria-label="Fechar modo leitura"
        >
          ×
        </button>
      </div>

      {isCover ? (
        <div className="flex-1 flex flex-col items-center justify-center px-6 gap-6">
          {illustration && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={illustration}
              alt=""
              className="w-full max-w-sm sm:max-w-md rounded-[var(--radius-lg)] bg-[var(--surface-subtle)]"
            />
          )}
          <button
            type="button"
            onClick={() => setStep(0)}
            className="text-base sm:text-lg px-6 py-3 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)]"
          >
            Começar a leitura →
          </button>
        </div>
      ) : (
        <div className="flex-1 relative flex items-center justify-center px-6 sm:px-16 py-8">
          <p
            key={step}
            className="max-w-4xl text-center leading-[1.5] text-[clamp(28px,5vw,56px)]"
            style={{ fontFamily: "var(--font-display)", textTransform: "uppercase", fontWeight: "var(--weight-bold)" }}
          >
            {slides[step]}
          </p>
          {illustration && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={illustration}
              alt=""
              className="hidden sm:block absolute bottom-4 right-4 w-20 h-16 object-contain rounded-[var(--radius-md)] bg-[var(--surface-subtle)] opacity-90"
            />
          )}
        </div>
      )}

      <div className="flex flex-col items-center gap-4 pb-8 sm:pb-10 px-6">
        {!isCover && (
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i)}
                aria-label={`Ir para parte ${i + 1}`}
                className="w-2.5 h-2.5 rounded-full transition-colors"
                style={{ background: i === step ? "var(--plum-400)" : "rgba(255,255,255,0.25)" }}
              />
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 sm:gap-6">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(s - 1, illustration ? -1 : 0))}
            disabled={isFirst}
            className="text-sm sm:text-base px-5 py-2.5 rounded-full border border-white/25 text-white transition-colors hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
          >
            ← Anterior
          </button>
          <div className="text-sm text-white/60 tabular-nums">
            {isCover ? "Capa" : `${step + 1} / ${slides.length}`}
          </div>
          {isLast ? (
            <button
              type="button"
              onClick={onClose}
              className="text-sm sm:text-base px-5 py-2.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)]"
            >
              Encerrar
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStep((s) => Math.min(s + 1, slides.length - 1))}
              className="text-sm sm:text-base px-5 py-2.5 rounded-full bg-[var(--action-primary)] text-white transition-colors hover:bg-[var(--action-primary-hover)]"
            >
              Próxima →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
