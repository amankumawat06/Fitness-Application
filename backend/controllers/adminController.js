require("dotenv").config()
const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const { status } = require("http-status");
const jwt = require("jsonwebtoken")

exports.createTrainer = async (req,res) => {
  try{
    let { name, email, password, role } = req.body;

  let existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(status.ALREADY_REPORTED).json({
      message: "Trainer with this email already exist!, use different email",
    });
  }

  if (!name || !email || !password) {
    return res.status(status.BAD_REQUEST).json({
      message: "All fileds are required!",
    });
  }

  let hashedPassword = await bcrypt.hash(password, 10);

  let newUser = new User({
    name,
    email,
    password: hashedPassword,
    role:"trainer",
  });
  await newUser.save();
  return res.status(status.OK).json({
    success: true,
    message: "Trainer Registred successfully",
    // newUser
  });
  }catch(err){
    res.status(status.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error!"
    })
  }
};