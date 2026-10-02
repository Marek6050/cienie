import { Karta, Siatka } from "@/components/witryna/karta";
import { Sekcja } from "@/components/witryna/sekcja";
import { NaglowekSekcji } from "@/components/witryna/naglowek-sekcji";
import { IkonaZrodlo, IkonaOsoby, IkonaWarstwy } from "@/components/ikony";
import { ZESPOL } from "@/lib/kontakt";

const FILARY = [
  { Ikona: IkonaZrodlo, tytul: "Historia", tresc: "Pracujemy na źródłach, relacjach, dokumentach i materiałach archiwalnych." },
  { Ikona: IkonaOsoby, tytul: "Edukacja", tresc: "Projektujemy doświadczenia, które angażują ucznia i uruchamiają dyskusję." },
  { Ikona: IkonaWarstwy, tytul: "Technologia", tresc: "Budujemy interaktywne formy dostępne w przeglądarce, bez barier technicznych." },
];

export function ONas() {
  return (
    <Sekcja id="o-nas">
      <NaglowekSekcji
        etykieta="O nas"
        tytul="Łączymy historię, edukację i technologię."
        lead="Powstaliśmy z potrzeby opowiadania historii w sposób, który angażuje, ale nie upraszcza — projektowany z myślą o uczniach, nauczycielach i instytucjach kultury."
      />

      <Siatka>
        {FILARY.map((f, i) => (
          <Karta key={f.tytul} span="lg:col-span-4" opoznienie={i * 70}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-akcent-mgla text-akcent">
              <f.Ikona className="h-6 w-6" />
            </span>
            <h3 className="h-karty mt-8 text-[1.25rem] text-tusz">{f.tytul}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-tusz-2">{f.tresc}</p>
          </Karta>
        ))}

        <Karta span="lg:col-span-7" ton="piasek" className="sm:p-8">
          <h3 className="h-karty text-[1.25rem] text-tusz">Za projektem stoi zespół uczniów i nauczycieli</h3>
          <p className="mt-3 max-w-[56ch] text-[0.9375rem] leading-relaxed text-tusz-2">
            „Cisza nad Raszową” powstała w {ZESPOL.szkolaLokatyw}.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {ZESPOL.autorzy.map((a) => (
              <li key={a} className="rounded-full bg-white px-3.5 py-1.5 text-[0.875rem] text-tusz">{a}</li>
            ))}
          </ul>
        </Karta>

        <Karta span="lg:col-span-5" ton="akcent" opoznienie={100} className="flex items-center sm:p-8">
          <p className="h-sekcji text-[clamp(1.25rem,2.2vw,1.625rem)]">
            Nie chcemy zastępować lekcji historii. Chcemy dać nauczycielom nowe
            narzędzie do jej opowiadania.
          </p>
        </Karta>
      </Siatka>
    </Sekcja>
  );
}
