---
name: Cienie Rzeczypospolitej
description: Świat wizualny rozkazu operacyjnego 1945 — kalka, przebitka i stempel — przełożony na platformę edukacyjną.
colors:
  kalka: "#0c0e14"
  kalka-2: "#12151f"
  kalka-3: "#171b28"
  linia: "#232838"
  linia-mocna: "#333a52"
  przebicie: "#e8eaf4"
  przebicie-2: "#9aa0bd"
  przebicie-3: "#7c82a4"
  indygo: "#7e88e0"
  indygo-gleb: "#3a4180"
  stempel: "#a24bc0"
  stempel-jasny: "#c77fe0"
  stempel-gleb: "#5d1f73"
  nadruk: "#d6303c"
  nadruk-jasny: "#e8505c"
  nadruk-papier: "#a81420"
  przebitka: "#ded8c9"
  przebitka-2: "#cfc8b6"
  przebitka-tusz: "#1a1712"
  przebitka-tusz-2: "#4f4739"
typography:
  paragraf:
    fontFamily: "Archivo, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.78
    letterSpacing: "-0.045em"
    fontVariation: "'wdth' 125"
  display:
    fontFamily: "Archivo, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.125rem, 4.2vw, 3.75rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.875rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 125"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 110"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Azeret Mono, ui-monospace, monospace"
    fontSize: "0.6875rem"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  none: "0px"
  stempel: "2px"
spacing:
  wiersz: "0.875rem"
  blok: "1.25rem"
  sekcja-mobile: "5rem"
  sekcja: "7rem"
components:
  stempel:
    backgroundColor: "{colors.stempel}"
    textColor: "#ffffff"
    rounded: "{rounded.stempel}"
    padding: "0.95rem 1.6rem"
    typography: "{typography.label}"
  stempel-spoczynek:
    backgroundColor: "{colors.kalka}"
    textColor: "{colors.stempel-jasny}"
    rounded: "{rounded.stempel}"
    padding: "0.95rem 1.6rem"
  stempel-lekki:
    backgroundColor: "{colors.kalka}"
    textColor: "{colors.przebicie}"
    rounded: "{rounded.stempel}"
    padding: "0.95rem 1.6rem"
  wpis:
    backgroundColor: "{colors.kalka}"
    textColor: "{colors.przebicie}"
    rounded: "{rounded.none}"
    padding: "0.7rem 0.1rem"
    typography: "{typography.label}"
  przebitka:
    backgroundColor: "{colors.przebitka}"
    textColor: "{colors.przebitka-tusz}"
    rounded: "{rounded.none}"
    padding: "1.75rem"
  teczka:
    backgroundColor: "{colors.kalka-2}"
    textColor: "{colors.przebicie}"
    rounded: "{rounded.none}"
    padding: "1.25rem"
  komunikat-odmowa:
    backgroundColor: "{colors.kalka}"
    textColor: "{colors.nadruk-jasny}"
    rounded: "{rounded.none}"
    padding: "1.5rem"
---

# Design System: Cienie Rzeczypospolitej

## Overview

**Creative North Star: „Rozkaz"**

Deportacje Górnoślązaków w 1945 roku zaczęły się od kartki papieru — rozkazu, który zmieścił się na jednej stronie. Ten system wizualny jest odpowiedzią na tamtą kartkę, złożoną w jej własnej gramatyce: numerowane klauzule, rozdzielnik odbiorców, stempel zamiast przycisku, linie dokumentu zamiast kart.

Kluczowa decyzja materiałowa: **gruntem nie jest papier, tylko kalka maszynowa**. Granatowoczarna, z rysowanym włóknem i kierunkowym połyskiem — litery przychodzą przez nią jak przebicie, w indygo. Papier występuje dokładnie raz, jako cienka przebitka, i tylko tam, gdzie leży materiał źródłowy albo długi tekst do czytania. To odwrócenie trzyma świat z dala od sepiowego pastiszu „historycznego" i od kremowego tła, w które ta kategoria zwykle wpada.

Materiał jest rysowany, nigdy udawany: faktura kalki to `repeating-linear-gradient` z radialnym połyskiem, a nie tekstura w pliku. Fotografie archiwalne są prawdziwymi rastrami pod warstwą duotone; żadnego fałszowanego reliefu, tłoczenia ani podartego papieru. Świat odrzucony świadomie: jasny hero ze zrzutem produktu w ramce laptopa, trzy kafelki z ikonkami, pasek logotypów szkół.

**Key Characteristics:**
- Ciemny grunt z rysowaną fakturą; treść nigdy nie dostaje własnego tła, tylko linie
- Kolor racjonowany rolą — trzy barwy, trzy znaczenia, zero dekoracji
- Jeden jasny materiał na całej stronie, zarezerwowany dla źródeł
- Typografia jako masa: numery klauzul trzymają kompozycję
- Zero zaokrągleń poza 2 px na stemplu
- Temat niesie ciężar — nic w tym systemie nie może go zbagatelizować

## Colors

Paleta jest wąska i twardo przypisana: granatowoczarna kalka jako grunt, indygo jako tusz, fiolet jako jedyny głos platformy, czerwień jako nadruk, jasna bibułka jako materiał źródłowy.

### Primary
- **Fiolet anilinowy pieczęci** (`#a24bc0`): platforma działa. Akcja główna, zakładka aktywna, zaznaczenie, bieżąca klauzula na szynie, przełącznik włączony, pieczęć na dokumencie. Nic poza tym.
- **Fiolet jasny** (`#c77fe0`): ta sama rola na ciemnym gruncie, gdy fiolet podstawowy nie wyrabia kontrastu — etykiety, ikony, tekst stanu aktywnego.
- **Fiolet głęboki** (`#5d1f73`): wypełnienie zaznaczenia tekstu i tusz pieczęci wtopionej w papier.

### Secondary
- **Czerwień nadruku** (`#d6303c`) i jej jaśniejszy wariant (`#e8505c`): wyłącznie nadruk. Cytowana klauzula z 1945 roku, data na fotografii archiwalnej, odmowa systemu (błąd formularza, brak bazy). Nigdy jako akcent interfejsu.
- **Czerwień nadruku na papierze** (`#a81420`): ten sam znak położony na przebitce. Istnieje, bo `#d6303c` schodzi na jasnym papierze do 3,4:1.

### Tertiary
- **Przebitka** (`#ded8c9`) z tuszem (`#1a1712`) i tuszem drugorzędnym (`#4f4739`), krawędź (`#cfc8b6`): cienka bibułka. Jedyny jasny materiał w systemie. Wolno jej wystąpić tam, gdzie leży materiał źródłowy albo długi tekst do czytania — i nigdzie indziej.

### Neutral
- **Kalka** (`#0c0e14`): grunt całej aplikacji. Nigdy nie jest tłem wiersza treści.
- **Kalka podniesiona** (`#12151f`) i **kalka trzecia** (`#171b28`): powierzchnie, które naprawdę leżą wyżej — teczki tematów, panele formularzy, puste kadry.
- **Przebicie** (`#e8eaf4`): tekst główny; to litery, które przeszły przez kalkę.
- **Przebicie drugorzędne** (`#9aa0bd`, 7,4:1) i **trzeciorzędne** (`#7c82a4`, 5,1:1): proza i rejestr dokumentowy.
- **Indygo** (`#7e88e0`) i **indygo głębokie** (`#3a4180`): akcent tuszu i masa numerów klauzul.
- **Linia** (`#232838`) i **linia mocna** (`#333a52`): siatka dokumentu. Wszystkie podziały, ramki i nagłówki tabel.

### Named Rules

**Reguła Trzech Znaczeń.** Fiolet znaczy „platforma działa". Czerwień znaczy „nadruk" — cytat z 1945 albo odmowa systemu. Przebitka znaczy „materiał źródłowy". Żaden z tych trzech kolorów nie pojawia się w innej roli, nigdy jako dekoracja. Test: wskaż dowolny fioletowy piksel i powiedz, co zrobiła platforma.

**Reguła Jednego Papieru.** Na ekranie może być tylko jeden jasny obiekt naraz. Jeśli druga przebitka walczy o uwagę z pierwszą, żadna nie jest już materiałem źródłowym — obie są tłem.

**Reguła Przezroczystego Wiersza.** Wiersze list i tabel nie dostają tła. Oddziela je linia włosowa, żeby faktura kalki biegła nieprzerwanie przez całą stronę. Pełne tło zasłania grunt i wiersz zamienia się w szarą płytę.

## Typography

**Display Font:** Archivo (zmienny, oś `wdth`), fallback `Arial Narrow`
**Body Font:** Archivo w szerokości normalnej, fallback `system-ui`
**Label/Mono Font:** Azeret Mono (400 / 500 / 700), fallback `ui-monospace`

**Character:** Archivo w wariancie 125 % szerokości i wadze 900 daje masę instytucjonalną bez pastiszu maszynopisu; ten sam krój w szerokości normalnej niesie długi polski tekst. Azeret Mono jest rejestrem dokumentowym — sygnatury, daty, etykiety, nagłówki tabel — a nie kostiumem „technicznym". Oba kroje ładowane przez `next/font/google`, hostowane lokalnie przy budowaniu, z `font-synthesis-weight: none`.

### Hierarchy
- **Paragraf** (900, `clamp(2.5rem, 7vw, 6rem)`, wysokość wiersza 0,78, `wdth` 125): numer klauzuli jako masa kompozycyjna. Wypełniony, nigdy konturowy. Stoi nad nagłówkiem, nie obok.
- **Display** (900, `clamp(2.125rem, 4.2vw, 3.75rem)`, 1,0, `-0.035em`, `wdth` 125): nagłówek pierwszego ekranu. Dwa wiersze na desktopie.
- **Headline** (900, `clamp(1.75rem, 3.4vw, 2.875rem)`, 1,02, `wdth` 125): nagłówki sekcji, miara do 26 znaków od `sm` w górę.
- **Title** (800, 1,1875–1,4375 rem, `wdth` 110): tytuły klauzul, kart i wierszy rejestru.
- **Body** (400, 1–1,0625 rem, 1,65–1,7): proza. Miara 54–66 znaków.
- **Label** (Azeret Mono 400, 0,5625–0,6875 rem, `0.16em`, wersaliki): sygnatury, daty, metadane, nagłówki tabel, rozdzielnik.

### Named Rules

**Reguła Masy.** Numer klauzuli jest masą, nie ozdobą — wypełniony kolorem, nigdy `-webkit-text-stroke`. Ale nie przejmuje kompozycji: nagłówek, który opisuje, zostaje największym elementem w kadrze.

**Reguła Rejestru.** Mono jest materiałem tego świata (maszynopis przez kalkę), więc wolno go używać na sygnaturach, datach, etykietach i liczbach. Nigdy na prozie. Wszystkie liczby w danych są tabelaryczne (`font-variant-numeric: tabular-nums`).

**Reguła Jednego Marginesu.** Numer, nagłówek, lead, akcje i treść wyrównują się do tej samej lewej krawędzi. Żadnych wcięć pod tekst nagłówka.

## Layout

Kontener treści ma 1240 px na landingu i 1320 px w panelu, z marginesem 20 px na telefonie i 32 px od `sm`. Na desktopie (`lg`, 1024 px) landing dostaje stałą szynę sygnatury o szerokości 68 px przy lewej krawędzi; treść jest o nią przesunięta.

Rytm pionowy: sekcje `5rem` na telefonie i `7rem` od `sm`, oddzielone linią włosową. Wewnątrz sekcji: `3rem` między nagłówkiem a treścią, `1.75rem` między blokami, `0.875rem` w obrębie wiersza. Nad nagłówkiem zawsze więcej przestrzeni niż pod nim.

Siatki są asymetryczne i wynikają z treści, nie z kolumn: hero to `1fr / 22rem`, sekcje dwuczęściowe to `1fr / 26rem` albo `27rem / 1fr`, katalog tematów to 1 → 2 → 3 kolumny (`md`, `xl`). Punkty łamania w użyciu: `sm` 640 px (70 wystąpień), `lg` 1024 px (21), sporadycznie `md` i `xl`.

Rejestry, które nie mieszczą się na telefonie, przewijają się poziomo we własnym kontenerze (`.rejestr` + `.przewijana`), z wygaszeniem prawej krawędzi i podpowiedzią słowną — obie widoczne tylko poniżej 640 px. Strona nigdy nie przewija się poziomo jako całość.

**Reguła Narysowanej Siatki.** Margines dokumentu jest rysowany, nie domyślny. Szyna niesie pełny rejestr klauzul 01–06 jako nawigację z oznaczeniem bieżącej pozycji; nic na stronie nie pływa bez odniesienia.

## Elevation & Depth

System jest w zasadzie płaski i buduje głębię tonalnie: `kalka` → `kalka-2` → `kalka-3` plus linie włosowe. Cienie występują dokładnie dwa razy i oba mają przesunięcie i rozmycie — nie ma tu twardych cieni blokowych.

### Shadow Vocabulary
- **Uniesiona przebitka** (`box-shadow: 0 26px 60px -30px rgba(0,0,0,0.9), 0 2px 0 0 color-mix(in srgb, var(--color-przebitka-2) 60%, transparent)`): arkusz źródłowy leżący na kalce. Miękki cień rzucony plus cienka krawędź papieru u dołu.
- **Tusz stempla** (`box-shadow: 0 10px 30px -12px color-mix(in srgb, var(--color-stempel) 80%, transparent)`): tylko w stanie `:hover` / `:focus-visible` akcji głównej.

**Reguła Płaskiego Spoczynku.** Powierzchnie w spoczynku są płaskie. Cień pojawia się wyłącznie jako odpowiedź na stan albo dlatego, że obiekt naprawdę leży na innym.

## Shapes

Zero zaokrągleń. Jedyny promień w systemie to 2 px na stemplu — tyle, ile zostawia gumowa pieczęć. Wszystko inne ma kąt prosty: pola wpisu, kadry fotografii, teczki tematów, znaczniki statusu, kwadraciki postępu.

Ramki są liniami dokumentu: 1 px `linia` na podziałach i kadrach, 1 px `linia-mocna` pod nagłówkami tabel, 2 px `stempel` na akcji głównej. Ikony rysowane na siatce 24 × 24, kreska 1,5, `stroke-linecap: square`, `stroke-linejoin: miter`, bez wypełnień — narożnik jest ostry także w ikonie.

**Reguła Ostrego Narożnika.** Jeśli coś ma zaokrąglony róg, jest stemplem. Jeśli nie jest stemplem, ma kąt prosty.

## Components

### Buttons
- **Shape:** prostokąt z promieniem 2 px, obrócony o −1,5° w spoczynku
- **Primary (stempel):** kontur 2 px `stempel`, wypełnienie `stempel` przy 14 %, tekst `stempel-jasny`, padding `0.95rem 1.6rem`, Archivo 800 / `wdth` 112 %, wersaliki, `0.06em`
- **Hover / Focus:** prostuje się do 0°, wypełnia pełnym fioletem, tekst na biały, dochodzi tusz stempla; 380 ms `cubic-bezier(0.16, 1, 0.3, 1)`
- **Active:** 0° i `scale(0.98)`, plus jednorazowy rozbłysk tuszu (`wybicie-tuszu`, 520 ms) rozchodzący się promieniście
- **Secondary (stempel lekki):** ten sam kształt, kontur `linia-mocna`, tekst `przebicie`; na hover przejmuje fiolet bez cienia
- **Reduced motion:** bez obrotu i bez rozbłysku, zostaje przejście koloru 120 ms

### Cards / Containers
- **Corner Style:** kąt prosty (0 px)
- **Background:** `kalka-2` dla powierzchni podniesionych; wiersze list i tabel zostają przezroczyste
- **Border:** 1 px `linia`, na hover `linia-mocna`
- **Shadow Strategy:** brak — głębia jest tonalna (patrz Elevation & Depth)
- **Internal Padding:** `1.25rem`, `1.5rem` na większych panelach
- **Zakaz:** karta w karcie. Element rozwijany wewnątrz obramowanego wiersza traci własną ramkę

### Inputs / Fields
- **Style:** linia wpisu, nie box — przezroczyste tło, wyłącznie dolna krawędź 1 px `linia-mocna`, promień 0, Azeret Mono 0,9375 rem
- **Focus:** dolna krawędź przechodzi na `stempel-jasny` w 220 ms; własny obrys wyłączony na rzecz linii
- **Disabled:** 50 % krycia, `cursor: not-allowed`
- **Error:** ramka 1 px `nadruk` przy 50 %, tło `nadruk` przy 10 %, tekst `nadruk-jasny`, kwadratowy znacznik 6 px zamiast kolorowej krawędzi bocznej

### Navigation
- Górny pasek: Azeret Mono 0,6875 rem, `0.14em`, wersaliki, `przebicie-2` → `stempel-jasny` na hover
- Pasek klauzul w panelu (tylko superadmin): kwadracik 6 px przed etykietą, fioletowy gdy aktywna, `linia-mocna` gdy nie; przewijalny poziomo na telefonie
- Szyna sygnatury (landing, od `lg`): wordmark obrócony o 90°, pełny rejestr klauzul 01–06 jako kotwice z kreską pozycyjną, `aria-current` na bieżącej
- Stan aktywny zawsze fioletem i nigdy samym pogrubieniem

### Przebitka (komponent sygnaturowy)
Arkusz bibułki obrócony o −1,2°, jedyny jasny obiekt w kadrze. Niesie materiał źródłowy w trzech grubościach pisma — fakt potwierdzony (mono 700, pełny tusz), rekonstrukcja (mono 500, tusz drugorzędny), dramatyzacja (mono 400, kursywa, tusz drugorzędny przy 75 %). W prawym górnym rogu banderola klauzuli w `nadruk-papier`, w prawym dolnym pieczęć platformy. Zaznaczenie tekstu przełącza się na fiolet pełny z białym tekstem.

### Pieczęć (komponent sygnaturowy)
Rysowany SVG: dwa pierścienie (52 i 46,5 promienia), wewnętrzny okrąg 27, cztery kreski pozycyjne, legenda po obwodzie przez `textPath` i dwuwierszowy środek. Kładziona w `stempel-gleb` przy 45 % krycia z `mix-blend-mode: multiply` i obrotem −14°, żeby tusz wsiąkł w papier zamiast leżeć na nim.

### Przebicie przez kalkę (interakcja sygnaturowa)
Treść wchodzi najpierw jako słaby odcisk nacisku (krycie 0,42, rozmycie 5 px, przesunięcie 6 px w dół, rozstrzelenie `+0.012em`), po czym w 620 ms dochodzi tusz. Orkiestrowane z opóźnieniem 80–260 ms w obrębie sekcji, raz na blok. Stan wyjściowy siedzi w HTML i jest włączany dopiero przez skrypt w `<head>`, więc bez JS strona renderuje od razu wersję końcową; `prefers-reduced-motion` robi to samo.

### Pasek scen (komponent sygnaturowy)
Postęp jako wypełniane pola formularza: kwadraciki 10 × 10 px z odstępem 3 px, po jednym na scenę, ukończone fioletem, reszta `linia-mocna`. Pod spodem liczba w rejestrze mono. Nigdy pasek z zaokrąglonym rogiem ani pierścień.

## Do's and Don'ts

### Do:
- **Do** trzymać się Reguły Trzech Znaczeń: fiolet = platforma działa, czerwień = nadruk, przebitka = źródło.
- **Do** oddzielać wiersze linią włosową `1px var(--color-linia)` zamiast dawać im tło — faktura kalki ma biec przez całą stronę.
- **Do** stawiać numer klauzuli nad nagłówkiem i wyrównywać całą treść do jednego lewego marginesu.
- **Do** rysować materiał w CSS (włókno kalki, siatka dokumentu) i zostawiać fotografie prawdziwymi rastrami pod warstwą duotone.
- **Do** tematyzować powierzchnie przeglądarki — zaznaczenie, karetkę, pasek przewijania i obrys ogniskowej — z palety, a nie zostawiać domyślnych.
- **Do** dawać każdej fotografii wpisane pochodzenie przed wysyłką (`impeccable embed-prompt --scan public/archiwum`).
- **Do** liczyć kontrast osobno na kalce i na przebitce; `nadruk-papier` istnieje właśnie dlatego.

### Don't:
- **Don't** używać czerwieni jako akcentu interfejsu. Czerwień cytuje 1945 rok albo odmawia — nic poza tym.
- **Don't** wprowadzać drugiego jasnego obiektu w kadrze; przebitka traci wtedy znaczenie.
- **Don't** zaokrąglać niczego poza stemplem (2 px).
- **Don't** rysować numeru klauzuli konturem ani pozwalać mu przerosnąć nagłówek, który opisuje.
- **Don't** budować struktury strony z jednakowych kafelków ikona + nagłówek + tekst; ten świat ma rejestry, klauzule i rozdzielniki.
- **Don't** wstawiać okna modalnego tam, gdzie wystarczy rozwijana klauzula (`<details>`).
- **Don't** pokazywać postępu pierścieniem ani paskiem z zaokrąglonym rogiem — postęp to wypełniane pola.
- **Don't** stawiać emoji ani glifu Unicode w roli ikony; ikony są rysowane na siatce 24 × 24 kreską 1,5.
- **Don't** zsuwać tematu w stronę rozrywki: żadnych rankingów, punktów za szybkość ani odznak.
