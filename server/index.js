const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = require('./config/connectedDB');

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
  
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send("Hello World!");
})

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })   
})



