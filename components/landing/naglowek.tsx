import Link from "next/link";
import { Przebicie } from "@/components/przebicie";
import { KadrHero } from "./kadr-hero";
import { IkonaStrzalka } from "@/components/ikony";

/** Sześć powodów, dla których nauczyciel ma to otworzyć. Rejestr, nie kafelki. */
const KORZYSCI = [
  { etykieta: "45 minut", tresc: "Materiał mieści się w jednej lekcji." },
  {
    etykieta: "Bez instalacji",
    tresc: "Uczniowie korzystają z telefonu lub komputera.",
  },
  {
    etykieta: "Mniej przygotowania",
    tresc: "Materiały i przebieg lekcji są gotowe.",
  },
  {
    etykieta: "Oparte na źródłach",
    tresc: "Fakt, rekonstrukcja i narracja są jasno rozdzielone.",
  },
  {
    etykieta: "Aktywna praca ucznia",
    tresc: "Uczeń analizuje, wybiera i dyskutuje.",
  },
  {
    etykieta: "Punkt wyjścia do rozmowy",
    tresc: "Decyzje uczniów naturalnie prowadzą do dyskusji w klasie.",
  },
];

export function Naglowek() {
  return (
    <section
      id="platforma"
      className="relative overflow-x-clip px-5 pt-12 pb-0 sm:px-8 sm:pt-16"
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,24rem)] lg:items-start lg:gap-14">
        {/* Lewa kolumna — klauzula pierwsza */}
        <div className="relative">
          <span
            className="paragraf block text-[clamp(2.5rem,7vw,6rem)]"
            aria-hidden="true"
          >
            §01
          </span>

          <Przebicie
            as="h1"
            className="mt-4 max-w-none font-display text-[clamp(2.125rem,4.2vw,3.75rem)] leading-[1] font-black tracking-[-0.035em] text-przebicie text-balance [font-stretch:125%] sm:max-w-[22ch]"
          >
            Historia, w której każda decyzja ma konsekwencje.
          </Przebicie>

          <Przebicie opoznienie={140} className="mt-8 max-w-[56ch]">
            <p className="text-[1.0625rem] leading-[1.65] text-przebicie-2 sm:text-[1.125rem]">
              <strong className="font-semibold text-przebicie">
                Cienie Rzeczypospolitej
              </strong>{" "}
              to interaktywne lekcje historii dla szkół, oparte na źródłach i
              prawdziwych wydarzeniach. Uczeń analizuje sytuację, podejmuje
              decyzje i poznaje ich konsekwencje — nauczyciel otrzymuje gotowy
              materiał na 45-minutową lekcję.
            </p>
          </Przebicie>

          {/* Jedna akcja główna. Logowanie stoi pod nią, nie obok — to nie jest
              wybór równorzędny dla kogoś, kto trafia tu pierwszy raz.
              TODO(demo): docelowo publiczna trasa z fragmentem gry bez logowania.
              Dziś /panel odbija na /logowanie, więc dopisek obiecuje więcej,
              niż produkt daje. */}
          <div className="mt-10">
            <Link href="/panel" className="stempel">
              Wypróbuj historię
              <IkonaStrzalka className="h-4 w-4" />
            </Link>

            <p className="mt-4 max-w-[42ch] text-[0.9375rem] leading-relaxed text-przebicie-3">
              Zobacz fragment „Ciszy nad Raszową” z perspektywy ucznia.
            </p>

            <p className="mt-3 font-mono text-[0.6875rem] tracking-[0.12em] text-przebicie-3 uppercase">
              Masz już konto?{" "}
              <Link
                href="/logowanie"
                className="text-przebicie underline decoration-linia-mocna underline-offset-[0.4em] transition-colors duration-200 hover:text-stempel-jasny hover:decoration-stempel"
              >
                Zaloguj się →
              </Link>
            </p>
          </div>
        </div>

        {/* Prawa kolumna — kadr z gry. Dowód zamiast opisu. */}
        <Przebicie opoznienie={260} className="lg:pt-3">
          <KadrHero />
        </Przebicie>
      </div>

      {/* Rozdzielnik — kto dostaje ten dokument */}
      <div className="linia-dokumentu mx-auto mt-16 w-full max-w-[1240px] sm:mt-20">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 py-4 font-mono text-[0.625rem] tracking-[0.2em] text-przebicie-3 uppercase sm:gap-x-4">
          <span className="text-przebicie-2">Rozdzielnik</span>
          <span aria-hidden="true" className="h-px w-6 bg-linia-mocna" />
          <span>Nauczyciele</span>
          <span aria-hidden="true">·</span>
          <span>Uczniowie</span>
          <span aria-hidden="true">·</span>
          <span>Muzea</span>
          <span aria-hidden="true">·</span>
          <span>Instytucje pamięci</span>
        </p>
      </div>

      {/* Sześć powodów. Rejestr na liniach — wiersze nie dostają tła. */}
      <div className="mx-auto w-full max-w-[1240px]">
        <ul className="grid border-t border-linia sm:grid-cols-2 lg:grid-cols-3">
          {KORZYSCI.map((k, i) => (
            <Przebicie
              as="li"
              key={k.etykieta}
              opoznienie={i * 60}
              className="border-b border-linia py-5 sm:py-6 sm:[&:nth-child(odd)]:pr-8 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:border-linia sm:[&:nth-child(even)]:pl-8 lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+2)]:border-linia lg:[&:nth-child(3n+2)]:pl-8 lg:[&:nth-child(3n)]:border-l lg:[&:nth-child(3n)]:border-linia lg:[&:nth-child(3n)]:pl-8"
            >
              <p className="font-display text-[0.8125rem] font-extrabold tracking-[0.12em] text-stempel-jasny uppercase [font-stretch:112%]">
                {k.etykieta}
              </p>
              <p className="mt-2 max-w-[34ch] text-[0.9375rem] leading-relaxed text-przebicie-2">
                {k.tresc}
              </p>
            </Przebicie>
          ))}
        </ul>
      </div>
    </section>
  );
}
