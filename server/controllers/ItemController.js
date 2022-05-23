const db = require('../db')
const { Item } = require('../models')

const GetItems = async (req, res) => {
    let gotItem = await Item.find({})
    console.log('got item')
    res.send(gotItem)
}

const GetItemById = async (req, res) => {
    console.log(req)
    let gotItemById = await Item.find({ _id: req.params.id })
    res.send(gotItemById)
}

const PostItem = async (req, res) => {
    const item = new Item(
        req.body
    )
    await item.save()
    res.send(item)
}

const PutItemById = async (req, res) => {
    let updateItem = await Item.findOneAndReplace({ _id: req.params.id })
    console.log('updateItem')
    res.send(updateItem)
}

const DeleteItemById = async (req, res) => {
    let deletedItem = await Item.findOneAndRemove({ _id: req.params.id })
    res.send(deletedItem)
}

module.exports = {
    GetItems,
    GetItemById,
    PostItem,
    PutItemById,
    DeleteItemById
}