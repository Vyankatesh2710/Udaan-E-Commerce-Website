const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ArtworkSchema = mongoose.Schema(
    {
        FullName: String,
        Type: String,
        Images: String,
        Prices: Number,
        ArtistId: { type: Schema.Types.ObjectId, ref: "Artist" }
    }
);

module.exports = mongoose.model("Artwork", ArtworkSchema);