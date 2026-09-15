import { Szyna } from "@/components/landing/szyna";
import { Nawigacja } from "@/components/landing/nawigacja";
import { Naglowek } from "@/components/landing/naglowek";
import { CoRobimy } from "@/components/landing/co-robimy";
import { Dlaczego } from "@/components/landing/dlaczego";
import { Pomnik } from "@/components/landing/pomnik";
import { Realizacja } from "@/components/landing/realizacja";
import { Kreator } from "@/components/landing/kreator";
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
        <CoRobimy />
        <Dlaczego />
        <Pomnik />
        <Realizacja />
        <Kreator />
        <Kontakt />
      </main>

      <Stopka />
    </div>
  );
}
