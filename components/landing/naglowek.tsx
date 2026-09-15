import Link from "next/link";
import { Przebicie } from "@/components/przebicie";
import { Pieczec } from "@/components/pieczec";
import { IkonaKlucz, IkonaStrzalka } from "@/components/ikony";

const STATUS = [
  {
    stopien: "potwierdzone" as const,
    etykieta: "Potwierdzone źródłem",
    tresc:
      "Rozkaz Państwowego Komitetu Obrony ZSRR z lutego 1945 o internowaniu osób w wieku 17–50 lat zdolnych do pracy.",
  },
  {
    stopien: "rekonstrukcja" as const,
    etykieta: "Rekonstrukcja",
    tresc:
      "Trasa transportu i rozkład obozu zbiorczego, złożone z relacji świadków i opracowań.",
  },
  {
    stopien: "dramatyzacja" as const,
    etykieta: "Dramatyzacja",
    tresc:
      "Dialogi i postacie. Zawsze oznaczone w grze, nigdy podane jako cytat z dokumentu.",
  },
];

export function Naglowek() {
  return (
    <section
      id="platforma"
      className="relative overflow-x-clip px-5 pt-12 pb-0 sm:px-8 sm:pt-16"
    >
      <div className="mx-auto grid w-full max-w-[1240px] gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-start lg:gap-14">
        {/* Lewa kolumna — klauzula pierwsza */}
        <div className="relative">
          <span
            className="paragraf block text-[clamp(2.5rem,7vw,6rem)]"
            aria-hidden="true"
          >
            §01
          </span>

          <Przebicie
            as="h1"
            className="mt-4 max-w-none font-display text-[clamp(2.125rem,4.2vw,3.75rem)] leading-[1] font-black tracking-[-0.035em] text-przebicie text-balance [font-stretch:125%] sm:max-w-[22ch]"
          >
            Historia, w której uczeń musi wybrać.
          </Przebicie>

          <Przebicie
            opoznienie={140}
            className="mt-8 max-w-[54ch]"
          >
            <p className="text-[1.0625rem] leading-[1.65] text-przebicie-2 sm:text-[1.125rem]">
              <strong className="font-semibold text-przebicie">
                Cienie Rzeczypospolitej
              </strong>{" "}
              to platforma interaktywnych opowieści historycznych dla szkół i
              muzeów — składanych ze źródeł i granych na telefonie. Pierwsza
              produkcja,{" "}
              <em className="text-przebicie not-italic">„Cisza nad Raszową”</em>,
              prowadzi przez deportacje Górnoślązaków do ZSRR w 1945 roku.
            </p>
          </Przebicie>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <Link href="/panel" className="stempel">
              Zobacz demonstrację
              <IkonaStrzalka className="h-4 w-4" />
            </Link>

            <Link
              href="/logowanie"
              className="group inline-flex items-center gap-2.5 font-mono text-[0.75rem] tracking-[0.12em] text-przebicie uppercase"
            >
              <IkonaKlucz className="h-4 w-4 text-przebicie-3 transition-colors duration-200 group-hover:text-stempel-jasny" />
              <span className="underline decoration-linia-mocna underline-offset-[0.4em] transition-colors duration-200 group-hover:decoration-stempel">
                Zaloguj się do panelu
              </span>
            </Link>
          </div>
        </div>

        {/* Prawa kolumna — przebitka. Jedyna jasna rzecz na ekranie. */}
        <Przebicie opoznienie={260} className="lg:pt-3">
          <div className="na-przebitce przebitka relative -rotate-[1.2deg] p-6 sm:p-7">
            <span
              aria-hidden="true"
              className="absolute top-4 right-4 rotate-[4deg] border-2 border-nadruk-papier px-2.5 py-1 font-mono text-[0.5625rem] leading-none tracking-[0.2em] text-nadruk-papier uppercase"
            >
              Materiał źródłowy
            </span>

            {/* Pieczęć — jedyny ślad platformy na cudzym dokumencie */}
            <Pieczec className="pointer-events-none absolute right-4 bottom-4 h-24 w-24 -rotate-[14deg] text-stempel-gleb opacity-45 mix-blend-multiply sm:h-28 sm:w-28" />

            <h2 className="mt-8 font-display text-[0.8125rem] font-extrabold tracking-[0.16em] text-przebitka-tusz uppercase [font-stretch:112%] sm:mt-4">
              Status źródła
            </h2>
            <p className="mt-2 max-w-[38ch] text-[0.8125rem] leading-relaxed text-przebitka-tusz-2">
              Każde zdanie w naszej grze ma jeden z trzech stopni pewności — i
              uczeń widzi który.
            </p>

            <dl className="relative z-10 mt-5 space-y-4">
              {STATUS.map((s) => (
                <div key={s.stopien} className="border-t border-przebitka-2 pt-3.5">
                  <dt
                    className={
                      s.stopien === "potwierdzone"
                        ? "font-mono text-[0.625rem] font-bold tracking-[0.16em] text-przebitka-tusz uppercase"
                        : s.stopien === "rekonstrukcja"
                          ? "font-mono text-[0.625rem] font-medium tracking-[0.16em] text-przebitka-tusz-2 uppercase"
                          : "font-mono text-[0.625rem] font-normal tracking-[0.16em] text-przebitka-tusz-2/75 uppercase italic"
                    }
                  >
                    {s.etykieta}
                  </dt>
                  <dd
                    className={`mt-1.5 max-w-[46ch] text-[0.8125rem] leading-[1.55] ${
                      s.stopien === "potwierdzone"
                        ? "text-przebitka-tusz"
                        : "text-przebitka-tusz-2"
                    }`}
                  >
                    {s.tresc}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="relative z-10 mt-6 max-w-[34ch] border-t border-przebitka-2 pt-3 font-mono text-[0.5625rem] leading-relaxed tracking-[0.12em] text-przebitka-tusz-2 uppercase">
              Fragment noty źródłowej z „Ciszy nad Raszową” · treść w streszczeniu
            </p>
          </div>
        </Przebicie>
      </div>

      {/* Rozdzielnik — kto dostaje ten dokument */}
      <div className="linia-dokumentu mx-auto mt-16 w-full max-w-[1240px] sm:mt-20">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2 py-4 font-mono text-[0.625rem] tracking-[0.2em] text-przebicie-3 uppercase sm:gap-x-4">
          <span className="text-przebicie-2">Rozdzielnik</span>
          <span aria-hidden="true" className="h-px w-6 bg-linia-mocna" />
          <span>Nauczyciele</span>
          <span aria-hidden="true">·</span>
          <span>Uczniowie</span>
          <span aria-hidden="true">·</span>
          <span>Muzea</span>
          <span aria-hidden="true">·</span>
          <span>Instytucje pamięci</span>
        </p>
      </div>
    </section>
  );
}
