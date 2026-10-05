import Image from "next/image";
import Link from "next/link";
import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { NaglowekSekcji } from "@/components/witryna/naglowek-sekcji";
import { Grafika } from "@/components/witryna/grafika";
import { WtedyDzis } from "@/components/witryna/wtedy-dzis";
import { IkonaStrzalka } from "@/components/ikony";

const META = ["9 scen", "45 minut", "PL / EN", "źródła", "mapa", "wybory"];

/** Prawdziwy materiał produkcyjny — nie makiety interfejsu. */
const KADRY = [
  {
    etykieta: "Narracja",
    tytul: "Odkrywaj historię",
    opis: "Prolog i dziewięć scen prowadzą przez zimę 1945 roku z perspektywy jednej osoby.",
    obraz: "/archiwum/postac-klara.webp",
    alt: "Portret jednej z postaci prowadzących opowieść.",
    pozycja: "object-top",
  },
  {
    etykieta: "Wybór",
    tytul: "Podejmuj decyzje",
    opis: "W kluczowych momentach uczeń decyduje, jak postąpić, i ponosi tego konsekwencje.",
    obraz: "/archiwum/zima.webp",
    alt: "Zimowa droga: sceneria, w której zapadają decyzje gracza.",
    pozycja: "object-center",
  },
  {
    etykieta: "Źródła",
    tytul: "Pracuj ze źródłami",
    opis: "Dokumenty, fotografie i relacje świadków dostępne w trakcie sceny, z oznaczonym statusem.",
    obraz: "/archiwum/konferencja-jaltanska.webp",
    alt: "Fotografia z konferencji jałtańskiej: materiał źródłowy w grze.",
    pozycja: "object-center",
  },
  {
    etykieta: "Mapa",
    tytul: "Odkrywaj miejsca",
    opis: "Interaktywna mapa regionu pokazuje, gdzie rozgrywały się kolejne wydarzenia.",
    obraz: "/archiwum/raszowa.webp",
    alt: "Raszowa: jedno z miejsc na mapie opowieści.",
    pozycja: "object-center",
  },
];

export function Historia() {
  return (
    <Sekcja id="historia">
      <NaglowekSekcji
        etykieta="Pierwsza historia na platformie"
        tytul="„Cisza nad Raszową”"
        lead="Interaktywna opowieść o deportacjach mieszkańców Górnego Śląska do ZSRR w 1945 roku. Uczeń przechodzi przez wydarzenia z perspektywy jednej osoby: odkrywa źródła, poznaje miejsca i podejmuje decyzje."
      />

      <Siatka>
        {/* Okładka — klucz wizualny produkcji */}
        <Karta span="lg:col-span-8" bezWciecia className="min-h-[30rem] lg:min-h-[34rem]">
          <Grafika
            nazwa="historia-okladka"
            nr="05"
            proporcje="16:10"
            alt="Zimowa droga pod Raszową w 1945 roku: kobieta z dzieckiem i sylwetki żołnierzy w oddali."
            sizes="(max-width: 1024px) 100vw, 780px"
          />
          <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 p-5 shadow-xl backdrop-blur sm:inset-x-5 sm:bottom-5 sm:p-6">
            <ul className="flex flex-wrap gap-2">
              {META.map((m) => (
                <li key={m} className="etykieta etykieta-szara">{m}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <p className="h-karty max-w-[28ch] text-[1.125rem] text-tusz">
                Zobacz, jak wygląda lekcja z perspektywy ucznia.
              </p>
              <Link href="/panel" className="przycisk przycisk-akcent">
                Wypróbuj historię
                <IkonaStrzalka className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Karta>

        <Karta span="lg:col-span-4" bezWciecia opoznienie={100}>
          <KartaKadru kadr={KADRY[0]} />
        </Karta>

        {KADRY.slice(1).map((k, i) => (
          <Karta key={k.etykieta} span="lg:col-span-4" bezWciecia opoznienie={i * 80}>
            <KartaKadru kadr={k} />
          </Karta>
        ))}

        <Karta span="lg:col-span-8" className="p-3 sm:p-3">
          <div className="p-3 sm:p-4">
            <span className="etykieta">Wtedy i dziś</span>
            <h3 className="h-karty mt-3 text-[1.25rem] text-tusz">To samo miejsce. Dwa momenty w czasie.</h3>
          </div>
          <WtedyDzis />
        </Karta>

        <Karta span="lg:col-span-4" ton="mgla" opoznienie={100} className="flex flex-col justify-between gap-8">
          <span className="etykieta etykieta-biala !bg-white/70 !text-akcent-ciemny self-start">Quiz i minigry</span>
          <div>
            <h3 className="h-sekcji text-[1.75rem] text-tusz">Sprawdź swoją wiedzę</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-tusz-2">
              Minigry, porównania „wtedy i dziś” oraz quiz sprawiają, że uczeń
              nie tylko czyta, ale aktywnie pracuje z materiałem. Podsumowanie
              zbiera to, co zobaczył i wybrał.
            </p>
          </div>
        </Karta>

        {/* Pomnik — jedyna ciemna, pełnoekranowa karta */}
        <Karta span="lg:col-span-12" bezWciecia className="min-h-[22rem] sm:min-h-[28rem]">
          <Image
            src="/archiwum/pomnik-bytom.webp"
            alt="Fragment pomnika Tragedii Górnośląskiej w Bytomiu: rzeźbiona grupa postaci z uniesionymi ramionami."
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover object-center grayscale"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="h-sekcji max-w-[24ch] text-[clamp(1.5rem,3.2vw,2.5rem)] text-white">
              Z Górnego Śląska wywieziono dziesiątki tysięcy ludzi. Przez
              dziesięciolecia nie wolno było o tym mówić.
            </p>
            <p className="mt-4 text-[0.8125rem] text-white/65">
              Pomnik Tragedii Górnośląskiej w Bytomiu · fot. z materiałów projektu
            </p>
          </div>
        </Karta>
      </Siatka>

      <p className="mt-4 px-2 text-[0.8125rem] text-tusz-3">
        Fotografie i postacie pochodzą z produkcji „Cisza nad Raszową”.
      </p>
    </Sekcja>
  );
}

function KartaKadru({ kadr }: { kadr: (typeof KADRY)[number] }) {
  return (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-piasek">
        <Image
          src={kadr.obraz}
          alt={kadr.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 400px"
          className={`object-cover ${kadr.pozycja}`}
        />
      </div>
      <div className="p-6">
        <span className="etykieta">{kadr.etykieta}</span>
        <h3 className="h-karty mt-3 text-[1.1875rem] text-tusz">{kadr.tytul}</h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-tusz-2">{kadr.opis}</p>
      </div>
    </>
  );
}
