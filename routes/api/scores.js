'use strict';

const express = require('express');
const router = express.Router();

const db = require('../../database/models')

router.post('/', ( req, res ) => {
  db.Score.update( { score: req.body.score }, { where: { user_id: req.body.user_id } } )
    .then( () => res.sendStatus(200))
    .catch( err => res.sendStatus(500))

})

const fetchDescendingTopList = async (limit) => {
  const opts = {
    order: [
      ['score', 'DESC']
    ],
    limit: limit || undefined,
    include: [ { model: db.User } ]
  }
  const highScoreList = await db.Score.findAll(opts)
  return highScoreList.map( s => s.get({ plain: true }))
}

router.get('/highscore', async ( req, res ) => {
  const highscore = await fetchDescendingTopList(2)
  return res.json(highscore)
})

router.get('/user-standings/:user', async ( req, res ) => {
  const { user } = req.params
  const highscore = await fetchDescendingTopList(false)
  const userScore = highscore.find( score => score.user_id === parseInt(user))
  const placement = highscore.indexOf(userScore) + 1
  return res.json({ placement })
})

router.get('/:id', ( req, res ) => {
  db.Score.findOne({ where: { id }, include: [ { model: db.User } ] }).then( user => {
    res.json(user)
  }).catch(err => {
    console.log(err)
    res.sendStatus(500)
  })
})



module.exports = router;
