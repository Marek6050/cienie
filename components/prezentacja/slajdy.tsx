import type { ReactNode } from "react";
import Image from "next/image";
import { Logo } from "@/components/logo";
import { Grafika } from "@/components/witryna/grafika";
import { Wej } from "./wej";
import { Licznik } from "./licznik";
import { ZdjecieOsoby } from "./zdjecie-osoby";
import { GlosowanieJury } from "./glosowanie";
import { WYNIKI, ZESPOL_PREZENTACJA } from "./dane";
import { IkonaOsoby, IkonaWykres, IkonaKsiazka, IkonaTeczka } from "@/components/ikony";

/* ------------------------------------------------------------------ pomocnicze */

function Slajd({ children }: { children: ReactNode }) {
  return <section className="flex h-full w-full flex-col p-[64px]">{children}</section>;
}

function Tytul({ etykieta, children, pod }: { etykieta: string; children: ReactNode; pod?: ReactNode }) {
  return (
    <Wej as="header" className="mb-9">
      <span className="etykieta etykieta-xl">{etykieta}</span>
      <h2 className="h-sekcji mt-5 text-[80px] text-tusz">{children}</h2>
      {pod ? <p className="mt-4 max-w-[1500px] text-[34px] leading-snug text-tusz-2">{pod}</p> : null}
    </Wej>
  );
}

function Zrzut({
  src,
  alt,
  podpis,
  className = "",
  pozycja = "object-top",
  zoom,
  i = 0,
}: {
  src: string;
  alt: string;
  podpis?: string;
  className?: string;
  pozycja?: string;
  /** Powiększenie kadru — zrzuty z gry mają treść w środku i drobny druk. */
  zoom?: string;
  i?: number;
}) {
  return (
    <Wej i={i} className={`relative overflow-hidden rounded-3xl bg-piasek ${className}`}>
      <Image src={src} alt={alt} fill sizes="1100px" className={`object-cover ${pozycja} ${zoom ?? ""}`} />
      {podpis ? (
        <span className="etykieta etykieta-xl absolute bottom-5 left-5 !bg-white/92 !text-tusz shadow-md">
          {podpis}
        </span>
      ) : null}
    </Wej>
  );
}

function Ptaszek({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-[34px] w-[34px] shrink-0 text-akcent ${className}`} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

/* ------------------------------------------------------------------ 1. otwarcie */

export function Otwarcie() {
  return (
    <Slajd>
      <div className="grid h-full grid-cols-[1.2fr_0.8fr] gap-6">
        <Wej className="karta flex flex-col justify-between !p-[64px]">
          <div className="flex items-center justify-between">
            <span className="etykieta etykieta-xl">Akademia STEM 2026 · Projekt nr 2</span>
            <Logo rozmiar={96} />
          </div>
          <div>
            <h1 className="h-sekcji text-[100px] leading-[1] text-balance text-tusz">
              Lekcja historii nie musi być nudna.
            </h1>
            <p className="mt-9 max-w-[900px] text-[38px] leading-snug text-tusz-2">
              <strong className="font-semibold text-tusz">Cisza nad Raszową</strong> — gra, w której
              uczeń przeżywa Tragedię Górnośląską 1945 roku i sam podejmuje decyzje.
            </p>
          </div>
          <p className="text-[26px] text-tusz-3">
            Zespół Szkół Technicznych i Ogólnokształcących w Kędzierzynie-Koźlu
          </p>
        </Wej>

        <Wej i={2} className="karta karta-bez-wciecia relative">
          <Grafika
            nazwa="hero-uczniowie"
            nr="01"
            proporcje="4:5"
            alt="Uczniowie w klasie wspólnie przechodzą historyczną opowieść na telefonach."
            sizes="780px"
            priority
          />
          <div className="absolute inset-x-6 bottom-6 overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="relative h-[250px] overflow-hidden">
              <Image src="/prezentacja/gra-koniew-wybory.webp" alt="Kadr z gry: wybór odpowiedzi w scenie „Rozkaz Koniewa”." fill sizes="720px" className="scale-[1.9] object-cover object-center" />
            </div>
            <p className="px-6 py-4 text-[24px] text-tusz-2">Kadr z działającego prototypu</p>
          </div>
        </Wej>
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 2. team */

export function Team() {
  return (
    <Slajd>
      <Tytul etykieta="Nasz team" pod="Uczniowie ZSTiO w Kędzierzynie-Koźlu. Każdy z nas współtworzył grę i zna ją od środka.">
        Pięć osób. Jedna gra.
      </Tytul>
      <div className="grid flex-1 grid-cols-5 gap-5">
        {ZESPOL_PREZENTACJA.map((o, k) => (
          <Wej key={o.slug} i={k + 1} className="karta flex flex-col items-center !px-6 !py-10 text-center">
            <ZdjecieOsoby slug={o.slug} imie={o.imie} rozmiar={260} />
            <h3 className="h-karty mt-9 text-[40px] leading-tight text-tusz">{o.imie}</h3>
            <p className="mt-3 text-[28px] leading-snug text-tusz-2">{o.rola}</p>
            {"dopisek" in o ? (
              <span className="etykieta etykieta-xl mt-auto whitespace-nowrap !px-4 !text-[20px]">{o.dopisek}</span>
            ) : (
              <span className="mt-auto" />
            )}
          </Wej>
        ))}
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 3. problem */

export function Problem() {
  return (
    <Slajd>
      <Tytul etykieta="Źródło problemu">Lokalna historia znika z pamięci — i z lekcji.</Tytul>
      <div className="grid flex-1 grid-cols-2 gap-6">
        <Wej i={1} className="karta karta-mgla flex flex-col !p-12">
          <span className="font-mono text-[28px] text-akcent-ciemny">01</span>
          <h3 className="h-sekcji mt-6 text-[58px] text-tusz">Brak informacji, a przez to świadomości</h3>
          <p className="mt-6 text-[38px] leading-snug text-tusz-2">
            Uczniowie nie znają lokalnych historii i tragedii. Deportacje dziesiątek tysięcy
            mieszkańców Górnego Śląska w 1945 roku są w szkołach rzadko poruszane.
          </p>
        </Wej>
        <Wej i={2} className="karta karta-piasek flex flex-col !p-12">
          <span className="font-mono text-[28px] text-tusz-3">02</span>
          <h3 className="h-sekcji mt-6 text-[58px] text-tusz">Nudna forma nauczania</h3>
          <p className="mt-6 text-[38px] leading-snug text-tusz-2">
            Wykład i podręcznik: uczeń odbiera, ale nie uczestniczy. W naszym pilotażu po takiej
            lekcji uczniowie odpowiadali poprawnie na zaledwie{" "}
            <strong className="font-bold text-tusz">53,4%</strong> pytań.
          </p>
        </Wej>
      </div>
      <Wej i={4} className="karta karta-ciemna mt-6 flex items-center gap-10 !px-12 !py-8">
        <p className="shrink-0 text-[30px] font-semibold text-white">Komu pomagamy:</p>
        <ul className="flex flex-wrap gap-3 text-[28px]">
          {["Uczniowie 13–19 lat", "Nauczyciele historii i WOS", "Lokalne społeczności", "Muzea i instytucje pamięci"].map((c) => (
            <li key={c} className="rounded-full bg-white/12 px-6 py-2.5 text-white">{c}</li>
          ))}
        </ul>
      </Wej>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 4. aplikacja */

export function Aplikacja() {
  const funkcje = ["Dialogi z wyborami", "Mapa regionu", "Oś czasu", "Słownik pojęć i postaci", "Quiz", "Minigra ze zdjęciami"];
  return (
    <Slajd>
      <Tytul etykieta="Czym się zajmujemy">Cisza nad Raszową — historia, w którą się gra.</Tytul>
      <div className="grid flex-1 grid-cols-12 gap-6">
        <Wej i={1} className="karta col-span-5 flex flex-col !p-11">
          <p className="text-[34px] leading-snug text-tusz">
            Wcielasz się w młodego zwiadowcę Armii Czerwonej w styczniu 1945 roku.
          </p>
          <p className="mt-6 text-[32px] leading-snug text-tusz-2">
            Na płonącym Górnym Śląsku każda rozmowa to dylemat: <strong className="font-semibold text-tusz">rozkaz czy sumienie</strong>. Gra
            pokazuje konsekwencje — nie ocenia za ciebie.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5">
            {funkcje.map((f) => (
              <li key={f} className="rounded-full bg-akcent-mgla px-5 py-2 text-[24px] font-medium text-akcent-ciemny">{f}</li>
            ))}
          </ul>
          <p className="mt-auto pt-6 text-[26px] text-tusz-3">Działa w przeglądarce · komputer i telefon · PL / EN</p>
        </Wej>

        <div className="col-span-7 grid grid-cols-2 grid-rows-[1.25fr_1fr] gap-6">
          <Zrzut i={2} src="/prezentacja/gra-koniew-wybory.webp" alt="Scena „Rozkaz Koniewa” z wyborem odpowiedzi." podpis="Wybory moralne" className="col-span-2" pozycja="object-center" zoom="scale-[1.45]" />
          <Zrzut i={3} src="/prezentacja/gra-mapa.webp" alt="Interaktywna mapa regionu z postacią gracza." podpis="Mapa" pozycja="object-center" />
          <Zrzut i={4} src="/prezentacja/gra-os-czasu.webp" alt="Oś czasu „Świadectwa z Wymazanej Ziemi”." podpis="Oś czasu" />
        </div>
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 5. nauczyciele */

const UCZNIOWIE = [
  { u: "Uczeń A", sceny: 9, quiz: "9 / 10" },
  { u: "Uczeń B", sceny: 9, quiz: "8 / 10" },
  { u: "Uczeń C", sceny: 7, quiz: "—" },
  { u: "Uczeń D", sceny: 5, quiz: "—" },
  { u: "Uczeń E", sceny: 3, quiz: "—" },
];

export function Nauczyciele() {
  return (
    <Slajd>
      <Tytul etykieta="Nie tylko gra" pod="Gra to połowa rozwiązania. Drugą połową jest nauczyciel — dlatego dajemy mu gotową lekcję i panel.">
        Narzędzie dla nauczyciela.
      </Tytul>
      <div className="grid flex-1 grid-cols-12 gap-6">
        <Wej i={1} className="karta karta-mgla col-span-5 flex flex-col !p-11">
          <h3 className="h-sekcji text-[48px] text-tusz">Gotowe materiały</h3>
          <ul className="mt-8 space-y-6">
            {[
              ["Scenariusz lekcji na 45 minut", "wprowadzenie → gra → test i dyskusja"],
              ["Test wiedzy: 30 pytań", "ten sam przed i po grze — do własnych pomiarów"],
              ["Ankieta dla nauczyciela", "5 pytań, żeby ocenić lekcję"],
            ].map(([t, o]) => (
              <li key={t} className="flex items-start gap-5">
                <Ptaszek className="mt-1" />
                <div>
                  <p className="text-[34px] font-semibold leading-tight text-tusz">{t}</p>
                  <p className="mt-1 text-[27px] leading-snug text-tusz-2">{o}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-auto rounded-2xl bg-white px-6 py-5 text-[27px] leading-snug text-tusz-2">
            Ten sam test przed i po grze pozwala nauczycielowi <strong className="font-semibold text-tusz">zmierzyć efekt samodzielnie</strong>.
          </p>
        </Wej>

        <Wej i={2} className="karta col-span-7 flex flex-col !p-11">
          <div className="flex items-center justify-between">
            <h3 className="h-sekcji text-[48px] text-tusz">Panel: kto ile przeszedł</h3>
            <span className="etykieta etykieta-xl etykieta-szara">Przykładowe dane</span>
          </div>
          <div className="mt-8 grid grid-cols-[1.1fr_2fr_0.8fr] gap-x-6 border-b border-obrys pb-3 text-[22px] font-medium tracking-[0.08em] text-tusz-3 uppercase">
            <span>Uczeń</span>
            <span>Ukończone sceny</span>
            <span className="text-right">Quiz</span>
          </div>
          <ul className="flex flex-1 flex-col justify-evenly">
            {UCZNIOWIE.map((r) => (
              <li key={r.u} className="grid grid-cols-[1.1fr_2fr_0.8fr] items-center gap-x-6 text-[30px]">
                <span className="font-semibold text-tusz">{r.u}</span>
                <span className="flex items-center gap-2">
                  {Array.from({ length: 9 }, (_, k) => (
                    <span key={k} className={`h-[26px] w-[26px] rounded-md ${k < r.sceny ? "bg-akcent" : "bg-obrys"}`} />
                  ))}
                  <span className="ml-3 text-[24px] text-tusz-3">{r.sceny}/9</span>
                </span>
                <span className="text-right font-mono text-tusz-2">{r.quiz}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[26px] text-tusz-3">Nauczyciel zakłada kurs, przypisuje temat i na bieżąco widzi postępy klasy.</p>
        </Wej>
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 6. decyzja jury */

export function DecyzjaJury() {
  return (
    <Slajd>
      <Tytul etykieta="Decyzja jury">Teraz Wy podejmujecie decyzję.</Tytul>
      <div className="min-h-0 flex-1">
        <GlosowanieJury />
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 7. dane */

export function TwardeDane() {
  const roznica = (WYNIKI.po - WYNIKI.przed).toFixed(1).replace(".", ",");
  const wzgledna = Math.round(((WYNIKI.po - WYNIKI.przed) / WYNIKI.przed) * 100);
  return (
    <Slajd>
      <Tytul etykieta="Twarde dane" pod={`Pilotaż, N = ${WYNIKI.n} uczniów: ten sam test (30 pytań) po wykładzie i po grze.`}>
        Po grze uczniowie wiedzą więcej.
      </Tytul>

      <div className="grid flex-1 grid-cols-12 gap-6">
        <Wej i={1} className="karta col-span-7 flex flex-col !p-10">
          <div className="flex items-center gap-8 text-[26px] text-tusz-2">
            <span className="flex items-center gap-3"><span className="h-5 w-5 rounded-md bg-[#c9c6b8]" />Po wykładzie</span>
            <span className="flex items-center gap-3"><span className="h-5 w-5 rounded-md bg-akcent" />Po grze</span>
            <span className="ml-auto text-[22px] text-tusz-3">poprawne odpowiedzi, %</span>
          </div>
          <div className="mt-6 grid flex-1 grid-cols-4 gap-6">
            {WYNIKI.kategorie.map((k, g) => (
              <div key={k.nazwa} className="flex flex-col">
                <div className="flex flex-1 items-end justify-center gap-3 border-b-2 border-obrys pb-0">
                  {[
                    { v: k.przed, kolor: "bg-[#c9c6b8]", tekst: "text-tusz-3", j: 0 },
                    { v: k.po, kolor: "bg-akcent", tekst: "text-akcent-ciemny", j: 1 },
                  ].map((b) => (
                    <div key={b.j} className="flex h-full w-[84px] flex-col justify-end">
                      <span className={`mb-2 text-center text-[28px] font-bold tabular-nums ${b.tekst}`}>{b.v.toFixed(1).replace(".", ",")}</span>
                      <div
                        className={`slupek w-full rounded-t-xl ${b.kolor}`}
                        style={{ height: `${(b.v / 100) * 78}%`, ["--i" as string]: g * 2 + b.j }}
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-[26px] leading-tight font-medium text-tusz">{k.nazwa}</p>
              </div>
            ))}
          </div>
        </Wej>

        <div className="col-span-5 flex flex-col gap-6">
          <Wej i={2} className="karta karta-akcent flex flex-1 flex-col justify-center !px-11">
            <p className="h-sekcji text-[150px] leading-none whitespace-nowrap">
              <Licznik do={Number(roznica.replace(",", "."))} prefiks="+" /> <span className="text-[64px]">pp</span>
            </p>
            <p className="mt-5 text-[32px] leading-snug text-white/90">
              {WYNIKI.przed.toFixed(1).replace(".", ",")}% → {WYNIKI.po.toFixed(1).replace(".", ",")}% poprawnych
              odpowiedzi, czyli o {wzgledna}% więcej niż po wykładzie.
            </p>
          </Wej>
          <Wej i={3} className="karta karta-mgla flex items-center gap-8 !px-11 !py-8">
            <p className="h-sekcji shrink-0 text-[84px] leading-none whitespace-nowrap text-tusz tabular-nums">
              {WYNIKI.nauczyciele.ocena.toFixed(2).replace(".", ",")}<span className="text-[44px] text-tusz-3"> / 5</span>
            </p>
            <p className="text-[28px] leading-snug text-tusz-2">
              ocena nauczycieli. {WYNIKI.nauczyciele.rekomenduje}% rekomenduje włączenie gry do lekcji.
            </p>
          </Wej>
        </div>
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 8. cel */

export function Cel() {
  const cele = [
    { Ikona: IkonaOsoby, tytul: "Uczniowie", tresc: "Zapamiętują fakty i rozumieją ludzkie wybory — zamiast uczyć się dat na pamięć." },
    { Ikona: IkonaKsiazka, tytul: "Nauczyciele", tresc: "Gotowa lekcja na 45 minut. Bez instalacji i bez specjalnego sprzętu." },
    { Ikona: IkonaTeczka, tytul: "Instytucje pamięci", tresc: "Ten sam silnik opowie kolejne historie — dla muzeów, domów kultury i pomników." },
  ];
  return (
    <Slajd>
      <Tytul etykieta="Cel projektu" pod="Sprawić, by lokalna historia zostawała w głowie — w każdej szkole i w każdym miejscu pamięci.">
        Od jednej gry do platformy.
      </Tytul>
      <div className="grid flex-1 grid-cols-12 gap-6">
        <div className="col-span-5 flex flex-col gap-5">
          {cele.map((c, k) => (
            <Wej key={c.tytul} i={k + 1} className="karta flex flex-1 items-start gap-6 !px-9 !py-7">
              <span className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-2xl bg-akcent-mgla text-akcent">
                <c.Ikona className="h-10 w-10" />
              </span>
              <div>
                <h3 className="h-karty text-[38px] text-tusz">{c.tytul}</h3>
                <p className="mt-2 text-[27px] leading-snug text-tusz-2">{c.tresc}</p>
              </div>
            </Wej>
          ))}
        </div>

        <Wej i={2} className="karta karta-mgla col-span-7 flex flex-col !p-9">
          <div className="flex items-baseline justify-between">
            <h3 className="h-sekcji text-[44px] text-tusz">Cienie Rzeczypospolitej</h3>
            <span className="text-[26px] text-akcent-ciemny">platforma na kolejne historie</span>
          </div>
          <div className="relative mt-6 flex-1 overflow-hidden rounded-2xl border border-obrys bg-white shadow-xl">
            <Image src="/prezentacja/platforma-landing.webp" alt="Strona główna platformy Cienie Rzeczypospolitej." fill sizes="1100px" className="object-cover object-top" />
          </div>
        </Wej>
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 9. technologie */

export function Technologie() {
  const stos = ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Turbopack", "Unity WebGL", "i18n PL / EN", "MySQL 8", "Docker"];
  return (
    <Slajd>
      <Tytul etykieta="Użyte technologie" pod="AI przyspiesza pracę. Źródła, scenariusz i decyzje są nasze.">
        Co robi technologia, a co my.
      </Tytul>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-6">
        <Wej i={1} className="karta karta-mgla flex flex-col !p-9">
          <span className="etykieta etykieta-xl self-start !bg-white/80">Człowiek</span>
          <h3 className="h-sekcji mt-6 text-[46px] text-tusz">Nasza praca</h3>
          <ul className="mt-7 space-y-5 text-[29px] leading-snug text-tusz">
            {["Research źródeł i weryfikacja faktów", "Scenariusz, dylematy i słownik gwary", "Projekt i architektura platformy", "Testy z uczniami i poprawki"].map((t) => (
              <li key={t} className="flex gap-4"><Ptaszek className="mt-0.5 !h-[30px] !w-[30px]" />{t}</li>
            ))}
          </ul>
        </Wej>

        <Wej i={2} className="karta flex flex-col !p-9">
          <span className="etykieta etykieta-xl etykieta-szara self-start">Stos</span>
          <h3 className="h-sekcji mt-6 text-[46px] text-tusz">Technologia</h3>
          <ul className="mt-7 flex flex-wrap gap-3">
            {stos.map((s) => (
              <li key={s} className="rounded-full bg-tlo px-4 py-2 font-mono text-[22px] text-tusz">{s}</li>
            ))}
          </ul>
          <p className="mt-auto pt-4 text-[24px] leading-snug text-tusz-2">
            Aplikacja webowa — działa w przeglądarce na komputerze i telefonie. Mapa to build Unity WebGL.
          </p>
        </Wej>

        <Wej i={3} className="karta karta-akcent flex flex-col !p-9">
          <span className="etykieta etykieta-xl etykieta-biala self-start">AI</span>
          <h3 className="h-sekcji mt-5 text-[42px]">Narzędzia pod naszym nadzorem</h3>
          <dl className="mt-7 space-y-6">
            <div>
              <dt className="text-[30px] font-bold">Claude Code</dt>
              <dd className="mt-1 text-[26px] leading-snug text-white/85">Pisanie i refaktoryzacja kodu — Next.js, komponenty, panel.</dd>
            </div>
            <div>
              <dt className="text-[30px] font-bold">Gemini Nano Banana 2 Pro</dt>
              <dd className="mt-1 text-[26px] leading-snug text-white/85">Grafiki na stronę (landing).</dd>
            </div>
          </dl>
          <p className="mt-auto pt-6 text-[25px] leading-snug text-white/80">Treści historyczne pochodzą ze źródeł, nie z AI.</p>
        </Wej>
      </div>
      <Wej i={5} className="karta karta-ciemna mt-5 flex shrink-0 items-center gap-6 !px-10 !py-5">
        <IkonaWykres className="h-9 w-9 shrink-0 text-[#b9adff]" />
        <p className="text-[28px] text-white">
          Dowód: <strong className="font-semibold">ta prezentacja to strona Next.js</strong> z tej samej platformy.
        </p>
      </Wej>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 10. zakończenie */

export function Zakonczenie() {
  const filary = [
    ["Innowacja", "Nie czytasz o historii — podejmujesz w niej decyzje."],
    ["Dowód", "Działający prototyp i pilotaż: +31,5 pp."],
    ["Wpływ", "Uczniowie, nauczyciele, muzea i miejsca pamięci."],
  ];
  return (
    <Slajd>
      <div className="grid min-h-0 flex-1 grid-cols-[1.35fr_0.65fr] gap-6">
        <Wej className="karta flex flex-col justify-between !p-[48px]">
          <span className="etykieta etykieta-xl self-start">Cisza nad Raszową</span>
          <h2 className="h-sekcji text-[88px] leading-[1.02] text-balance text-tusz">
            Lekcja historii nie musi być nudna.
            <span className="block text-akcent">Ta zostaje w pamięci.</span>
          </h2>
        </Wej>
        <Wej i={2} className="karta karta-akcent flex flex-col justify-center !px-12">
          <p className="h-sekcji text-[150px] leading-none">
            <Licznik do={31.5} prefiks="+" />
          </p>
          <p className="mt-3 text-[36px] leading-snug font-semibold">punktu proc. więcej po grze</p>
          <p className="mt-3 text-[28px] text-white/80">pilotaż, N = 31 uczniów</p>
        </Wej>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-6">
        {filary.map(([t, o], k) => (
          <Wej key={t} i={3 + k} className="karta karta-mgla !px-9 !py-6">
            <h3 className="h-karty text-[36px] text-tusz">{t}</h3>
            <p className="mt-2 text-[27px] leading-snug text-tusz-2">{o}</p>
          </Wej>
        ))}
      </div>

      <Wej i={7} className="mt-6 flex items-center justify-between gap-6 px-2">
        <ul className="flex items-center gap-7">
          {ZESPOL_PREZENTACJA.map((o) => (
            <li key={o.slug} className="flex items-center gap-4">
              <ZdjecieOsoby slug={o.slug} imie={o.imie} rozmiar={84} />
              <span className="text-[24px] leading-tight font-medium text-tusz">{o.imie}</span>
            </li>
          ))}
        </ul>
        <p className="h-sekcji flex items-center gap-4 text-[44px] text-tusz"><Logo rozmiar={64} />Dziękujemy!</p>
      </Wej>
    </Slajd>
  );
}
