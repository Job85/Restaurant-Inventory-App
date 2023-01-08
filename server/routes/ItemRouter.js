const Router = require('express').Router()
const controller = require('../controllers/ItemController')

Router.get('/', controller.getItems)
Router.post('/create', controller.postItem)

module.exports = Router