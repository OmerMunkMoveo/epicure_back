const express = require('express')
const app = express()

const url = 'mongodb://127.0.0.1:27017/epicure';
const mongoose = require('mongoose')

mongoose.connect(url, {
    useNewUrlParser: true, useUnifiedTopology: true
},() => console.log('connected'))

const RestaurantSchema = new mongoose.Schema({
    name:String,
    chef: {type: mongoose.Schema.Types.ObjectId, ref:'Chef'}

})

const restModel = mongoose.model('Restaurant',RestaurantSchema)

const ChefSchema = new mongoose.Schema({
    name:String,
    description:String
})

const chefModel = mongoose.model('Chef',ChefSchema)

app.use(express.json())
app.get('/api/restaurants', async (req, res) => {
    const result = await restModel.find().populate({path: "chef", select: 'name -_id'})
    console.log(result)
    res.status(200).json({
        status:'success',
        data: result
    })
})

app.post('/api/restaurants',async (req,res) => {
    try {
        console.log(req.body)
        const result = await restModel.create(req.body)
        res.status(201).json({
            status:'success',
            data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err
        })
    }

})

app.get('/api/chefs', async (req, res) => {
    const result = await chefModel.find()
    console.log(result)
    res.status(200).json({
        status:'success',
        data: result
    })
})

app.post('/api/chefs',async (req,res) => {
    try {
        console.log(req.body)
        const result = await chefModel.create(req.body)
        res.status(201).json({
            status:'success',
            data:result
        })
    } catch (err) {
        res.status(400).json({
            status:'fail',
            message:err
        })
    }

})


app.listen(3000)
