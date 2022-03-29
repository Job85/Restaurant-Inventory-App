const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const departmentController = require('./controllers/DepartmentController.js')
const inventoryController = require('./controllers/InventoryController')
const itemController = require('./controllers/ItemController')


const PORT = process.env.PORT || 3001
const db = require('./db')
const res = require('express/lib/response')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send({ msg: 'Server Running ' })
})
app.get('/department', departmentController.getDepartment)
app.get('/inventory', inventoryController.getInventory)
app.get('/item/', itemController.getItem)
app.post('/inventory', (req, res) => {
    console.log('Post request sent to /inventory endpoint.')
    res.send({ msg: 'Posted!' })
})
app.post('/item', itemController.postItem)
app.put('/inventory', (req, res) => {
    console.log('Inventory updated!')
    res.send({ msg: 'Updated!' })
})
app.put('/item', (req, res) => {
    console.log('Item updated!')
    res.send({ msg: 'Updated Item!' })
})
app.delete('/inventory', (req, res) => {
    console.log('Inventory  deleted!')
    res.send({ msg: 'Deleted Inventory!' })
})
app.delete('/item', (req, res) => {
    console.log('Item deleted!')
    res.send({ msg: 'Deleted Item!' })
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))