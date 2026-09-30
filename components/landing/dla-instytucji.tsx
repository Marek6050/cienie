import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";
import {
  IkonaKsiazka,
  IkonaPytanie,
  IkonaWykres,
  IkonaSluchawki,
} from "@/components/ikony";

const SZKOLY = [
  {
    tytul: "Lekcje opowiadane przez źródła",
    tresc:
      "Uczeń nie tylko czyta tekst, ale rozpoznaje kontekst, porównuje świadectwa i buduje własną interpretację wydarzeń.",
  },
  {
    tytul: "Praca z klasą i nauczycielem",
    tresc:
      "Materiały są przygotowane tak, żeby można było je wykorzystać na zajęciach, w projekcie grupowym albo jako punkt wyjścia do dyskusji.",
  },
  {
    tytul: "Łatwe do wdrożenia",
    tresc:
      "Interaktywna forma działa w przeglądarce i nie wymaga od szkoły dodatkowego ekosystemu technologicznego ani trudnej konfiguracji.",
  },
];

const MUZEA = [
  {
    tytul: "Nowe spojrzenie na wystawę",
    tresc:
      "Historia spotyka się z interpretacją, a zwiedzający przechodzi przez nią w sposób bardziej osobisty i angażujący niż przy tradycyjnym opisie.",
  },
  {
    tytul: "Prawdziwe źródła, nie tylko opis",
    tresc:
      "Dzięki materiałom archiwalnym, zdjęciom i dokumentom można budować narrację, która pokazuje nie tylko obiekt, ale także kontekst jego powstania.",
  },
  {
    tytul: "Współpraca z edukacją i kuratorem",
    tresc:
      "Tworzymy rozwiązanie pod konkretny cel wystawy, projekt edukacyjny albo cykl wydarzeń w instytucji kultury.",
  },
];

export function DlaSzkol() {
  return (
    <Sekcja
      id="dla-szkol"
      nr="08"
      tytul="Dla szkół: historia, która angażuje i pobudza do myślenia."
      lead={
        <>
          Dla placówek edukacyjnych projektujemy doświadczenia, które wspierają
          lekcję historii bez upraszczania samych wydarzeń. Uczniowie nie tylko
          poznają kontekst — <span className="text-przebicie">samodzielnie go
          interpretują</span>, porównują źródła i zgłębiają sens opowieści.
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:items-start">
        <Przebicie className="border border-linia p-6 sm:p-8">
          <div className="flex items-center gap-3 text-przebicie">
            <IkonaKsiazka className="h-5 w-5 text-stempel-jasny" />
            <span className="font-mono text-[0.6875rem] tracking-[0.14em] uppercase text-przebicie-3">
              Dla nauczycieli i klas
            </span>
          </div>

          <ul className="mt-8 space-y-6">
            {SZKOLY.map((punkt) => (
              <li key={punkt.tytul} className="border-t border-linia pt-5 first:border-t-0 first:pt-0">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-stempel-jasny" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-[1.0625rem] font-extrabold tracking-[0.02em] text-przebicie uppercase [font-stretch:112%]">
                      {punkt.tytul}
                    </h3>
                    <p className="mt-2 max-w-[52ch] text-[0.9375rem] leading-relaxed text-przebicie-2">
                      {punkt.tresc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Przebicie>

        <Przebicie className="border border-linia bg-przebicie-3/5 p-6 sm:p-8">
          <IkonaPytanie className="h-6 w-6 text-stempel-jasny" />
          <h3 className="mt-5 font-display text-[1.125rem] font-extrabold tracking-[0.02em] text-przebicie uppercase [font-stretch:112%]">
            Co zyskuje szkoła
          </h3>
          <ul className="mt-6 space-y-4 text-[0.9375rem] leading-relaxed text-przebicie-2">
            <li className="flex gap-3">
              <IkonaWykres className="mt-1 h-4 w-4 shrink-0 text-przebicie" />
              <span>Nowy, atrakcyjny format pracy z historią, który obok wiedzy rozwija analizę i krytyczne myślenie.</span>
            </li>
            <li className="flex gap-3">
              <IkonaSluchawki className="mt-1 h-4 w-4 shrink-0 text-przebicie" />
              <span>Lepsze zaangażowanie uczniów dzięki opowieści łączonej z interaktywnym doświadczeniem.</span>
            </li>
            <li className="flex gap-3">
              <IkonaPytanie className="mt-1 h-4 w-4 shrink-0 text-przebicie" />
              <span>Gotowe narzędzie do prowadzenia rozmowy o źródłach, pamięci, polityce i znaczeniu historii.</span>
            </li>
          </ul>
        </Przebicie>
      </div>
    </Sekcja>
  );
}

export function DlaMuzeow() {
  return (
    <Sekcja
      id="dla-muzeow"
      nr="09"
      tytul="Dla muzeów: opowieść, która prowadzi zwiedzającego przez zbiory."
      lead={
        <>
          W muzeach ważne są nie tylko obiekty, ale również ich znaczenie,
          kontekst i relacja z pamięcią zbiorową. Tworzymy rozwiązania, które
          pomagają <span className="text-przebicie">połączyć zbiory z
          doświadczeniem odbiorcy</span> i nadać wystawie nowy rytm narracji.
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:items-start">
        <Przebicie className="border border-linia bg-przebicie-3/5 p-6 sm:p-8">
          <h3 className="font-display text-[1.125rem] font-extrabold tracking-[0.02em] text-przebicie uppercase [font-stretch:112%]">
            Dla instytucji kultury
          </h3>
          <p className="mt-4 max-w-[46ch] text-[0.9375rem] leading-relaxed text-przebicie-2">
            Współpracujemy z kuratorami, edukatorami i zespołami instytucji, aby
            zbudować narrację odpowiadającą potrzebom konkretnej wystawy, zbioru
            lub programu publicznego.
          </p>
          <div className="mt-7 space-y-4 border-t border-linia pt-5">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-stempel-jasny" aria-hidden="true" />
              <span className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-przebicie-3">
                wystawy
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-stempel-jasny" aria-hidden="true" />
              <span className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-przebicie-3">
                programy edukacyjne
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 bg-stempel-jasny" aria-hidden="true" />
              <span className="font-mono text-[0.6875rem] tracking-[0.12em] uppercase text-przebicie-3">
                działania publiczne
              </span>
            </div>
          </div>
        </Przebicie>

        <Przebicie className="border border-linia p-6 sm:p-8">
          <ul className="space-y-6">
            {MUZEA.map((punkt) => (
              <li key={punkt.tytul} className="border-t border-linia pt-5 first:border-t-0 first:pt-0">
                <div className="flex items-start gap-4">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 bg-stempel-jasny" aria-hidden="true" />
                  <div>
                    <h3 className="font-display text-[1.0625rem] font-extrabold tracking-[0.02em] text-przebicie uppercase [font-stretch:112%]">
                      {punkt.tytul}
                    </h3>
                    <p className="mt-2 max-w-[54ch] text-[0.9375rem] leading-relaxed text-przebicie-2">
                      {punkt.tresc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Przebicie>
      </div>
    </Sekcja>
  );
}
