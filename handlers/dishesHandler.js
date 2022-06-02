const dishModel = require('../models/dishModel').dishModel


const getAllDishes = () =>{
    return dishModel.find().populate({path:"restaurant", select: 'name -_id'})
}

const addDish = (data) =>{
    return dishModel.create(data)
}

module.exports = {getAllDishes, addDish}
