const express = require('express')
const chefsRouter = express.Router()
const controller = require('../controllers/chefsController')

module.exports = {chefsRouter}


chefsRouter.route('/')
    .get(controller.requestAllChefs)
    .post(controller.requestAddChef)
chefsRouter.route('/chef_of_the_week')
    .post(controller.requestAddChefOfTheWeek)
    .patch(controller.requestUpdateChefOfTheWeek)
    .get(controller.requestChefOfTheWeek)
chefsRouter.route('/ids')
    .get(controller.requestAllChefsIds)
chefsRouter.route('/:id')
    .patch(controller.requestUpdateChef)
    .delete(controller.requestDeleteChef)




//
// chefsRouter.get('/', async (req, res)=>{
//     try{
//         const result = await controller.requestAllChefs()
//         res.status(200).json({
//             status: 'success',
//             data: result
//         })
//
//     }catch (err){
//         res.status(400).json({
//             status: 'fail',
//             message: err
//         })
//     }
//
// })
//
// chefsRouter.get('/ids', async (req, res)=>{
//     const result = await controller.requestAllChefsIds()
//     res.status(200).json(
//         {
//             status: 'success',
//             data: result
//         }
//     )
// })
//
//
// chefsRouter.post('/', async(req, res)=>{
//     try{
//         const result = await controller.requestAddChef(req.body)
//         res.status(200).json({
//             status:'success',
//             data: result
//         })
//     }catch (err){
//         res.status(400).json({
//             status: 'fail',
//             message: err
//         })
//     }
// } )
//
//
// chefsRouter.patch('/:id', async (req, res) => {
//     try {
//         const chef = await controller.requestUpdateChef(req.body, req.params.id)
//         res.status(200).json({
//             status: 'success',
//             data: chef
//         })
//     } catch (err) {
//         res.status(400).json({
//             status: 'fail',
//             message: err
//         })
//     }
// })
//
// chefsRouter.delete('/:id', async(req, res)=>{
//     try{
//         const chef = await controller.requestDeleteChef(req.params.id);
//         res.status(200).json({
//             status:'success',
//             data: chef,
//             deleted: `chef ${req.params.id}`
//         })
//     } catch (err){
//         res.status(400).json({
//             status: 'fail',
//             message: err
//         })
//     }
// })
//
//
// chefsRouter.post('/chef_of_the_week/:id', async (req, res) => {
//     try {
//         const chef = await controller.requestUpdateChefOfTheWeek(req.params.id);
//         res.status(200).json({
//             status: 'success',
//             data: chef,
//         })
//     } catch (err) {
//         res.status(400).json({
//             status: 'fail',
//             message: err
//         })
//     }
// })
