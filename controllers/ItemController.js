const db = require('../db')
const { Item } = require('../models')

const getItem = async (req, res) => {
    let gotItem = await Item.find({})
    console.log('got item')
    res.send(gotItem)
}

const getItemById = async (req, res) => {
    let gotItemById = await Item.find({ 'id': '' })
    console.log('Got Item By Id')
    res.send(gotItemById)
}

const postItem = async (req, res) => {
    const item = new Item(
        req.body
    )
    await item.save()
    res.send(item)
}

const putItem = async (req, res) => {
    let putsItem = await Item.updateOne({})
    console.log('putsItem')
    res.send(putsItem)
}

const deleteItem = async (req, res) => {
    let deletedItem = await Item.findOneAndRemove({})
    console.log('deletedItem')
    res.send(deletedItem)
}

module.exports = {
    getItem,
    getItemById,
    postItem,
    putItem,
    deleteItem
}