const { Schema } = require('mongoose')

const Item = new Schema(
    {
        location: { type: String, require: true },
        category: { type: String, require: true },
        item: { type: String, require: true },
        size: { type: String, require: true },
        count: { type: Number, require: true },
        inventoryList_id: { type: Schema.Types.ObjectId, ref: 'inventoryList_id' }
    },
    { timestamps: true }
)

module.exports = Item