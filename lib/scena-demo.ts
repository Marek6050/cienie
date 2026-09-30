/**
 * Scena pokazywana na landingu — jedno źródło dla hero (§01) i podglądu
 * kreatora (§07), żeby oba nie rozjechały się w treści.
 *
 * Treść odpowiada scenie 1 z „Ciszy nad Raszową" („Spotkanie na Raszowej”,
 * `sceny.scene1` w `public/locales/pl.json` MVP). Nic tu nie jest wymyślone
 * na potrzeby strony.
 */
export const SCENA_DEMO = {
  sygnatura: "CNR / SC-01",
  tytul: "Scena 1 — Spotkanie na Raszowej",
  tlo: "/archiwum/zima.webp",
  postac: {
    imie: "Anna Willner",
    obraz: "/archiwum/postac-klara.webp",
  },
  didaskalia:
    "Klęczy w śniegu, trzymając dziecko. Obok stoi chłopiec z porcelanowym aniołkiem. W tle odgłosy walki.",
  kwestia:
    "— Niech pan nie idzie dalej tą drogą. Oni zabierają wszystkich, kto sam stoi na nogach.",
  wybory: [
    { klucz: "A", tekst: "Zostać i pomóc jej wstać", waga: "+2 empatia" },
    { klucz: "B", tekst: "Iść dalej w stronę mostu", waga: "−1 empatia" },
  ],
} as const;

export const DEFINICJA_DEMO = [
  { pole: "id", wartosc: "sc-01-raszowa" },
  { pole: "tło", wartosc: "zima.webp" },
  { pole: "postać", wartosc: "anna_willner" },
  { pole: "audio", wartosc: "wiatr.wav, dziecko.wav" },
  { pole: "kwestia", wartosc: "pl.sceny.scene1.kwestia" },
  { pole: "wybór A → ", wartosc: "sc-02 · moralność +2" },
  { pole: "wybór B → ", wartosc: "sc-03 · moralność −1" },
  { pole: "status", wartosc: "dramatyzacja na podstawie relacji" },
] as const;
