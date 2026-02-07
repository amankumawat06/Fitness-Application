const express = require("express")
const router = express.Router()

const verifyToken = require("../middlewares/authMiddleware")
const { isMember } = require("../middlewares/roleMiddleware")
const { setGoal, getPlansByGoal, selectPlan, getSelectedPlan } = require("../controllers/selectedUserGoalController")
const { getLoggedInUser } = require("../controllers/memberController")

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

router.get("/member/profile", verifyToken, isMember, getLoggedInUser)

router.get("/member/selected-goal", verifyToken, isMember, getSelectedPlan)


module.exports = router