const express = require('express')
const router = express.Router()
const restaurantsRouter = require('./restaurantsRouter').restaurantsRouter
const chefsRouter = require('./chefsRouter').chefsRouter
const dishesRouter = require('./dishesRouter').dishesRouter


module.exports = {router}

router.use('/restaurants', restaurantsRouter)
router.use('/chefs', chefsRouter)
router.use('/dishes', dishesRouter)
