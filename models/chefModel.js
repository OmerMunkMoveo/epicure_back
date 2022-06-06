const mongoose = require('mongoose')



const ChefSchema = new mongoose.Schema({
    name: String,
    description: String,
    img: String,
    chefOfTheWeek: Boolean
})

const chefModel = mongoose.model('Chef', ChefSchema)

module.exports = {chefModel}
