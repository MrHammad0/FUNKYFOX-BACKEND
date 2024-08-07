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
    totalCost:{
        type:"string",
        required:"true"
    },
    dayRented:{
        type:"string",
        required:"true"
    },
    endDate:{
        type:"string",
        required:"true"
    },

    icomes :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"income"
    
    }],
    ProfitLoss:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"profitLoss"
    
    }]
})

const rentalReport=mongoose.model("rentalReport",report)
module.exports=rentalReport