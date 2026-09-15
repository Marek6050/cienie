import type { ReactNode } from "react";

/** Wspólny nagłówek stron panelu — ta sama klauzula co na landingu. */
export function NaglowekSekcji({
  nr,
  tytul,
  opis,
  akcja,
}: {
  nr: string;
  tytul: string;
  opis?: ReactNode;
  akcja?: ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div>
        <span
          className="paragraf block text-[clamp(2.25rem,5.5vw,4.25rem)]"
          aria-hidden="true"
        >
          §{nr}
        </span>
        <h1 className="mt-2 max-w-[24ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.05] font-black tracking-[-0.03em] text-przebicie text-balance [font-stretch:125%]">
          {tytul}
        </h1>
        {opis ? (
          <p className="mt-3 max-w-[58ch] text-[0.9375rem] leading-relaxed text-przebicie-2">
            {opis}
          </p>
        ) : null}
      </div>
      {akcja}
    </div>
  );
}

/** Rozwijana sekcja w gramatyce dokumentu — zamiast okna modalnego. */
export function Rozwijana({
  etykieta,
  children,
  otwarta = false,
  ramka = true,
}: {
  etykieta: string;
  children: ReactNode;
  otwarta?: boolean;
  /** Wyłącz, gdy rozwijana siedzi już w obramowanym wierszu — bez kart w kartach. */
  ramka?: boolean;
}) {
  return (
    <details
      open={otwarta}
      className={
        ramka
          ? "group border border-linia bg-kalka-2 [&[open]]:border-linia-mocna"
          : "group"
      }
    >
      <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-3.5 font-mono text-[0.625rem] tracking-[0.16em] text-przebicie-2 uppercase select-none hover:text-stempel-jasny focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-stempel-jasny">
        <span
          aria-hidden="true"
          className="relative h-2.5 w-2.5 shrink-0 before:absolute before:top-1/2 before:left-0 before:h-px before:w-full before:-translate-y-1/2 before:bg-current after:absolute after:top-0 after:left-1/2 after:h-full after:w-px after:-translate-x-1/2 after:bg-current after:transition-transform after:duration-200 group-open:after:scale-y-0"
        />
        {etykieta}
      </summary>
      <div className="border-t border-linia p-5 sm:p-6">{children}</div>
    </details>
  );
}
