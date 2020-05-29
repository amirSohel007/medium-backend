const mongoose = require('mongoose')
const connect = mongoose.connect

//Connect databse
function connectDB(){
connect(process.env.DB_CONNECTION.toString(), { useNewUrlParser: true }, () => console.log("DB Connected !"));
}

module.exports = connectDB