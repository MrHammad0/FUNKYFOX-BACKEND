const express=require("express")
const{complianceInfo,complianceUpdate,complianceDelete}=require("../controller/compliancereport")



const complianceRoutes=express.Router()


complianceRoutes.post("/complianceInfo",complianceInfo)
complianceRoutes.post("/complianceUpdate/:id",complianceUpdate)
complianceRoutes.delete("/complianceDelete/:id",complianceDelete)
module.exports= complianceRoutes