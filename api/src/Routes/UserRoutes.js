module.exports=(app)=>{
    const UserController = require("../Controller/UserController");

    app.post("/addUser",UserController.addUser);
    app.get("/getAllUser",UserController.getAllUser);
    app.get("/getUser/:userId",UserController.getUser);
    app.delete("/delUser/:userId",UserController.delUser);
    app.put("/updateUser/:userId",UserController.updateUser);
    app.post("/getuserbyemail",UserController.getuserbyemail);
}