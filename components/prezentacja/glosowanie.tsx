"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/**
 * Prawdziwa decyzja z gry (scena 1, „Rozkaz Koniewa”). Jury podnosi rękę,
 * prowadzący wciska 1/2/3 (albo klika) i pokazuje, jak odpowiada gra.
 * Teksty są wzięte 1:1 z kodu sceny.
 */
const WYBORY = [
  {
    nr: 1,
    tekst: "„Tak jest, towarzyszu.”",
    odpowiedz: [
      "Dobrze. Wierność i dyscyplina to cnota w tych czasach.",
      "Pamiętaj, że rozkaz jest ważniejszy niż pytania.",
    ],
  },
  {
    nr: 2,
    tekst: "„A co z cywilami?”",
    odpowiedz: [
      "(Generał marszczy brwi, głos staje się chłodny)",
      "Cywile… ich los jest przesądzony.",
      "Na wojnie nie ma litości.",
    ],
  },
  {
    nr: 3,
    tekst: "„…”",
    odpowiedz: [
      "(Generał patrzy na gracza długo, badając milczenie)",
      "Milczysz — to dobrze.",
      "Żołnierz, który nie zadaje pytań to dobry żołnierz.",
    ],
  },
] as const;

export function GlosowanieJury() {
  const [wybor, setWybor] = useState<number | null>(null);

  useEffect(() => {
    const klawisz = (e: KeyboardEvent) => {
      if (e.key === "1" || e.key === "2" || e.key === "3") setWybor(Number(e.key));
      if (e.key === "0") setWybor(null);
    };
    window.addEventListener("keydown", klawisz);
    return () => window.removeEventListener("keydown", klawisz);
  }, []);

  const aktywny = WYBORY.find((w) => w.nr === wybor);

  return (
    <div className="grid h-full grid-cols-12 gap-6">
      <div className="karta karta-ciemna wej col-span-5 flex flex-col !p-10" style={{ ["--i" as string]: 1 }}>
        <p className="font-mono text-[22px] tracking-[0.12em] text-white/55 uppercase">
          Scena 1 · Bunkier pod Gogolinem
        </p>
        <div className="mt-8 flex items-center gap-7">
          <div className="relative h-[210px] w-[170px] shrink-0 overflow-hidden rounded-2xl ring-4 ring-white/20">
            <Image src="/prezentacja/koniew.webp" alt="Marszałek Iwan Koniew" fill sizes="170px" className="object-cover object-top" />
          </div>
          <p className="text-[26px] leading-snug text-white/70">
            Marszałek Iwan Koniew
            <br />
            <span className="text-[22px] text-white/45">Armia Czerwona, styczeń 1945</span>
          </p>
        </div>
        <p className="h-sekcji mt-auto text-[50px] leading-[1.15] text-white">
          „Waszym zadaniem jest oczyścić teren. Bez pytań, bez wahania.”
        </p>
      </div>

      <div className="col-span-7 flex flex-col gap-4">
        <div className="wej flex items-center justify-between" style={{ ["--i" as string]: 2 }}>
          <span className="etykieta etykieta-xl">Podnieście rękę: 1, 2 albo 3</span>
          <span className="text-[24px] text-tusz-3">Jesteś zwiadowcą. Co odpowiadasz?</span>
        </div>

        {WYBORY.map((w) => {
          const zaznaczony = w.nr === wybor;
          return (
            <button
              key={w.nr}
              type="button"
              onClick={() => setWybor(w.nr)}
              aria-pressed={zaznaczony}
              className={`karta wej flex items-center gap-8 !p-0 text-left !px-9 transition-all duration-300 ${
                zaznaczony ? "!border-akcent bg-akcent-mgla ring-[3px] ring-akcent" : "hover:border-obrys-mocny"
              } ${wybor !== null && !zaznaczony ? "opacity-45" : ""}`}
              style={{ ["--i" as string]: 3 + w.nr, height: 128 }}
            >
              <span
                className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full font-mono text-[40px] font-bold ${
                  zaznaczony ? "bg-akcent text-white" : "bg-tlo text-tusz"
                }`}
              >
                {w.nr}
              </span>
              <span className="h-sekcji text-[48px] text-tusz">{w.tekst}</span>
            </button>
          );
        })}

        <div
          className="karta karta-mgla wej flex min-h-0 flex-1 flex-col justify-center !px-10 !py-6"
          style={{ ["--i" as string]: 8 }}
          aria-live="polite"
        >
          {aktywny ? (
            <>
              <p className="font-mono text-[20px] tracking-[0.1em] text-akcent-ciemny uppercase">
                Tak odpowiada gra
              </p>
              <div className="mt-3 space-y-1 text-[30px] leading-snug text-tusz">
                {aktywny.odpowiedz.map((l) => (
                  <p key={l} className={l.startsWith("(") ? "text-tusz-3 italic" : ""}>
                    {l}
                  </p>
                ))}
              </div>
            </>
          ) : (
            <p className="text-[30px] leading-snug text-tusz-2">
              W grze każdy uczeń staje przed takim wyborem — a potem widzi, co z niego wynika.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
