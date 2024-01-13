module.exports=(app)=>{
    const ArtistController = require("../Controller/ArtistController");

    app.get("/getAllArtist",ArtistController.getAllArtist);
    app.post("/addArtist",ArtistController.addArtist);
    app.get("/getArtist/:userId",ArtistController.getArtist);
    app.put("/updateArtist/:userId",ArtistController.updateArtist);
    app.delete("/delArtist/:userId",ArtistController.delArtist);
}       