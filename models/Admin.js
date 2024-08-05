const mongoose=require('mongoose')
const adminSchema= new mongoose.Schema({
firstName:{
    type:"string",
    required:"true"
},
lastName:{
    type:"string",
    required:"true"
},
email:{
    type:"string",
    required:"true"
},
passward:{
    type:"string",
    required:"true"
}

})
const admin=mongoose.model("admin",adminSchema)
module.exports=admin