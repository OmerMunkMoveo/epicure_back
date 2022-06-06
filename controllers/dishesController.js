const handler = require('../handlers/dishesHandler')


const requestAllDishes = () => {
    return handler.getAllDishes()
}

const requestAddDish = (data) =>{
    return handler.addDish(data)
}

const requestUpdateDish = async (data, id) => {
    return await handler.getSingleDish(id, data)
}

const requestDeleteDish = async (id) => {
    return handler.deleteDish(id);
}


module.exports = {requestAllDishes, requestAddDish, requestUpdateDish, requestDeleteDish}
