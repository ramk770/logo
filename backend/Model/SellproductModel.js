const mongoose = require("mongoose");

const newSellmodel = new mongoose.Schema({
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
    price:{
        type:String
    },
    phoneNumber : {
       type:String
    },
    quantity:{
        type:String
    }
}) 

const Sell = mongoose.model("Sell", newSellmodel);
module.exports = Sell;