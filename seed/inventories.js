const db = require('../db')
const { Inventory } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const inventory = async () => {
    const inventories = []

    await Inventory.create(inventories)
}

const run = async () => {
    await inventory()
    db.close()
}

run()