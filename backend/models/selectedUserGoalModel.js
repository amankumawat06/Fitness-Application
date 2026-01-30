const { model } = require("mongoose")
const { selectedUserGoalSchema } = require("../schemas/selectedUserGoalSchema")

const selectedUserGoal = model("selectedUserGoal", selectedUserGoalSchema)

module.exports = { selectedUserGoal }