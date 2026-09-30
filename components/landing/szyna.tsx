"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PARAGRAFY = [
  { id: "platforma", nr: "01" },
  { id: "doswiadczenie", nr: "02" },
  { id: "jak-to-dziala", nr: "03" },
  { id: "w-srodku", nr: "04" },
  { id: "realizacja", nr: "05" },
  { id: "metodologia", nr: "06" },
  { id: "kreator", nr: "07" },
  { id: "o-nas", nr: "08" },
  { id: "kontakt", nr: "09" },
];

/**
 * Szyna sygnatury — lewy margines dokumentu z numeracją klauzul. Numer nie
 * jest ozdobą: pokazuje, w którym miejscu dokumentu stoi czytelnik, i pozwala
 * skoczyć do dowolnego paragrafu.
 */
export function Szyna() {
  const [biezacy, setBiezacy] = useState("01");

  useEffect(() => {
    const sekcje = PARAGRAFY.map((p) => document.getElementById(p.id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (sekcje.length === 0) return;

    const obserwator = new IntersectionObserver(
      (wpisy) => {
        const widoczne = wpisy
          .filter((w) => w.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (!widoczne) return;
        const trafiony = PARAGRAFY.find((p) => p.id === widoczne.target.id);
        if (trafiony) setBiezacy(trafiony.nr);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const s of sekcje) obserwator.observe(s);
    return () => obserwator.disconnect();
  }, []);

  return (
    <div className="fixed inset-y-0 left-0 z-40 hidden w-[68px] flex-col items-center justify-between border-r border-linia bg-kalka py-6 lg:flex">
      <Link
        href="#platforma"
        className="font-mono text-[0.625rem] tracking-[0.3em] text-przebicie-2 uppercase [writing-mode:vertical-rl] hover:text-stempel-jasny"
      >
        Cienie&nbsp;Rzeczypospolitej
      </Link>

      {/* Numerowany margines — pełny rejestr klauzul, nie jedna liczba */}
      <nav aria-label="Paragrafy dokumentu" className="w-full">
        <ol className="flex flex-col items-center gap-0">
          {PARAGRAFY.map((p) => {
            const aktywny = p.nr === biezacy;
            return (
              <li key={p.nr} className="w-full">
                <a
                  href={`#${p.id}`}
                  aria-current={aktywny ? "true" : undefined}
                  className="group flex w-full items-center justify-center gap-1.5 py-2"
                >
                  <span
                    aria-hidden="true"
                    className={`block h-px transition-all duration-300 ${
                      aktywny
                        ? "w-4 bg-stempel-jasny"
                        : "w-2 bg-linia-mocna group-hover:w-3 group-hover:bg-przebicie-3"
                    }`}
                  />
                  <span
                    className={`liczby font-mono text-[0.625rem] tracking-[0.06em] transition-colors duration-300 ${
                      aktywny
                        ? "text-stempel-jasny"
                        : "text-przebicie-3 group-hover:text-przebicie-2"
                    }`}
                  >
                    {p.nr}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>

      <span
        aria-hidden="true"
        className="font-mono text-[0.5625rem] tracking-[0.22em] text-przebicie-3 uppercase [writing-mode:vertical-rl]"
      >
        Dok. 01 / 2026
      </span>
    </div>
  );
}
