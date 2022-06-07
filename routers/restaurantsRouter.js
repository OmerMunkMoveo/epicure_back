const express = require('express')
const restaurantsRouter = express.Router()
const controller = require('../controllers/restaurantsController')

module.exports = {restaurantsRouter}

restaurantsRouter.route('/')
    .get(controller.requestAllRestaurants)
    .post(controller.requestAddRestaurant)
restaurantsRouter.route('/:id')
    .patch(controller.requestUpdateRestaurant)
    .delete(controller.requestDeleteRestaurant)

