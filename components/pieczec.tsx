/**
 * Pieczęć platformy odbita na materiale źródłowym. To jedyny znak na stronie,
 * który mówi „platforma wzięła ten dokument do ręki" — dlatego jest fioletowa
 * i dlatego stoi na przebitce, a nie obok niej.
 */
export function Pieczec({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label="Pieczęć redakcji: opracowanie źródłowe, 2026"
    >
      <defs>
        <path
          id="pieczec-obwod"
          d="M60 60 m-42 0 a42 42 0 1 1 84 0 a42 42 0 1 1 -84 0"
          fill="none"
        />
      </defs>

      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="square"
      >
        <circle cx="60" cy="60" r="52" />
        <circle cx="60" cy="60" r="46.5" strokeWidth={1.25} />
        <circle cx="60" cy="60" r="27" strokeWidth={1.25} />
        <path d="M33 60h-6M93 60h-6M60 33v-6M60 93v-6" strokeWidth={1.25} />
      </g>

      <text
        fill="currentColor"
        fontSize="8.4"
        fontWeight={700}
        letterSpacing="2.3"
        fontFamily="var(--font-mono)"
      >
        <textPath href="#pieczec-obwod" startOffset="50%" textAnchor="middle">
          CIENIE RZECZYPOSPOLITEJ · OPRACOWANIE ŹRÓDŁOWE ·
        </textPath>
      </text>

      <text
        x="60"
        y="56"
        fill="currentColor"
        fontSize="12"
        fontWeight={900}
        letterSpacing="0.6"
        textAnchor="middle"
        fontFamily="var(--font-display)"
      >
        SPR.
      </text>
      <text
        x="60"
        y="71"
        fill="currentColor"
        fontSize="12"
        fontWeight={900}
        letterSpacing="0.6"
        textAnchor="middle"
        fontFamily="var(--font-display)"
      >
        2026
      </text>
    </svg>
  );
}
