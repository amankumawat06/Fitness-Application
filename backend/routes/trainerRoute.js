const express = require("express")
const router = express.Router()
const verifyToken = require("../middlewares/authMiddleware")
const { isTrainer } = require("../middlewares/roleMiddleware")

router.get("/trainer/dashboard", verifyToken, isTrainer, async (req,res) => {
    res.status(200).json({
        succeess: true,
        message: "Welcome to Trainer dashboard"
    })
})

module.exports = router