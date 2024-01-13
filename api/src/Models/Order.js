const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const OrderSchema = mongoose.Schema(
    {
        Date:Date,
        Amount:Number,
        OrderNumbers:Number,
        CustomerId:{type:Schema.Types.ObjectId,ref:"Customer"},
        ArtistId:{type:Schema.Types.ObjectId,ref:"Artist"} 

    },
    {
        timeStamps:true
    }
);

module.exports = mongoose.model("Order",OrderSchema);