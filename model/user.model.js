const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const userSchema =new Schema({
    username:{type:String, required:true},
    number:{type:Number,required:true, unique:true},
    emailId:{type:String, required:true, unique:true},
    password:{type:String,required:true},
},
{
    timestamps:true
})

const user = mongoose.model('user',userSchema);
module.exports = user;