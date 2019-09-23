const express = require('express')
const router = express.Router()

router.get('/formComercio/', (req, res) => {
  res.render('comercioForm')
})

module.exports = router