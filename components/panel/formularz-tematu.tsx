"use client";

import { useActionState } from "react";
import { zapiszTemat, type Stan } from "@/app/panel/admin/akcje";
import type { Temat } from "@/lib/dane";
import { Odpowiedz, PrzyciskZapisu } from "./elementy-formularza";

type Opcja = { id: number; tytul: string };

export function FormularzTematu({
  temat,
  kursy,
}: {
  temat?: Temat;
  kursy: Opcja[];
}) {
  const [stan, akcja] = useActionState<Stan, FormData>(zapiszTemat, {});
  const k = temat?.id ?? "nowy";

  return (
    <form action={akcja} className="grid gap-6 sm:grid-cols-2">
      {temat ? <input type="hidden" name="id" value={temat.id} /> : null}

      <div>
        <label htmlFor={`kurs-${k}`} className="sygnatura block">
          Kurs
        </label>
        <select
          id={`kurs-${k}`}
          name="kurs_id"
          required
          defaultValue={temat?.kurs_id ?? kursy[0]?.id}
          className="wpis mt-2"
        >
          {kursy.map((o) => (
            <option key={o.id} value={o.id} className="bg-kalka-2">
              {o.tytul}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`status-${k}`} className="sygnatura block">
          Status scenariusza
        </label>
        <select
          id={`status-${k}`}
          name="status"
          defaultValue={temat?.status ?? "w_przygotowaniu"}
          className="wpis mt-2"
        >
          <option value="gotowy" className="bg-kalka-2">Gotowy</option>
          <option value="w_przygotowaniu" className="bg-kalka-2">W przygotowaniu</option>
          <option value="archiwalny" className="bg-kalka-2">Archiwalny</option>
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`tytul-t-${k}`} className="sygnatura block">
          Tytuł tematu
        </label>
        <input
          id={`tytul-t-${k}`}
          name="tytul"
          required
          minLength={3}
          defaultValue={temat?.tytul}
          className="wpis mt-2"
          placeholder="Cisza nad Raszową"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`streszczenie-${k}`} className="sygnatura block">
          Streszczenie — to widzi uczeń na kafelku
        </label>
        <textarea
          id={`streszczenie-${k}`}
          name="streszczenie"
          rows={3}
          defaultValue={temat?.streszczenie ?? ""}
          className="wpis mt-2 resize-y"
        />
      </div>

      <div>
        <label htmlFor={`okres-t-${k}`} className="sygnatura block">
          Okres
        </label>
        <input
          id={`okres-t-${k}`}
          name="okres"
          defaultValue={temat?.okres ?? ""}
          className="wpis mt-2"
          placeholder="luty 1945"
        />
      </div>

      <div>
        <label htmlFor={`czas-${k}`} className="sygnatura block">
          Czas przejścia (min)
        </label>
        <input
          id={`czas-${k}`}
          name="czas_min"
          type="number"
          min={5}
          max={600}
          defaultValue={temat?.czas_min ?? 45}
          className="wpis mt-2"
        />
      </div>

      <div>
        <label htmlFor={`sceny-${k}`} className="sygnatura block">
          Liczba scen
        </label>
        <input
          id={`sceny-${k}`}
          name="liczba_scen"
          type="number"
          min={0}
          max={999}
          defaultValue={temat?.liczba_scen ?? 0}
          className="wpis mt-2"
        />
      </div>

      <div>
        <label htmlFor={`zrodla-${k}`} className="sygnatura block">
          Liczba źródeł
        </label>
        <input
          id={`zrodla-${k}`}
          name="liczba_zrodel"
          type="number"
          min={0}
          max={999}
          defaultValue={temat?.liczba_zrodel ?? 0}
          className="wpis mt-2"
        />
      </div>

      <div>
        <label htmlFor={`obraz-${k}`} className="sygnatura block">
          Obraz (ścieżka w /public)
        </label>
        <input
          id={`obraz-${k}`}
          name="obraz"
          defaultValue={temat?.obraz ?? ""}
          className="wpis mt-2"
          placeholder="/archiwum/raszowa.webp"
        />
      </div>

      <div>
        <label htmlFor={`kolejnosc-t-${k}`} className="sygnatura block">
          Kolejność
        </label>
        <input
          id={`kolejnosc-t-${k}`}
          name="kolejnosc"
          type="number"
          min={0}
          max={999}
          defaultValue={temat?.kolejnosc ?? 0}
          className="wpis mt-2"
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor={`adres-${k}`} className="sygnatura block">
          Adres gry
        </label>
        <input
          id={`adres-${k}`}
          name="adres_gry"
          defaultValue={temat?.adres_gry ?? ""}
          className="wpis mt-2"
          placeholder="https://…/roleplay/prolog"
        />
      </div>

      <label className="flex cursor-pointer items-center gap-3 sm:col-span-2">
        <input
          type="checkbox"
          name="widoczny"
          defaultChecked={Boolean(temat?.widoczny)}
          className="h-4 w-4 accent-[var(--color-stempel)]"
        />
        <span className="font-mono text-[0.6875rem] tracking-[0.14em] text-przebicie-2 uppercase">
          Widoczny w widoku użytkownika
        </span>
      </label>

      <Odpowiedz stan={stan} />

      <div className="sm:col-span-2">
        <PrzyciskZapisu etykieta={temat ? "Zapisz zmiany" : "Dodaj temat"} />
      </div>
    </form>
  );
}
