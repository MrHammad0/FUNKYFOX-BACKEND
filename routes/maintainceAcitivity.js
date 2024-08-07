const express=require("express")
const{activityInfo,activityUpdate,activityDelete}=require("../controller/maintanceActivity")

const maintActRoutes=express.Router()
maintActRoutes.post("/activityInfo",activityInfo)
maintActRoutes.post("/activityUpdate/:id",activityUpdate)
maintActRoutes.delete("/activityDelete/:id",activityDelete)
module.exports=maintActRoutes