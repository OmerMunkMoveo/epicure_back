const express = require('express')
const restaurantsRouter = express.Router()
const controller = require('../controllers/restaurantsController')

module.exports = {restaurantsRouter}


restaurantsRouter.get('/', async (req, res) => {
    try {
        const result = await controller.requestAllRestaurants()
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

})


restaurantsRouter.post('/', async (req, res) => {
    try {
        const result = await controller.requestAddRestaurant(req.body)
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
})

restaurantsRouter.patch('/:id', async (req, res) => {
    try {
        const restaurant = await controller.requestUpdateRestaurant(req.body, req.params.id)
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
})
