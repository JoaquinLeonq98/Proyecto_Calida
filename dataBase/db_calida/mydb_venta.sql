-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `idventa` int NOT NULL AUTO_INCREMENT,
  `importe` double NOT NULL,
  `fecha` date NOT NULL,
  `status` varchar(15) NOT NULL,
  `cantidad` int NOT NULL,
  `producto_idproducto` int NOT NULL,
  `producto_categoria_idcategoria` int NOT NULL,
  `envio_iddomicilio` int NOT NULL,
  `usuario_idusuario` int NOT NULL,
  `usuario_categoriausuario_idcategoriausuario` int NOT NULL,
  `metododepago_idmetododepago` int NOT NULL,
  PRIMARY KEY (`idventa`,`producto_idproducto`,`producto_categoria_idcategoria`,`envio_iddomicilio`,`usuario_idusuario`,`usuario_categoriausuario_idcategoriausuario`,`metododepago_idmetododepago`),
  KEY `fk_venta_producto1_idx` (`producto_idproducto`,`producto_categoria_idcategoria`),
  KEY `fk_venta_envio1_idx` (`envio_iddomicilio`),
  KEY `fk_venta_usuario1_idx` (`usuario_idusuario`,`usuario_categoriausuario_idcategoriausuario`),
  KEY `fk_venta_metododepago1_idx` (`metododepago_idmetododepago`),
  CONSTRAINT `fk_venta_envio1` FOREIGN KEY (`envio_iddomicilio`) REFERENCES `envio` (`iddomicilio`),
  CONSTRAINT `fk_venta_metododepago1` FOREIGN KEY (`metododepago_idmetododepago`) REFERENCES `metododepago` (`idmetododepago`),
  CONSTRAINT `fk_venta_producto1` FOREIGN KEY (`producto_idproducto`, `producto_categoria_idcategoria`) REFERENCES `producto` (`idproducto`, `categoria_idcategoria`),
  CONSTRAINT `fk_venta_usuario1` FOREIGN KEY (`usuario_idusuario`, `usuario_categoriausuario_idcategoriausuario`) REFERENCES `usuario` (`idusuario`, `categoriausuario_idcategoriausuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-28 13:29:58
