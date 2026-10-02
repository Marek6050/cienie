import type { ReactNode } from "react";

type Props = {
  etykieta: string;
  tytul: ReactNode;
  lead?: ReactNode;
};

/** Nagłówek stoi na tle strony, nad siatką kart. */
export function NaglowekSekcji({ etykieta, tytul, lead }: Props) {
  return (
    <div className="mb-8 max-w-[52rem] sm:mb-10">
      <span className="etykieta">{etykieta}</span>
      <h2 className="h-sekcji mt-5 text-[clamp(1.875rem,4vw,3.25rem)] text-tusz">
        {tytul}
      </h2>
      {lead ? (
        <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-[1.7] text-tusz-2">
          {lead}
        </p>
      ) : null}
    </div>
  );
}
