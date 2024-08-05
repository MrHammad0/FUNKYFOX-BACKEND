const mongoose=require('mongoose')

const driverSchema=new mongoose.Schema({

    userName:{
        type:"string",
        required:"true"
    },
    email:{
        type:"string",
        required:"true"
    },
    licenseNumber:{
        type:"string",
        required:"true"
    },
    phoneNo:{
        type:"string",
        required:"true"
    },
    adress:{
type:"string",
required:"true"
    },
    dateOfBirth:{
type:"string",
required:"true"
    },
    hireDate:{
        type:"string",
        required:"true"
    },
    // vehicalPlateNo:{
    //     type:"string",
    //     required:"true"
    // },
    additionalNote:{
        type:String,
        required: true
    }
})
const driver=mongoose.model("driver",driverSchema)
module.exports=driver