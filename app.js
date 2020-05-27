const express = require("express");
const app = express();
const connectDB = require("./DB/connection");
const routes = require("./routes/router");
const bodyParser = require("body-parser");
require("dotenv").config();

const PORT = process.env.PORT || 8000;

//Connect databse
connectDB();

//Application middleware
app.use(bodyParser.json());
app.use("/api", routes);

//Starting application
app.listen(PORT, () => console.log("Server up and running !"));
