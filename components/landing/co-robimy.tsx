import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";

const KLAUZULE = [
  {
    nr: "2.1",
    tytul: "Co robimy",
    tresc:
      "Bierzemy jedno wydarzenie z historii Polski i rozkładamy je na sceny, przez które uczeń przechodzi sam. Nie ogląda rekonstrukcji — stoi w środku i decyduje, co zrobić, kiedy na drodze klęczy kobieta z dzieckiem, a za plecami słychać transport.",
  },
  {
    nr: "2.2",
    tytul: "Jak to robimy",
    tresc:
      "Najpierw kwerenda: rozkazy, relacje, opracowania, fotografie. Potem scenariusz, w którym każde zdanie dostaje jeden z trzech stopni pewności — fakt, rekonstrukcja, dramatyzacja. Dopiero na końcu grafika, dźwięk i wybory. Kolejność ma znaczenie: żaden efekt nie jest wart zdania, którego nie da się obronić.",
  },
  {
    nr: "2.3",
    tytul: "Kto z tego korzysta",
    tresc:
      "Nauczyciel zakłada kurs, przypisuje uczniom temat i po lekcji widzi, kto ile przeszedł. Uczeń wchodzi z własnego telefonu, bez instalowania czegokolwiek. Muzeum albo instytucja pamięci dostaje ten sam silnik pod własną historię.",
  },
];

export function CoRobimy() {
  return (
    <Sekcja
      id="co-robimy"
      nr="02"
      tytul="Robimy jedną rzecz i robimy ją w określonej kolejności."
    >
      <div className="border-t border-linia">
        {KLAUZULE.map((k, i) => (
          <Przebicie key={k.nr} opoznienie={i * 90}>
            <article className="grid gap-4 border-b border-linia px-0 py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-8 sm:py-10">
              <div className="flex items-baseline gap-3 sm:block">
                <span className="liczby font-mono text-[0.75rem] tracking-[0.12em] text-stempel-jasny">
                  {k.nr}
                </span>
              </div>
              <div className="max-w-[66ch]">
                <h3 className="font-display text-[1.25rem] font-extrabold tracking-[-0.01em] text-przebicie [font-stretch:110%] sm:text-[1.4375rem]">
                  {k.tytul}
                </h3>
                <p className="mt-3 text-[1rem] leading-[1.7] text-przebicie-2">
                  {k.tresc}
                </p>
              </div>
            </article>
          </Przebicie>
        ))}
      </div>
    </Sekcja>
  );
}
