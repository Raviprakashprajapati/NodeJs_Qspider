import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();


app.use(cors())
// app.use(express.urlencoded())
app.use(cookieParser())
app.use(express.json())


import userRouter from "./routes/user.route.js"

app.use("/api",userRouter)



export default app;

