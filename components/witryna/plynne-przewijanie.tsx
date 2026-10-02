"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

/**
 * Płynne przewijanie (Lenis) dla publicznej witryny. Przy
 * prefers-reduced-motion nie robi nic — przeglądarka przewija po swojemu.
 * Odnośniki #kotwice obsługuje sam Lenis, z odsunięciem pod pływającą nawigację.
 */
export function PlynnePrzewijanie() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.09,
      wheelMultiplier: 0.95,
      anchors: { offset: -96 },
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
