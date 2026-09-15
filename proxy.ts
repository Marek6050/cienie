import { NextResponse, type NextRequest } from "next/server";
import { CIASTECZKO, zweryfikuj } from "@/lib/sesja-token";

export async function proxy(zadanie: NextRequest) {
  const sciezka = zadanie.nextUrl.pathname;
  const token = zadanie.cookies.get(CIASTECZKO)?.value;
  const sesja = token ? await zweryfikuj(token) : null;

  if (sciezka.startsWith("/panel")) {
    if (!sesja) {
      const cel = new URL("/logowanie", zadanie.url);
      cel.searchParams.set("dalej", sciezka);
      return NextResponse.redirect(cel);
    }
    if (sciezka.startsWith("/panel/admin") && sesja.rola !== "superadmin") {
      return NextResponse.redirect(new URL("/panel", zadanie.url));
    }
  }

  // Zalogowany nie potrzebuje formularza logowania
  if (sciezka === "/logowanie" && sesja) {
    return NextResponse.redirect(new URL("/panel", zadanie.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/panel/:path*", "/logowanie"],
};
