const Router = require('express').Router()
const controller = require('../controllers/DepartmentController')

Router.get('/', controller.GetDepartment)
Router.post('/create_department', controller.CreateDepartment)
Router.put('/update_department', controller.UpdateDepartment)
Router.delete('/delete_department', controller.DeleteDepartment)

module.exports = Router