import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://fooddelivery:fooddelivery@cluster0.irwvzjg.mongodb.net/foodserver').then(()=>console.log("db connect")
    );
}