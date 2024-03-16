const express = require('express');

const {hotel} = require("../model/hotel.model");
const hotelData = require("../data/hotels");


const router = express.Router();

router.post("/",async (req,res)=>{
    try{
        // hotel.remove({});
        const hotels = await hotel.insertMany(hotelData.data);
        res.json(hotels);
    }
    catch(err){
        res.send({message:"No data inserted to DB!"});
    }
})

module.exports = router;