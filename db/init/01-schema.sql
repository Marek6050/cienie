-- Cienie Rzeczypospolitej — schemat platformy
-- Uruchamiany automatycznie przy pierwszym starcie kontenera MySQL.

SET NAMES utf8mb4;

CREATE TABLE IF NOT EXISTS uzytkownicy (
  id                 INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  email              VARCHAR(190) NOT NULL,
  haslo_hash         VARCHAR(255) NOT NULL,
  imie_nazwisko      VARCHAR(160) NOT NULL,
  rola               ENUM('uczen','nauczyciel','superadmin') NOT NULL DEFAULT 'uczen',
  instytucja         VARCHAR(190) NULL,
  aktywny            TINYINT(1) NOT NULL DEFAULT 1,
  utworzony          TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ostatnie_logowanie TIMESTAMP NULL DEFAULT NULL,
  UNIQUE KEY uk_uzytkownicy_email (email),
  KEY ix_uzytkownicy_rola (rola)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS kursy (
  id           INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  slug         VARCHAR(120) NOT NULL,
  tytul        VARCHAR(190) NOT NULL,
  opis         TEXT NULL,
  okres        VARCHAR(90) NULL,
  opublikowany TINYINT(1) NOT NULL DEFAULT 0,
  kolejnosc    SMALLINT NOT NULL DEFAULT 0,
  utworzony    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uk_kursy_slug (slug)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS tematy (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  kurs_id        INT UNSIGNED NOT NULL,
  slug           VARCHAR(120) NOT NULL,
  tytul          VARCHAR(190) NOT NULL,
  streszczenie   TEXT NULL,
  okres          VARCHAR(90) NULL,
  czas_min       SMALLINT NOT NULL DEFAULT 45,
  liczba_scen    SMALLINT NOT NULL DEFAULT 0,
  liczba_zrodel  SMALLINT NOT NULL DEFAULT 0,
  obraz          VARCHAR(190) NULL,
  adres_gry      VARCHAR(255) NULL,
  status         ENUM('gotowy','w_przygotowaniu','archiwalny') NOT NULL DEFAULT 'w_przygotowaniu',
  widoczny       TINYINT(1) NOT NULL DEFAULT 0,
  kolejnosc      SMALLINT NOT NULL DEFAULT 0,
  UNIQUE KEY uk_tematy_slug (slug),
  KEY ix_tematy_kurs (kurs_id),
  CONSTRAINT fk_tematy_kurs FOREIGN KEY (kurs_id) REFERENCES kursy (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Kto jest zapisany na który kurs
CREATE TABLE IF NOT EXISTS zapisy (
  id             INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  uzytkownik_id  INT UNSIGNED NOT NULL,
  kurs_id        INT UNSIGNED NOT NULL,
  zapisany       TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY uk_zapisy (uzytkownik_id, kurs_id),
  KEY ix_zapisy_kurs (kurs_id),
  CONSTRAINT fk_zapisy_uzytkownik FOREIGN KEY (uzytkownik_id) REFERENCES uzytkownicy (id) ON DELETE CASCADE,
  CONSTRAINT fk_zapisy_kurs FOREIGN KEY (kurs_id) REFERENCES kursy (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Postęp ucznia w temacie — to widzi nauczyciel po lekcji
CREATE TABLE IF NOT EXISTS postepy (
  id               INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  uzytkownik_id    INT UNSIGNED NOT NULL,
  temat_id         INT UNSIGNED NOT NULL,
  sceny_ukonczone  SMALLINT NOT NULL DEFAULT 0,
  sceny_lacznie    SMALLINT NOT NULL DEFAULT 0,
  wynik_quizu      SMALLINT NULL,
  maks_quizu       SMALLINT NULL,
  status           ENUM('nierozpoczety','w_trakcie','ukonczony') NOT NULL DEFAULT 'nierozpoczety',
  zaktualizowany   TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  UNIQUE KEY uk_postepy (uzytkownik_id, temat_id),
  KEY ix_postepy_temat (temat_id),
  CONSTRAINT fk_postepy_uzytkownik FOREIGN KEY (uzytkownik_id) REFERENCES uzytkownicy (id) ON DELETE CASCADE,
  CONSTRAINT fk_postepy_temat FOREIGN KEY (temat_id) REFERENCES tematy (id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
