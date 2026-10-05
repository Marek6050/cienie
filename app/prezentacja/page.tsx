import { Deck } from "@/components/prezentacja/deck";
import { WSZYSTKIE_SLAJDY } from "@/components/prezentacja/lista";

/**
 * Notatki prowadzącego (klawisz N) są w components/prezentacja/notatki.json.
 * Pitch trwa 3 minuty, więc każdy slajd ma budżet czasu; podział mówców to
 * propozycja, każdy z pięciu ma głos.
 */
export default function Prezentacja() {
  const pozycje = WSZYSTKIE_SLAJDY.filter((p) => !p.tylkoEksport);
  return <Deck slajdy={pozycje.map((p) => p.slajd)} notatki={pozycje.map((p) => p.notatka)} />;
}
