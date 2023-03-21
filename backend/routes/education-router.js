const express = require("express");
const Education = require("../model/Education");
const router = express.Router();
const educationController = require("../controllers/education-controller");

router.get("/education", async(req, res, next) =>{
    let education;
    try{
        education = await Education.find();
    }catch (err){
        console.log(err);
    }
    if (!education) {
        return res.status(404).json({ message: "No Details found"});
    }
    return res.status(200).json({ education });
});

router.get("/", educationController.getAllEducation);
router.post("/add",educationController.addEducation);
router.get("/:id",educationController.getEduById);
router.put("/:id",educationController.updateEducation);
router.delete("/:id",educationController.deleteEducation);

module.exports = router; 