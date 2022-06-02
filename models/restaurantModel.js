const mongoose = require('mongoose')



const RestaurantSchema = new mongoose.Schema({
    name: String,
    chef: {type: mongoose.Schema.Types.ObjectId, ref: 'Chef'},
    rating: Number,
    popular: Boolean

})



const restModel = mongoose.model('Restaurant', RestaurantSchema)

module.exports = {restModel}
