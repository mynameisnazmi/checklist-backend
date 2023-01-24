-- phpMyAdmin SQL Dump
-- version 3.3.9
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Mar 10, 2021 at 03:14 AM
-- Server version: 5.5.8
-- PHP Version: 5.3.5

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `checklistnew`
--

-- --------------------------------------------------------

--
-- Table structure for table `coating_1_daily`
--

CREATE TABLE IF NOT EXISTS `coating_1_daily` (
  `Tanggal` date NOT NULL,
  `Nama` varchar(30) NOT NULL,
  `Status` tinyint(1) NOT NULL,
  `Tanggal_Status` date NOT NULL,
  `Unwind_Vis` boolean NOT NULL,
  `Unwind_Stat` boolean NOT NULL,
  `Unwind_ArusR` decimal(5,2) NOT NULL,
  `Unwind_ArusS` decimal(5,2) NOT NULL,
  `Unwind_ArusT` decimal(5,2) NOT NULL,
  `Unwind_VDE_Vms` decimal(5,2) NOT NULL,
  `Unwind_VDE_Vge` decimal(5,2) NOT NULL,
  `Unwind_VNDE_Vms` decimal(5,2) NOT NULL,
  `Unwind_VNDE_Vge` decimal(5,2) NOT NULL,
  `Unwind_TempM` decimal(5,2) NOT NULL,
  `Unwind_Ket` text NOT NULL,
);
 