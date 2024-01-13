const req = require("express/lib/request");
const res = require("express/lib/response");
const Artist = require("../Models/Artist");

exports.addArtist = (req,res)=>{
    const artist = new Artist({
        FullName:req.body.fullname,
        Age:req.body.age,
        Address : req.body.address,
        City: req.body.city,
        State:req.body.state,
        PinCode:req.body.pin,
        AadharCard:req.body.aadharcard,
        HandicappedCertificate:req.body.certificate,
        ProfilePicture:req.body.profpic,
    });

    artist
        .save()
        .then((data)=>{
            res.json(data);
            console.log("Data Added");
        })
        .catch((err)=>{
            console.log(err);
            res.send("Data Not Added",err);
        });
};

exports.getAllArtist = (req,res) =>{
    Artist.find()
        .then((artist)=>{
            res.json(artist);
        })
        .catch((err)=>{
            console.log(err);
        });
};

exports.getArtist = (req,res) => {
    Artist.findById(req.params.userId)
    .then((artist)=> {
        res.status(200).json(artist);
    })
    .catch((err)=>{
        res.status(500).send("server err",err);
    });
};

exports.updateArtist=(req,res)=>{
    Artist.findByIdAndUpdate(req.params.userId,{
        FullName:req.body.fullname,
        Age:req.body.age,
        Address : req.body.address,
        City: req.body.city,
        State:req.body.state,
        PinCode:req.body.pin,
        AadharCard:req.body.aadharcard,
        HandicappedCertificate:req.body.certificate,
    },
    {new:true}
    )
    .then((updateArtist)=>{
        res.status(200).json(updateArtist);
    })
    .catch((err)=>{
        res.status(500).send("Update Fails",err);
    });
};

exports.delArtist = (req,res) => {
    Artist.findByIdAndRemove(req.params.userId)
    .then((user)=>{
        res.status(500).json(user);
    })
    .catch((err)=>{
        res.send("Data Not Deleted",err);
    });
};