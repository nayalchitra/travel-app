const express = require('express');
const hotelRouter = express.Router();
const hotelHandler = require('../controller/hotelController');


hotelRouter.route("/").get(hotelHandler)

module.exports = {hotelRouter};