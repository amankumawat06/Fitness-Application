let express = require("express")
let router = express.Router()

const verifyToken = require("../middlewares/authMiddleware")
const { isAdmin } = require("../middlewares/roleMiddleware")
const {createTrainer}  = require("../controllers/adminController")

// Admin Dashboard
router.get("/admin/dashboard", verifyToken, isAdmin, (req,res) => {
    res.status(200).json({
        success:true,
        message: "Welcome to Admin Dashboard"
    })
})

// Admin creates trainner dashboard
router.post("/admin/create-trainer", verifyToken, isAdmin, createTrainer)


module.exports = router