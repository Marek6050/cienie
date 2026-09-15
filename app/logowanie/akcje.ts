"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { odnotujLogowanie, uzytkownikPoMailu } from "@/lib/dane";
import { usunSesje, zalozSesje } from "@/lib/sesja";

const Formularz = z.object({
  email: z.email("To nie wygląda na adres e-mail."),
  haslo: z.string().min(1, "Wpisz hasło."),
  dalej: z.string().optional(),
});

export type StanLogowania = { blad?: string; pole?: "email" | "haslo" };

export async function zaloguj(
  _poprzedni: StanLogowania,
  dane: FormData,
): Promise<StanLogowania> {
  const wynik = Formularz.safeParse({
    email: String(dane.get("email") ?? "").trim().toLowerCase(),
    haslo: String(dane.get("haslo") ?? ""),
    dalej: String(dane.get("dalej") ?? ""),
  });

  if (!wynik.success) {
    const pierwszy = wynik.error.issues[0];
    return {
      blad: pierwszy.message,
      pole: pierwszy.path[0] === "haslo" ? "haslo" : "email",
    };
  }

  const { email, haslo, dalej } = wynik.data;

  let uzytkownik;
  try {
    uzytkownik = await uzytkownikPoMailu(email);
  } catch {
    return {
      blad: "Baza nie odpowiada. Uruchom ją poleceniem npm run db:up i spróbuj ponownie.",
    };
  }

  // Ta sama odpowiedź dla nieznanego adresu i złego hasła — żeby nie dało się
  // sprawdzać, które konta istnieją.
  const zgadza =
    uzytkownik !== null && (await bcrypt.compare(haslo, uzytkownik.haslo_hash));

  if (!uzytkownik || !zgadza) {
    return { blad: "Nieprawidłowy e-mail lub hasło.", pole: "haslo" };
  }

  if (!uzytkownik.aktywny) {
    return {
      blad: "To konto jest wyłączone. Napisz do osoby prowadzącej platformę.",
    };
  }

  await zalozSesje({
    id: uzytkownik.id,
    email: uzytkownik.email,
    imieNazwisko: uzytkownik.imie_nazwisko,
    rola: uzytkownik.rola,
  });
  await odnotujLogowanie(uzytkownik.id);

  redirect(dalej && dalej.startsWith("/panel") ? dalej : "/panel");
}

export async function wyloguj() {
  await usunSesje();
  redirect("/logowanie");
}
