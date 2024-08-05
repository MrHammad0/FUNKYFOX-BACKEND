const express=require('express')
const Vehiclerouter=express.Router()
const {vehicalCreate,vehicalUpdate,vehicalDelete,singleVehicalInfo}=require("../controller/vehical")

Vehiclerouter.post("/vehicalCreate",vehicalCreate)
Vehiclerouter.post("/vehicalUpdate/:id",vehicalUpdate)
Vehiclerouter.delete("/vehicalDelete/:id",vehicalDelete)
Vehiclerouter.get("/singleVehicalInfo/:id",singleVehicalInfo)
module.exports=Vehiclerouter