let cfg = require('./config.json')
let express = require('express');
let cors = require('cors')
const app = express();
app.use(express.static('public')); // host public folder
app.use(cors()); // allow all origins -> Access-Control-Allow-Origin: *
const db = require("./db");


let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

// set routes
const loginRoutes = require('./routes/login');
const galleryRoutes = require('./routes/gallery');
const imageRoutes = require('./routes/image');

app.use("/login", loginRoutes);
app.use("/gallery", galleryRoutes);
app.use("/image", imageRoutes);

// default route
app.use("/", (req, res) => {
    res.send("Welcome to gallery server 1.0");
});

db.initDb.then(() => {
    app.listen(cfg.server.port, () => {
        console.log("Listening on port " + cfg.server.port + "...");
    });
}, () => {console.log("Failed to connect to DB!")});
