const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const departmentController = require('./controllers/DepartmentController')
const inventoryController = require('./controllers/InventoryController')
const itemController = require('./controllers/ItemController')


const PORT = process.env.PORT || 3001
const db = require('./db')
const res = require('express/lib/response')
const app = express()

app.use(cors())
app.use(express.static(`${__dirname}/client/build`))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

app.get('/', (req, res) => {
    res.send({ msg: 'Server Running ' })
})
app.get('/department', departmentController.getDepartment)
app.get('/inventory', inventoryController.getInventory)
app.get('/items', itemController.getItem)
app.get(`/items:id`, itemController.getItemById)

app.post('/department', departmentController.postDepartment)
app.post('/inventory', inventoryController.postInventory)
app.post('/items', itemController.postItem)
// app.post(`/items`, itemController.postItemById)

app.put('/department', departmentController.putDepartment)
app.put('/inventory', inventoryController.putInventory)
app.put('/items', itemController.putItem)
// app.put(`/items`, itemController.putItemById)

app.delete('/department', departmentController.deleteDepartment)
app.delete('/inventory', inventoryController.deleteInventory)
app.delete('/items', itemController.deleteItem)
// app.delete(`/items`, itemController.deleteItemById)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))