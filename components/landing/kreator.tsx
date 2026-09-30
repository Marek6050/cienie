import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";
import { KreatorPodglad } from "@/components/kreator-podglad";
import { IkonaKoperta } from "@/components/ikony";
import { KONTAKT } from "@/lib/kontakt";

const SCIEZKA = [
  { etykieta: "Wasze źródła", mocny: false },
  { etykieta: "Nasza metodologia", mocny: false },
  { etykieta: "Interaktywna narracja", mocny: true },
];

const MATERIAL = [
  {
    tytul: "Lokalne wydarzenia",
    tresc:
      "Historie związane z konkretnym miejscem, społecznością lub regionem.",
  },
  {
    tytul: "Zbiory muzealne i archiwalne",
    tresc:
      "Dokumenty, fotografie, mapy i obiekty, które mogą stać się częścią doświadczenia.",
  },
  {
    tytul: "Relacje i historie świadków",
    tresc:
      "Osobiste perspektywy, które pomagają nadać wydarzeniom ludzki wymiar.",
  },
];

export function Kreator() {
  return (
    <Sekcja
      id="kreator"
      nr="07"
      tytul="Masz historię, którą warto opowiedzieć inaczej?"
      lead={
        <>
          Tworzymy interaktywne doświadczenia historyczne na podstawie lokalnych
          wydarzeń, archiwów, zbiorów muzealnych i relacji świadków. Nie
          zaczynamy od technologii —{" "}
          <span className="text-przebicie">
            zaczynamy od materiału, który już macie
          </span>
          . Potem przekładamy go na narrację, w której odbiorca nie tylko poznaje
          historię, ale aktywnie przez nią przechodzi.
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,27rem)_minmax(0,1fr)] lg:items-start lg:gap-14">
        <Przebicie>
          <KreatorPodglad />
          <p className="sygnatura mt-3 leading-relaxed">
            Ta sama scena w dwóch trybach — przełącz zakładkę
          </p>
        </Przebicie>

        <div>
          {/* Droga od cudzego materiału do gotowej opowieści */}
          <Przebicie>
            <ol className="flex flex-col gap-0 border-t border-linia">
              {SCIEZKA.map((s, i) => (
                <li key={s.etykieta} className="border-b border-linia">
                  <div className="flex items-center gap-4 py-4">
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 shrink-0 ${
                        s.mocny ? "bg-stempel-jasny" : "bg-linia-mocna"
                      }`}
                    />
                    <span
                      className={`font-display text-[1rem] font-extrabold tracking-[0.02em] uppercase [font-stretch:110%] ${
                        s.mocny ? "text-stempel-jasny" : "text-przebicie-2"
                      }`}
                    >
                      {s.etykieta}
                    </span>
                    {i < SCIEZKA.length - 1 ? (
                      <svg
                        viewBox="0 0 12 8"
                        aria-hidden="true"
                        className="h-2 w-3 shrink-0 text-przebicie-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        strokeLinecap="square"
                      >
                        <path d="M6 0v6.5M1.5 2.5 6 7l4.5-4.5" />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </Przebicie>

          <Przebicie opoznienie={140} className="mt-10">
            <h3 className="font-display text-[1.125rem] font-extrabold tracking-[0.02em] text-przebicie uppercase [font-stretch:112%]">
              Z czego możemy to zbudować
            </h3>
            <dl className="mt-5 border-t border-linia">
              {MATERIAL.map((m) => (
                <div key={m.tytul} className="border-b border-linia py-4.5">
                  <dt className="font-display text-[1rem] leading-snug font-extrabold text-przebicie [font-stretch:110%]">
                    {m.tytul}
                  </dt>
                  <dd className="mt-1.5 max-w-[56ch] text-[0.9375rem] leading-relaxed text-przebicie-2">
                    {m.tresc}
                  </dd>
                </div>
              ))}
            </dl>
          </Przebicie>

          <Przebicie opoznienie={200} className="mt-9">
            <a href={`mailto:${KONTAKT.mail}`} className="stempel">
              <IkonaKoperta className="h-4 w-4" />
              Napisz do nas
            </a>
            <p className="mt-5 max-w-[56ch] text-[0.9375rem] leading-relaxed text-przebicie-3">
              Zakres, termin i warunki ustalamy indywidualnie — nie mamy cennika
              z półki i nie udajemy, że mamy.
            </p>
          </Przebicie>
        </div>
      </div>
    </Sekcja>
  );
}
