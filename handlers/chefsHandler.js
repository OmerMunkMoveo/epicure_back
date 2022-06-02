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


const getSingleChef = async (id, data) => {

    const result = await chefModel.findByIdAndUpdate(id, data,{runValidators:true, new:true})
    return result
}

module.exports = {getAllChefs, addChef, getAllChefsIds, getSingleChef}

