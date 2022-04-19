const Router = require('express').Router()
const controller = require('../controllers/DepartmentController')

Router.get('/department', controller.GetDepartment)
Router.post('/department', controller.CreateDepartment)
Router.put('/department', controller.UpdateDepartment)
Router.delete('/department', controller.DeleteDepartment)

module.exports = Router