const express=require("express")
const{accidentInfo,accidentUpdate,acccidentDelete}=require("../controller/accident")
const AccidentRoute=express.Router()



AccidentRoute.post("/accidentInfo",accidentInfo)
AccidentRoute.post("/accidentUpdate/:id",accidentUpdate)
AccidentRoute.delete("/accidentDelete/:id",acccidentDelete)
module.exports=AccidentRoute