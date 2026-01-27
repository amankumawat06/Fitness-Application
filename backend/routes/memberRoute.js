const express = require("express")
const router = express.Router()
const verifyToken = require("../middlewares/authMiddleware")
const { isMember } = require("../middlewares/roleMiddleware")

router.get("/member/dashboard", verifyToken, isMember, async (req,res) => {
    res.status(200).status({
        succeess: true,
        message: "Welcome to Member dashboard"
    })
})

module.exports = router