const standingRoute = require('express').Router()
const { StandingController } = require('../controllers')

standingRoute.get('/standings', StandingController.getAllStanding)

module.exports = standingRoute