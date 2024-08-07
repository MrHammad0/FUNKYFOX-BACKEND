const rentalReport=require('../models/rentalReport')

exports.rentInfo=async(req,res)=>{
const{ driverEmail, vehicalPlate,  rentalRate, startDate,totalCost,dayRented, endDate}=req.body
try {
    const rent=new rentalReport({
        driverEmail,
        vehicalPlate,
        rentalRate,
        startDate,
        totalCost,
        dayRented,
        endDate
    })
    await rent.save()
    
    res.status(200).json({mesg:"rent info saved successfully",rent})
} catch (error) {
    res.status(505).json({mesg:"internal server error",err:error.message})
}
 
}

exports.rentUpdate=async(req,res)=>{
    const{id}=req.params
    const data=req.body
    try {
        const updation= await rentalReport.findByIdAndUpdate(id,data)
        if(!updation){
            return res.status(404).json({mesg:"id not found"})
        }
        res.status(200).json({mesg:"data updated successfully"})
    } catch (error) {
        res.status(505).json({mesg:"internal server error",err:err.message})
    }
}
exports.rentDelete=async(req,res)=>{
    const{id}=req.params
    try {
        const deletion=await rentalReport.findByIdAndDelete(id)
        if(!deletion){
           return res.status(404).json({mesg:"id not found"})
        }
        res.status(200).json({mesg:"data deleted successfully"})
    } catch (error) {
        res.status(505).json({mesg:"internal server error",err:error.message})
    }
}
