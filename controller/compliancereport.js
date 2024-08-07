const complianceReport=require('../models/complianceReport')
exports.complianceInfo=async(req,res)=>{
    const{ vehicalId, driverId, complianceStatus, resolutionDate}=req.body


try {
    const compliance=new complianceReport({
        vehicalId,
        driverId,
        complianceStatus,
        resolutionDate
      

   
    })
    await compliance.save()
    res.status(201).json({msg:"information saved successfully",compliance})
} catch (error) {
   return res.status(500).json({msg:"internal server erorr",err:error.message})
}
}
exports.complianceUpdate=async(req,res)=>{
    const {id}=req.params
    const info =req.body



try {
    const update=await complianceReport.findByIdAndUpdate(id,info, {new:true})
    if(!update){
       return  res.status(401).json({msg:"id not matched"})
    }
    res.status(200).json({msg:"inforamtion updated successfully"})
    
} catch (error) {
   return res.status(500).json({msg:"server erorr",err:error.message})
    
}}
exports.complianceDelete=async(req,res)=>{
    const{id}=req.params
    try {
        const deleteInfo=await complianceReport.findByIdAndDelete(id)
        if(!deleteInfo)
        { return res.status(401).json({msg:"id not matched"})

        }
        res.status(200).json({msg:"information deleted successfully"})

        
    } catch (error) {
        return res.status(500).json({msg:"server erorr",err:error.message})
        
    }
}