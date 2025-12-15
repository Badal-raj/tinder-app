const express = require('express');

const { SignUpUser, SignInUser} = require('../controllers/UserController')

const userRoutes = express.Router();

userRoutes.post('/signup', SignUpUser);
userRoutes.post('/signin', SignInUser);


module.exports = {
    userRoutes
}

