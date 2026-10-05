import type { ReactElement } from "react";
import type { Notatka } from "./deck";
import notatki from "./notatki.json";
import {
  Otwarcie, Team, Problem, GrupaDocelowa, Cel, Aplikacja, Nauczyciele,
  DecyzjaJury, OdpowiedziGry, TwardeDane, Technologie, DalszeKroki, Zakonczenie,
} from "./slajdy";

export type PozycjaSlajdu = {
  slajd: ReactElement;
  notatka: Notatka;
  /** Slajd istnieje tylko w pliku PPTX (np. zamiennik interaktywnego głosowania). */
  tylkoEksport?: boolean;
};

const ELEMENTY = [
  <Otwarcie key="1" />,
  <Team key="2" />,
  <Problem key="3" />,
  <GrupaDocelowa key="4" />,
  <Cel key="5" />,
  <Aplikacja key="6" />,
  <Nauczyciele key="7" />,
  <DecyzjaJury key="8" />,
  <OdpowiedziGry key="8b" />,
  <TwardeDane key="9" />,
  <Technologie key="10" />,
  <DalszeKroki key="11" />,
  <Zakonczenie key="12" />,
];

/** Pełna lista: kolejność i notatki pochodzą z notatki.json (ten sam plik czyta skrypt PPTX). */
export const WSZYSTKIE_SLAJDY: PozycjaSlajdu[] = ELEMENTY.map((slajd, i) => ({
  slajd,
  notatka: notatki[i] as Notatka,
  tylkoEksport: (notatki[i] as { tylkoEksport?: boolean }).tylkoEksport,
}));
