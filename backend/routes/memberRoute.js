const express = require("express")
const router = express.Router()

const verifyToken = require("../middlewares/authMiddleware")
const { isMember } = require("../middlewares/roleMiddleware")
const { setGoal, getPlansByGoal, selectPlan } = require("../controllers/selectedUserGoalController")

// Verify user
router.get("/member/dashboard", verifyToken, isMember, async (req,res) => {
    res.status(200).json({
        succeess: true,
        message: "Welcome to Member dashboard"
    })
})

router.get("/member/plans", verifyToken, isMember, getPlansByGoal)

// Add user goal
router.post("/member/set-goal", verifyToken, isMember, setGoal)


router.post("/member/select-plan", verifyToken, isMember, selectPlan)

module.exports = router