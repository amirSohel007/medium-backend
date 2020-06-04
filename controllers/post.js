const Post = require("../models/Post");
const Register = require("../models/Register");

//Create New Post
exports.createPost = async (req, res) => {
  const { title, bodytext, _id} = req.body;
  try {
    const newpost = new Post({
      title: title,
      bodytext: bodytext,
      postedBy:_id
    });
    const data = await newpost.save(); //save post in db
    let user = await Register.findById(_id);
    user.posts.push(newpost.id)
    await user.save()
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

//get All Posts
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    console.log(posts)
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



