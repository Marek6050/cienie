import { wykonaj, zapytaj, zapytajJeden } from "./baza";
import type { Rola } from "./sesja-token";

export type Uzytkownik = {
  id: number;
  email: string;
  haslo_hash: string;
  imie_nazwisko: string;
  rola: Rola;
  instytucja: string | null;
  aktywny: number;
  utworzony: string;
  ostatnie_logowanie: string | null;
};

export type Kurs = {
  id: number;
  slug: string;
  tytul: string;
  opis: string | null;
  okres: string | null;
  opublikowany: number;
  kolejnosc: number;
  utworzony: string;
};

export type StatusTematu = "gotowy" | "w_przygotowaniu" | "archiwalny";

export type Temat = {
  id: number;
  kurs_id: number;
  slug: string;
  tytul: string;
  streszczenie: string | null;
  okres: string | null;
  czas_min: number;
  liczba_scen: number;
  liczba_zrodel: number;
  obraz: string | null;
  adres_gry: string | null;
  status: StatusTematu;
  widoczny: number;
  kolejnosc: number;
};

export type TematZPostepem = Temat & {
  kurs_tytul: string;
  kurs_slug: string;
  sceny_ukonczone: number | null;
  sceny_lacznie: number | null;
  wynik_quizu: number | null;
  maks_quizu: number | null;
  status_postepu: "nierozpoczety" | "w_trakcie" | "ukonczony" | null;
};

/* ----------------------------- uwierzytelnianie ---------------------------- */

export function uzytkownikPoMailu(email: string) {
  return zapytajJeden<Uzytkownik>(
    "SELECT * FROM uzytkownicy WHERE email = ? LIMIT 1",
    [email],
  );
}

export function odnotujLogowanie(id: number) {
  return wykonaj(
    "UPDATE uzytkownicy SET ostatnie_logowanie = CURRENT_TIMESTAMP WHERE id = ?",
    [id],
  );
}

/* --------------------------------- panel ---------------------------------- */

/**
 * Tematy widoczne dla użytkownika. Uczeń i nauczyciel widzą to, co przypisano
 * im przez kurs; superadmin widzi wszystko, co opublikowane.
 */
export function tematyDlaUzytkownika(uzytkownikId: number, rola: Rola) {
  const wspolne = `
    SELECT t.*, k.tytul AS kurs_tytul, k.slug AS kurs_slug,
           p.sceny_ukonczone, p.sceny_lacznie, p.wynik_quizu, p.maks_quizu,
           p.status AS status_postepu
      FROM tematy t
      JOIN kursy k ON k.id = t.kurs_id
      LEFT JOIN postepy p ON p.temat_id = t.id AND p.uzytkownik_id = ?
     WHERE t.widoczny = 1 AND k.opublikowany = 1`;

  if (rola === "superadmin") {
    return zapytaj<TematZPostepem>(
      `${wspolne} ORDER BY k.kolejnosc, t.kolejnosc, t.tytul`,
      [uzytkownikId],
    );
  }

  return zapytaj<TematZPostepem>(
    `${wspolne}
       AND k.id IN (SELECT kurs_id FROM zapisy WHERE uzytkownik_id = ?)
     ORDER BY k.kolejnosc, t.kolejnosc, t.tytul`,
    [uzytkownikId, uzytkownikId],
  );
}

export function tematPoSlugu(slug: string, uzytkownikId: number) {
  return zapytajJeden<TematZPostepem>(
    `SELECT t.*, k.tytul AS kurs_tytul, k.slug AS kurs_slug,
            p.sceny_ukonczone, p.sceny_lacznie, p.wynik_quizu, p.maks_quizu,
            p.status AS status_postepu
       FROM tematy t
       JOIN kursy k ON k.id = t.kurs_id
       LEFT JOIN postepy p ON p.temat_id = t.id AND p.uzytkownik_id = ?
      WHERE t.slug = ? LIMIT 1`,
    [uzytkownikId, slug],
  );
}

/** Podgląd postępów klasy — to, po co nauczyciel wchodzi do panelu. */
export function postepyWTemacie(tematId: number) {
  return zapytaj<{
    uzytkownik_id: number;
    imie_nazwisko: string;
    email: string;
    sceny_ukonczone: number;
    sceny_lacznie: number;
    wynik_quizu: number | null;
    maks_quizu: number | null;
    status: string;
    zaktualizowany: string;
  }>(
    `SELECT u.id AS uzytkownik_id, u.imie_nazwisko, u.email,
            p.sceny_ukonczone, p.sceny_lacznie, p.wynik_quizu, p.maks_quizu,
            p.status, p.zaktualizowany
       FROM postepy p
       JOIN uzytkownicy u ON u.id = p.uzytkownik_id
      WHERE p.temat_id = ?
      ORDER BY u.imie_nazwisko`,
    [tematId],
  );
}

/* ------------------------------- superadmin -------------------------------- */

export function wszystkieKursy() {
  return zapytaj<Kurs & { liczba_tematow: number; liczba_zapisanych: number }>(
    `SELECT k.*,
            (SELECT COUNT(*) FROM tematy t WHERE t.kurs_id = k.id) AS liczba_tematow,
            (SELECT COUNT(*) FROM zapisy z WHERE z.kurs_id = k.id) AS liczba_zapisanych
       FROM kursy k
      ORDER BY k.kolejnosc, k.tytul`,
  );
}

export function wszystkieTematy() {
  return zapytaj<Temat & { kurs_tytul: string }>(
    `SELECT t.*, k.tytul AS kurs_tytul
       FROM tematy t
       JOIN kursy k ON k.id = t.kurs_id
      ORDER BY k.kolejnosc, t.kolejnosc, t.tytul`,
  );
}

export function wszyscyUzytkownicy() {
  return zapytaj<
    Omit<Uzytkownik, "haslo_hash"> & {
      liczba_kursow: number;
      ukonczone_tematy: number;
    }
  >(
    `SELECT u.id, u.email, u.imie_nazwisko, u.rola, u.instytucja, u.aktywny,
            u.utworzony, u.ostatnie_logowanie,
            (SELECT COUNT(*) FROM zapisy z WHERE z.uzytkownik_id = u.id) AS liczba_kursow,
            (SELECT COUNT(*) FROM postepy p
              WHERE p.uzytkownik_id = u.id AND p.status = 'ukonczony') AS ukonczone_tematy
       FROM uzytkownicy u
      ORDER BY FIELD(u.rola,'superadmin','nauczyciel','uczen'), u.imie_nazwisko`,
  );
}

export async function statystyki() {
  const wiersz = await zapytajJeden<{
    uzytkownicy: number;
    nauczyciele: number;
    uczniowie: number;
    kursy: number;
    kursy_opublikowane: number;
    tematy: number;
    tematy_widoczne: number;
    ukonczenia: number;
  }>(
    `SELECT
       (SELECT COUNT(*) FROM uzytkownicy) AS uzytkownicy,
       (SELECT COUNT(*) FROM uzytkownicy WHERE rola='nauczyciel') AS nauczyciele,
       (SELECT COUNT(*) FROM uzytkownicy WHERE rola='uczen') AS uczniowie,
       (SELECT COUNT(*) FROM kursy) AS kursy,
       (SELECT COUNT(*) FROM kursy WHERE opublikowany=1) AS kursy_opublikowane,
       (SELECT COUNT(*) FROM tematy) AS tematy,
       (SELECT COUNT(*) FROM tematy WHERE widoczny=1) AS tematy_widoczne,
       (SELECT COUNT(*) FROM postepy WHERE status='ukonczony') AS ukonczenia`,
  );
  return wiersz;
}
