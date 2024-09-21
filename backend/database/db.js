const mongoose = require("mongoose")

 async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/Svelte_healthcare" , {
          
        })
        console.log("Database is connected");
        
    } catch (error) {
        console.log("Database is not connected" , error)
        process.exit(1);
    }
    
 }

module.exports = connectDB;
