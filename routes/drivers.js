const express=require('express')
const{driverInfo,updateDriver,deleteDriver}=require('../controller/drivers')
const driversRoutes=express.Router()


driversRoutes.post("/driverInfo",driverInfo)

driversRoutes.put("/updateDriver/:id",updateDriver)
driversRoutes.delete("/deleteDriver/:id",deleteDriver)


module.exports= driversRoutes