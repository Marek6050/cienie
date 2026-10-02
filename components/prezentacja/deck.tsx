"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type Notatka = {
  kto: string;
  czas: string;
  kryterium: string;
  punkty: string[];
};

const W = 1920;
const H = 1080;
const LIMIT_SEK = 180;

const mmss = (s: number) =>
  `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

/**
 * Silnik prezentacji. Slajdy są projektowane na scenie 1920×1080 i skalowane do
 * okna, więc układ jest identyczny na laptopie i na ekranie kinowym.
 * ←/→ — slajdy · F — pełny ekran · N — notatki prowadzącego · T — timer 3:00
 */
export function Deck({ slajdy, notatki }: { slajdy: ReactNode[]; notatki: Notatka[] }) {
  const [i, setI] = useState(0);
  const [skala, setSkala] = useState(0.5);
  const [notatkiOtwarte, setNotatkiOtwarte] = useState(false);
  const [widocznyPasek, setWidocznyPasek] = useState(true);
  const [sek, setSek] = useState(0);
  const [bieg, setBieg] = useState(false);
  const okno = useRef<HTMLDivElement>(null);
  const ostatniRuch = useRef(0);
  const dotyk = useRef<number | null>(null);
  const n = slajdy.length;

  const idz = useCallback(
    (cel: number) => setI(Math.min(n - 1, Math.max(0, cel))),
    [n],
  );

  // Skala sceny: największa, która mieści się w oknie.
  useEffect(() => {
    const el = okno.current;
    if (!el) return;
    const licz = () => {
      const r = el.getBoundingClientRect();
      setSkala(Math.min(r.width / W, r.height / H));
    };
    licz();
    const ro = new ResizeObserver(licz);
    ro.observe(el);
    return () => ro.disconnect();
  }, [notatkiOtwarte]);

  // Adres #3 pozwala wskoczyć na konkretny slajd.
  useEffect(() => {
    const z = Number(window.location.hash.slice(1));
    if (Number.isInteger(z) && z >= 1 && z <= n) setI(z - 1);
  }, [n]);

  useEffect(() => {
    history.replaceState(null, "", `#${i + 1}`);
  }, [i]);

  // Timer pitchu.
  useEffect(() => {
    if (!bieg) return;
    const t = window.setInterval(() => setSek((s) => s + 1), 1000);
    return () => window.clearInterval(t);
  }, [bieg]);

  useEffect(() => {
    const klawisz = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      switch (e.key) {
        case "ArrowRight":
        case "PageDown":
        case " ":
          e.preventDefault();
          setI((v) => Math.min(n - 1, v + 1));
          break;
        case "ArrowLeft":
        case "PageUp":
          e.preventDefault();
          setI((v) => Math.max(0, v - 1));
          break;
        case "Home":
          setI(0);
          break;
        case "End":
          setI(n - 1);
          break;
        case "f":
        case "F":
          if (document.fullscreenElement) void document.exitFullscreen();
          else void document.documentElement.requestFullscreen?.();
          break;
        case "n":
        case "N":
          setNotatkiOtwarte((v) => !v);
          break;
        case "t":
        case "T":
          setBieg((v) => !v);
          break;
        case "r":
        case "R":
          setBieg(false);
          setSek(0);
          break;
      }
    };
    window.addEventListener("keydown", klawisz);
    return () => window.removeEventListener("keydown", klawisz);
  }, [n]);

  // Pasek sterowania znika, gdy nikt nie rusza myszą.
  useEffect(() => {
    const pokaz = () => {
      ostatniRuch.current = Date.now();
      setWidocznyPasek(true);
    };
    const t = window.setInterval(() => {
      if (Date.now() - ostatniRuch.current > 2800) setWidocznyPasek(false);
    }, 600);
    pokaz();
    window.addEventListener("mousemove", pokaz);
    window.addEventListener("touchstart", pokaz);
    return () => {
      window.clearInterval(t);
      window.removeEventListener("mousemove", pokaz);
      window.removeEventListener("touchstart", pokaz);
    };
  }, []);

  const nota = notatki[i];
  const przekroczony = sek > LIMIT_SEK;

  return (
    <div
      className="fixed inset-0 flex flex-col overflow-hidden bg-tlo select-none"
      onTouchStart={(e) => (dotyk.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (dotyk.current === null) return;
        const d = e.changedTouches[0].clientX - dotyk.current;
        if (Math.abs(d) > 60) idz(i + (d < 0 ? 1 : -1));
        dotyk.current = null;
      }}
    >
      <div ref={okno} className="relative min-h-0 flex-1 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 origin-center"
          style={{
            width: W,
            height: H,
            transform: `translate(-50%, -50%) scale(${skala})`,
          }}
        >
          <div key={i} className="slajd h-full w-full" role="group" aria-roledescription="slajd" aria-label={`Slajd ${i + 1} z ${n}`}>
            {slajdy[i]}
          </div>
        </div>
      </div>

      {notatkiOtwarte && nota ? (
        <aside
          aria-label="Notatki prowadzącego"
          className="grid shrink-0 gap-6 border-t border-obrys bg-karta px-6 py-4 text-tusz md:grid-cols-[1fr_auto]"
        >
          <div className="min-w-0">
            <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.8125rem] text-tusz-3">
              <span className="font-semibold text-tusz">Mówi: {nota.kto}</span>
              <span>Czas: {nota.czas}</span>
              <span>Kryterium: {nota.kryterium}</span>
            </p>
            <ul className="mt-2 list-disc space-y-0.5 pl-5 text-[0.9375rem] leading-snug text-tusz-2">
              {nota.punkty.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
          <div className="text-right">
            <p className={`font-mono text-[2rem] leading-none font-medium tabular-nums ${przekroczony ? "text-nadruk" : "text-tusz"}`}>
              {mmss(sek)} <span className="text-[1rem] text-tusz-3">/ {mmss(LIMIT_SEK)}</span>
            </p>
            <p className="mt-1.5 text-[0.75rem] text-tusz-3">T start/stop · R reset · N ukryj</p>
          </div>
        </aside>
      ) : null}

      {/* Pasek sterowania */}
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center transition-opacity duration-500 ${
          widocznyPasek ? "opacity-100" : "opacity-0"
        } ${notatkiOtwarte ? "hidden" : ""}`}
      >
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-obrys bg-karta/90 px-3 py-2 shadow-lg backdrop-blur">
          <button
            type="button"
            onClick={() => idz(i - 1)}
            disabled={i === 0}
            aria-label="Poprzedni slajd"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-tlo text-tusz transition-colors hover:bg-akcent-mgla disabled:opacity-30"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
          </button>
          <ol className="flex items-center gap-1.5" aria-label="Slajdy">
            {slajdy.map((_, k) => (
              <li key={k}>
                <button
                  type="button"
                  onClick={() => idz(k)}
                  aria-label={`Przejdź do slajdu ${k + 1}`}
                  aria-current={k === i ? "true" : undefined}
                  className={`block h-2.5 rounded-full transition-all duration-300 ${
                    k === i ? "w-7 bg-akcent" : "w-2.5 bg-obrys-mocny hover:bg-tusz-3"
                  }`}
                />
              </li>
            ))}
          </ol>
          <button
            type="button"
            onClick={() => idz(i + 1)}
            disabled={i === n - 1}
            aria-label="Następny slajd"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-tusz text-white transition-colors hover:bg-akcent disabled:opacity-30"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
          <span className="hidden pr-2 pl-1 text-[0.75rem] text-tusz-3 sm:block">F pełny ekran · N notatki</span>
        </div>
      </div>
    </div>
  );
}
