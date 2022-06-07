const dishModel = require('../models/dishModel').dishModel


const getAllDishes = () =>{
    return dishModel.find().populate({path:"restaurant", select: 'name -_id'})
}

const addDish = (data) =>{
    return dishModel.create(data)
}

const updateDish = (id, data) => {

    return dishModel.findByIdAndUpdate(id, data, {runValidators: true, new: true});
}

const deleteDish = (id) => {
    return dishModel.deleteOne({_id: id});
}

const searchDishes = (key) =>{
    return dishModel.find({
        "$or":[
            {name: {$regex:key}}
        ]
    })
}

module.exports = {getAllDishes, addDish, updateDish, deleteDish, searchDishes}
