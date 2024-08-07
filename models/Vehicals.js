const mongoose=require('mongoose')

const vehicalSchema=new mongoose.Schema({
    vehicalName:{
        type:"string",
        required:"true"
       
    },
    vehicalModel:{
        type:"string",
        required:"true"
    },
    vehicalPlate:{
        type:"string",
        required:"true",
        unique:"true"
    },
    vehicalMilage:{
        type:"string",
        required:"true"
    },
    driver:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"driver"
    
    }],
    ProfitLoss:[{
        type:mongoose.Schema.Types.ObjectId,
         ref:"profitLoss"}],
         icomes :[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"income"}]
        



})
const vehical=mongoose.model("vehical",vehicalSchema)
module.exports=vehical