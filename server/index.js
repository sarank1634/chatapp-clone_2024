const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectedDB");
const router = require("./routers/index");

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.use(express.json());

app.get('/', (req, res) => { 
    res.json({ message: 'server is running' });
});

//api routes
app.use('/api', router);


const PORT = process.env.PORT || 8000;

connectDB().then(() => {
    app.listen(PORT, () => { console.log('server is running on http://localhost:' + PORT); 
    });
});

