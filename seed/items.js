const db = require('../db')
const { Item } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const items = []

    await Item.create(items)
}

const run = async () => {
    await main()
    db.close()
}

run()