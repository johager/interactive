const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk']

app.get('/api/inventory', (req, res) => {
    // return array of inventory items based on filtering

    // console.log(req)
    
    console.log("query:", req.query)
    if (req.query.item) {  // handle query w/arguments
        const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(req.query.item.toLowerCase()))
        res.status(200).send(filteredItems)
    } else {  // handle no-argument query => return all elements
        res.status(200).send(inventory)
    }
})

app.get('/api/inventory/:index', (req, res) => {
    // return inventory item based on index
    console.log("param:", +req.params.index)
    res.status(200).send(inventory[+req.params.index])
})

const SERVER_PORT = 5050

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))