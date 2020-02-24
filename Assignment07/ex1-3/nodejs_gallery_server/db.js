let cfg = require('./config.json')
const { Client } = require('pg');

let client;

let initDb = new Promise((resolve, reject) => {

    // make sure to import 'db_import/createDB.sql' into your PostgreSQL database first

	client = new Client({
	    host: cfg.database.host,
	    user: cfg.database.user,
	    password: cfg.database.password,
	    database: cfg.database.db
	});

	// connect to database (https://node-postgres.com/api/client)
	client.connect((err) => {
		// client.connect(callback: (err: Error) => void) => void
		// err is passed on unsuccessful connections
		if(!err) {
			console.log("Database is connected ...");
			resolve();
		}
		else {
			console.log("Error connecting database ...");
			console.log(err.stack);
			reject();
		}
	});
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
