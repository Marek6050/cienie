"use client";

import { useFormStatus } from "react-dom";
import type { Stan } from "@/app/panel/admin/akcje";
import { IkonaPtaszek } from "@/components/ikony";

export function PrzyciskZapisu({ etykieta }: { etykieta: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="stempel" disabled={pending}>
      {pending ? "Zapisuję…" : etykieta}
    </button>
  );
}

export function Odpowiedz({ stan }: { stan: Stan }) {
  if (!stan.blad && !stan.ok) return null;

  return (
    <p
      role="status"
      className={`flex items-start gap-3 border px-3.5 py-3 text-[0.875rem] leading-relaxed sm:col-span-2 ${
        stan.blad
          ? "border-nadruk/50 bg-nadruk/10 text-nadruk-jasny"
          : "border-stempel/50 bg-stempel/12 text-stempel-jasny"
      }`}
    >
      {stan.blad ? (
        <span aria-hidden="true" className="mt-[0.35em] h-1.5 w-1.5 shrink-0 bg-nadruk-jasny" />
      ) : (
        <IkonaPtaszek className="mt-[0.1em] h-4 w-4 shrink-0" />
      )}
      {stan.blad ?? stan.ok}
    </p>
  );
}

/** Przycisk akcji wykonywanej od razu (przełącz, usuń) — bez własnego formularza. */
export function PrzyciskAkcji({
  children,
  tytul,
  potwierdzenie,
  wariant = "zwykly",
}: {
  children: React.ReactNode;
  tytul?: string;
  potwierdzenie?: string;
  wariant?: "zwykly" | "odmowa";
}) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      title={tytul}
      disabled={pending}
      onClick={(e) => {
        if (potwierdzenie && !window.confirm(potwierdzenie)) {
          e.preventDefault();
        }
      }}
      className={`inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[0.5625rem] tracking-[0.16em] uppercase transition-colors duration-200 disabled:opacity-50 ${
        wariant === "odmowa"
          ? "border-linia-mocna text-przebicie-3 hover:border-nadruk hover:text-nadruk-jasny"
          : "border-linia-mocna text-przebicie-2 hover:border-stempel hover:text-stempel-jasny"
      }`}
    >
      {children}
    </button>
  );
}
