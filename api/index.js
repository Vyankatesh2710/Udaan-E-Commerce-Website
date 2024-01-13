const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const req = require("express/lib/request");
const { send } = require("process");



const app = express();
app.use(cors());

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


mongoose
    .connect("mongodb://localhost:27017/myapp-db", {
        useNewUrlParser: true,
    })
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Not Connected", err);
    });




//stprahe config
const imageStorage = multer.diskStorage({
    destination: "UploadedImages",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

const pdfStorage = multer.diskStorage({
    destination: "Certificate",
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

//multer cpnfig
const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg)$/)) {
            return cb(new Error("Please Upload A Image..."));
        }
        cb(undefined, true);
    },
});

app.post(
    "/uploadimages",
    imageUpload.single("image"),
    (req, res) => {
        res
            .status(200)
            .json({ filepath: "/images/".concat(req.file.filename), uploaded: true });
    },
    (err, req, res, next) => {
        res.status(400).send({ error: err.message });
    }
);

const pdfUpload = multer({
    storage: pdfStorage,
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|pdf)$/)) {
            return cb(new Error("Please Upload A PDF..."));
        }
        cb(undefined, true);
    },
});


app.post(
    "/uploadpdf",
    pdfUpload.single("pdf"),
    (req, res) => {
        res
            .status(200)
            .json({ filepath: "/pdfs/".concat(req.file.filename), uploaded: true });
    },
    (err, req, res, next) => {
        res.status(400).send({ error: err.message });
    }
);


app.use(express.static("UploadedImages"));
app.use("/images", express.static("UploadedImages"));

app.use(express.static("UploadedPdfs"));
app.use("/pdfs", express.static("UploadedPdfs"));

require("./src/Routes/UserRoutes")(app);
require("./src/Routes/ArtistRoutes")(app);
require("./src/Routes/ArtworkRoutes")(app);
require("./src/Routes/CustomerRoutes")(app);
require("./src/Routes/OrderRoutes")(app);



app.listen(5000, () => {
    console.log("Server Started...");
});

