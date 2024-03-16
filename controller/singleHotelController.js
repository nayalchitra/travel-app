
const hotelModel = require("../model/hotel.model");


const singleHotelHandler = async(req,res)=>{
    try {
      const hotelId = req.params.id;
      const singleHotel = await hotelModel.hotel.find({_id:hotelId})
      singleHotel ? res.json(singleHotel) : res.status(202).json({message:"no hotels found"});
 
    } catch (error) {
         res.status(404).send({message:"error in sending single Hotel"})
    }
 
 }

 module.exports = singleHotelHandler;