"use client";

import Image from "next/image";
import { useCallback, useId, useRef, useState } from "react";

/**
 * Zestawienie „wtedy / dziś" — mechanizm wzięty z minigry MVP.
 *
 * Przeciąganie obsługuje wskaźnik na kadrze (pointer events + setPointerCapture),
 * a nie rozciągnięty <input type="range">: range z `appearance-none` gubi kciuk,
 * więc chwytanie działało tylko w wąskim pasku w pionie. Input został jako
 * sterowanie z klawiatury i etykieta dla czytnika ekranu — jedno źródło stanu.
 */
export function WtedyDzis() {
  const [pozycja, setPozycja] = useState(52);
  const [ciagniecie, setCiagniecie] = useState(false);
  const kadr = useRef<HTMLDivElement>(null);
  const id = useId();

  const zXdoProcent = useCallback((klientX: number) => {
    const el = kadr.current;
    if (!el) return null;
    const r = el.getBoundingClientRect();
    if (r.width === 0) return null;
    const p = ((klientX - r.left) / r.width) * 100;
    return Math.min(100, Math.max(0, p));
  }, []);

  const przesun = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const p = zXdoProcent(e.clientX);
      if (p !== null) setPozycja(p);
    },
    [zXdoProcent],
  );

  return (
    <figure className="m-0">
      <div
        ref={kadr}
        onPointerDown={(e) => {
          // Pomiń prawy przycisk; pozwól klawiaturze dalej działać przez input.
          if (e.button !== 0 && e.pointerType === "mouse") return;
          e.currentTarget.setPointerCapture(e.pointerId);
          setCiagniecie(true);
          przesun(e);
        }}
        onPointerMove={(e) => {
          if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
          przesun(e);
        }}
        onPointerUp={(e) => {
          e.currentTarget.releasePointerCapture(e.pointerId);
          setCiagniecie(false);
        }}
        onPointerCancel={() => setCiagniecie(false)}
        className={`relative aspect-[1116/720] w-full touch-none overflow-hidden border border-linia bg-kalka-2 select-none has-[input:focus-visible]:outline-2 has-[input:focus-visible]:outline-offset-[3px] has-[input:focus-visible]:outline-stempel-jasny ${
          ciagniecie ? "cursor-grabbing" : "cursor-ew-resize"
        }`}
      >
        <Image
          src="/archiwum/dzis.webp"
          alt="To samo miejsce współcześnie."
          fill
          sizes="(max-width: 1024px) 100vw, 640px"
          draggable={false}
          className="pointer-events-none object-cover"
        />

        <div
          className="pointer-events-none absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pozycja}% 0 0)` }}
        >
          <Image
            src="/archiwum/wtedy.webp"
            alt="Fotografia archiwalna tego samego miejsca."
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            draggable={false}
            className="duotone object-cover"
          />
          <div className="duotone-warstwa" />
        </div>

        {/* Linia podziału i uchwyt — rysowane, nie z biblioteki */}
        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-przebitka"
          style={{ left: `${pozycja}%` }}
        >
          <span
            className={`absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-przebitka bg-kalka/85 transition-transform duration-150 ${
              ciagniecie ? "scale-110" : ""
            }`}
          >
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

        {/* Sterowanie z klawiatury. Siedzi w rogu, żeby nie przechwytywać
            wskaźnika — przeciąganie obsługuje kadr powyżej. */}
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
          className="absolute bottom-2 left-1/2 z-20 h-6 w-[60%] -translate-x-1/2 cursor-ew-resize opacity-0 focus-visible:opacity-100"
        />
      </div>

      <figcaption className="mt-3 max-w-[52ch] font-mono text-[0.6875rem] leading-relaxed tracking-[0.06em] text-przebicie-3 uppercase">
        To samo miejsce. Dwa momenty w czasie. Przesuń suwak i porównaj
        fotografię archiwalną ze współczesnym obrazem Raszowej. Fotografia
        archiwalna sygnowana fotopolska.eu.
      </figcaption>
    </figure>
  );
}
