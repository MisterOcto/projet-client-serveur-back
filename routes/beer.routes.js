const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        data:[
            {
                firstName:"Thomas",
                lastName: "Bouron"
            }
        ]
    })
});

router.post('/', (req, res) => {
    res.json({message: req.body.message})
});

router.put('/:id', (req, res) => {
    res.json({messageID: req.params.id})
});

module.exports = router