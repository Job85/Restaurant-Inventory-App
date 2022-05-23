const db = require('../db')
const { Inventory } = require('../models')

const getInventory = async (req, res) => {
    let gotInventory = await Inventory.find({})
    console.log('gotInventory')
    res.send(gotInventory)
}
const postInventory = async (req, res) => {
    const inventory = new Inventory(
        req.body
    )
    await inventory.save()
    res.send(inventory)
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