const express = require("express")
const router = express.Router()
const verifyToken = require("../middlewares/authMiddleware")
const { isTrainer } = require("../middlewares/roleMiddleware")
const { createPlan } = require("../controllers/planController")
const { allMembers } = require("../controllers/trainerController")

router.get("/trainer/dashboard", verifyToken, isTrainer, async (req,res) => {
    res.status(200).json({
        succeess: true,
        message: "Welcome to Trainer dashboard"
    })
})

router.post("/trainer/create-workout", verifyToken, isTrainer,createPlan )

router.get("/tariner/members", verifyToken, isTrainer, allMembers)

module.exports = router