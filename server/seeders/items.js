const db = require('../db')
const { Item } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const items = [
        {
            location: 'demo locatn',
            category: 'demo category',
            item_name: 'demo item',
            description: 'demo description',
            unit_measure: 'demo measure',
            case_size: 4,
            vendor_name: 'demo vendor',
            vendor_code: 'demo code'
        }
    ]

    await Item.insertMany(items)
    console.log('Created items')
}

const run = async () => {
    await main()
    db.close()
}

run()