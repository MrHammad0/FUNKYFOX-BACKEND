const express=require("express")
const{information,update,deleteInformation}=require("../controller/maintenance")
const maintRoutes=express.Router()



maintRoutes.post("/Information",information)
maintRoutes.post("/update/:id",update)
maintRoutes.delete("/deleteInformation/:id",deleteInformation)
module.exports=maintRoutes