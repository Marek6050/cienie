"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Opóźnienie w ms — do orkiestracji wewnątrz jednej sekcji. */
  opoznienie?: number;
  as?: ElementType;
};

/**
 * Przebicie przez kalkę. Treść pojawia się najpierw jako słaby odcisk nacisku,
 * po chwili dochodzi tusz. Stan wyjściowy jest ustawiony w HTML, więc bez JS
 * (i przy prefers-reduced-motion) od razu widać wersję końcową.
 */
export function Przebicie({
  children,
  className,
  opoznienie = 0,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.kalka = "tusz";
      return;
    }

    let timer = 0;
    const obserwator = new IntersectionObserver(
      (wpisy) => {
        for (const wpis of wpisy) {
          if (!wpis.isIntersecting) continue;
          timer = window.setTimeout(() => {
            el.dataset.kalka = "tusz";
          }, opoznienie);
          obserwator.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );

    obserwator.observe(el);
    return () => {
      window.clearTimeout(timer);
      obserwator.disconnect();
    };
  }, [opoznienie]);

  return (
    <Tag ref={ref} data-kalka="odcisk" className={className}>
      {children}
    </Tag>
  );
}
