import Image from "next/image";
import { Pieczec } from "@/components/pieczec";
import { SCENA_DEMO as S } from "@/lib/scena-demo";

/**
 * Kadr z gry na pierwszym ekranie. Zamiast opisywać mechanizm, pokazuje go:
 * archiwalna fotografia, kwestia i dwa wyjścia. Kwestia i wybory leżą pod
 * zdjęciem, nie na nim — nic się nie zasłania przy wąskiej kolumnie.
 * Jedyny jasny obiekt to wsunięta pod spód przebitka z notą źródłową.
 */
export function KadrHero() {
  return (
    <figure className="m-0">
      <div className="border border-linia bg-kalka-2">
        {/* Fotografia sceny */}
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={S.tlo}
            alt="Zimowa droga pod Raszową — tło sceny pierwszej."
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 384px"
            className="duotone object-cover"
          />
          <div className="duotone-warstwa" />
          <div className="duotone-cien" />

          <span className="sygnatura absolute top-3 left-3 z-20 bg-kalka/75 px-2 py-1">
            {S.sygnatura}
          </span>

          {/* Postać mówiąca */}
          <figure className="absolute bottom-3 left-3 z-20 m-0 w-[30%] max-w-[7rem] border border-przebitka/70 bg-kalka/70 p-1.5">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={S.postac.obraz}
                alt=""
                fill
                sizes="130px"
                className="object-cover object-top brightness-95 contrast-105 grayscale-[0.7]"
              />
            </div>
            <figcaption className="mt-1.5 font-mono text-[0.5rem] leading-tight tracking-[0.12em] text-przebitka/85 uppercase">
              {S.postac.imie}
            </figcaption>
          </figure>
        </div>

        {/* Kwestia */}
        <p className="border-t border-linia px-4 py-4 text-[0.9375rem] leading-snug text-przebicie text-balance">
          {S.kwestia}
        </p>

        {/* Dwa wyjścia — cała mechanika, pokazana zamiast opisanej */}
        <ul className="grid gap-px border-t border-linia bg-linia">
          {S.wybory.map((w) => (
            <li
              key={w.klucz}
              className="flex items-start gap-3 bg-kalka-2 px-4 py-3"
            >
              <span className="mt-px font-mono text-[0.625rem] tracking-[0.1em] text-stempel-jasny">
                {w.klucz}
              </span>
              <span className="flex-1 text-[0.875rem] leading-snug text-przebicie-2">
                {w.tekst}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Nota źródłowa na przebitce — jedyna jasna rzecz na ekranie */}
      <figcaption className="na-przebitce przebitka relative z-10 -mt-2 ml-auto w-[15rem] -rotate-[1.6deg] px-3.5 py-3 sm:-mr-3">
        <Pieczec className="pointer-events-none absolute -top-3 right-2 h-14 w-14 -rotate-[14deg] text-stempel-gleb opacity-40 mix-blend-multiply" />
        <span className="relative z-10 block font-mono text-[0.5625rem] leading-relaxed tracking-[0.14em] text-przebitka-tusz uppercase">
          Fot. archiwalna · 1945
        </span>
        <span className="relative z-10 mt-1 block text-[0.75rem] leading-snug text-przebitka-tusz-2">
          Scena oparta na relacjach świadków. W grze oznaczona jako
          dramatyzacja.
        </span>
      </figcaption>
    </figure>
  );
}
