import { Deck, type Notatka } from "@/components/prezentacja/deck";
import {
  Otwarcie, Team, Problem, Aplikacja, Nauczyciele, DecyzjaJury,
  TwardeDane, Cel, Technologie, Zakonczenie,
} from "@/components/prezentacja/slajdy";

/**
 * Notatki prowadzącego (klawisz N). Pitch trwa 3 minuty, więc każdy slajd ma
 * budżet czasu; podział mówców to propozycja — każdy z pięciu ma głos.
 */
const NOTATKI: Notatka[] = [
  {
    kto: "Marek",
    czas: "0:00–0:15",
    kryterium: "Prezentacja i zespół · pierwsze wrażenie",
    punkty: [
      "Zacznij od pytania do sali: kto pamięta lekcję historii sprzed tygodnia?",
      "Hasło: „Lekcja historii nie musi być nudna.” — to ma zostać w głowie jury.",
      "Jedno zdanie: Cisza nad Raszową to gra o Tragedii Górnośląskiej 1945.",
    ],
  },
  {
    kto: "Marek (przedstawia wszystkich)",
    czas: "0:15–0:30",
    kryterium: "Prezentacja i praca zespołowa",
    punkty: [
      "Cały zespół stoi na scenie — pokaż każdego i jego rolę jednym zdaniem.",
      "Ustalcie, kto trzyma który mikrofon (są 2–3).",
    ],
  },
  {
    kto: "Łukasz",
    czas: "0:30–0:50",
    kryterium: "Wpływ społeczny",
    punkty: [
      "Problem 1: brak wiedzy o lokalnej historii. Problem 2: nudna forma.",
      "Nazwij beneficjentów: uczniowie, nauczyciele, społeczności, muzea.",
      "Zapowiedz liczbę 53,4% — wróci na slajdzie z danymi.",
    ],
  },
  {
    kto: "Michał",
    czas: "0:50–1:15",
    kryterium: "Innowacyjność",
    punkty: [
      "Co nowego: grasz po stronie, której nie widać w podręczniku — dylemat rozkaz vs sumienie.",
      "Pokaż trzy kadry: wybory, mapa, oś czasu. To są zrzuty z działającej gry.",
      "Wspomnij o słowniku gwary śląskiej i o tym, że działa na telefonie.",
    ],
  },
  {
    kto: "Marcin",
    czas: "1:15–1:30",
    kryterium: "Wykonalność · wpływ",
    punkty: [
      "To nie tylko gra: scenariusz 45 min, test 30 pytań, panel nauczyciela.",
      "Zaznacz, że dane w panelu na slajdzie są przykładowe.",
    ],
  },
  {
    kto: "Michał / cała sala",
    czas: "1:30–1:55",
    kryterium: "Prezentacja · zapamiętywalność",
    punkty: [
      "Jury podnosi rękę: 1, 2 albo 3. Wciśnij klawisz 1/2/3 i pokaż odpowiedź gry.",
      "Puenta: tak samo wybiera każdy uczeń — i od razu widzi konsekwencje.",
      "Nie przeciągaj: maksymalnie 25 sekund.",
    ],
  },
  {
    kto: "Marek",
    czas: "1:55–2:25",
    kryterium: "Wykonalność · wpływ społeczny",
    punkty: [
      "Metoda: ten sam test przed i po. N = 31. Powiedz uczciwie: to pilotaż.",
      "Wynik: 53,4% → 84,9%, czyli +31,5 punktu procentowego.",
      "Nauczyciele: 4,85/5 i 100% rekomendacji.",
    ],
  },
  {
    kto: "Marcin",
    czas: "2:25–2:35",
    kryterium: "Wpływ społeczny · wykonalność",
    punkty: [
      "Cel: od jednej gry do platformy dla muzeów, domów kultury i pomników.",
      "Kontakty z muzeami buduje Marcin — mów tylko to, co jest prawdą.",
    ],
  },
  {
    kto: "Jakub / Michał",
    czas: "2:35–2:55",
    kryterium: "Wykorzystanie technologii / AI",
    punkty: [
      "Rozdziel: co robi AI (Claude Code — kod, Gemini Nano Banana 2 Pro — grafiki), a co my.",
      "Stos: Next.js 16, React 19, Unity WebGL dla mapy.",
      "Jedno zdanie o dowodzie: ta prezentacja jest stroną z naszej platformy.",
    ],
  },
  {
    kto: "Marek + cały zespół",
    czas: "2:55–3:00",
    kryterium: "Zakończenie — to zapamiętają",
    punkty: [
      "Wróć do hasła z początku: „Lekcja historii nie musi być nudna. Ta zostaje w pamięci.”",
      "Zakończ liczbą +31,5 pp i podziękuj. Zaproś jury do pytań (5 minut).",
    ],
  },
];

export default function Prezentacja() {
  return (
    <Deck
      slajdy={[
        <Otwarcie key="1" />,
        <Team key="2" />,
        <Problem key="3" />,
        <Aplikacja key="4" />,
        <Nauczyciele key="5" />,
        <DecyzjaJury key="6" />,
        <TwardeDane key="7" />,
        <Cel key="8" />,
        <Technologie key="9" />,
        <Zakonczenie key="10" />,
      ]}
      notatki={NOTATKI}
    />
  );
}
