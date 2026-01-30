const { model } = require("mongoose")
const { workoutPlanSchema } = require("../schemas/planSchema")

const Plan = model("Plan",workoutPlanSchema)

module.exports = { Plan }