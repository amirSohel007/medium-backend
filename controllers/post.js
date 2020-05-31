const Post = require("../models/Post");


//Create New Post
exports.createPost = async (req, res) => {
  const { title, bodytext } = req.body;
  try {
    const newpost = new Post({
      title: title,
      bodytext: bodytext,
    });
    const data = await newpost.save();
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

//get All Posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.json({ message: error });
  }
};

