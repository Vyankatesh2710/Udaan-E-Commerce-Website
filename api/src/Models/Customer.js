const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CustomerSchema = mongoose.Schema(
    {
        FullName:String,
        Address:String,
        City:String,
        State:String,
        PinCode:String,
        userId:{type:Schema.Types.ObjectId,ref:"User"}
    },
    {
        timeStamps:true
    }
);

module.exports = mongoose.model("Customer",CustomerSchema)
