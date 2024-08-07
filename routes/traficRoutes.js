const express=require("express")
const{trafficFineInfo,trafficFineUpdate,trafficFineDelete}=require("../controller/trafficfines")



const trafficFineRoutes=express.Router()
trafficFineRoutes.post("/trafficFineInfo",trafficFineInfo)
trafficFineRoutes.post("/trafficFineUpdate/:id",trafficFineUpdate)
trafficFineRoutes.delete("/trafficFineDelete/:id",trafficFineDelete)
module.exports= trafficFineRoutes