CREATE DATABASE  IF NOT EXISTS `chat_sitesi` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `chat_sitesi`;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: chat_sitesi
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `yazilar`
--

DROP TABLE IF EXISTS `yazilar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `yazilar` (
  `idyazilar` int(11) NOT NULL AUTO_INCREMENT,
  `sohbet_key` varchar(45) NOT NULL,
  `yazi` varchar(45) NOT NULL,
  `gonderen` varchar(45) NOT NULL,
  `alici` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idyazilar`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `yazilar`
--

LOCK TABLES `yazilar` WRITE;
/*!40000 ALTER TABLE `yazilar` DISABLE KEYS */;
INSERT INTO `yazilar` VALUES (1,'xA3s52slB2','Selam','Max','John'),(2,'xA3s52slB2','Selam!','John','Max'),(3,'I11vNTdfb5','Selam!','Deniz','Max'),(4,'I11vNTdfb5','Selam','Max','Deniz'),(5,'frnMUd6KST','Selam','John','Deniz'),(6,'frnMUd6KST','Selam','Deniz','John'),(92,'I11vNTdfb5','Heyy','Deniz','Max'),(93,'I11vNTdfb5','asdsa','Deniz','Max');
/*!40000 ALTER TABLE `yazilar` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-19 12:33:51