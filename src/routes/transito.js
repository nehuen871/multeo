const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Transito
router.get('/Transito/', (req, res) => {
  mysqlConnection.query('SELECT * FROM Transito', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });  
});

// GET An Transito
router.get('/Transito/:id', (req, res) => {
  const { id } = req.params; 
  mysqlConnection.query('SELECT * FROM Transito WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An Transito
router.delete('/Transito/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM Transito WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Transito Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An Transito
router.post('/Transito/', (req, res) => {
  const {Dominio, Calle, DNI, Observaciones, Infracciones} = req.body;
  console.log(Dominio, Calle, DNI, Observaciones, Infracciones);
  const query = `
    SET @id = 0;
    SET @Dominio = ?;
    SET @Calle = ?;
    SET @DNI = ?;
    SET @Observaciones = ?;
    SET @Infracciones = ?;
    CALL TransitoAddOrEdit(@id, @Dominio, @Calle, @DNI, @Observaciones, @Infracciones);
  `;
  mysqlConnection.query(query, [Dominio, Calle, DNI, Observaciones, Infracciones], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Transito Saved'});
    } else {
      console.log(err);
    }
  });

});

router.put('/Transito/:id', (req, res) => {
  const {Dominio, Calle, DNI, Observaciones, Infracciones} = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @Dominio = ?;
    SET @Calle = ?;
    SET @DNI = ?;
    SET @Observaciones = ?;
    SET @Infracciones = ?;
    CALL TransitoAddOrEdit(@id, @Dominio, @Calle, @DNI, @Observaciones, @Infracciones);
  `;
  mysqlConnection.query(query, [id, Dominio, Calle, DNI, Observaciones, Infracciones], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Transito Updated'});
    } else {
      console.log(err);
    }
  });

});



module.exports = router;
