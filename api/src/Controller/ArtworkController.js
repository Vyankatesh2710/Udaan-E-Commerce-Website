const req = require("express/lib/request");
const res = require("express/lib/response");
const Artwork = require("../Models/Artwork");

exports.addArtwork = (req,res)=>{
    const artwork = new Artwork({
        FullName:req.body.name,
        Type:req.body.type,
        Images:req.body.images,
        Prices:req.body.price
    });

    artwork
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

exports.getAllArtwork = (req,res) =>{
    Artwork.find()
        .then((artwork)=>{
            res.json(artwork);
        })
        .catch((err)=>{
            console.log(err);
        });
};

exports.getArtwork = (req,res) => {
    Artwork.findById(req.params.userId)
    .then((artwork)=> {
        res.status(200).json(artwork);
    })
    .catch((err)=>{
        res.status(500).send("server err",err);
    });
};

exports.getartworkbyType = (req,res) => {
    Artwork.find({Type:req.body.Type})
    .then((Artwork)=>{
        res.json(Artwork);
    })
    .catch((err)=>{
        console.log(err);
    });
};


exports.updateArtwork=(req,res)=>{
    Artwork.findByIdAndUpdate(req.params.userId,{
        Fullname:req.body.name,
        Type:req.body.Type,
        Images:req.body.images,
        Prices:req.body.price
    },
    {new:true}
    )
    .then((updateArtwork)=>{
        res.status(200).json(updateArtwork);
    })
    .catch((err)=>{
        res.status(500).send("Update Fails",err);
    });
};

exports.delArtwork = (req,res) => {
    Artwork.findByIdAndRemove(req.params.userId)
    .then((artwork)=>{
        res.status(500).json(artwork);
    })
    .catch((err)=>{
        res.send("Data Not Deleted",err);
    });
};