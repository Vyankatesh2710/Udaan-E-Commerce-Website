module.exports=(app)=>{
    const ArtworkController = require("../Controller/ArtworkController");

    app.post("/addArtwork",ArtworkController.addArtwork);
    app.get("/getAllArtwork",ArtworkController.getAllArtwork);
    app.get("/getArtwork/:userId",ArtworkController.getArtwork);
    app.delete("/delArtwork/:userId",ArtworkController.delArtwork);
    app.put("/updateArtwork/:userId",ArtworkController.updateArtwork);
    app.post("/getartworkbyType",ArtworkController.getartworkbyType);


}