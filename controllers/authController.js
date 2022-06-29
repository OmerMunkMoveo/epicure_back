const handler = require('../handlers/authHandler');
const AppError = require('../utils/appError');
const util = require('util');
const jwt = require('jsonwebtoken');
const sendEmail = require('../utils/email').sendEmail
const crypto = require('crypto')
const {signToken} = require("../handlers/authHandler");

const requestSignup = async (req, res, next) => {
    try {
        const result = await handler.addUser(req.body);
        const newUser = result.user
        const token = result.token
        res.status(201).json({
            status: 'success',
            token: token,
            data: {
                user: newUser
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }

}


const requestLogin = async (req, res, next) => {
    try {
        const {email, password} = await req.body

        //Check if email and password exists
        if (!email || !password) {
            return next(new AppError('Please Provide email and password!', 400))
        }


        //Check if user exists && password is correct
        const result = await handler.login(email, password)
        if (!result.user || !result.correct) {
            return next(new AppError('Incorrect email or password', 401))
        }

        //If everything ok, send token to client
        const token = await handler.signToken(result.user._id);
        res.status(200).json({
            status: 'success',
            token: token
        })

    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

const protect = async (req, res, next) => {
    //Get token and check if it's there
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }
    if (!token) {
        return next(new AppError('You are not logged in! Please log in to get access', 401))
    }


    //Verification token

    try {
        //Verification token
        const decoded = await util.promisify(jwt.verify)(token, process.env.JWT_SECRET)

        //Check if user still exists
        const currentUser = await handler.getUserById(decoded.id)
        if (!currentUser) {
            return next(new AppError('The user belongs to this token, does no longer exist'))
        }

        //Check if user changed password after the token was issued
        const result = await (currentUser.changedPasswordAfter(decoded.iat))
        if (result) {
            console.log('true!!!!!')
            return next(new AppError('User recently changed password! Please log in again', 401))
        }

        // GRANT ACCESS TO PROTECTED ROUTE
        req.user = currentUser;
        next();
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

const restrictTo = (...roles) => {
    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return next(new AppError('You do not have permission to perform this action', 403))
        }
        next();
    }
}

const forgotPassword = async (req, res, next) => {
    // Get User based on POSTed email
    const user = await handler.getUserByEmail(req.body.email);
    if (!user) {
        next(new AppError('There is not user with that email address', 404));
    }


    //Generate the random reset token
    const resetToken = user.createPasswordResetToken()
    await user.save({validateBeforeSave: false});


    //Send it to the user's email
    const resetURL = `${req.protocol}://${req.get('host')}/api/users/resetPassword/${resetToken}`
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to:' +
        '${resetURL}.\nIf you didn't forgot your password, please ignore this email!`;


    try {
        await sendEmail({
            email: user.email,
            subject: 'Your password reset token (valid for 10 min)',
            message: message
        })

        res.status(200).json({
            status: 'success',
            message: 'Token sent to email'
        })
    } catch (err) {
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save({validateBeforeSave: false})
        return next(new AppError('There was an error sending the email. Try again later', 500))

    }


}

const resetPassword = async(req, res, next) => {
    //Get user based on the token
    const hashedToken = crypto
        .createHash('sha256')
        .update(req.params.token)
        .digest('hex')

    const user = await handler.getUserByPasswordResetToken(hashedToken)


    //If token has not expired, and there is user, set the new password
    if (!user){
        return next(new AppError('Token is invalid or has expired', 400))
    }
    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined
    await user.save();


    //Update changedPasswordAt property for the user
    //Log the user in, send JWT

    const token = signToken(user._id)

    res.status(200).json({
        status: 'success',
        token: token
    })

}

module.exports = {requestSignup, requestLogin, protect, restrictTo, forgotPassword, resetPassword}
