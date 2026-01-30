const express = require("express")
const router = express.Router()
const { createPlan } = require("../controllers/planController")

router.post("/create-plan", createPlan)

module.exports = router