const dishModel = require('../models/dishModel').dishModel


const getAllDishes = () =>{
    return dishModel.find().populate({path:"restaurant", select: 'name -_id'})
}

const addDish = (data) =>{
    return dishModel.create(data)
}

const getSingleDish = async (id, data) => {

    const result = await dishModel.findByIdAndUpdate(id, data,{runValidators:true, new:true})
    return result
}

module.exports = {getAllDishes, addDish, getSingleDish}
