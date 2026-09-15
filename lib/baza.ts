import mysql from "mysql2/promise";

export type Wartosc = string | number | boolean | null | Date;

declare global {
  // eslint-disable-next-line no-var
  var __pulaCienie: mysql.Pool | undefined;
}

/**
 * Jedna pula na proces. W trybie deweloperskim trzymana na globalThis, żeby
 * hot reload nie otwierał nowej przy każdej zmianie pliku.
 */
export function pula(): mysql.Pool {
  if (!globalThis.__pulaCienie) {
    globalThis.__pulaCienie = mysql.createPool({
      host: process.env.BAZA_HOST ?? "127.0.0.1",
      port: Number(process.env.BAZA_PORT ?? 3307),
      user: process.env.BAZA_UZYTKOWNIK ?? "cienie",
      password: process.env.BAZA_HASLO ?? "cienie",
      database: process.env.BAZA_NAZWA ?? "cienie",
      waitForConnections: true,
      connectionLimit: 10,
      charset: "utf8mb4",
      dateStrings: true,
    });
  }
  return globalThis.__pulaCienie;
}

export async function zapytaj<T>(sql: string, wartosci: Wartosc[] = []) {
  const [wiersze] = await pula().query(sql, wartosci);
  return wiersze as T[];
}

export async function zapytajJeden<T>(sql: string, wartosci: Wartosc[] = []) {
  const wiersze = await zapytaj<T>(sql, wartosci);
  return wiersze[0] ?? null;
}

export async function wykonaj(sql: string, wartosci: Wartosc[] = []) {
  const [wynik] = await pula().execute(sql, wartosci);
  return wynik as mysql.ResultSetHeader;
}

/** Czy baza w ogóle odpowiada — panel pokazuje to wprost zamiast się wywalać. */
export async function bazaDostepna(): Promise<
  { ok: true } | { ok: false; powod: string }
> {
  try {
    await pula().query("SELECT 1");
    return { ok: true };
  } catch (blad) {
    const powod =
      blad instanceof Error ? blad.message : "nieznany błąd połączenia";
    return { ok: false, powod };
  }
}
