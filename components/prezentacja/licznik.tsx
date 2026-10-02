"use client";

import { useEffect, useState } from "react";

/** Liczba „dobija” do wartości końcowej — przy reduced-motion od razu pokazuje wynik. */
export function Licznik({
  do: cel,
  miejsca = 1,
  prefiks = "",
  czas = 1400,
}: {
  do: number;
  miejsca?: number;
  prefiks?: string;
  czas?: number;
}) {
  const [v, setV] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(cel);
      return;
    }
    let raf = 0;
    const start = performance.now() + 500;
    const krok = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - start) / czas));
      setV(cel * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(krok);
    };
    raf = requestAnimationFrame(krok);
    return () => cancelAnimationFrame(raf);
  }, [cel, czas]);

  return (
    <span className="tabular-nums">
      {prefiks}
      {v.toFixed(miejsca).replace(".", ",")}
    </span>
  );
}
