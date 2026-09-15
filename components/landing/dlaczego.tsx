import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";
import {
  IkonaRozgalezienie,
  IkonaTelefon,
  IkonaZegar,
  IkonaZrodlo,
  IkonaPieczec,
} from "@/components/ikony";

const POWODY = [
  {
    ikona: IkonaZrodlo,
    tytul: "Źródła są widoczne, nie deklarowane",
    tresc:
      "Uczeń w każdej chwili widzi, czy czyta fakt potwierdzony dokumentem, rekonstrukcję czy dramatyzację. To jedyny sposób, żeby gra o historii uczyła historii, a nie wrażenia z niej.",
    meta: "Trzy stopnie pewności",
  },
  {
    ikona: IkonaTelefon,
    tytul: "Telefon jest urządzeniem podstawowym",
    tresc:
      "Nie wersja mobilna zrobiona po fakcie — telefon to główny przypadek użycia, bo tak wygląda klasa. Mapa ma własne sterowanie dotykowe, sceny czyta się w pionie, nic nie wymaga instalacji.",
    meta: "Przeglądarka, bez instalacji",
  },
  {
    ikona: IkonaRozgalezienie,
    tytul: "Wybór ma konsekwencje",
    tresc:
      "Decyzje ucznia prowadzą do innych scen i zmieniają wskaźnik moralny, który idzie z nim do końca. Rozmowa po lekcji zaczyna się od „a ja zrobiłem inaczej” — i to jest moment, w którym historia przestaje być materiałem do zaliczenia.",
    meta: "System moralności",
  },
  {
    ikona: IkonaZegar,
    tytul: "Mieści się w jednej lekcji",
    tresc:
      "Scenariusz jest pocięty tak, żeby dało się przejść kawałek i wrócić do niego na następnych zajęciach. Nauczyciel nie przygotowuje materiałów — wchodzi, przypisuje temat i prowadzi.",
    meta: "45 minut",
  },
];

export function Dlaczego() {
  return (
    <Sekcja
      id="dlaczego"
      nr="03"
      tytul="Cztery rzeczy, które odróżniają to od filmu na lekcji."
    >
      <ol className="border-t border-linia">
        {POWODY.map((p, i) => {
          const Ikona = p.ikona;
          return (
            <Przebicie key={p.tytul} opoznienie={i * 80} as="li">
              <div className="grid gap-5 border-b border-linia py-8 sm:grid-cols-[2.5rem_minmax(0,1fr)_9rem] sm:items-start sm:gap-7 sm:py-10">
                <span className="flex h-10 w-10 items-center justify-center border border-linia-mocna text-stempel-jasny">
                  <Ikona className="h-[1.15rem] w-[1.15rem]" />
                </span>

                <div className="max-w-[62ch]">
                  <h3 className="font-display text-[1.1875rem] font-extrabold tracking-[-0.01em] text-przebicie [font-stretch:110%] sm:text-[1.375rem]">
                    {p.tytul}
                  </h3>
                  <p className="mt-3 text-[1rem] leading-[1.7] text-przebicie-2">
                    {p.tresc}
                  </p>
                </div>

                <p className="sygnatura self-start sm:pt-2 sm:text-right">
                  {p.meta}
                </p>
              </div>
            </Przebicie>
          );
        })}
      </ol>

      <Przebicie opoznienie={320}>
        <div className="mt-10 flex items-start gap-4 border-t border-linia pt-7">
          <IkonaPieczec className="mt-0.5 h-5 w-5 shrink-0 text-przebicie-3" />
          <p className="max-w-[68ch] text-[0.9375rem] leading-relaxed text-przebicie-3">
            Czego tu nie ma i czego nie obiecujemy: rankingów szkół, punktów za
            szybkość ani odznak. Temat na to nie pozwala i nie zamierzamy go do
            tego naginać.
          </p>
        </div>
      </Przebicie>
    </Sekcja>
  );
}
