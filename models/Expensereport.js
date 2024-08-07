const mongoose=require("mongoose")
const expenseReportSchema=new mongoose.Schema({
    Date:{
        type:"string",
        required:"true"
    },
  
    Description:{
        type:"string",
        required:"true"
    },
    Amount:{
        type:"string",
        required:"true"
    },
    Category:{
        type:"string",
        required:"true"
    },
    receiptNumber:{
        type:"string",
        required:"true"
    },
    paymentMehod:{
        type:"string",
        required:"true"
    },
    vehiclePlateNumber:{
        type:"string",
        required:"true"
    },
  
    trafficFine:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"TrafficFine"
    
    }],
  
 Maintaince:[{
 type:mongoose.Schema.Types.ObjectId,
 ref:"manageMaintenance"}],

accident:[{
type:mongoose.Schema.Types.ObjectId,
ref:"accidentReport"}],
     
  ProfitLoss:[{
type:mongoose.Schema.Types.ObjectId,
 ref:"profitLoss"}],
 icomes :[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"income"

}]
            })




const expensialReport=mongoose.model("expensialReport",expenseReportSchema)
module.exports=expensialReport