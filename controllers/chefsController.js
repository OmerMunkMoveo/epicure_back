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
    return await handler.getSingleChef(id, data)
}

const requestDeleteChef = async (id) => {
    return handler.deleteChef(id);
}


module.exports = {requestAllChefs, requestAddChef, requestAllChefsIds, requestUpdateChef, requestDeleteChef}
