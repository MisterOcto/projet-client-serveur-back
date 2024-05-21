const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URI)
    }
    catch (error){
        console.log(error)
        process.exit();
    }
};

module.exports = connectDB;