const mongoose = require('mongoose')



const dishSchema = new mongoose.Schema({
    name: String,
    restaurant: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
    description: String,
    img: String,
    price: Number,
    properties: String,
    signature: Boolean

})

const dishModel = mongoose.model('Dish', dishSchema)

module.exports = {dishModel}
