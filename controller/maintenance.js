const manageMaintenance=require('../models/Maintenance')

exports.information=async(req,res)=>{
    const{Date,description,cost,vehicalPlate}=req.body


try {
    const Maintenance=new manageMaintenance({
        Date,
        description,
        cost,
        vehicalPlate
    })
    await Maintenance.save()
    res.status(201).json({msg:"information saved successfully",Maintenance})
} catch (error) {
    res.status(500).json({msg:"internal server erorr",err:error.message})
}
}
exports.update=async(req,res)=>{
    const {id}=req.params
    const info=req.body



try {
    const update=await manageMaintenance.findByIdAndUpdate(id,info, {new:true})
    if(!update){
        res.status(401).json({msg:"id not matched"})
    }
    res.status(200).json({msg:"inforamtion updated successfully"})
    
} catch (error) {
    res.status(500).json({msg:"server erorr",err:error.message})
    
}
}
exports.deleteInformation=async(req,res)=>{
    const{id}=req.params
    try {
        const deleteInfo=await manageMaintenance.findByIdAndDelete(id)
        if(!deleteInfo)
        { return res.status(401).json({msg:"id not matched"})

        }
        res.status(200).json({msg:"information deleted successfully"})

        
    } catch (error) {
        return res.status(500).json({msg:"server erorr",err:error.message})
        
    }
}