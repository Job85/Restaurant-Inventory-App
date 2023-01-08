const mongoose = require('mongoose')
const ItemSchema = require('./item')

const Item = mongoose.model('Item', ItemSchema)

module.exports = {
    Item
}