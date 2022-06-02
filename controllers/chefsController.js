const handler = require('../handlers/chefsHandler')


const requestAllChefs = () => {
    return handler.getAllChefs()
}

const requestAllChefsIds = () => {
    return handler.getAllChefsIds()
}

const requestAddChef = (data) => {
    return handler.addChef(data)
}


const requestUpdateChef = async (data, id) => {
    const chef = await handler.getSingleChef(id, data)
    return chef
}


module.exports = {requestAllChefs, requestAddChef, requestAllChefsIds, requestUpdateChef}
