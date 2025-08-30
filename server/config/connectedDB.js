const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
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