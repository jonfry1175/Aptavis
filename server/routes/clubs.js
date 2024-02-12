const clubRoutes = require('express').Router()
const { ClubController } = require('../controllers')

clubRoutes.get('/clubs', ClubController.getAllClub)
clubRoutes.post('/clubs', ClubController.create)
clubRoutes.delete('/clubs/:id', ClubController.delete)
clubRoutes.get('/clubs/:city', ClubController.getByCity)

module.exports = clubRoutes