const mongoose = require("mongoose");
const {Schema} = require('mongoose')
// import { Schema } from "mongoose";

const categorySchema = Schema({
  
    category: {type : String, required:true},
  
})

const category = mongoose.model('category',categorySchema);
module.exports = category;