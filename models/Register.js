const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RegisterSchema = Schema({
  username: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
  },

  password: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("Register", RegisterSchema);
