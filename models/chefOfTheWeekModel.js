const mongoose = require('mongoose');

const ChefOfTheWeekSchema = new mongoose.Schema({
    chef: {type: mongoose.Schema.Types.ObjectId, ref: 'Chef'}
})

const chefOfTheWeekModel = mongoose.model('ChefOfTheWeek', ChefOfTheWeekSchema)

module.exports = {chefOfTheWeekModel}
