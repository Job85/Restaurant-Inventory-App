const { Router } = require('express')
const db = require('../db')
const { Department } = require('../models')

const GetDepartment = async (req, res) => {
    let gotDepartment = await Department.find({})
    console.log('gotDepartment')
    res.send(gotDepartment)
}

const CreateDepartment = async (req, res) => {
    const department = new Department(
        req.body
    )
    await department.save()
    res.send(department)
}

const UpdateDepartment = async (req, res) => {
    let putsDepartment = await Department.findOneAndUpdate({})
    console.log('putsDepartment')
    res.send(putsDepartment)
}

const DeleteDepartment = async (req, res) => {
    let deletedDepartment = await Department.findOneAndRemove({})
    console.log('deletedDepartment')
    res.send(deletedDepartment)
}

module.exports = Router