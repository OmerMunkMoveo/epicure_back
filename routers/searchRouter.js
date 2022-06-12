const express = require('express')
const searchRouter = express.Router()
const chefsController = require('../controllers/chefsController')
const dishesController = require('../controllers/dishesController')
const restaurantsController = require('../controllers/restaurantsController')

module.exports = {searchRouter}

searchRouter.get('/all/:key', async (req, res)=>{
    try{
        let data = {
            restaurants: null,
            chefs: null,
            dishes: null
        }
        //todo: change them to await one to all these 3, they should happans in the same tine
        //todo: promise all.
        data.restaurants = await restaurantsController.requestSearchRestaurants(req.params.key)
        data.chefs = await chefsController.requestSearchChefs(req.params.key)
        data.dishes = await dishesController.requestSearchDishes(req.params.key)

        res.status(200).json({
            status: 'success',
            data: data
        })
    } catch (err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

})
