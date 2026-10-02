import { Logo } from "@/components/logo";
import Link from "next/link";
import { biezacaSesja, ETYKIETY_ROL } from "@/lib/sesja";
import { wyloguj } from "@/app/logowanie/akcje";
import { IkonaWyjscie } from "@/components/ikony";
import { NawigacjaPanelu } from "@/components/panel/nawigacja-panelu";

export default async function UkladPanelu({
  children,
}: {
  children: React.ReactNode;
}) {
  const sesja = await biezacaSesja();

  return (
    <div className="kalka flex min-h-svh flex-col">
      <header className="sticky top-0 z-40 border-b border-linia bg-kalka/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-3.5 sm:px-8">
          <div className="flex items-center gap-4">
            <Link
              href="/panel"
              className="inline-flex items-center gap-2.5 font-display text-[0.875rem] font-extrabold tracking-[0.04em] text-przebicie uppercase [font-stretch:112%]"
            >
              <Logo rozmiar={28} />
              Cienie Rzeczypospolitej
            </Link>
            <span
              aria-hidden="true"
              className="hidden h-4 w-px bg-linia-mocna sm:block"
            />
            <span className="hidden font-mono text-[0.625rem] tracking-[0.18em] text-przebicie-3 uppercase sm:inline">
              Panel
            </span>
          </div>

          {sesja ? (
            <div className="flex items-center gap-5">
              <div className="text-right">
                <p className="text-[0.8125rem] leading-tight text-przebicie">
                  {sesja.imieNazwisko}
                </p>
                <p className="font-mono text-[0.5625rem] tracking-[0.18em] text-stempel-jasny uppercase">
                  {ETYKIETY_ROL[sesja.rola]}
                </p>
              </div>
              <form action={wyloguj}>
                <button
                  type="submit"
                  className="flex h-9 w-9 items-center justify-center border border-linia-mocna text-przebicie-3 transition-colors duration-200 hover:border-stempel hover:text-stempel-jasny"
                  aria-label="Wyloguj się"
                  title="Wyloguj się"
                >
                  <IkonaWyjscie className="h-4 w-4" />
                </button>
              </form>
            </div>
          ) : null}
        </div>

        {sesja?.rola === "superadmin" ? <NawigacjaPanelu /> : null}
      </header>

      <main className="flex-1 px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto w-full max-w-[1320px]">{children}</div>
      </main>

      <footer className="border-t border-linia px-5 py-6 sm:px-8">
        <p className="mx-auto w-full max-w-[1320px] font-mono text-[0.625rem] tracking-[0.16em] text-przebicie-3 uppercase">
          Cienie Rzeczypospolitej · Dok. 01 / 2026
        </p>
      </footer>
    </div>
  );
}
