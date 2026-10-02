import Link from "next/link";
import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { IkonaKoperta, IkonaStrzalka } from "@/components/ikony";
import { KONTAKT } from "@/lib/kontakt";

export function Kontakt() {
  return (
    <Sekcja id="kontakt">
      <Siatka>
        <Karta span="lg:col-span-7" ton="ciemna" className="flex flex-col justify-between gap-12 sm:p-10">
          <div>
            <span className="etykieta etykieta-biala">Kontakt</span>
            <h2 className="h-sekcji mt-6 text-[clamp(2rem,4.2vw,3.25rem)]">Masz pytanie? Porozmawiajmy.</h2>
            <p className="mt-5 max-w-[52ch] text-[1rem] leading-[1.7] text-white/75">
              Chcesz wykorzystać materiał na lekcji, stworzyć historię o innym
              wydarzeniu albo zgłosić uwagę merytoryczną? Każde zgłoszenie
              czytamy i traktujemy indywidualnie.
            </p>
          </div>
          <div>
            <a
              href={`mailto:${KONTAKT.mail}`}
              className="inline-flex items-center gap-3 text-[1.125rem] font-semibold underline decoration-white/30 underline-offset-[0.35em] hover:decoration-white sm:text-[1.5rem]"
            >
              <IkonaKoperta className="h-6 w-6 shrink-0" />
              {KONTAKT.mail}
            </a>
            <p className="mt-4 text-[0.875rem] text-white/60">
              Uwagi merytoryczne i źródła:{" "}
              <a href={`mailto:${KONTAKT.mailTresci}`} className="text-white/85 underline underline-offset-4">
                {KONTAKT.mailTresci}
              </a>
            </p>
          </div>
        </Karta>

        <div className="flex lg:col-span-5">
          <Karta ton="akcent" opoznienie={160} className="flex flex-col justify-between gap-10 sm:p-10">
            <div>
              <h3 className="h-sekcji text-[1.75rem]">Masz już konto?</h3>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/85">Zaloguj się do panelu, aby przypisać temat klasie albo kontynuować lekcję.</p>
            </div>
            <Link href="/logowanie" className="przycisk przycisk-bialy self-start">
              Wejdź do panelu
              <IkonaStrzalka className="h-4 w-4" />
            </Link>
          </Karta>
        </div>
      </Siatka>
    </Sekcja>
  );
}
