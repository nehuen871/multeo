USE multeo;

DELIMITER $$
USE `multeo`$$

CREATE PROCEDURE `TransitoAddOrEdit` (
  IN _id INT,
  IN _Dominio VARCHAR(255),
  IN _Calle VARCHAR(255),
  IN _DNI VARCHAR(255),
  IN _Observaciones VARCHAR(255),
  IN _Infracciones VARCHAR(255)
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO Transito (Dominio,Calle,DNI,Observaciones,Infracciones)
    VALUES (_Dominio, _Calle, _DNI, _Observaciones, _Infracciones);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE Transito
    SET
    Dominio = _Dominio,
    Calle = _Calle,
    DNI = _DNI,
    Observaciones = _Observaciones,
    Infracciones = _Infracciones
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END