const express = require('express')
const router = express.Router()

router.get('/formTransito/', (req, res) => {
  res.render('trancitoForm')
})

module.exports = router