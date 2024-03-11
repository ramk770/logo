const mongoose = require("mongoose");
const freeProductModel = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String
    },
    image:{
        type:String
    },
    quantity:{
        type:String,
       
    },
    phoneNumber:{
        type:String
    }
}) 
const FreeProduct = mongoose.model("FreeProduct", freeProductModel);
module.exports = FreeProduct;
