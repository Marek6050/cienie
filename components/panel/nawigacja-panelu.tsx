"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const POZYCJE = [
  { href: "/panel", etykieta: "Wybór tematu", dokladnie: true },
  { href: "/panel/admin", etykieta: "Przegląd", dokladnie: true },
  { href: "/panel/admin/kursy", etykieta: "Kursy", dokladnie: false },
  { href: "/panel/admin/tematy", etykieta: "Tematy", dokladnie: false },
  { href: "/panel/admin/uzytkownicy", etykieta: "Użytkownicy", dokladnie: false },
];

export function NawigacjaPanelu() {
  const sciezka = usePathname();

  return (
    <nav
      aria-label="Panel superadmina"
      className="border-t border-linia bg-kalka-2"
    >
      <ul className="mx-auto flex w-full max-w-[1320px] items-stretch gap-0 overflow-x-auto px-5 sm:px-8">
        {POZYCJE.map((p) => {
          const aktywna = p.dokladnie
            ? sciezka === p.href
            : sciezka.startsWith(p.href);
          return (
            <li key={p.href} className="shrink-0">
              <Link
                href={p.href}
                aria-current={aktywna ? "page" : undefined}
                className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono text-[0.625rem] tracking-[0.16em] uppercase transition-colors duration-200 ${
                  aktywna
                    ? "text-stempel-jasny"
                    : "text-przebicie-3 hover:text-przebicie-2"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 ${
                    aktywna ? "bg-stempel-jasny" : "bg-linia-mocna"
                  }`}
                />
                {p.etykieta}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
