const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))

const departmentController = require('./controllers/DepartmentController')
const inventoryListController = require('./controllers/InventoryListController')
const itemController = require('./controllers/ItemController')

app.get('/department', departmentController.getDepartment)
app.get('/inventoryList', inventoryListController.getInventoryList)
app.get('/item', itemController.getItem)



app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})