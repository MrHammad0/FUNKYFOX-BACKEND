const data=require('../models/Admin')
const transporter=require("../middleware/transporter")

const jwt=require('jsonwebtoken')
exports.Signup=async(req,res)=>{
    const{firstName,lastName,email,passward}=req.body

 try {
    const User=new data({
        firstName,
        lastName,
        email,
        passward

    })
   await User.save()
    res.status(201).json({mesg:"your data is saves seccessfully",User})
}
    
 catch (error) {
    res.status(500).json({mesg:"sever error",err:error.message})
 }
}
exports.login=async(req,res)=>{
    const{email,passward}=req.body

   try {

    const mail= await data.findOne({email})
    if(!mail){
       return res.status(404).json({mesg:"user not found with this email"})
    }
  
    const chkPassward=  await passward==mail.passward
    if(!chkPassward){
      return  res.status(401).json({mesg:"invalid credentials"})
    }
   
    const token =   await jwt.sign({userId: mail._id, email: mail.email}, process.env.JWT_SECRET, {expiresIn: "1h"})

  
     res.status(200).json({mesg:"user login successfully",token})
    
   }
 catch (error) {
    res.status(500).json({mesg:"server error",err:error.message})
   }

}
exports.userUpdate=async(req,res)=>{
    const{id}=req.params;
    const information=req.body;
    try {
      
        const updation=await data.findByIdAndUpdate(id,information,{new:true})
        if(!updation){
          return res.status(401).json({mesg:"user not found with this id"})
        }
        res.status(200).json({mesg:"user update successfully"})

        

        
    } catch (error) {
        res.status(500).json({mesg:"server error",err:error.message})
        
    }


}
exports.deleteUser=async(req,res)=>{
    const{id}=req.params
   try {
    const deletion=await data.findById(id)//why not obj
    if(!deletion){
        return res.status(401).json({mesg:"user not found with this id"})
    }
    res.status(200).json({mesg:"user delete successfully"})
   } catch (error) {
    res.status(500).json({mesg:"server error",err:error.message})
   }

}

exports.resetUserPassward= async (req,res)=>{

    const{email}=req.body
    try {
        const userEmail= await data.findOne({email})
        console.log(userEmail)
        if(!userEmail){
           return res.status(401).json({mesg:"user not found with this email"})
        }
       
        const token = await jwt.sign({ userID: userEmail._id , email: userEmail.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
  
        const url= `${process.env.FRONTEND_URL}/reset/passward/${token}`
        console.log(url);
        const mailoption={
            form:process.env.HOST_EMAIL,
            to:email,
            subject:"reset passward",
            html:`<div>this is reset passward <br>${url}</div>`
        }
        await transporter.sendMail(mailoption)
        res.status(200).json({mesg:"passward reset successfullly"})

    } catch (error) {
        res.status(500).json({mesg:"server error",err:error.message})
    }
}
exports.resetPassward = async(req,res) => {
    const {token} = req.params;
    const {passward} = req.body;
    try {
        

        const {userID} = await jwt.verify(token, process.env.JWT_SECRET);
    
        
        
    
        const user = await data.findByIdAndUpdate(userID, {passward}, {new: true});
        if(!user){
            return res.status(401).json({mesg: "user not found"})
        }

        res.status(200).json({mesg: "password reset successfully"})
    } catch (error) {
        return res.status(500).json({mesg: "Internal server error", err: error.message})
    }
}