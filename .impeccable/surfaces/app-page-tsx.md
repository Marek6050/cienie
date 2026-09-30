---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

## Scope

Publiczny landing platformy „Cienie Rzeczypospolitej" (`app/page.tsx` + komponenty sekcji). Visitor mode: **Persuade**.

Odbiorca: nauczyciel historii planujący lekcję o Tragedii Górnośląskiej; wtórnie edukator muzealny szukający silnika pod własną opowieść; uczeń trafia tu z linku i musi od razu znaleźć logowanie.
Zadanie: zrozumieć czym to jest w jednym zdaniu, uwierzyć że jest zrobione ze źródeł, kliknąć „wypróbuj historię"; logowanie jest akcją podrzędną, nie równorzędną.
Dowód, którym dysponujemy: gotowe MVP „Cisza nad Raszową" (sceny roleplay, oś czasu z datami i liczbami, mapa, minigry, quiz, słowniczek), realny materiał archiwalny (rozkaz GKO 6.02.1945, konferencja jałtańska, pomnik w Bytomiu, fotografie deportacji), autorzy z ZSTiO Kędzierzyn-Koźle.
Ograniczenia: brak referencji szkół, wdrożeń, cennika i danych o skuteczności — nie wolno ich wymyślać. Kontakt to oznaczone placeholdery.

## Direction contract

**THESIS.** Deportacje zaczęły się od kartki papieru — rozkazu, który zmieścił się na jednej stronie. Ta strona jest odpowiedzią na tamtą kartkę, złożoną w jej własnej gramatyce: paragrafy, rozdzielnik, stempel. Odrzuca układ, który ta kategoria wysyła zawsze — jasny hero ze zrzutem produktu w ramce laptopa, trzy kafelki z ikonkami, pasek logotypów szkół — i odrzuca jego przewidywalne przeciwieństwo, czyli sepiowy pastisz „historyczny" z podartym papierem i czcionką maszyny do pisania na kremowym tle.

**OWN-WORLD.** Grunt to kalka maszynowa, nie papier: granatowoczarna (`#0C0E14`), z kierunkowym połyskiem i włóknem. Tekst przychodzi przez nią jak przebicie — indygo (`#6E78D6`) w nagłówkach, przygaszone w tekście. Fiolet anilinowy pieczęci (`#7E2E96`) ma dokładnie jedno znaczenie: platforma działa (stan aktywny, zaznaczenie, akcja główna). Czerwień nadruku (`#C8202A`) ma dokładnie jedno znaczenie: nadruk historyczny, klauzula, data — nigdy stan interfejsu. Przebitka (`#D9D3C6`), jasna cienka bibułka, jest jedynym jasnym materiałem na stronie i występuje wyłącznie tam, gdzie leży materiał źródłowy albo długi tekst do czytania. Krój: Archivo (wariant zmienny, oś szerokości) — Expanded Black do mas typograficznych, zwykła szerokość do tekstu; Azeret Mono do rejestru dokumentowego: sygnatury, daty, etykiety, numery paragrafów. Komponenty: brak zaokrągleń poza 2px, ramki są liniami dokumentu o grubości 1px i 3px, przyciski główne są stemplami (prostokątny kontur, rotacja −1.5°, prostuje się i wybija tusz przy naciśnięciu), pola formularza to linie wpisu z podkreśleniem, nie boxy. Siatka dokumentu jest narysowana: lewy margines z numeracją wierszy biegnie przez całą stronę.

**STORY.** Odwiedzający rozumie w jednym zdaniu, że to platforma z interaktywnymi opowieściami historycznymi dla szkół, opartymi na źródłach, z kreatorem do budowania kolejnych. Wierzy w to, bo widzi prawdziwy dokument z 6 lutego 1945 zestawiony z tym, co platforma z nim robi, oraz działającą produkcję, nie zapowiedź. Robi jedno z dwóch: wchodzi w demonstrację albo loguje się do panelu. Muzeum i instytucja widzą osobny, wyraźny paragraf o tym, że silnik przenosi się na inną historię.

**FIRST VIEWPORT.** Pełnoekranowa kalka. Po lewej pionowa szyna sygnatury na całą wysokość (szer. 68px): wordmark obrócony o 90°, rejestr klauzul 01–09, pod nim `DOK. 01 / 2026`. Główna kolumna otwiera się numerem `§01` w Archivo Expanded Black w skali clamp(2.5rem, 7vw, 6rem), pracującym jako masa; kickera nad nagłówkiem nie ma i nie będzie. Pod nim H1 w dwóch–trzech wierszach: „Historia, w której każda decyzja ma konsekwencje." Lead w przebitkowej szarości, maks. 56 znaków w wierszu, otwarty nazwą platformy. Poniżej jedna akcja główna — stempel `WYPRÓBUJ HISTORIĘ` (fiolet, rotacja −1.5°) — a pod nią, nie obok, dopisek o fragmencie „Ciszy nad Raszową" i dopiero potem `Masz już konto? Zaloguj się →` w rejestrze mono. Po prawej, od ~58% szerokości, jedyny jasny obiekt na ekranie: arkusz przebitki pod kątem −1.2° z notą „Status źródła", przystemplowany fioletem, z czerwoną banderolą klauzuli. Pod pierwszym ekranem pas rozdzielnika (`NAUCZYCIELE · UCZNIOWIE · MUZEA · INSTYTUCJE PAMIĘCI`), a za nim rejestr sześciu korzyści na liniach włosowych — 1 / 2 / 3 kolumny, wiersze bez tła.

**SEKCJE.** §01 hero · §02 od odbiorcy do uczestnika (zestawienie lekcji tradycyjnej z interaktywną, zwrotnica pośrodku) · §03 jak to działa (pięciokrokowa ścieżka lekcji + czego uczy się uczeń) · §04 w środku historii (pięć kadrów z materiału produkcyjnego) · §05 „Cisza nad Raszową" (metryka, co czeka w środku, suwak wtedy/dziś) · pomnik na pełną szerokość · §06 metodologia źródeł w pięciu etapach · §07 współpraca (ścieżka źródła → metodologia → narracja) · §08 kim jesteśmy (trzy filary, zespół, puenta) · §09 kontakt.

**FORM.** Kierunek ROZKAZ — rozkaz operacyjny 1945 jako system wizualny (rozdzielnik, kalka, stempel, numerowane paragrafy). Pozycja 7 na mojej uporządkowanej liście siedmiu ugruntowanych kandydatów; przypisany przez roll. Seed key: `50f0aaf3`. Podniesienia, każde z nazwiskiem dawcy: **wstęga proweniencji** → widoczny status źródła (fakt potwierdzony / rekonstrukcja / dramatyzacja trzema grubościami pisma); **burza alfabetu** → typografia jako masa, nie ozdoba; **oscyloskop** → narysowana siatka dokumentu, nic nie pływa; **stos HyperCard** → kreator pokazany na żywo, scena i jej definicja w jednej ramce; **pionowy feed** → jedna sekcja bierze cały ekran bez konkurencji; **warsztat Bauhausu** → kolor racjonowany rolą. Sygnaturowa interakcja: **przebicie przez kalkę** — nagłówek sekcji pojawia się najpierw jako słaby odcisk nacisku (rozmyty, niski kontrast), po 180 ms dochodzi tusz; raz na sekcję, zorkiestrowane, przy `prefers-reduced-motion` renderuje stan końcowy. Druga: stempel CTA prostuje się do 0° i wybija jednorazowy rozbłysk tuszu przy naciśnięciu.

**FINISH.** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment

Arkusz przebitki z rozkazem GKO obok tego, co platforma z nim robi — jedyna jasna rzecz na czarnej kalce, i jedyne miejsce na stronie, gdzie mówi głos z 1945 roku, zawsze w cudzysłowie i z datą.

## Unresolved

Kontakt (mail, kanały społecznościowe) — placeholdery oznaczone `TODO` w jednym pliku. Cennik, licencjonowanie i wdrożenia: nieobecne, nie do wymyślenia.
