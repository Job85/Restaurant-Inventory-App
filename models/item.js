const { Schema } = require('mongoose')

const Item = new Schema(
    {
        _id: { type: Schema.Types.ObjectId, default: null },
        location: { type: String, require: true },
        category: { type: String, require: true },
        item: { type: String, require: true },
        size: { type: String, require: true },
        count: { type: Number, require: true },
        inventory_id: { type: Schema.Types.ObjectId, ref: 'inventory_id' }
    },
    { timestamps: true }
)

module.exports = Item