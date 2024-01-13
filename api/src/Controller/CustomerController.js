const req = require("express/lib/request");
const res = require("express/lib/response");
const Customer = require("../Models/Customer");

exports.addCustomer = (req,res)=>{
    const customer = new Customer({
        FullName:req.body.name,
        Address:req.body.address,
        City:req.body.city,
        State:req.body.state,
        PinCode:req.body.pin,
    });

    customer
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

exports.getAllCustomer = (req,res) =>{
    Customer.find()
        .then((customer)=>{
            res.json(customer);
        })
        .catch((err)=>{
            console.log(err);
        });
};

exports.getCustomer = (req,res) => {
    Customer.findById(req.params.userId)
    .then((artist)=> {
        res.status(200).json(artist);
    })
    .catch((err)=>{
        res.status(500).send("server err",err);
    });
};

exports.updateCustomer=(req,res)=>{
    Customer.findByIdAndUpdate(req.params.userId,{
        FullName:req.body.name,
        Address:req.body.address,
        City:req.body.city,
        State:req.body.state,
        PinCode:req.body.pin
    },
    {new:true}
    )
    .then((updateCustomer)=>{
        res.status(200).json(updateCustomer);
    })
    .catch((err)=>{
        res.status(500).send("Update Fails",err);
    });
};

exports.delCustomer = (req,res) => {
    Customer.findByIdAndRemove(req.params.userId)
    .then((customer)=>{
        res.status(500).json(customer);
    })
    .catch((err)=>{
        res.send("Data Not Deleted",err);
    });
};