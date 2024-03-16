const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();
// console.log(process.env.DB_URL);

const connectDB = async () => {
   try{ await mongoose.connect(process.env.DB_URL);}
   catch(err){
    console.log(err);
   }
}

module.exports = {connectDB};