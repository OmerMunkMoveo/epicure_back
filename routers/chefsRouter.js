const express = require('express')
const chefsRouter = express.Router()
const controller = require('../controllers/chefsController')

module.exports = {chefsRouter}



chefsRouter.get('/', async (req, res)=>{
    try{
        const result = await controller.requestAllChefs()
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

chefsRouter.get('/ids', async (req, res)=>{
    const result = await controller.requestAllChefsIds()
    res.status(200).json(
        {
            status: 'success',
            data: result
        }
    )
})


chefsRouter.post('/', async(req, res)=>{
    try{
        const result = await controller.requestAddChef(req.body)
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


chefsRouter.patch('/:id', async (req, res) => {
    try {
        const chef = await controller.requestUpdateChef(req.body, req.params.id)
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
})

chefsRouter.delete('/:id', async(req, res)=>{
    try{
        const chef = await controller.requestDeleteChef(req.params.id);
        res.status(200).json({
            status:'success',
            data: chef,
            deleted: `chef ${req.params.id}`
        })
    } catch (err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
})
