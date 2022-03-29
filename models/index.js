const mongoose = require('mongoose')
const ItemSchema = require('./item')
const InventoryListSchema = require('./inventoryList')
const DepartmentSchema = require('./inventoryList')

const Item = mongoose.model('Item', ItemSchema)
const InventoryList = mongoose.model('InventoryList', InventoryListSchema)
const Department = mongoose.model('Department', DepartmentSchema)

module.exports = {
    Item,
    InventoryList,
    Department
}