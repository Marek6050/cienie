"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Opóźnienie w ms — do kaskady kart w jednej siatce. */
  opoznienie?: number;
  as?: ElementType;
};

/**
 * Karta wsuwa się i rozjaśnia, gdy wchodzi w kadr. Stan wyjściowy włącza
 * dopiero html[data-js], więc bez JS wszystko jest od razu widoczne.
 */
export function Pojawianie({
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
      el.dataset.pojaw = "widoczny";
      return;
    }

    let timer = 0;
    const obserwator = new IntersectionObserver(
      (wpisy) => {
        for (const wpis of wpisy) {
          if (!wpis.isIntersecting) continue;
          timer = window.setTimeout(() => {
            el.dataset.pojaw = "widoczny";
          }, opoznienie);
          obserwator.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    obserwator.observe(el);
    return () => {
      window.clearTimeout(timer);
      obserwator.disconnect();
    };
  }, [opoznienie]);

  return (
    <Tag ref={ref} data-pojaw="ukryty" className={className}>
      {children}
    </Tag>
  );
}
