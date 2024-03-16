
const User = require('../model/user.model');
const bcrypt = require('bcrypt');


const signupHandler = async(req,res)=>{
    console.log(req.body);
    try {
       
        console.log(req.body);
        const userObj ={
            username:req.body.username,
            number:req.body.number,
            emailId:req.body.email,
            password: bcrypt.hashSync(req.body.password,10,process.env.PASSWORD_SECRET_KEY)
        }
        const newUser = new User(userObj);
        const saveUser = await newUser.save();

        res.status(201).send(saveUser);
    } catch (error) {
        console.log(error);
        res.status(404).json({message:"error in user creation"})
    }
}

module.exports = signupHandler;