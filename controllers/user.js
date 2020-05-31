const Register = require("../models/Register");

//get all registerd users
exports.getUsers = async (req, res) => {
  try {
    let allusers = await Register.find();
    res.json(allusers);
  } catch (error) {
    res.json({ message: error });
  }
};

// Get Single User
exports.singleUser = async (req, res) => {
  try {
    let user = await Register.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.json({ message: error });
  }
};
