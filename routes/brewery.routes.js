const express = require("express");
const {
    setBrewery,
    getBrewery,
    editBrewery,
    deleteBrewery,
    likeBrewery,
    dislikeBrewery,
} = require("../controllers/beer.controller");
const router = express.Router();

router.get("/", getBrewery);
router.post("/", setBrewery);
router.put("/:id", editBrewery);
router.delete("/:id", deleteBrewery);
router.patch("/like-beer/:id", likeBrewery);
router.patch("/dislike-beer/:id", dislikeBrewery);

module.exports = router;