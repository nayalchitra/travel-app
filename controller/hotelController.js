
const hotelModel = require('../model/hotel.model');


const hotelHandler = async(req,res)=>{
    const hotelCategory = req.query.category;
    console.log({hotelCategory})

    try {
        let hotelData;
        if(hotelCategory && hotelCategory!=undefined && hotelCategory!='undefined' && hotelCategory !=null)
        {
            hotelData = await hotelModel.hotel.find({category: hotelCategory});
            console.log("inner ",{hotelData});
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