/** Jedno źródło prawdy dla zespołu i wyników pilotażu — slajdy czytają stąd. */

export { ZESPOL_LUDZIE as ZESPOL_PREZENTACJA } from "@/lib/zespol";

/** Pilotaż N=31: ten sam test wiedzy po tradycyjnym wykładzie i po grze (ankieta ewaluacyjna). */
export const WYNIKI = {
  n: 31,
  przed: 53.4,
  po: 84.9,
  kategorie: [
    { nazwa: "Wynik ogólny", przed: 53.4, po: 84.9 },
    { nazwa: "Pojęcia śląskie", przed: 47.0, po: 81.5 },
    { nazwa: "Fakty z 1945 r.", przed: 56.5, po: 88.0 },
    { nazwa: "Postacie i rola", przed: 54.0, po: 85.5 },
  ],
  nauczyciele: { ocena: 4.85, rekomenduje: 100 },
} as const;

/**
 * Głosy uczniów z pytań otwartych ankiety ewaluacyjnej (Q31, Q32).
 * `procentChcacych`: odsetek uczniów, którzy deklarują, że korzystaliby z aplikacji.
 * Wpisz liczbę, gdy będzie policzona. Do tego czasu slajd pokazuje samo stwierdzenie.
 */
export const GLOSY_UCZNIOW = {
  procentChcacych: 98 as number | null,
  cytaty: [
    "Żadne zmiany, gra jest wspaniała, nic bym nie zmienił!",
    "System opowiadania historii i chodzenie po mapie. Wreszcie lekcja, która wciąga od pierwszej minuty!",
  ],
} as const;

export const ADRES_LANDINGU = "605060.xyz";

/** Prawdziwa decyzja ze sceny 1 gry („Rozkaz Koniewa”). Teksty 1:1 z kodu sceny. */
export const WYBORY_JURY = [
  { nr: 1, tekst: "„Tak jest, towarzyszu.”", odpowiedz: ["Dobrze. Wierność i dyscyplina to cnota w tych czasach.", "Pamiętaj, że rozkaz jest ważniejszy niż pytania."] },
  { nr: 2, tekst: "„A co z cywilami?”", odpowiedz: ["(Generał marszczy brwi, głos staje się chłodny)", "Cywile… ich los jest przesądzony.", "Na wojnie nie ma litości."] },
  { nr: 3, tekst: "„…”", odpowiedz: ["(Generał patrzy na gracza długo, badając milczenie)", "Milczysz. To dobrze.", "Żołnierz, który nie zadaje pytań to dobry żołnierz."] },
] as const;
