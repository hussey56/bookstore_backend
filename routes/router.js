const express = require('express');
const Router = express.Router();
const userController = require("../controller/UserController");

// customer details

 // #1. add user infromation to the db
 Router.post('/add_user',userController.register);


// admin mangemnet

// book mangement

// wishlist mangement

// order mangement

// rating and reviews and likes on reviews





module.exports = Router