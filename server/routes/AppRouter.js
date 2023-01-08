const Router = require('express').Router()
const ItemRouter = require('./ItemRouter')

Router.use('/item', ItemRouter)

module.exports = Router