const express = require('express')
const cors = require('cors')
const ctrl = require('./controller.js')

const app = express()

const port = 4004

app.use(express.json())
app.use(cors())

app.post('/api/messages', ctrl.createMessage)

app.listen(port, () => console.log(`Server on port ${port}.`))