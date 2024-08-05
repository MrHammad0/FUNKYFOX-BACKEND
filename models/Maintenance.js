const mongoose=require('mongoose')
const maintainceSchema=new mongoose.Schema({
    Date:{
        type:"string",
        required:"true"
    },
    description:{
        type:"string",
        required:"true"
    },
    cost:{
        type:"string",
        required:"true"
    },
    vehicalPlate:{
        type:"string",
        required:"true"
    }

})
const manageMaintenance=mongoose.model("manageMaintenance",maintainceSchema)
module.exports=manageMaintenance