const db = require('../db')
const { Department, Inventory, Item } = require('../models')

const getInventory = async (req, res) => {
    let gotInventory = await Inventory.find({})
    console.log('gotInventory')
    res.send(gotInventory)
}



module.exports = {
    getInventory
}