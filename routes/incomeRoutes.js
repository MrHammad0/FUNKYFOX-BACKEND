const express=require('express')
const incomerouter=express.Router()
const {incomeInfo,incomeUpdate,incomeDelete}=require("../controller/income")

incomerouter.post("/incomeInfo",incomeInfo)
incomerouter.post("/incomeUpdate/:id",incomeUpdate)
incomerouter.delete("/incomeDelete/:id",incomeDelete)

module.exports=incomerouter