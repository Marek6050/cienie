/**
 * TODO(kontakt): podmień na prawdziwe dane. To jedyne miejsce w projekcie,
 * w którym trzeba je zmienić — landing i stopka czytają stąd.
 */
export const KONTAKT = {
  /** TODO(kontakt): ustaw na false, gdy wejdą prawdziwe dane — wtedy znika
   *  oznaczenie „do uzupełnienia" na landingu. */
  doUzupelnienia: true,
  mail: "kontakt@cienie-rzeczypospolitej.pl", // TODO
  mailTresci: "redakcja@cienie-rzeczypospolitej.pl", // TODO
  telefon: null as string | null, // TODO — albo zostaw null, wtedy się nie pokaże
  social: [
    { nazwa: "Facebook", uchwyt: "/cienierzeczypospolitej", url: "#" }, // TODO
    { nazwa: "Instagram", uchwyt: "@cienie.rzeczypospolitej", url: "#" }, // TODO
    { nazwa: "YouTube", uchwyt: "@cienierzeczypospolitej", url: "#" }, // TODO
    { nazwa: "LinkedIn", uchwyt: "/company/cienie-rp", url: "#" }, // TODO
  ],
} as const;

export const ZESPOL = {
  szkola: "Zespół Szkół Technicznych i Ogólnokształcących w Kędzierzynie-Koźlu",
  szkolaLokatyw:
    "Zespole Szkół Technicznych i Ogólnokształcących w Kędzierzynie-Koźlu",
  autorzy: [
    "Michał Kałamaga",
    "Marek Garbacz",
    "Marcin Kacperczyk",
    "Jakub Witnik",
    "Łukasz Gucwiński",
  ],
} as const;
