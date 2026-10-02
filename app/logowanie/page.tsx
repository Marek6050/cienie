import { Logo } from "@/components/logo";
import Link from "next/link";
import type { Metadata } from "next";
import { FormularzLogowania } from "@/components/panel/formularz-logowania";
import { IkonaStrzalka } from "@/components/ikony";

export const metadata: Metadata = { title: "Logowanie" };

export default async function Logowanie({
  searchParams,
}: {
  searchParams: Promise<{ dalej?: string }>;
}) {
  const { dalej } = await searchParams;

  return (
    <div className="kalka flex min-h-svh flex-col">
      <header className="border-b border-linia px-5 py-4 sm:px-8">
        <div className="mx-auto w-full max-w-[1240px]">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.16em] text-przebicie-3 uppercase transition-colors duration-200 hover:text-przebicie"
          >
            <IkonaStrzalka className="h-3.5 w-3.5 rotate-180" />
            <Logo rozmiar={24} />
            Cienie Rzeczypospolitej
          </Link>
        </div>
      </header>

      <main className="flex flex-1 items-center px-5 py-14 sm:px-8">
        <div className="mx-auto grid w-full max-w-[1000px] gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:items-center lg:gap-20">
          <div>
            <span
              className="paragraf block text-[clamp(2.5rem,6.5vw,5rem)]"
              aria-hidden="true"
            >
              §00
            </span>
            <h1 className="mt-3 max-w-[22ch] font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.02] font-black tracking-[-0.03em] text-przebicie text-balance [font-stretch:125%]">
              Wejście dla nauczycieli i uczniów.
            </h1>

            <p className="mt-7 max-w-[46ch] text-[1rem] leading-[1.7] text-przebicie-2">
              Za tymi drzwiami jest wybór tematu, postępy klasy i — dla osób
              prowadzących platformę — katalog kursów. Konta zakłada osoba
              odpowiedzialna za platformę w twojej instytucji.
            </p>

            <dl className="mt-10 border-t border-linia">
              <div className="flex items-baseline justify-between gap-6 border-b border-linia py-3">
                <dt className="sygnatura">Uczeń</dt>
                <dd className="text-[0.875rem] text-przebicie-2">
                  wybiera temat i gra
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-linia py-3">
                <dt className="sygnatura">Nauczyciel</dt>
                <dd className="text-[0.875rem] text-przebicie-2">
                  przypisuje temat i widzi postępy
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-6 border-b border-linia py-3">
                <dt className="sygnatura">Superadmin</dt>
                <dd className="text-[0.875rem] text-przebicie-2">
                  prowadzi kursy, tematy i konta
                </dd>
              </div>
            </dl>
          </div>

          <div className="border border-linia bg-kalka-2 p-6 sm:p-8">
            <h2 className="sygnatura mb-7 border-b border-linia pb-4">
              Formularz logowania
            </h2>
            <FormularzLogowania dalej={dalej} />
          </div>
        </div>
      </main>

      <footer className="border-t border-linia px-5 py-6 sm:px-8">
        <p className="mx-auto w-full max-w-[1240px] font-mono text-[0.625rem] tracking-[0.16em] text-przebicie-3 uppercase">
          Cienie Rzeczypospolitej · Dok. 01 / 2026
        </p>
      </footer>
    </div>
  );
}
