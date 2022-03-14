

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS bingo DEFAULT CHARACTER SET utf8 ;
USE bingo ;

-- -----------------------------------------------------
-- Table letter_bingo
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS letter_bingo (
  letter VARCHAR(1) NOT NULL,
  letter_1 VARCHAR(3) NOT NULL,
  letter_2 VARCHAR(3) NOT NULL,
  letter_3 VARCHAR(3) NOT NULL,
  letter_4 VARCHAR(3) NOT NULL,
  letter_5 VARCHAR(3) NOT NULL,
  letter_6 VARCHAR(3) NOT NULL,
  letter_7 VARCHAR(3) NOT NULL,
  letter_8 VARCHAR(3) NOT NULL,
  letter_9 VARCHAR(3) NOT NULL,
  letter_10 VARCHAR(3) NOT NULL,
  letter_11 VARCHAR(3) NOT NULL,
  letter_12 VARCHAR(3) NOT NULL,
  letter_13 VARCHAR(3) NOT NULL,
  letter_14 VARCHAR(3) NOT NULL,
  letter_15 VARCHAR(3) NOT NULL,
  PRIMARY KEY (letter),
  UNIQUE INDEX bing_id_UNIQUE (letter ASC) VISIBLE,
  UNIQUE INDEX letter_1_UNIQUE (letter_1 ASC) VISIBLE,
  UNIQUE INDEX letter_2_UNIQUE (letter_2 ASC) VISIBLE,
  UNIQUE INDEX letter_3_UNIQUE (letter_3 ASC) VISIBLE,
  UNIQUE INDEX letter_4_UNIQUE (letter_4 ASC) VISIBLE,
  UNIQUE INDEX letter_5_UNIQUE (letter_5 ASC) VISIBLE,
  UNIQUE INDEX letter_6_UNIQUE (letter_6 ASC) VISIBLE,
  UNIQUE INDEX letter_7_UNIQUE (letter_7 ASC) VISIBLE,
  UNIQUE INDEX letter_8_UNIQUE (letter_8 ASC) VISIBLE,
  UNIQUE INDEX letter_9_UNIQUE (letter_9 ASC) VISIBLE,
  UNIQUE INDEX letter_10_UNIQUE (letter_10 ASC) VISIBLE,
  UNIQUE INDEX letter_11_UNIQUE (letter_11 ASC) VISIBLE,
  UNIQUE INDEX letter_12_UNIQUE (letter_12 ASC) VISIBLE,
  UNIQUE INDEX letter_13_UNIQUE (letter_13 ASC) VISIBLE,
  UNIQUE INDEX letter_14_UNIQUE (letter_14 ASC) VISIBLE,
  UNIQUE INDEX letter_15_UNIQUE (letter_15 ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table card
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS card (
  id_card INT NOT NULL AUTO_INCREMENT,
  letter_bingo_letter VARCHAR(1) NOT NULL,
  letter_1 VARCHAR(3) NOT NULL,
  letter_2 VARCHAR(3) NOT NULL,
  letter_3 VARCHAR(3) NOT NULL,
  letter_4 VARCHAR(3) NOT NULL,
  letter_5 VARCHAR(3) NOT NULL,
  PRIMARY KEY (id_card),
  UNIQUE INDEX letter_1_UNIQUE (letter_1 ASC) VISIBLE,
  UNIQUE INDEX letter_2_UNIQUE (letter_2 ASC) VISIBLE,
  UNIQUE INDEX letter_4_UNIQUE (letter_4 ASC) VISIBLE,
  UNIQUE INDEX letter_5_UNIQUE (letter_5 ASC) VISIBLE,
  UNIQUE INDEX id_card_UNIQUE (id_card ASC) VISIBLE,
  INDEX fk_card_letter_bingo_idx (letter_bingo_letter ASC) VISIBLE,
  CONSTRAINT fk_card_letter_bingo
    FOREIGN KEY (letter_bingo_letter)
    REFERENCES letter_bingo (letter)
    ON DELETE RESTRICT
    ON UPDATE CASCADE)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- COMANDOS
-- -----------------------------------------------------

INSERT INTO letter_bingo (letter, letter_1, letter_2, letter_3, letter_4, letter_5, letter_6, letter_7, letter_8, letter_9, letter_10, letter_11, letter_12, letter_13, letter_14, letter_15)
VALUE
    ('B', '1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12', '13', '14', '15'),
    ('I', '16', '17', '18', '19', '20', '21','22', '23', '24', '25', '26', '27', '28', '29', '30'),
    ('N', '31', '32', '33', '34', '35', '36','37', '38', '39', '40', '41', '42', '43', '44', '45'),
    ('G', '46', '47', '48', '49', '50', '51','52', '53', '54', '55', '56', '57', '58', '59', '60'),
    ('O', '61', '62', '63', '64', '65', '66','67', '68', '69', '70', '71', '72', '73', '74', '75');

INSERT INTO card (letter_bingo_letter, letter_1, letter_2, letter_3, letter_4, letter_5)
VALUE
    ('B', '5', '10', '4', '1', '15'),
    ('I', '16', '21', '30', '24', '19'),
    ('N', '31', '37', '39', '42', '45'),
    ('G', '46', '49', '47', '55', '56'),
    ('O', '61', '63', '69', '70', '65');