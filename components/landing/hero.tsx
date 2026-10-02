import Link from "next/link";
import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { Grafika } from "@/components/witryna/grafika";
import { IkonaStrzalka, IkonaZegar, IkonaTelefon, IkonaZrodlo, IkonaNotatka } from "@/components/ikony";
import { SCENA_DEMO as S } from "@/lib/scena-demo";

const KORZYSCI = [
  { Ikona: IkonaZegar, tytul: "45 minut", tresc: "Materiał mieści się w jednej lekcji." },
  { Ikona: IkonaTelefon, tytul: "Bez instalacji", tresc: "Telefon lub komputer — wystarczy przeglądarka." },
  { Ikona: IkonaNotatka, tytul: "Gotowe do użycia", tresc: "Materiały i przebieg lekcji są przygotowane." },
  { Ikona: IkonaZrodlo, tytul: "Oparte na źródłach", tresc: "Fakt, rekonstrukcja i narracja są rozdzielone." },
];

export function Hero() {
  return (
    <Sekcja id="platforma" className="pt-6 sm:pt-8">
      <Siatka>
        <Karta span="lg:col-span-7" className="flex flex-col justify-between gap-12 sm:p-10 lg:min-h-[34rem]">
          <div>
            <span className="etykieta">Interaktywne lekcje historii</span>
            <h1 className="h-sekcji mt-6 text-[clamp(1.75rem,4.4vw,3.75rem)] text-tusz">
              Historia, w której każda decyzja ma&nbsp;konsekwencje.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-tusz-2 sm:text-[1.125rem]">
              <strong className="font-semibold text-tusz">Cienie Rzeczypospolitej</strong>{" "}
              to lekcje historii oparte na źródłach i prawdziwych wydarzeniach.
              Uczeń analizuje sytuację, podejmuje decyzje i poznaje ich
              konsekwencje — nauczyciel dostaje gotowy materiał na 45 minut.
            </p>
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/panel" className="przycisk przycisk-akcent">
                Wypróbuj historię
                <IkonaStrzalka className="h-4 w-4" />
              </Link>
              <a href="#jak-to-dziala" className="przycisk przycisk-jasny">
                Jak to działa
              </a>
            </div>
            <p className="mt-5 text-[0.875rem] text-tusz-3">
              Masz już konto?{" "}
              <Link href="/logowanie" className="font-semibold text-tusz underline decoration-obrys-mocny underline-offset-4 hover:decoration-akcent">
                Zaloguj się
              </Link>
            </p>
          </div>
        </Karta>

        <Karta span="lg:col-span-5" bezWciecia opoznienie={120} className="min-h-[26rem] lg:min-h-0">
          <Grafika
            nazwa="hero-uczniowie"
            nr="01"
            proporcje="4:5"
            alt="Uczniowie w klasie wspólnie przechodzą historyczną opowieść na telefonach."
            sizes="(max-width: 1024px) 100vw, 500px"
            priority
          />
          {/* Kadr z gry: mechanika pokazana zamiast opisana */}
          <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur sm:inset-x-4 sm:bottom-4">
            <p className="font-mono text-[0.6875rem] tracking-[0.08em] text-tusz-3 uppercase">
              {S.sygnatura} · {S.postac.imie}
            </p>
            <p className="mt-2 text-[0.9375rem] leading-snug text-tusz text-balance">
              {S.kwestia}
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {S.wybory.map((w) => (
                <li key={w.klucz} className="flex items-start gap-2.5 rounded-xl bg-tlo px-3 py-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-akcent text-[0.6875rem] font-bold text-white">
                    {w.klucz}
                  </span>
                  <span className="text-[0.8125rem] leading-snug text-tusz">{w.tekst}</span>
                </li>
              ))}
            </ul>
          </div>
        </Karta>

        {KORZYSCI.map((k, i) => (
          <Karta key={k.tytul} span="lg:col-span-3" opoznienie={i * 70} className="p-5 sm:p-6">
            <k.Ikona className="h-6 w-6 text-akcent" />
            <h3 className="h-karty mt-5 text-[1.0625rem] text-tusz">{k.tytul}</h3>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-tusz-2">{k.tresc}</p>
          </Karta>
        ))}
      </Siatka>
    </Sekcja>
  );
}
