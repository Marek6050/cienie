import type { Viewport } from "next";
import { Nawigacja } from "@/components/witryna/nawigacja";
import { Stopka } from "@/components/witryna/stopka";
import { PlynnePrzewijanie } from "@/components/witryna/plynne-przewijanie";

export const viewport: Viewport = {
  themeColor: "#f5f4ef",
};

/** Publiczna witryna: jasny motyw, płynne przewijanie, wspólna nawigacja i stopka. */
export default function WitrynaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="witryna">
      <a
        href="#tresc"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-akcent focus:px-5 focus:py-2.5 focus:text-[0.875rem] focus:font-semibold focus:text-white"
      >
        Przejdź do treści
      </a>
      <PlynnePrzewijanie />
      <Nawigacja />
      <main id="tresc">{children}</main>
      <Stopka />
    </div>
  );
}
