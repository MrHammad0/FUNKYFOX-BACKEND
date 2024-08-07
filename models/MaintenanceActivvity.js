const mongoose=require('mongoose')
const vehical = require('./Vehicals')

const maintainceActivitySchema=new mongoose.Schema({
    Date:{
        type:"string",
        required:"true"
    },
    Cost:{
        type:"string",
        required:"true"
    },
    duration:{
        type:"string",
        required:"true"
    },
    serviceProvider:{
        type:"string",
        required:"true"
    },
    vehical:{
        type:"string",
        required:"string"
    },
    

})
const maintanceActivity=mongoose.model("maintanceActivity",maintainceActivitySchema)
module.exports=maintanceActivity