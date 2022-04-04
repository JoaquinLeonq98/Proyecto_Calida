-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema CalidaDB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema CalidaDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `CalidaDB` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci ;
USE `CalidaDB` ;

-- -----------------------------------------------------
-- Table `CalidaDB`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idcliente`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = ascii;


-- -----------------------------------------------------
-- Table `CalidaDB`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`pedido` (
  `idpedido` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `status_entrega` TINYINT NOT NULL,
  `status_pago` TINYINT NOT NULL,
  PRIMARY KEY (`idpedido`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CalidaDB`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`producto` (
  `idproducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `descripcion` VARCHAR(800) NOT NULL,
  `imagen` VARCHAR(150) NOT NULL,
  `inventario` INT NOT NULL,
  PRIMARY KEY (`idproducto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CalidaDB`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CalidaDB`.`domicilio_envio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`domicilio_envio` (
  `iddomicilio` INT NOT NULL AUTO_INCREMENT,
  `estado` CHAR(4) NOT NULL,
  `cp` INT NOT NULL,
  `calle` VARCHAR(50) NOT NULL,
  `colonia` VARCHAR(50) NOT NULL,
  `numero_int` VARCHAR(50) NULL,
  `acaldia` VARCHAR(50) NOT NULL,
  `numero_ext` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`iddomicilio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CalidaDB`.`mensaje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`mensaje` (
  `idmensaje` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `correo` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(50) NOT NULL,
  `texto` VARCHAR(800) NOT NULL,
  PRIMARY KEY (`idmensaje`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CalidaDB`.`reseña`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`reseña` (
  `idreseña` INT NOT NULL AUTO_INCREMENT,
  `calificacion` INT NOT NULL,
  `comentario` VARCHAR(800) NOT NULL,
  `fecha` DATE NOT NULL,
  PRIMARY KEY (`idreseña`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CalidaDB`.`metodo_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`metodo_pago` (
  `idmetodo` INT NOT NULL AUTO_INCREMENT,
  `pago` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idmetodo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CalidaDB`.`admin`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`admin` (
  `idadmin` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `apellido` VARCHAR(50) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  `usuario` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idadmin`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CalidaDB`.`pedido_has_producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`pedido_has_producto` (
  `idpedido_has_producto` INT NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `importe` DOUBLE NOT NULL,
  `total` DOUBLE NOT NULL,
  PRIMARY KEY (`idpedido_has_producto`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
