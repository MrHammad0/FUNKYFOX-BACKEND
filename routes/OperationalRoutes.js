const express=require("express")
const{operationalInfo,operationalUpdate,operationalDelete}=require("../controller/operationalReport")

const operationalroutes=express.Router()



operationalroutes.post("/operationalInfo",operationalInfo)
operationalroutes.post("/operationalUpdate/:id",operationalUpdate)
operationalroutes.delete("/operationalDelete/:id",operationalDelete)
module.exports= operationalroutes