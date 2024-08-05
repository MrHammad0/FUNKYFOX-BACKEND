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
    }

})
const vehical=mongoose.model("vehical",vehicalSchema)
module.exports=vehical