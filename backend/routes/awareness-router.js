const express = require("express");
const router = express.Router();
const Awareness = require("../model/Awareness");
const awarenessController = require("../controllers/awareness-controllers");

// router.get("/", async (req, res, next) => {
//     // This route will provide all of the awareness
//     let awareness;
//     try {
//         awareness = await Awareness.find();
//     } catch (err) {
//         console.log(err);
//     }

//     if (!awareness) {
//         return res.status(404).json({ message: "Not found"});
//     }
//     return res.status(200).json({ awareness });
// });

router.get("/", awarenessController.getAllAwareness);
router.post("/",awarenessController.addAwareness);
router.get("/:id", awarenessController.getById);
router.put("/:id",awarenessController.updateAwareness);
router.delete("/:id", awarenessController.deleteAwareness);

module.exports = router;