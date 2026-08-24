import { OnekoPet } from "./OnekoPet";
import { PawTrail } from "./PawTrail";

type Props = {
  theme: string;
};

/** Efeitos decorativos por tema. O gatinho e o rastro de patinhas são GIFs locais (recortados
 * e tratados a partir de clipes já licenciados) — nada baixado de fora em tempo de execução,
 * nada de lib externa além do sprite do oneko (MIT, ver public/brand/ONEKO-LICENSE.txt). */
export function ThemeEffects({ theme }: Props) {
  if (theme !== "gatinho") return null;

  return (
    <>
      <div className="gatinho-cat-walker print:hidden" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="gatinho-cat-gif" src="/brand/gatinho-walk.gif" alt="" />
      </div>
      <PawTrail />
      <OnekoPet />
    </>
  );
}
