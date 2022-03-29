const db = require('../db')
const { InventoryList } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const inventoryList = async () => {
    const inventoryLists = []

    await InventoryList.insertOne(inventoryLists)
    console.log('Created Inventory Lists!')
}

const run = async () => {
    await inventoryList()
    db.close()
}

run()