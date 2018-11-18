'use strict';

const express = require('express');
const router = express.Router();

const users = require('./users')
const scores = require('./scores')

router.use('/user', users)
router.use('/score', scores)

module.exports = router;
