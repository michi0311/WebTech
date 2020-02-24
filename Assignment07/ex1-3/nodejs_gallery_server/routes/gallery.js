const express = require('express');
const router = express.Router();
const getDb = require("../db").getDb;
const checkAuth = require('../check_auth');

// get gallery for logged in user as a list of JSON entries
router.get('/', checkAuth, (req, res) => {
    let db = getDb();
    const userId = req.userData.userID;

    const query = {
        text: `SELECT i.* FROM images i
              INNER JOIN users_images u2i
              ON i.id = u2i.image_id
              WHERE u2i.user_id = $1`,
        values: [userId]
    }

    // query promise
    db.query(query)
        .then(results => {

            resultRows = results.rows;

            // no results
            if (resultRows.length < 1) {
                res.status(401).json({
                    "message": "no results"
                });
                return;
            }

            // everything ok -- return user gallery
            let response = [];
            for (let val of resultRows) {
                response.push ({
                    "dataSmall": val.url_small,
                    "dataBig": val.url_big,
                    "description": val.description
                });
            }
            res.status(200).json(response);

        })
        .catch(error => {
            // error accessing db
            if (error) {
                res.status(400).json({
                    "message": "error ocurred"
                });
                console.log(error.stack);
                return;
            }
        });
});


module.exports = router;
