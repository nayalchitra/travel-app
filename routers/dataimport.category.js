const express = require('express');

const {category} = require("../model/category.model");
const catagoryData = require("../data/categories");


const router = express.Router();

router.post("/",async (req,res)=>{
    try{
        // hotel.remove({});
        const categories = await category.insertMany(catagoryData.data);
        res.json(categories);
    }
    catch(err){
        res.send({message:"No category data inserted to DB!"});
    }
})

module.exports = router;