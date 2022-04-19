const Router = require('express').Router()
const controller = require('../controllers/ItemController')

Router.get('/items', controller.GetItems)
Router.get(`/items/:id`, controller.GetItemById)
Router.post('/items', controller.PostItem)
Router.put('/putitem', controller.PutItemById)
Router.delete('/deleteitem/:id', controller.DeleteItemById)


module.exports = Router