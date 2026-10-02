/** Jedno źródło prawdy dla zespołu i wyników pilotażu — slajdy czytają stąd. */

export const ZESPOL_PREZENTACJA = [
  { slug: "michal-kalamaga", imie: "Michał Kałamaga", rola: "Strona techniczna" },
  { slug: "marek-garbacz", imie: "Marek Garbacz", rola: "Strona techniczna", dopisek: "Kierownik zespołu" },
  { slug: "lukasz-gucwinski", imie: "Łukasz Gucwiński", rola: "Researcher historyczny" },
  { slug: "jakub-witnik", imie: "Jakub Witnik", rola: "Oprawa graficzna i materiały" },
  { slug: "marcin-kacperczyk", imie: "Marcin Kacperczyk", rola: "Research historyczny i kontakt z muzeami" },
] as const;

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
