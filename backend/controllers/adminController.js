require("dotenv").config()
const { User } = require("../models/userModel");
const { Plan } = require("../models/planModel")
const bcrypt = require("bcrypt");
const { status } = require("http-status");
const jwt = require("jsonwebtoken")

exports.createTrainer = async (req,res) => {
  try{
    let { name, email, password,specialization, role } = req.body;

  let existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(status.ALREADY_REPORTED).json({
      message: "Trainer with this email already exist!, use different email",
    });
  }

  if (!name || !email || !password || !specialization) {
    return res.status(status.BAD_REQUEST).json({
      message: "All fileds are required!",
    });
  }

  let hashedPassword = await bcrypt.hash(password, 10);

  let fullName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

  let newUser = new User({
    name: fullName,
    email,
    specialization,
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

exports.allTrainers = async (req,res) => {
  try{
    let allTrainers = await User.find({role:"trainer"})
    
    if(!allTrainers){
      return res.status(status.NOT_FOUND).json({
        message:"No trainers found!"
      })
    }
    return res.status(status.OK).json({
      success: true,
      allTrainers
    })
  }catch(err){
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message:"Internal server error!!"
    })
  }
}


// exports.removeAllTrainers = async (req,res) => {
//   try{
//     let allTrainers = await User.deleteMany({role:"trainer"})
    
//     if(!allTrainers){
//       return res.status(status.NOT_FOUND).json({
//         message:"No trainers found!"
//       })
//     }
//     return res.status(status.OK).json({
//       success: true,
//       message:"All Trainers Deleted",
//       allTrainers
//     })
//   }catch(err){
//     return res.status(status.INTERNAL_SERVER_ERROR).json({
//       message:"Internal server error!!"
//     })
//   }
// }

exports.allMembers = async (req,res) => {
  try{
    let allMembers = await User.find({role:"member"})
    
    if(!allMembers){
      return res.status(status.NOT_FOUND).json({
        message:"No Members found!"
      })
    }
    return res.status(status.OK).json({
      success: true,
      allMembers
    })
  }catch(err){
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message:"Internal server error!!"
    })
  }
}

exports.allPlans = async (req,res) => {
  try{
    let allPlans = await Plan.find({})
    
    if(!allPlans){
      return res.status(status.NOT_FOUND).json({
        message:"No Plans found!"
      })
    }
    return res.status(status.OK).json({
      success: true,
      allPlans
    })
  }catch(err){
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message:"Internal server error!!"
    })
  }
}