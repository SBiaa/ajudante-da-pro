"use client";

import { useEffect, useRef, useState } from "react";

const STRIDE_PX = 46; // distância entre uma pegada e a próxima ao longo do caminho
const STRADDLE_PX = 15; // afastamento pra cada lado, imitando pata esquerda/direita
const MIN_STEPS = 9;
const MAX_STEPS = 20;
const STAGGER_MS = 650; // intervalo entre uma pegada aparecer e a próxima
const APPEAR_MS = 500; // duração da animação de entrada de cada pegada (bate com o CSS)
const HOLD_MS = 3000; // quanto tempo o rastro completo fica parado na tela
const LEAVE_MS = 900; // duração do fade-out (bate com o CSS)

type Paw = { x: number; y: number; rot: number; delay: number };

/** Acha o ponto na borda da tela correspondente à distância `t` andada ao longo do
 * perímetro, começando no canto superior-esquerdo e indo em sentido horário. */
function pointOnPerimeter(t: number, w: number, h: number): [number, number] {
  const perimeter = 2 * (w + h);
  let d = ((t % perimeter) + perimeter) % perimeter;
  if (d <= w) return [d, 0];
  d -= w;
  if (d <= h) return [w, d];
  d -= h;
  if (d <= w) return [w - d, h];
  d -= w;
  return [0, h - d];
}

/** Sorteia um caminho reto ligando dois pontos aleatórios de bordas diferentes da tela
 * (pra sempre "surgir numa ponta e terminar em outra"), com pegadas em ziguezague. */
function buildPath(): Paw[] {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const perimeter = 2 * (w + h);

  const t0 = Math.random() * perimeter;
  const t1 = t0 + perimeter * (0.35 + Math.random() * 0.3);
  const [x0, y0] = pointOnPerimeter(t0, w, h);
  const [x1, y1] = pointOnPerimeter(t1, w, h);

  const dx = x1 - x0;
  const dy = y1 - y0;
  const distance = Math.hypot(dx, dy);
  const angle = Math.atan2(dy, dx);
  const perp = angle + Math.PI / 2;
  const steps = Math.min(MAX_STEPS, Math.max(MIN_STEPS, Math.round(distance / STRIDE_PX)));

  const paws: Paw[] = [];
  for (let i = 0; i < steps; i++) {
    const t = steps === 1 ? 0 : i / (steps - 1);
    const side = i % 2 === 0 ? 1 : -1;
    paws.push({
      x: x0 + dx * t + Math.cos(perp) * STRADDLE_PX * side,
      y: y0 + dy * t + Math.sin(perp) * STRADDLE_PX * side,
      rot: (angle * 180) / Math.PI + 90,
      delay: i * STAGGER_MS,
    });
  }
  return paws;
}

/**
 * Rastro de patinhas em CSS/JS puro (sem vídeo/gif): sorteia uma reta ligando duas bordas
 * da tela, "anda" ao longo dela surgindo pegada por pegada, para tudo parado um instante,
 * some e — pouco depois — reaparece numa direção nova. O sorteio só roda no cliente
 * (useEffect), nunca no render inicial do servidor, pra não dar erro de hidratação.
 */
export function PawTrail() {
  const [paws, setPaws] = useState<Paw[] | null>(null);
  const [leaving, setLeaving] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    function cycle() {
      const path = buildPath();
      setPaws(path);
      setLeaving(false);

      const lastDelay = path[path.length - 1]?.delay ?? 0;
      const leaveTimer = window.setTimeout(() => {
        setLeaving(true);
        const clearTimer = window.setTimeout(() => {
          setPaws(null);
          const nextTimer = window.setTimeout(cycle, 1500 + Math.random() * 2500);
          timers.current.push(nextTimer);
        }, LEAVE_MS);
        timers.current.push(clearTimer);
      }, lastDelay + APPEAR_MS + HOLD_MS);
      timers.current.push(leaveTimer);
    }

    const startTimer = window.setTimeout(cycle, 500);
    timers.current.push(startTimer);

    return () => {
      timers.current.forEach((id) => window.clearTimeout(id));
      timers.current = [];
    };
  }, []);

  if (!paws) return null;

  return (
    <div
      className={`gatinho-pawtrail-track print:hidden${leaving ? " is-leaving" : ""}`}
      aria-hidden="true"
    >
      {paws.map((paw, i) => (
        <span
          key={i}
          className="gatinho-paw-step"
          style={
            {
              left: paw.x,
              top: paw.y,
              "--paw-rot": `${paw.rot}deg`,
              "--paw-delay": `${paw.delay}ms`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
