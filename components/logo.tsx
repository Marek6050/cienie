import Image from "next/image";

/** Orzeł — znak platformy. Plik: public/logo.png (przezroczyste tło). */
export function Logo({ rozmiar = 32, className = "" }: { rozmiar?: number; className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={rozmiar}
      height={rozmiar}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    />
  );
}
