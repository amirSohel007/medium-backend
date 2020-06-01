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
    data.creationAt = data.createdAt.toDateString()
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


exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.json({ message: "Post is not exist" });
    } else {
      res.json(post);
    }
  } catch (error) {
    res.json({ message: error });
  }
};

