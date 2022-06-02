const chefModel = require('../models/chefModel').chefModel


const getAllChefs = () => {
    return chefModel.find()

}

const getAllChefsIds = () => {
    return chefModel.find({}).select('_id')

}

const addChef = (data) => {
    return chefModel.create(data)
}

module.exports = {getAllChefs, addChef, getAllChefsIds}

