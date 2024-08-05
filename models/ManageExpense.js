const mongoose=require('mongoose')

const expenseSchema=new mongoose.Schema({
    date:{
        type:"string",
        required:"true"
    },
    amount:{
        type:"string",
        required:"true"
    },
    category:{
        type:"string",
        required:"true"
    },
    receiptNo:{
        type:Number,
        required:"true"
    },
    paymentMethod:{
        type:"string",
        required:"true"
    },
    vehicle:{
        type:"string",
        required:"true"
    }
})
const expenseReport=mongoose.model("expenseReport",expenseSchema)
module.exports=expenseReport