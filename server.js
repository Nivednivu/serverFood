import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import foodRouter from './routes/foodRouter.js'
import userRouter from './routes/userRoutes.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'


// app config

const app =express()
const port =4000

// middleware
app.use(express.json())
app.use(cors())

// db connect
connectDB()

// api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.get("/",(req,res)=>{
   res.send("API Workin")
})

app.listen(port,()=>{
    console.log(`Server Started on http:/localhost:${port}`);
     
})
// mongodb+srv://fooddelivery:fooddelivery@cluster0.irwvzjg.mongodb.net/? 