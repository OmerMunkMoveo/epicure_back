const express = require('express')
const dishesRouter = express.Router()
const controller = require('../controllers/dishesController')

module.exports = {dishesRouter}


dishesRouter.get('/', async (req, res)=>{
    try{
        const result = await controller.requestAllDishes()
        res.status(200).json({
            status: 'success',
            data: result
        })

    }catch (err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

})


dishesRouter.post('/', async(req, res)=>{
    try{
        const result = await controller.requestAddDish(req.body)
        res.status(200).json({
            status:'success',
            data: result
        })
    }catch (err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
} )


dishesRouter.patch('/:id', async (req, res) => {
    try {
        const dish = await controller.requestUpdateDish(req.body, req.params.id)
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
})

dishesRouter.delete('/:id', async(req, res)=>{
    try{
        const dish = await controller.requestDeleteDish(req.params.id);
        res.status(200).json({
            status:'success',
            data: dish,
            deleted: `dish ${req.params.id}`
        })
    } catch (err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
})
