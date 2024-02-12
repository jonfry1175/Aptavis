const clubRoutes = require('express').Router()
const { ClubController } = require('../controllers')

clubRoutes.get('/clubs', ClubController.getAllClub)

module.exports = clubRoutes