const Register = require("../models/Register");

//get all registerd users
getUsers = async (req, res) => {
  try {
    let allusers = await Register.find();
    res.json(allusers);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = getUsers;
