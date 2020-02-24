const express = require('express');
const router = express.Router();
const getDb = require("../db").getDb;

router.get('/:email', (req, res) => {
    let db = getDb();

    //TODO: create and return image JSON list for user
    res.status(401).json({message: "no results"}); // replace with your code

});

module.exports = router;
