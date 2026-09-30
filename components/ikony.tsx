/**
 * Zestaw ikon rysowanych ręcznie — jedna grubość kreski (1.5), jedna siatka
 * 24×24, bez wypełnień. Żadnych emoji ani glifów Unicode w roli ikony.
 */

type Props = React.SVGProps<SVGSVGElement>;

function Ikona({ children, ...rest }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const IkonaTelefon = (p: Props) => (
  <Ikona {...p}>
    <rect x="7" y="2.75" width="10" height="18.5" />
    <path d="M10.5 18.5h3" />
  </Ikona>
);

export const IkonaZrodlo = (p: Props) => (
  <Ikona {...p}>
    <path d="M5 2.75h9l5 5v13.5H5z" />
    <path d="M14 2.75V8h5" />
    <path d="M8 12.5h8M8 16h5" />
  </Ikona>
);

export const IkonaRozgalezienie = (p: Props) => (
  <Ikona {...p}>
    <path d="M12 21.25V13l6-5.5" />
    <path d="M12 13 6 7.5" />
    <circle cx="6" cy="5" r="2.25" />
    <circle cx="18" cy="5" r="2.25" />
  </Ikona>
);

export const IkonaZegar = (p: Props) => (
  <Ikona {...p}>
    <circle cx="12" cy="12" r="9.25" />
    <path d="M12 6.5V12l4 2.5" />
  </Ikona>
);

export const IkonaMapa = (p: Props) => (
  <Ikona {...p}>
    <path d="m2.75 6 6-3 6.5 3 6-3v15l-6 3-6.5-3-6 3z" />
    <path d="M8.75 3v15M15.25 6v15" />
  </Ikona>
);

export const IkonaOs = (p: Props) => (
  <Ikona {...p}>
    <path d="M2.75 12h18.5" />
    <path d="M7 8.5v7M12 6v12M17 8.5v7" />
  </Ikona>
);

export const IkonaTeczka = (p: Props) => (
  <Ikona {...p}>
    <path d="M2.75 6.5h7l2 2.5h9.5v11.25H2.75z" />
    <path d="M2.75 6.5V3.75h6.5V6.5" />
  </Ikona>
);

export const IkonaOsoby = (p: Props) => (
  <Ikona {...p}>
    <circle cx="9" cy="8" r="3.25" />
    <path d="M2.75 20.25c0-3.6 2.8-5.75 6.25-5.75s6.25 2.15 6.25 5.75" />
    <path d="M16 5.25a3.25 3.25 0 0 1 0 6.5M17.5 14.9c2.3.7 3.75 2.6 3.75 5.35" />
  </Ikona>
);

export const IkonaKlucz = (p: Props) => (
  <Ikona {...p}>
    <circle cx="8" cy="8" r="4.25" />
    <path d="m11 11 9 9M17 17l-2 2M20 14l-2 2" />
  </Ikona>
);

export const IkonaStrzalka = (p: Props) => (
  <Ikona {...p}>
    <path d="M3.75 12h16.5M14 5.75 20.25 12 14 18.25" />
  </Ikona>
);

export const IkonaPieczec = (p: Props) => (
  <Ikona {...p}>
    <circle cx="12" cy="12" r="9.25" />
    <circle cx="12" cy="12" r="5.5" />
  </Ikona>
);

export const IkonaKoperta = (p: Props) => (
  <Ikona {...p}>
    <rect x="2.75" y="5" width="18.5" height="14" />
    <path d="m2.75 6.5 9.25 7 9.25-7" />
  </Ikona>
);

export const IkonaWyjscie = (p: Props) => (
  <Ikona {...p}>
    <path d="M14 2.75H3.75v18.5H14" />
    <path d="M10 12h10.25M16 7.75 20.25 12 16 16.25" />
  </Ikona>
);

export const IkonaPtaszek = (p: Props) => (
  <Ikona {...p}>
    <path d="m4 12.5 5.5 5.5L20 7" />
  </Ikona>
);

export const IkonaPlus = (p: Props) => (
  <Ikona {...p}>
    <path d="M12 4.75v14.5M4.75 12h14.5" />
  </Ikona>
);

export const IkonaKsiazka = (p: Props) => (
  <Ikona {...p}>
    <path d="M3.5 4.5h5.2c1.3 0 2.3.9 2.3 2v12c0-1.1-1-2-2.3-2H3.5v-12ZM20.5 4.5h-5.2c-1.3 0-2.3.9-2.3 2v12c0-1.1 1-2 2.3-2h5.2v-12Z" />
  </Ikona>
);

export const IkonaSluchawki = (p: Props) => (
  <Ikona {...p}>
    <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" />
    <path d="M4.5 13.5h3v6h-3v-6ZM16.5 13.5h3v6h-3v-6Z" />
  </Ikona>
);

export const IkonaNotatka = (p: Props) => (
  <Ikona {...p}>
    <path d="M5.5 3.5h13v17h-13v-17Z" />
    <path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
  </Ikona>
);

export const IkonaPytanie = (p: Props) => (
  <Ikona {...p}>
    <path d="M3.5 4.5h17v12h-10l-4.5 4v-4h-2.5v-12Z" />
    <path d="M9.6 8.6a2.4 2.4 0 1 1 2.4 2.4v1.4" />
  </Ikona>
);

export const IkonaLupa = (p: Props) => (
  <Ikona {...p}>
    <path d="M10.5 3.5a7 7 0 1 1 0 14 7 7 0 0 1 0-14Z" />
    <path d="m15.6 15.6 4.9 4.9" />
  </Ikona>
);

export const IkonaWykres = (p: Props) => (
  <Ikona {...p}>
    <path d="M3.5 20.5v-17M3.5 20.5h17" />
    <path d="M7.5 17.5v-5M12 17.5v-9M16.5 17.5v-6.5" />
  </Ikona>
);

export const IkonaWarstwy = (p: Props) => (
  <Ikona {...p}>
    <path d="m12 3.5 8.5 4.5-8.5 4.5L3.5 8 12 3.5Z" />
    <path d="m3.5 12.5 8.5 4.5 8.5-4.5" />
  </Ikona>
);
