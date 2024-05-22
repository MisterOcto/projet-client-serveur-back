const express = require("express");
const {
    setBeers,
    getBeers,
    editBeer,
    deleteBeer,
    likeBeer,
    dislikeBeer,
} = require("../controllers/beer.controller");
const router = express.Router();

router.get("/", getBeers);
router.post("/", setBeers);
router.put("/:id", editBeer);
router.delete("/:id", deleteBeer);
router.patch("/like-beer/:id", likeBeer);
router.patch("/dislike-beer/:id", dislikeBeer);

module.exports = router;