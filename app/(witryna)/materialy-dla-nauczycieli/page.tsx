import type { Metadata } from "next";
import Link from "next/link";
import { Sekcja } from "@/components/witryna/sekcja";
import { Karta } from "@/components/witryna/karta";
import { IkonaStrzalka } from "@/components/ikony";

export const metadata: Metadata = {
  title: "Materiały dla nauczycieli",
  description:
    "Materiały pomocnicze dla nauczycieli, z których w przyszłości będzie można korzystać przy pracy z interaktywnymi opowieściami historycznymi.",
};

export default function MaterialyDlaNauczycieli() {
  return (
    <Sekcja className="pt-8">
      <Karta className="sm:p-12">
        <span className="etykieta">Dla nauczycieli</span>
        <h1 className="h-sekcji mt-6 max-w-[22ch] text-[clamp(2rem,4vw,3.25rem)] text-tusz">
          Materiały pomocnicze dla nauczycieli.
        </h1>
        <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-tusz-2">
          W przyszłości znajdziesz tu materiały, z których skorzystasz przy
          pracy z interaktywnymi opowieściami historycznymi.
        </p>
        <Link href="/" className="przycisk mt-10">
          Powrót na stronę główną
          <IkonaStrzalka className="h-4 w-4" />
        </Link>
      </Karta>
    </Sekcja>
  );
}
