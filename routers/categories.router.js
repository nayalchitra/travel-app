const express = require('express');
const categoryHandler = require('../controller/categoryController');


const categoriesRouter = express.Router();

categoriesRouter.route("/").get(categoryHandler)

module.exports = {categoriesRouter};