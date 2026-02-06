import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({ // use cors middleware to allow cross-origin requests from the frontend application, and also allow credentials (cookies) to be sent with the requests
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public")) 
app.use(cookieParser()) // used to parse cookies from incoming requests, so that we can access them in our route handlers via req.cookies


//routes import
import userRouter from './routes/user.routes.js'



//routes declaration
app.use("/api/v1/users", userRouter) // http://localhost:8000/api/v1/users/register





export { app }