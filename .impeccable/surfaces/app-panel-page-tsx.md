---
version: 1
slug: "app-panel-page-tsx"
primary_target: "app/panel/page.tsx"
related_targets: ["app/logowanie/page.tsx","app/panel/admin/page.tsx"]
---

## Scope

Panel platformy: logowanie (`app/logowanie`), wybór tematu (`app/panel/page.tsx`), strona tematu z postępami klasy, oraz część superadmina (kursy, tematy, użytkownicy). Visitor mode: **Operate**.

Zadania: zalogować się; wybrać temat i wejść w grę; (nauczyciel) zobaczyć, kto ile przeszedł; (superadmin) dodać kurs, przestawić widoczność tematu, zmienić rolę albo wyłączyć konto.
Stany, które muszą być obsłużone: brak bazy, brak przypisanych tematów, temat bez gotowego scenariusza, konto wyłączone, błąd logowania, własne konto (nie do zdegradowania), zapis w toku.
Ograniczenia: uczeń wchodzi z telefonu w klasie — cele dotykowe ≥44px, tabele przewijają się poziomo w swoim kontenerze; nauczyciel ma 45 minut, więc żadnej konfiguracji.

## Direction contract

**THESIS.** Panel jest dalszym ciągiem tego samego dokumentu, nie osobną aplikacją: klauzule z numerami paragrafów, rejestry zamiast kafelków, linie dokumentu zamiast kart. Odrzuca układ, który panel administracyjny wysyła zawsze — rząd kafelków z wielką liczbą i małą etykietą, sidebar z ikonkami, modal na każdą zmianę.

**OWN-WORLD.** Dziedziczy świat landingu bez zmian: kalka `#0C0E14` jako grunt, przebicie indygo w tekście, fiolet `#A24BC0` wyłącznie jako „platforma działa" (zakładka aktywna, przełącznik włączony, akcja główna, zaznaczenie), czerwień `#D6303C` wyłącznie jako nadruk — cytat historyczny i odmowa systemu, nigdy akcent. Pola formularza to linie wpisu z podkreśleniem, nie boxy. Postęp rysuje się wypełnianymi kwadracikami, nie paskiem z zaokrąglonym rogiem ani pierścieniem. Rozwijane `<details>` zamiast okien modalnych.

**STORY.** Po zalogowaniu użytkownik od razu widzi, co ma zrobić: listę tematów pogrupowaną po kursach, z jednoznacznym stanem każdego (gotowy / w przygotowaniu) i własnym postępem. Nauczyciel i superadmin dostają tę samą listę plus tabelę postępów w temacie. Superadmin ma nad wszystkim pasek nawigacji, którego uczeń nigdy nie zobaczy.

**FIRST VIEWPORT.** Pasek górny: wordmark, słowo PANEL, po prawej imię, rola fioletem i kwadratowy przycisk wyjścia. Pod nim — tylko dla superadmina — pasek klauzul. Treść otwiera numer paragrafu w konturze plus nagłówek i jedno zdanie kontekstu. Niżej nagłówek kursu jako linia dokumentu z ikoną teczki i liczbą tematów po prawej, a pod nim siatka teczek tematów: fotografia w duotonie, sygnatura w rogu, tytuł, znacznik statusu, streszczenie, metadane w rejestrze mono, postęp w kwadracikach, na dole stempel akcji.

**FORM.** Kierunek ROZKAZ, odziedziczony z landingu (seed key `50f0aaf3`), przełożony na tryb Operate: ta sama paleta, typografia i gramatyka komponentów, ale ekspresja schodzi na drugi plan przed czytelnością zadania. Sygnaturowa interakcja landingu — przebicie przez kalkę — w panelu nie występuje: stan ma być widoczny natychmiast. Zostaje stempel jako akcja główna i fiolet jako jedyny znacznik „to jest aktywne".

**FINISH.** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Memorable moment

Wypełniane kwadraciki postępu — dziesięć pól, tyle ile scen, wypełnianych fioletem. Nauczyciel widzi z drugiego końca sali, kto gdzie stoi.

## Unresolved

Brak rejestracji, resetu hasła i API zapisujące postęp z gry. Konta zakłada skrypt danych startowych.
