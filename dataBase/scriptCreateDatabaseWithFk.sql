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
-- Table `CalidaDB`.`metodo_pago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`metodo_pago` (
  `idmetodo` INT NOT NULL AUTO_INCREMENT,
  `pago` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`idmetodo`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `CalidaDB`.`pedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`pedido` (
  `idpedido` INT NOT NULL AUTO_INCREMENT,
  `fecha` DATETIME NOT NULL,
  `status_entrega` TINYINT NOT NULL,
  `status_pago` TINYINT NOT NULL,
  `metodo_pago_idmetodo` INT NOT NULL,
  `cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`idpedido`, `metodo_pago_idmetodo`, `cliente_idcliente`),
  INDEX `fk_pedido_metodo_pago1_idx` (`metodo_pago_idmetodo` ASC) VISIBLE,
  INDEX `fk_pedido_cliente1_idx` (`cliente_idcliente` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_metodo_pago1`
    FOREIGN KEY (`metodo_pago_idmetodo`)
    REFERENCES `CalidaDB`.`metodo_pago` (`idmetodo`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_cliente1`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `CalidaDB`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
-- Table `CalidaDB`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `CalidaDB`.`producto` (
  `idproducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `descripcion` VARCHAR(800) NOT NULL,
  `imagen` VARCHAR(150) NOT NULL,
  `inventario` INT NOT NULL,
  `categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idproducto`, `categoria_idcategoria`),
  INDEX `fk_producto_categoria1_idx` (`categoria_idcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`categoria_idcategoria`)
    REFERENCES `CalidaDB`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
  `cliente_idcliente` INT NOT NULL,
  PRIMARY KEY (`iddomicilio`, `cliente_idcliente`),
  INDEX `fk_domicilio_envio_cliente1_idx` (`cliente_idcliente` ASC) VISIBLE,
  CONSTRAINT `fk_domicilio_envio_cliente1`
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `CalidaDB`.`cliente` (`idcliente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
  `producto_idproducto` INT NOT NULL,
  PRIMARY KEY (`idreseña`),
  INDEX `fk_reseña_producto1_idx` (`producto_idproducto` ASC) VISIBLE,
  CONSTRAINT `fk_reseña_producto1`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `CalidaDB`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
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
  `pedido_idpedido` INT NOT NULL,
  `producto_idproducto` INT NOT NULL,
  `cantidad` INT NOT NULL,
  `importe` DOUBLE NOT NULL,
  `total` DOUBLE NOT NULL,
  PRIMARY KEY (`idpedido_has_producto`, `pedido_idpedido`, `producto_idproducto`),
  INDEX `fk_pedido_has_producto_producto1_idx` (`producto_idproducto` ASC) VISIBLE,
  INDEX `fk_pedido_has_producto_pedido1_idx` (`pedido_idpedido` ASC) VISIBLE,
  CONSTRAINT `fk_pedido_has_producto_pedido1`
    FOREIGN KEY (`pedido_idpedido`)
    REFERENCES `CalidaDB`.`pedido` (`idpedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_has_producto_producto1`
    FOREIGN KEY (`producto_idproducto`)
    REFERENCES `CalidaDB`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
