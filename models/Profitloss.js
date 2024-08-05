const mongoose=require('mongoose')

const profitLossSchema=new mongoose.Schema({
    period:{
        type:"string",
        required:"true"
    },
    incomeTotal:{
        type:"string",
        required:"true"
    },
    expenseTotal:{
        type:"string",
        required:"true"
    },
    profit:{
        type:"string",
        required:"true"
    }
})
const profitLoss= mongoose.model("profitLoss",profitLossSchema)
module.exports=profitLoss