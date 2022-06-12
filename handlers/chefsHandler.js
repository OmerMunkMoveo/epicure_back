const chefModel = require('../models/chefModel').chefModel
const chefOfTheWeelkModel = require('../models/chefOfTheWeekModel').chefOfTheWeekModel


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



const searchChefs = (key) =>{
    return chefModel.find({
        "$or":[
            {name: {$regex:key}}
        ]
    })
}


const addChefOfTheWeek = (chef) => {
    return chefOfTheWeelkModel.create({chef: chef})
}


const updateChefOfTheWeek = async (id) => {
    // const oldChef = await chefModel.findOneAndUpdate({chefOfTheWeek : true}, {chefOfTheWeek: false}, {new:true})
    // return chefModel.findByIdAndUpdate(id, {chefOfTheWeek: true}, {new: true})
    return chefOfTheWeelkModel.findOneAndUpdate({},{chef: id})
}

const getChefOfTheWeek = async () =>{
    const chefOfTheWeek = await chefOfTheWeelkModel.findOne().populate({path:'chef'})
    console.log(chefOfTheWeek)
    return chefOfTheWeek
}

// const getChefOfTheWeek = async () =>{
//     await chefOfTheWeelkModel.deleteOne()
// }


module.exports = {getAllChefs, addChef, getAllChefsIds, updateChef, deleteChef, updateChefOfTheWeek, searchChefs, addChefOfTheWeek, getChefOfTheWeek}

