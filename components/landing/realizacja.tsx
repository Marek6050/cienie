import Link from "next/link";
import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";
import { WtedyDzis } from "@/components/wtedy-dzis";
import { IkonaStrzalka } from "@/components/ikony";
import { ZESPOL } from "@/lib/kontakt";

const ZAWARTOSC = [
  { co: "Prolog i dziewięć scen fabularnych z wyborami", meta: "Roleplay" },
  { co: "Oś czasu w czterech wątkach: wydarzenia, ucieczki, losy indywidualne, statystyki", meta: "1945" },
  { co: "Interaktywna mapa regionu z obsługą dotykową", meta: "Unity WebGL" },
  { co: "Dwie minigry, w tym porównanie miejsc wtedy i dziś", meta: "Fotografie" },
  { co: "Quiz i podsumowanie przejścia", meta: "Sprawdzenie" },
  { co: "Słowniczek pojęć dostępny w trakcie gry", meta: "Pomoc" },
  { co: "Wskaźnik moralny reagujący na decyzje gracza", meta: "Konsekwencje" },
  { co: "Polski i angielski", meta: "PL / EN" },
];

export function Realizacja() {
  return (
    <Sekcja
      id="realizacja"
      nr="04"
      tytul={<>„Cisza nad Raszową” — pierwsza produkcja na tej platformie.</>}
      lead={
        <>
          Gotowa, grywalna opowieść o deportacjach ludności górnośląskiej do ZSRR
          w 1945 roku, prowadzona z perspektywy jednej osoby idącej przez zimę
          tego roku. Powstała w{" "}
          <span className="text-przebicie">{ZESPOL.szkolaLokatyw}</span>.
        </>
      }
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-14">
        <Przebicie>
          <ul className="border-t border-linia">
            {ZAWARTOSC.map((z) => (
              <li
                key={z.co}
                className="flex items-baseline justify-between gap-6 border-b border-linia py-4"
              >
                <span className="max-w-[46ch] text-[0.9375rem] leading-snug text-przebicie-2">
                  {z.co}
                </span>
                <span className="sygnatura shrink-0 text-right">{z.meta}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link href="/panel" className="stempel stempel-lekki">
              Otwórz w panelu
              <IkonaStrzalka className="h-4 w-4" />
            </Link>
            <p className="sygnatura max-w-[34ch] leading-relaxed">
              Zespół autorski: {ZESPOL.autorzy.join(" · ")}
            </p>
          </div>
        </Przebicie>

        <Przebicie opoznienie={160}>
          <WtedyDzis />
        </Przebicie>
      </div>
    </Sekcja>
  );
}
