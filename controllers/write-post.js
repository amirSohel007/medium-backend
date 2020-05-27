const Post = require("../models/Post");

createPost = async (req, res) => {
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

module.exports = createPost;
