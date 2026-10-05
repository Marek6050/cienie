import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

const ROZSZERZENIA = ["webp", "jpg", "jpeg", "png", "avif"];

function znajdz(slug: string): string | null {
  for (const ext of ROZSZERZENIA) {
    if (fs.existsSync(path.join(process.cwd(), "public", "zespol", `${slug}.${ext}`))) {
      return `/zespol/${slug}.${ext}`;
    }
  }
  return null;
}

/**
 * Okrągłe zdjęcie członka zespołu. Wrzuć plik do public/zespol/<slug>.(jpg|png|webp)
 * — do tego czasu pokazuje inicjały.
 */
export function ZdjecieOsoby({
  slug,
  imie,
  rozmiar,
}: {
  slug: string;
  imie: string;
  rozmiar: number;
}) {
  const src = znajdz(slug);
  const inicjaly = imie
    .split(" ")
    .map((c) => c[0])
    .join("");

  return (
    <div
      className="relative shrink-0 overflow-hidden rounded-full bg-akcent-mgla ring-[6px] ring-white"
      style={{ width: rozmiar, height: rozmiar }}
    >
      {src ? (
        <Image src={src} alt={`Zdjęcie: ${imie}`} fill sizes={`${rozmiar}px`} className="object-cover object-[50%_22%]" />
      ) : (
        <div
          role="img"
          aria-label={`Miejsce na zdjęcie: ${imie}`}
          className="flex h-full w-full flex-col items-center justify-center gap-1 text-akcent-ciemny"
        >
          <span className="h-sekcji" style={{ fontSize: rozmiar * 0.32 }}>
            {inicjaly}
          </span>
          <span className="font-mono" style={{ fontSize: Math.max(11, rozmiar * 0.06) }}>
            zespol/{slug}.jpg
          </span>
        </div>
      )}
    </div>
  );
}
