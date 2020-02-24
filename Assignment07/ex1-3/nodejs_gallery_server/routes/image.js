const express = require('express');
const router = express.Router();
const getDb = require("../db").getDb;
const checkAuth = require('../check_auth');

// get single image db entry in JSON format
router.get('/:imgID', checkAuth, (req, res) => {
    let db = getDb();
    const userId = req.userData.userID;
    const imgID = req.params.imgID;

    // prepare query: join over tables user, users_images and images
    const query = {
        text: `SELECT i.* FROM images i
              INNER JOIN users_images u2i
              ON i.id = u2i.image_id
              WHERE u2i.user_id = $1
              AND i.id = $2`,
        values: [userId, imgID]
    }

    // issue query (returns promise)
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

            // everything ok -- return results
            let response = resultRows[0];
            delete response['id']; // remove superfluous id key/value
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

// update image DB entry
router.put('/:imgID', checkAuth, (req, res) => {
    let db = getDb();
    const imageID = req.params.imgID;
    const url_big = req.body.url_big;
    const url_small= req.body.url_small;
    const description = req.body.description;
    const userId = req.userData.userID;

    if (!(imageID && url_big && url_small && description)) {
        res.status(422).json({
            "message": "missing parameters"
        });
        return;
    }

    // prepare query
    const query = {
        text: `UPDATE images i
               SET (url_big, url_small, description) = ($3, $4, $5)
               FROM users_images ui
               WHERE ui.user_id = $1
               AND ui.image_id = $2
               AND i.id = $2`,
        values: [userId, imageID, url_big, url_small, description]
    }

    // issue query (returns promise)
    db.query(query)
        .then(results => {

            // results.rowCount: The number of rows processed by the last command.
            affectedRowCount = results.rowCount;

            // no results
            if (affectedRowCount < 1) {
                res.status(404).json({
                    "message": "no permissions / db entry not found"
                });
                return;
            }

            // everything ok
            res.status(200).json({
                "message": "update successful",
                rowsUpdated: affectedRowCount,
                newData: req.body
            });

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
