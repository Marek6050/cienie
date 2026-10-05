import type { ReactNode } from "react";
import Image from "next/image";
import { Grafika } from "@/components/witryna/grafika";
import { Wej } from "./wej";
import { Licznik } from "./licznik";
import { ZdjecieOsoby } from "@/components/witryna/zdjecie-osoby";
import { GlosowanieJury } from "./glosowanie";
import { ZnakPlatformy } from "./znak";
import { ADRES_LANDINGU, GLOSY_UCZNIOW, WYBORY_JURY, WYNIKI, ZESPOL_PREZENTACJA } from "./dane";
import {
  IkonaOsoby,
  IkonaKsiazka,
  IkonaWarstwy,
  IkonaWykres,
  IkonaLupa,
  IkonaRozgalezienie,
  IkonaZegar,
} from "@/components/ikony";

/* ------------------------------------------------------------------ pomocnicze */

function Slajd({ children }: { children: ReactNode }) {
  return <section className="flex h-full w-full flex-col p-[64px]">{children}</section>;
}

function Tytul({ etykieta, children, pod }: { etykieta: string; children: ReactNode; pod?: ReactNode }) {
  return (
    <Wej as="header" className="mb-9">
      <span className="etykieta etykieta-xl">{etykieta}</span>
      <h2 className="h-sekcji mt-5 text-[80px] text-tusz">{children}</h2>
      {pod ? <p className="mt-4 max-w-[1600px] text-[34px] leading-snug text-tusz-2">{pod}</p> : null}
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
  /** Powiększenie kadru: zrzuty z gry mają treść w środku i drobny druk. */
  zoom?: string;
  i?: number;
}) {
  return (
    <Wej i={i} className={`relative overflow-hidden rounded-3xl border border-obrys bg-piasek ${className}`}>
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
            <ZnakPlatformy rozmiar={92} />
          </div>
          <div>
            <h1 className="h-sekcji text-[100px] leading-[1] text-balance text-tusz">
              Lekcja historii nie musi być nudna.
            </h1>
            <p className="mt-9 max-w-[900px] text-[36px] leading-snug text-tusz-2">
              <strong className="font-semibold text-tusz">Cienie Rzeczypospolitej</strong> to platforma
              interaktywnych lekcji historii dla szkół i instytucji. Uczeń nie czyta o wydarzeniach,
              tylko podejmuje w nich decyzje.
            </p>
          </div>
          <div className="flex items-end justify-between gap-6">
            <p className="max-w-[560px] text-[26px] leading-snug text-tusz-3">
              Zespół Szkół Technicznych i Ogólnokształcących w Kędzierzynie-Koźlu
            </p>
            <p className="font-mono text-[34px] font-medium text-akcent-ciemny">{ADRES_LANDINGU}</p>
          </div>
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
              <Image src="/prezentacja/gra-koniew-wybory.webp" alt="Kadr z pierwszej lekcji na platformie: wybór odpowiedzi w scenie „Rozkaz Koniewa”." fill sizes="720px" className="scale-[1.9] object-cover object-center" />
            </div>
            <p className="px-6 py-4 text-[24px] text-tusz-2">Pierwsza lekcja na platformie: Cisza nad Raszową</p>
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
      <Tytul etykieta="Nasz team" pod="Uczniowie ZSTiO w Kędzierzynie-Koźlu. Każdy z nas współtworzył platformę i zna ją od środka.">
        Pięć osób. Jedna platforma.
      </Tytul>
      <div className="grid flex-1 grid-cols-5 gap-5">
        {ZESPOL_PREZENTACJA.map((o, k) => (
          <Wej key={o.slug} i={k + 1} className="karta flex flex-col items-center !px-6 !py-12 text-center">
            <ZdjecieOsoby slug={o.slug} imie={o.imie} rozmiar={260} />
            <h3 className="h-karty mt-10 text-[40px] leading-tight text-tusz">{o.imie}</h3>
            <p className="mt-4 text-[28px] leading-snug text-tusz-2">{o.rola}</p>
          </Wej>
        ))}
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 3. problem */

export function Problem() {
  const problemy = [
    {
      nr: "01",
      ton: "karta-mgla",
      tytul: "Brak informacji, a przez to świadomości",
      tresc: "Uczniowie nie znają lokalnych historii i tragedii. Na przykład deportacje dziesiątek tysięcy mieszkańców Górnego Śląska w 1945 roku są w szkołach rzadko poruszane.",
    },
    {
      nr: "02",
      ton: "karta-piasek",
      tytul: "Nudna forma nauczania",
      tresc: "Wykład i podręcznik: uczeń odbiera, ale nie uczestniczy. W naszym pilotażu po takiej lekcji uczniowie odpowiadali poprawnie na zaledwie 53,4% pytań.",
    },
    {
      nr: "03",
      ton: "karta-szalwia",
      tytul: "Długie przygotowanie do lekcji",
      tresc: "Przygotowanie angażującej lekcji historii zajmuje nauczycielowi bardzo dużo czasu, a gotowych interaktywnych materiałów jest niewiele.",
    },
  ];
  return (
    <Slajd>
      <Tytul etykieta="Źródło problemu">Lokalna historia znika z pamięci i z lekcji.</Tytul>
      <div className="grid flex-1 grid-cols-3 gap-6">
        {problemy.map((p, k) => (
          <Wej key={p.nr} i={k + 1} className={`karta ${p.ton} flex flex-col !p-12`}>
            <span className="font-mono text-[28px] text-tusz-3">{p.nr}</span>
            <h3 className="h-sekcji mt-6 text-[52px] leading-[1.08] text-tusz">{p.tytul}</h3>
            <p className="mt-8 text-[36px] leading-snug text-tusz-2">{p.tresc}</p>
          </Wej>
        ))}
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 4. grupa docelowa */

const PERSPEKTYWY = [
  {
    rola: "Kluczowy odbiorca",
    nazwa: "Nauczyciel",
    opis: "Prowadzi i organizuje lekcję",
    ton: "karta-mgla",
    Ikona: IkonaKsiazka,
    wartosci: ["gotowe narzędzie dydaktyczne", "większe zaangażowanie uczniów", "praca z historią w nowoczesnej formie"],
  },
  {
    rola: "Bezpośredni użytkownik",
    nazwa: "Uczeń",
    opis: "Doświadcza historii i podejmuje decyzje",
    ton: "",
    Ikona: IkonaOsoby,
    wartosci: ["aktywna nauka zamiast biernego słuchania", "decyzje i analiza ich konsekwencji", "rozwój krytycznego myślenia"],
  },
  {
    rola: "Partner treści",
    nazwa: "Muzeum i instytucja",
    opis: "Opowiada własną historię przy pomocy platformy",
    ton: "karta-piasek",
    Ikona: IkonaWarstwy,
    wartosci: ["nowy sposób pokazywania lokalnej historii", "angażowanie młodych odbiorców", "cyfrowe użycie zbiorów i źródeł"],
  },
];

export function GrupaDocelowa() {
  return (
    <Slajd>
      <Tytul etykieta="Grupa docelowa" pod="Łączymy tych, którzy uczą historii, tych, którzy jej doświadczają, i tych, którzy ją przechowują.">
        Jedna platforma, trzy perspektywy.
      </Tytul>
      <div className="grid min-h-0 flex-1 grid-cols-3 gap-6">
        {PERSPEKTYWY.map((p, k) => (
          <Wej key={p.nazwa} i={k + 1} className={`karta ${p.ton} flex flex-col !p-9`}>
            <div className="flex items-center justify-between">
              <span className="etykieta etykieta-xl !bg-white/80">{p.rola}</span>
              <span className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-akcent text-white">
                <p.Ikona className="h-10 w-10" />
              </span>
            </div>
            <h3 className="h-sekcji mt-6 text-[50px] leading-[1.05] text-tusz">{p.nazwa}</h3>
            <p className="mt-3 text-[28px] leading-snug text-tusz-2">{p.opis}</p>
            <p className="mt-6 font-mono text-[22px] tracking-[0.1em] text-tusz-3 uppercase">Wartość</p>
            <ul className="mt-3 space-y-3 text-[27px] leading-snug text-tusz">
              {p.wartosci.map((w) => (
                <li key={w} className="flex gap-4"><Ptaszek className="mt-0.5 !h-[30px] !w-[30px]" />{w}</li>
              ))}
            </ul>
          </Wej>
        ))}
      </div>
      <Wej i={5} className="karta karta-ciemna mt-5 shrink-0 !px-10 !py-5">
        <p className="text-[30px] leading-snug text-white">
          Nauczyciel dostaje <strong className="font-semibold">narzędzie</strong>. Uczeń: <strong className="font-semibold">doświadczenie</strong>.
          Instytucja: <strong className="font-semibold">nowy sposób opowiadania historii</strong>.
        </p>
      </Wej>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 5. cel */

export function Cel() {
  const szczegolowe = [
    { Ikona: IkonaRozgalezienie, t: "Większe zaangażowanie uczniów" },
    { Ikona: IkonaLupa, t: "Krytyczne myślenie i praca ze źródłami" },
    { Ikona: IkonaOsoby, t: "Historia z perspektywy człowieka i jego decyzji" },
    { Ikona: IkonaZegar, t: "Krótsze przygotowanie nauczyciela do lekcji" },
  ];
  return (
    <Slajd>
      <Tytul etykieta="Cel projektu">Z biernego odbioru na aktywny udział.</Tytul>
      <div className="grid flex-1 grid-cols-12 gap-6">
        <div className="col-span-5 flex flex-col gap-6">
          <Wej i={1} className="karta karta-mgla flex items-center gap-6 !px-9 !py-8">
            <ZnakPlatformy rozmiar={84} />
            <div>
              <p className="h-sekcji text-[40px] leading-tight text-tusz">Cienie Rzeczypospolitej</p>
              <p className="mt-1 text-[26px] text-tusz-2">platforma interaktywnych lekcji historii</p>
            </div>
          </Wej>
          <Wej i={2} className="karta karta-akcent flex flex-1 flex-col justify-center !p-11">
            <p className="font-mono text-[22px] tracking-[0.1em] text-white/70 uppercase">Cel główny</p>
            <p className="h-sekcji mt-5 text-[46px] leading-[1.12]">
              Zmiana poznawania historii z biernego odbierania informacji na aktywne uczestniczenie w wydarzeniach.
            </p>
          </Wej>
        </div>

        <div className="col-span-7 flex flex-col">
          <Wej i={3}>
            <p className="font-mono text-[24px] tracking-[0.1em] text-tusz-3 uppercase">Cele szczegółowe</p>
          </Wej>
          <ol className="mt-5 grid flex-1 grid-rows-4 gap-5">
            {szczegolowe.map((c, k) => (
              <Wej as="li" key={c.t} i={4 + k} className="karta flex items-center gap-8 !px-9 !py-0">
                <span className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-2xl bg-akcent-mgla text-akcent">
                  <c.Ikona className="h-11 w-11" />
                </span>
                <span className="font-mono text-[34px] text-tusz-3">{k + 1}</span>
                <span className="h-sekcji text-[42px] leading-[1.1] text-tusz">{c.t}</span>
              </Wej>
            ))}
          </ol>
        </div>
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 6. co zrobiliśmy */

export function Aplikacja() {
  const funkcje = ["Dialogi z wyborami", "Mapa regionu", "Oś czasu", "Słownik pojęć i postaci", "Quiz", "Panel nauczyciela"];
  return (
    <Slajd>
      <Tytul etykieta="Co zrobiliśmy">Działająca platforma, gra i landing page.</Tytul>
      <div className="grid flex-1 grid-cols-12 gap-6">
        <Wej i={1} className="karta col-span-4 flex flex-col !p-10">
          <p className="text-[32px] leading-snug text-tusz">
            Zbudowaliśmy platformę lekcji historii. Pierwsza lekcja to gra{" "}
            <strong className="font-semibold">Cisza nad Raszową</strong>.
          </p>
          <p className="mt-6 text-[28px] leading-snug text-tusz-2">
            Wcielasz się w młodego zwiadowcę Armii Czerwonej w 1945 roku. Każda rozmowa to dylemat:{" "}
            <strong className="font-semibold text-tusz">rozkaz czy sumienie</strong>.
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {funkcje.map((f) => (
              <li key={f} className="rounded-full bg-akcent-mgla px-4 py-2 text-[22px] font-medium text-akcent-ciemny">{f}</li>
            ))}
          </ul>
          <p className="mt-auto pt-6 text-[24px] text-tusz-3">Przeglądarka · komputer i telefon · PL / EN</p>
        </Wej>

        <div className="col-span-8 grid grid-cols-2 grid-rows-2 gap-6">
          <Zrzut i={2} src="/prezentacja/platforma-landing.webp" alt="Landing page platformy Cienie Rzeczypospolitej." podpis={`Landing page · ${ADRES_LANDINGU}`} />
          <Zrzut i={3} src="/prezentacja/gra-koniew-wybory.webp" alt="Scena „Rozkaz Koniewa” z wyborem odpowiedzi." podpis="Gra: wybory" pozycja="object-center" zoom="scale-[1.45]" />
          <Zrzut i={4} src="/prezentacja/gra-mapa.webp" alt="Interaktywna mapa regionu z postacią gracza." podpis="Gra: mapa" pozycja="object-center" />
          <Zrzut i={5} src="/prezentacja/gra-os-czasu.webp" alt="Oś czasu „Świadectwa z Wymazanej Ziemi”." podpis="Gra: oś czasu" />
        </div>
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 7. nauczyciele */

const UCZNIOWIE = [
  { u: "Uczeń A", sceny: 9, quiz: "9 / 10" },
  { u: "Uczeń B", sceny: 9, quiz: "8 / 10" },
  { u: "Uczeń C", sceny: 7, quiz: "n/d" },
  { u: "Uczeń D", sceny: 5, quiz: "n/d" },
  { u: "Uczeń E", sceny: 3, quiz: "n/d" },
];

export function Nauczyciele() {
  return (
    <Slajd>
      <Tytul etykieta="Nie tylko gra" pod="Gra to połowa rozwiązania. Drugą połową jest nauczyciel, dlatego dajemy mu gotową lekcję i panel.">
        Narzędzie dla nauczyciela.
      </Tytul>
      <div className="grid flex-1 grid-cols-12 gap-6">
        <Wej i={1} className="karta karta-mgla col-span-5 flex flex-col !p-11">
          <h3 className="h-sekcji text-[48px] text-tusz">Gotowe materiały</h3>
          <ul className="mt-8 space-y-7">
            {[
              ["Scenariusz lekcji na 45 minut", "wprowadzenie, gra, test i dyskusja"],
              ["Test wiedzy: 30 pytań", "ten sam przed i po grze, do własnych pomiarów"],
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

/* ------------------------------------------------------------------ 8. decyzja jury */

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

/** Tylko w pliku PPTX: tam nie ma interaktywnego głosowania, więc pokazujemy wszystkie odpowiedzi gry. */
export function OdpowiedziGry() {
  return (
    <Slajd>
      <Tytul etykieta="Decyzja jury" pod="Tak odpowiada gra. Każdy uczeń staje przed takim wyborem i od razu widzi konsekwencje.">
        Rozkaz Koniewa: odpowiedzi gry.
      </Tytul>
      <div className="grid flex-1 grid-cols-3 gap-6">
        {WYBORY_JURY.map((w, k) => (
          <Wej key={w.nr} i={k + 1} className="karta flex flex-col !p-10">
            <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-akcent font-mono text-[40px] font-bold text-white">{w.nr}</span>
            <h3 className="h-sekcji mt-7 text-[50px] leading-tight text-tusz">{w.tekst}</h3>
            <div className="mt-auto rounded-2xl bg-akcent-mgla p-7">
              <p className="font-mono text-[20px] tracking-[0.1em] text-akcent-ciemny uppercase">Koniew odpowiada</p>
              <div className="mt-3 space-y-1 text-[28px] leading-snug text-tusz">
                {w.odpowiedz.map((l) => (
                  <p key={l} className={l.startsWith("(") ? "text-tusz-3 italic" : ""}>{l}</p>
                ))}
              </div>
            </div>
          </Wej>
        ))}
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 9. dane */

const pl = (n: number, m = 1) => n.toFixed(m).replace(".", ",");

export function TwardeDane() {
  const roznica = WYNIKI.po - WYNIKI.przed;
  const { procentChcacych, cytaty } = GLOSY_UCZNIOW;
  return (
    <Slajd>
      <Tytul etykieta="Twarde dane" pod={`Pilotaż, N = ${WYNIKI.n} uczniów: ten sam test (30 pytań) po wykładzie i po lekcji na platformie.`}>
        Uczniowie wiedzą więcej i chcą korzystać.
      </Tytul>

      <div className="grid min-h-0 flex-1 grid-cols-12 gap-6">
        <Wej i={1} className="karta col-span-6 flex flex-col !p-9">
          <div className="flex items-center gap-7 text-[24px] text-tusz-2">
            <span className="flex items-center gap-3"><span className="h-5 w-5 rounded-md bg-[#c9c6b8]" />Po wykładzie</span>
            <span className="flex items-center gap-3"><span className="h-5 w-5 rounded-md bg-akcent" />Po grze</span>
            <span className="ml-auto text-[20px] text-tusz-3">poprawne odpowiedzi, %</span>
          </div>
          <div className="mt-5 grid min-h-0 flex-1 grid-cols-4 gap-4">
            {WYNIKI.kategorie.map((k, g) => (
              <div key={k.nazwa} className="flex flex-col">
                <div className="flex flex-1 items-end justify-center gap-2 border-b-2 border-obrys">
                  {[
                    { v: k.przed, kolor: "bg-[#c9c6b8]", tekst: "text-tusz-3", j: 0 },
                    { v: k.po, kolor: "bg-akcent", tekst: "text-akcent-ciemny", j: 1 },
                  ].map((b) => (
                    <div key={b.j} className="flex h-full w-[58px] flex-col justify-end">
                      <span className={`mb-2 text-center text-[24px] font-bold tabular-nums ${b.tekst}`}>{pl(b.v)}</span>
                      <div className={`slupek w-full rounded-t-lg ${b.kolor}`} style={{ height: `${(b.v / 100) * 76}%`, ["--i" as string]: g * 2 + b.j }} />
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-center text-[22px] leading-tight font-medium text-tusz">{k.nazwa}</p>
              </div>
            ))}
          </div>
        </Wej>

        <div className="col-span-6 flex min-h-0 flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <Wej i={2} className="karta karta-akcent flex flex-col justify-center !px-9 !py-7">
              <p className="h-sekcji text-[80px] leading-none whitespace-nowrap">
                <Licznik do={Number(roznica.toFixed(1))} prefiks="+" /> <span className="text-[38px]">pp</span>
              </p>
              <p className="mt-3 text-[24px] leading-snug text-white/90">
                {pl(WYNIKI.przed)}% → {pl(WYNIKI.po)}% poprawnych odpowiedzi
              </p>
            </Wej>
            <Wej i={3} className="karta karta-mgla flex flex-col justify-center !px-9 !py-7">
              <p className="h-sekcji text-[76px] leading-none whitespace-nowrap text-tusz tabular-nums">
                {pl(WYNIKI.nauczyciele.ocena, 2)}<span className="text-[36px] text-tusz-3"> / 5</span>
              </p>
              <p className="mt-3 text-[24px] leading-snug text-tusz-2">
                ocena nauczycieli, {WYNIKI.nauczyciele.rekomenduje}% rekomenduje
              </p>
            </Wej>
          </div>

          <Wej i={4} className="karta flex min-h-0 flex-1 flex-col !p-9">
            <p className="h-sekcji text-[38px] leading-tight text-tusz">
              {procentChcacych !== null ? (
                <><span className="text-akcent">{procentChcacych}%</span> uczniów stwierdziło, że korzystałoby z aplikacji</>
              ) : (
                "Uczniowie stwierdzili, że korzystaliby z naszej aplikacji"
              )}
            </p>
            <ul className="mt-5 flex flex-1 flex-col justify-evenly gap-4">
              {cytaty.map((c) => (
                <li key={c} className="rounded-2xl bg-tlo px-7 py-4 text-[26px] leading-snug text-tusz">
                  „{c}”
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[22px] text-tusz-3">Pytania otwarte w ankiecie ewaluacyjnej uczniów</p>
          </Wej>
        </div>
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 10. technologie */

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
            Aplikacja webowa działa w przeglądarce na komputerze i telefonie. Mapa to build Unity WebGL.
          </p>
        </Wej>

        <Wej i={3} className="karta karta-akcent flex flex-col !p-9">
          <span className="etykieta etykieta-xl etykieta-biala self-start">AI</span>
          <h3 className="h-sekcji mt-5 text-[42px]">Narzędzia pod naszym nadzorem</h3>
          <dl className="mt-7 space-y-6">
            <div>
              <dt className="text-[30px] font-bold">Claude Code</dt>
              <dd className="mt-1 text-[26px] leading-snug text-white/85">Pisanie i refaktoryzacja kodu: Next.js, komponenty, panel.</dd>
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

/* ------------------------------------------------------------------ 11. dalsze kroki */

export function DalszeKroki() {
  const kroki = [
    { t: "Współpraca z nauczycielami", o: "Testy w kolejnych klasach i dopracowanie lekcji z ich opiniami." },
    { t: "Współpraca z muzeami i domami kultury", o: "Wspólne historie oparte na ich zbiorach i archiwach." },
    { t: "Rozbudowa platformy o kolejne lekcje", o: "Ten sam silnik, nowe wydarzenia historyczne." },
    { t: "Promocja narzędzia", o: "Docieramy z platformą do szkół i instytucji." },
  ];
  return (
    <Slajd>
      <Tytul etykieta="Dalsze kroki" pod="Od działającego prototypu do narzędzia, z którego korzystają szkoły i instytucje.">
        Co dalej z platformą.
      </Tytul>
      <div className="grid flex-1 grid-cols-4 gap-6">
        {kroki.map((k, i) => (
          <Wej key={k.t} i={i + 1} className={`karta flex flex-col justify-between !p-10 ${i === 3 ? "karta-akcent" : i % 2 ? "karta-piasek" : "karta-mgla"}`}>
            <span className={`font-mono text-[34px] ${i === 3 ? "text-white/70" : "text-tusz-3"}`}>0{i + 1}</span>
            <div>
              <h3 className="h-sekcji text-[46px] leading-[1.08]">{k.t}</h3>
              <p className={`mt-5 text-[28px] leading-snug ${i === 3 ? "text-white/85" : "text-tusz-2"}`}>{k.o}</p>
            </div>
          </Wej>
        ))}
      </div>
    </Slajd>
  );
}

/* ------------------------------------------------------------------ 12. zakończenie */

export function Zakonczenie() {
  const filary = [
    ["Innowacja", "Nie czytasz o historii, tylko podejmujesz w niej decyzje."],
    ["Dowód", `Działający prototyp i pilotaż: +${pl(WYNIKI.po - WYNIKI.przed)} pp.`],
    ["Wpływ", "Uczniowie, nauczyciele, muzea i miejsca pamięci."],
  ];
  return (
    <Slajd>
      <div className="grid min-h-0 flex-1 grid-cols-[1.25fr_0.75fr] gap-6">
        <Wej className="karta flex flex-col justify-between !p-[48px]">
          <div className="flex items-center gap-5">
            <ZnakPlatformy rozmiar={72} />
            <span className="etykieta etykieta-xl">Cienie Rzeczypospolitej</span>
          </div>
          <h2 className="h-sekcji text-[88px] leading-[1.02] text-balance text-tusz">
            Lekcja historii nie musi być nudna.
            <span className="block text-akcent">Ta zostaje w pamięci.</span>
          </h2>
        </Wej>

        <Wej i={2} className="karta karta-mgla flex flex-col items-center justify-center gap-5 !p-8 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/prezentacja/qr-landing.svg" alt={`Kod QR do strony ${ADRES_LANDINGU}`} className="h-[330px] w-[330px] rounded-3xl bg-white p-3 shadow-lg" />
          <p className="text-[28px] text-tusz-2">Zeskanuj i wejdź na platformę</p>
          <p className="h-sekcji text-[58px] leading-none text-akcent-ciemny">{ADRES_LANDINGU}</p>
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
        <p className="h-sekcji text-[44px] text-tusz">Dziękujemy!</p>
      </Wej>
    </Slajd>
  );
}
