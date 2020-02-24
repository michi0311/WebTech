let cfg = require('./config.json')
const { Client } = require('pg');

let client;

let initDb = new Promise((resolve, reject) => {

    // make sure to import 'db_import/createDB.sql' into your PostgreSQL database first
	
	client = new Client({
    host: cfg.database.host,
    user: cfg.database.user,
    password: cfg.database.password,
    database: cfg.database.db,
});

    //TODO: connect to database and resolving/rejecting promise
    reject(); // replace with your code
});

function getDb() {
    if (!client) {
        console.log("Db has not been initialized. Please call init first.");
        return;
    }
    return client;
}

module.exports = {
    getDb,
    initDb
};
