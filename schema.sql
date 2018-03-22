DROP DATABASE IF EXISTS cars_db;

CREATE DATABASE cars_db;
USE cars_db;

CREATE TABLE `notes` (
    `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
    `make` VARCHAR(50) NOT NULL,
    `model` VARCHAR(50) NOT NULL,
    `year` INTEGER(4) NOT NULL,
    `color` VARCHAR(50) NOT NULL,
    `mileage` INTEGER(7) NOT NULL,
    `interior` VARCHAR(50) NOT NULL,
    `trim` VARCHAR(50) NOT NULL,
    `engine` VARCHAR(11) NOT NULL,
    `fuel` VARCHAR(50) NOT NULL,
    `vin` VARCHAR(17) NOT NULL,
    `warranty` VARCHAR(50) NOT NULL,

    PRIMARY KEY ( `id` )
);
