const handler = require('../handlers/restaurantsHandler')
const validate = require('./validations/restaurantValidator').validate


const requestAllRestaurants = () => {
    return handler.getAllRestaurants()
}

const requestAddRestaurant = async(data) => {
    const {error} = await validate(data)
    console.log(error)
    if(error) return error.details[0].message;
    const restaurant = {
        ...data,
        rating: data.rating? data.rating : 0,
        popular: data.popular? data.popular : false
    }
    return handler.addRestaurant(restaurant)
}


module.exports = {requestAllRestaurants, requestAddRestaurant}
