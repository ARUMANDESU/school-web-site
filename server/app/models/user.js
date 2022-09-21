const {Schema, model}   = require("mongoose");

const User = new Schema({
    firstName:{type:String, unique:false, require:true},
    lastName:{type:String, unique:false, require:true},
    phoneNumber:{type:String, unique:false, require:false,default:null},
    password:{type:String, unique:false, require:true}
});

module.exports = model("User",User);