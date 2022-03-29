const db = require('../db')
const { Item } = require('../models')

const getItem = async (req, res) => {
    let gotItem = await Item.find({ key: 'Dairy' })
    console.log(gotItem)
    res.send(gotItem)
}

const postItem = async (req, res) => {
    let postedItem = await Item.find({ key: 'Dairy' })
    console.log('posted item')
    res.send(postedItem)
}



module.exports = {
    getItem,
    postItem
}