import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";
import { KreatorPodglad } from "@/components/kreator-podglad";

const ODBIORCY = [
  {
    kto: "Szkoła",
    dostaje:
      "Konta dla klas, kurs z przypisanymi tematami, podgląd postępów uczniów",
    potrzebuje: "Przeglądarka i telefony uczniów",
  },
  {
    kto: "Muzeum",
    dostaje:
      "Opowieść zbudowaną wokół własnych zbiorów, do sali edukacyjnej i do domu",
    potrzebuje: "Materiał źródłowy i konsultacja merytoryczna",
  },
  {
    kto: "Instytucja pamięci",
    dostaje:
      "Ten sam silnik pod inne wydarzenie — sceny, oś czasu, mapa, słowniczek",
    potrzebuje: "Scenariusz albo kwerenda po naszej stronie",
  },
];

export function Kreator() {
  return (
    <Sekcja
      id="kreator"
      nr="05"
      tytul="Ta sama maszyna, inna historia."
      lead={
        <>
          Scena to nie kod, tylko zestaw pól: tło, postać, dźwięk, kwestia i
          skutki wyborów. Kto potrafi napisać scenariusz lekcji, potrafi
          zbudować scenę. My dokładamy kwerendę, grafikę i silnik.
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

        <Przebicie opoznienie={160}>
          <h3 className="font-display text-[1.125rem] font-extrabold tracking-[0.02em] text-przebicie uppercase [font-stretch:112%]">
            Rozdzielnik ofertowy
          </h3>

          <table className="mt-5 w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-linia-mocna">
                <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">
                  Odbiorca
                </th>
                <th scope="col" className="sygnatura pb-2.5 pr-4 font-normal">
                  Co dostaje
                </th>
                <th scope="col" className="sygnatura pb-2.5 font-normal">
                  Czego potrzebuje
                </th>
              </tr>
            </thead>
            <tbody>
              {ODBIORCY.map((o) => (
                <tr key={o.kto} className="border-b border-linia align-top">
                  <th
                    scope="row"
                    className="py-4 pr-4 font-display text-[0.9375rem] font-extrabold text-stempel-jasny [font-stretch:110%]"
                  >
                    {o.kto}
                  </th>
                  <td className="py-4 pr-4 text-[0.875rem] leading-relaxed text-przebicie-2">
                    {o.dostaje}
                  </td>
                  <td className="py-4 text-[0.875rem] leading-relaxed text-przebicie-3">
                    {o.potrzebuje}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-6 max-w-[56ch] text-[0.9375rem] leading-relaxed text-przebicie-3">
            Zakres, termin i warunki ustalamy indywidualnie — nie mamy cennika
            z półki i nie udajemy, że mamy.
          </p>
        </Przebicie>
      </div>
    </Sekcja>
  );
}
