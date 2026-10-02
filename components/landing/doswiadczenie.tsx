import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { NaglowekSekcji } from "@/components/witryna/naglowek-sekcji";
import { Grafika } from "@/components/witryna/grafika";
import {
  IkonaKsiazka, IkonaSluchawki, IkonaNotatka, IkonaPytanie,
  IkonaLupa, IkonaRozgalezienie, IkonaWykres, IkonaOsoby,
} from "@/components/ikony";
import { StrzalkaPrzejscia } from "@/components/witryna/strzalka-przejscia";

const ODBIORCA = [
  { Ikona: IkonaKsiazka, co: "czyta" },
  { Ikona: IkonaSluchawki, co: "słucha" },
  { Ikona: IkonaNotatka, co: "zapamiętuje" },
  { Ikona: IkonaPytanie, co: "odpowiada na pytania" },
];

const UCZESTNIK = [
  { Ikona: IkonaLupa, co: "analizuje" },
  { Ikona: IkonaRozgalezienie, co: "wybiera" },
  { Ikona: IkonaWykres, co: "odkrywa konsekwencje" },
  { Ikona: IkonaOsoby, co: "dyskutuje" },
];

export function Doswiadczenie() {
  return (
    <Sekcja id="doswiadczenie">
      <NaglowekSekcji
        etykieta="Od odbiorcy do uczestnika"
        tytul="Historia nie musi być kolejną prezentacją."
        lead={
          <>
            Na tradycyjnej lekcji uczeń często pozostaje odbiorcą — słucha,
            czyta i zapamiętuje.{" "}
            <span className="font-semibold text-tusz">Tutaj staje się uczestnikiem wydarzeń.</span>{" "}
            Analizuje sytuację, podejmuje decyzje i sprawdza ich konsekwencje.
          </>
        }
      />

      <Siatka>
        <Karta span="lg:col-span-5" bezWciecia ton="biala">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Grafika
              nazwa="lekcja-tradycyjna"
              nr="02"
              proporcje="4:3"
              alt="Znudzony uczeń podpierający głowę w ławce podczas tradycyjnej lekcji."
              sizes="(max-width: 1024px) 100vw, 480px"
              className="grayscale"
            />
          </div>
          <div className="p-6 sm:p-8">
            <span className="etykieta etykieta-szara">Tradycyjna lekcja</span>
            <p className="h-karty mt-4 text-[1.25rem] text-tusz-2">
              Uczeń głównie odbiera informacje.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2.5">
              {ODBIORCA.map(({ Ikona, co }) => (
                <li key={co} className="flex items-center gap-3 rounded-xl bg-tlo px-3.5 py-3">
                  <Ikona className="h-5 w-5 shrink-0 text-tusz-3" />
                  <span className="text-[0.9375rem] leading-tight text-tusz-2">{co}</span>
                </li>
              ))}
            </ul>
          </div>
        </Karta>

        <Karta span="lg:col-span-2" ton="mgla" opoznienie={100} className="flex items-center justify-center p-6">
          <p className="flex flex-row items-center gap-4 text-center font-mono text-[0.6875rem] tracking-[0.12em] text-akcent-ciemny uppercase lg:flex-col lg:gap-5">
            <span>Od odbiorcy</span>
            <StrzalkaPrzejscia className="text-akcent lg:hidden" />
            <StrzalkaPrzejscia pionowo className="hidden text-akcent lg:block" />
            <span className="font-bold">Do uczestnika</span>
          </p>
        </Karta>

        <Karta span="lg:col-span-5" bezWciecia opoznienie={200} className="ring-2 ring-akcent ring-inset">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Grafika
              nazwa="lekcja-interaktywna"
              nr="03"
              proporcje="4:3"
              alt="Uczeń w klasie trzymający telefon z ekranem wyboru decyzji w historycznej opowieści."
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
          <div className="p-6 sm:p-8">
            <span className="etykieta">Interaktywna historia</span>
            <p className="h-karty mt-4 text-[1.25rem] text-tusz">
              Uczeń aktywnie pracuje z historią.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2.5">
              {UCZESTNIK.map(({ Ikona, co }) => (
                <li key={co} className="flex items-center gap-3 rounded-xl bg-akcent-mgla px-3.5 py-3">
                  <Ikona className="h-5 w-5 shrink-0 text-akcent" />
                  <span className="text-[0.9375rem] leading-tight text-tusz">{co}</span>
                </li>
              ))}
            </ul>
          </div>
        </Karta>

        <Karta span="lg:col-span-12" ton="ciemna" opoznienie={80} className="sm:p-10">
          <div className="grid items-center gap-6 sm:grid-cols-[1fr_auto_1fr] sm:gap-10">
            <div>
              <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-white/55 uppercase">Zamiast tylko pytać</p>
              <p className="h-karty mt-3 text-[1.375rem] text-white/60 sm:text-[1.75rem]">„Co się wydarzyło?”</p>
            </div>
            <StrzalkaPrzejscia className="text-[#7c6cf0] sm:hidden" pionowo />
            <StrzalkaPrzejscia className="hidden text-[#7c6cf0] sm:block" />
            <div>
              <p className="font-mono text-[0.6875rem] tracking-[0.12em] text-[#b9adff] uppercase">Uczeń zaczyna pytać</p>
              <p className="h-karty mt-3 text-[1.375rem] text-white sm:text-[1.75rem]">
                „Co ja zrobiłbym w tej sytuacji — i dlaczego?”
              </p>
            </div>
          </div>
        </Karta>
      </Siatka>
    </Sekcja>
  );
}
