const driver=require('../models/Drivers')

exports.driverInfo=async(req,res)=>{
    const{userName,email,licenseNumber, phoneNo, adress,dateOfBirth, hireDate, additionalNote}=req.body
 try {
    
    const drivers=new driver({
        userName,
        email,
        licenseNumber,
        phoneNo,
        adress,
        dateOfBirth,
        hireDate,
        additionalNote
        //plateno
    })
    await drivers.save()
    res.status(200).json({mesg:"information saved successfully",drivers})
 } catch (error) {
    res.status(505).json({mesg:"internal server error",err:error.message})
 }

}
exports.updateDriver=async(req,res)=>{
    const{id}=req.params
    const info=req.body
    try {
        const updation= await driver.findByIdAndUpdate(id,info)
        if(!updation){
        return  res.status(404).json({mesg:"driver id is not found"})
        }
        res.status(200).json({mesg:"driver's dta updated successully"})
        
    } catch (error) {
        res.status(505).json({mesg:"internal server error",err:error.message})
    }
}

exports.deleteDriver=async(req,res)=>{
    const{id}=req.params
try {
    const deletion= await driver.findByIdAndDelete(id)
    if(!deletion){
       return res.status(404).json({mesg:"driver's id is not found"})
    }
    res.status(200).json({mesg:"driver's deleted successfully"})
    
} catch (error) {
    res.status(505).josn({mesg:"internal server error",err:error.message})
}

}