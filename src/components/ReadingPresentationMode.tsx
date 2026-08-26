"use client";

import { useEffect, useRef, useState } from "react";
import { getGenreIllustration } from "@/data/genreIllustrations";

type Props = {
  theme: string;
  genre: string;
  text: string;
  onClose: () => void;
};

/** Gêneros de fluxo narrativo (contar uma história do início ao fim): aqui a estrutura que
 * importa é a sequência dos acontecimentos, não blocos formais — então mantém o modo antigo,
 * um trecho por tela substituindo o anterior, validado com as professoras ("bom ir passando
 * os slides"). Todo o resto (poema, notícia, receita, carta...) tem partes formais (estrofe,
 * manchete, ingredientes...) que só fazem sentido vistas juntas — ver `blocksFromText` abaixo. */
const NARRATIVE_GENRES = new Set([
  "fábula",
  "conto",
  "lenda",
  "história original",
  "mito",
  "conto acumulativo",
  "conto de assombração",
  "relato de experiência",
]);

/** Gêneros em que os blocos separados por linha em branco são estrofes de UM poema só
 * (rotulados "1ª estrofe", "2ª estrofe"...). */
const STANZA_GENRES = new Set(["poema", "poema de cordel", "cantiga"]);

/** Gêneros em que cada bloco é um poema/texto curto independente dentro de uma coletânea
 * (rotulados pelo nome do gênero + número: "Haicai 1", "Haicai 2"...). */
const ITEM_GENRE_LABELS: Record<string, string> = {
  haicai: "Haicai",
  parlenda: "Parlenda",
  quadrinha: "Quadrinha",
  "trava-língua": "Trava-língua",
  adivinha: "Adivinha",
  limerique: "Limerique",
};

function ordinal(n: number): string {
  return `${n}ª`;
}

/** Quebra o texto em blocos (parágrafo, estrofe, seção) usando as linhas em branco que o
 * próprio banco de leitura já usa para separar essas partes — ver entradas em themeBank.ts. */
function blocksFromText(text: string): string[] {
  return text
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);
}

/** Mesma lógica de sempre para os gêneros narrativos: cada linha (fala, frase) vira uma tela. */
function toSlides(text: string): string[] {
  return text
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);
}

/** Alguns trechos narrativos são parágrafos inteiros, não só uma fala curta — no tamanho de
 * fonte padrão (pensado pra 1-2 linhas) eles estourariam a altura do telão. Reduz a fonte
 * conforme o trecho cresce pra continuar cabendo na tela sem precisar rolar na maioria dos
 * casos (o overflow-y-auto do container cobre o resto). */
function fontSizeForSlide(text: string): string {
  if (text.length > 260) return "clamp(18px,3vw,28px)";
  if (text.length > 180) return "clamp(20px,3.4vw,32px)";
  if (text.length > 110) return "clamp(22px,4vw,40px)";
  return "clamp(28px,5vw,56px)";
}

/** Rótulo pedagógico de um bloco, quando o gênero permite reconhecer sua função no texto
 * (estrofe, manchete, ingredientes...). Undefined = mostra o bloco sem rótulo. */
function labelForBlock(genre: string, index: number, blocks: string[]): string | undefined {
  if (blocks.length <= 1) return undefined;

  if (STANZA_GENRES.has(genre)) return `${ordinal(index + 1)} estrofe`;

  const itemLabel = ITEM_GENRE_LABELS[genre];
  if (itemLabel) return `${itemLabel} ${index + 1}`;

  if (genre === "notícia" || genre === "reportagem") {
    const isClosing = index === blocks.length - 1 && /^fim da edição/i.test(blocks[index]);
    if (isClosing) return "Fechamento";
    if (index === 0) return "Cabeçalho";
    if (index === 1) return "Manchete";
    return genre === "reportagem" ? "Corpo da reportagem" : "Corpo da notícia";
  }

  if (genre === "receita") {
    if (/^ingredientes:/i.test(blocks[index])) return "Ingredientes";
    if (/^modo de (preparo|fazer):/i.test(blocks[index])) return "Modo de preparo";
    return undefined;
  }

  if (genre === "tirinha/HQ") {
    const match = blocks[index].match(/^quadrinho\s+(\d+)/i);
    return match ? `Quadro ${match[1]}` : undefined;
  }

  return undefined;
}

/** Conteúdo exibido de um bloco: tira a linha de cabeçalho ("Ingredientes:") quando ela já
 * virou o rótulo acima do bloco, pra não repetir a mesma informação duas vezes. */
function contentForBlock(genre: string, index: number, blocks: string[]): string {
  const block = blocks[index];
  if (genre === "receita" && /^(ingredientes|modo de (preparo|fazer)):\s*\n?/i.test(block)) {
    return block.replace(/^(ingredientes|modo de (preparo|fazer)):\s*\n?/i, "").trim();
  }
  return block;
}

/** Tela cheia de leitura pra projetar: texto grande, sempre em caixa alta (letra de forma,
 * como a turma está aprendendo a ler). Pedimos Fullscreen API real (não só CSS fixed) porque
 * é isso que tira a barra do navegador do telão.
 *
 * Dois modos de avançar, escolhidos pelo gênero (ver NARRATIVE_GENRES):
 * - narrativo: cada "próxima" TROCA a tela pelo trecho seguinte (história correndo).
 * - estruturado (poema, notícia, receita...): cada "próxima" ACRESCENTA um bloco novo à tela,
 *   mantendo os anteriores visíveis — assim a turma enxerga a estrutura do texto (estrofes,
 *   manchete + corpo, ingredientes + modo de preparo...) se formando, em vez de um bloco
 *   substituir o outro. Pedido das professoras: "a criança precisa enxergar a estrutura".
 *
 * `step` vai de -1 (capa com a ilustração do gênero, só existe se houver ilustração) até
 * units.length - 1 (última parte do texto — última tela no modo narrativo, ou todos os blocos
 * revelados no modo estruturado). Sem ilustração pro gênero, começa direto em 0. */
export function ReadingPresentationMode({ theme, genre, text, onClose }: Props) {
  const isNarrative = NARRATIVE_GENRES.has(genre);
  const slides = isNarrative ? toSlides(text) : [];
  const blocks = isNarrative ? [] : blocksFromText(text);
  const units = isNarrative ? slides : blocks;

  const illustration = getGenreIllustration(genre);
  const [step, setStep] = useState(illustration ? -1 : 0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const narrativeScrollRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

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
        setStep((s) => Math.min(s + 1, units.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setStep((s) => Math.max(s - 1, illustration ? -1 : 0));
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, units.length, illustration]);

  useEffect(() => {
    if (isNarrative && narrativeScrollRef.current) {
      narrativeScrollRef.current.scrollTop = 0;
    }
  }, [step, isNarrative]);

  useEffect(() => {
    if (!isNarrative && step >= 0) {
      blockRefs.current[step]?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [step, isNarrative]);

  const isCover = step === -1;
  const isFirst = illustration ? isCover : step === 0;
  const isLast = step === units.length - 1;

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
      ) : isNarrative ? (
        <div ref={narrativeScrollRef} className="flex-1 relative min-h-0 overflow-y-auto px-6 sm:px-16 py-8">
          <div className="min-h-full flex items-center justify-center">
            <p
              key={step}
              className="max-w-4xl text-center leading-[1.5]"
              style={{
                fontFamily: "var(--font-display)",
                textTransform: "uppercase",
                fontWeight: "var(--weight-bold)",
                fontSize: fontSizeForSlide(slides[step]),
              }}
            >
              {slides[step]}
            </p>
          </div>
          {illustration && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={illustration}
              alt=""
              className="hidden sm:block absolute bottom-4 right-4 w-20 h-16 object-contain rounded-[var(--radius-md)] bg-[var(--surface-subtle)] opacity-90"
            />
          )}
        </div>
      ) : (
        <div className="flex-1 relative min-h-0 px-6 sm:px-16 py-8">
          <div ref={scrollAreaRef} className="h-full overflow-y-auto flex flex-col items-center gap-10">
            <div className="flex-1" style={{ flexGrow: 0.0001 }} />
            {blocks.slice(0, step + 1).map((_, i) => {
              const label = labelForBlock(genre, i, blocks);
              const content = contentForBlock(genre, i, blocks);
              return (
                <div
                  key={i}
                  ref={(el) => {
                    blockRefs.current[i] = el;
                  }}
                  className="max-w-4xl w-full text-center"
                >
                  {label && (
                    <div className="text-xs sm:text-sm font-medium uppercase tracking-[0.22em] text-[var(--plum-300)] mb-2">
                      {label}
                    </div>
                  )}
                  <p
                    className="leading-[1.45] text-[clamp(20px,3vw,38px)]"
                    style={{
                      fontFamily: "var(--font-display)",
                      textTransform: "uppercase",
                      fontWeight: "var(--weight-bold)",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {content}
                  </p>
                </div>
              );
            })}
          </div>
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
            {units.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setStep(i)}
                aria-label={
                  isNarrative ? `Ir para parte ${i + 1}` : `Mostrar até o bloco ${i + 1}`
                }
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
            {isCover ? "Capa" : `${step + 1} / ${units.length}`}
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
              onClick={() => setStep((s) => Math.min(s + 1, units.length - 1))}
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
