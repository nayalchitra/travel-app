const express = require('express');
const router = express.Router();
const userVerify = require('../middleware/verifyUser');
const wishlistHandler = require('../controller/wishlistController');
const {addWishlistHandler,getWishlistHandler,deleteWishlistHandler} = wishlistHandler;

router.route("/").post(userVerify,addWishlistHandler)

router.route("/:hotelId").delete(userVerify,deleteWishlistHandler)

router.route("/").get(userVerify,getWishlistHandler);


module.exports = router;