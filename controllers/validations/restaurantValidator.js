const Joi = require("joi");
const axios = require('axios')



const validate = async (restaurant) => {
    let data;
    await axios.get('http://localhost:3000/api/chefs/ids').then(res =>{
        data = res.data
    })
    let chefsIds = data.data.map(chef => chef._id)


    const schema = Joi.object({
        name: Joi.string().min(1).required(),
        chef: Joi.string().valid(...chefsIds).required(),
        rating: Joi.number().min(0).max(5),
        popular: Joi.boolean()

    });

    return schema.validate(restaurant);
};

module.exports = {validate}
