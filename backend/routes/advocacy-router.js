const express = require("express");
const router = express.Router();
const Advocacy = require("../model/advocacy");
const advocacyController = require("../controllers/advocacy-controller");

/*router.get("/", async (req, res, next) => {
    // This route will provide all of the advocacy
    let advocacy;
    try {
        advocacy = await Advocacy.find();
    } catch (err) {
        console.log(err);
    }

    if (!advocacy) {
        return res.status(404).json({ message: "Not found"});
    }
    return res.status(200).json({ advocacy});
});*/

router.get("/", advocacyController.getAllAdvocacy);
router.post("/",advocacyController.addAdvocacy);
router.get("/:id", advocacyController.getById);
router.put("/:id",advocacyController.updateAdvocacy);
router.delete("/:id", advocacyController.deleteAdvocacy);

module.exports = router;