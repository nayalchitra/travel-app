
const User = require('../model/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const loginHandler = async(req,res)=>{
    try {
    
        const userLogin = await User.findOne({number:req.body.number});
        if(userLogin){
            const passwordCheck = bcrypt.compareSync(req.body.password,userLogin.password);
            if(passwordCheck)
            {
                const {password, ...rest} = userLogin._doc;
                // console.log(rest);
                res.status(201).send(`user login with username: ${userLogin.username} successful`);
                const token = jwt.sign({username:userLogin.username},process.env.ACCESS_TOKEN);
            }else{
                res.status(404).json({message:'incorrect password'});
            }
        } 
        else{
            res.status(200).json({message:'user not found'});
        }
    } catch (error) {
        console.log(error);
        res.status(404).send({message:"error in login"});
    }
}

module.exports = loginHandler;