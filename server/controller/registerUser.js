// const bcryptjs = require("bcryptjs");
// const UserModel = require("../models/UserModel");

// async function registerUser(req, res) {
//     try{ 
//         console.log("Request body:", req.body);

//         const { name, email, password, profile_pic } = req.body;

//         // Validate required fields
//         if (!name || !email || !password) {
//             return res.status(400).json({ 
//                 message: "Name, email, and password are required", 
//                 error: true 
//             });
//         }

//         const checkEmail = await UserModel.findOne({ email });
//         if (checkEmail) {
//             return res.status(400).json({ message: "User already exists", error: true });
//         }

//         // hash password
//         const salt = await bcryptjs.genSalt(10);
//         const hashedPassword = await bcryptjs.hash(password, salt);

//         const payload = {
//             name,
//             email,
//             profile_pic,
//             password : hashedPassword,
//         };

//         const user = await UserModel.create(payload);
//         const userSave = await user.save();

//         res.status(201).json({ message: "User registered successfully", 
//                               user: userSave, error: false, success: true });
//     } catch (error) {
//         return res.status(500).json({ message: error.message, error: true });
//     }
// }

// module.exports = registerUser;