require("dotenv").config()
const mongoose = require("mongoose")

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
}


const connectToDB = () => {
    main().then((res) => {
        console.log(`Connected to MongoDB successfully!`)
    }).catch((err) => {
        console.log(`MongoDB connection Error ${err}`)
    })
}


module.exports = connectToDB