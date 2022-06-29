const express = require('express')
const restaurantsRouter = express.Router()
const controller = require('../controllers/restaurantsController')
const authController = require('../controllers/authController');

module.exports = {restaurantsRouter}

restaurantsRouter.route('/')
    .get(controller.requestAllRestaurants)
    .post(authController.protect, authController.restrictTo('admin'), controller.requestAddRestaurant)
restaurantsRouter.route('/:id')
    .patch(authController.protect, authController.restrictTo('admin'), controller.requestUpdateRestaurant)
    .delete(authController.protect, authController.restrictTo('admin'), controller.requestDeleteRestaurant)

