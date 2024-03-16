
const hotelModel = require('../model/hotel.model');


const hotelHandler = async(req,res)=>{
    const hotelCatagory = req.query.category;
    try {
        let hotelData;
        if(hotelCatagory)
        {
            hotelData = await hotelModel.hotel.find({catagory:hotelCatagory});
        }
        else{
            hotelData = await hotelModel.hotel.find({}) ;
        }
        hotelData ? res.send(hotelData) : res.send({message:"no data found"});
    } catch (error) {
        res.send({message:"not able to fetch data"})
    }
}

module.exports = hotelHandler;