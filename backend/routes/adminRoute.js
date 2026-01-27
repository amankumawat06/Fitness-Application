let express = require("express")
let router = express.Router()

const verifyToken = require("../middlewares/authMiddleware")
const { isAdmin } = require("../middlewares/roleMiddleware")

router.get("/admin/dashboard", verifyToken, isAdmin, (req,res) => {
    res.status(200).json({
        success:true,
        message: "Welcome to Adim Dashboard"
    })
})

module.exports = router