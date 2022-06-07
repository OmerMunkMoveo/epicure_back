const handler = require('../handlers/dishesHandler')


const requestAllDishes = async (req, res) => {
    try {
        const result = await handler.getAllDishes()
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

const requestAddDish = async (req, res) => {
    try {
        const result = await handler.addDish(req.body)
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

const requestUpdateDish = async (req, res) => {
    try {
        const dish = await handler.updateDish(req.params.id, req.body)
        res.status(200).json({
            status: 'success',
            data: dish
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

}

const requestDeleteDish = async (req, res) => {
    try {
        const dish = await handler.deleteDish(req.params.id);
        res.status(200).json({
            status: 'success',
            data: dish,
            deleted: `dish ${req.params.id}`
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

}

const requestSearchDishes = (key) =>{
    return handler.searchDishes(key)
}


module.exports = {requestAllDishes, requestAddDish, requestUpdateDish, requestDeleteDish, requestSearchDishes}
