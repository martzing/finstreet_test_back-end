const express = require('express')
const router = express.Router()
const AttractionPlace = require('../models/attraction_place')

// get list of attraction place from db
router.get('/attractionPlace', (req, res, next) => {
  AttractionPlace.find().then((attractionPlace) => {
    res.send({status:true, result:attractionPlace})
  }).catch(next)
})
// get a attraction place from db
router.get('/attractionPlace/:id', (req, res, next) => {
  AttractionPlace.findOne({placeId: req.params.id}).then((attractionPlace) => {
    res.send({status:true, result:attractionPlace})
  }).catch(next)
})
// add a new attraction place to db
router.post('/attractionPlace', (req, res, next) => {
  AttractionPlace.create(req.body).then((attractionPlace) => {
    res.send({status:true, result:attractionPlace})
  }).catch(next)
})
// update a attraction place in db
router.put('/attractionPlace/:id', (req, res, next) => {
  AttractionPlace.findOneAndUpdate({placeId: req.params.id}, {$push: req.body}).then(() => {
    AttractionPlace.findOne({placeId: req.params.id}).then((attractionPlace) => {
      res.send({status:true, result:attractionPlace})
    }).catch(next)
  }).catch(next)
})
// delete a attraction place from db
router.delete('/attractionPlace/:id', (req, res, next) => {
  AttractionPlace.findOneAndRemove({placeId: req.params.id}).then((attractionPlace) => {
    res.send({status:true, result:attractionPlace})
  }).catch(next)
  
})


module.exports = router