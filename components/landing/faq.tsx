import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { ListaFaq, type PytanieFaq } from "@/components/witryna/faq";
import { KONTAKT } from "@/lib/kontakt";

export const FAQ_GLOWNE: PytanieFaq[] = [
  {
    pytanie: "Czy trzeba coś instalować?",
    odpowiedz:
      "Nie. Historia działa w przeglądarce, na telefonie ucznia albo na komputerze w pracowni. Nie potrzeba aplikacji ani dodatkowego oprogramowania.",
  },
  {
    pytanie: "Ile trwa jedna lekcja?",
    odpowiedz:
      "Materiał jest zaprojektowany na 45 minut. „Ciszę nad Raszową” tworzą prolog i dziewięć scen, a scenariusz można przechodzić w kawałkach i wznawiać.",
  },
  {
    pytanie: "Dla jakiego wieku jest ta platforma?",
    odpowiedz:
      "Dla uczniów szkół podstawowych i ponadpodstawowych, w przybliżeniu od 13 do 19 lat. Temat dotyczy deportacji i śmierci cywilów, dlatego materiał podajemy bez efekciarstwa, a nauczyciel decyduje, jak go wprowadzić w klasie.",
  },
  {
    pytanie: "Skąd wiemy, że treści są wiarygodne?",
    odpowiedz:
      "Każda historia zaczyna się od kwerendy źródeł, nie od scenariusza. W grze każdy element ma oznaczony status: fakt, rekonstrukcja albo dramatyzacja. Uczeń widzi, gdzie kończy się źródło, a zaczyna narracja.",
  },
  {
    pytanie: "Czy uczniowie muszą zakładać konta?",
    odpowiedz:
      "Uczniowie logują się do platformy, a nauczyciel zakłada kurs, przypisuje tematy i widzi, kto przeszedł scenariusz. Dzięki temu nie musi nic zbierać ręcznie.",
  },
  {
    pytanie: "Czy materiał jest dostępny po angielsku?",
    odpowiedz: "Tak, „Cisza nad Raszową” ma wersję polską i angielską.",
  },
  {
    pytanie: "Ile to kosztuje?",
    odpowiedz:
      "Cennik i licencjonowanie nie są jeszcze ostatecznie ustalone. Zakres, termin i warunki ustalamy indywidualnie. Napisz do nas, a odpowiemy konkretnie.",
  },
  {
    pytanie: "Czy możecie zrobić taką historię o naszym wydarzeniu?",
    odpowiedz: (
      <>
        Tak, na tym samym silniku budujemy opowieści o innych wydarzeniach,
        na podstawie Waszych źródeł, zbiorów i relacji. Szczegóły dla muzeów,
        domów kultury i miejsc pamięci znajdziesz na stronie{" "}
        <a href="/dla-instytucji" className="font-semibold text-akcent underline underline-offset-4">
          Dla instytucji
        </a>
        .
      </>
    ),
  },
];

export function SekcjaFaq({
  pozycje = FAQ_GLOWNE,
  id = "faq",
  tytul = "Najczęstsze pytania",
}: {
  pozycje?: PytanieFaq[];
  id?: string;
  tytul?: string;
}) {
  return (
    <Sekcja id={id}>
      <Siatka>
        <Karta span="lg:col-span-4" ton="mgla" className="flex flex-col justify-between gap-10 sm:p-8">
          <div>
            <span className="etykieta !bg-white/70">FAQ</span>
            <h2 className="h-sekcji mt-6 text-[clamp(1.875rem,3.2vw,2.5rem)] text-tusz">{tytul}</h2>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-tusz-2">
              Nie ma tu Twojego pytania? Napisz. Odpowiada zespół, nie automat.
            </p>
          </div>
          <a href={`mailto:${KONTAKT.mail}`} className="przycisk self-start">
            Zadaj pytanie
          </a>
        </Karta>

        <Karta span="lg:col-span-8" opoznienie={100} className="!py-2 sm:!px-8">
          <ListaFaq pozycje={pozycje} />
        </Karta>
      </Siatka>
    </Sekcja>
  );
}
