"use client";

import Image from "next/image";
import { useState } from "react";
import { SCENA_DEMO as SCENA, DEFINICJA_DEMO as DEFINICJA } from "@/lib/scena-demo";

/**
 * Ta sama scena w dwóch trybach: tak, jak widzi ją uczeń, i tak, jak
 * wygląda w kreatorze. Jeden obiekt, dwa widoki — to jest cała obietnica
 * kreatora, pokazana zamiast opisana.
 */
export function KreatorPodglad() {
  const [tryb, setTryb] = useState<"uczen" | "definicja">("uczen");

  return (
    <div className="border border-linia bg-kalka-2">
      <div
        role="tablist"
        aria-label="Widok sceny"
        className="flex border-b border-linia"
      >
        {(
          [
            ["uczen", "Widok ucznia"],
            ["definicja", "Definicja sceny"],
          ] as const
        ).map(([klucz, etykieta]) => {
          const aktywny = tryb === klucz;
          return (
            <button
              key={klucz}
              role="tab"
              type="button"
              id={`zakladka-${klucz}`}
              aria-selected={aktywny}
              aria-controls={`panel-${klucz}`}
              onClick={() => setTryb(klucz)}
              className={`flex-1 px-5 py-3.5 font-mono text-[0.6875rem] tracking-[0.16em] uppercase transition-colors duration-200 ${
                aktywny
                  ? "bg-stempel/16 text-stempel-jasny"
                  : "text-przebicie-3 hover:text-przebicie-2"
              }`}
            >
              <span
                className={`mr-2 inline-block h-1.5 w-1.5 align-middle ${
                  aktywny ? "bg-stempel-jasny" : "bg-linia-mocna"
                }`}
              />
              {etykieta}
            </button>
          );
        })}
      </div>

      {tryb === "uczen" ? (
        <div
          role="tabpanel"
          id="panel-uczen"
          aria-labelledby="zakladka-uczen"
          className="relative"
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            <Image
              src={SCENA.tlo}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 620px"
              className="duotone object-cover"
            />
            <div className="duotone-warstwa" />
            <div className="duotone-cien" />

            <figure className="absolute bottom-4 left-4 z-10 m-0 w-[34%] max-w-[9.5rem] border border-przebitka/70 bg-kalka/70 p-1.5">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={SCENA.postac.obraz}
                  alt=""
                  fill
                  sizes="160px"
                  className="object-cover object-top brightness-95 contrast-105 grayscale-[0.7]"
                />
              </div>
              <figcaption className="mt-1.5 font-mono text-[0.5rem] leading-tight tracking-[0.12em] text-przebitka/85 uppercase">
                {SCENA.postac.imie}
              </figcaption>
            </figure>

            <div className="absolute inset-x-0 bottom-0 z-20 p-4 pl-[40%] sm:p-5 sm:pl-[40%]">
              <p className="text-[0.9375rem] leading-snug text-przebicie text-balance">
                {SCENA.kwestia}
              </p>
            </div>
          </div>

          <div className="grid gap-px border-t border-linia bg-linia sm:grid-cols-2">
            {SCENA.wybory.map((w) => (
              <div
                key={w.klucz}
                className="flex items-start gap-3 bg-kalka-2 px-4 py-3.5"
              >
                <span className="mt-px font-mono text-[0.625rem] tracking-[0.1em] text-stempel-jasny">
                  {w.klucz}
                </span>
                <span className="flex-1 text-[0.875rem] leading-snug text-przebicie-2">
                  {w.tekst}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          role="tabpanel"
          id="panel-definicja"
          aria-labelledby="zakladka-definicja"
          className="p-5 sm:p-6"
        >
          <p className="sygnatura mb-4">
            {SCENA.sygnatura} — {SCENA.tytul}
          </p>
          <dl className="grid grid-cols-1 gap-px bg-linia">
            {DEFINICJA.map((w) => (
              <div
                key={w.pole}
                className="grid grid-cols-[7.5rem_1fr] gap-3 bg-kalka-2 px-3 py-2.5 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="font-mono text-[0.6875rem] tracking-[0.08em] text-przebicie-3">
                  {w.pole}
                </dt>
                <dd className="font-mono text-[0.6875rem] tracking-[0.02em] break-words text-przebicie-2">
                  {w.wartosc}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 border-t border-linia pt-4 text-[0.8125rem] leading-relaxed text-przebicie-3">
            Tło, postać, dźwięk, kwestia i skutki wyborów to osobne pola. Podmiana
            ich wszystkich daje inną scenę — i, po kilkudziesięciu takich, inną
            grę o innym wydarzeniu.
          </p>
        </div>
      )}
    </div>
  );
}
