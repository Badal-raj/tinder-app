const mongoose = require("mongoose");

mongoose.set('strictQuery', true);

const ConnectDB = async () =>{
    try {
       await mongoose.connect(process.env.MONGO_DB_URL || "mongodb://127.0.0.1:27017/dev-tinder");
        console.log("MongoDB connected Successfully");
    } catch (error) {
       console.log(error); 
    }
}

module.exports = {
    ConnectDB
}
