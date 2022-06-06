const mongoose = require('mongoose')



const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String
    },
    chef: {type: mongoose.Schema.Types.ObjectId, ref: 'Chef'},
    rating: {
        type:Number,
        min:[0,'You can not enter below 0'],
        max:[5, 'you can not enter above 5']
    },
    popular: Boolean,
    openingHours: {
        sunday: {
            open: String,
            close: String
        },
        monday: {
            open: String,
            close: String
        },
        tuesday: {
            open: String,
            close: String
        },
        wednesday: {
            open: String,
            close: String
        },
        thursday: {
            open: String,
            close: String
        },
        friday: {
            open: String,
            close: String
        },
        saturday: {
            open: String,
            close: String
        },
    },
    address: String,
    image: String

})

const restModel = mongoose.model('Restaurant', RestaurantSchema)

module.exports = {restModel}
