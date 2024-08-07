const express=require("express")
const{expensailInformation,expensialUpdate,expensailDelete}=require("../controller/expensereport")




const expensialRoutes=express.Router()
expensialRoutes.post("/expensailInformation",expensailInformation)
expensialRoutes.post("/expensialUpdate/:id",expensialUpdate)
expensialRoutes.delete("/expensailDelete/:id",expensailDelete)
module.exports= expensialRoutes