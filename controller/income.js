const income=require('../models/Income')
exports.incomeInfo=async(req,res)=>{
    const{ date,source,amount,driverPay, plateNo,driverEmail}=req.body
    try {
        const Income= new income({
            date,
            source,
            amount,
            driverPay,
            plateNo,
            driverEmail
        })
        await Income.save()
        res.status(200).json({mesg:"data saved successfully"})
        
    } catch (error) {
        res.status(505).json({mesg:"internal server error",err:error.message})
    }
}

exports.incomeUpdate=async(req,res)=>{
    const{id}=req.params
    const data=req.body
    try {
        const updation= await income.findByIdAndUpdate(id,data,{new:true})
        if(!updation){
            return res.status(404).json({mesg:"id not found"})
        }
        res.status(400).json({mesg:"data updated successfully"})
    } catch (error) {
        res.status(505).json({mesg:"internal server error",err:error.message}) 
    }
}
exports.incomeDelete=async(req,res)=>{
    const{id}=req.params
   
    try {
        const deletion=income.findByIdAndDelete(id)
        if(!deletion){
            return res.status(404).json({mesg:"id not found"})
        }
        res.status(400).json({mesg:"data deleted successfully"})
    } catch (error) {
        res.status(505).json({mesg:"internal server error",err:error.message}) 
    }
}