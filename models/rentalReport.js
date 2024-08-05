const mongoose=require('mongoose')
const vehical = require('./Vehicals')

const report=new mongoose.Schema({
    driverEmail:{
        type:"string",
        required:"true"
    },
    vehicalPlate:{
        type:"string",
        required:"true"
    },
    rentalRate:{
        type:String,
        required:"true"
    },
    startDate:{
        type:"string",
        required:"true"
    },
    endDate:{
        type:"string",
        required:"true"
    }})

const rentalReport=mongoose.model("rentalReport",report)
module.exports=rentalReport