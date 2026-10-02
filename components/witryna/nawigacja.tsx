"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/logo";

const POZYCJE = [
  { kotwica: "jak-to-dziala", etykieta: "Jak to działa" },
  { kotwica: "historia", etykieta: "Historia" },
  { kotwica: "metodologia", etykieta: "Metodologia" },
  { kotwica: "dla-szkol", etykieta: "Dla szkół" },
  { sciezka: "/dla-instytucji", etykieta: "Dla instytucji" },
  { kotwica: "faq", etykieta: "FAQ" },
  { kotwica: "kontakt", etykieta: "Kontakt" },
];

const LINK =
  "rounded-full px-3.5 py-2 text-[0.875rem] font-medium text-tusz-2 transition-colors duration-200 hover:bg-tlo hover:text-tusz";

/** Pływająca nawigacja — kapsułka, która zostaje na ekranie przy przewijaniu. */
export function Nawigacja() {
  const [otwarte, setOtwarte] = useState(false);
  const pathname = usePathname();
  const naGlownej = pathname === "/";

  const pozycje = POZYCJE.map((p) => ({
    ...p,
    href: p.sciezka ?? (naGlownej ? `#${p.kotwica}` : `/#${p.kotwica}`),
    biezaca: p.sciezka === pathname,
  }));

  const wiersz = (p: (typeof pozycje)[number], zamknij?: boolean) => {
    const wspolne = {
      className: `${LINK} ${p.biezaca ? "bg-akcent-mgla text-akcent-ciemny" : ""}`,
      onClick: zamknij ? () => setOtwarte(false) : undefined,
      "aria-current": p.biezaca ? ("page" as const) : undefined,
    };
    // Kotwice na tej samej stronie obsługuje Lenis — zwykły <a>, nie <Link>.
    return p.href.startsWith("#") ? (
      <a href={p.href} {...wspolne}>{p.etykieta}</a>
    ) : (
      <Link href={p.href} {...wspolne}>{p.etykieta}</Link>
    );
  };

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-6">
      <nav
        aria-label="Główna"
        className="mx-auto w-full max-w-[1200px] rounded-[1.75rem] border border-obrys bg-karta/85 shadow-[0_8px_30px_-18px_rgba(20,21,31,0.25)] backdrop-blur-xl"
      >
        <div className="flex items-center justify-between gap-4 py-2 pr-2 pl-4 sm:pl-5">
          <Link
            href="/"
            className="h-karty flex items-center gap-2.5 text-[0.8125rem] font-extrabold tracking-[-0.01em] whitespace-nowrap text-tusz sm:text-[0.9375rem]"
          >
            <Logo rozmiar={32} />
            Cienie Rzeczypospolitej
          </Link>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {pozycje.map((p) => (
              <li key={p.etykieta}>{wiersz(p)}</li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link href="/logowanie" className="przycisk min-h-10 px-4 py-2 text-[0.875rem] whitespace-nowrap sm:px-5">
              Zaloguj<span className="hidden sm:inline"> się</span>
            </Link>
            <button
              type="button"
              aria-expanded={otwarte}
              aria-controls="menu-mobilne"
              aria-label={otwarte ? "Zamknij menu" : "Otwórz menu"}
              onClick={() => setOtwarte((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-tlo text-tusz xl:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" aria-hidden="true">
                {otwarte ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>

        {otwarte ? (
          <ul id="menu-mobilne" className="grid gap-1 border-t border-obrys p-3 xl:hidden">
            {pozycje.map((p) => (
              <li key={p.etykieta} className="[&>*]:block [&>*]:py-3">
                {wiersz(p, true)}
              </li>
            ))}
          </ul>
        ) : null}
      </nav>
    </header>
  );
}
