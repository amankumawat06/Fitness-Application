require("dotenv").config()
const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const { status } = require("http-status");
const jwt = require("jsonwebtoken")

exports.signup = async (req,res) => {
  try{
    let { name, email, password, role } = req.body;

  let existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(status.ALREADY_REPORTED).json({
      message: "Use different Email, The user with this email is already exist",
    });
  }

  if (!name || !email || !password || !role) {
    return res.status(status.BAD_REQUEST).json({
      message: "All fileds are required!",
    });
  }

  let hashedPassword = await bcrypt.hash(password, 10);

  let newUser = new User({
    name,
    email,
    password: hashedPassword,
    role,
  });
  await newUser.save();
  return res.status(status.OK).json({
    success: true,
    message: "User Registred successfully",
    // newUser
  });
  }catch(err){
    res.status(status.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error!"
    })
  }
};


exports.login = async (req,res) => {
  try{
    let { email,password } = req.body;
    let user = await User.findOne({email})
    if(!user){
      return res.status(status.NOT_FOUND).json({
        success: false,
        message: "Invalid email or password!"
      })
      }
      let isPasswordCorrect = await bcrypt.compare(password, user.password)

      if(!isPasswordCorrect){
        return res.status(status.BAD_REQUEST).json({
          success: false,
          message: "Invalid email or password!"
        })
      }

      // JWT Token Generation
      const token = jwt.sign(
        {
        id: user._id,     //payload
        role: user.role
       },
       process.env.JWT_SECRET,
       {
        expiresIn: "1d"
       }
    )

      return res.status(status.OK).json({
        success: true,
        message: "User logged In successfully!",
        token
        // user
      })

  }catch(err){
    res.status(status.INTERNAL_SERVER_ERROR).json({
      message: "Internal server error!"
    })
  }
}