const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');
const userRouter = express.Router();

module.exports = {userRouter}

userRouter.post('/signup', authController.requestSignup)
userRouter.post('/login', authController.requestLogin)
userRouter.post('/forgotPassword', authController.forgotPassword)
userRouter.patch('/resetPassword/:token', authController.resetPassword)

userRouter.route('/')
    .get(userController.requestGetAllUsers)
    // .post(userController.createUser);

// userRouter.route('/:id')
//     .get(userController.getUser)
//     .patch(userController.updateUser)
//     .delete(userController.deleteUser);
