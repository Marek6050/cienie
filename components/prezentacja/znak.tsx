import Image from "next/image";

/** Emblemat platformy — Cienie Rzeczypospolitej. Plik: public/Cienie Rzeczypospolitej – Emblemat Historii2.png */
export function ZnakPlatformy({ rozmiar = 96, className = "" }: { rozmiar?: number; className?: string }) {
  return (
    <Image
      src="/Cienie Rzeczypospolitej – Emblemat Historii2.png"
      alt="Cienie Rzeczypospolitej"
      width={rozmiar}
      height={rozmiar}
      className={`shrink-0 object-contain ${className}`}
      priority
    />
  );
}
