const express = require('express')
const router = express.Router()

const config = require('../config')

const Database = require('arangojs').Database
const db = new Database(config.url)
db.useDatabase(config.db)
db.useBasicAuth(config.username, config.password)

router.post('/', (req, res, next) => {
  const qs = req.body.qs
  console.log(req.body.qs)

  db.query(qs)
  .then(res => res.all())
  .then(res => {
    console.log(res)
    res.send(result)
  })
  .catch(err => {
    console.log(err)
    res.send(err)
  })
  
})

module.exports = router
