const mongoose=require('mongoose')

const fineSchema=new mongoose.Schema({
    Date:{
        type:"string",
        required:"true"

    },
    amount:{
type:"string",
required:"true"
    },
    location:{
        type:"string",
        required:"true"
    },
    vehicalPlate:{
        type:"string",
        required:"true"
    },
    driverEmail:{
        type:"string",
        required:"true"
    }
})
const TrafficFine=mongoose.model("TafficFine",fineSchema)
module.exports=TrafficFine