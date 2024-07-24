import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

export const  MongoConnection = async()=>{
   mongoose.connect(process.env.MONGO_URI)
      .then(console.log("Database connected"))
      .catch((err)=>{
        console.log("Error", err)
      })

}