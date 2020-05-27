const Register = require("../models/Register");

loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Register.findOne({ email: email, password: password });
    if (user != null) res.json({ status: true });
    else res.json("User not found");
  } catch (error) {
    res.json(error);
  }
};

module.exports = loginUser;
