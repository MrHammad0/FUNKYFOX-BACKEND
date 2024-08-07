const express=require("express")
const{financialInformation,financailUpdate,financialDelete}=require("../controller/finanace")



const ExpenseRoutes=express.Router()
ExpenseRoutes.post("/financialInformation",financialInformation)
ExpenseRoutes.post("/financailUpdate/:id",financailUpdate)
ExpenseRoutes.delete("/financialDelete/:id",financialDelete)
module.exports= ExpenseRoutes