"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { zaloguj, type StanLogowania } from "@/app/logowanie/akcje";
import { IkonaStrzalka } from "@/components/ikony";

function Przycisk() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="stempel w-full justify-center" disabled={pending}>
      {pending ? "Sprawdzam…" : "Wejdź"}
      {!pending && <IkonaStrzalka className="h-4 w-4" />}
    </button>
  );
}

export function FormularzLogowania({ dalej }: { dalej?: string }) {
  const [stan, akcja] = useActionState<StanLogowania, FormData>(zaloguj, {});

  return (
    <form action={akcja} className="space-y-7" noValidate>
      {dalej ? <input type="hidden" name="dalej" value={dalej} /> : null}

      <div>
        <label htmlFor="email" className="sygnatura block">
          Adres e-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          required
          aria-invalid={stan.pole === "email" || undefined}
          aria-describedby={stan.blad ? "blad-logowania" : undefined}
          className="wpis mt-2"
          placeholder="imie.nazwisko@szkola.pl"
        />
      </div>

      <div>
        <label htmlFor="haslo" className="sygnatura block">
          Hasło
        </label>
        <input
          id="haslo"
          name="haslo"
          type="password"
          autoComplete="current-password"
          required
          aria-invalid={stan.pole === "haslo" || undefined}
          aria-describedby={stan.blad ? "blad-logowania" : undefined}
          className="wpis mt-2"
          placeholder="••••••••"
        />
      </div>

      {stan.blad ? (
        <p
          id="blad-logowania"
          role="alert"
          className="flex items-start gap-3 border border-nadruk/50 bg-nadruk/10 px-3.5 py-3 text-[0.875rem] leading-relaxed text-nadruk-jasny"
        >
          <span
            aria-hidden="true"
            className="mt-[0.35em] h-1.5 w-1.5 shrink-0 bg-nadruk-jasny"
          />
          {stan.blad}
        </p>
      ) : null}

      <Przycisk />
    </form>
  );
}
