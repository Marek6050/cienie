import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";

const STOPNIE = [
  {
    klucz: "fakt",
    etykieta: "Fakt",
    tresc: "potwierdzony źródłem",
    klasa: "font-bold text-przebicie",
  },
  {
    klucz: "rekonstrukcja",
    etykieta: "Rekonstrukcja",
    tresc: "odtworzona na podstawie dostępnych materiałów",
    klasa: "font-medium text-przebicie-2",
  },
  {
    klucz: "dramatyzacja",
    etykieta: "Dramatyzacja",
    tresc: "element narracyjny, który nie jest przedstawiany jako fakt",
    klasa: "font-normal text-przebicie-3 italic",
  },
];

const ETAPY = [
  {
    nr: "1",
    tytul: "Kwerenda",
    tresc:
      "Zaczynamy od źródeł: rozkazów, relacji, fotografii, dokumentów i opracowań.",
  },
  {
    nr: "2",
    tytul: "Weryfikacja",
    tresc:
      "Sprawdzamy, co jest bezpośrednio potwierdzone, a co wymaga ostrożnej rekonstrukcji na podstawie dostępnych materiałów i kontekstu.",
  },
  {
    nr: "3",
    tytul: "Scenariusz",
    tresc:
      "Dopiero wtedy rozkładamy wydarzenie na sceny i budujemy narrację, przez którą uczeń przechodzi krok po kroku.",
  },
  {
    nr: "4",
    tytul: "Status treści",
    tresc: "Każdy element otrzymuje jasne oznaczenie:",
    stopnie: true,
    domkniecie:
      "Dzięki temu uczeń wie, gdzie kończy się źródło, a zaczyna narracja.",
  },
  {
    nr: "5",
    tytul: "Warstwa interaktywna",
    tresc:
      "Dopiero na końcu dodajemy grafikę, dźwięk, mapy, wybory i inne elementy interaktywne. Technologia ma pomagać wejść w historię, ale nie może jej przykrywać.",
  },
];

export function Metodologia() {
  return (
    <Sekcja
      id="metodologia"
      nr="06"
      tytul="Najpierw źródła. Dopiero potem narracja."
      lead={
        <>
          Bierzemy jedno wydarzenie z historii Polski i zamieniamy je w
          interaktywną opowieść, przez którą uczeń przechodzi sam. Nie ogląda
          historii z boku — wchodzi w jej środek, analizuje sytuację i podejmuje
          decyzje. Żeby takie doświadczenie było wiarygodne, wszystko zaczyna
          się od źródeł:{" "}
          <span className="text-przebicie">
            każda historia zaczyna się od kwerendy, nie od scenariusza.
          </span>
        </>
      }
    >
      <ol className="border-t border-linia">
        {ETAPY.map((e, i) => (
          <Przebicie key={e.nr} opoznienie={i * 80}>
            <li className="grid gap-4 border-b border-linia py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-8 sm:py-10">
              <span className="liczby font-mono text-[0.75rem] tracking-[0.12em] text-stempel-jasny">
                {e.nr}
              </span>

              <div className="max-w-[66ch]">
                <h3 className="font-display text-[1.25rem] font-extrabold tracking-[-0.01em] text-przebicie [font-stretch:110%] sm:text-[1.4375rem]">
                  {e.tytul}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-przebicie-2">
                  {e.tresc}
                </p>

                {/* Trzy stopnie pewności, każdy w swojej grubości pisma —
                    ta sama gradacja, którą uczeń widzi w grze. */}
                {e.stopnie ? (
                  <dl className="mt-5 border-t border-linia">
                    {STOPNIE.map((s) => (
                      <div
                        key={s.klucz}
                        className="flex flex-col gap-1 border-b border-linia py-3 sm:flex-row sm:items-baseline sm:gap-5"
                      >
                        <dt
                          className={`shrink-0 font-mono text-[0.6875rem] tracking-[0.16em] uppercase sm:w-[11rem] ${s.klasa}`}
                        >
                          {s.etykieta}
                        </dt>
                        <dd className="text-[0.9375rem] leading-relaxed text-przebicie-2">
                          {s.tresc}
                        </dd>
                      </div>
                    ))}
                  </dl>
                ) : null}

                {e.domkniecie ? (
                  <p className="mt-5 max-w-[56ch] text-[0.9375rem] leading-relaxed text-przebicie">
                    {e.domkniecie}
                  </p>
                ) : null}
              </div>
            </li>
          </Przebicie>
        ))}
      </ol>
    </Sekcja>
  );
}
