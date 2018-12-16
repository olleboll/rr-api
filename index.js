'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const routes = require('./routes')
const { passport } = require('./util')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(passport.initialize())

app.use(routes)

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`Rabbid rabbits API listening on port ${PORT}!`)
})

module.exports = app;
