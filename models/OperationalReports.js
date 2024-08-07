const mongoose=require('mongoose')

const report=new mongoose.Schema({
    fleetUtilization:{
        type:"string",
        required:"true"
    },
    driverPerformance:{
        type:"string",
        required:"true"
    },
    tripEfficiency:{
        type:"string",
        required:"true"
    },
    complain:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"complianceReport"
    
    }]
})

const operationalReport=mongoose.model("operationalReport",report)
module.exports=operationalReport