const mongoose=require('mongoose')
const report=new mongoose.Schema({
    vehicalId:{
        type:"string",
        required:"true"
    },
    driverId:{
        type:String,
        required:"true"
    },
    complianceStatus:{
        type:"string",
        required:"true"
    },
    resolutionDate:{
        type:"string",
        required:"true"
    }
})
const complianceReport=mongoose.model("complianceReport",report)
module.exports=complianceReport