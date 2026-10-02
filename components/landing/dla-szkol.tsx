import Link from "next/link";
import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { NaglowekSekcji } from "@/components/witryna/naglowek-sekcji";
import { Grafika } from "@/components/witryna/grafika";
import { IkonaStrzalka } from "@/components/ikony";

const SZKOLY = [
  { tytul: "Lekcje opowiadane przez źródła", tresc: "Uczeń rozpoznaje kontekst, porównuje świadectwa i buduje własną interpretację wydarzeń." },
  { tytul: "Praca z klasą i nauczycielem", tresc: "Materiał sprawdzi się na zajęciach, w projekcie grupowym albo jako punkt wyjścia do dyskusji." },
  { tytul: "Łatwe do wdrożenia", tresc: "Działa w przeglądarce i nie wymaga od szkoły dodatkowego ekosystemu ani trudnej konfiguracji." },
];

const ZYSKI = [
  "Nowy format pracy z historią, który obok wiedzy rozwija analizę i krytyczne myślenie.",
  "Lepsze zaangażowanie uczniów dzięki opowieści połączonej z interaktywnym doświadczeniem.",
  "Gotowe narzędzie do rozmowy o źródłach, pamięci, polityce i znaczeniu historii.",
];

export function DlaSzkol() {
  return (
    <Sekcja id="dla-szkol">
      <NaglowekSekcji
        etykieta="Dla szkół"
        tytul="Historia, która angażuje i pobudza do myślenia."
        lead="Projektujemy doświadczenia, które wspierają lekcję historii bez upraszczania samych wydarzeń."
      />

      <Siatka>
        <Karta span="lg:col-span-5 lg:row-span-3" bezWciecia className="min-h-[22rem]">
          <Grafika
            nazwa="szkola-nauczyciel"
            nr="06"
            proporcje="4:5"
            alt="Nauczycielka historii pomaga uczniom przy ławkach, na ekranach telefonów widać historyczną opowieść."
            sizes="(max-width: 1024px) 100vw, 480px"
          />
        </Karta>

        {SZKOLY.map((s, i) => (
          <Karta key={s.tytul} span="lg:col-span-7" opoznienie={i * 70} className="flex items-start gap-5 !py-6">
            <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-akcent-mgla font-mono text-[0.8125rem] font-bold text-akcent-ciemny">
              {i + 1}
            </span>
            <div>
              <h3 className="h-karty text-[1.1875rem] text-tusz">{s.tytul}</h3>
              <p className="mt-1.5 max-w-[56ch] text-[0.9375rem] leading-relaxed text-tusz-2">{s.tresc}</p>
            </div>
          </Karta>
        ))}

        <Karta span="lg:col-span-12" ton="szalwia" className="sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,16rem)_1fr_auto] lg:items-center">
            <h3 className="h-sekcji text-[1.625rem] text-tusz">Co zyskuje szkoła</h3>
            <ul className="grid gap-2.5 md:grid-cols-3">
              {ZYSKI.map((z) => (
                <li key={z} className="rounded-xl bg-white p-4 text-[0.9375rem] leading-relaxed text-tusz-2">{z}</li>
              ))}
            </ul>
            <Link href="/materialy-dla-nauczycieli" className="przycisk">
              Materiały dla nauczycieli
              <IkonaStrzalka className="h-4 w-4" />
            </Link>
          </div>
        </Karta>
      </Siatka>
    </Sekcja>
  );
}
