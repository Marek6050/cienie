import Link from "next/link";
import { KONTAKT } from "@/lib/kontakt";
import { Logo } from "@/components/logo";

export function Stopka() {
  return (
    <footer className="px-3 pt-6 pb-6 sm:px-6">
      <div className="karta mx-auto w-full max-w-[1200px]">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="h-karty flex items-center gap-3 text-[1.125rem] font-extrabold text-tusz">
              <Logo rozmiar={44} />
              Cienie Rzeczypospolitej
            </p>
            <p className="mt-3 max-w-[38ch] text-[0.9375rem] leading-relaxed text-tusz-2">
              Interaktywne opowieści historyczne oparte na źródłach — dla szkół
              i instytucji pamięci.
            </p>
          </div>

          <nav aria-label="Stopka">
            <p className="etykieta etykieta-szara">Strona</p>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem] text-tusz-2">
              <li><Link href="/#jak-to-dziala" className="hover:text-akcent">Jak to działa</Link></li>
              <li><Link href="/#historia" className="hover:text-akcent">Cisza nad Raszową</Link></li>
              <li><Link href="/dla-instytucji" className="hover:text-akcent">Dla instytucji</Link></li>
              <li><Link href="/#faq" className="hover:text-akcent">FAQ</Link></li>
              <li><Link href="/logowanie" className="hover:text-akcent">Zaloguj się</Link></li>
            </ul>
          </nav>

          <div>
            <p className="etykieta etykieta-szara">Kontakt</p>
            <a
              href={`mailto:${KONTAKT.mail}`}
              className="mt-4 block text-[0.9375rem] text-tusz underline decoration-obrys-mocny underline-offset-4 hover:decoration-akcent"
            >
              {KONTAKT.mail}
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-obrys pt-5 text-[0.8125rem] leading-relaxed text-tusz-3">
          Materiały archiwalne pochodzą z zasobów projektu i służą wyłącznie
          celom edukacyjnym.
        </p>
      </div>
    </footer>
  );
}
