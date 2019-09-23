const express = require('express')
const router = express.Router()
const mysqlConnection  = require('../database.js');

router.get('/multas/Transito', (req, res) => {
    var obj = {};
    var obj2 = {};
    sql = "SELECT * FROM Transito";
    mysqlConnection.query(sql, function (err, result) {
        if (err) {
            throw err;
        } else {
            obj = {print: result};
            res.render('multasTrancito', {obj: obj});
        }
    });
})

router.get('/multas/Comercio', (req, res) => {
    var obj = {};
    var obj2 = {};
    sql = "SELECT * FROM Comercio";
    mysqlConnection.query(sql, function (err, result) {
        if (err) {
            throw err;
        } else {
            obj = {print: result};
            res.render('multasComercio', {obj: obj});
        }
    });
})

module.exports = router


