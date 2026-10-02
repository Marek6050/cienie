import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { NaglowekSekcji } from "@/components/witryna/naglowek-sekcji";
import { Grafika } from "@/components/witryna/grafika";
import {
  IkonaTeczka, IkonaTelefon, IkonaZrodlo, IkonaRozgalezienie, IkonaOsoby,
} from "@/components/ikony";

const KROKI = [
  { nr: "01", Ikona: IkonaTeczka, tytul: "Wybierz historię", tresc: "Nauczyciel uruchamia wybrany materiał, np. „Ciszę nad Raszową”.", ton: "biala" },
  { nr: "02", Ikona: IkonaTelefon, tytul: "Udostępnij uczniom", tresc: "Uczniowie otwierają materiał na telefonie lub komputerze. Bez instalacji.", ton: "biala" },
  { nr: "03", Ikona: IkonaZrodlo, tytul: "Poznaj wydarzenia", tresc: "Uczniowie pracują ze źródłami, fotografiami, mapami i relacjami świadków.", ton: "biala" },
  { nr: "04", Ikona: IkonaRozgalezienie, tytul: "Podejmij decyzję", tresc: "W kluczowych momentach uczniowie wybierają, jak postąpić — i poznają konsekwencje.", ton: "akcent" },
  { nr: "05", Ikona: IkonaOsoby, tytul: "Porozmawiaj o wyborach", tresc: "Klasa porównuje decyzje i wspólnie analizuje wydarzenia.", ton: "biala" },
] as const;

const PO_LEKCJI = [
  "rozumie kontekst wydarzenia",
  "pracuje ze źródłami",
  "odróżnia fakt od rekonstrukcji",
  "analizuje decyzje w realiach epoki",
  "dostrzega konsekwencje wyborów",
  "formułuje argumenty i porównuje perspektywy",
];

export function JakToDziala() {
  return (
    <Sekcja id="jak-to-dziala">
      <NaglowekSekcji
        etykieta="Jak to działa"
        tytul="Jedna lekcja. Pięć prostych kroków."
        lead="Bez instalacji, bez dodatkowego przygotowania, bez skomplikowanej konfiguracji. Wybierz historię, udostępnij ją uczniom i przeprowadź angażującą lekcję."
      />

      <Siatka>
        {KROKI.map((k, i) => {
          const akcent = k.ton === "akcent";
          return (
            <Karta key={k.nr} span="lg:col-span-4" ton={k.ton} opoznienie={i * 70} className="flex flex-col justify-between gap-10">
              <div className="flex items-center justify-between">
                <k.Ikona className={`h-7 w-7 ${akcent ? "text-white" : "text-akcent"}`} />
                <span className={`font-mono text-[0.8125rem] font-medium ${akcent ? "text-white/70" : "text-tusz-3"}`}>
                  {k.nr}
                </span>
              </div>
              <div>
                <h3 className="h-karty text-[1.25rem]">{k.tytul}</h3>
                <p className={`mt-2 text-[0.9375rem] leading-relaxed ${akcent ? "text-white/85" : "text-tusz-2"}`}>
                  {k.tresc}
                </p>
              </div>
            </Karta>
          );
        })}

        <Karta span="lg:col-span-4" bezWciecia opoznienie={350} className="min-h-[14rem]">
          <Grafika
            nazwa="jak-dziala-klasa"
            nr="04"
            proporcje="4:3"
            alt="Nauczyciel i klasa wspólnie omawiają decyzje podjęte w interaktywnej opowieści."
            sizes="(max-width: 1024px) 100vw, 400px"
          />
        </Karta>

        <Karta span="lg:col-span-12" ton="mgla" className="sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_1fr] lg:items-center">
            <h3 className="h-sekcji text-[1.625rem] text-tusz sm:text-[2rem]">Czego uczy się uczeń?</h3>
            <ul className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {PO_LEKCJI.map((p) => (
                <li key={p} className="flex items-start gap-3 rounded-xl bg-white px-4 py-3.5">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-akcent" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" />
                  </svg>
                  <span className="text-[0.9375rem] leading-snug text-tusz">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </Karta>
      </Siatka>
    </Sekcja>
  );
}
