const mongoose=require('mongoose')


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
    plateNo: {
       type:"string",
       required:"true"
            
       
    } ,
driverEmail:{
    type:"string",
    required:"true"
},
rentalReport:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"rentalReport"

}],
ProfitLoss:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"profitLoss"

}],
finicialReport:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"financeReport"

}]


    

})
const income=mongoose.model("income",incomeSchema)
module.exports=income