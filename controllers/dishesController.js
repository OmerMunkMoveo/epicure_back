const handler = require('../handlers/dishesHandler')


const requestAllDishes = () => {
    return handler.getAllDishes()
}

const requestAddDish = (data) =>{
    return handler.addDish(data)
}


module.exports = {requestAllDishes, requestAddDish}
