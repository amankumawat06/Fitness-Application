const { Schema } = require("mongoose")

const selectedUserGoalSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required:true,
        unique: true
    },
    goal:{
        type: String,
        enum: ["weight_loss", "weight_gain", "fitness"],
        required: true
    },
    selectedPlan:{
        type: Schema.Types.ObjectId,
        ref: "Plan"
    },
    created_At:{
        type: Date,
        default: Date.now,
    }
})

module.exports = { selectedUserGoalSchema }