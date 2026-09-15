import { cookies } from "next/headers";
import {
  CIASTECZKO,
  WAZNOSC_SEK,
  podpiszSesje,
  zweryfikuj,
  type Sesja,
} from "./sesja-token";

export * from "./sesja-token";

export async function zalozSesje(sesja: Sesja) {
  const token = await podpiszSesje(sesja);
  const magazyn = await cookies();
  magazyn.set(CIASTECZKO, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: WAZNOSC_SEK,
  });
}

export async function usunSesje() {
  const magazyn = await cookies();
  magazyn.delete(CIASTECZKO);
}

/** Sesja albo null. Strony panelu i tak są chronione przez middleware. */
export async function biezacaSesja(): Promise<Sesja | null> {
  const magazyn = await cookies();
  const token = magazyn.get(CIASTECZKO)?.value;
  if (!token) return null;
  return zweryfikuj(token);
}

/** Sesja albo wyjątek — do miejsc, w których brak sesji to błąd programisty. */
export async function wymagajSesji(): Promise<Sesja> {
  const sesja = await biezacaSesja();
  if (!sesja) throw new Error("Brak sesji");
  return sesja;
}
