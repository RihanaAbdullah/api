const mongoose = require("mongoose")
require("dotenv").config()

const connectDB= async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connection is success")
    }catch(error){
        console.log("MongoDB connectoion failed",error)
        process.exit(1)
    }
}

module.exports = connectDB