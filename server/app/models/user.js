const {Schema, model}   = require("mongoose");

const User = new Schema({
    firstName:{type:String, unique:false, require:true},
    lastName:{type:String, unique:false, require:true},
    phoneNumber:{type:String, unique:true, require:false,default:null},
    password:{type:String, unique:true, require:true}
});

module.exports = model("User",User);