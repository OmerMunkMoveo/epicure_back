const handler = require('../handlers/restaurantsHandler')
// const validate = require('./validations/restaurantValidator').validate


const requestAllRestaurants = async (req, res) =>{
    try {
        const result = await handler.getAllRestaurants()
        res.status(200).json({
            status: 'success',
            data: result,
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}
// const requestAddRestaurant = async (data) => {
//     // const {error} = await validate(data)
//     // console.log(error)
//     // if (error) return error.details[0].message;
//
// }
const requestAddRestaurant = async(req, res) => {
    try {
        const data = req.body
        const restaurant = {
            ...data,
            rating: data.rating ? data.rating : 0,
            popular: data.popular ? data.popular : false
        }
        const result =await handler.addRestaurant(restaurant)
        res.status(200).json({
            status: 'success',
            data: result
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

const requestUpdateRestaurant =  async (req, res) => {
    try {
        const restaurant = await handler.getSingleRestaurant(req.params.id, req.body)
        res.status(200).json({
            status: 'success',
            data: restaurant
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

}

const requestDeleteRestaurant = async (req, res) => {
    try{
        const restaurant = await handler.deleteRestaurant(req.params.id);
        res.status(200).json({
            status:'success',
            data: restaurant,
            deleted: `restaurant ${req.params.id}`
        })
    } catch (err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

}

const requestSearchRestaurants = (key) =>{
    return handler.searchRestaurants(key)
}


module.exports = {requestAllRestaurants, requestAddRestaurant, requestUpdateRestaurant, requestDeleteRestaurant, requestSearchRestaurants}
