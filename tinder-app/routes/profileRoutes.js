const express = require("express");

const userProfileRoute = express.Router();

const {userViewProfile} = require('../controllers/userProfileController');
const {AuthenticateUser} = require('../middlewares/AuthToken');

userProfileRoute.get("/view-profile", AuthenticateUser, userViewProfile);

module.exports ={
  userProfileRoute  
}
