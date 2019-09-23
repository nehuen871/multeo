CREATE DATABASE IF NOT EXISTS multeo;

USE multeo;

CREATE TABLE Transito (
  id INT(11) NOT NULL AUTO_INCREMENT,
  Dominio VARCHAR(255) DEFAULT NULL,
  Calle VARCHAR(255) DEFAULT NULL,
  DNI VARCHAR(255) DEFAULT NULL,
  Observaciones VARCHAR(255) DEFAULT NULL,
  Infracciones VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE Comercio (
  id INT(11) NOT NULL AUTO_INCREMENT,
  CUIT VARCHAR(255) DEFAULT NULL,
  Calle VARCHAR(255) DEFAULT NULL,
  DNI VARCHAR(255) DEFAULT NULL,
  Observaciones VARCHAR(255) DEFAULT NULL,
  Infracciones VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY(id)
);


INSERT INTO Transito (Dominio,Calle,DNI,Observaciones,Infracciones) values 
  ('TEST DOMINIO1', 'TEST CALLE1','TEST DNI1','TEST OBSERVACIONES1','TEST INFRACCIONES1'),
  ('TEST DOMINIO2', 'TEST CALLE2','TEST DNI2','TEST OBSERVACIONES2','TEST INFRACCIONES2'),
  ('TEST DOMINIO3', 'TEST CALLE3','TEST DNI3','TEST OBSERVACIONES3','TEST INFRACCIONES3'),
  ('TEST DOMINIO4', 'TEST CALLE4','TEST DNI4','TEST OBSERVACIONES4','TEST INFRACCIONES4');

INSERT INTO Comercio (CUIT,Calle,DNI,Observaciones,Infracciones) values 
  ('TEST CUIT1', 'TEST CALLE1','TEST DNI1','TEST OBSERVACIONES1','TEST INFRACCIONES1'),
  ('TEST CUIT2', 'TEST CALLE2','TEST DNI2','TEST OBSERVACIONES2','TEST INFRACCIONES2'),
  ('TEST CUIT3', 'TEST CALLE3','TEST DNI3','TEST OBSERVACIONES3','TEST INFRACCIONES3'),
  ('TEST CUIT4', 'TEST CALLE4','TEST DNI4','TEST OBSERVACIONES4','TEST INFRACCIONES4');


CREATE USER 'multeo'@'localhost' IDENTIFIED BY 'multeo';
GRANT ALL PRIVILEGES ON * . * TO 'multeo'@'localhost';
FLUSH PRIVILEGES;
