const accidentReport=require('../models/ManageAccident')
exports.accidentInfo=async(req,res)=>{
    const{date,location,damages,injuries,vehicle,driver,expense}=req.body

    try {
const accident=new accidentReport({
    date,
    location,
    damages,
    injuries,
    vehicle,
    driver,
    expense
})
await accident.save()
        res.status(200).json({mesg:"data saved successfully"})
    } catch (error) {
        res.status(505).json({mesg:"internal server error",err:error.message})
    }
}
exports.accidentUpdate=async(req,res)=>{
    const{id}=req.params
    const data=req.body
    try {
        const updation= await accidentReport.findByIdAndUpdate(id,data,{new:true})
        if(!updation){
            return res.status(404).json({mesg:"id not found"})
        }
        res.status(200).json({mesg:"data updated successfully"})
    } catch (error) {
        res.status(505).josn({mesg:"internal server error",err:error.message})
    }
}
exports.acccidentDelete=async(req,res)=>{
    const{id}=req.params
    try {
        const deletion= await accidentReport.findByIdAndDelete(id)
        if (!deletion){
return res.status(404).josn({mesg:"id not found"})
        }
        res.status(200).json({mesg:"data deleted successfully",err:error.message})
        
    } catch (error) {
        res.status(505).json({mesg:"internal server error",err:error.message})
    }

}