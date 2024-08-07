const TrafficFine=require('../models/TrafficFines')

exports.trafficFineInfo=async(req,res)=>{
    const{  Date, amount, location, vehicalPlate,driverEmail}=req.body


try {
    const traffic=new TrafficFine({
        Date,
        amount,
        location,
        vehicalPlate,
        driverEmail
      

   
    })
    await traffic.save()
    res.status(201).json({msg:"information saved successfully",traffic})
} catch (error) {
   return res.status(500).json({msg:"internal server erorr",err:error.message})
}
}
exports.trafficFineUpdate=async(req,res)=>{
    const {id}=req.params
    const info =req.body



try {
    const update=await TrafficFine.findByIdAndUpdate(id,info, {new:true})
    if(!update){
       return  res.status(401).json({msg:"id not matched"})
    }
    res.status(200).json({msg:"inforamtion updated successfully"})
    
} catch (error) {
   return res.status(500).json({msg:"server erorr",err:error.message})
    
}}
exports.trafficFineDelete=async(req,res)=>{
    const{id}=req.params
    try {
        const deleteInfo=await TrafficFine.findByIdAndDelete(id)
        if(!deleteInfo)
        { return res.status(401).json({msg:"id not matched"})

        }
        res.status(200).json({msg:"information deleted successfully"})

        
    } catch (error) {
        return res.status(500).json({msg:"server erorr",err:error.message})
        
    }
}