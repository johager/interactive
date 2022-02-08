const express = require('express')
const cors = require('cors')
const ctrl = require('./controller.js')

const app = express()

const port = 4004

app.use(express.json())
app.use(cors())

// endpoints

app.get('/api/movies', ctrl.getAllMovies)
app.delete('/api/movies/:id', ctrl.deleteMovie)
app.post('/api/movies', ctrl.createMovie)
app.put('/api/movies/:id', ctrl.updateMovie)

app.listen(port, () => console.log(`Server on port ${port}.`))
