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

const updateChefOfTheWeek = async (id) => {
    const oldChef = await chefModel.findOneAndUpdate({chefOfTheWeek : true}, {chefOfTheWeek: false}, {new:true})
    return chefModel.findByIdAndUpdate(id, {chefOfTheWeek: true}, {new: true})
}

const searchChefs = (key) =>{
    return chefModel.find({
        "$or":[
            {name: {$regex:key}}
        ]
    })
}

module.exports = {getAllChefs, addChef, getAllChefsIds, updateChef, deleteChef, updateChefOfTheWeek, searchChefs}

