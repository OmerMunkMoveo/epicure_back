const restModel = require('../models/restaurantModel').restModel


const getAllRestaurants = () => {
    return restModel.find().populate({path: "chef", select: 'name -_id'});
}

const addRestaurant = (data) => {
    return restModel.create(data)
}

const updateRestaurant = (id, data) => {

    return restModel.findByIdAndUpdate(id, data, {runValidators: true, new: true});
}

const deleteRestaurant = (id) => {
    return restModel.deleteOne({_id: id});
}

// const updateRestaurant = (id) => {
//
// }

module.exports = {getAllRestaurants, addRestaurant, getSingleRestaurant: updateRestaurant, deleteRestaurant}
