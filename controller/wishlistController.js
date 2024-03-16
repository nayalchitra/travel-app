
const wishlistModel = require('../model/wishlist.model');

const addWishlistHandler = async(req,res)=>{
    try {
        const newWishlist = new wishlistModel(req.body);
        const saveWishlist = newWishlist.save();
        res.json(saveWishlist);
    } catch (error) {
        res.status(404).json({message:'error in adding hotel to wishlist'})
    }
}

const getWishlistHandler = async(req,res)=>{
    try {
        const allWishlist = await wishlistModel.find({});
        if(allWishlist.length){
            res.status(200).json(allWishlist);
        }
        else{
            res.status(201).json({message:'no wishlist found'});
        }

    } catch (error) {
        res.status(404).json({message:'failed to fetch wishlist'})
    }
}

const deleteWishlistHandler =async(req,res)=>{
    try {
        const id = req.params.hotelId;
        const wishlist = await wishlistModel.findByIdAndDelete(id);
        
        res.status(200).json({message:'wishlist deleted successfully!'});
    } catch (error) {
        console.log(error);
        res.status(404).json({message:'delete failed'});
    }
}


module.exports = {addWishlistHandler,getWishlistHandler,deleteWishlistHandler};
