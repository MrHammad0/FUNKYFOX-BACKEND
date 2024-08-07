const expensialReport=require("../models/Expensereport")
exports.expensailInformation=async(req,res)=>{
    const{ Date, Description, Amount, Category,receiptNumber, paymentMehod,  vehiclePlateNumber}=req.body


try {
    const expense =new expensialReport({
        Date,
        Description,
        Amount,
        Category,
        receiptNumber,
        paymentMehod,
        vehiclePlateNumber



      

   
    })
    await expense.save()
    res.status(201).json({msg:"information saved successfully",expense})
} catch (error) {
   return res.status(500).json({msg:"internal server erorr",err:error.message})
}
}
exports.expensialUpdate=async(req,res)=>{
    const {id}=req.params
    const info =req.body



try {
    const update=await expensialReport.findByIdAndUpdate(id,info, {new:true})
    if(!update){
       return  res.status(401).json({msg:"id not matched"})
    }
    res.status(200).json({msg:"inforamtion updated successfully"})
    
} catch (error) {
   return res.status(500).json({msg:"server erorr",err:error.message})
    
}}
exports.expensailDelete=async(req,res)=>{
    const{id}=req.params
    try {
        const deleteInfo=await expensialReport.findByIdAndDelete(id)
        if(!deleteInfo)
        { return res.status(401).json({msg:"id not matched"})

        }
        res.status(200).json({msg:"information deleted successfully"})

        
    } catch (error) {
        return res.status(500).json({msg:"server erorr",err:error.message})
        
    }
}