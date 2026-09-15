import Link from "next/link";
import type { Metadata } from "next";
import { bazaDostepna } from "@/lib/baza";
import { statystyki } from "@/lib/dane";
import { Komunikat } from "@/components/panel/wskazniki";
import { NaglowekSekcji } from "@/components/panel/naglowek-sekcji";
import { IkonaStrzalka } from "@/components/ikony";

export const metadata: Metadata = { title: "Przegląd" };

const SKROTY = [
  {
    href: "/panel/admin/kursy",
    etykieta: "Kursy",
    opis: "Dodaj kurs, opublikuj, ustaw kolejność",
  },
  {
    href: "/panel/admin/tematy",
    etykieta: "Tematy",
    opis: "Zdecyduj, co widzi użytkownik w wyborze tematu",
  },
  {
    href: "/panel/admin/uzytkownicy",
    etykieta: "Użytkownicy",
    opis: "Role, dostęp, konta wyłączone",
  },
];

export default async function Przeglad() {
  const stan = await bazaDostepna();

  if (!stan.ok) {
    return (
      <div>
        <NaglowekSekcji nr="01" tytul="Przegląd platformy" />
        <div className="mt-12">
          <Komunikat ton="odmowa" tytul="Baza danych nie odpowiada">
            <p>Uruchom bazę i odśwież stronę:</p>
            <pre className="overflow-x-auto border border-nadruk/35 bg-kalka px-4 py-3 font-mono text-[0.8125rem] text-przebicie-2">
              npm run db:up{"\n"}npm run db:seed
            </pre>
            <p className="font-mono text-[0.75rem] text-przebicie-3">
              Szczegóły: {stan.powod}
            </p>
          </Komunikat>
        </div>
      </div>
    );
  }

  const s = await statystyki();

  const rejestr: Array<[string, number | string, string]> = [
    ["Konta ogółem", s?.uzytkownicy ?? 0, "wszystkie role"],
    ["Nauczyciele", s?.nauczyciele ?? 0, "prowadzą kursy"],
    ["Uczniowie", s?.uczniowie ?? 0, "mają przypisane tematy"],
    [
      "Kursy",
      `${s?.kursy_opublikowane ?? 0} / ${s?.kursy ?? 0}`,
      "opublikowane / wszystkie",
    ],
    [
      "Tematy",
      `${s?.tematy_widoczne ?? 0} / ${s?.tematy ?? 0}`,
      "widoczne / wszystkie",
    ],
    ["Ukończone przejścia", s?.ukonczenia ?? 0, "scenariusze doprowadzone do końca"],
  ];

  return (
    <div>
      <NaglowekSekcji
        nr="01"
        tytul="Stan platformy na dziś."
        opis="Rejestr tego, co jest w bazie. Liczby pochodzą wprost z zapytań, nie z pamięci podręcznej."
      />

      <div className="mt-12 rejestr">
        <div className="przewijana">
        <table className="w-full min-w-[32rem] border-collapse text-left">
          <caption className="sr-only">Podsumowanie stanu platformy</caption>
          <thead>
            <tr className="border-b border-linia-mocna">
              <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">
                Pozycja
              </th>
              <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">
                Stan
              </th>
              <th scope="col" className="sygnatura pb-2.5 font-normal">
                Uwagi
              </th>
            </tr>
          </thead>
          <tbody>
            {rejestr.map(([pozycja, wartosc, uwaga]) => (
              <tr key={pozycja} className="border-b border-linia">
                <th
                  scope="row"
                  className="py-4 pr-4 text-[0.9375rem] font-normal text-przebicie"
                >
                  {pozycja}
                </th>
                <td className="liczby py-4 pr-4 font-display text-[1.25rem] font-extrabold text-stempel-jasny [font-stretch:110%]">
                  {wartosc}
                </td>
                <td className="py-4 text-[0.875rem] text-przebicie-3">{uwaga}</td>
              </tr>
            ))}
          </tbody>
          </table>
        </div>
      </div>

      <p className="podpowiedz-przewijania" aria-hidden="true">
        <span className="inline-block h-px w-4 bg-linia-mocna" />
        Przewiń rejestr w bok
      </p>

      <div className="mt-14">
        <h2 className="border-b border-linia pb-3 font-mono text-[0.6875rem] tracking-[0.18em] text-przebicie-2 uppercase">
          Rozdzielnik zadań
        </h2>
        <ul className="mt-6 grid border-t border-linia sm:grid-cols-3 sm:divide-x sm:divide-linia">
          {SKROTY.map((s) => (
            <li key={s.href} className="border-b border-linia">
              <Link
                href={s.href}
                className="group flex h-full flex-col justify-between gap-6 p-5 transition-colors duration-200 hover:bg-kalka-2"
              >
                <div>
                  <p className="font-display text-[1.0625rem] font-extrabold tracking-[0.02em] text-przebicie uppercase [font-stretch:112%] transition-colors duration-200 group-hover:text-stempel-jasny">
                    {s.etykieta}
                  </p>
                  <p className="mt-2 text-[0.875rem] leading-relaxed text-przebicie-3">
                    {s.opis}
                  </p>
                </div>
                <IkonaStrzalka className="h-4 w-4 text-przebicie-3 transition-colors duration-200 group-hover:text-stempel-jasny" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
