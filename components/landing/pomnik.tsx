import Image from "next/image";
import { Przebicie } from "@/components/przebicie";

/**
 * Jedna sekcja bierze cały ekran. Bez karty, bez siatki, bez niczego obok.
 */
export function Pomnik() {
  return (
    <section
      aria-label="Pomnik Tragedii Górnośląskiej w Bytomiu"
      className="relative isolate min-h-[78svh] overflow-hidden border-t border-linia sm:min-h-[88svh]"
    >
      <Image
        src="/archiwum/pomnik-bytom.webp"
        alt="Fragment pomnika Tragedii Górnośląskiej w Bytomiu — rzeźbiona grupa postaci z uniesionymi ramionami."
        fill
        sizes="100vw"
        className="duotone object-cover object-center"
      />
      <div className="duotone-warstwa" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-kalka via-kalka/35 to-kalka/70"
      />

      <div className="relative z-10 flex min-h-[78svh] items-end px-5 pb-14 sm:min-h-[88svh] sm:px-8 sm:pb-20">
        <div className="mx-auto w-full max-w-[1240px]">
          <Przebicie
            as="p"
            className="max-w-none font-display sm:max-w-[19ch] text-[clamp(1.625rem,3.9vw,3rem)] leading-[1.04] font-extrabold tracking-[-0.03em] text-przebicie text-balance [font-stretch:115%]"
          >
            Z Górnego Śląska wywieziono dziesiątki tysięcy ludzi. Przez
            dziesięciolecia nie wolno było o tym mówić.
          </Przebicie>

          <p className="sygnatura mt-6 max-w-[52ch] leading-relaxed">
            Pomnik Tragedii Górnośląskiej w Bytomiu · fot. z materiałów projektu
          </p>
        </div>
      </div>
    </section>
  );
}
