const restModel = require('../models/restaurantModel').restModel


const  getAllRestaurants = () =>{
    return restModel.find().populate({path: "chef", select: 'name -_id'});
}

const addRestaurant = (data) =>{
    return restModel.create(data)
}


module.exports = {getAllRestaurants, addRestaurant}
