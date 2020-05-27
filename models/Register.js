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

  posts: {
    type: Array,
    default: 0,
  },

  followers: {
    type: Array,
    default: 0,
  },

  following: {
    type: Array,
    default: 0,
  },
});

module.exports = mongoose.model("Register", RegisterSchema);
