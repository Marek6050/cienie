import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { postepyWTemacie, tematPoSlugu } from "@/lib/dane";
import { zapytajJeden } from "@/lib/baza";
import { biezacaSesja } from "@/lib/sesja";
import { IkonaStrzalka } from "@/components/ikony";
import { Komunikat, PasekScen, ZnacznikStatusu } from "@/components/panel/wskazniki";

type Parametry = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Parametry): Promise<Metadata> {
  const { slug } = await params;
  const wiersz = await zapytajJeden<{ tytul: string }>(
    "SELECT tytul FROM tematy WHERE slug = ? LIMIT 1",
    [slug],
  ).catch(() => null);
  return { title: wiersz?.tytul ?? "Temat" };
}

const OPIS_POSTEPU: Record<string, string> = {
  nierozpoczety: "Nierozpoczęty",
  w_trakcie: "W trakcie",
  ukonczony: "Ukończony",
};

export default async function StronaTematu({ params }: Parametry) {
  const { slug } = await params;
  const sesja = await biezacaSesja();
  if (!sesja) return null;

  const temat = await tematPoSlugu(slug, sesja.id).catch(() => null);
  if (!temat) notFound();

  const zrobione = temat.sceny_ukonczone ?? 0;
  const lacznie = temat.sceny_lacznie ?? temat.liczba_scen;
  const prowadzacy = sesja.rola === "nauczyciel" || sesja.rola === "superadmin";
  const klasa = prowadzacy ? await postepyWTemacie(temat.id) : [];

  return (
    <div>
      <Link
        href="/panel"
        className="group inline-flex items-center gap-2.5 font-mono text-[0.625rem] tracking-[0.16em] text-przebicie-3 uppercase transition-colors duration-200 hover:text-przebicie"
      >
        <IkonaStrzalka className="h-3.5 w-3.5 rotate-180" />
        Wybór tematu
      </Link>

      <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14">
        <div>
          <p className="sygnatura">{temat.kurs_tytul}</p>
          <h1 className="mt-3 max-w-[18ch] font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.02] font-extrabold tracking-[-0.03em] text-przebicie text-balance [font-stretch:115%]">
            {temat.tytul}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <ZnacznikStatusu status={temat.status} />
            {temat.okres ? <span className="sygnatura">{temat.okres}</span> : null}
            <span className="sygnatura">{temat.czas_min} min</span>
            <span className="sygnatura">{temat.liczba_zrodel} źródeł</span>
          </div>

          {temat.streszczenie ? (
            <p className="mt-7 max-w-[64ch] text-[1.0625rem] leading-[1.7] text-przebicie-2">
              {temat.streszczenie}
            </p>
          ) : null}

          {temat.obraz ? (
            <div className="relative mt-9 aspect-[16/7] w-full overflow-hidden border border-linia">
              <Image
                src={temat.obraz}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 760px"
                className="duotone object-cover"
              />
              <div className="duotone-warstwa" />
            </div>
          ) : null}

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            {temat.status === "gotowy" && temat.adres_gry ? (
              <a
                href={temat.adres_gry}
                target="_blank"
                rel="noreferrer"
                className="stempel"
              >
                {zrobione > 0 ? "Kontynuuj" : "Rozpocznij"}
                <IkonaStrzalka className="h-4 w-4" />
              </a>
            ) : (
              <p className="border border-linia bg-kalka-2 px-4 py-3 text-[0.875rem] text-przebicie-2">
                Ten scenariusz jest jeszcze w przygotowaniu — nie da się go
                uruchomić.
              </p>
            )}
          </div>

          {prowadzacy ? (
            <section className="mt-14">
              <h2 className="border-b border-linia pb-3 font-mono text-[0.6875rem] tracking-[0.18em] text-przebicie-2 uppercase">
                Postępy klasy
              </h2>

              {klasa.length === 0 ? (
                <p className="mt-5 text-[0.9375rem] text-przebicie-3">
                  Nikt jeszcze nie zaczął tego tematu.
                </p>
              ) : (
                <div className="mt-5 rejestr">
                  <div className="przewijana">
                  <table className="w-full min-w-[34rem] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-linia-mocna">
                        <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">
                          Uczeń
                        </th>
                        <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">
                          Sceny
                        </th>
                        <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">
                          Quiz
                        </th>
                        <th scope="col" className="sygnatura pb-2.5 font-normal">
                          Stan
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {klasa.map((w) => (
                        <tr key={w.uzytkownik_id} className="border-b border-linia">
                          <th
                            scope="row"
                            className="py-3.5 pr-4 text-[0.875rem] font-normal text-przebicie"
                          >
                            {w.imie_nazwisko}
                            <span className="mt-0.5 block font-mono text-[0.625rem] text-przebicie-3">
                              {w.email}
                            </span>
                          </th>
                          <td className="liczby py-3.5 pr-4 font-mono text-[0.8125rem] text-przebicie-2">
                            {w.sceny_ukonczone} / {w.sceny_lacznie}
                          </td>
                          <td className="liczby py-3.5 pr-4 font-mono text-[0.8125rem] text-przebicie-2">
                            {w.wynik_quizu === null
                              ? "—"
                              : `${w.wynik_quizu} / ${w.maks_quizu ?? "?"}`}
                          </td>
                          <td className="py-3.5 font-mono text-[0.625rem] tracking-[0.14em] uppercase">
                            <span
                              className={
                                w.status === "ukonczony"
                                  ? "text-stempel-jasny"
                                  : w.status === "w_trakcie"
                                    ? "text-przebicie-2"
                                    : "text-przebicie-3"
                              }
                            >
                              {OPIS_POSTEPU[w.status] ?? w.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    </table>
                  </div>
                  <p className="podpowiedz-przewijania" aria-hidden="true">
                    <span className="inline-block h-px w-4 bg-linia-mocna" />
                    Przewiń rejestr w bok
                  </p>
                </div>
              )}
            </section>
          ) : null}
        </div>

        <aside className="space-y-8">
          <div className="border border-linia bg-kalka-2 p-5">
            <h2 className="sygnatura border-b border-linia pb-3">Twój postęp</h2>
            <div className="mt-4">
              <PasekScen zrobione={zrobione} lacznie={lacznie} />
            </div>
            <dl className="mt-5 space-y-3 border-t border-linia pt-4">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="sygnatura">Stan</dt>
                <dd className="font-mono text-[0.6875rem] tracking-[0.14em] text-przebicie-2 uppercase">
                  {OPIS_POSTEPU[temat.status_postepu ?? "nierozpoczety"]}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="sygnatura">Quiz</dt>
                <dd className="liczby font-mono text-[0.6875rem] text-przebicie-2">
                  {temat.wynik_quizu === null
                    ? "—"
                    : `${temat.wynik_quizu} / ${temat.maks_quizu ?? "?"}`}
                </dd>
              </div>
            </dl>
          </div>

          <Komunikat tytul="Status źródła">
            <p>
              Każde zdanie w scenariuszu jest oznaczone jako fakt potwierdzony
              dokumentem, rekonstrukcja albo dramatyzacja. Oznaczenia widać w
              trakcie gry, nie tylko w przypisach.
            </p>
          </Komunikat>
        </aside>
      </div>
    </div>
  );
}
