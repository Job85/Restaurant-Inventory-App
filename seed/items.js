const db = require('../db')
const { Item } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const items = []

    await Item.insertOne(items)
    console.log('Created Items!')
}

const run = async () => {
    await main()
    db.close()
}

run()