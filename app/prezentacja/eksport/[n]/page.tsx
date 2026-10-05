import { notFound } from "next/navigation";
import { WSZYSTKIE_SLAJDY } from "@/components/prezentacja/lista";

/** Pojedynczy slajd w stałym rozmiarze 1920×1080, bez nawigacji. Używa go scripts/eksport-prezentacji.mjs. */
export default async function EksportSlajdu({ params }: { params: Promise<{ n: string }> }) {
  const { n } = await params;
  const poz = WSZYSTKIE_SLAJDY[Number(n) - 1];
  if (!poz) notFound();
  return (
    <div className="fixed top-0 left-0 overflow-hidden bg-tlo" style={{ width: 1920, height: 1080 }}>
      {poz.slajd}
    </div>
  );
}
