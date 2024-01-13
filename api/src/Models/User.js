const mongoose = require("mongoose");

const User = mongoose.Schema({
    UserName: String,
    UserEmailId: String,
    Password: String,
    MobileNo: String,
    uType: String
},
    {
        timeStamps: true
    }
);
module.exports = mongoose.model("User", User);