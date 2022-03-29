const db = require('../db')
const { Item } = require('../models')

const getItem = async (req, res) => {
    let gotItem = await Item.find({})
    console.log(gotItem)
    res.send(gotItem)
}

const postItem = async (req, res) => {
    let postedItem = await Item.find({})
    console.log('posted item')
    res.send(postedItem)
}

const putItem = async (req, res) => {
    let putsItem = await Item.find({})
    console.log('putsItem')
    res.send(putsItem)
}

const deleteItem = async (req, res) => {
    let deletedItem = await Item.find({})
    console.log('deletedItem')
    res.send(deletedItem)
}

module.exports = {
    getItem,
    postItem,
    putItem,
    deleteItem
}