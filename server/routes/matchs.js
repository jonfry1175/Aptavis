const matchRoute = require('express').Router()
const { MatchController } = require('../controllers')

matchRoute.get('/matchs', MatchController.getAllMacth)

module.exports = matchRoute