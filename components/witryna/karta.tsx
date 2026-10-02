import Link from "next/link";
import type { ReactNode } from "react";
import { Pojawianie } from "./pojawianie";

const TONY = {
  biala: "",
  akcent: "karta-akcent",
  mgla: "karta-mgla",
  piasek: "karta-piasek",
  szalwia: "karta-szalwia",
  ciemna: "karta-ciemna",
} as const;

type Props = {
  children: ReactNode;
  /** Klasy siatki, np. „lg:col-span-7 lg:row-span-2”. */
  span?: string;
  ton?: keyof typeof TONY;
  /** Karta bez wcięcia — dla kart, w których grafika sięga krawędzi. */
  bezWciecia?: boolean;
  opoznienie?: number;
  className?: string;
  /** Z `href` cała karta jest linkiem. */
  href?: string;
  id?: string;
};

/** Jedna karta bento: wsuwa się przy wejściu w kadr, wypełnia komórkę siatki. */
export function Karta({
  children,
  span = "",
  ton = "biala",
  bezWciecia,
  opoznienie,
  className = "",
  href,
  id,
}: Props) {
  const klasy = `karta ${TONY[ton]} ${bezWciecia ? "karta-bez-wciecia" : ""} h-full w-full ${className}`;
  return (
    <Pojawianie className={`flex ${span}`} opoznienie={opoznienie}>
      {href ? (
        <Link href={href} id={id} className={`${klasy} block`}>
          {children}
        </Link>
      ) : (
        <div id={id} className={klasy}>
          {children}
        </div>
      )}
    </Pojawianie>
  );
}

/** Siatka bento: 1 kolumna na telefonie, 12 od lg. */
export function Siatka({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-12 ${className}`}>
      {children}
    </div>
  );
}
