
const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const wishListSchema = new Schema({
    hotelId: {type:String, required:true}
})

const wishlist = mongoose.model('Wishlist', wishListSchema);

module.exports = wishlist;
