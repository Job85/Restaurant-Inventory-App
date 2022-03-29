const db = require('../db')
const { Inventory, Item } = require('../models')

const getInventory = async (req, res) => {
    let gotInventory = await Inventory.find({})
    console.log('gotInventory')
    res.send(gotInventory)
}
const postInventory = async (req, res) => {
    let postedInventory = await Inventory.insertMany({})
    console.log('postedInventory')
    res.send(postedInventory)
}

const putInventory = async (req, res) => {
    let putsInventory = await Inventory.findOneAndUpdate({})
    console.log('putsInventory')
    res.send(putsInventory)
}

const deleteInventory = async (req, res) => {
    let deletedInventory = await Inventory.findOneAndRemove({})
    console.log('deletedInventory')
    res.send(deletedInventory)
}

module.exports = {
    getInventory,
    postInventory,
    putInventory,
    deleteInventory
}