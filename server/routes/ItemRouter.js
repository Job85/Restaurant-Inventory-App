const Router = require('express').Router()
const controller = require('../controllers/ItemController')

Router.get('/', controller.GetItems)
Router.get(`/:id`, controller.GetItemById)
Router.post('/create_item', controller.PostItem)
Router.put('/update_item', controller.PutItemById)
Router.delete('/delete_item/:id', controller.DeleteItemById)


module.exports = Router