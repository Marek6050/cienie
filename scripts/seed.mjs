/**
 * Wypełnia bazę danymi startowymi. Uruchamiaj po `npm run db:up`:
 *   npm run db:seed
 * Skrypt jest idempotentny — można go puścić kilka razy.
 */
import { createConnection } from "mysql2/promise";
import bcrypt from "bcryptjs";
import { readFileSync, existsSync } from "node:fs";

// Prosty odczyt .env.local, żeby skrypt nie zależał od Next.js
if (existsSync(".env.local")) {
  for (const linia of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
    const m = linia.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const UZYTKOWNICY = [
  {
    email: "admin@cienie.pl",
    haslo: "Cienie2026!",
    imie: "Marek Garbacz",
    rola: "superadmin",
    instytucja: "Cienie Rzeczypospolitej",
  },
  {
    email: "nauczyciel@cienie.pl",
    haslo: "Lekcja2026!",
    imie: "Anna Sobota",
    rola: "nauczyciel",
    instytucja: "ZSTiO Kędzierzyn-Koźle",
  },
  {
    email: "uczen1@cienie.pl",
    haslo: "Uczen2026!",
    imie: "Michał Kałamaga",
    rola: "uczen",
    instytucja: "ZSTiO Kędzierzyn-Koźle",
  },
  {
    email: "uczen2@cienie.pl",
    haslo: "Uczen2026!",
    imie: "Marcin Kacperczyk",
    rola: "uczen",
    instytucja: "ZSTiO Kędzierzyn-Koźle",
  },
  {
    email: "uczen3@cienie.pl",
    haslo: "Uczen2026!",
    imie: "Jakub Witnik",
    rola: "uczen",
    instytucja: "ZSTiO Kędzierzyn-Koźle",
  },
  {
    email: "uczen4@cienie.pl",
    haslo: "Uczen2026!",
    imie: "Łukasz Gucwiński",
    rola: "uczen",
    instytucja: "ZSTiO Kędzierzyn-Koźle",
  },
];

const KURSY = [
  {
    slug: "tragedia-gornoslaska",
    tytul: "Tragedia Górnośląska 1945",
    opis: "Deportacje ludności Górnego Śląska do ZSRR — od rozkazu do powrotów i milczenia.",
    okres: "1945–1949",
    opublikowany: 1,
    kolejnosc: 1,
    tematy: [
      {
        slug: "cisza-nad-raszowa",
        tytul: "Cisza nad Raszową",
        streszczenie:
          "Zima 1945. Idziesz przez Raszową w stronę Kędzierzyna. Każda decyzja prowadzi do innej sceny i zostaje z tobą do końca.",
        okres: "luty 1945",
        czas_min: 45,
        liczba_scen: 10,
        liczba_zrodel: 14,
        obraz: "/archiwum/raszowa.webp",
        adres_gry: "https://cisza-nad-raszowa.example/roleplay/prolog",
        status: "gotowy",
        widoczny: 1,
        kolejnosc: 1,
      },
      {
        slug: "rozkaz-i-transporty",
        tytul: "Rozkaz i transporty",
        streszczenie:
          "Droga dokumentu: od ustaleń w Jałcie, przez rozkaz GKO, po listy transportowe z Bytomia, Gliwic i Zabrza.",
        okres: "luty–marzec 1945",
        czas_min: 30,
        liczba_scen: 6,
        liczba_zrodel: 21,
        obraz: "/archiwum/kolej.webp",
        adres_gry: null,
        status: "w_przygotowaniu",
        widoczny: 1,
        kolejnosc: 2,
      },
      {
        slug: "powroty-i-milczenie",
        tytul: "Powroty i milczenie",
        streszczenie:
          "Kto wrócił, wracał do świata, w którym o tym nie wolno było mówić. Scenariusz w opracowaniu.",
        okres: "1946–1989",
        czas_min: 45,
        liczba_scen: 0,
        liczba_zrodel: 9,
        obraz: "/archiwum/mogila.webp",
        adres_gry: null,
        status: "w_przygotowaniu",
        widoczny: 0,
        kolejnosc: 3,
      },
    ],
  },
  {
    slug: "gorny-slask-xx-wiek",
    tytul: "Górny Śląsk w XX wieku",
    opis: "Szerszy kontekst: granice, powstania, przemysł i ludzie, którzy zostawali po każdej stronie.",
    okres: "1918–1989",
    opublikowany: 1,
    kolejnosc: 2,
    tematy: [
      {
        slug: "dworzec-w-kedzierzynie",
        tytul: "Dworzec w Kędzierzynie",
        streszczenie:
          "Jedno miejsce, cztery epoki. Porównanie fotografii i relacji z tego samego peronu.",
        okres: "1910–2024",
        czas_min: 20,
        liczba_scen: 4,
        liczba_zrodel: 11,
        obraz: "/archiwum/dworzec-kedzierzyn.webp",
        adres_gry: null,
        status: "w_przygotowaniu",
        widoczny: 1,
        kolejnosc: 1,
      },
    ],
  },
  {
    slug: "katalog-demonstracyjny",
    tytul: "Katalog demonstracyjny dla muzeów",
    opis: "Pusty szablon scenariusza do rozmów z instytucjami. Nieopublikowany.",
    okres: null,
    opublikowany: 0,
    kolejnosc: 9,
    tematy: [
      {
        slug: "szablon-scenariusza",
        tytul: "Szablon scenariusza",
        streszczenie:
          "Struktura sceny, osi czasu i słowniczka do wypełnienia własnym materiałem.",
        okres: null,
        czas_min: 45,
        liczba_scen: 0,
        liczba_zrodel: 0,
        obraz: null,
        adres_gry: null,
        status: "w_przygotowaniu",
        widoczny: 0,
        kolejnosc: 1,
      },
    ],
  },
];

const POSTEPY = [
  ["uczen1@cienie.pl", "cisza-nad-raszowa", 10, 10, 9, 12, "ukonczony"],
  ["uczen2@cienie.pl", "cisza-nad-raszowa", 7, 10, null, null, "w_trakcie"],
  ["uczen3@cienie.pl", "cisza-nad-raszowa", 3, 10, null, null, "w_trakcie"],
  ["uczen4@cienie.pl", "cisza-nad-raszowa", 0, 10, null, null, "nierozpoczety"],
  ["uczen1@cienie.pl", "dworzec-w-kedzierzynie", 2, 4, null, null, "w_trakcie"],
];

const polaczenie = await createConnection({
  host: process.env.BAZA_HOST ?? "127.0.0.1",
  port: Number(process.env.BAZA_PORT ?? 3307),
  user: process.env.BAZA_UZYTKOWNIK ?? "cienie",
  password: process.env.BAZA_HASLO ?? "cienie",
  database: process.env.BAZA_NAZWA ?? "cienie",
  charset: "utf8mb4",
  multipleStatements: false,
});

const idUzytkownika = new Map();
for (const u of UZYTKOWNICY) {
  const hash = await bcrypt.hash(u.haslo, 12);
  await polaczenie.execute(
    `INSERT INTO uzytkownicy (email, haslo_hash, imie_nazwisko, rola, instytucja)
     VALUES (?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE haslo_hash=VALUES(haslo_hash),
       imie_nazwisko=VALUES(imie_nazwisko), rola=VALUES(rola),
       instytucja=VALUES(instytucja)`,
    [u.email, hash, u.imie, u.rola, u.instytucja],
  );
  const [w] = await polaczenie.execute(
    "SELECT id FROM uzytkownicy WHERE email = ?",
    [u.email],
  );
  idUzytkownika.set(u.email, w[0].id);
}

const idTematu = new Map();
for (const k of KURSY) {
  await polaczenie.execute(
    `INSERT INTO kursy (slug, tytul, opis, okres, opublikowany, kolejnosc)
     VALUES (?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE tytul=VALUES(tytul), opis=VALUES(opis),
       okres=VALUES(okres), opublikowany=VALUES(opublikowany),
       kolejnosc=VALUES(kolejnosc)`,
    [k.slug, k.tytul, k.opis, k.okres, k.opublikowany, k.kolejnosc],
  );
  const [wk] = await polaczenie.execute("SELECT id FROM kursy WHERE slug = ?", [
    k.slug,
  ]);
  const kursId = wk[0].id;

  for (const t of k.tematy) {
    await polaczenie.execute(
      `INSERT INTO tematy (kurs_id, slug, tytul, streszczenie, okres, czas_min,
         liczba_scen, liczba_zrodel, obraz, adres_gry, status, widoczny, kolejnosc)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE kurs_id=VALUES(kurs_id), tytul=VALUES(tytul),
         streszczenie=VALUES(streszczenie), okres=VALUES(okres),
         czas_min=VALUES(czas_min), liczba_scen=VALUES(liczba_scen),
         liczba_zrodel=VALUES(liczba_zrodel), obraz=VALUES(obraz),
         adres_gry=VALUES(adres_gry), status=VALUES(status),
         widoczny=VALUES(widoczny), kolejnosc=VALUES(kolejnosc)`,
      [
        kursId,
        t.slug,
        t.tytul,
        t.streszczenie,
        t.okres,
        t.czas_min,
        t.liczba_scen,
        t.liczba_zrodel,
        t.obraz,
        t.adres_gry,
        t.status,
        t.widoczny,
        t.kolejnosc,
      ],
    );
    const [wt] = await polaczenie.execute(
      "SELECT id FROM tematy WHERE slug = ?",
      [t.slug],
    );
    idTematu.set(t.slug, wt[0].id);
  }

  // Wszyscy poza superadminem trafiają na oba opublikowane kursy
  if (k.opublikowany) {
    for (const u of UZYTKOWNICY) {
      if (u.rola === "superadmin") continue;
      await polaczenie.execute(
        `INSERT IGNORE INTO zapisy (uzytkownik_id, kurs_id) VALUES (?, ?)`,
        [idUzytkownika.get(u.email), kursId],
      );
    }
  }
}

for (const [email, slug, zrobione, lacznie, wynik, maks, status] of POSTEPY) {
  await polaczenie.execute(
    `INSERT INTO postepy (uzytkownik_id, temat_id, sceny_ukonczone, sceny_lacznie,
       wynik_quizu, maks_quizu, status)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON DUPLICATE KEY UPDATE sceny_ukonczone=VALUES(sceny_ukonczone),
       sceny_lacznie=VALUES(sceny_lacznie), wynik_quizu=VALUES(wynik_quizu),
       maks_quizu=VALUES(maks_quizu), status=VALUES(status)`,
    [idUzytkownika.get(email), idTematu.get(slug), zrobione, lacznie, wynik, maks, status],
  );
}

await polaczenie.end();

console.log("Dane startowe wgrane.");
console.log("  superadmin   admin@cienie.pl / Cienie2026!");
console.log("  nauczyciel   nauczyciel@cienie.pl / Lekcja2026!");
console.log("  uczeń        uczen1@cienie.pl / Uczen2026!");
