module.exports=(app)=>{
    const OrderController = require("../Controller/OrderController");

    app.post("/addOrder",OrderController.addOrder);
    app.get("/getAllOrder",OrderController.getAllOrder);
    app.get("/getOrder/:userId",OrderController.getOrder);
    app.delete("/delOrder/:userId",OrderController.delOrder);
    app.put("/updateOrder/:userId",OrderController.updateOrder);

}