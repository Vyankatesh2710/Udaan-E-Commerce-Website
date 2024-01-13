const { use } = require("express/lib/application");
const res = require("express/lib/response");
const User = require("../Models/User");

exports.addUser = (req, res) => {
    const user = new User({
        UserName: req.body.name,
        UserEmailId: req.body.emailid,
        Password: req.body.password,
        MobileNo: req.body.mobileno,
        uType: req.body.type,
    });

    user
        .save()
        .then((data) => {
            res.json(data);
            console.log("Data Added");
        })
        .catch((err) => {
            console.log(err);
            res.send("Data Not Added", err);
        });
};

exports.getuserbyemail = (req,res) => {
    User.find({UserEmailId:req.body.UserEmailId})
    .then((user)=>{
        res.json(user);
    })
    .catch((err)=>{
        console.log(err);
    });
};

exports.getAllUser = (req, res) => {
    User.find()
        .then((users) => {
            res.json(users);
        })
        .catch((err) => {
            console.log(err);
        });
};

exports.delUser = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then((user) => {
            res.status(500).json(user);
        })
        .catch((err) => {
            res.send("Data Not Deleted", err);
        });
};

exports.getUser = (req, res) => {
    User.findById(req.params.userId)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((err) => {
            res.status(500).send("server err", err);
        });
};

exports.updateUser = (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
        UserName: req.body.name,
        UserEmailId: req.body.emailid,
        Password: req.body.password,
        MobileNo: req.body.mobileno,
    },
        { new: true }
    )
        .then((updateUser) => {
            res.status(200).json(updateUser);
        })
        .catch((err) => {
            res.status(500).send("Update Fails");
        });
};