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


const updateChef = (id, data) => {

    return chefModel.findByIdAndUpdate(id, data, {runValidators: true, new: true});
}

const deleteChef = (id) => {
    return chefModel.deleteOne({_id: id});
}

module.exports = {getAllChefs, addChef, getAllChefsIds, getSingleChef: updateChef, deleteChef}

