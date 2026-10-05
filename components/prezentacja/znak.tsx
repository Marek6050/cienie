/** Znak platformy: dwa nachodzące koła, czyli „cień”. Zastępuje orła z logo na slajdach. */
export function ZnakPlatformy({ rozmiar = 96 }: { rozmiar?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={rozmiar} height={rozmiar} aria-hidden="true" className="shrink-0">
      <rect width="64" height="64" rx="18" fill="#5b47e0" />
      <circle cx="39" cy="35" r="15" fill="#ffffff" fillOpacity="0.35" />
      <circle cx="27" cy="29" r="15" fill="#ffffff" />
    </svg>
  );
}
