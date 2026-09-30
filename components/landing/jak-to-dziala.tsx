import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";
import {
  IkonaTeczka,
  IkonaTelefon,
  IkonaZrodlo,
  IkonaRozgalezienie,
  IkonaOsoby,
} from "@/components/ikony";

const KROKI = [
  {
    nr: "01",
    Ikona: IkonaTeczka,
    tytul: "Wybierz historię",
    tresc: "Nauczyciel uruchamia wybrany materiał, np. „Ciszę nad Raszową”.",
  },
  {
    nr: "02",
    Ikona: IkonaTelefon,
    tytul: "Udostępnij uczniom",
    tresc:
      "Uczniowie otwierają materiał na telefonie lub komputerze. Bez instalacji.",
  },
  {
    nr: "03",
    Ikona: IkonaZrodlo,
    tytul: "Poznaj wydarzenia",
    tresc:
      "Uczniowie pracują ze źródłami, fotografiami, mapami i relacjami świadków.",
  },
  {
    nr: "04",
    Ikona: IkonaRozgalezienie,
    tytul: "Podejmij decyzję",
    tresc:
      "W kluczowych momentach uczniowie wybierają, jak postąpić — i poznają konsekwencje swoich wyborów.",
  },
  {
    nr: "05",
    Ikona: IkonaOsoby,
    tytul: "Porozmawiaj o wyborach",
    tresc: "Klasa porównuje decyzje i wspólnie analizuje wydarzenia.",
  },
];

const PO_LEKCJI = [
  "rozumie kontekst wydarzenia",
  "pracuje ze źródłami",
  "odróżnia fakt od rekonstrukcji",
  "analizuje decyzje w realiach epoki",
  "dostrzega konsekwencje wyborów",
  "formułuje argumenty i porównuje perspektywy",
];

export function JakToDziala() {
  return (
    <Sekcja
      id="jak-to-dziala"
      nr="03"
      tytul="Jedna lekcja. Pięć prostych kroków."
      lead={
        <>
          Bez instalacji, bez dodatkowego przygotowania, bez skomplikowanej
          konfiguracji. Wybierz historię, udostępnij ją uczniom i przeprowadź
          angażującą lekcję w kilka minut.
        </>
      }
    >
      {/* Ścieżka lekcji. Numer niesie tu kolejność, więc jest informacją,
          nie ozdobą. Poziomo od lg, pionowo niżej — bez przewijania w bok. */}
      <ol className="grid gap-0 lg:grid-cols-5">
        {KROKI.map((k, i) => (
          <Przebicie
            as="li"
            key={k.nr}
            opoznienie={i * 90}
            className="relative border-t border-linia pt-6 pb-8 lg:border-t-0 lg:pt-0 lg:pb-0 lg:pr-7 lg:last:pr-0"
          >
            {/* Wiersz znacznika: numer na linii ciągnącej się przez sekcję */}
            <div className="flex items-center gap-3 lg:gap-0">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-stempel bg-kalka font-mono text-[0.75rem] font-bold text-stempel-jasny">
                {k.nr}
              </span>
              <span
                aria-hidden="true"
                className="h-px flex-1 bg-linia-mocna lg:ml-3"
              />
              {/* Grot między krokami — tylko poziomo i nie po ostatnim */}
              {i < KROKI.length - 1 ? (
                <svg
                  viewBox="0 0 8 12"
                  aria-hidden="true"
                  className="hidden h-3 w-2 shrink-0 text-stempel-jasny lg:block"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="square"
                >
                  <path d="m1.5 1 5 5-5 5" />
                </svg>
              ) : null}
            </div>

            <k.Ikona className="mt-6 h-6 w-6 text-przebicie-3" />

            <h3 className="mt-4 font-display text-[1.0625rem] leading-snug font-extrabold text-przebicie [font-stretch:110%]">
              {k.tytul}
            </h3>
            <p className="mt-2.5 max-w-[34ch] text-[0.9375rem] leading-relaxed text-przebicie-2 lg:max-w-none">
              {k.tresc}
            </p>
          </Przebicie>
        ))}
      </ol>

      {/* Co z tego ma uczeń — rejestr, nie kafelki */}
      <Przebicie opoznienie={140} className="mt-16 border-t border-linia pt-10">
        <h3 className="font-display text-[1.25rem] font-extrabold tracking-[-0.01em] text-przebicie [font-stretch:110%] sm:text-[1.4375rem]">
          Czego uczy się uczeń?
        </h3>
        <ul className="mt-6 grid border-t border-linia sm:grid-cols-2">
          {PO_LEKCJI.map((p) => (
            <li
              key={p}
              className="flex items-baseline gap-3.5 border-b border-linia py-3.5 sm:[&:nth-child(even)]:border-l sm:[&:nth-child(even)]:border-linia sm:[&:nth-child(even)]:pl-8 sm:[&:nth-child(odd)]:pr-8"
            >
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 translate-y-[-0.15em] bg-stempel-jasny"
              />
              <span className="text-[0.9375rem] leading-relaxed text-przebicie-2">
                {p}
              </span>
            </li>
          ))}
        </ul>
      </Przebicie>
    </Sekcja>
  );
}
