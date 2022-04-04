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

app.get('/items', itemController.getItem)
app.get(`/items/:id`, itemController.getItemById)
app.post('/items', itemController.postItem)
app.put('/putitem', itemController.putItem)
app.delete('/deleteitem/:id', itemController.deleteItemById)

app.get('/inventory', inventoryController.getInventory)
app.post('/inventory', inventoryController.postInventory)
app.put('/inventory', inventoryController.putInventory)
app.delete('/inventory', inventoryController.deleteInventory)

app.get('/department', departmentController.getDepartment)
app.post('/department', departmentController.postDepartment)
app.put('/department', departmentController.putDepartment)
app.delete('/department', departmentController.deleteDepartment)


app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Server running on ${PORT}`))