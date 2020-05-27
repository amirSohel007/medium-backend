const Post = require("../models/Post");

getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json(error);
  }
};

  module.exports = getPosts