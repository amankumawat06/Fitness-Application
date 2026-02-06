const { User } = require("../models/userModel")
const { status } = require("http-status")

exports.getLoggedInUser = async (req,res) => {
    try{
        let user = await User.findById(req.user.id).select("-password")

        if(!user){
            return res.status(status.NOT_FOUND).json({
                message:"User not found"
            })
        }

        return res.status(status.OK).json({
            success: true,
            user
        })

    }catch(err){
        return res.status(status.INTERNAL_SERVER_ERROR).json({
            message: "Internal server error"
        })
    }
}