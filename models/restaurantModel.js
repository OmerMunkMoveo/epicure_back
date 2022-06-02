const mongoose = require('mongoose')



const RestaurantSchema = new mongoose.Schema({
    name: String,
    chef: {type: mongoose.Schema.Types.ObjectId, ref: 'Chef'},
    rating: {
        type:Number,
        min:[0,'You can not enter below 0'],
        max:[5, 'you can not enter above 5']
    },
    popular: Boolean

})

const restModel = mongoose.model('Restaurant', RestaurantSchema)

module.exports = {restModel}
