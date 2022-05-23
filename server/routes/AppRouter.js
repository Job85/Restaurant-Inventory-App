const Router = require('express').Router()
const DepartmentRouter = require('./DepartmentRouter')
const ItemRouter = require('./ItemRouter')

Router.use('/department', DepartmentRouter)
Router.use('/item', ItemRouter)


module.exports = Router