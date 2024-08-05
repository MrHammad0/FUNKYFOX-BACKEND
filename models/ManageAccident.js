const mongoose=require('mongoose')
const accidentSchema=new mongoose.Schema({

    date:{
        type:"string",
        required:"true"
    },
location:{
    type:"string",
    required:"true"
},
damages:{
    type:"string",
    required:"true"
},
injuries:{
    type:"string",
    required:"true"
},
vehicle:{
    type:"string",
    required:"true"
},
driver:{
    type:"string",
    required:"true"
},
expense:{
    type:"string",
    required:"true"
}
})

const accidentReport=mongoose.model("accidentReport",accidentSchema)
module.exports=accidentReport