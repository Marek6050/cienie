import Image from "next/image";
import { Sekcja } from "./sekcja";
import { Przebicie } from "@/components/przebicie";

/**
 * Pięć rzeczy, które uczeń robi w środku historii. Każdy kadr niesie prawdziwy
 * materiał produkcyjny „Ciszy nad Raszową” — nie zrzut ekranu i nie makietę
 * interfejsu, więc nic tu nie obiecuje wyglądu, którego gra nie ma.
 */
const KADRY = [
  {
    id: "narracja",
    etykieta: "Narracja",
    tytul: "Odkrywaj historię",
    opis:
      "Prolog i dziewięć scen prowadzą przez zimę 1945 roku z perspektywy jednej osoby.",
    obraz: "/archiwum/postac-klara.webp",
    alt: "Portret jednej z postaci prowadzących opowieść.",
    duze: true,
  },
  {
    id: "wybory",
    etykieta: "Wybór",
    tytul: "Podejmuj decyzje",
    opis:
      "W kluczowych momentach uczeń decyduje, jak postąpić — i ponosi tego konsekwencje.",
    obraz: "/archiwum/zima.webp",
    alt: "Zimowa droga — sceneria, w której zapadają decyzje gracza.",
  },
  {
    id: "zrodla",
    etykieta: "Źródła",
    tytul: "Pracuj ze źródłami",
    opis:
      "Dokumenty, fotografie i relacje świadków dostępne w trakcie sceny, z oznaczonym statusem.",
    obraz: "/archiwum/konferencja-jaltanska.webp",
    alt: "Fotografia z konferencji jałtańskiej — materiał źródłowy w grze.",
  },
  {
    id: "miejsca",
    etykieta: "Mapa",
    tytul: "Odkrywaj miejsca",
    opis:
      "Interaktywna mapa regionu pokazuje, gdzie rozgrywały się kolejne wydarzenia.",
    obraz: "/archiwum/raszowa.webp",
    alt: "Raszowa — jedno z miejsc na mapie opowieści.",
  },
  {
    id: "wiedza",
    etykieta: "Quiz",
    tytul: "Sprawdź swoją wiedzę",
    opis:
      "Quiz i podsumowanie przejścia zbierają to, co uczeń zobaczył i wybrał.",
    obraz: "/archiwum/wkroczenie-armii-czerwonej.webp",
    alt: "Wkroczenie Armii Czerwonej na Górny Śląsk — wydarzenie z osi czasu.",
  },
];

export function WSrodku() {
  return (
    <Sekcja
      id="w-srodku"
      nr="04"
      tytul="Zobacz historię oczami ucznia."
      lead={
        <>
          Pięć rzeczy, które uczeń robi w środku opowieści — to samo, co dzieje
          się na lekcji, tylko z jego strony ekranu.
        </>
      }
    >
      <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {KADRY.map((k, i) => (
          <Przebicie
            as="li"
            key={k.id}
            opoznienie={i * 80}
            className={k.duze ? "sm:col-span-2" : undefined}
          >
            <figure className="m-0">
              <div
                className={`relative w-full overflow-hidden border border-linia bg-kalka-2 ${
                  k.duze ? "aspect-[16/9]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={k.obraz}
                  alt={k.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="duotone object-cover"
                />
                <div className="duotone-warstwa" />
                <span className="sygnatura pointer-events-none absolute top-3 left-3 z-10 bg-kalka/75 px-2 py-1 text-stempel-jasny">
                  {k.etykieta}
                </span>
              </div>

              <figcaption className="mt-4">
                <h3 className="font-display text-[1.0625rem] leading-snug font-extrabold text-przebicie [font-stretch:110%]">
                  {k.tytul}
                </h3>
                <p className="mt-2 max-w-[42ch] text-[0.9375rem] leading-relaxed text-przebicie-2">
                  {k.opis}
                </p>
              </figcaption>
            </figure>
          </Przebicie>
        ))}
      </ul>

      <p className="linia-dokumentu mt-12 pt-4 font-mono text-[0.625rem] leading-relaxed tracking-[0.12em] text-przebicie-3 uppercase">
        Fotografie i postacie pochodzą z produkcji „Cisza nad Raszową”
      </p>
    </Sekcja>
  );
}
