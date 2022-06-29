const handler = require('../handlers/userHandler');

const requestGetAllUsers = async (req, res, next) =>{
    try{
        const users = await handler.getAllUsers()
        res.status(200).json({
            status: 'success',
            results: users.length,
            data:{
                users
            }
        })

    }catch (err){
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

module.exports = {requestGetAllUsers}
