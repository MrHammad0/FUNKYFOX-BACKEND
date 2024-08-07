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
    },
      maintainceActivity:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"maintanceActivity"}],

})
const manageMaintenance=mongoose.model("manageMaintenance",maintainceSchema)
module.exports=manageMaintenance