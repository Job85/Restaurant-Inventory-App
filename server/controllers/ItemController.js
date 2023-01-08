const { Item } = require('../models')

const getItems = async (req, res) => {
    let gotItem = await Item.find({})
    console.log('Got Items!')
    res.send(gotItem)
}

const postItem = async (req, res) => {
    const item = new Item(
        req.body
    )
    await item.save()
    console.log('Item Created!')
    res.send(item)
}

module.exports = {
    getItems,
    postItem
}