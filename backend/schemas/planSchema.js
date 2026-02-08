const { Schema } = require("mongoose")

const workoutPlanSchema = new Schema({
    planName: {
        type: String,
        required: true,
        enum: ["beginner","Intermediate","expert"]
    },
    goal:{
        type: String,
        required: true,
        enum: ["weight_loss","weight_gain","fitness"]
    },
    duration:{
        type:Number,
        required: true 
    },
    exercises:{
        type: String,
        enum: ["Cardio","Squats","Push-up","Plank"]
    }
})

module.exports = { workoutPlanSchema }