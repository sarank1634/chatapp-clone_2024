const mongoose = require("mongoose");

async function connectDB() {
    try {
        if (!process.env.MONGODB_URL) {
            console.error('MONGODB_URL is not set in environment. Check your .env');
            process.exit(1);
        }

        // Debug: log which MongoDB host we are connecting to (without credentials)
        try {
            const uri = process.env.MONGODB_URL;
            const parsed = new URL(uri);
            console.log('Connecting to MongoDB host:', parsed.host);
        } catch (e) {
            console.log('Connecting to MongoDB (could not parse URI host)');
        }

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