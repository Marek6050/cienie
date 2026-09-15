"use client";

import { useActionState } from "react";
import { zapiszKurs, type Stan } from "@/app/panel/admin/akcje";
import type { Kurs } from "@/lib/dane";
import { Odpowiedz, PrzyciskZapisu } from "./elementy-formularza";

export function FormularzKursu({ kurs }: { kurs?: Kurs }) {
  const [stan, akcja] = useActionState<Stan, FormData>(zapiszKurs, {});

  return (
    <form action={akcja} className="grid gap-6 sm:grid-cols-2">
      {kurs ? <input type="hidden" name="id" value={kurs.id} /> : null}

      <div className="sm:col-span-2">
        <label htmlFor={`tytul-${kurs?.id ?? "nowy"}`} className="sygnatura block">
          Tytuł kursu
        </label>
        <input
          id={`tytul-${kurs?.id ?? "nowy"}`}
          name="tytul"
          required
          minLength={3}
          defaultValue={kurs?.tytul}
          className="wpis mt-2"
          placeholder="Tragedia Górnośląska 1945"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`opis-${kurs?.id ?? "nowy"}`} className="sygnatura block">
          Opis
        </label>
        <textarea
          id={`opis-${kurs?.id ?? "nowy"}`}
          name="opis"
          rows={3}
          defaultValue={kurs?.opis ?? ""}
          className="wpis mt-2 resize-y"
          placeholder="Czego dotyczy kurs i dla kogo jest."
        />
      </div>

      <div>
        <label htmlFor={`okres-${kurs?.id ?? "nowy"}`} className="sygnatura block">
          Okres historyczny
        </label>
        <input
          id={`okres-${kurs?.id ?? "nowy"}`}
          name="okres"
          defaultValue={kurs?.okres ?? ""}
          className="wpis mt-2"
          placeholder="1945–1949"
        />
      </div>

      <div>
        <label
          htmlFor={`kolejnosc-${kurs?.id ?? "nowy"}`}
          className="sygnatura block"
        >
          Kolejność na liście
        </label>
        <input
          id={`kolejnosc-${kurs?.id ?? "nowy"}`}
          name="kolejnosc"
          type="number"
          min={0}
          max={999}
          defaultValue={kurs?.kolejnosc ?? 0}
          className="wpis mt-2"
        />
      </div>

      <label className="flex cursor-pointer items-center gap-3 sm:col-span-2">
        <input
          type="checkbox"
          name="opublikowany"
          defaultChecked={Boolean(kurs?.opublikowany)}
          className="h-4 w-4 accent-[var(--color-stempel)]"
        />
        <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-przebicie-2 uppercase">
          Opublikowany — widoczny dla zapisanych użytkowników
        </span>
      </label>

      <Odpowiedz stan={stan} />

      <div className="sm:col-span-2">
        <PrzyciskZapisu etykieta={kurs ? "Zapisz zmiany" : "Dodaj kurs"} />
      </div>
    </form>
  );
}
