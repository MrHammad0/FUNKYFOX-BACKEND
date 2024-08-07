const profitLoss=require('../models/Profitloss')

exports.profitlossInformation=async(req,res)=>{
    const{ period,incomeTotal, expenseTotal, profit}=req.body


try {
    const profitLossReport =new profitLoss({
        period,
        incomeTotal,
        expenseTotal,
        profit 

   
    })
    await profitLossReport .save()
    res.status(201).json({msg:"information saved successfully",profitLossReport})
} catch (error) {
   return res.status(500).json({msg:"internal server erorr",err:error.message})
}
}
exports.profitlossUpdate=async(req,res)=>{
    const {id}=req.params
    const info =req.body



try {
    const update=await profitLoss.findByIdAndUpdate(id,info, {new:true})
    if(!update){
       return  res.status(401).json({msg:"id not matched"})
    }
    res.status(200).json({msg:"inforamtion updated successfully"})
    
} catch (error) {
   return res.status(500).json({msg:"server erorr",err:error.message})
    
}}
exports.profitlossDelete=async(req,res)=>{
    const{id}=req.params
    try {
        const deleteInfo=await profitLoss.findByIdAndDelete(id)
        if(!deleteInfo)
        { return res.status(401).json({msg:"id not matched"})

        }
        res.status(200).json({msg:"information deleted successfully"})

        
    } catch (error) {
        return res.status(500).json({msg:"server erorr",err:error.message})
        
    }
}