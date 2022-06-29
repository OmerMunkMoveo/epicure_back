const User = require('../models/userModel');


const getAllUsers = () =>{
    return User.find();
}

module.exports = {getAllUsers}
