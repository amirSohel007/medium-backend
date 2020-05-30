const express = require("express");
const app = express();
const connectDB = require("./DB/connection");
const routes = require("./routes/router");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require('cors')

const PORT = process.env.PORT || 8000;

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

//Connect databse
connectDB();

//Application middleware
app.use(bodyParser.json());
app.use(cors())
app.use("/api", routes);

//Starting application
app.listen(PORT, () => console.log("Server up and running !"));
