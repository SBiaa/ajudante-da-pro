"use client";

import { useEffect, useRef } from "react";

/**
 * Gatinho que persegue o cursor, adaptado do oneko.js (adryd325/oneko.js, MIT) usando o
 * sprite "tora" do fork spicetify-oneko (kyrie25/spicetify-oneko, MIT). Aviso de licença
 * completo em public/brand/ONEKO-LICENSE.txt. Lógica de animação praticamente idêntica ao
 * original — só a montagem virou um componente React (useEffect) em vez de um script solto.
 */

const SPRITE_URL = "/brand/oneko-tora.gif";
const NEKO_SPEED = 10;

const SPRITE_SETS: Record<string, [number, number][]> = {
  idle: [[-3, -3]],
  alert: [[-7, -3]],
  scratchSelf: [
    [-5, 0],
    [-6, 0],
    [-7, 0],
  ],
  scratchWallN: [
    [0, 0],
    [0, -1],
  ],
  scratchWallS: [
    [-7, -1],
    [-6, -2],
  ],
  scratchWallE: [
    [-2, -2],
    [-2, -3],
  ],
  scratchWallW: [
    [-4, 0],
    [-4, -1],
  ],
  tired: [[-3, -2]],
  sleeping: [
    [-2, 0],
    [-2, -1],
  ],
  N: [
    [-1, -2],
    [-1, -3],
  ],
  NE: [
    [0, -2],
    [0, -3],
  ],
  E: [
    [-3, 0],
    [-3, -1],
  ],
  SE: [
    [-5, -1],
    [-5, -2],
  ],
  S: [
    [-6, -3],
    [-7, -2],
  ],
  SW: [
    [-5, -3],
    [-6, -1],
  ],
  W: [
    [-4, -2],
    [-4, -3],
  ],
  NW: [
    [-1, 0],
    [-1, -1],
  ],
};

const IDLE_ANIMATIONS = ["sleeping", "scratchSelf"] as const;

export function OnekoPet() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const el = elRef.current;
    if (!el) return;

    let nekoPosX = window.innerWidth / 2;
    let nekoPosY = window.innerHeight / 2;
    let mousePosX = nekoPosX;
    let mousePosY = nekoPosY;
    let frameCount = 0;
    let idleTime = 0;
    let idleAnimation: string | null = null;
    let idleAnimationFrame = 0;
    let lastFrameTimestamp: number | undefined;
    let rafId = 0;

    function setSprite(name: string, frame: number) {
      const set = SPRITE_SETS[name] ?? SPRITE_SETS.idle;
      const [x, y] = set[frame % set.length];
      if (el) el.style.backgroundPosition = `${x * 32}px ${y * 32}px`;
    }

    function resetIdleAnimation() {
      idleAnimation = null;
      idleAnimationFrame = 0;
    }

    function idle() {
      idleTime += 1;
      if (idleTime > 10 && Math.floor(Math.random() * 200) === 0 && idleAnimation === null) {
        const available: string[] = [...IDLE_ANIMATIONS];
        if (nekoPosX < 32) available.push("scratchWallW");
        if (nekoPosY < 32) available.push("scratchWallN");
        if (nekoPosX > window.innerWidth - 32) available.push("scratchWallE");
        if (nekoPosY > window.innerHeight - 32) available.push("scratchWallS");
        idleAnimation = available[Math.floor(Math.random() * available.length)];
      }

      switch (idleAnimation) {
        case "sleeping":
          if (idleAnimationFrame < 8) {
            setSprite("tired", 0);
            break;
          }
          setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
          if (idleAnimationFrame > 192) resetIdleAnimation();
          break;
        case "scratchWallN":
        case "scratchWallS":
        case "scratchWallE":
        case "scratchWallW":
        case "scratchSelf":
          setSprite(idleAnimation, idleAnimationFrame);
          if (idleAnimationFrame > 9) resetIdleAnimation();
          break;
        default:
          setSprite("idle", 0);
          return;
      }
      idleAnimationFrame += 1;
    }

    function frame() {
      frameCount += 1;
      const diffX = nekoPosX - mousePosX;
      const diffY = nekoPosY - mousePosY;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      if (distance < NEKO_SPEED || distance < 48) {
        idle();
        return;
      }

      idleAnimation = null;
      idleAnimationFrame = 0;

      if (idleTime > 1) {
        setSprite("alert", 0);
        idleTime = Math.min(idleTime, 7);
        idleTime -= 1;
        return;
      }

      let direction = "";
      direction += diffY / distance > 0.5 ? "N" : "";
      direction += diffY / distance < -0.5 ? "S" : "";
      direction += diffX / distance > 0.5 ? "W" : "";
      direction += diffX / distance < -0.5 ? "E" : "";
      setSprite(direction, frameCount);

      nekoPosX -= (diffX / distance) * NEKO_SPEED;
      nekoPosY -= (diffY / distance) * NEKO_SPEED;
      nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
      nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

      if (el) {
        el.style.left = `${nekoPosX - 16}px`;
        el.style.top = `${nekoPosY - 16}px`;
      }
    }

    function onAnimationFrame(timestamp: number) {
      if (!el?.isConnected) return;
      if (lastFrameTimestamp === undefined) lastFrameTimestamp = timestamp;
      if (timestamp - lastFrameTimestamp > 100) {
        lastFrameTimestamp = timestamp;
        frame();
      }
      rafId = window.requestAnimationFrame(onAnimationFrame);
    }

    function handleMouseMove(event: MouseEvent) {
      mousePosX = event.clientX;
      mousePosY = event.clientY;
    }

    el.style.left = `${nekoPosX - 16}px`;
    el.style.top = `${nekoPosY - 16}px`;
    document.addEventListener("mousemove", handleMouseMove);
    rafId = window.requestAnimationFrame(onAnimationFrame);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={elRef}
      aria-hidden="true"
      className="print:hidden"
      style={{
        position: "fixed",
        width: 32,
        height: 32,
        backgroundImage: `url(${SPRITE_URL})`,
        imageRendering: "pixelated",
        pointerEvents: "none",
        zIndex: 60,
      }}
    />
  );
}
