const financeReport=require('../models/FinicialReport')
exports.financialInformation=async(req,res)=>{
    const{  income,  expenses, profitability,  grossProfit, taxes}=req.body


try {
    const finance =new financeReport({
       income,
       expenses,
       profitability,
       grossProfit,
       taxes
      

   
    })
    await finance.save()
    res.status(201).json({msg:"information saved successfully",finance})
} catch (error) {
   return res.status(500).json({msg:"internal server erorr",err:error.message})
}
}
exports.financailUpdate=async(req,res)=>{
    const {id}=req.params
    const info =req.body



try {
    const update=await financeReport.findByIdAndUpdate(id,info, {new:true})
    if(!update){
       return  res.status(401).json({msg:"id not matched"})
    }
    res.status(200).json({msg:"inforamtion updated successfully"})
    
} catch (error) {
   return res.status(500).json({msg:"server erorr",err:error.message})
    
}}
exports.financialDelete=async(req,res)=>{
    const{id}=req.params
    try {
        const deleteInfo=await financeReport.findByIdAndDelete(id)
        if(!deleteInfo)
        { return res.status(401).json({msg:"id not matched"})

        }
        res.status(200).json({msg:"information deleted successfully"})

        
    } catch (error) {
        return res.status(500).json({msg:"server erorr",err:error.message})
        
    }
}