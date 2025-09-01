const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected");

        const connection = mongoose.connection;

        connection.on('connected',() => {
            console.log('MongoDB connected');
        });

        connection.on('error', (err) => {
            console.log('Something is wrong in db', err);
        });
    } catch (error) {
        console.log(error);
    }
};
 
module.exports = connectDB; 