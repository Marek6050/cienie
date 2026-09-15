import type { Metadata } from "next";
import { bazaDostepna } from "@/lib/baza";
import { wszyscyUzytkownicy } from "@/lib/dane";
import { biezacaSesja, ETYKIETY_ROL } from "@/lib/sesja";
import { przelaczAktywnosc, ustawRole } from "../akcje";
import { NaglowekSekcji } from "@/components/panel/naglowek-sekcji";
import { Komunikat } from "@/components/panel/wskazniki";
import { PrzyciskAkcji } from "@/components/panel/elementy-formularza";

export const metadata: Metadata = { title: "Użytkownicy" };

function data(wartosc: string | null) {
  if (!wartosc) return "—";
  return wartosc.slice(0, 10);
}

export default async function Uzytkownicy() {
  const stan = await bazaDostepna();
  if (!stan.ok) {
    return (
      <div>
        <NaglowekSekcji nr="04" tytul="Użytkownicy" />
        <div className="mt-12">
          <Komunikat ton="odmowa" tytul="Baza danych nie odpowiada">
            <p>Uruchom ją poleceniem npm run db:up i odśwież stronę.</p>
          </Komunikat>
        </div>
      </div>
    );
  }

  const [lista, sesja] = await Promise.all([wszyscyUzytkownicy(), biezacaSesja()]);

  return (
    <div>
      <NaglowekSekcji
        nr="04"
        tytul="Wszystkie konta na platformie."
        opis="Rola decyduje o tym, co użytkownik widzi po zalogowaniu. Własnego konta nie da się zdegradować ani wyłączyć — panel nie może zostać bez administratora."
      />

      <div className="mt-12 rejestr">
        <div className="przewijana">
        <table className="w-full min-w-[56rem] border-collapse text-left">
          <caption className="sr-only">Lista wszystkich użytkowników</caption>
          <thead>
            <tr className="border-b border-linia-mocna">
              <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">Osoba</th>
              <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">Instytucja</th>
              <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">Rola</th>
              <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">Kursy</th>
              <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">Ukończone</th>
              <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">Ostatnio</th>
              <th scope="col" className="sygnatura pb-2.5 font-normal">Konto</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((u) => {
              const toJa = sesja?.id === u.id;
              return (
                <tr
                  key={u.id}
                  className={`border-b border-linia align-top ${
                    u.aktywny ? "" : "opacity-55"
                  }`}
                >
                  <th scope="row" className="py-4 pr-4 font-normal">
                    <span className="block text-[0.9375rem] text-przebicie">
                      {u.imie_nazwisko}
                      {toJa ? (
                        <span className="ml-2 font-mono text-[0.5625rem] tracking-[0.16em] text-stempel-jasny uppercase">
                          to ty
                        </span>
                      ) : null}
                    </span>
                    <span className="mt-0.5 block font-mono text-[0.6875rem] text-przebicie-3">
                      {u.email}
                    </span>
                  </th>

                  <td className="py-4 pr-4 text-[0.8125rem] text-przebicie-2">
                    {u.instytucja ?? "—"}
                  </td>

                  <td className="py-4 pr-4">
                    {toJa ? (
                      <span className="font-mono text-[0.625rem] tracking-[0.14em] text-stempel-jasny uppercase">
                        {ETYKIETY_ROL[u.rola]}
                      </span>
                    ) : (
                      <form action={ustawRole} className="flex items-center gap-2">
                        <input type="hidden" name="id" value={u.id} />
                        <label htmlFor={`rola-${u.id}`} className="sr-only">
                          Rola dla {u.imie_nazwisko}
                        </label>
                        <select
                          id={`rola-${u.id}`}
                          name="rola"
                          defaultValue={u.rola}
                          className="wpis w-[9.5rem] py-1.5 text-[0.75rem]"
                        >
                          <option value="uczen" className="bg-kalka-2">Uczeń</option>
                          <option value="nauczyciel" className="bg-kalka-2">Nauczyciel</option>
                          <option value="superadmin" className="bg-kalka-2">Superadmin</option>
                        </select>
                        <PrzyciskAkcji tytul="Zapisz rolę">Ustaw</PrzyciskAkcji>
                      </form>
                    )}
                  </td>

                  <td className="liczby py-4 pr-4 font-mono text-[0.8125rem] text-przebicie-2">
                    {u.liczba_kursow}
                  </td>
                  <td className="liczby py-4 pr-4 font-mono text-[0.8125rem] text-przebicie-2">
                    {u.ukonczone_tematy}
                  </td>
                  <td className="liczby py-4 pr-4 font-mono text-[0.75rem] text-przebicie-3">
                    {data(u.ostatnie_logowanie)}
                  </td>

                  <td className="py-4">
                    {toJa ? (
                      <span className="font-mono text-[0.625rem] tracking-[0.14em] text-przebicie-3 uppercase">
                        aktywne
                      </span>
                    ) : (
                      <form action={przelaczAktywnosc}>
                        <input type="hidden" name="id" value={u.id} />
                        <PrzyciskAkcji
                          wariant={u.aktywny ? "odmowa" : "zwykly"}
                          potwierdzenie={
                            u.aktywny
                              ? `Wyłączyć konto ${u.email}? Osoba nie zaloguje się do panelu.`
                              : undefined
                          }
                        >
                          {u.aktywny ? "Wyłącz" : "Włącz"}
                        </PrzyciskAkcji>
                      </form>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
          </table>
        </div>
      </div>

      <p className="podpowiedz-przewijania" aria-hidden="true">
        <span className="inline-block h-px w-4 bg-linia-mocna" />
        Przewiń rejestr w bok
      </p>

      <p className="mt-8 max-w-[70ch] text-[0.875rem] leading-relaxed text-przebicie-3">
        Zakładanie kont odbywa się na razie przez skrypt danych startowych
        (<span className="font-mono text-przebicie-2">npm run db:seed</span>).
        Rejestracja samodzielna nie jest włączona — konta w szkole zakłada osoba
        odpowiedzialna za platformę.
      </p>
    </div>
  );
}
