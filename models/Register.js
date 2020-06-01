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
    type: String,
    require: true,
  },

  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  ],

  followers: {
    type: Array,
  },

  following: {
    type: Array,
  },
});

module.exports = mongoose.model("Register", RegisterSchema);
