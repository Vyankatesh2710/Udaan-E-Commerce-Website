module.exports=(app)=>{
    const CustomerController = require("../Controller/CustomerController");

    app.post("/addCustomer",CustomerController.addCustomer);
    app.get("/getAllCustomer",CustomerController.getAllCustomer);
    app.get("/getCustomer/:userId",CustomerController.getCustomer);
    app.delete("/delCustomer/:userId",CustomerController.delCustomer);
    app.put("/updateCustomer/:userId",CustomerController.updateCustomer);
}