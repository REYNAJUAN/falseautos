DROP DATABASE IF EXISTS cars_data_db;
CREATE DATABASE cars_data_db;
USE cars_data_db;

INSERT INTO make(text) values('Toyota');
INSERT INTO model(text) values('Prius');
INSERT INTO year(number) values('1998');






SELECT * FROM make;
SELECT * FROM model;
