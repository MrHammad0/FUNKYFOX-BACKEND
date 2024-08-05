const mongoose=require('mongoose')
const finicialReportSchema=new  mongoose.Schema({
    income:{
        type:"string",
        required:"true"
    },
    expenses:{
        type:"string",
        required:"true"
    },
    profitability:{
        type:"string",
        required:"true"
    },
    grossProfit:{
        type:"string",
        required:"true"
    },
    taxes:{
        type:"string",
        required:"true"
    }
})
const financeReport=mongoose.model("financeReport",finicialReportSchema)
module.exports=financeReport