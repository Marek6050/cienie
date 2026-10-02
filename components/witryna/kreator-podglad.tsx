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
    <div className="overflow-hidden rounded-2xl border border-obrys bg-karta">
      <div
        role="tablist"
        aria-label="Widok sceny"
        className="m-2 flex gap-1 rounded-full bg-tlo p-1"
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
              className={`flex-1 rounded-full px-4 py-2.5 text-[0.875rem] font-semibold transition-all duration-300 ${
                aktywny
                  ? "bg-karta text-tusz shadow-sm"
                  : "text-tusz-3 hover:text-tusz"
              }`}
            >
              {etykieta}
            </button>
          );
        })}
      </div>

      {tryb === "uczen" ? (
        <div role="tabpanel" id="panel-uczen" aria-labelledby="zakladka-uczen">
          <div className="relative mx-2 aspect-[16/10] overflow-hidden rounded-xl">
            <Image
              src={SCENA.tlo}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 640px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <figure className="absolute bottom-3 left-3 z-10 m-0 w-[28%] max-w-[8rem] overflow-hidden rounded-xl border-2 border-white/80 bg-white/10">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={SCENA.postac.obraz}
                  alt=""
                  fill
                  sizes="140px"
                  className="object-cover object-top"
                />
              </div>
            </figure>

            <p className="absolute inset-x-0 bottom-0 z-10 p-4 pl-[34%] text-[0.9375rem] leading-snug text-white text-balance sm:p-5 sm:pl-[33%]">
              <span className="mb-1 block text-[0.75rem] font-semibold text-white/70">
                {SCENA.postac.imie}
              </span>
              {SCENA.kwestia}
            </p>
          </div>

          <div className="grid gap-2 p-2 sm:grid-cols-2">
            {SCENA.wybory.map((w) => (
              <div
                key={w.klucz}
                className="flex items-start gap-3 rounded-xl bg-tlo px-4 py-3.5"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-akcent text-[0.75rem] font-bold text-white">
                  {w.klucz}
                </span>
                <span className="flex-1 text-[0.9375rem] leading-snug text-tusz">
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
          className="p-4 sm:p-5"
        >
          <p className="mb-4 font-mono text-[0.75rem] tracking-[0.06em] text-tusz-3 uppercase">
            {SCENA.sygnatura} — {SCENA.tytul}
          </p>
          <dl className="overflow-hidden rounded-xl bg-tlo">
            {DEFINICJA.map((w) => (
              <div
                key={w.pole}
                className="grid grid-cols-[7.5rem_1fr] gap-3 border-b border-obrys px-4 py-2.5 last:border-b-0 sm:grid-cols-[9rem_1fr]"
              >
                <dt className="font-mono text-[0.75rem] text-tusz-3">{w.pole}</dt>
                <dd className="font-mono text-[0.75rem] break-words text-tusz">
                  {w.wartosc}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[0.875rem] leading-relaxed text-tusz-3">
            Tło, postać, dźwięk, kwestia i skutki wyborów to osobne pola.
            Podmiana ich wszystkich daje inną scenę — i, po kilkudziesięciu
            takich, inną grę o innym wydarzeniu.
          </p>
        </div>
      )}
    </div>
  );
}
