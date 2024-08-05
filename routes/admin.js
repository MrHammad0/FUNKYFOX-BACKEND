const express=require('express')
const{Signup,login,userUpdate,deleteUser,resetUserPassward,resetPassward}=require('../controller/admin')
const adminRoutes=express.Router()


adminRoutes.post("/signup",Signup)
adminRoutes.post("/login",login)
adminRoutes.put("/userUpdate/:id",userUpdate)
adminRoutes.delete("/deleteUser/:id",deleteUser)
adminRoutes.post("/resetUserPassward",resetUserPassward)
adminRoutes.put("/reset/Passward/:token",resetPassward)
module.exports= adminRoutes