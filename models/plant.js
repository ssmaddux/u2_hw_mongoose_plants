const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const plantSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
)
//names collection `Plant`
module.exports = mongoose.model('Plant', plantSchema)