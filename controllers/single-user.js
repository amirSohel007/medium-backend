const Register = require("../models/Register");

singleUser = async (req, res) => {
  try {
    let user = await Register.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = singleUser;
