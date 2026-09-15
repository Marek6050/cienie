import type { Metadata } from "next";
import { bazaDostepna } from "@/lib/baza";
import { wszystkieKursy } from "@/lib/dane";
import { przelaczPublikacjeKursu, usunKurs } from "../akcje";
import { FormularzKursu } from "@/components/panel/formularz-kursu";
import { NaglowekSekcji, Rozwijana } from "@/components/panel/naglowek-sekcji";
import { Komunikat, Przelacznik } from "@/components/panel/wskazniki";
import { PrzyciskAkcji } from "@/components/panel/elementy-formularza";

export const metadata: Metadata = { title: "Kursy" };

export default async function Kursy() {
  const stan = await bazaDostepna();
  if (!stan.ok) {
    return (
      <div>
        <NaglowekSekcji nr="02" tytul="Kursy" />
        <div className="mt-12">
          <Komunikat ton="odmowa" tytul="Baza danych nie odpowiada">
            <p>Uruchom ją poleceniem npm run db:up i odśwież stronę.</p>
          </Komunikat>
        </div>
      </div>
    );
  }

  const kursy = await wszystkieKursy();

  return (
    <div>
      <NaglowekSekcji
        nr="02"
        tytul="Kursy — pojemniki na tematy."
        opis="Kurs zbiera tematy i decyduje, kto je w ogóle widzi. Nieopublikowany kurs znika z wyboru tematu, nawet jeśli temat jest ustawiony jako widoczny."
      />

      <div className="mt-10">
        <Rozwijana etykieta="Dodaj nowy kurs">
          <FormularzKursu />
        </Rozwijana>
      </div>

      {kursy.length === 0 ? (
        <div className="mt-10">
          <Komunikat tytul="Brak kursów">
            <p>Zacznij od dodania pierwszego kursu powyżej.</p>
          </Komunikat>
        </div>
      ) : (
        <ul className="mt-10 space-y-4">
          {kursy.map((k) => (
            <li key={k.id} className="border border-linia bg-kalka-2">
              <div className="flex flex-wrap items-start justify-between gap-5 p-5">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-[1.125rem] font-extrabold tracking-[-0.01em] text-przebicie [font-stretch:110%]">
                      {k.tytul}
                    </h2>
                    <Przelacznik
                      wlaczony={Boolean(k.opublikowany)}
                      etykietaWl="Opublikowany"
                      etykietaWyl="Szkic"
                    />
                  </div>

                  <p className="sygnatura mt-2">
                    /{k.slug}
                    {k.okres ? ` · ${k.okres}` : ""}
                  </p>

                  {k.opis ? (
                    <p className="mt-3 max-w-[70ch] text-[0.875rem] leading-relaxed text-przebicie-2">
                      {k.opis}
                    </p>
                  ) : null}

                  <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    <div className="flex items-baseline gap-2">
                      <dt className="sygnatura">Tematy</dt>
                      <dd className="liczby font-mono text-[0.75rem] text-przebicie-2">
                        {k.liczba_tematow}
                      </dd>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <dt className="sygnatura">Zapisani</dt>
                      <dd className="liczby font-mono text-[0.75rem] text-przebicie-2">
                        {k.liczba_zapisanych}
                      </dd>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <dt className="sygnatura">Kolejność</dt>
                      <dd className="liczby font-mono text-[0.75rem] text-przebicie-2">
                        {k.kolejnosc}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2">
                  <form action={przelaczPublikacjeKursu}>
                    <input type="hidden" name="id" value={k.id} />
                    <PrzyciskAkcji>
                      {k.opublikowany ? "Wycofaj" : "Opublikuj"}
                    </PrzyciskAkcji>
                  </form>
                  <form action={usunKurs}>
                    <input type="hidden" name="id" value={k.id} />
                    <PrzyciskAkcji
                      wariant="odmowa"
                      potwierdzenie={`Usunąć kurs „${k.tytul}” razem z jego tematami i postępami? Tego nie da się cofnąć.`}
                    >
                      Usuń
                    </PrzyciskAkcji>
                  </form>
                </div>
              </div>

              <div className="border-t border-linia">
                <Rozwijana etykieta="Edytuj kurs" ramka={false}>
                  <FormularzKursu kurs={k} />
                </Rozwijana>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
