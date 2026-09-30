import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";
import {
  IkonaKsiazka,
  IkonaSluchawki,
  IkonaNotatka,
  IkonaPytanie,
  IkonaLupa,
  IkonaRozgalezienie,
  IkonaWykres,
  IkonaOsoby,
} from "@/components/ikony";

const ODBIORCA = [
  { Ikona: IkonaKsiazka, co: "czyta" },
  { Ikona: IkonaSluchawki, co: "słucha" },
  { Ikona: IkonaNotatka, co: "zapamiętuje" },
  { Ikona: IkonaPytanie, co: "odpowiada na pytania" },
];

const UCZESTNIK = [
  { Ikona: IkonaLupa, co: "analizuje" },
  { Ikona: IkonaRozgalezienie, co: "wybiera" },
  { Ikona: IkonaWykres, co: "odkrywa konsekwencje" },
  { Ikona: IkonaOsoby, co: "dyskutuje" },
];

export function Doswiadczenie() {
  return (
    <Sekcja
      id="doswiadczenie"
      nr="02"
      tytul="Historia nie musi być kolejną prezentacją."
      lead={
        <>
          Na tradycyjnej lekcji uczeń przede wszystkim słucha, czyta i
          zapamiętuje.{" "}
          <span className="text-przebicie">Tutaj staje się uczestnikiem</span> —
          analizuje sytuację, podejmuje decyzje i sprawdza ich konsekwencje.
        </>
      }
    >
      <div className="grid items-stretch gap-0 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        {/* Przed — stan zastany. Wyciszony celowo. */}
        <Przebicie className="border-t border-linia pt-7 lg:border-t-0 lg:border-r lg:border-linia lg:pt-0 lg:pr-12">
          <h3 className="sygnatura">Tradycyjna lekcja</h3>
          <p className="mt-3 max-w-[24ch] font-display text-[1.25rem] leading-snug font-extrabold text-przebicie-2 [font-stretch:110%] sm:text-[1.375rem]">
            Uczeń głównie odbiera informacje.
          </p>
          <ul className="mt-7 space-y-0 border-t border-linia">
            {ODBIORCA.map(({ Ikona, co }) => (
              <li
                key={co}
                className="flex items-center gap-4 border-b border-linia py-3.5"
              >
                <Ikona className="h-5 w-5 shrink-0 text-przebicie-3" />
                <span className="text-[0.9375rem] text-przebicie-3">{co}</span>
              </li>
            ))}
          </ul>
        </Przebicie>

        {/* Zwrotnica — to jest zdanie tej sekcji */}
        <Przebicie
          opoznienie={120}
          className="flex items-center justify-center py-10 lg:w-[13rem] lg:py-0"
        >
          <p className="flex items-center gap-4 font-mono text-[0.625rem] leading-relaxed tracking-[0.16em] text-przebicie-3 uppercase lg:flex-col lg:gap-3 lg:text-center">
            <span>Od odbiorcy</span>
            <svg
              viewBox="0 0 48 12"
              aria-hidden="true"
              className="h-3 w-12 shrink-0 text-stempel-jasny lg:rotate-90"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="square"
            >
              <path d="M0 6h44M38 1.5 43.5 6 38 10.5" />
            </svg>
            <span className="text-stempel-jasny">Do uczestnika</span>
          </p>
        </Przebicie>

        {/* Po — stan docelowy. Tu wchodzi fiolet: platforma działa. */}
        <Przebicie
          opoznienie={200}
          className="border-t border-linia pt-7 lg:border-t-0 lg:pt-0 lg:pl-12"
        >
          <h3 className="sygnatura text-stempel-jasny">Interaktywna historia</h3>
          <p className="mt-3 max-w-[24ch] font-display text-[1.25rem] leading-snug font-extrabold text-przebicie [font-stretch:110%] sm:text-[1.375rem]">
            Uczeń aktywnie pracuje z historią.
          </p>
          <ul className="mt-7 space-y-0 border-t border-linia">
            {UCZESTNIK.map(({ Ikona, co }) => (
              <li
                key={co}
                className="flex items-center gap-4 border-b border-linia py-3.5"
              >
                <Ikona className="h-5 w-5 shrink-0 text-stempel-jasny" />
                <span className="text-[0.9375rem] text-przebicie">{co}</span>
              </li>
            ))}
          </ul>
        </Przebicie>
      </div>

      {/* Puenta sekcji — zmiana pytania, które zadaje sobie uczeń */}
      <Przebicie opoznienie={280} className="linia-dokumentu mt-14 pt-8">
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-12">
          <div>
            <p className="sygnatura">Zamiast tylko pytać</p>
            <p className="mt-3 font-display text-[1.125rem] leading-snug font-extrabold text-przebicie-3 [font-stretch:110%] sm:text-[1.375rem]">
              „Co się wydarzyło?”
            </p>
          </div>
          <div className="border-t border-linia pt-6 sm:border-t-0 sm:border-l sm:border-linia sm:pt-0 sm:pl-12">
            <p className="sygnatura text-stempel-jasny">uczeń zaczyna pytać</p>
            <p className="mt-3 max-w-[26ch] font-display text-[1.125rem] leading-snug font-extrabold text-przebicie [font-stretch:110%] sm:text-[1.375rem]">
              „Co ja zrobiłbym w tej sytuacji — i dlaczego?”
            </p>
          </div>
        </div>
      </Przebicie>
    </Sekcja>
  );
}
