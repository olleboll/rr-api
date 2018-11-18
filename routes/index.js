'use strict';

const express = require('express');
const router = express.Router();

const api = require('./api')

router.use('/api/v1', api);
router.get('/', (req, res) => {
  console.log("yoo")
  res.sendStatus(200)
})

module.exports = router;
