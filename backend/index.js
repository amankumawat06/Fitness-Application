require("dotenv").config()
const express = require("express")
const app = express()
const { status } = require("http-status")
const  connectToDB  = require("./config/db")
const cors = require("cors")

// Access dotenv varibles 
const port = process.env.PORT

//Connect to DB
connectToDB()

// Middlewares
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(cors("https://fitness-application-rho.vercel.app", "https://fit-track-fitness-application.vercel.app"))
app.use(cors({
    origin: [
        "https://fitness-application-rho.vercel.app",
        "https://fit-track-fitness-application.vercel.app"
    ],
    credentials:true,
}))

//Access routes
const userRouter = require("./routes/userRouter")
const dashboardRoute = require("./routes/protectedRoutes")
const adminDashboard = require("./routes/adminRoute")
const trainerDashboard = require("./routes/trainerRoute")
const memberDashboard = require("./routes/memberRoute")

app.use("/", userRouter)
app.use("/", dashboardRoute)
app.use("/", adminDashboard)
app.use("/", trainerDashboard)
app.use("/", memberDashboard)

app.use((req,res) => {
    return res.status(status.NOT_FOUND).json({
        success: false,
        message: "The path you requested does not exist"
    })
})

app.listen(port, () => {
    console.log(`Server is listening on PORT ${port}`)
})