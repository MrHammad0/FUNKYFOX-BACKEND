const mongoose=require('mongoose')
const vehical = require('./Vehicals')

const incomeSchema=new mongoose.Schema({

    date:{
        type:"string",
        required:"true"
    },
    source:{
        type:"string",
        required:"true"
    },
    amount:{
        type:"string",
        required:"true"

    },
    driverPay:{
        type:"string",
        required:"true"
    },
    plateNo: [{
       
    type:mongoose.Schema.Types.ObjectId,
    ref:"vehical"
            
       
    } ],
driverEmail:{
    type:"string",
    required:"string"
},

    

})
const income=mongoose.model("income",incomeSchema)
module.exports=income