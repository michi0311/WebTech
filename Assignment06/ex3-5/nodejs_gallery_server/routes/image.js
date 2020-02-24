const express = require('express');
const router = express.Router();
const getDb = require("../db").getDb;

router.put('/', (req, res) => {
    let db = getDb();

    //TODO: return image information as JSON
    res.status(404).json({message: "db entry not found"}); // replace with your code
});


module.exports = router;
