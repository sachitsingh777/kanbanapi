const express=require("express")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const { UserModel } = require("../models/user.models")

const userRouter=express.Router()

userRouter.post("/signup",async(req,res)=>{
    const {email,password}=req.body
    try{
        bcrypt.hash(password, 8,async function(err, hash) {
            const user=new UserModel({email,password:hash})
           await user.save()
           res.send({"msg":"register successfull"})
        })
    }
    catch(error){
        res.send({"err":error.message})
    }
})


userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body

 try{
   const user=await UserModel.findOne({email})
   if(user){
    bcrypt.compare(password, user.password, function(err, result) {
        if(result){
            var token = jwt.sign({ userId:user._id }, 'mock15');
            res.status(200).send({"msg":"login successful","token":token})
        }else{
            res.status(200).send({"msg":"wrong credentials"})
        }
    })
   }
 }
 catch(error){
    res.status(400).send({"err":error.message})
 }
})

module.exports={userRouter}