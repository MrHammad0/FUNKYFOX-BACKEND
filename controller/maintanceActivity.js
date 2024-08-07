const maintanceActivity=require('../models/MaintenanceActivvity')
exports.activityInfo=async(req,res)=>{
    const{Date,Cost,duration,serviceProvider,vehical}=req.body


try {
    const Activity=new maintanceActivity({
        Date,
        Cost,
        duration,
        serviceProvider,
        vehical
    })
    await Activity.save()
    res.status(201).json({msg:"information saved successfully",Activity})
} catch (error) {
   return res.status(500).json({msg:"internal server erorr",err:error.message})
}
}
exports.activityUpdate=async(req,res)=>{
    const {id}=req.params
    const info=req.body



try {
    const update=await maintanceActivity.findByIdAndUpdate(id,info, {new:true})
    if(!update){
       return  res.status(401).json({msg:"id not matched"})
    }
    res.status(200).json({msg:"inforamtion updated successfully"})
    
} catch (error) {
   return res.status(500).json({msg:"server erorr",err:error.message})
    
}}
exports.activityDelete=async(req,res)=>{
    const{id}=req.params
    try {
        const deleteInfo=await maintanceActivity.findByIdAndDelete(id)
        if(!deleteInfo)
        { return res.status(401).json({msg:"id not matched"})

        }
        res.status(200).json({msg:"information deleted successfully"})

        
    } catch (error) {
        return res.status(500).json({msg:"server erorr",err:error.message})
        
    }
}