const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreatePostSchema = Schema({
  title: {
    type: String,
    require: true,
  },

  bodytext: {
    type: String,
    require: true,
  },

  comments: {
    type: String,
    default: 0,
  },

  likes: {
    type: Array,
    default: 0,
  },

  createdAt: {
    type: Date,
    default:new Date().getTime()
  }
});

module.exports = mongoose.model("Post", CreatePostSchema);
