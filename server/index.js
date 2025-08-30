const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));

app.get('/', (req, res) => { 
    res.json({ message: 'server is running' });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => { console.log('server is running on port', PORT); 
});

