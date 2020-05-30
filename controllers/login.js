const Register = require("../models/Register");
const bcrypt = require("bcrypt");

loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await Register.findOne({ email: email });
    if (user != null) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          res.json({ status: true });
        } else {
          return res.json({ message: "Password not matched" });
        }
      });
    } else {
      res.json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = loginUser;
