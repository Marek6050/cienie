import Image from "next/image";

/** Emblemat platformy — Cienie Rzeczypospolitej. Plik: public/Cienie Rzeczypospolitej – Emblemat Historii2.png */
export function Logo({ rozmiar = 32, className = "" }: { rozmiar?: number; className?: string }) {
  return (
    <Image
      src="/Cienie Rzeczypospolitej – Emblemat Historii2.png"
      alt="Cienie Rzeczypospolitej"
      width={rozmiar}
      height={rozmiar}
      className={`shrink-0 object-contain ${className}`}
      aria-hidden="true"
    />
  );
}
