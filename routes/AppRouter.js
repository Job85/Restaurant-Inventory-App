const Router = require('express').Router()
const DepartmentRouter = require('./DepartmentRouter')

Router.use('/department', DepartmentRouter)