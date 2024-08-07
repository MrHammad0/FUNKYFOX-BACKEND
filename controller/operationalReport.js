const operationalReport=require('../models/OperationalReports')

exports.operationalInfo=async(req,res)=>{
    const{ fleetUtilization, driverPerformance, tripEfficiency}=req.body


try {
    const Reports=new operationalReport({
        fleetUtilization,
        driverPerformance,
        tripEfficiency
      

   
    })
    await Reports.save()
    res.status(201).json({msg:"information saved successfully",Reports})
} catch (error) {
   return res.status(500).json({msg:"internal server erorr",err:error.message})
}
}
exports.operationalUpdate=async(req,res)=>{
    const {id}=req.params
    const info =req.body



try {
    const update=await operationalReport.findByIdAndUpdate(id,info, {new:true})
    if(!update){
       return  res.status(401).json({msg:"id not matched"})
    }
    res.status(200).json({msg:"inforamtion updated successfully"})
    
} catch (error) {
   return res.status(500).json({msg:"server erorr",err:error.message})
    
}}
exports.operationalDelete=async(req,res)=>{
    const{id}=req.params
    try {
        const deleteInfo=await operationalReport.findByIdAndDelete(id)
        if(!deleteInfo)
        { return res.status(401).json({msg:"id not matched"})

        }
        res.status(200).json({msg:"information deleted successfully"})

        
    } catch (error) {
        return res.status(500).json({msg:"server erorr",err:error.message})
        
    }
}
