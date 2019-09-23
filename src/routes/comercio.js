const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Comercio
router.get('/Comercio/', (req, res) => {
  mysqlConnection.query('SELECT * FROM Comercio', (err, rows, fields) => {
    if(!err) {
      res.json(rows);
    } else {
      console.log(err);
    }
  });
});

// GET An Comercio
router.get('/Comercio/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM Comercio WHERE id = ?', [id], (err, rows, fields) => {
    if (!err) {
      res.json(rows[0]);
    } else {
      console.log(err);
    }
  });
});

// DELETE An Comercio
router.delete('/Comercio/:id', (req, res) => {
  const { id } = req.params;
  mysqlConnection.query('DELETE FROM Comercio WHERE id = ?', [id], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Comercio Deleted'});
    } else {
      console.log(err);
    }
  });
});

// INSERT An Comercio
router.post('/Comercio/', (req, res) => {
  const {CUIT, Calle, DNI, Observaciones, Infracciones} = req.body;
  console.log(CUIT, Calle, DNI, Observaciones, Infracciones);
  const query = `
    SET @id = 0;
    SET @CUIT = ?;
    SET @Calle = ?;
    SET @DNI = ?;
    SET @Observaciones = ?;
    SET @Infracciones = ?;
    CALL ComercioAddOrEdit(@id, @CUIT, @Calle, @DNI, @Observaciones, @Infracciones);
  `;
  mysqlConnection.query(query, [CUIT, Calle, DNI, Observaciones, Infracciones], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Comercio Saved'});
    } else {
      console.log(err);
    }
  });

});

router.put('/Comercio/:id', (req, res) => {
  const { CUIT, Calle, DNI, Observaciones, Infracciones } = req.body;
  const { id } = req.params;
  const query = `
    SET @id = ?;
    SET @CUIT = ?;
    SET @Calle = ?;
    SET @DNI = ?;
    SET @Observaciones = ?;
    SET @Infracciones = ?;
    CALL ComercioAddOrEdit(@id, @CUIT, @Calle, @DNI, @Observaciones, @Infracciones);
  `;
  mysqlConnection.query(query, [id, CUIT, Calle, DNI, Observaciones, Infracciones], (err, rows, fields) => {
    if(!err) {
      res.json({status: 'Comercio Updated'});
    } else {
      console.log(err);
    }
  });

});




module.exports = router;