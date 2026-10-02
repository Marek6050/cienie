import type { Metadata } from "next";
import Link from "next/link";
import { IkonaStrzalka } from "@/components/ikony";

export const metadata: Metadata = {
  title: "Materiały dla nauczycieli",
  description:
    "Materiały pomocnicze dla nauczycieli, z których w przyszłości będzie można korzystać przy pracy z interaktywnymi opowieściami historycznymi.",
};

export default function MaterialyDlaNauczycieli() {
  return (
    <div className="kalka min-h-svh">
      <header className="border-b border-linia px-5 py-4 sm:px-8">
        <div className="mx-auto w-full max-w-[1240px]">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.16em] text-przebicie-3 uppercase transition-colors duration-200 hover:text-przebicie"
          >
            <IkonaStrzalka className="h-3.5 w-3.5 rotate-180" />
            Cienie Rzeczypospolitej
          </Link>
        </div>
      </header>

      <main className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto w-full max-w-[900px]">
          <span
            className="paragraf block text-[clamp(2.5rem,6.5vw,5rem)]"
            aria-hidden="true"
          >
            §00
          </span>

          <h1 className="mt-3 max-w-[22ch] font-display text-[clamp(1.9rem,3vw,3rem)] leading-[1.02] font-black tracking-[-0.03em] text-przebicie text-balance [font-stretch:125%]">
            Materiały pomocnicze dla nauczycieli.
          </h1>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-3 font-mono text-[0.6875rem] tracking-[0.14em] text-przebicie uppercase underline decoration-linia-mocna transition-colors duration-200 hover:text-stempel-jasny hover:decoration-stempel"
            >
              Powrót na stronę główną
              <IkonaStrzalka className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
