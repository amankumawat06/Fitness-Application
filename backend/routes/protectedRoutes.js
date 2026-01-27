const express = require("express")
const router = express.Router()
const verifyToken = require("../middlewares/authMiddleware")

router.get("/dashboard", verifyToken, (req,res) => {
    res.status(200).json({
        success: true,
        message: "Welcome to dashboard",
        user: req.user
    })
})

module.exports = router