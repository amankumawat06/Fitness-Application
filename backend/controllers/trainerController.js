const { User } = require("../models/userModel")
const { status } = require("http-status")

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