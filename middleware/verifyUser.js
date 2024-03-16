const express = require('express');
const jwt = require('jsonwebtoken');


const verifyUser = (req,res,next)=>{
    try {
        const token = req.headers.authorization;
        const verifyToken = jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
            if(err){
                res.status(403).send({message:'invalid token'});
                req.user = user;
                next();
            }
            else{
                
            }
        }) 
    } catch (error) {
        res.status(404).send({message:'error in verifying user'})
    }
}

module.exports = verifyUser;