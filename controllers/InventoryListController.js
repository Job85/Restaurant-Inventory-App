const db = require('../db')
const { Department, InventoryList, Item } = require('../models')

const getInventoryList = async (req, res) => {
    let gotInventoryList = await InventoryList.find({ key: '6241fad7903377078019a5ef' })
    console.log('gotInventoryList')
    res.send(gotInventoryList)
}



module.exports = {
    getInventoryList
}