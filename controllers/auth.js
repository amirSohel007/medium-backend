const jwt = require("jsonwebtoken");
const Register = require("../models/Register");
const bcrypt = require("bcrypt");

//User Registration
exports.registerUser = async (req, res) => {
  const saltRounds = 10;
  const { username, email, password } = req.body;

  // const token = jwt.sign({email:email}, process.env.PRIVATE_KEY)
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err)
      return res.sendStatus("401").json({ message: "Something went wrong" });

    // Store hash in your password DB.
    try {
      const newuser = new Register({
        username: username,
        email: email,
        password: hash,
      });

      //Strong all details after saving into database
      const userInfo = await newuser.save();

      //Send responce on frontend
      res.json({ userInfo });
    } catch (error) {
      res.json({ message: error });
    }
  });
};

//User Login
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await Register.findOne({ email: email });

    if (user != null) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          //Create Toekn
          const token = jwt.sign({ _id: user._id }, process.env.PRIVATE_KEY);
          const userInfo = {
              _id:user._id,
              username:user.username,
              email:user.email,
              posts:user.posts, 
              followers: user.followers,
              following:user.following}
          res.json({ status: true, token, userInfo });
        } else {
          return res.json({ message: "Password not matched" });
        }
      });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    res.json(error);
  }
};

exports.SignOut = (req, res) => {
  res.json({ status: true });
};

//Check Token
exports.Authorization = (req, res, next) => {
  if (!req.headers) return res.json({ message: "Token must be provided" });

  //Bring Token into Headers
  const authToken = req.headers["authorization"].split(" ")[1];

  //Verify Token
  var user = jwt.verify(authToken, process.env.PRIVATE_KEY);

  if (user) next();
};
