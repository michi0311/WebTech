let cfg = require('../config.json')
const express = require('express');
const router = express.Router();
const getDb = require("../db").getDb;
const jwt = require('jsonwebtoken');

// EX1 TODO:
// - alter route to accept login information (email/pass) via a JSON object in the request body
// - create and return a JSON Web Token (JWT) for the successfully logged in user
// - also store the user's id in the tokens payload
router.post('/:email/:pass', (req, res) => {
    const db = getDb();

    // get login parameters
    const email = req.params.email;     // change to get parameter from body
    const pass =req.params.pass;        // change to get parameter from body

    // prepare query
    const query = {
      text: 'SELECT * FROM users WHERE email = $1 AND password = $2',
      values: [email, pass]
    }

    // issue query (returns promise)
    db.query(query)
        .then (results => {

            resultRows = results.rows;

            // no results
            if (resultRows.length < 1) {
                res.status(401).json({
                  "message": "login failed"
                });
                return;
            }

            // everything ok
            resultUser = resultRows[0];
            const token = null;         // TODO: replace with your code
            res.status(200).json({
                "message": "login successful",
                first_name: resultUser.first_name,
                last_name: resultUser.last_name,
                token: token
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
