import type { Metadata, Viewport } from "next";
import { Archivo, Azeret_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const azeret = Azeret_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  variable: "--font-azeret",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cienie Rzeczypospolitej — interaktywne opowieści historyczne dla szkół",
    template: "%s · Cienie Rzeczypospolitej",
  },
  description:
    "Platforma interaktywnych opowieści historycznych opartych na źródłach. Pierwsza produkcja — „Cisza nad Raszową” — opowiada o deportacjach Górnoślązaków do ZSRR w 1945 roku.",
};

export const viewport: Viewport = {
  themeColor: "#0c0e14",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${archivo.variable} ${azeret.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Bez JS strona renderuje od razu stan końcowy — przebicie przez kalkę
            jest wzmocnieniem, nie warunkiem czytelności. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.dataset.js="1"`,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
