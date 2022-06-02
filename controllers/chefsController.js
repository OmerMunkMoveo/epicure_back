const handler = require('../handlers/chefsHandler')


const requestAllChefs = () => {
    return handler.getAllChefs()
}

const requestAllChefsIds = () => {
    return handler.getAllChefsIds()
}

const requestAddChef = (data) =>{
    return handler.addChef(data)
}


module.exports = {requestAllChefs, requestAddChef, requestAllChefsIds}
