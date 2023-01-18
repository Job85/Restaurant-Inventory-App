const { Item } = require('../models')

const getItems = async (req, res) => {
    let gotItems = await Item.find({})
    console.log('Got Items!')
    res.send(gotItems)
}

const getItemById = async (req, res) => {
    let gotItemById = await Item.find({ _id: req.params.id })
    console.log('Got Item by ID!')
    res.send(gotItemById)
}

const postItem = async (req, res) => {
    const item = new Item(
        req.body
    )
    await item.save()
    console.log('Item Created!')
    res.send(item)
}

const putItemById = async (req, res) => {
    let updateItem = await Item.findOneAndReplace(
        { _id: req.params.id },
        {
            ...req.body
        }
    )
    console.log(updateItem)
    res.send(updateItem)
}

const deleteItemById = async (req, res) => {
    let deletedItem = await Item.findOneAndRemove({ _id: req.params.id })
    console.log('Deleted Item!')
    res.send(deletedItem)
}

module.exports = {
    getItems,
    getItemById,
    postItem,
    putItemById,
    deleteItemById
}