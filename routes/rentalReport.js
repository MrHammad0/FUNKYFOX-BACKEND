const express=require('express')
const rentalroutes=express.Router()
const{rentInfo,rentUpdate,rentDelete}=require('../controller/rentalreport')


rentalroutes.post("/rentInfo",rentInfo)
rentalroutes.post("/rentUpdate/:id",rentUpdate)
rentalroutes.delete("/rentDelete/:id",rentDelete)
module.exports=rentalroutes