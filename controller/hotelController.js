
const hotelModel = require('../model/hotel.model');


const hotelHandler = async(req,res)=>{
    const hotelCategory = req.query.category;
    const destination = req.query.destination;

    console.log({hotelCategory})
    console.log({destination});

    try {
        let hotelData;
        if(hotelCategory && hotelCategory!=undefined && hotelCategory!='undefined' && hotelCategory !=null)
        {
            hotelData = await hotelModel.hotel.find({category: hotelCategory});
            //console.log("inner ",{hotelData});
        }
        else if(destination && destination !=undefined && destination !='undefined' && destination !=null){
            hotelData = await hotelModel.hotel.find({$or:[{address:destination},{city:destination},{state:destination}]});
            console.log(hotelData);
        }
        else{
          
            hotelData = await hotelModel.hotel.find({}) ;
           // console.log("all:",hotelData)
        }
        hotelData ? res.send(hotelData) : res.send({message:"no data found"});
    } catch (error) {
        res.send({message:"not able to fetch data"})
    }
}

module.exports = hotelHandler;