import type { Metadata } from "next";
import Link from "next/link";
import { bazaDostepna } from "@/lib/baza";
import { wszystkieKursy, wszystkieTematy } from "@/lib/dane";
import { przelaczWidocznoscTematu, usunTemat } from "../akcje";
import { FormularzTematu } from "@/components/panel/formularz-tematu";
import { NaglowekSekcji, Rozwijana } from "@/components/panel/naglowek-sekcji";
import { Komunikat, Przelacznik, ZnacznikStatusu } from "@/components/panel/wskazniki";
import { PrzyciskAkcji } from "@/components/panel/elementy-formularza";

export const metadata: Metadata = { title: "Tematy" };

export default async function Tematy() {
  const stan = await bazaDostepna();
  if (!stan.ok) {
    return (
      <div>
        <NaglowekSekcji nr="03" tytul="Tematy" />
        <div className="mt-12">
          <Komunikat ton="odmowa" tytul="Baza danych nie odpowiada">
            <p>Uruchom ją poleceniem npm run db:up i odśwież stronę.</p>
          </Komunikat>
        </div>
      </div>
    );
  }

  const [tematy, kursy] = await Promise.all([wszystkieTematy(), wszystkieKursy()]);
  const opcje = kursy.map((k) => ({ id: k.id, tytul: k.tytul }));

  return (
    <div>
      <NaglowekSekcji
        nr="03"
        tytul="Tematy — to, co widzi użytkownik."
        opis="Przełącznik „widoczny” decyduje, czy temat pojawi się w wyborze tematu. Temat z kursu, który nie jest opublikowany, nie pokaże się nikomu."
      />

      {opcje.length === 0 ? (
        <div className="mt-10">
          <Komunikat tytul="Najpierw kurs">
            <p>
              Temat musi należeć do kursu.{" "}
              <Link
                href="/panel/admin/kursy"
                className="text-stempel-jasny underline decoration-stempel/50 underline-offset-[0.3em]"
              >
                Dodaj pierwszy kurs
              </Link>
              , potem wróć tutaj.
            </p>
          </Komunikat>
        </div>
      ) : (
        <div className="mt-10">
          <Rozwijana etykieta="Dodaj nowy temat">
            <FormularzTematu kursy={opcje} />
          </Rozwijana>
        </div>
      )}

      {tematy.length === 0 ? null : (
        <ul className="mt-10 space-y-4">
          {tematy.map((t) => (
            <li key={t.id} className="border border-linia bg-kalka-2">
              <div className="flex flex-wrap items-start justify-between gap-5 p-5">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="font-display text-[1.125rem] font-extrabold tracking-[-0.01em] text-przebicie [font-stretch:110%]">
                      {t.tytul}
                    </h2>
                    <ZnacznikStatusu status={t.status} />
                    <Przelacznik
                      wlaczony={Boolean(t.widoczny)}
                      etykietaWl="Widoczny"
                      etykietaWyl="Ukryty"
                    />
                  </div>

                  <p className="sygnatura mt-2">
                    {t.kurs_tytul} · /{t.slug}
                    {t.okres ? ` · ${t.okres}` : ""}
                  </p>

                  {t.streszczenie ? (
                    <p className="mt-3 max-w-[70ch] text-[0.875rem] leading-relaxed text-przebicie-2">
                      {t.streszczenie}
                    </p>
                  ) : null}

                  <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    <div className="flex items-baseline gap-2">
                      <dt className="sygnatura">Sceny</dt>
                      <dd className="liczby font-mono text-[0.75rem] text-przebicie-2">
                        {t.liczba_scen}
                      </dd>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <dt className="sygnatura">Źródła</dt>
                      <dd className="liczby font-mono text-[0.75rem] text-przebicie-2">
                        {t.liczba_zrodel}
                      </dd>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <dt className="sygnatura">Czas</dt>
                      <dd className="liczby font-mono text-[0.75rem] text-przebicie-2">
                        {t.czas_min} min
                      </dd>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <dt className="sygnatura">Gra</dt>
                      <dd className="font-mono text-[0.75rem] text-przebicie-2">
                        {t.adres_gry ? "podpięta" : "brak"}
                      </dd>
                    </div>
                  </dl>
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-2">
                  <form action={przelaczWidocznoscTematu}>
                    <input type="hidden" name="id" value={t.id} />
                    <PrzyciskAkcji>
                      {t.widoczny ? "Ukryj" : "Pokaż"}
                    </PrzyciskAkcji>
                  </form>
                  <form action={usunTemat}>
                    <input type="hidden" name="id" value={t.id} />
                    <PrzyciskAkcji
                      wariant="odmowa"
                      potwierdzenie={`Usunąć temat „${t.tytul}” razem z postępami uczniów? Tego nie da się cofnąć.`}
                    >
                      Usuń
                    </PrzyciskAkcji>
                  </form>
                </div>
              </div>

              <div className="border-t border-linia">
                <Rozwijana etykieta="Edytuj temat" ramka={false}>
                  <FormularzTematu temat={t} kursy={opcje} />
                </Rozwijana>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
