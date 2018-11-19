'use strict';

const express = require('express');
const router = express.Router();

const db = require('../../database/models')

router.post('/', ( req, res ) => {
  let user, score
  db.User.create(req.body)
    .then( _user => {
      user = _user
      return db.Score.create({ score: 0, user_id: _user.id })
    })
    .then( score => user.setScore(score))
    .then( () => res.json(user.get({ plain: true })))
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

router.get('/:id', ( req, res ) => {
  const { id } = req.params
  db.User.findOne({ where: { id }, include: [{ model: db.Score }] }).then( user => {
    console.log(user)
    res.json(user)
  }).catch(err => {
    console.log(err)
    res.sendStatus(500)
  })
})

module.exports = router;
