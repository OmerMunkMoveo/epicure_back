const handler = require('../handlers/chefsHandler')


const requestAllChefs = async (req, res) => {
    try {
        const result = await handler.getAllChefs()
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

const requestAllChefsIds = async (req, res) => {
    try {
        const result = await handler.getAllChefsIds()
        res.status(200).json({
            status:'success',
            data: result
        })
    }catch (err){
        res.status(400).json({
            status: 'fail',
            data: err
        })
    }
}


const requestAddChef = async (req, res) => {
    try {
        const result = await handler.addChef(req.body)
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


const requestUpdateChef = async (req, res) => {
    try {
        const chef = await handler.updateChef(req.params.id, req.body)
        res.status(200).json({
            status: 'success',
            data: chef
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

}

const requestDeleteChef = async (req, res) => {
    try {
        const chef = await handler.deleteChef(req.params.id);
        res.status(200).json({
            status: 'success',
            data: chef,
            deleted: `chef ${req.params.id}`
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

}


const requestUpdateChefOfTheWeek = (id) => {
    return handler.updateChefOfTheWeek(id)
}

const requestSearchChefs = (key) => {
    return handler.searchChefs(key)
}


module.exports = {
    requestAllChefs,
    requestAddChef,
    requestAllChefsIds,
    requestUpdateChef,
    requestDeleteChef,
    requestUpdateChefOfTheWeek,
    requestSearchChefs
}
