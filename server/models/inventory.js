const { Schema } = require('mongoose')

const Inventory = new Schema(
    {
        createdDate: { type: Date, require: true },
        department_id: { type: Schema.Types.ObjectId, ref: 'department_id' }
    },
    { timestamps: true }
)

module.exports = Inventory