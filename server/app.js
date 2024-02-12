const express = require('express')
const app = express()
const cors = require('cors')
const port = 3002

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const route = require('./routes')
app.use(route)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})