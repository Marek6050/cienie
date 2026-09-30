import { Szyna } from "@/components/landing/szyna";
import { Nawigacja } from "@/components/landing/nawigacja";
import { Naglowek } from "@/components/landing/naglowek";
import { Doswiadczenie } from "@/components/landing/doswiadczenie";
import { JakToDziala } from "@/components/landing/jak-to-dziala";
import { WSrodku } from "@/components/landing/w-srodku";
import { Realizacja } from "@/components/landing/realizacja";
import { Pomnik } from "@/components/landing/pomnik";
import { Metodologia } from "@/components/landing/metodologia";
import { Kreator } from "@/components/landing/kreator";
import { DlaSzkol, DlaMuzeow } from "@/components/landing/dla-instytucji";
import { KimJestesmy } from "@/components/landing/kim-jestesmy";
import { Kontakt, Stopka } from "@/components/landing/kontakt";

export default function Strona() {
  return (
    <div className="kalka min-h-svh lg:pl-[68px]">
      <a
        href="#platforma"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-stempel focus:px-4 focus:py-2 focus:font-mono focus:text-[0.6875rem] focus:tracking-[0.12em] focus:text-white focus:uppercase"
      >
        Przejdź do treści
      </a>

      <Szyna />
      <Nawigacja />

      <main>
        <Naglowek />
        <Doswiadczenie />
        <JakToDziala />
        <WSrodku />
        <Realizacja />
        <Pomnik />
        <Metodologia />
        <Kreator />
        <DlaSzkol />
        <DlaMuzeow />
        <KimJestesmy />
        <Kontakt />
      </main>

      <Stopka />
    </div>
  );
}
