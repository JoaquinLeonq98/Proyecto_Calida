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
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idproducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `inventario` int NOT NULL,
  `precio` double NOT NULL,
  `descripcion` varchar(150) NOT NULL,
  `imagen` blob NOT NULL,
  `categoria_idcategoria` int NOT NULL,
  PRIMARY KEY (`idproducto`,`categoria_idcategoria`),
  KEY `fk_producto_categoria1_idx` (`categoria_idcategoria`),
  CONSTRAINT `fk_producto_categoria1` FOREIGN KEY (`categoria_idcategoria`) REFERENCES `categoria` (`idcategoria`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Aglaonema Roja',10,151,'CH\nRiego: 1 vez a la semana.\nLuz: resolana, semisombra, luz artificial',_binary '/Users/cristianmota/Downloads/Fotos/Aglaonema roja.jpg',1),(2,'Aglaonema Rosa',10,151,'CH\nRiego: 1 vez a la semana.\nLuz: resolana, semisombra, luz artificial',_binary '/Users/cristianmota/Downloads/Fotos/Aglaonema rosa.jpg',1),(3,'Amoena',10,79,'CH\nRiego: 2 por semana, mantén húmedo el sustrato\nLuz: resolana, semisombra\n',_binary '/Users/cristianmota/Downloads/Fotos/Amoena.JPG',1),(4,'Bromelia',10,475,'N/A',_binary '/Users/cristianmota/Downloads/Fotos/Bromelia.JPG',1),(5,'Calathea burle Marx',10,37,'CH\nRiego: 1 o 2  veces por semana manteniendo húmedo el sustrato	\nLuz: resolana, semisombra\n',_binary '/Users/cristianmota/Downloads/Fotos/Calathea burle marx.JPG',1);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
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
