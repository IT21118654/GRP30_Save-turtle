const express = require('express');
const mongoose = require('mongoose');
const fundraiseRoute = require("./routes/fundraise-router")
const educationRoute = require("./routes/education-router")
const app = express();
const multer = require("multer");
const imageModel = require("./model/upload")
const fs = require("fs");

// Middlewares

app.use(express.json());
app.use("/fundraise",fundraiseRoute)// localhost:5000/Donation
app.use("/education",educationRoute)
app.get("/uploads", (req,res) => res.send("this is working"));

mongoose
.connect(
    "mongodb+srv://admin:9vzKFpTJsKWFKhlT@cluster3.0k804pm.mongodb.net/saveTurtle?retryWrites=true&w=majority"
)
.then(() => console.log("Connected to Database"))
.then(() => {
    app.listen(5000);
})
.catch((err) => console.log(err));

// adding an image


const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,"uploads")
    },
    filename: (req,file,cb) => {
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})

app.post('/uploads',upload.single("testImage"),(req,res) => {
    const saveImage = new imageModel({
        name: req.body.name,
        img:{
            data: fs.readFileSync("uploads/" + req.file.filename),
            contentType:"image/png"
        }
    });
    saveImage.save()
    .then((res)=>{console.log("Image is Saved")})
    .catch((err)=>{console.log(err,"error has Occured")});
    res.send("Image is Saved");
});
