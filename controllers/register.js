const Register = require("../models/Register");

registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newuser = new Register({
      username: username,
      email: email,
      password: password,
    });
    const data = await newuser.save();
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = registerUser;
