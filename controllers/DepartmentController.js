const db = require('../db')
const { Department, InventoryList, Item } = require('../models')

const getDepartment = async (req, res) => {
    let gotDepartment = await Department.find({ key: 'FOH' })
    console.log('gotDepartment')
    res.send(gotDepartment)
}



module.exports = {
    getDepartment
}