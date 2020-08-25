-- -----------------------------------------------------------------------
-- 
-- Estructura de Base DAM dada por TP mas Inserciones agregadas 08.2020
-- TPFinal DAM
-- 
-- -----------------------------------------------------------------------

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DAM
-- -----------------------------------------------------
SET time_zone = "-03:00";
-- -----------------------------------------------------
-- Schema DAM
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DAM` DEFAULT CHARACTER SET utf8 ;
USE `DAM` ;



DROP TABLE IF EXISTS `DAM`.`Mediciones` ;
DROP TABLE IF EXISTS `DAM`.`Log_Riegos` ;
DROP TABLE IF EXISTS `DAM`.`Dispositivos` ;
DROP TABLE IF EXISTS `DAM`.`Electrovalvulas` ;

-- -----------------------------------------------------
-- Table `DAM`.`Electrovalvulas`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `DAM`.`Electrovalvulas` (
  `electrovalvulaId` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  PRIMARY KEY (`electrovalvulaId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DAM`.`Dispositivos`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `DAM`.`Dispositivos` (
  `dispositivoId` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(200) NULL,
  `ubicacion` VARCHAR(200) NULL,
  `electrovalvulaId` INT NOT NULL,
  PRIMARY KEY (`dispositivoId`, `electrovalvulaId`),
  INDEX `fk_Dispositivos_Electrovalvulas1_idx` (`electrovalvulaId` ASC) ,
  CONSTRAINT `fk_Dispositivos_Electrovalvulas1`
    FOREIGN KEY (`electrovalvulaId`)
    REFERENCES `DAM`.`Electrovalvulas` (`electrovalvulaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DAM`.`Mediciones`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `DAM`.`Mediciones` (
  `medicionId` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NULL,
  `valor` VARCHAR(100) NULL,
  `dispositivoId` INT NOT NULL,
  PRIMARY KEY (`medicionId`, `dispositivoId`),
  INDEX `fk_Mediciones_Dispositivos_idx` (`dispositivoId` ASC) ,
  CONSTRAINT `fk_Mediciones_Dispositivos`
    FOREIGN KEY (`dispositivoId`)
    REFERENCES `DAM`.`Dispositivos` (`dispositivoId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DAM`.`Log_Riegos`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `DAM`.`Log_Riegos` (
  `logRiegoId` INT NOT NULL AUTO_INCREMENT,
  `apertura` TINYINT NULL,
  `fecha` DATETIME NULL,
  `electrovalvulaId` INT NOT NULL,
  PRIMARY KEY (`logRiegoId`, `electrovalvulaId`),
  INDEX `fk_Log_Riegos_Electrovalvulas1_idx` (`electrovalvulaId` ASC) ,
  CONSTRAINT `fk_Log_Riegos_Electrovalvulas1`
    FOREIGN KEY (`electrovalvulaId`)
    REFERENCES `DAM`.`Electrovalvulas` (`electrovalvulaId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------------------------
-- Inserciones  / Archivos Dump Dados por TP mas agregados en LOG_Riegos
-- -----------------------------------------------------------------------

			   
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLPatio');
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLCocina');
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLJardinDelantero');
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLLiving');
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLHabitacion1');
INSERT INTO DAM.Electrovalvulas (nombre) VALUES ('eLHabitacion2');


INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 1', 'Patio',1);
INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 2', 'Cocina',2);
INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 3', 'Jardin Delantero',3);
INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 4', 'Living',4);
INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 5', 'Habitacion 1',5);
INSERT INTO DAM.Dispositivos (nombre,ubicacion,electrovalvulaId) VALUES ('Sensor 6', 'Habitacion 2',6);


INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),60,1 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),40,1 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),30,2 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),50,3 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),33,5 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),17,4 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),29,6 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),20,1 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),44,4 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),61,5 );
INSERT INTO DAM.Mediciones (fecha,valor,dispositivoId) VALUES (current_timestamp(),12,2 );

INSERT INTO DAM.Log_Riegos (apertura,fecha,electrovalvulaId) VALUES (0,current_timestamp(),1 );
INSERT INTO DAM.Log_Riegos (apertura,fecha,electrovalvulaId) VALUES (0,current_timestamp(),2 );
INSERT INTO DAM.Log_Riegos (apertura,fecha,electrovalvulaId) VALUES (0,current_timestamp(),3 );
INSERT INTO DAM.Log_Riegos (apertura,fecha,electrovalvulaId) VALUES (0,current_timestamp(),4 );
INSERT INTO DAM.Log_Riegos (apertura,fecha,electrovalvulaId) VALUES (0,current_timestamp(),5 );
INSERT INTO DAM.Log_Riegos (apertura,fecha,electrovalvulaId) VALUES (0,current_timestamp(),6 );



SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
