import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const ROZSZERZENIA = ["webp", "jpg", "jpeg", "png", "avif"];

function znajdzPlik(nazwa: string): string | null {
  for (const ext of ROZSZERZENIA) {
    const sciezka = path.join(process.cwd(), "public", "grafiki", `${nazwa}.${ext}`);
    if (fs.existsSync(sciezka)) return `/grafiki/${nazwa}.${ext}`;
  }
  return null;
}

type Props = {
  /** Nazwa pliku bez rozszerzenia, w public/grafiki/. */
  nazwa: string;
  /** Numer promptu z PROMPTY-GRAFIK.md. */
  nr: string;
  /** Proporcje, w jakich grafikę należy wygenerować — pokazuje je zaślepka. */
  proporcje: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Wypełnia rodzica (rodzic ma być `relative` i mieć wysokość). Dopóki w
 * public/grafiki/ nie ma pliku o tej nazwie, pokazuje zaślepkę z numerem
 * promptu; po wrzuceniu pliku (webp/jpg/png/avif) sama podmienia się na obraz.
 */
export function Grafika({
  nazwa,
  nr,
  proporcje,
  alt,
  sizes = "(max-width: 1024px) 100vw, 640px",
  priority,
  className = "",
}: Props) {
  const src = znajdzPlik(nazwa);

  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div className="miejsce-grafiki" role="img" aria-label={`Miejsce na grafikę: ${alt}`}>
      <svg
        viewBox="0 0 24 24"
        className="h-7 w-7 opacity-70"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="3" />
        <circle cx="9" cy="10" r="1.75" />
        <path d="m21 16-5-5-8 8" />
      </svg>
      <span className="font-mono text-[0.6875rem] font-medium tracking-[0.12em] uppercase">
        Grafika {nr} · {proporcje}
      </span>
      <span className="max-w-[28ch] text-[0.75rem] leading-snug opacity-70">
        public/grafiki/{nazwa}.webp
      </span>
    </div>
  );
}
