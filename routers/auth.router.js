const express = require('express');
const dotenv = require('dotenv');

const signupHandler = require('../controller/signupController');
const loginHandler = require('../controller/loginController');

const router = express.Router();


dotenv.config();

router.route("/register").post(signupHandler);

router.route("/login").post(loginHandler);

module.exports = router;
