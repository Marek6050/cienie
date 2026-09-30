import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";
import { IkonaZrodlo, IkonaOsoby, IkonaWarstwy } from "@/components/ikony";
import { ZESPOL } from "@/lib/kontakt";

const FILARY = [
  {
    Ikona: IkonaZrodlo,
    tytul: "Historia",
    tresc:
      "Pracujemy na źródłach, relacjach, dokumentach i materiałach archiwalnych.",
  },
  {
    Ikona: IkonaOsoby,
    tytul: "Edukacja",
    tresc:
      "Projektujemy doświadczenia, które angażują ucznia i uruchamiają dyskusję.",
  },
  {
    Ikona: IkonaWarstwy,
    tytul: "Technologia",
    tresc:
      "Budujemy interaktywne formy dostępne w przeglądarce, bez zbędnych barier technicznych.",
  },
];

export function KimJestesmy() {
  return (
    <Sekcja
      id="o-nas"
      nr="10"
      tytul="Łączymy historię, edukację i technologię."
      lead={
        <>
          Cienie Rzeczypospolitej powstały z potrzeby opowiadania historii w
          sposób, który angażuje, ale nie upraszcza. Tworzymy interaktywne
          doświadczenia oparte na źródłach, projektowane z myślą o uczniach,
          nauczycielach i instytucjach kultury — żeby odbiorca nie tylko poznał
          wydarzenia, ale naprawdę się nad nimi zatrzymał.
        </>
      }
    >
      <ul className="grid border-t border-linia lg:grid-cols-3">
        {FILARY.map((f, i) => (
          <Przebicie
            as="li"
            key={f.tytul}
            opoznienie={i * 80}
            className="border-b border-linia py-7 lg:border-b-0 lg:pr-10 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:border-linia lg:[&:not(:first-child)]:pl-10"
          >
            <f.Ikona className="h-6 w-6 text-stempel-jasny" />
            <h3 className="mt-4 font-display text-[1.125rem] font-extrabold tracking-[0.02em] text-przebicie uppercase [font-stretch:112%]">
              {f.tytul}
            </h3>
            <p className="mt-2.5 max-w-[42ch] text-[0.9375rem] leading-relaxed text-przebicie-2">
              {f.tresc}
            </p>
          </Przebicie>
        ))}
      </ul>

      {/* Kto za tym stoi */}
      <Przebicie
        opoznienie={140}
        className="mt-14 border-t border-linia pt-10 lg:mt-16"
      >
        <h3 className="font-display text-[1.25rem] font-extrabold tracking-[-0.01em] text-przebicie [font-stretch:110%] sm:text-[1.4375rem]">
          Za projektem stoi zespół uczniów i nauczycieli
        </h3>
        <p className="mt-4 max-w-[62ch] text-[1rem] leading-[1.7] text-przebicie-2">
          „Cisza nad Raszową” powstała w {ZESPOL.szkolaLokatyw}.
        </p>
        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] tracking-[0.12em] text-przebicie-3 uppercase">
          <span className="text-przebicie-2">Zespół autorski</span>
          <span aria-hidden="true" className="h-px w-6 bg-linia-mocna" />
          {ZESPOL.autorzy.map((a, i) => (
            <span key={a} className="flex items-center gap-x-3">
              {i > 0 ? (
                <span aria-hidden="true" className="text-linia-mocna">
                  ·
                </span>
              ) : null}
              {a}
            </span>
          ))}
        </p>
      </Przebicie>

      {/* Puenta — to jest zdanie, z którym ma zostać nauczyciel */}
      <Przebicie opoznienie={220} className="mt-14">
        <p className="max-w-[28ch] font-display text-[clamp(1.375rem,2.6vw,2rem)] leading-[1.15] font-black tracking-[-0.025em] text-przebicie text-balance [font-stretch:125%]">
          Nie chcemy zastępować lekcji historii. Chcemy dać nauczycielom nowe
          narzędzie do jej opowiadania.
        </p>
      </Przebicie>
    </Sekcja>
  );
}
