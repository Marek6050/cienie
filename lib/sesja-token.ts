import { SignJWT, jwtVerify } from "jose";

export const CIASTECZKO = "cienie_sesja";
export const WAZNOSC_SEK = 60 * 60 * 8; // 8 godzin — dzień lekcyjny z zapasem

export type Rola = "uczen" | "nauczyciel" | "superadmin";

export type Sesja = {
  id: number;
  email: string;
  imieNazwisko: string;
  rola: Rola;
};

export const ETYKIETY_ROL: Record<Rola, string> = {
  uczen: "Uczeń",
  nauczyciel: "Nauczyciel",
  superadmin: "Superadmin",
};

function sekret(): Uint8Array {
  const wartosc = process.env.SESJA_SEKRET;
  if (!wartosc || wartosc.length < 32) {
    throw new Error(
      "Brak SESJA_SEKRET (minimum 32 znaki). Skopiuj .env.example do .env.local.",
    );
  }
  return new TextEncoder().encode(wartosc);
}

export async function podpiszSesje(sesja: Sesja): Promise<string> {
  return new SignJWT({ ...sesja })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${WAZNOSC_SEK}s`)
    .sign(sekret());
}

export async function zweryfikuj(token: string): Promise<Sesja | null> {
  try {
    const { payload } = await jwtVerify(token, sekret());
    if (
      typeof payload.id !== "number" ||
      typeof payload.email !== "string" ||
      typeof payload.imieNazwisko !== "string" ||
      typeof payload.rola !== "string"
    ) {
      return null;
    }
    return {
      id: payload.id,
      email: payload.email,
      imieNazwisko: payload.imieNazwisko,
      rola: payload.rola as Rola,
    };
  } catch {
    return null;
  }
}
