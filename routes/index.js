'use strict';

const express = require('express');
const router = express.Router();

const api = require('./api')
const { passport } = require('../util')

router.use('/api/v1',
  passport.authenticate('headerapikey', { session: false, failureRedirect: '/api/unauthorized' }),
  api);
  
router.use('/api/unauthorized', (req, res, next) => {
  console.log("yoyoyo")
  return res.sendStatus(403).send("Access Denied")
})

module.exports = router;
