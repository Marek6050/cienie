import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { bazaDostepna } from "@/lib/baza";
import { tematyDlaUzytkownika, type TematZPostepem } from "@/lib/dane";
import { biezacaSesja } from "@/lib/sesja";
import { IkonaStrzalka, IkonaTeczka, IkonaZegar, IkonaZrodlo } from "@/components/ikony";
import { Komunikat, PasekScen, ZnacznikStatusu } from "@/components/panel/wskazniki";

export const metadata: Metadata = { title: "Wybór tematu" };

function pogrupuj(tematy: TematZPostepem[]) {
  const mapa = new Map<string, { tytul: string; tematy: TematZPostepem[] }>();
  for (const t of tematy) {
    const grupa = mapa.get(t.kurs_slug) ?? { tytul: t.kurs_tytul, tematy: [] };
    grupa.tematy.push(t);
    mapa.set(t.kurs_slug, grupa);
  }
  return [...mapa.entries()];
}

export default async function WyborTematu() {
  const sesja = await biezacaSesja();
  if (!sesja) return null;

  const stanBazy = await bazaDostepna();

  return (
    <div>
      <div>
        <span
          className="paragraf block text-[clamp(2.25rem,5.5vw,4.25rem)]"
          aria-hidden="true"
        >
          §01
        </span>
        <div className="mt-2">
          <h1 className="max-w-[24ch] font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.05] font-black tracking-[-0.03em] text-przebicie text-balance [font-stretch:125%]">
            Wybierz temat, od którego zaczynasz.
          </h1>
          <p className="mt-3 max-w-[56ch] text-[0.9375rem] leading-relaxed text-przebicie-2">
            {sesja.rola === "uczen"
              ? "To są tematy przypisane ci przez nauczyciela. Postęp zapisuje się automatycznie — możesz przerwać i wrócić."
              : "Tematy z kursów, do których masz dostęp. Postępy uczniów zobaczysz po wejściu w temat."}
          </p>
        </div>
      </div>

      <div className="mt-12">
        {!stanBazy.ok ? (
          <Komunikat ton="odmowa" tytul="Baza danych nie odpowiada">
            <p>
              Panel nie ma skąd wziąć listy tematów. Uruchom bazę i odśwież
              stronę:
            </p>
            <pre className="overflow-x-auto border border-nadruk/35 bg-kalka px-4 py-3 font-mono text-[0.8125rem] text-przebicie-2">
              npm run db:up{"\n"}npm run db:seed
            </pre>
            <p className="font-mono text-[0.75rem] text-przebicie-3">
              Szczegóły: {stanBazy.powod}
            </p>
          </Komunikat>
        ) : (
          <ListaTematow uzytkownikId={sesja.id} rola={sesja.rola} />
        )}
      </div>
    </div>
  );
}

async function ListaTematow({
  uzytkownikId,
  rola,
}: {
  uzytkownikId: number;
  rola: "uczen" | "nauczyciel" | "superadmin";
}) {
  const tematy = await tematyDlaUzytkownika(uzytkownikId, rola);

  if (tematy.length === 0) {
    return (
      <Komunikat tytul="Na razie pusto">
        <p>
          Nie masz jeszcze przypisanego żadnego tematu. Jeśli jesteś uczniem —
          poproś nauczyciela o dodanie do kursu. Jeśli prowadzisz platformę —
          opublikuj kurs i ustaw temat jako widoczny.
        </p>
        {rola === "superadmin" ? (
          <p>
            <Link
              href="/panel/admin/kursy"
              className="text-stempel-jasny underline decoration-stempel/50 underline-offset-[0.3em]"
            >
              Przejdź do kursów
            </Link>
          </p>
        ) : null}
      </Komunikat>
    );
  }

  return (
    <div className="space-y-14">
      {pogrupuj(tematy).map(([slug, grupa]) => (
        <section key={slug}>
          <h2 className="flex items-center gap-3 border-b border-linia pb-3 font-mono text-[0.6875rem] tracking-[0.18em] text-przebicie-2 uppercase">
            <IkonaTeczka className="h-4 w-4 text-przebicie-3" />
            {grupa.tytul}
            <span className="liczby ml-auto text-[0.625rem] text-przebicie-3">
              {grupa.tematy.length}
            </span>
          </h2>

          <ul className="mt-7 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {grupa.tematy.map((t) => (
              <li key={t.id}>
                <Teczka temat={t} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function Teczka({ temat }: { temat: TematZPostepem }) {
  const zrobione = temat.sceny_ukonczone ?? 0;
  const lacznie = temat.sceny_lacznie ?? temat.liczba_scen;
  const dostepny = temat.status === "gotowy";

  return (
    <article className="flex h-full flex-col border border-linia bg-kalka-2 transition-colors duration-200 hover:border-linia-mocna">
      <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-linia bg-kalka-3">
        {temat.obraz ? (
          <>
            <Image
              src={temat.obraz}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
              className="duotone object-cover"
            />
            <div className="duotone-warstwa" />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-kalka-2 via-transparent to-transparent"
            />
          </>
        ) : (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[repeating-linear-gradient(135deg,var(--color-linia)_0px,var(--color-linia)_1px,transparent_1px,transparent_9px)] opacity-60"
          />
        )}
        <span className="sygnatura absolute top-3 left-3 bg-kalka/80 px-2 py-1">
          {temat.slug}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[1.125rem] leading-tight font-extrabold tracking-[-0.01em] text-przebicie [font-stretch:110%]">
            {temat.tytul}
          </h3>
          <ZnacznikStatusu status={temat.status} />
        </div>

        {temat.streszczenie ? (
          <p className="mt-3 text-[0.875rem] leading-relaxed text-przebicie-2">
            {temat.streszczenie}
          </p>
        ) : null}

        <dl className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
          {temat.okres ? (
            <div className="flex items-center gap-2">
              <dt className="sr-only">Okres</dt>
              <dd className="sygnatura">{temat.okres}</dd>
            </div>
          ) : null}
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Czas</dt>
            <IkonaZegar className="h-3.5 w-3.5 text-przebicie-3" />
            <dd className="liczby font-mono text-[0.625rem] tracking-[0.12em] text-przebicie-3 uppercase">
              {temat.czas_min} min
            </dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="sr-only">Źródła</dt>
            <IkonaZrodlo className="h-3.5 w-3.5 text-przebicie-3" />
            <dd className="liczby font-mono text-[0.625rem] tracking-[0.12em] text-przebicie-3 uppercase">
              {temat.liczba_zrodel} źródeł
            </dd>
          </div>
        </dl>

        <div className="mt-5 border-t border-linia pt-5">
          <PasekScen zrobione={zrobione} lacznie={lacznie} />
        </div>

        <div className="mt-6 flex-1" />

        <Link
          href={`/panel/temat/${temat.slug}`}
          className={`stempel w-full justify-center ${dostepny ? "" : "stempel-lekki"}`}
        >
          {dostepny
            ? zrobione > 0
              ? "Wróć do tematu"
              : "Otwórz temat"
            : "Zobacz opis"}
          <IkonaStrzalka className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
