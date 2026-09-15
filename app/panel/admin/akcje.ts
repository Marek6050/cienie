"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";
import { wykonaj, zapytajJeden } from "@/lib/baza";
import { biezacaSesja } from "@/lib/sesja";

export type Stan = { blad?: string; ok?: string };

/** Middleware pilnuje tras, ale akcję można wywołać wprost — stąd ta bramka. */
async function wymagajSuperadmina() {
  const sesja = await biezacaSesja();
  if (!sesja || sesja.rola !== "superadmin") {
    throw new Error("Brak uprawnień.");
  }
  return sesja;
}

function slugify(tekst: string) {
  const mapa: Record<string, string> = {
    ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z",
  };
  return tekst
    .toLowerCase()
    .replace(/[ąćęłńóśźż]/g, (z) => mapa[z] ?? z)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 110);
}

function odswiez() {
  revalidatePath("/panel");
  revalidatePath("/panel/admin");
  revalidatePath("/panel/admin/kursy");
  revalidatePath("/panel/admin/tematy");
  revalidatePath("/panel/admin/uzytkownicy");
}

/* ---------------------------------- kursy ---------------------------------- */

const SchematKursu = z.object({
  id: z.coerce.number().int().optional(),
  tytul: z.string().min(3, "Tytuł musi mieć co najmniej 3 znaki."),
  opis: z.string().max(2000).optional(),
  okres: z.string().max(90).optional(),
  kolejnosc: z.coerce.number().int().min(0).max(999).default(0),
  opublikowany: z.coerce.boolean().default(false),
});

export async function zapiszKurs(_p: Stan, dane: FormData): Promise<Stan> {
  try {
    await wymagajSuperadmina();
  } catch {
    return { blad: "Brak uprawnień." };
  }

  const wynik = SchematKursu.safeParse({
    id: dane.get("id") || undefined,
    tytul: String(dane.get("tytul") ?? "").trim(),
    opis: String(dane.get("opis") ?? "").trim(),
    okres: String(dane.get("okres") ?? "").trim(),
    kolejnosc: dane.get("kolejnosc") || 0,
    opublikowany: dane.get("opublikowany") === "on",
  });

  if (!wynik.success) return { blad: wynik.error.issues[0].message };
  const k = wynik.data;

  try {
    if (k.id) {
      await wykonaj(
        `UPDATE kursy SET tytul=?, opis=?, okres=?, kolejnosc=?, opublikowany=?
          WHERE id=?`,
        [k.tytul, k.opis || null, k.okres || null, k.kolejnosc, k.opublikowany ? 1 : 0, k.id],
      );
      odswiez();
      return { ok: "Kurs zapisany." };
    }

    const slug = slugify(k.tytul);
    const istnieje = await zapytajJeden<{ id: number }>(
      "SELECT id FROM kursy WHERE slug = ?",
      [slug],
    );
    if (istnieje) {
      return { blad: `Kurs o adresie „${slug}" już istnieje. Zmień tytuł.` };
    }

    await wykonaj(
      `INSERT INTO kursy (slug, tytul, opis, okres, kolejnosc, opublikowany)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [slug, k.tytul, k.opis || null, k.okres || null, k.kolejnosc, k.opublikowany ? 1 : 0],
    );
    odswiez();
    return { ok: "Kurs dodany." };
  } catch (blad) {
    return {
      blad: blad instanceof Error ? blad.message : "Nie udało się zapisać kursu.",
    };
  }
}

export async function przelaczPublikacjeKursu(dane: FormData) {
  await wymagajSuperadmina();
  const id = Number(dane.get("id"));
  if (!Number.isInteger(id)) return;
  await wykonaj("UPDATE kursy SET opublikowany = 1 - opublikowany WHERE id = ?", [id]);
  odswiez();
}

export async function usunKurs(dane: FormData) {
  await wymagajSuperadmina();
  const id = Number(dane.get("id"));
  if (!Number.isInteger(id)) return;
  // Tematy i zapisy lecą kaskadą — tak jest zdefiniowany schemat.
  await wykonaj("DELETE FROM kursy WHERE id = ?", [id]);
  odswiez();
}

/* ---------------------------------- tematy --------------------------------- */

const SchematTematu = z.object({
  id: z.coerce.number().int().optional(),
  kurs_id: z.coerce.number().int().positive("Wybierz kurs."),
  tytul: z.string().min(3, "Tytuł musi mieć co najmniej 3 znaki."),
  streszczenie: z.string().max(2000).optional(),
  okres: z.string().max(90).optional(),
  czas_min: z.coerce.number().int().min(5).max(600).default(45),
  liczba_scen: z.coerce.number().int().min(0).max(999).default(0),
  liczba_zrodel: z.coerce.number().int().min(0).max(999).default(0),
  obraz: z.string().max(190).optional(),
  adres_gry: z.string().max(255).optional(),
  status: z.enum(["gotowy", "w_przygotowaniu", "archiwalny"]),
  kolejnosc: z.coerce.number().int().min(0).max(999).default(0),
  widoczny: z.coerce.boolean().default(false),
});

export async function zapiszTemat(_p: Stan, dane: FormData): Promise<Stan> {
  try {
    await wymagajSuperadmina();
  } catch {
    return { blad: "Brak uprawnień." };
  }

  const wynik = SchematTematu.safeParse({
    id: dane.get("id") || undefined,
    kurs_id: dane.get("kurs_id"),
    tytul: String(dane.get("tytul") ?? "").trim(),
    streszczenie: String(dane.get("streszczenie") ?? "").trim(),
    okres: String(dane.get("okres") ?? "").trim(),
    czas_min: dane.get("czas_min") || 45,
    liczba_scen: dane.get("liczba_scen") || 0,
    liczba_zrodel: dane.get("liczba_zrodel") || 0,
    obraz: String(dane.get("obraz") ?? "").trim(),
    adres_gry: String(dane.get("adres_gry") ?? "").trim(),
    status: dane.get("status") || "w_przygotowaniu",
    kolejnosc: dane.get("kolejnosc") || 0,
    widoczny: dane.get("widoczny") === "on",
  });

  if (!wynik.success) return { blad: wynik.error.issues[0].message };
  const t = wynik.data;

  try {
    if (t.id) {
      await wykonaj(
        `UPDATE tematy SET kurs_id=?, tytul=?, streszczenie=?, okres=?, czas_min=?,
           liczba_scen=?, liczba_zrodel=?, obraz=?, adres_gry=?, status=?,
           kolejnosc=?, widoczny=?
         WHERE id=?`,
        [
          t.kurs_id, t.tytul, t.streszczenie || null, t.okres || null, t.czas_min,
          t.liczba_scen, t.liczba_zrodel, t.obraz || null, t.adres_gry || null,
          t.status, t.kolejnosc, t.widoczny ? 1 : 0, t.id,
        ],
      );
      odswiez();
      return { ok: "Temat zapisany." };
    }

    const slug = slugify(t.tytul);
    const istnieje = await zapytajJeden<{ id: number }>(
      "SELECT id FROM tematy WHERE slug = ?",
      [slug],
    );
    if (istnieje) {
      return { blad: `Temat o adresie „${slug}" już istnieje. Zmień tytuł.` };
    }

    await wykonaj(
      `INSERT INTO tematy (kurs_id, slug, tytul, streszczenie, okres, czas_min,
         liczba_scen, liczba_zrodel, obraz, adres_gry, status, kolejnosc, widoczny)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        t.kurs_id, slug, t.tytul, t.streszczenie || null, t.okres || null,
        t.czas_min, t.liczba_scen, t.liczba_zrodel, t.obraz || null,
        t.adres_gry || null, t.status, t.kolejnosc, t.widoczny ? 1 : 0,
      ],
    );
    odswiez();
    return { ok: "Temat dodany." };
  } catch (blad) {
    return {
      blad: blad instanceof Error ? blad.message : "Nie udało się zapisać tematu.",
    };
  }
}

export async function przelaczWidocznoscTematu(dane: FormData) {
  await wymagajSuperadmina();
  const id = Number(dane.get("id"));
  if (!Number.isInteger(id)) return;
  await wykonaj("UPDATE tematy SET widoczny = 1 - widoczny WHERE id = ?", [id]);
  odswiez();
}

export async function usunTemat(dane: FormData) {
  await wymagajSuperadmina();
  const id = Number(dane.get("id"));
  if (!Number.isInteger(id)) return;
  await wykonaj("DELETE FROM tematy WHERE id = ?", [id]);
  odswiez();
}

/* ------------------------------- użytkownicy ------------------------------- */

export async function ustawRole(dane: FormData) {
  const ja = await wymagajSuperadmina();
  const id = Number(dane.get("id"));
  const rola = String(dane.get("rola"));
  if (!Number.isInteger(id)) return;
  if (!["uczen", "nauczyciel", "superadmin"].includes(rola)) return;
  // Nie pozwalamy odebrać uprawnień samemu sobie — zostałby panel bez admina.
  if (id === ja.id) return;
  await wykonaj("UPDATE uzytkownicy SET rola = ? WHERE id = ?", [rola, id]);
  odswiez();
}

export async function przelaczAktywnosc(dane: FormData) {
  const ja = await wymagajSuperadmina();
  const id = Number(dane.get("id"));
  if (!Number.isInteger(id) || id === ja.id) return;
  await wykonaj("UPDATE uzytkownicy SET aktywny = 1 - aktywny WHERE id = ?", [id]);
  odswiez();
}
