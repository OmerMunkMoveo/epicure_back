const restModel = require('../models/restaurantModel').restModel


const getAllRestaurants = () => {
    return restModel.find().populate({path: "chef", select: 'name -_id'});
}

const addRestaurant = (data) => {
    return restModel.create(data)
}

const getSingleRestaurant = async (id, data) => {

    const result = await restModel.findByIdAndUpdate(id, data,{runValidators:true, new:true})
    return result
}

// const updateRestaurant = (id) => {
//
// }

module.exports = {getAllRestaurants, addRestaurant, getSingleRestaurant}
