import Link from "next/link";
import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";
import { IkonaKoperta, IkonaStrzalka } from "@/components/ikony";
import { KONTAKT } from "@/lib/kontakt";

export function Kontakt() {
  return (
    <Sekcja
      id="kontakt"
      nr="09"
      tytul="Masz pytanie? Porozmawiajmy."
      lead={
        <>
          Chcesz wykorzystać materiał na lekcji, stworzyć interaktywną historię
          o innym wydarzeniu albo zgłosić uwagę merytoryczną? Napisz do nas —
          każde zgłoszenie czytamy i traktujemy indywidualnie.{" "}
          <span className="text-przebicie">
            Na Twoją wiadomość odpowiada zespół, nie automat.
          </span>
        </>
      }
    >
      {KONTAKT.doUzupelnienia ? (
        <Przebicie>
          <p className="mb-10 flex items-start gap-3 border border-nadruk/50 bg-nadruk/10 px-4 py-3 text-[0.875rem] leading-relaxed text-nadruk-jasny">
            <span
              aria-hidden="true"
              className="mt-[0.4em] h-1.5 w-1.5 shrink-0 bg-nadruk-jasny"
            />
            <span>
              <strong className="font-semibold">Dane kontaktowe do uzupełnienia.</strong>{" "}
              Adresy i kanały poniżej są zaślepkami — jeszcze nie działają.
            </span>
          </p>
        </Przebicie>
      ) : null}

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14">
        <Przebicie>
          <dl className="border-t border-linia">
            <div className="border-b border-linia py-5">
              <dt className="sygnatura">Sprawy ogólne i współpraca</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${KONTAKT.mail}`}
                  className="group inline-flex items-center gap-3 font-display text-[1.125rem] font-extrabold tracking-[-0.01em] text-przebicie [font-stretch:110%] sm:text-[1.375rem]"
                >
                  <IkonaKoperta className="h-5 w-5 shrink-0 text-przebicie-3 transition-colors duration-200 group-hover:text-stempel-jasny" />
                  <span className="underline decoration-linia-mocna underline-offset-[0.3em] transition-colors duration-200 group-hover:decoration-stempel">
                    {KONTAKT.mail}
                  </span>
                </a>
              </dd>
            </div>

            <div className="border-b border-linia py-5">
              <dt className="sygnatura">Uwagi merytoryczne i źródła</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${KONTAKT.mailTresci}`}
                  className="group inline-flex items-center gap-3 text-[1rem] text-przebicie-2"
                >
                  <span className="underline decoration-linia-mocna underline-offset-[0.3em] transition-colors duration-200 group-hover:text-przebicie group-hover:decoration-stempel">
                    {KONTAKT.mailTresci}
                  </span>
                </a>
              </dd>
            </div>

          </dl>

          <div className="mt-9">
            <Link href="/logowanie" className="stempel">
              Wejdź do panelu
              <IkonaStrzalka className="h-4 w-4" />
            </Link>
          </div>
        </Przebicie>

        <Przebicie opoznienie={140}>
          <h3 className="sygnatura">
            Kanały{KONTAKT.doUzupelnienia ? " — zaślepki" : ""}
          </h3>
          <ul className="mt-4 border-t border-linia">
            {KONTAKT.social.map((s) => (
              <li key={s.nazwa} className="border-b border-linia">
                {KONTAKT.doUzupelnienia ? (
                  <span className="flex items-baseline justify-between gap-4 py-3.5">
                    <span className="font-display text-[0.9375rem] font-extrabold tracking-[0.02em] text-przebicie-3 uppercase [font-stretch:110%]">
                      {s.nazwa}
                    </span>
                    <span className="font-mono text-[0.6875rem] tracking-[0.06em] text-przebicie-3">
                      {s.uchwyt}
                    </span>
                  </span>
                ) : (
                  <a
                    href={s.url}
                    className="group flex items-baseline justify-between gap-4 py-3.5"
                  >
                    <span className="font-display text-[0.9375rem] font-extrabold tracking-[0.02em] text-przebicie uppercase [font-stretch:110%] transition-colors duration-200 group-hover:text-stempel-jasny">
                      {s.nazwa}
                    </span>
                    <span className="font-mono text-[0.6875rem] tracking-[0.06em] text-przebicie-3">
                      {s.uchwyt}
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </Przebicie>
      </div>
    </Sekcja>
  );
}

export function Stopka() {
  return (
    <footer className="border-t border-linia px-5 py-10 sm:px-8">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-5 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-mono text-[0.625rem] leading-relaxed tracking-[0.16em] text-przebicie-3 uppercase">
          Cienie Rzeczypospolitej · Dok. 01 / 2026
        </p>
        <p className="max-w-[62ch] font-mono text-[0.625rem] leading-relaxed tracking-[0.1em] text-przebicie-3 uppercase">
          Materiały archiwalne pochodzą z zasobów projektu i służą wyłącznie
          celom edukacyjnym
        </p>
      </div>
    </footer>
  );
}
