-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema db_calida
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_calida
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_calida` DEFAULT CHARACTER SET utf8 ;
USE `db_calida` ;

-- -----------------------------------------------------
-- Table `db_calida`.`categoriausuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_calida`.`categoriausuario` (
  `idcategoriausuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idcategoriausuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_calida`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_calida`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellidos` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(100) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  `categoriausuario_idcategoriausuario` INT NOT NULL,
  PRIMARY KEY (`idusuario`, `categoriausuario_idcategoriausuario`),
  INDEX `fk_usuario_categoriausuario1_idx` (`categoriausuario_idcategoriausuario` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_categoriausuario1`
    FOREIGN KEY (`categoriausuario_idcategoriausuario`)
    REFERENCES `db_calida`.`categoriausuario` (`idcategoriausuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = ascii;


-- -----------------------------------------------------
-- Table `db_calida`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_calida`.`categoria` (
  `idcategoria` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(25) NOT NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_calida`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_calida`.`producto` (
  `idproducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `inventario` INT NOT NULL,
  `precio` DOUBLE NOT NULL,
  `descripcion` VARCHAR(150) NOT NULL,
  `imagen` MEDIUMBLOB NOT NULL,
  `categoria_idcategoria` INT NOT NULL,
  PRIMARY KEY (`idproducto`, `categoria_idcategoria`),
  INDEX `fk_producto_categoria1_idx` (`categoria_idcategoria` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoria1`
    FOREIGN KEY (`categoria_idcategoria`)
    REFERENCES `db_calida`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_calida`.`envio`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_calida`.`envio` (
  `iddomicilio` INT NOT NULL AUTO_INCREMENT,
  `estado` VARCHAR(45) NOT NULL,
  `cp` INT NOT NULL,
  `calle` VARCHAR(85) NOT NULL,
  `colonia` VARCHAR(85) NOT NULL,
  `numero int` VARCHAR(20) NULL,
  `acaldia` VARCHAR(45) NOT NULL,
  `numero ext` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`iddomicilio`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_calida`.`metododepago`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_calida`.`metododepago` (
  `idmetododepago` INT NOT NULL AUTO_INCREMENT,
  `tipo de pago` VARCHAR(45) NULL,
  PRIMARY KEY (`idmetododepago`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_calida`.`venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_calida`.`venta` (
  `idventa` INT NOT NULL AUTO_INCREMENT,
  `importe` DOUBLE NOT NULL,
  `fecha` DATE NOT NULL,
  `status` VARCHAR(15) NOT NULL,
  `cantidad` INT NOT NULL,
  `producto_idproducto` INT NOT NULL,
  `producto_categoria_idcategoria` INT NOT NULL,
  `envio_iddomicilio` INT NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  `usuario_categoriausuario_idcategoriausuario` INT NOT NULL,
  `metododepago_idmetododepago` INT NOT NULL,
  PRIMARY KEY (`idventa`, `producto_idproducto`, `producto_categoria_idcategoria`, `envio_iddomicilio`, `usuario_idusuario`, `usuario_categoriausuario_idcategoriausuario`, `metododepago_idmetododepago`),
  INDEX `fk_venta_producto1_idx` (`producto_idproducto` ASC, `producto_categoria_idcategoria` ASC) VISIBLE,
  INDEX `fk_venta_envio1_idx` (`envio_iddomicilio` ASC) VISIBLE,
  INDEX `fk_venta_usuario1_idx` (`usuario_idusuario` ASC, `usuario_categoriausuario_idcategoriausuario` ASC) VISIBLE,
  INDEX `fk_venta_metododepago1_idx` (`metododepago_idmetododepago` ASC) VISIBLE,
  CONSTRAINT `fk_venta_producto1`
    FOREIGN KEY (`producto_idproducto` , `producto_categoria_idcategoria`)
    REFERENCES `db_calida`.`producto` (`idproducto` , `categoria_idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_venta_envio1`
    FOREIGN KEY (`envio_iddomicilio`)
    REFERENCES `db_calida`.`envio` (`iddomicilio`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_venta_usuario1`
    FOREIGN KEY (`usuario_idusuario` , `usuario_categoriausuario_idcategoriausuario`)
    REFERENCES `db_calida`.`usuario` (`idusuario` , `categoriausuario_idcategoriausuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_venta_metododepago1`
    FOREIGN KEY (`metododepago_idmetododepago`)
    REFERENCES `db_calida`.`metododepago` (`idmetododepago`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_calida`.`mensaje`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_calida`.`mensaje` (
  `idmensaje` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `telefono` VARCHAR(45) NOT NULL,
  `texto` VARCHAR(450) NOT NULL,
  PRIMARY KEY (`idmensaje`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_calida`.`reseña`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_calida`.`reseña` (
  `idreseña` INT NOT NULL AUTO_INCREMENT,
  `calificacion` INT NULL,
  `comentario` VARCHAR(450) NULL,
  `venta_idventa` INT NOT NULL,
  `venta_producto_idproducto` INT NOT NULL,
  `venta_producto_categoria_idcategoria` INT NOT NULL,
  `venta_envio_iddomicilio` INT NOT NULL,
  `venta_usuario_idusuario` INT NOT NULL,
  `venta_usuario_categoriausuario_idcategoriausuario` INT NOT NULL,
  PRIMARY KEY (`idreseña`),
  INDEX `fk_reseña_venta1_idx` (`venta_idventa` ASC, `venta_producto_idproducto` ASC, `venta_producto_categoria_idcategoria` ASC, `venta_envio_iddomicilio` ASC, `venta_usuario_idusuario` ASC, `venta_usuario_categoriausuario_idcategoriausuario` ASC) VISIBLE,
  CONSTRAINT `fk_reseña_venta1`
    FOREIGN KEY (`venta_idventa` , `venta_producto_idproducto` , `venta_producto_categoria_idcategoria` , `venta_envio_iddomicilio` , `venta_usuario_idusuario` , `venta_usuario_categoriausuario_idcategoriausuario`)
    REFERENCES `db_calida`.`venta` (`idventa` , `producto_idproducto` , `producto_categoria_idcategoria` , `envio_iddomicilio` , `usuario_idusuario` , `usuario_categoriausuario_idcategoriausuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
