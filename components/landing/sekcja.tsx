import type { ReactNode } from "react";
import { Przebicie } from "@/components/przebicie";

type Props = {
  id: string;
  /** Numer klauzuli — szyna po lewej pokazuje ten sam numer podczas czytania. */
  nr: string;
  tytul: ReactNode;
  lead?: ReactNode;
  children: ReactNode;
};

export function Sekcja({ id, nr, tytul, lead, children }: Props) {
  return (
    <section
      id={id}
      className="scroll-mt-4 border-t border-linia px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto w-full max-w-[1240px]">
        {/* Numer klauzuli stoi nad tytułem: przy tej skali jest masą trzymającą
            kompozycję, a nie etykietą, i zostawia tytułowi całą kolumnę. */}
        <span
          className="paragraf block text-[clamp(2.75rem,7.5vw,6.5rem)]"
          aria-hidden="true"
        >
          §{nr}
        </span>

        <Przebicie
          as="h2"
          className="mt-3 max-w-none font-display text-[clamp(1.75rem,3.4vw,2.875rem)] leading-[1.02] font-black tracking-[-0.03em] text-przebicie text-balance [font-stretch:125%] sm:max-w-[26ch]"
        >
          {tytul}
        </Przebicie>

        {lead ? (
          <div className="mt-7 max-w-[62ch]">
            <p className="text-[1.0625rem] leading-[1.7] text-przebicie-2">
              {lead}
            </p>
          </div>
        ) : null}

        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
