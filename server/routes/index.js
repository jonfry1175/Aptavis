const route = require('express').Router()

route.get('/', (req, res) => {
    res.send("go to /clubs, /matchs, /standings")
})

const clubRoutes = require('./clubs')
const matchRoute = require('./matchs')
const standingRoute = require('./standings')
route.use(clubRoutes)
route.use(matchRoute)
route.use(standingRoute)

module.exports = route