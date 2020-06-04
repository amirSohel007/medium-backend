const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CreatePostSchema = Schema({
  title: {type: String, require: true},

  bodytext: { type: String,require: true, },

  comments: {
    type: Array,
  },

  postedBy: {
    type: Schema.Types.ObjectId,
    ref: "Register",
  },

  likes: {
    type: Array,
    default: 0,
  },

});

module.exports = mongoose.model("Post", CreatePostSchema);
