import type { StatusTematu } from "@/lib/dane";

/** Postęp jako wypełniane pola formularza, nie pasek z zaokrąglonym rogiem. */
export function PasekScen({
  zrobione,
  lacznie,
}: {
  zrobione: number;
  lacznie: number;
}) {
  if (lacznie <= 0) {
    return (
      <p className="sygnatura">Scenariusz jeszcze nie ma scen</p>
    );
  }

  const pola = Array.from({ length: lacznie });

  return (
    <div>
      <div
        className="flex flex-wrap gap-[3px]"
        role="img"
        aria-label={`Ukończone sceny: ${zrobione} z ${lacznie}`}
      >
        {pola.map((_, i) => (
          <span
            key={i}
            className={`h-2.5 w-2.5 ${
              i < zrobione ? "bg-stempel-jasny" : "bg-linia-mocna"
            }`}
          />
        ))}
      </div>
      <p className="liczby mt-2 font-mono text-[0.625rem] tracking-[0.12em] text-przebicie-3 uppercase">
        {zrobione} / {lacznie} scen
      </p>
    </div>
  );
}

const OPIS_STATUSU: Record<StatusTematu, string> = {
  gotowy: "Gotowy",
  w_przygotowaniu: "W przygotowaniu",
  archiwalny: "Archiwalny",
};

export function ZnacznikStatusu({ status }: { status: StatusTematu }) {
  const gotowy = status === "gotowy";
  return (
    <span
      className={`inline-flex items-center gap-2 border px-2.5 py-1 font-mono text-[0.5625rem] tracking-[0.16em] uppercase ${
        gotowy
          ? "border-stempel/60 bg-stempel/14 text-stempel-jasny"
          : "border-linia-mocna text-przebicie-3"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 ${gotowy ? "bg-stempel-jasny" : "bg-przebicie-3"}`}
      />
      {OPIS_STATUSU[status]}
    </span>
  );
}

export function Przelacznik({
  wlaczony,
  etykietaWl,
  etykietaWyl,
}: {
  wlaczony: boolean;
  etykietaWl: string;
  etykietaWyl: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-mono text-[0.5625rem] tracking-[0.16em] uppercase ${
        wlaczony ? "text-stempel-jasny" : "text-przebicie-3"
      }`}
    >
      <span
        aria-hidden="true"
        className={`inline-block h-3 w-3 border ${
          wlaczony
            ? "border-stempel bg-stempel-jasny"
            : "border-linia-mocna bg-transparent"
        }`}
      />
      {wlaczony ? etykietaWl : etykietaWyl}
    </span>
  );
}

/** Jedna forma komunikatu na cały panel: brak bazy, pusty stan, odmowa. */
export function Komunikat({
  ton = "spokojny",
  tytul,
  children,
}: {
  ton?: "spokojny" | "odmowa";
  tytul: string;
  children?: React.ReactNode;
}) {
  const odmowa = ton === "odmowa";
  return (
    <div
      className={`border p-6 sm:p-8 ${
        odmowa ? "border-nadruk/50 bg-nadruk/8" : "border-linia bg-kalka-2"
      }`}
    >
      <h2
        className={`font-display text-[1.0625rem] font-extrabold tracking-[0.02em] uppercase [font-stretch:112%] ${
          odmowa ? "text-nadruk-jasny" : "text-przebicie"
        }`}
      >
        {tytul}
      </h2>
      {children ? (
        <div className="mt-3 max-w-[70ch] space-y-3 text-[0.9375rem] leading-relaxed text-przebicie-2">
          {children}
        </div>
      ) : null}
    </div>
  );
}
