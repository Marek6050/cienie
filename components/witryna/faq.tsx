export type PytanieFaq = { pytanie: string; odpowiedz: React.ReactNode };

/** Akordeon na natywnym <details> — działa bez JS i z klawiatury. */
export function ListaFaq({ pozycje }: { pozycje: PytanieFaq[] }) {
  return (
    <div className="divide-y divide-obrys">
      {pozycje.map((p) => (
        <details
          key={p.pytanie}
          name="faq"
          className="faq-pozycja group"
        >
          <summary className="flex items-center justify-between gap-5 py-5 text-left">
            <span className="h-karty text-[1.0625rem] text-tusz sm:text-[1.1875rem]">
              {p.pytanie}
            </span>
            <span
              aria-hidden="true"
              className="faq-plus flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-tlo text-tusz transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </summary>
          <div className="max-w-[62ch] pr-12 pb-6 text-[1rem] leading-[1.7] text-tusz-2">
            {p.odpowiedz}
          </div>
        </details>
      ))}
    </div>
  );
}
