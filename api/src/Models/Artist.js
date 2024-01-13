const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const ArtistSchema = mongoose.Schema(
    {
        FullName : String,
        Age: {type:Number,min:8.0,max:21.0},
        Address : String,
        City : String,
        State : String,
        PinCode : Number,
        AadharCard:String,
        HandicappedCertificate:String,
        ProfilePic:String,
        userId : {type: Schema.Types.ObjectId, ref: "User"},
    },
    {
        timestamps:true
    }
);

module.exports = mongoose.model("Artist",ArtistSchema);

