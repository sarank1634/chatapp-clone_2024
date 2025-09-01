const express = require("express");
const router = express.Router();
const registerUser  = require("../controller/registerUser");
const checkEmail  = require("../controller/checkEmail");


//create user Api
router.post('/register', registerUser);
router.post('/email', checkEmail);


module.exports = router;
