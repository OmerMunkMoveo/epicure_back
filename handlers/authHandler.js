const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const signToken = (id) => {
    return jwt.sign({id: id}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
}


const addUser = async (data) => {
    const newUser = await User.create({
        name: data.name,
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm
    })
    const token = await signToken(newUser._id)

    return {
        user: newUser,
        token: token
    }
}

const login = async (email, password) => {
    const user = await User.findOne({email: email}).select('+password');
    if (!user) {
        return null;
    }
    const correct = await user.correctPassword(password, user.password)
    return {
        user: user,
        correct: correct
    }
}

const getUserById = async (id) => {
    const user = await User.findById(id)
    return user
}

const getUserByEmail = async (email) => {
    const user = await User.findOne({email: email})
    return user
}

const getUserByPasswordResetToken = async (token) => {
    const user = await User.findOne({
        passwordResetToken: token,
        passwordResetExpires: {$gt: Date.now()}
    })
    return user;
}

module.exports = {addUser, login, signToken, getUserById, getUserByEmail, getUserByPasswordResetToken}
