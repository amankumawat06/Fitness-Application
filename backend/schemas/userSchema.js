const { Schema } = require("mongoose")

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    specialization:{
        type: String
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["member","trainer","admin"],
        default: "member"
    }
})

module.exports = { userSchema }