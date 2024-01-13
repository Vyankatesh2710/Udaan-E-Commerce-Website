const req = require("express/lib/request");
const res = require("express/lib/response");
const Order = require("../Models/Order");

exports.addOrder = (req,res)=>{
    const order = new Order({
        Date:req.body.date,
        Amount:req.body.amount,
        OrderNumbers:req.body.ordernum,

    });

    order
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

exports.getAllOrder = (req,res) =>{
    Order.find()
        .then((order)=>{
            res.json(order);
        })
        .catch((err)=>{
            console.log(err);
        });
};

exports.getOrder = (req,res) => {
    Order.findById(req.params.userId)
    .then((order)=> {
        res.status(200).json(order);
    })
    .catch((err)=>{
        res.status(500).send("server err",err);
    });
};

exports.updateOrder=(req,res)=>{
    Order.findByIdAndUpdate(req.params.userId,{
        Date:req.body.date,
        Amount:req.body.amount,
        OrderNumber:req.body.ordernum
    },
    {new:true}
    )
    .then((updateOrder)=>{
        res.status(200).json(updateOrder);
    })
    .catch((err)=>{
        res.status(500).send("Update Fails",err);
    });
};

exports.delOrder = (req,res) => {
    Order.findByIdAndRemove(req.params.userId)
    .then((user)=>{
        res.status(500).json(user);
    })
    .catch((err)=>{
        res.send("Data Not Deleted",err);
    });
};