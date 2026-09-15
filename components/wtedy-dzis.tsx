"use client";

import Image from "next/image";
import { useId, useState } from "react";

/**
 * Zestawienie „wtedy / dziś” — mechanizm wzięty żywcem z minigry MVP.
 * Suwak jest prawdziwym <input type="range">, więc działa z klawiatury
 * (strzałki, Home, End) i pod czytnikiem ekranu.
 */
export function WtedyDzis() {
  const [pozycja, setPozycja] = useState(52);
  const id = useId();

  return (
    <figure className="m-0">
      <div className="relative aspect-[1116/720] w-full overflow-hidden border border-linia bg-kalka-2 has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-[3px] has-[input:focus-visible]:outline-stempel-jasny">
        <Image
          src="/archiwum/dzis.webp"
          alt="To samo miejsce współcześnie."
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          className="object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pozycja}% 0 0)` }}
        >
          <Image
            src="/archiwum/wtedy.webp"
            alt="Fotografia archiwalna tego samego miejsca."
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="duotone object-cover"
          />
          <div className="duotone-warstwa" />
        </div>

        {/* Linia podziału i uchwyt — rysowane, nie z biblioteki */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-przebitka"
          style={{ left: `${pozycja}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-przebitka bg-kalka/85">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 text-przebitka"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="square"
              aria-hidden="true"
            >
              <path d="M9.5 7 5 12l4.5 5M14.5 7l4.5 5-4.5 5" />
            </svg>
          </span>
        </div>

        <span className="sygnatura pointer-events-none absolute top-3 left-3 z-10 bg-kalka/75 px-2 py-1 text-nadruk-jasny">
          1945
        </span>
        <span className="sygnatura pointer-events-none absolute top-3 right-3 z-10 bg-kalka/75 px-2 py-1">
          dziś
        </span>

        <label htmlFor={id} className="sr-only">
          Przesuń, aby porównać fotografię archiwalną ze zdjęciem współczesnym
        </label>
        <input
          id={id}
          type="range"
          min={0}
          max={100}
          step={0.5}
          value={pozycja}
          onChange={(e) => setPozycja(Number(e.target.value))}
          aria-valuetext={`${Math.round(pozycja)}% widoku archiwalnego`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>

      <figcaption className="mt-3 font-mono text-[0.6875rem] leading-relaxed tracking-[0.06em] text-przebicie-3 uppercase">
        Minigra porównawcza z „Ciszy nad Raszową”. Przeciągnij albo użyj
        strzałek. Fotografia archiwalna sygnowana fotopolska.eu.
      </figcaption>
    </figure>
  );
}
