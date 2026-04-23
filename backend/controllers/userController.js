import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
}

// User Registeration
const registerUser = async(req,res) => {
    try {
        const {name,email,password} = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const existingUser = await userModel.findOne({email});

        if(existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        } else {
            if(!validator.isEmail(email)) {
                return res.json({success: false, message: "Invalid email"});
            }

            if(password.length < 8) {
                return res.json({success: false, message: "Password length should be grater than 8"});
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const newUser = new userModel({
                name,
                email,
                password: hashedPassword
            });

            const user = await newUser.save();
            const token = createToken(user._id);
            res.json({
                success: true,
                token
            })
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

// User Login
const loginUser = async(req,res) => {
    try {
        const {email,password} = req.body;

        if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password are required" });
        }

        const user = await userModel.findOne({ email });

        if(!user) { 
            return res.status(400).json({ success: false, message: "User does not exist" });
        } else {
            const isMatch = await bcrypt.compare(password, user.password);

            if(isMatch) {
                const token = createToken(user._id)
                return res.json({ success: true, token });
            } else {
                return res.status(400).json({ success: false, message: "Incorrect Credentials" });
            }
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

// Admin Login
const loginAdmin = async(req,res) => {
    try {
        const { email, password } = req.body;
        
        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, token})
        } else {
            res.json({success:false, message:"Invalid Credentials"});
        }
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

export { registerUser, loginUser, loginAdmin } 
