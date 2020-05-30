const Register = require("../models/Register");
const bcrypt = require("bcrypt");

registerUser = async (req, res) => {
  const saltRounds = 10;
  const { username, email, password } = req.body;
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err)
      return res.sendStatus("401").json({ message: "something went wrong" });
    // Store hash in your password DB.
    try {
      const newuser = new Register({
        username: username,
        email: email,
        password: hash, //assign has to password
      });
      const data = await newuser.save();
      data.password = hash;
      res.json(data);
    } catch (error) {
      res.json({ message: error });
    }
  });
};

module.exports = registerUser;
