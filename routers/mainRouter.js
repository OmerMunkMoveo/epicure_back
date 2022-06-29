const express = require('express')
const searchRouter= require("./searchRouter").searchRouter
const router = express.Router()
const restaurantsRouter = require('./restaurantsRouter').restaurantsRouter
const chefsRouter = require('./chefsRouter').chefsRouter
const dishesRouter = require('./dishesRouter').dishesRouter
const userRouter = require('./userRouter').userRouter


module.exports = {router}

router.use('/restaurants', restaurantsRouter)
router.use('/chefs', chefsRouter)
router.use('/dishes', dishesRouter)
router.use('/search', searchRouter)
router.use('/users', userRouter)



/*
* api/v1/chefs/getall
* api/v2/chefs/getall
*
* */
