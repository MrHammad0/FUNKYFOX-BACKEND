
//const  = require("../models/Vehicals")
const vehical=require("../models/Vehicals")
const jwt = require("jsonwebtoken")
exports.vehicalCreate=async(req,res)=>{
    const{vehicalName,vehicalModel,vehicalPlate,vehicalMilage}=req.body
    const existVehicle = await vehical.find({vehicalPlate})
    if(!existVehicle){
        res.status(401).json({success:false,message:"vehhicle already exsist"})
    }
    try {
        const vehicalinfo=new vehical({
            vehicalName,
            vehicalModel,
            vehicalPlate,
            vehicalMilage

        })
        
      await  vehicalinfo.save()


      return res.status(201).json({mesg:"your information is saved successfully",vehicalinfo})

    } catch (error) {
        res.status(505).json({mesg:"found error",err:error.message})
        
    }
}

exports.vehicalUpdate=async(req,res)=>{
    const {id}=req.params
    const data=req.body
  try {
    const available= await vehical.findByIdAndUpdate(id, data, {new: true})
    if(!available){
        return res.status(404).json({mesg:"data not found"})
    }
    res.status(201).json({mesg:"your data found successfully"})
  } catch (error) {
    return res.status(505).json({mesg:"Internal server error",err:error.message})
    
  }
}
exports.vehicalDelete=async (req,res)=>{
    const{id}=req.params
    try {
        const deletion= await vehical.findByIdAndDelete(id)
        if(!deletion){
            return res.status(404).json({mesg:"vehical not found by this id"})
        }
        res.status(201).json({mesg:"your vehical deleted successfully"})
    } catch (error) {
        res.status(505).josn({mesg:"internal server error"})
    }

}
exports.singleVehicalInfo=async(req,res)=>{
const{id}=req.params
try {
    const singleInfo=await vehical.findById(id)
    if(!singleInfo){
        return res.status(404).json({mesg:"vehical not found by this id"})
    }
    res.status(200).json({mesg:"user found by this id",singleInfo})
} catch (error) {
    res.status(505).json({mesg:"internal server error",err:error.message})
}

}
