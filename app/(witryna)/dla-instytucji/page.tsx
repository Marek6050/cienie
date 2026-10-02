import type { Metadata } from "next";
import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { NaglowekSekcji } from "@/components/witryna/naglowek-sekcji";
import { Grafika } from "@/components/witryna/grafika";
import { KreatorPodglad } from "@/components/witryna/kreator-podglad";
import { SekcjaFaq } from "@/components/landing/faq";
import type { PytanieFaq } from "@/components/witryna/faq";
import { IkonaKoperta, IkonaStrzalka } from "@/components/ikony";
import { KONTAKT } from "@/lib/kontakt";

export const metadata: Metadata = {
  title: "Dla muzeów, domów kultury i miejsc pamięci",
  description:
    "Interaktywne opowieści historyczne zbudowane na Waszych zbiorach, archiwach i relacjach świadków — dla muzeów, domów kultury, pomników i miejsc pamięci.",
};

const ADRESACI = [
  {
    id: "muzea",
    etykieta: "Muzea",
    tytul: "Nowa warstwa narracji wokół wystawy",
    tresc:
      "Zwiedzający nie tylko ogląda obiekt — przechodzi przez historię, która za nim stoi, i podejmuje decyzje osadzone w kontekście jego powstania.",
    punkty: ["opowieść oparta na zbiorach i dokumentach", "program edukacyjny dla grup szkolnych", "dopasowanie do konkretnej wystawy"],
    grafika: { nazwa: "instytucje-muzeum", nr: "08", alt: "Zwiedzający muzeum z telefonem przy gablocie z archiwalnymi dokumentami." },
  },
  {
    id: "domy-kultury",
    etykieta: "Domy kultury",
    tytul: "Lokalna historia opowiedziana z mieszkańcami",
    tresc:
      "Wydarzenia związane z konkretnym miejscem i społecznością, zbudowane z relacji świadków i lokalnych archiwów — do wspólnej pracy, nie tylko do oglądania.",
    punkty: ["historie regionu i społeczności", "warsztaty i projekty z mieszkańcami", "cykle wydarzeń i rocznice"],
    grafika: { nazwa: "instytucje-dom-kultury", nr: "09", alt: "Warsztaty w domu kultury — grupa mieszkańców przy stole z fotografiami i laptopem." },
  },
  {
    id: "miejsca-pamieci",
    etykieta: "Pomniki i miejsca pamięci",
    tytul: "Opowieść, którą zwiedzający zabiera ze sobą",
    tresc:
      "Pomnik pokazuje, że coś się wydarzyło. Interaktywna historia pomaga zrozumieć, co i dlaczego — na miejscu, na telefonie, we własnym tempie.",
    punkty: ["dostęp przez przeglądarkę, bez aplikacji", "obchody, rocznice i lekcje w terenie", "treść oparta na źródłach, nie na domysłach"],
    grafika: { nazwa: "instytucje-pomnik", nr: "10", alt: "Osoba przy pomniku patrząca w ekran telefonu z historyczną opowieścią o tym miejscu." },
  },
];

const MATERIAL = [
  { tytul: "Lokalne wydarzenia", tresc: "Historie związane z konkretnym miejscem, społecznością lub regionem." },
  { tytul: "Zbiory muzealne i archiwalne", tresc: "Dokumenty, fotografie, mapy i obiekty, które mogą stać się częścią doświadczenia." },
  { tytul: "Relacje i historie świadków", tresc: "Osobiste perspektywy, które nadają wydarzeniom ludzki wymiar." },
];

const ETAPY = [
  { nr: "01", tytul: "Rozmowa", tresc: "Poznajemy Wasz cel: wystawę, program edukacyjny albo wydarzenie." },
  { nr: "02", tytul: "Kwerenda", tresc: "Zbieramy i porządkujemy źródła — Wasze zbiory i dostępne opracowania." },
  { nr: "03", tytul: "Scenariusz", tresc: "Weryfikujemy fakty i budujemy narrację ze statusem każdej treści." },
  { nr: "04", tytul: "Wdrożenie", tresc: "Dodajemy grafikę, dźwięk, mapy i wybory — opowieść działa w przeglądarce." },
];

const FAQ_INSTYTUCJE: PytanieFaq[] = [
  {
    pytanie: "Od czego zaczynamy współpracę?",
    odpowiedz:
      "Od rozmowy o tym, co chcecie opowiedzieć i komu. Potem przechodzimy do źródeł: to, co już macie — zbiory, archiwa, relacje — jest punktem wyjścia, nie technologia.",
  },
  {
    pytanie: "Czy musimy mieć gotowe materiały?",
    odpowiedz:
      "Nie muszą być uporządkowane. Pomagamy je przejrzeć i zweryfikować w ramach kwerendy. Ważne, żeby wydarzenie miało pokrycie w źródłach — nie wymyślamy faktów.",
  },
  {
    pytanie: "Czy odbiorca musi instalować aplikację?",
    odpowiedz:
      "Nie. Opowieść działa w przeglądarce na telefonie lub komputerze, więc można do niej prowadzić zwykłym linkiem lub kodem QR przy wystawie czy pomniku.",
  },
  {
    pytanie: "Ile to kosztuje i ile trwa?",
    odpowiedz:
      "Zakres, termin i warunki ustalamy indywidualnie — nie mamy cennika z półki i nie udajemy, że mamy. Napisz, a wspólnie ocenimy, co jest potrzebne.",
  },
  {
    pytanie: "Kto odpowiada za treść historyczną?",
    odpowiedz:
      "Treść powstaje we współpracy z Wami — kuratorami i edukatorami. Każdy element ma oznaczony status: fakt, rekonstrukcja albo dramatyzacja, a uwagi merytoryczne zawsze można zgłosić.",
  },
];

export default function DlaInstytucji() {
  return (
    <>
      {/* Hero */}
      <Sekcja className="pt-6 sm:pt-8">
        <Siatka>
          <Karta span="lg:col-span-7" className="flex flex-col justify-between gap-12 sm:p-10 lg:min-h-[30rem]">
            <div>
              <span className="etykieta">Muzea · Domy kultury · Miejsca pamięci</span>
              <h1 className="h-sekcji mt-6 text-[clamp(1.75rem,4.4vw,3.5rem)] text-tusz">
                Historia, którą zwiedzający może&nbsp;przeżyć.
              </h1>
              <p className="mt-6 max-w-[54ch] text-[1.0625rem] leading-[1.7] text-tusz-2 sm:text-[1.125rem]">
                Zamieniamy Wasze zbiory, archiwa i relacje świadków w
                interaktywną opowieść, przez którą odbiorca przechodzi sam.
                Zaczynamy od materiału, który już macie.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${KONTAKT.mail}`} className="przycisk przycisk-akcent">
                <IkonaKoperta className="h-4 w-4" />
                Napisz do nas
              </a>
              <a href="#kreator" className="przycisk przycisk-jasny">Zobacz, jak to działa</a>
            </div>
          </Karta>

          <Karta span="lg:col-span-5" bezWciecia opoznienie={120} className="min-h-[22rem] lg:min-h-0">
            <Grafika
              nazwa="instytucje-hero"
              nr="07"
              proporcje="4:5"
              alt="Zwiedzający w sali muzealnej wspólnie oglądają historyczną opowieść na telefonie i ekranie dotykowym."
              sizes="(max-width: 1024px) 100vw, 500px"
              priority
            />
          </Karta>
        </Siatka>
      </Sekcja>

      {/* Trzy rodzaje instytucji */}
      <Sekcja id="oferta">
        <NaglowekSekcji
          etykieta="Dla kogo"
          tytul="Jeden silnik. Trzy rodzaje miejsc."
          lead="Ten sam sprawdzony mechanizm, który napędza „Ciszę nad Raszową”, możemy zbudować wokół innego wydarzenia, wystawy lub miejsca."
        />
        <Siatka>
          {ADRESACI.map((a, i) => (
            <Karta key={a.id} id={a.id} span="lg:col-span-4" bezWciecia opoznienie={i * 80} className="scroll-mt-28">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Grafika
                  nazwa={a.grafika.nazwa}
                  nr={a.grafika.nr}
                  proporcje="4:3"
                  alt={a.grafika.alt}
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="p-6 sm:p-7">
                <span className="etykieta">{a.etykieta}</span>
                <h3 className="h-karty mt-4 text-[1.25rem] text-tusz">{a.tytul}</h3>
                <p className="mt-3 text-[0.9375rem] leading-relaxed text-tusz-2">{a.tresc}</p>
                <ul className="mt-5 space-y-2 border-t border-obrys pt-5">
                  {a.punkty.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[0.9375rem] text-tusz">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-akcent" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="m5 12.5 4.5 4.5L19 7.5" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Karta>
          ))}
        </Siatka>
      </Sekcja>

      {/* Kreator */}
      <Sekcja id="kreator">
        <NaglowekSekcji
          etykieta="Kreator"
          tytul="Wasze źródła. Nasza metodologia. Interaktywna narracja."
          lead="Jedna scena, dwa widoki: tak widzi ją odbiorca i tak wygląda w kreatorze. Podmień tło, postać, dźwięk i skutki wyborów — dostajesz inną scenę, a po kilkudziesięciu takich, inną opowieść."
        />
        <Siatka>
          <Karta span="lg:col-span-7" className="p-3 sm:p-3">
            <KreatorPodglad />
          </Karta>

          <div className="grid gap-3 sm:gap-4 lg:col-span-5">
            <Karta bezWciecia opoznienie={80} className="min-h-[14rem]">
              <Grafika
                nazwa="instytucje-zrodla"
                nr="11"
                proporcje="16:10"
                alt="Archiwalne fotografie, dokumenty i mapa rozłożone na stole obok laptopa ze scenariuszem opowieści."
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </Karta>
            <Karta ton="piasek" opoznienie={160}>
              <h3 className="h-karty text-[1.1875rem] text-tusz">Z czego możemy to zbudować</h3>
              <dl className="mt-4 space-y-3">
                {MATERIAL.map((m) => (
                  <div key={m.tytul} className="rounded-xl bg-white px-4 py-3">
                    <dt className="text-[0.9375rem] font-bold text-tusz">{m.tytul}</dt>
                    <dd className="mt-0.5 text-[0.875rem] leading-relaxed text-tusz-2">{m.tresc}</dd>
                  </div>
                ))}
              </dl>
            </Karta>
          </div>
        </Siatka>
      </Sekcja>

      {/* Współpraca */}
      <Sekcja id="wspolpraca">
        <NaglowekSekcji
          etykieta="Współpraca"
          tytul="Cztery kroki od materiału do opowieści."
        />
        <Siatka>
          {ETAPY.map((e, i) => (
            <Karta key={e.nr} span="lg:col-span-3" ton={i === 3 ? "akcent" : "biala"} opoznienie={i * 70} className="flex flex-col justify-between gap-12">
              <span className={`font-mono text-[0.8125rem] font-medium ${i === 3 ? "text-white/70" : "text-tusz-3"}`}>{e.nr}</span>
              <div>
                <h3 className="h-karty text-[1.25rem]">{e.tytul}</h3>
                <p className={`mt-2 text-[0.9375rem] leading-relaxed ${i === 3 ? "text-white/85" : "text-tusz-2"}`}>{e.tresc}</p>
              </div>
            </Karta>
          ))}
        </Siatka>
      </Sekcja>

      <SekcjaFaq pozycje={FAQ_INSTYTUCJE} id="faq" tytul="Pytania instytucji" />

      {/* Wezwanie do działania */}
      <Sekcja id="kontakt">
        <Karta ton="ciemna" className="sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="h-sekcji max-w-[22ch] text-[clamp(1.875rem,4vw,3rem)]">
                Masz historię, którą warto opowiedzieć inaczej?
              </h2>
              <p className="mt-4 max-w-[52ch] text-[1rem] leading-[1.7] text-white/75">
                Napisz do nas. Zakres, termin i warunki ustalamy indywidualnie.
              </p>
            </div>
            <a href={`mailto:${KONTAKT.mail}`} className="przycisk przycisk-bialy">
              {KONTAKT.mail}
              <IkonaStrzalka className="h-4 w-4" />
            </a>
          </div>
        </Karta>
      </Sekcja>
    </>
  );
}
