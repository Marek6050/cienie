import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { NaglowekSekcji } from "@/components/witryna/naglowek-sekcji";

const STOPNIE = [
  {
    etykieta: "Fakt",
    opis: "potwierdzony źródłem",
    przyklad: "Rozkaz Państwowego Komitetu Obrony ZSRR z lutego 1945 o internowaniu osób w wieku 17–50 lat zdolnych do pracy.",
    kropka: "bg-akcent",
  },
  {
    etykieta: "Rekonstrukcja",
    opis: "odtworzona na podstawie dostępnych materiałów",
    przyklad: "Trasa transportu i rozkład obozu zbiorczego, złożone z relacji świadków i opracowań.",
    kropka: "bg-[#e0a64a]",
  },
  {
    etykieta: "Dramatyzacja",
    opis: "element narracyjny, nie fakt",
    przyklad: "Dialogi i postacie. Zawsze oznaczone w grze, nigdy podane jako cytat z dokumentu.",
    kropka: "bg-tusz-3",
  },
];

const ETAPY = [
  { nr: "1", tytul: "Kwerenda", tresc: "Zaczynamy od źródeł: rozkazów, relacji, fotografii, dokumentów i opracowań." },
  { nr: "2", tytul: "Weryfikacja", tresc: "Sprawdzamy, co jest bezpośrednio potwierdzone, a co wymaga ostrożnej rekonstrukcji." },
  { nr: "3", tytul: "Scenariusz", tresc: "Dopiero wtedy rozkładamy wydarzenie na sceny i budujemy narrację krok po kroku." },
];

export function Metodologia() {
  return (
    <Sekcja id="metodologia">
      <NaglowekSekcji
        etykieta="Metodologia"
        tytul="Najpierw źródła. Dopiero potem narracja."
        lead={
          <>
            Każda historia zaczyna się od kwerendy, nie od scenariusza. Żeby
            doświadczenie było wiarygodne, uczeń zawsze wie,{" "}
            <span className="font-semibold text-tusz">gdzie kończy się źródło, a zaczyna narracja.</span>
          </>
        }
      />

      <Siatka>
        {ETAPY.map((e, i) => (
          <Karta key={e.nr} span="lg:col-span-4" opoznienie={i * 70} className="flex flex-col justify-between gap-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-akcent-mgla font-mono text-[0.875rem] font-bold text-akcent-ciemny">
              {e.nr}
            </span>
            <div>
              <h3 className="h-karty text-[1.25rem] text-tusz">{e.tytul}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-tusz-2">{e.tresc}</p>
            </div>
          </Karta>
        ))}

        <Karta span="lg:col-span-8" ton="piasek" className="sm:p-8">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white font-mono text-[0.875rem] font-bold text-tusz">4</span>
            <h3 className="h-karty text-[1.25rem] text-tusz">Status treści</h3>
          </div>
          <p className="mt-3 text-[0.9375rem] text-tusz-2">Każdy element otrzymuje jasne oznaczenie:</p>
          <dl className="mt-5 grid gap-2.5 md:grid-cols-3">
            {STOPNIE.map((s) => (
              <div key={s.etykieta} className="rounded-xl bg-white p-4">
                <dt className="flex items-center gap-2 text-[0.9375rem] font-bold text-tusz">
                  <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${s.kropka}`} />
                  {s.etykieta}
                </dt>
                <dd className="mt-1 text-[0.8125rem] text-tusz-3">{s.opis}</dd>
                <dd className="mt-3 text-[0.8125rem] leading-relaxed text-tusz-2">{s.przyklad}</dd>
              </div>
            ))}
          </dl>
        </Karta>

        <Karta span="lg:col-span-4" ton="akcent" opoznienie={100} className="flex flex-col justify-between gap-10">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-mono text-[0.875rem] font-bold">5</span>
          <div>
            <h3 className="h-karty text-[1.25rem]">Warstwa interaktywna</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-white/85">
              Dopiero na końcu dodajemy grafikę, dźwięk, mapy i wybory.
              Technologia ma pomagać wejść w historię, ale nie może jej przykrywać.
            </p>
          </div>
        </Karta>
      </Siatka>
    </Sekcja>
  );
}
