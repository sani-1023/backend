const mongoose = require("mongoose")


const bankSchema = new mongoose.Schema({


    name:{
        type:String,
        required:[true,"Please Enter a Product name"]
    },
    email:{
        type:String,
        required:[true,"Please Enter a email"]
    },
    phone:{
        type:String,
        required:[true,"Please Enter a phone number"]
    },

    inAmount:{
        type:Number,
        required:[true,"Need a bank in amount "],
    },
    
    outAmount:{
        type:Number,
        required:[true,"Need a bankout amount "],
    },
    secretKey:{
        type:String,
        required:[true,"Provide a secret key"]
    }, 
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Bank",bankSchema);



