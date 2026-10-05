import Link from "next/link";
import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { IkonaStrzalka, IkonaMapa, IkonaWarstwy, IkonaPieczec } from "@/components/ikony";

const ADRESACI = [
  { href: "/dla-instytucji#muzea", Ikona: IkonaWarstwy, tytul: "Muzea", tresc: "Nowa warstwa narracji wokół wystawy i zbiorów." },
  { href: "/dla-instytucji#domy-kultury", Ikona: IkonaMapa, tytul: "Domy kultury", tresc: "Lokalna historia opowiedziana z mieszkańcami." },
  { href: "/dla-instytucji#miejsca-pamieci", Ikona: IkonaPieczec, tytul: "Pomniki i miejsca pamięci", tresc: "Opowieść, którą zwiedzający zabiera ze sobą na telefonie." },
];

/** Landing nie niesie całej oferty dla instytucji — odsyła na osobną stronę. */
export function InstytucjeZajawka() {
  return (
    <Sekcja id="dla-instytucji">
      <Siatka>
        <Karta span="lg:col-span-5" ton="ciemna" className="flex flex-col justify-between gap-12 sm:p-10">
          <div>
            <span className="etykieta etykieta-biala">Dla instytucji</span>
            <h2 className="h-sekcji mt-6 text-[clamp(1.875rem,3.6vw,2.875rem)]">
              Masz historię, którą warto opowiedzieć inaczej?
            </h2>
            <p className="mt-5 max-w-[44ch] text-[1rem] leading-[1.7] text-white/75">
              Na tym samym silniku budujemy opowieści dla muzeów, domów kultury
              i miejsc pamięci, na podstawie Waszych zbiorów, archiwów i relacji.
            </p>
          </div>
          <Link href="/dla-instytucji" className="przycisk przycisk-bialy self-start">
            Zobacz ofertę dla instytucji
            <IkonaStrzalka className="h-4 w-4" />
          </Link>
        </Karta>

        <div className="grid gap-3 sm:gap-4 lg:col-span-7">
          {ADRESACI.map((a, i) => (
            <Karta key={a.tytul} href={a.href} opoznienie={i * 80} className="flex items-center gap-5 !py-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-akcent-mgla text-akcent">
                <a.Ikona className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <h3 className="h-karty text-[1.1875rem] text-tusz">{a.tytul}</h3>
                <p className="mt-1 text-[0.9375rem] text-tusz-2">{a.tresc}</p>
              </div>
              <IkonaStrzalka className="h-5 w-5 shrink-0 text-tusz-3" />
            </Karta>
          ))}
        </div>
      </Siatka>
    </Sekcja>
  );
}
