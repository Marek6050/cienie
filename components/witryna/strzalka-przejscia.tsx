/**
 * Strzałka przejścia: linia z gradientem kończąca się okrągłym grotem.
 * Poziomo domyślnie; `pionowo` obraca ją o 90°, żeby zeszła w dół na telefonie.
 */
export function StrzalkaPrzejscia({
  className = "",
  pionowo,
}: {
  className?: string;
  pionowo?: boolean;
}) {
  const svg = (
    <svg
      viewBox="0 0 120 44"
      aria-hidden="true"
      focusable="false"
      className={
        pionowo
          ? "absolute top-1/2 left-1/2 h-10 w-28 -translate-x-1/2 -translate-y-1/2 rotate-90"
          : "h-10 w-28"
      }
      fill="none"
    >
      <defs>
        <linearGradient id="strzalka-gradient" x1="0" x2="1">
          <stop offset="0" stopColor="#5b47e0" stopOpacity="0" />
          <stop offset="1" stopColor="#5b47e0" />
        </linearGradient>
      </defs>
      <path d="M2 22h68" stroke="url(#strzalka-gradient)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="94" cy="22" r="20" fill="currentColor" />
      <path d="M86 22h16M96 15l7 7-7 7" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  // Obrócony SVG zachowuje swój poziomy rozmiar w układzie — pionowa wersja
  // dostaje więc własne pudełko 40×112 px, żeby nie nachodzić na sąsiadów.
  return pionowo ? (
    <span className={`relative block h-28 w-10 shrink-0 ${className}`}>{svg}</span>
  ) : (
    <span className={`block shrink-0 ${className}`}>{svg}</span>
  );
}
