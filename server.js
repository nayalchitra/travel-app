const express = require('express');
const { hotelRouter } = require('./routers/hotels.router');
const { categoriesRouter } = require('./routers/categories.router');
const { default: mongoose } = require('mongoose');
const {connectDB} = require('./config/dbconfig');
const addHotelDataRouter = require("./routers/dataimport.hotel");
const addCategoryDataRouter = require("./routers/dataimport.category");
const singleHotelRouter = require("./routers/singleHotel.router");
const userRegisterRouter = require('./routers/auth.router');
const wishlistRouter = require('./routers/wishlist.router');

connectDB();
const app = express();
const PORT = 4000;

app.get("/", (req,res)=>{
    res.send("hello geeks!!");
})
app.use(express.json());

app.use("/api/hotelsData",addHotelDataRouter);
app.use("/api/categorydata",addCategoryDataRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category",categoriesRouter);
app.use("/api/hotels",singleHotelRouter);
app.use("/api/auth", userRegisterRouter);
app.use("/api/wishlist", wishlistRouter);



mongoose.connection.once("open",()=>{
    console.log("connection established");
    app.listen(process.env.PORT|| 4000, ()=>{
        console.log("server started")
    })
})
