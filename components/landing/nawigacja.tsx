import Link from "next/link";

const POZYCJE = [
  { href: "#co-robimy", etykieta: "Co robimy" },
  { href: "#dlaczego", etykieta: "Dlaczego my" },
  { href: "#realizacja", etykieta: "Realizacja" },
  { href: "#kreator", etykieta: "Kreator" },
  { href: "#kontakt", etykieta: "Kontakt" },
];

export function Nawigacja() {
  return (
    <header className="relative z-30 border-b border-linia">
      <nav
        aria-label="Główna"
        className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-6 px-5 py-4 sm:px-8"
      >
        <Link
          href="/"
          className="font-display text-[0.9375rem] font-extrabold tracking-[0.02em] text-przebicie uppercase [font-stretch:112%] lg:hidden"
        >
          Cienie Rzeczypospolitej
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {POZYCJE.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="font-mono text-[0.6875rem] tracking-[0.14em] text-przebicie-2 uppercase transition-colors duration-200 hover:text-stempel-jasny"
              >
                {p.etykieta}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/logowanie"
          className="font-mono text-[0.6875rem] tracking-[0.14em] text-przebicie uppercase underline decoration-linia-mocna transition-colors duration-200 hover:text-stempel-jasny hover:decoration-stempel"
        >
          Zaloguj się
        </Link>
      </nav>
    </header>
  );
}
