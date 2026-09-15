# Cienie Rzeczypospolitej

Platforma interaktywnych opowieści historycznych dla szkół i muzeów. Zawiera
publiczny landing oraz panel z logowaniem, wyborem tematu i częścią
superadministracyjną.

Pierwsza produkcja na platformie — „Cisza nad Raszową" — żyje w osobnym repo
(`iprivate/`) i jest tu podpięta jako temat z adresem gry.

## Uruchomienie

```bash
npm install
cp .env.example .env.local     # albo skopiuj ręcznie na Windows
npm run db:up                  # MySQL 8.4 w kontenerze, port 3307
npm run db:seed                # konta, kursy, tematy, przykładowe postępy
npm run dev
```

### Rancher Desktop zamiast Docker Desktop

`npm run db:up` woła `docker compose`. Jeśli używasz Rancher Desktop z silnikiem
**containerd**, Docker daemon nie istnieje — użyj `nerdctl`, który czyta ten sam
plik `docker-compose.yml`:

```bash
nerdctl compose up -d
```

Alternatywnie przestaw Rancher Desktop na silnik **dockerd (moby)**
(Preferences → Container Engine), wtedy `npm run db:up` zadziała bez zmian.

## Konta startowe

| Rola       | E-mail                 | Hasło        |
| ---------- | ---------------------- | ------------ |
| Superadmin | `admin@cienie.pl`      | `Cienie2026!` |
| Nauczyciel | `nauczyciel@cienie.pl` | `Lekcja2026!` |
| Uczeń      | `uczen1@cienie.pl`     | `Uczen2026!` |

Uczniowie `uczen2` … `uczen4` mają to samo hasło co `uczen1`.

> Hasła są jawne, bo to dane demonstracyjne. Przed jakimkolwiek wystawieniem na
> świat zmień je i wygeneruj nowy `SESJA_SEKRET`.

## Struktura

```
app/
  page.tsx              landing (publiczny)
  logowanie/            formularz + akcje serwerowe
  panel/
    page.tsx            wybór tematu
    temat/[slug]/       temat + postępy klasy
    admin/              kursy, tematy, użytkownicy
components/
  landing/              sekcje strony głównej
  panel/                elementy panelu
lib/
  baza.ts               pula połączeń MySQL
  dane.ts               zapytania
  sesja-token.ts        podpis i weryfikacja JWT (działa w proxy/edge)
  sesja.ts              ciasteczko sesji (serwer aplikacji)
  kontakt.ts            dane kontaktowe — TODO do podmiany
db/init/01-schema.sql   schemat, wykonywany przy pierwszym starcie kontenera
scripts/seed.mjs        dane startowe
```

## Role

- **Uczeń** — widzi tematy z kursów, na które jest zapisany; wchodzi w grę.
- **Nauczyciel** — to samo plus tabela postępów klasy w każdym temacie.
- **Superadmin** — dodatkowo kursy, tematy (przełącznik widoczności) i lista
  wszystkich kont z możliwością zmiany roli i wyłączenia dostępu.

Dostęp jest pilnowany dwa razy: `proxy.ts` chroni trasy, a każda akcja
serwerowa superadmina sprawdza rolę jeszcze raz — akcję można wywołać z pominięciem
nawigacji.

## Co zostało do zrobienia

- `lib/kontakt.ts` — mail i kanały społecznościowe to placeholdery oznaczone `TODO`.
- Zakładanie kont odbywa się skryptem; nie ma rejestracji ani resetu hasła.
- Postęp w temacie zapisuje gra — API do jego aktualizacji jeszcze nie istnieje.

## Rzeczy do potwierdzenia przed publikacją

- **Prawa do fotografii.** Zdjęcie archiwalne w porównaniu „wtedy / dziś" ma wypalony znak wodny `fotopolska.eu`. Podpis pod minigrą go wymienia, ale licencja na użycie publiczne nie została potwierdzona — ustal ją albo podmień materiał.
- **Dane kontaktowe.** `lib/kontakt.ts` ma flagę `doUzupelnienia: true`; dopóki jest włączona, landing sam oznacza adresy jako zaślepki. Po wpisaniu prawdziwych danych ustaw ją na `false`.
