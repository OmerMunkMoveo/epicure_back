const handler = require('../handlers/dishesHandler')


const requestAllDishes = () => {
    return handler.getAllDishes()
}

const requestAddDish = (data) =>{
    return handler.addDish(data)
}

const requestUpdateDish = async (data, id) => {
    const dish = await handler.getSingleDish(id, data)
    return dish
}


module.exports = {requestAllDishes, requestAddDish, requestUpdateDish}
