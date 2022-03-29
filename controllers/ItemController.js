const db = require('../db')
const { Item } = require('../models')

const getItem = async (req, res) => {
    let gotItem = await Item.find({ key: 'Dairy' })
    console.log(gotItem)
    res.send(gotItem)
}



module.exports = {
    getItem
}