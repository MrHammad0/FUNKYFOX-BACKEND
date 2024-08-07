const express=require("express")
const{profitlossInformation,profitlossUpdate,profitlossDelete}=require("../controller/profitloss")




const plRoutes=express.Router()
plRoutes.post("/profitlossInformation",profitlossInformation)
plRoutes.post("/profitlossUpdate/:id",profitlossUpdate)
plRoutes.delete("/profitlossDelete/:id",profitlossDelete)
module.exports= plRoutes