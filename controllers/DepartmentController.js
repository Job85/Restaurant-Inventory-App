const db = require('../db')
const { Department, InventoryList, Item } = require('../models')

const getDepartment = async (req, res) => {
    let gotDepartment = await Department.find({})
    console.log('gotDepartment')
    res.send(gotDepartment)
}

const postDepartment = async (req, res) => {
    let postedDepartment = await Department.insertMany({})
    console.log('can we Department.insertOne?')
    res.send(postedDepartment)
}

const putDepartment = async (req, res) => {
    let putsDepartment = await Department.findOneAndUpdate({})
    console.log('putsDepartment')
    res.send(putsDepartment)
}

const deleteDepartment = async (req, res) => {
    let deletedDepartment = await Department.findOneAndRemove({})
    console.log('deletedDepartment')
    res.send(deletedDepartment)
}

module.exports = {
    getDepartment,
    postDepartment,
    putDepartment,
    deleteDepartment
}