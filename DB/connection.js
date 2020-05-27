
const mongoose = require('mongoose')
const connect = mongoose.connect
const DBString = 'mongodb+srv://admin:medium@123#@cluster0-q9jsz.mongodb.net/test?retryWrites=true&w=majority'

//Connect databse
function connectDB(){

connect(DBString, { useNewUrlParser: true}, () => {
     console.log('DB Connected !')
     console.log(mongoose.connection.host);
     console.log(mongoose.connection.port);
    })
}
module.exports = connectDB