import Link from "next/link";
import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";
import { WtedyDzis } from "@/components/wtedy-dzis";
import { IkonaStrzalka } from "@/components/ikony";
import { ZESPOL } from "@/lib/kontakt";

const META = ["9 scen", "45 minut", "PL / EN", "źródła", "mapa", "wybory"];

const W_SRODKU = [
  {
    tytul: "Historia, w której trzeba wybierać",
    tresc:
      "Prolog i dziewięć scen fabularnych prowadzą ucznia przez kolejne wydarzenia i stawiają go przed decyzjami osadzonymi w realiach epoki.",
  },
  {
    tytul: "Źródła, które można sprawdzić",
    tresc:
      "Fotografie, relacje, dokumenty, oś czasu i kontekst historyczny pomagają oddzielić fakt od rekonstrukcji.",
  },
  {
    tytul: "Miejsca, które można odkrywać",
    tresc:
      "Interaktywna mapa pozwala zobaczyć, gdzie rozgrywały się wydarzenia i jak poszczególne miejsca łączą się z opowieścią.",
  },
  {
    tytul: "Historia, z którą można wejść w interakcję",
    tresc:
      "Minigry, porównania „wtedy i dziś” oraz quiz sprawiają, że uczeń nie tylko czyta, ale aktywnie pracuje z materiałem.",
  },
];

export function Realizacja() {
  return (
    <Sekcja
      id="realizacja"
      nr="05"
      tytul={<>„Cisza nad Raszową” — pierwsza historia na platformie.</>}
      lead={
        <>
          Interaktywna opowieść o deportacjach mieszkańców Górnego Śląska do
          ZSRR w 1945 roku. Uczeń przechodzi przez wydarzenia z perspektywy
          jednej osoby: odkrywa źródła, poznaje miejsca, analizuje sytuacje i
          podejmuje decyzje, które prowadzą go przez kolejne etapy historii.
        </>
      }
    >
      {/* Metryka produkcji — rejestr dokumentowy, nie kafelki ze statystykami */}
      <Przebicie className="linia-dokumentu -mt-4 mb-12 pb-4">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[0.6875rem] tracking-[0.16em] text-przebicie-2 uppercase sm:gap-x-4">
          {META.map((m, i) => (
            <span key={m} className="flex items-center gap-x-3 sm:gap-x-4">
              {i > 0 ? (
                <span aria-hidden="true" className="text-przebicie-3">
                  ·
                </span>
              ) : null}
              {m}
            </span>
          ))}
        </p>
      </Przebicie>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-14">
        <div>
          <Przebicie>
            <h3 className="font-display text-[1.25rem] font-extrabold tracking-[-0.01em] text-przebicie [font-stretch:110%] sm:text-[1.4375rem]">
              Co czeka w środku?
            </h3>
          </Przebicie>

          <dl className="mt-7 border-t border-linia">
            {W_SRODKU.map((w, i) => (
              <Przebicie key={w.tytul} opoznienie={i * 80}>
                <div className="border-b border-linia py-5">
                  <dt className="font-display text-[1.0625rem] leading-snug font-extrabold text-przebicie [font-stretch:110%]">
                    {w.tytul}
                  </dt>
                  <dd className="mt-2 max-w-[62ch] text-[0.9375rem] leading-relaxed text-przebicie-2">
                    {w.tresc}
                  </dd>
                </div>
              </Przebicie>
            ))}
          </dl>

          <Przebicie opoznienie={140} className="mt-9">
            <Link href="/panel" className="stempel">
              Wypróbuj „Ciszę nad Raszową”
              <IkonaStrzalka className="h-4 w-4" />
            </Link>

            <p className="mt-6 max-w-[54ch] text-[0.875rem] leading-relaxed text-przebicie-3">
              „Cisza nad Raszową” powstała w {ZESPOL.szkolaLokatyw}.
              <span className="mt-1.5 block font-mono text-[0.6875rem] tracking-[0.06em]">
                Zespół autorski: {ZESPOL.autorzy.join(" · ")}
              </span>
            </p>
          </Przebicie>
        </div>

        <Przebicie opoznienie={160}>
          <WtedyDzis />
        </Przebicie>
      </div>
    </Sekcja>
  );
}
