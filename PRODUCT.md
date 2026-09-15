# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 + TypeScript, MySQL 8 running in Docker Compose for the platform database. Stack named by the user, not delegated. Matches the existing MVP (`iprivate/`, package name `dialogi`) so code and components can move between the two.

## Users

- **Nauczyciele historii / WOS** (szkoła podstawowa i ponadpodstawowa, głównie Górny Śląsk i Opolszczyzna) — przygotowują lekcję o Tragedii Górnośląskiej, mają 45 minut, klasę z telefonami i brak gotowych materiałów interaktywnych. Zakładają kurs, przypisują tematy, patrzą kto przeszedł scenariusz.
- **Uczniowie 13–19 lat** — wchodzą na telefonie, logują się, wybierają temat przypisany przez nauczyciela, przechodzą interaktywną opowieść z wyborami moralnymi, quizem i osią czasu.
- **Muzea i instytucje pamięci** (odbiorca komercyjny, jeszcze bez potwierdzonego klienta) — chcą własną opowieść zbudowaną na tym samym silniku wokół innego wydarzenia historycznego.
- **Superadmin zespołu** — kuratoruje katalog kursów i tematów widocznych dla użytkowników, widzi wszystkich użytkowników platformy.

## Product Purpose

Platforma „Cienie Rzeczypospolitej" udostępnia szkołom interaktywne opowieści historyczne oparte na źródłach i pozwala tworzyć kolejne z gotowego kreatora. Pierwsza produkcja na platformie — „Cisza nad Raszową" — opowiada o deportacjach ludności górnośląskiej do ZSRR w 1945 roku. Sukces: nauczyciel prowadzi pełną lekcję na platformie bez własnego przygotowania materiałów, a uczeń kończy scenariusz i potrafi powiedzieć, co się wydarzyło i dlaczego.

## Positioning

Historia lokalna, słabo obecna w podręcznikach, podana jako grywalna opowieść z perspektywy pierwszej osoby — plus kreator, który pozwala instytucji zbudować własny scenariusz na tym samym silniku zamiast zamawiać grę od zera. Sąsiednie produkty oferują albo gotowe treści bez narzędzia, albo narzędzie bez zweryfikowanych historycznie treści.

## Operating Context

- Lekcja 45 minut, klasa 20–30 osób, urządzenia uczniów (telefon) lub pracownia komputerowa; scenariusz musi dać się przejść w kawałkach i wznowić.
- Nauczyciel loguje się do panelu przed lekcją, uczniowie logują się w klasie.
- Treść dotyczy zbrodni, deportacji i śmierci cywilów — ton musi wytrzymać ciężar tematu i nie może zsunąć się w estetykę rozrywkową.
- Materiał źródłowy: rozkaz GKO z 6 lutego 1945, ustalenia konferencji jałtańskiej, dane o deportacjach z Bytomia, Gliwic, Zabrza i kolejnych miast Górnego Śląska.

## Capabilities and Constraints

**Zbudowane w MVP (`iprivate/`, prywatne repo, branch `main`):**
- Roleplay: prolog + sceny 0–7 z kartami dialogu i wyborów (`components/DialogueCard.tsx`, `ChoicesCard.tsx`)
- System moralności śledzący konsekwencje wyborów (`lib/MoralityContext.tsx`, `MoralityIndicator.tsx`)
- Interaktywna mapa jako build Unity WebGL (`public/unity/tgipn_testy.*`) z osobnymi kontrolkami dotykowymi (`components/MobileMapControls.tsx`)
- Oś czasu z czterema wątkami: główny, ucieczki, losy indywidualne, statystyki — z datami, miastami i liczbami deportowanych
- Dwie minigry, w tym zestawienie fotografii „wtedy / dziś" (`public/obrazyMinigra2/stare|nowe`)
- Quiz, podsumowanie, słowniczek pojęć
- i18n PL/EN (`next-i18n-router` + `react-i18next`, `public/locales/pl.json`)

**Do zbudowania w tym repo:**
- Landing platformy (publiczny, polski)
- Logowanie do panelu na sesji serwerowej, MySQL 8 w Dockerze
- Ekran startowy platformy: wybór tematu przypisanego użytkownikowi
- Panel superadmina: kursy, tematy widoczne w widoku użytkownika, lista wszystkich użytkowników
- Model danych: kurs → tematy → gra, plus śledzenie postępów ucznia (ukończone sceny, wynik quizu) widoczne dla nauczyciela

**Nierozstrzygnięte:** cennik, licencjonowanie, wdrożenie produkcyjne, integracja logowania SSO/szkolnego, czy kreator scenariuszy dostaje UI w tej iteracji. **Prawa do materiału ikonograficznego:** fotografia archiwalna w porównaniu „wtedy / dziś" ma wypalony znak wodny `fotopolska.eu`; podpis go wymienia, ale licencja na użycie publiczne nie jest potwierdzona — do ustalenia albo do podmiany materiału przed publikacją.

## Brand Commitments

- Nazwa platformy: **Cienie Rzeczypospolitej**. Nazwa pierwszej produkcji: **Cisza nad Raszową** (wcześniej opisywana jako „Projekt nr 2 — Z Archiwum Wolności").
- Autorzy MVP: uczniowie Zespołu Szkół Technicznych i Ogólnokształcących w Kędzierzynie-Koźlu — Michał Kałamaga, Marek Garbacz, Marcin Kacperczyk, Jakub Witnik, Łukasz Gucwiński.
- Język interfejsu: polski (MVP ma też EN).

## Evidence on Hand

- Materiał wizualny w MVP: `public/obrazy/` (pomnik Tragedii Górnośląskiej w Bytomiu, deportacje, dworzec, kolej, Raszowa, rozkaz GKO, wkroczenie Armii Czerwonej), `public/timeline/konferencja.jpg`, `public/postacie/` (portrety bohaterów), `public/obrazyMinigra2/` (pary zdjęć wtedy/dziś).
- Realne dane historyczne w osi czasu MVP (daty, miasta, liczby deportowanych).
- **Nie istnieje i nie wolno wymyślać:** referencje szkół, wdrożenia muzealne, liczba użytkowników, opinie, nagrody, cennik, dane o skuteczności dydaktycznej.
- **Kontakt:** brak potwierdzonych danych — landing dostaje oznaczone placeholdery (mail + kanały społecznościowe) do podmiany w jednym miejscu.

## Product Principles

1. **Temat niesie ciężar.** Deportacje i śmierć cywilów — żadnego języka ani estetyki, która to zbagatelizuje.
2. **Źródło przed efektem.** Każda data, liczba i wydarzenie mają pokrycie; brak dowodu oznacza brak twierdzenia.
3. **Telefon to urządzenie podstawowe.** Uczeń wchodzi z telefonu w klasie — to nie jest wariant responsywny, tylko główny przypadek użycia.
4. **Nauczyciel ma 45 minut.** Zero konfiguracji, zero instalacji, zero tłumaczenia jak to działa.
5. **Silnik jest przenaszalny.** To, co zbudowano dla Górnego Śląska, ma dać się powtórzyć dla innego wydarzenia bez pisania gry od nowa.

## Accessibility & Inclusion

Odbiorcą są uczniowie na własnych telefonach w warunkach szkolnych: cele dotykowe ≥44px, czytelność przy jasności ekranu w sali, pełna obsługa klawiaturą w panelu nauczyciela, kontrast WCAG AA na treści merytorycznej. Materiał drastyczny (fotografie deportacji) podany bez efekciarstwa.
